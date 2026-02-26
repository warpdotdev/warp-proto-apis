// Common types used in request and response for the multi-agent API.
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_google_protobuf_go_features } from "@bufbuild/protobuf/wkt";
/**
 * Describes the file suggestions.proto.
 */
export const file_suggestions = /*@__PURE__*/ fileDesc("ChFzdWdnZXN0aW9ucy5wcm90bxITd2FycC5tdWx0aV9hZ2VudC52MSKEAQoLU3VnZ2VzdGlvbnMSMQoFcnVsZXMYASADKAsyIi53YXJwLm11bHRpX2FnZW50LnYxLlN1Z2dlc3RlZFJ1bGUSQgoJd29ya2Zsb3dzGAIgAygLMi8ud2FycC5tdWx0aV9hZ2VudC52MS5TdWdnZXN0ZWRBZ2VudE1vZGVXb3JrZmxvdyJCCg1TdWdnZXN0ZWRSdWxlEgwKBG5hbWUYASABKAkSDwoHY29udGVudBgCIAEoCRISCgpsb2dnaW5nX2lkGAMgASgJIk4KGlN1Z2dlc3RlZEFnZW50TW9kZVdvcmtmbG93EgwKBG5hbWUYASABKAkSDgoGcHJvbXB0GAIgASgJEhIKCmxvZ2dpbmdfaWQYAyABKAlCOFouZ2l0aHViLmNvbS93YXJwL3dhcnAtcHJvdG8tYXBpcy9tdWx0aV9hZ2VudC92MZIDBdI+AhADYghlZGl0aW9uc3DoBw", [file_google_protobuf_go_features]);
/**
 * Describes the message warp.multi_agent.v1.Suggestions.
 * Use `create(SuggestionsSchema)` to create a new message.
 */
export const SuggestionsSchema = /*@__PURE__*/ messageDesc(file_suggestions, 0);
/**
 * Describes the message warp.multi_agent.v1.SuggestedRule.
 * Use `create(SuggestedRuleSchema)` to create a new message.
 */
export const SuggestedRuleSchema = /*@__PURE__*/ messageDesc(file_suggestions, 1);
/**
 * Describes the message warp.multi_agent.v1.SuggestedAgentModeWorkflow.
 * Use `create(SuggestedAgentModeWorkflowSchema)` to create a new message.
 */
export const SuggestedAgentModeWorkflowSchema = /*@__PURE__*/ messageDesc(file_suggestions, 2);
