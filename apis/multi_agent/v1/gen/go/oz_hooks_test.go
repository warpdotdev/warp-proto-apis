package v1

import (
	"bytes"
	"testing"

	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/reflect/protoreflect"
)

func TestOzHooksDisabledForClientsWithoutCapability(t *testing.T) {
	settings := Request_Settings_builder{}.Build()
	request := Request_builder{Settings: settings}.Build()

	if request.GetSettings().GetSupportsOzLifecycleHooks() {
		t.Fatal("Oz lifecycle hooks should default to unsupported")
	}
	if request.GetOzHookContext() != nil {
		t.Fatal("Oz hook context should be absent by default")
	}
}

func TestOzHookProtocolFieldNumbers(t *testing.T) {
	tests := []struct {
		message protoreflect.MessageDescriptor
		fields  map[protoreflect.Name]protoreflect.FieldNumber
	}{
		{
			message: (&Request{}).ProtoReflect().Descriptor(),
			fields: map[protoreflect.Name]protoreflect.FieldNumber{
				"oz_hook_context": 7,
			},
		},
		{
			message: (&Request_Settings{}).ProtoReflect().Descriptor(),
			fields: map[protoreflect.Name]protoreflect.FieldNumber{
				"supports_oz_lifecycle_hooks": 34,
			},
		},
		{
			message: (&Request_Input_UserInputs_UserInput{}).ProtoReflect().Descriptor(),
			fields: map[protoreflect.Name]protoreflect.FieldNumber{
				"oz_hook_result": 9,
			},
		},
		{
			message: (&ResponseEvent_StreamInit{}).ProtoReflect().Descriptor(),
			fields: map[protoreflect.Name]protoreflect.FieldNumber{
				"supported_oz_hook_payload_schema_versions": 4,
			},
		},
		{
			message: (&ClientAction{}).ProtoReflect().Descriptor(),
			fields: map[protoreflect.Name]protoreflect.FieldNumber{
				"run_oz_hook": 15,
			},
		},
		{
			message: (&RunOzHook{}).ProtoReflect().Descriptor(),
			fields: map[protoreflect.Name]protoreflect.FieldNumber{
				"invocation_id":    1,
				"tool_use_id":      2,
				"event":            3,
				"schema_version":   4,
				"redacted_payload": 5,
			},
		},
		{
			message: (&OzHookResult{}).ProtoReflect().Descriptor(),
			fields: map[protoreflect.Name]protoreflect.FieldNumber{
				"invocation_id": 1,
				"tool_use_id":   2,
				"continue":      3,
				"deny":          4,
				"failed":        5,
				"cancelled":     6,
			},
		},
	}

	for _, test := range tests {
		for name, number := range test.fields {
			field := test.message.Fields().ByName(name)
			if field == nil {
				t.Fatalf("%s is missing field %s", test.message.FullName(), name)
			}
			if field.Number() != number {
				t.Errorf("%s.%s has field number %d, want %d", test.message.FullName(), name, field.Number(), number)
			}
		}
	}
}

func TestOzHookEventValuesAndUnknownFutureValueRoundTrip(t *testing.T) {
	events := []struct {
		event OzHookEvent
		value int32
	}{
		{OzHookEvent_OZ_HOOK_EVENT_UNSPECIFIED, 0},
		{OzHookEvent_OZ_HOOK_EVENT_SESSION_START, 1},
		{OzHookEvent_OZ_HOOK_EVENT_SESSION_END, 2},
		{OzHookEvent_OZ_HOOK_EVENT_USER_PROMPT_SUBMIT, 3},
		{OzHookEvent_OZ_HOOK_EVENT_STOP, 4},
		{OzHookEvent_OZ_HOOK_EVENT_PRE_TOOL_USE, 5},
		{OzHookEvent_OZ_HOOK_EVENT_POST_TOOL_USE, 6},
		{OzHookEvent_OZ_HOOK_EVENT_PRE_COMPACT, 7},
	}
	for _, event := range events {
		if int32(event.event) != event.value {
			t.Errorf("%s has value %d, want %d", event.event, event.event, event.value)
		}
	}

	futureEvent := OzHookEvent(1000)
	action := RunOzHook_builder{Event: &futureEvent}.Build()
	encoded, err := proto.Marshal(action)
	if err != nil {
		t.Fatalf("marshal action: %v", err)
	}

	var decoded RunOzHook
	if err := proto.Unmarshal(encoded, &decoded); err != nil {
		t.Fatalf("unmarshal action: %v", err)
	}
	if decoded.GetEvent() != futureEvent {
		t.Fatalf("future event decoded as %d, want %d", decoded.GetEvent(), futureEvent)
	}
}

func TestOzHookResultCorrelationReplayAndOutcomesRoundTrip(t *testing.T) {
	invocationID := "invocation-1"
	toolUseID := "tool-1"
	reason := "blocked"
	source := "project:sha256"
	category := "timed_out"
	denyAction := OzHookResult_RESOLVED_ACTION_DENY

	results := []*OzHookResult{
		OzHookResult_builder{
			InvocationId: &invocationID,
			ToolUseId:    &toolUseID,
			Continue:     OzHookResult_Continue_builder{}.Build(),
		}.Build(),
		OzHookResult_builder{
			InvocationId: &invocationID,
			ToolUseId:    &toolUseID,
			Deny: OzHookResult_Deny_builder{
				Reason: &reason,
				Source: &source,
			}.Build(),
		}.Build(),
		OzHookResult_builder{
			InvocationId: &invocationID,
			ToolUseId:    &toolUseID,
			Failed: OzHookResult_Failed_builder{
				Category:       &category,
				ResolvedAction: &denyAction,
			}.Build(),
		}.Build(),
		OzHookResult_builder{
			InvocationId: &invocationID,
			ToolUseId:    &toolUseID,
			Cancelled:    OzHookResult_Cancelled_builder{}.Build(),
		}.Build(),
	}

	for _, result := range results {
		encoded, err := proto.Marshal(result)
		if err != nil {
			t.Fatalf("marshal %s result: %v", result.WhichOutcome(), err)
		}

		var decoded OzHookResult
		if err := proto.Unmarshal(encoded, &decoded); err != nil {
			t.Fatalf("unmarshal %s result: %v", result.WhichOutcome(), err)
		}
		if !proto.Equal(result, &decoded) {
			t.Errorf("%s result changed across wire round trip", result.WhichOutcome())
		}
	}

	identical, err := proto.Marshal(results[0])
	if err != nil {
		t.Fatalf("marshal identical replay: %v", err)
	}
	replay, err := proto.Marshal(proto.Clone(results[0]))
	if err != nil {
		t.Fatalf("marshal replay: %v", err)
	}
	conflicting, err := proto.Marshal(results[1])
	if err != nil {
		t.Fatalf("marshal conflicting replay: %v", err)
	}
	if !bytes.Equal(identical, replay) {
		t.Fatal("identical replay should have identical wire content")
	}
	if bytes.Equal(identical, conflicting) {
		t.Fatal("conflicting replay should have distinct wire content")
	}
}
