module github.com/warpdotdev/warp-proto-apis/tests/go_descriptor_compat

go 1.23.5

require (
	github.com/warpdotdev/warp-proto-apis/apis/conversation_mutation v0.0.0
	github.com/warpdotdev/warp-proto-apis/apis/multi_agent v0.0.0
	google.golang.org/protobuf v1.36.6
)

replace github.com/warpdotdev/warp-proto-apis/apis/conversation_mutation => ../../apis/conversation_mutation

replace github.com/warpdotdev/warp-proto-apis/apis/multi_agent => ../../apis/multi_agent
