package v1

import (
	"testing"

	"google.golang.org/protobuf/proto"
)

func TestCreateGitCommitRoundTrip(t *testing.T) {
	for _, head := range []string{"unborn", "0123456789abcdef0123456789abcdef01234567"} {
		t.Run(head, func(t *testing.T) {
			call := Message_ToolCall_builder{
				ToolCallId: proto.String("commit-action"),
				GithubTurn: GitHubTurnReference_builder{
					RunId:       proto.String("run"),
					ExecutionId: proto.Int64(42),
					InputUid:    proto.String("input"),
				}.Build(),
				CreateGitCommit: Message_ToolCall_CreateGitCommit_builder{
					RepositoryPath: proto.String("/workspace/repo"),
					Message:        proto.String("Fix the test"),
					ExpectedHead:   proto.String(head),
				}.Build(),
			}.Build()
			data, err := proto.Marshal(call)
			if err != nil {
				t.Fatal(err)
			}
			var decoded Message_ToolCall
			if err := proto.Unmarshal(data, &decoded); err != nil {
				t.Fatal(err)
			}
			if !proto.Equal(call, &decoded) {
				t.Fatalf("commit action changed on the wire: %v", &decoded)
			}
		})
	}
}

func TestCreateGitCommitResultRoundTrip(t *testing.T) {
	for _, result := range []*CreateGitCommitResult{
		CreateGitCommitResult_builder{
			Success: CreateGitCommitResult_Success_builder{
				CommitSha: proto.String("0123456789abcdef0123456789abcdef01234567"),
			}.Build(),
		}.Build(),
		CreateGitCommitResult_builder{
			Error: CreateGitCommitResult_Error_builder{
				Message: proto.String("Commit outcome is uncertain; inspect HEAD before retrying."),
			}.Build(),
		}.Build(),
	} {
		input := Request_Input_ToolCallResult_builder{
			ToolCallId:      proto.String("commit-action"),
			CreateGitCommit: result,
		}.Build()
		data, err := proto.Marshal(input)
		if err != nil {
			t.Fatal(err)
		}
		var decoded Request_Input_ToolCallResult
		if err := proto.Unmarshal(data, &decoded); err != nil {
			t.Fatal(err)
		}
		if !proto.Equal(input, &decoded) {
			t.Fatalf("commit result changed on the wire: %v", &decoded)
		}
	}
}
