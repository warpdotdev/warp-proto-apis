package v1_test

import (
	"testing"

	v1 "github.com/warpdotdev/warp-proto-apis/apis/multi_agent/v1/gen/go"
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/reflect/protodesc"
	"google.golang.org/protobuf/reflect/protoregistry"
	"google.golang.org/protobuf/types/dynamicpb"
)

func TestLinkedBillingUsageOlderReader(t *testing.T) {
	tokens := uint64(123)
	usage := v1.InferenceUsage_builder{
		TokenCount: v1.TokenCount_builder{Input: &tokens}.Build(),
	}.Build()
	original := v1.ChargedUsage_builder{
		DirectApiInferenceUsage:           map[string]*v1.InferenceUsage{"gpt": usage},
		ClaudeLinkedBillingInferenceUsage: map[string]*v1.InferenceUsage{"claude": usage},
	}.Build()
	data, err := proto.Marshal(original)
	if err != nil {
		t.Fatal(err)
	}

	file := protodesc.ToFileDescriptorProto(original.ProtoReflect().Descriptor().ParentFile())
	for _, message := range file.MessageType {
		if message.GetName() == "ChargedUsage" {
			message.Field = message.Field[:len(message.Field)-1]
		}
	}
	olderFile, err := protodesc.NewFile(file, protoregistry.GlobalFiles)
	if err != nil {
		t.Fatal(err)
	}
	older := dynamicpb.NewMessage(olderFile.Messages().ByName("ChargedUsage"))
	if err := proto.Unmarshal(data, older); err != nil {
		t.Fatal(err)
	}
	direct := older.Descriptor().Fields().ByName("direct_api_inference_usage")
	if older.Get(direct).Map().Len() != 1 {
		t.Fatal("existing payer usage was not preserved")
	}
	roundTrip, err := proto.Marshal(older)
	if err != nil {
		t.Fatal(err)
	}
	var decoded v1.ChargedUsage
	if err := proto.Unmarshal(roundTrip, &decoded); err != nil {
		t.Fatal(err)
	}
	if decoded.GetClaudeLinkedBillingInferenceUsage()["claude"].GetTokenCount().GetInput() != tokens {
		t.Fatal("older reader did not preserve linked usage as an unknown field")
	}
	if len(decoded.GetByokInferenceUsage()) != 0 {
		t.Fatal("linked usage was mislabeled as BYOK")
	}
}
