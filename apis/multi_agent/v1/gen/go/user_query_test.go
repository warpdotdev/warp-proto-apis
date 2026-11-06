package v1

import (
	"testing"

	"google.golang.org/protobuf/proto"
)

func TestUserQueryInputUIDRoundTrip(t *testing.T) {
	for _, inputUID := range []string{"", "accepted-query-id"} {
		t.Run(inputUID, func(t *testing.T) {
			query := &Request_Input_UserQuery{}
			query.SetQuery("Fix the tests")
			if inputUID != "" {
				query.SetInputUid(inputUID)
			}

			data, err := proto.Marshal(query)
			if err != nil {
				t.Fatal(err)
			}
			var decoded Request_Input_UserQuery
			if err := proto.Unmarshal(data, &decoded); err != nil {
				t.Fatal(err)
			}
			if !proto.Equal(query, &decoded) {
				t.Fatalf("query or input ID changed on the wire: %v", &decoded)
			}
		})
	}
}
