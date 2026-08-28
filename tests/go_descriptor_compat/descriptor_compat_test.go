package descriptorcompat

import (
	"testing"

	_ "github.com/warpdotdev/warp-proto-apis/apis/conversation_mutation/v1/gen/go"
	_ "github.com/warpdotdev/warp-proto-apis/apis/multi_agent/v1/gen/go"
	"google.golang.org/protobuf/reflect/protoregistry"
)

func TestConversationMutationAndMultiAgentDescriptorsCanRegisterTogether(t *testing.T) {
	if _, err := protoregistry.GlobalFiles.FindFileByPath("options.proto"); err != nil {
		t.Fatalf("multi-agent options descriptor not registered: %v", err)
	}
	if _, err := protoregistry.GlobalFiles.FindFileByPath(
		"warp/conversation_mutation/v1/options.proto",
	); err != nil {
		t.Fatalf("conversation-mutation options descriptor not registered: %v", err)
	}
}
