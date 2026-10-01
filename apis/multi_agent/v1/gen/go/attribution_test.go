package v1

import (
	"testing"

	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/reflect/protoreflect"
)

func TestExternalMessageAzureDevOps(t *testing.T) {
	t.Run("additive platform and sensitive fields", func(t *testing.T) {
		fields := (&ExternalMessage{}).ProtoReflect().Descriptor().Fields()
		if fields.ByName("teams").Number() != 13 || fields.ByName("azure_devops").Number() != 14 {
			t.Fatal("platform wire numbers changed")
		}
		azure := (&ExternalMessage_AzureDevOps{}).ProtoReflect().Descriptor().Fields()
		for _, name := range []protoreflect.Name{"organization_name", "project_id", "project_name", "repository_id", "repository_name", "assignee", "added_tags"} {
			if proto.GetExtension(azure.ByName(name).Options(), E_Sensitive) != true {
				t.Errorf("%s must be sensitive", name)
			}
		}
	})
	t.Run("old Teams message decodes unchanged", func(t *testing.T) {
		// Field 13 is a Teams message with team_id = "t".
		wire := []byte{0x6a, 3, 0x0a, 1, 't'}
		message := &ExternalMessage{}
		if err := proto.Unmarshal(wire, message); err != nil {
			t.Fatal(err)
		}
		if message.GetTeams().GetTeamId() != "t" || message.HasAzureDevops() {
			t.Fatal("legacy platform changed")
		}
	})
	t.Run("Azure metadata round trip", func(t *testing.T) {
		message := ExternalMessage_builder{
			Body: proto.String("original comment"),
			AzureDevops: ExternalMessage_AzureDevOps_builder{
				OrganizationName: proto.String("acme"), ProjectName: proto.String("Platform"),
				RepositoryName: proto.String("server"), PullRequestId: proto.Int32(42),
				CommentId: proto.Int32(7),
			}.Build(),
		}.Build()
		wire, err := proto.Marshal(message)
		if err != nil {
			t.Fatal(err)
		}
		decoded := &ExternalMessage{}
		if err := proto.Unmarshal(wire, decoded); err != nil {
			t.Fatal(err)
		}
		if !proto.Equal(message, decoded) {
			t.Fatal("source metadata did not survive serialization")
		}
	})
}
