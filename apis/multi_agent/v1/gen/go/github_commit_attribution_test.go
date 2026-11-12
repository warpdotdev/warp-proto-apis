package v1

import (
	"testing"

	"google.golang.org/protobuf/proto"
)

func TestDelegatedGitHubCommitAttributionRoundTrip(t *testing.T) {
	for _, uid := range []string{"", "human-uid"} {
		t.Run(uid, func(t *testing.T) {
			credit := RunAgents_GitHubCommitAttribution_builder{CoauthorUserUid: &uid}.Build()
			for _, message := range []proto.Message{
				RunAgents_builder{GithubCommitAttribution: credit}.Build(),
				SendMessageToAgent_builder{GithubCommitAttribution: credit}.Build(),
				Message_MessagesReceivedFromAgents_ReceivedMessage_builder{GithubCommitAttribution: credit}.Build(),
			} {
				t.Run(string(message.ProtoReflect().Descriptor().Name()), func(t *testing.T) {
					data, err := proto.Marshal(message)
					if err != nil {
						t.Fatal(err)
					}
					decoded := message.ProtoReflect().Type().New().Interface()
					if err := proto.Unmarshal(data, decoded); err != nil {
						t.Fatal(err)
					}
					field := decoded.ProtoReflect().Descriptor().Fields().ByName("github_commit_attribution")
					if !decoded.ProtoReflect().Has(field) || !proto.Equal(message, decoded) {
						t.Fatalf("delegation credit did not survive serialization: %v", decoded)
					}
				})
			}
		})
	}
}
