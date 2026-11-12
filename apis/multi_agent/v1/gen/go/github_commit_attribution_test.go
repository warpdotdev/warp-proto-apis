package v1

import (
	"testing"

	"google.golang.org/protobuf/proto"
)

func TestRunAgentsGitHubCommitAttributionRoundTrip(t *testing.T) {
	for _, uid := range []string{"", "human-uid"} {
		t.Run(uid, func(t *testing.T) {
			call := RunAgents_builder{
				GithubCommitAttribution: RunAgents_GitHubCommitAttribution_builder{CoauthorUserUid: &uid}.Build(),
			}.Build()
			data, err := proto.Marshal(call)
			if err != nil {
				t.Fatal(err)
			}
			var decoded RunAgents
			if err := proto.Unmarshal(data, &decoded); err != nil {
				t.Fatal(err)
			}
			if !decoded.HasGithubCommitAttribution() || decoded.GetGithubCommitAttribution().GetCoauthorUserUid() != uid {
				t.Fatalf("delegation credit did not survive serialization: %v", &decoded)
			}
		})
	}
}
