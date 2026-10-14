package v1

import (
	"testing"

	"google.golang.org/protobuf/proto"
)

func TestPiHarnessRoundTrip(t *testing.T) {
	t.Run("remote orchestration config", func(t *testing.T) {
		config := OrchestrationConfig_builder{
			Harness: Harness_builder{Pi: Harness_Pi_builder{}.Build()}.Build(),
			Remote:  OrchestrationConfig_Remote_builder{}.Build(),
		}.Build()
		data, err := proto.Marshal(config)
		if err != nil {
			t.Fatal(err)
		}
		var decoded OrchestrationConfig
		if err := proto.Unmarshal(data, &decoded); err != nil {
			t.Fatal(err)
		}
		if !decoded.GetHarness().HasPi() || !decoded.HasRemote() {
			t.Fatalf("Pi remote config lost on the wire: %v", &decoded)
		}
	})
}
