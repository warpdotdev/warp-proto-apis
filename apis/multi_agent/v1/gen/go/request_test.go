package v1

import (
	"testing"

	"google.golang.org/protobuf/encoding/protojson"
)

func TestSupportsServerSynthesizedClientToolResultsDefaultsToFalse(t *testing.T) {
	settings := Request_Settings_builder{}.Build()

	if settings.GetSupportsServerSynthesizedClientToolResults() {
		t.Fatal("capability should default to false")
	}
}

func TestSupportsServerSynthesizedClientToolResultsJSONRoundTrip(t *testing.T) {
	enabled := true
	settings := Request_Settings_builder{
		SupportsServerSynthesizedClientToolResults: &enabled,
	}.Build()

	encoded, err := protojson.Marshal(settings)
	if err != nil {
		t.Fatalf("marshal settings: %v", err)
	}

	var decoded Request_Settings
	if err := protojson.Unmarshal(encoded, &decoded); err != nil {
		t.Fatalf("unmarshal settings: %v", err)
	}
	if !decoded.GetSupportsServerSynthesizedClientToolResults() {
		t.Fatal("capability should survive JSON round trip")
	}
}
