import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file suggestions.proto.
 */
export declare const file_suggestions: GenFile;
/**
 * @generated from message warp.multi_agent.v1.Suggestions
 */
export type Suggestions = Message<"warp.multi_agent.v1.Suggestions"> & {
    /**
     * @generated from field: repeated warp.multi_agent.v1.SuggestedRule rules = 1;
     */
    rules: SuggestedRule[];
    /**
     * @generated from field: repeated warp.multi_agent.v1.SuggestedAgentModeWorkflow workflows = 2;
     */
    workflows: SuggestedAgentModeWorkflow[];
};
/**
 * Describes the message warp.multi_agent.v1.Suggestions.
 * Use `create(SuggestionsSchema)` to create a new message.
 */
export declare const SuggestionsSchema: GenMessage<Suggestions>;
/**
 * @generated from message warp.multi_agent.v1.SuggestedRule
 */
export type SuggestedRule = Message<"warp.multi_agent.v1.SuggestedRule"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string content = 2;
     */
    content: string;
    /**
     * @generated from field: string logging_id = 3;
     */
    loggingId: string;
};
/**
 * Describes the message warp.multi_agent.v1.SuggestedRule.
 * Use `create(SuggestedRuleSchema)` to create a new message.
 */
export declare const SuggestedRuleSchema: GenMessage<SuggestedRule>;
/**
 * @generated from message warp.multi_agent.v1.SuggestedAgentModeWorkflow
 */
export type SuggestedAgentModeWorkflow = Message<"warp.multi_agent.v1.SuggestedAgentModeWorkflow"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string prompt = 2;
     */
    prompt: string;
    /**
     * @generated from field: string logging_id = 3;
     */
    loggingId: string;
};
/**
 * Describes the message warp.multi_agent.v1.SuggestedAgentModeWorkflow.
 * Use `create(SuggestedAgentModeWorkflowSchema)` to create a new message.
 */
export declare const SuggestedAgentModeWorkflowSchema: GenMessage<SuggestedAgentModeWorkflow>;
