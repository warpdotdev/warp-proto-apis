package v1

import (
	"testing"

	"google.golang.org/protobuf/encoding/protojson"
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/reflect/protodesc"
	"google.golang.org/protobuf/reflect/protoregistry"
	"google.golang.org/protobuf/types/dynamicpb"
)

func TestCancellationWireCompatibility(t *testing.T) {
	var current AgentEvent_LifecycleEvent
	if err := proto.Unmarshal([]byte{0x32, 0x00}, &current); err != nil {
		t.Fatal(err)
	}
	if !current.HasCancelled() || current.GetCancelled().GetReason() != "" {
		t.Fatalf("old Empty cancellation lost: %v", &current)
	}

	file := protodesc.ToFileDescriptorProto(File_task_proto)
	for _, message := range file.MessageType {
		if message.GetName() != "AgentEvent" {
			continue
		}
		for _, nested := range message.NestedType {
			if nested.GetName() != "LifecycleEvent" {
				continue
			}
			for _, field := range nested.Field {
				if field.GetNumber() == 6 {
					field.TypeName = proto.String(".google.protobuf.Empty")
				}
			}
		}
	}
	oldFile, err := protodesc.NewFile(file, protoregistry.GlobalFiles)
	if err != nil {
		t.Fatal(err)
	}
	old := dynamicpb.NewMessage(oldFile.Messages().ByName("AgentEvent").Messages().ByName("LifecycleEvent"))
	current.SetCancelled(AgentEvent_LifecycleEvent_Cancelled_builder{
		Reason: proto.String("Cancelled by requester"),
	}.Build())
	data, err := proto.Marshal(&current)
	if err != nil {
		t.Fatal(err)
	}
	if err := proto.Unmarshal(data, old); err != nil {
		t.Fatal(err)
	}
	if !old.Has(old.Descriptor().Fields().ByNumber(6)) {
		t.Fatal("old reader lost cancelled status")
	}
	data, err = proto.Marshal(old)
	if err != nil {
		t.Fatal(err)
	}
	if err := proto.Unmarshal(data, &current); err != nil {
		t.Fatal(err)
	}
	if current.GetCancelled().GetReason() != "Cancelled by requester" {
		t.Fatal("unknown reason was not preserved by old binary reader")
	}
	jsonData, err := protojson.Marshal(&current)
	if err != nil {
		t.Fatal(err)
	}
	var decoded AgentEvent_LifecycleEvent
	if err := protojson.Unmarshal(jsonData, &decoded); err != nil {
		t.Fatal(err)
	}
	if decoded.GetCancelled().GetReason() != current.GetCancelled().GetReason() {
		t.Fatal("current JSON reader lost cancellation reason")
	}
	if err := protojson.Unmarshal(jsonData, old); err == nil {
		t.Fatal("strict old ProtoJSON reader unexpectedly accepted a reason")
	}
}
