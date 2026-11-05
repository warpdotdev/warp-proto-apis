package v1

import (
	"testing"

	"google.golang.org/protobuf/reflect/protoreflect"
)

func TestRemovedCommitActionFieldsRemainReserved(t *testing.T) {
	for _, tc := range []struct {
		message protoreflect.ProtoMessage
		number  protoreflect.FieldNumber
		name    protoreflect.Name
	}{
		{&Message_ToolCall{}, 40, "create_git_commit"},
		{&Message_ToolCallResult{}, 43, "create_git_commit"},
		{&Request_Input_ToolCallResult{}, 38, "create_git_commit"},
		{&Request_Settings{}, 37, "supports_create_git_commit"},
	} {
		descriptor := tc.message.ProtoReflect().Descriptor()
		t.Run(string(descriptor.FullName()), func(t *testing.T) {
			if descriptor.Fields().ByNumber(tc.number) != nil || descriptor.Fields().ByName(tc.name) != nil {
				t.Fatal("removed commit field is still present")
			}
			if !descriptor.ReservedRanges().Has(tc.number) || !descriptor.ReservedNames().Has(tc.name) {
				t.Fatal("removed commit field must remain reserved")
			}
		})
	}
}

func TestRemovedCommitToolTypeRemainsReserved(t *testing.T) {
	descriptor := ToolType_RUN_SHELL_COMMAND.Descriptor()
	if descriptor.Values().ByNumber(36) != nil || descriptor.Values().ByName("CREATE_GIT_COMMIT") != nil {
		t.Fatal("removed commit tool type is still present")
	}
	if !descriptor.ReservedRanges().Has(36) || !descriptor.ReservedNames().Has("CREATE_GIT_COMMIT") {
		t.Fatal("removed commit tool type must remain reserved")
	}
}
