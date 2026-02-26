import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { FieldMask } from "@bufbuild/protobuf/wkt";
import type { Suggestions } from "./suggestions_pb";
import type { Message as Message$1, Task } from "./task_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file response.proto.
 */
export declare const file_response: GenFile;
/**
 * A single streamed event returned by the multi-agent API.
 *
 * @generated from message warp.multi_agent.v1.ResponseEvent
 */
export type ResponseEvent = Message<"warp.multi_agent.v1.ResponseEvent"> & {
    /**
     * The type of the event.
     *
     * @generated from oneof warp.multi_agent.v1.ResponseEvent.type
     */
    type: {
        /**
         * An event to indicate the stream has successfully started.
         * Sent exactly once as the first streamed event.
         *
         * @generated from field: warp.multi_agent.v1.ResponseEvent.StreamInit init = 1;
         */
        value: ResponseEvent_StreamInit;
        case: "init";
    } | {
        /**
         * An event to relay actions that the client should apply.
         *
         * @generated from field: warp.multi_agent.v1.ResponseEvent.ClientActions client_actions = 2;
         */
        value: ResponseEvent_ClientActions;
        case: "clientActions";
    } | {
        /**
         * Sent exactly once as the final event for streams that finished
         * gracefully.
         *
         * @generated from field: warp.multi_agent.v1.ResponseEvent.StreamFinished finished = 3;
         */
        value: ResponseEvent_StreamFinished;
        case: "finished";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.
 * Use `create(ResponseEventSchema)` to create a new message.
 */
export declare const ResponseEventSchema: GenMessage<ResponseEvent>;
/**
 * @generated from message warp.multi_agent.v1.ResponseEvent.StreamInit
 */
export type ResponseEvent_StreamInit = Message<"warp.multi_agent.v1.ResponseEvent.StreamInit"> & {
    /**
     * A unique ID for this conversation.
     *
     * If the request started a new conversation, this is a newly generated ID.
     * Else, if it continued an existing conversation, this is the same
     * conversation ID provided in the request.
     *
     * This should be round-tripped back to the server for any subsequent
     * requests that continue this conversation.
     *
     * @generated from field: string conversation_id = 1;
     */
    conversationId: string;
    /**
     * A unique ID for this request.
     *
     * This is mainly used for logging and analytics, so we can join client
     * telemetry events on this ID.
     *
     * @generated from field: string request_id = 2;
     */
    requestId: string;
};
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamInit.
 * Use `create(ResponseEvent_StreamInitSchema)` to create a new message.
 */
export declare const ResponseEvent_StreamInitSchema: GenMessage<ResponseEvent_StreamInit>;
/**
 * @generated from message warp.multi_agent.v1.ResponseEvent.ClientActions
 */
export type ResponseEvent_ClientActions = Message<"warp.multi_agent.v1.ResponseEvent.ClientActions"> & {
    /**
     * @generated from field: repeated warp.multi_agent.v1.ClientAction actions = 1;
     */
    actions: ClientAction[];
};
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.ClientActions.
 * Use `create(ResponseEvent_ClientActionsSchema)` to create a new message.
 */
export declare const ResponseEvent_ClientActionsSchema: GenMessage<ResponseEvent_ClientActions>;
/**
 * @generated from message warp.multi_agent.v1.ResponseEvent.StreamFinished
 */
export type ResponseEvent_StreamFinished = Message<"warp.multi_agent.v1.ResponseEvent.StreamFinished"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.ResponseEvent.StreamFinished.reason
     */
    reason: {
        /**
         * @generated from field: warp.multi_agent.v1.ResponseEvent.StreamFinished.Other other = 1;
         */
        value: ResponseEvent_StreamFinished_Other;
        case: "other";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ResponseEvent.StreamFinished.Done done = 2;
         */
        value: ResponseEvent_StreamFinished_Done;
        case: "done";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ResponseEvent.StreamFinished.ReachedMaxTokenLimit max_token_limit = 3;
         */
        value: ResponseEvent_StreamFinished_ReachedMaxTokenLimit;
        case: "maxTokenLimit";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ResponseEvent.StreamFinished.QuotaLimit quota_limit = 4;
         */
        value: ResponseEvent_StreamFinished_QuotaLimit;
        case: "quotaLimit";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ResponseEvent.StreamFinished.ContextWindowExceeded context_window_exceeded = 5;
         */
        value: ResponseEvent_StreamFinished_ContextWindowExceeded;
        case: "contextWindowExceeded";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ResponseEvent.StreamFinished.LLMUnavailable llm_unavailable = 6;
         */
        value: ResponseEvent_StreamFinished_LLMUnavailable;
        case: "llmUnavailable";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ResponseEvent.StreamFinished.InternalError internal_error = 7;
         */
        value: ResponseEvent_StreamFinished_InternalError;
        case: "internalError";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ResponseEvent.StreamFinished.InvalidApiKey invalid_api_key = 12;
         */
        value: ResponseEvent_StreamFinished_InvalidApiKey;
        case: "invalidApiKey";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * Internal-only field containing per-model token usage incurred in producing the response
     * stream.
     *
     * @generated from field: repeated warp.multi_agent.v1.ResponseEvent.StreamFinished.TokenUsage token_usage = 8;
     */
    tokenUsage: ResponseEvent_StreamFinished_TokenUsage[];
    /**
     * `true` if the client should refresh its model config, typically if the model config in the
     * request implies the client's model config is stale.
     *
     * @generated from field: bool should_refresh_model_config = 9;
     */
    shouldRefreshModelConfig: boolean;
    /**
     * Describes what we charged the user for this AM request.
     *
     * @generated from field: warp.multi_agent.v1.ResponseEvent.StreamFinished.RequestCost request_cost = 10;
     */
    requestCost?: ResponseEvent_StreamFinished_RequestCost;
    /**
     * Aggregated usage metadata for a given conversation.
     *
     * @generated from field: warp.multi_agent.v1.ResponseEvent.StreamFinished.ConversationUsageMetadata conversation_usage_metadata = 11;
     */
    conversationUsageMetadata?: ResponseEvent_StreamFinished_ConversationUsageMetadata;
};
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.
 * Use `create(ResponseEvent_StreamFinishedSchema)` to create a new message.
 */
export declare const ResponseEvent_StreamFinishedSchema: GenMessage<ResponseEvent_StreamFinished>;
/**
 * @generated from message warp.multi_agent.v1.ResponseEvent.StreamFinished.ConversationUsageMetadata
 */
export type ResponseEvent_StreamFinished_ConversationUsageMetadata = Message<"warp.multi_agent.v1.ResponseEvent.StreamFinished.ConversationUsageMetadata"> & {
    /**
     * The fraction of the base model's context window that is used in the current conversation (i.e. total tokens / model context window).
     *
     * @generated from field: float context_window_usage = 1;
     */
    contextWindowUsage: number;
    /**
     * Whether messages were summarized for the agent because the conversation got too big (i.e. the context window was too full)
     *
     * @generated from field: bool summarized = 2;
     */
    summarized: boolean;
    /**
     * The total number of credits spent so far in the conversation.
     *
     * @generated from field: float credits_spent = 3;
     */
    creditsSpent: number;
    /**
     * Token usage across every model used so far in the conversation.
     * This has been deprecated. Use warp_token_usage and byok_token_usage instead.
     *
     * @generated from field: repeated warp.multi_agent.v1.ResponseEvent.StreamFinished.ModelTokenUsage token_usage = 4 [deprecated = true];
     * @deprecated
     */
    tokenUsage: ResponseEvent_StreamFinished_ModelTokenUsage[];
    /**
     * Tool usage data across every tool the agent could use (excluding some passive and server tools).
     *
     * @generated from field: warp.multi_agent.v1.ResponseEvent.StreamFinished.ToolUsageMetadata tool_usage_metadata = 5;
     */
    toolUsageMetadata?: ResponseEvent_StreamFinished_ToolUsageMetadata;
    /**
     * Token usage using the warp API key.
     *
     * @generated from field: map<string, warp.multi_agent.v1.ResponseEvent.StreamFinished.ModelTokenUsage> warp_token_usage = 6;
     */
    warpTokenUsage: {
        [key: string]: ResponseEvent_StreamFinished_ModelTokenUsage;
    };
    /**
     * Token usage using a user's API key.
     *
     * @generated from field: map<string, warp.multi_agent.v1.ResponseEvent.StreamFinished.ModelTokenUsage> byok_token_usage = 7;
     */
    byokTokenUsage: {
        [key: string]: ResponseEvent_StreamFinished_ModelTokenUsage;
    };
};
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.ConversationUsageMetadata.
 * Use `create(ResponseEvent_StreamFinished_ConversationUsageMetadataSchema)` to create a new message.
 */
export declare const ResponseEvent_StreamFinished_ConversationUsageMetadataSchema: GenMessage<ResponseEvent_StreamFinished_ConversationUsageMetadata>;
/**
 * Token usage by model.
 * We maintain this message type in addition to the more detailed TokenUsage
 * type as this message is used to track simple token usage stats on a per-model
 * basis, while TokenUsage is used to track much more granular data.
 *
 * @generated from message warp.multi_agent.v1.ResponseEvent.StreamFinished.ModelTokenUsage
 */
export type ResponseEvent_StreamFinished_ModelTokenUsage = Message<"warp.multi_agent.v1.ResponseEvent.StreamFinished.ModelTokenUsage"> & {
    /**
     * The internal id of the model.
     * This has been deprecated, as we now use the model id as a key to access this value.
     *
     * @generated from field: string model_id = 1 [deprecated = true];
     * @deprecated
     */
    modelId: string;
    /**
     * The total tokens that we have used with the given model in this conversation.
     *
     * @generated from field: uint32 total_tokens = 2;
     */
    totalTokens: number;
    /**
     * Breakdown of total_tokens by usage category (e.g. "primary_agent", "compaction", etc.).
     *
     * @generated from field: map<string, uint32> token_usage_by_category = 3;
     */
    tokenUsageByCategory: {
        [key: string]: number;
    };
};
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.ModelTokenUsage.
 * Use `create(ResponseEvent_StreamFinished_ModelTokenUsageSchema)` to create a new message.
 */
export declare const ResponseEvent_StreamFinished_ModelTokenUsageSchema: GenMessage<ResponseEvent_StreamFinished_ModelTokenUsage>;
/**
 * Tool usage by tool.
 *
 * @generated from message warp.multi_agent.v1.ResponseEvent.StreamFinished.ToolUsageMetadata
 */
export type ResponseEvent_StreamFinished_ToolUsageMetadata = Message<"warp.multi_agent.v1.ResponseEvent.StreamFinished.ToolUsageMetadata"> & {
    /**
     * @generated from field: warp.multi_agent.v1.ResponseEvent.StreamFinished.RunCommandStats run_command_stats = 1;
     */
    runCommandStats?: ResponseEvent_StreamFinished_RunCommandStats;
    /**
     * @generated from field: warp.multi_agent.v1.ResponseEvent.StreamFinished.ToolCallStats read_files_stats = 2;
     */
    readFilesStats?: ResponseEvent_StreamFinished_ToolCallStats;
    /**
     * @generated from field: warp.multi_agent.v1.ResponseEvent.StreamFinished.ToolCallStats search_codebase_stats = 3;
     */
    searchCodebaseStats?: ResponseEvent_StreamFinished_ToolCallStats;
    /**
     * @generated from field: warp.multi_agent.v1.ResponseEvent.StreamFinished.ToolCallStats grep_stats = 4;
     */
    grepStats?: ResponseEvent_StreamFinished_ToolCallStats;
    /**
     * @generated from field: warp.multi_agent.v1.ResponseEvent.StreamFinished.ToolCallStats file_glob_stats = 5;
     */
    fileGlobStats?: ResponseEvent_StreamFinished_ToolCallStats;
    /**
     * @generated from field: warp.multi_agent.v1.ResponseEvent.StreamFinished.ApplyFileDiffStats apply_file_diff_stats = 6;
     */
    applyFileDiffStats?: ResponseEvent_StreamFinished_ApplyFileDiffStats;
    /**
     * @generated from field: warp.multi_agent.v1.ResponseEvent.StreamFinished.ToolCallStats write_to_long_running_shell_command_stats = 7;
     */
    writeToLongRunningShellCommandStats?: ResponseEvent_StreamFinished_ToolCallStats;
    /**
     * @generated from field: warp.multi_agent.v1.ResponseEvent.StreamFinished.ToolCallStats read_mcp_resource_stats = 8;
     */
    readMcpResourceStats?: ResponseEvent_StreamFinished_ToolCallStats;
    /**
     * @generated from field: warp.multi_agent.v1.ResponseEvent.StreamFinished.ToolCallStats call_mcp_tool_stats = 9;
     */
    callMcpToolStats?: ResponseEvent_StreamFinished_ToolCallStats;
    /**
     * @generated from field: warp.multi_agent.v1.ResponseEvent.StreamFinished.ToolCallStats suggest_plan_stats = 10;
     */
    suggestPlanStats?: ResponseEvent_StreamFinished_ToolCallStats;
    /**
     * @generated from field: warp.multi_agent.v1.ResponseEvent.StreamFinished.ToolCallStats suggest_create_plan_stats = 11;
     */
    suggestCreatePlanStats?: ResponseEvent_StreamFinished_ToolCallStats;
    /**
     * @generated from field: warp.multi_agent.v1.ResponseEvent.StreamFinished.ToolCallStats read_shell_command_output_stats = 12;
     */
    readShellCommandOutputStats?: ResponseEvent_StreamFinished_ToolCallStats;
    /**
     * @generated from field: warp.multi_agent.v1.ResponseEvent.StreamFinished.ToolCallStats use_computer_stats = 13;
     */
    useComputerStats?: ResponseEvent_StreamFinished_ToolCallStats;
};
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.ToolUsageMetadata.
 * Use `create(ResponseEvent_StreamFinished_ToolUsageMetadataSchema)` to create a new message.
 */
export declare const ResponseEvent_StreamFinished_ToolUsageMetadataSchema: GenMessage<ResponseEvent_StreamFinished_ToolUsageMetadata>;
/**
 * @generated from message warp.multi_agent.v1.ResponseEvent.StreamFinished.ToolCallStats
 */
export type ResponseEvent_StreamFinished_ToolCallStats = Message<"warp.multi_agent.v1.ResponseEvent.StreamFinished.ToolCallStats"> & {
    /**
     * The number of times this tool has been called in the conversation thus far.
     * This includes tool calls that were rejected or cancelled by the user.
     *
     * @generated from field: int32 count = 1;
     */
    count: number;
};
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.ToolCallStats.
 * Use `create(ResponseEvent_StreamFinished_ToolCallStatsSchema)` to create a new message.
 */
export declare const ResponseEvent_StreamFinished_ToolCallStatsSchema: GenMessage<ResponseEvent_StreamFinished_ToolCallStats>;
/**
 * @generated from message warp.multi_agent.v1.ResponseEvent.StreamFinished.ApplyFileDiffStats
 */
export type ResponseEvent_StreamFinished_ApplyFileDiffStats = Message<"warp.multi_agent.v1.ResponseEvent.StreamFinished.ApplyFileDiffStats"> & {
    /**
     * @generated from field: int32 count = 1;
     */
    count: number;
    /**
     * @generated from field: int32 lines_added = 2;
     */
    linesAdded: number;
    /**
     * @generated from field: int32 lines_removed = 3;
     */
    linesRemoved: number;
    /**
     * The total number of unique files that have been changed in this conversation.
     *
     * @generated from field: int32 files_changed = 4;
     */
    filesChanged: number;
};
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.ApplyFileDiffStats.
 * Use `create(ResponseEvent_StreamFinished_ApplyFileDiffStatsSchema)` to create a new message.
 */
export declare const ResponseEvent_StreamFinished_ApplyFileDiffStatsSchema: GenMessage<ResponseEvent_StreamFinished_ApplyFileDiffStats>;
/**
 * @generated from message warp.multi_agent.v1.ResponseEvent.StreamFinished.RunCommandStats
 */
export type ResponseEvent_StreamFinished_RunCommandStats = Message<"warp.multi_agent.v1.ResponseEvent.StreamFinished.RunCommandStats"> & {
    /**
     * @generated from field: int32 count = 1;
     */
    count: number;
    /**
     * The number of commands that have been succesfully executed
     * (i.e. accepted by the user and run)
     *
     * @generated from field: int32 command_executed = 2;
     */
    commandExecuted: number;
};
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.RunCommandStats.
 * Use `create(ResponseEvent_StreamFinished_RunCommandStatsSchema)` to create a new message.
 */
export declare const ResponseEvent_StreamFinished_RunCommandStatsSchema: GenMessage<ResponseEvent_StreamFinished_RunCommandStats>;
/**
 * @generated from message warp.multi_agent.v1.ResponseEvent.StreamFinished.RequestCost
 */
export type ResponseEvent_StreamFinished_RequestCost = Message<"warp.multi_agent.v1.ResponseEvent.StreamFinished.RequestCost"> & {
    /**
     * The exact, fractional cost of the request.
     *
     * @generated from field: float exact = 1;
     */
    exact: number;
};
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.RequestCost.
 * Use `create(ResponseEvent_StreamFinished_RequestCostSchema)` to create a new message.
 */
export declare const ResponseEvent_StreamFinished_RequestCostSchema: GenMessage<ResponseEvent_StreamFinished_RequestCost>;
/**
 * We maintain this message type in addition to the more sparse ModelTokenUsage
 * type as that message is used to track simple token usage stats on a per-model
 * basis, while this is used to track much more granular data.
 *
 * @generated from message warp.multi_agent.v1.ResponseEvent.StreamFinished.TokenUsage
 */
export type ResponseEvent_StreamFinished_TokenUsage = Message<"warp.multi_agent.v1.ResponseEvent.StreamFinished.TokenUsage"> & {
    /**
     * @generated from field: string model_id = 1;
     */
    modelId: string;
    /**
     * The total number of input tokens incurred for this model.
     *
     * @generated from field: uint32 total_input = 2;
     */
    totalInput: number;
    /**
     * The total number of output tokens incurred for this model.
     *
     * @generated from field: uint32 output = 3;
     */
    output: number;
    /**
     * The total number of input cache read tokens incurred for this model.
     *
     * This is only populated for Anthropic models, which have the only API which provides such
     * granular cached token usage information.
     *
     * @generated from field: uint32 input_cache_read = 4;
     */
    inputCacheRead: number;
    /**
     * The total number of input cache write tokens incurred for this model.
     *
     * This is only populated for Anthropic models, which have the only API which provides such
     * granular cached token usage information.
     *
     * @generated from field: uint32 input_cache_write = 5;
     */
    inputCacheWrite: number;
    /**
     * The cost of this model's token usage in cents.
     *
     * @generated from field: float cost_in_cents = 6;
     */
    costInCents: number;
};
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.TokenUsage.
 * Use `create(ResponseEvent_StreamFinished_TokenUsageSchema)` to create a new message.
 */
export declare const ResponseEvent_StreamFinished_TokenUsageSchema: GenMessage<ResponseEvent_StreamFinished_TokenUsage>;
/**
 * @generated from message warp.multi_agent.v1.ResponseEvent.StreamFinished.Other
 */
export type ResponseEvent_StreamFinished_Other = Message<"warp.multi_agent.v1.ResponseEvent.StreamFinished.Other"> & {};
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.Other.
 * Use `create(ResponseEvent_StreamFinished_OtherSchema)` to create a new message.
 */
export declare const ResponseEvent_StreamFinished_OtherSchema: GenMessage<ResponseEvent_StreamFinished_Other>;
/**
 * @generated from message warp.multi_agent.v1.ResponseEvent.StreamFinished.Done
 */
export type ResponseEvent_StreamFinished_Done = Message<"warp.multi_agent.v1.ResponseEvent.StreamFinished.Done"> & {};
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.Done.
 * Use `create(ResponseEvent_StreamFinished_DoneSchema)` to create a new message.
 */
export declare const ResponseEvent_StreamFinished_DoneSchema: GenMessage<ResponseEvent_StreamFinished_Done>;
/**
 * @generated from message warp.multi_agent.v1.ResponseEvent.StreamFinished.ReachedMaxTokenLimit
 */
export type ResponseEvent_StreamFinished_ReachedMaxTokenLimit = Message<"warp.multi_agent.v1.ResponseEvent.StreamFinished.ReachedMaxTokenLimit"> & {};
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.ReachedMaxTokenLimit.
 * Use `create(ResponseEvent_StreamFinished_ReachedMaxTokenLimitSchema)` to create a new message.
 */
export declare const ResponseEvent_StreamFinished_ReachedMaxTokenLimitSchema: GenMessage<ResponseEvent_StreamFinished_ReachedMaxTokenLimit>;
/**
 * @generated from message warp.multi_agent.v1.ResponseEvent.StreamFinished.QuotaLimit
 */
export type ResponseEvent_StreamFinished_QuotaLimit = Message<"warp.multi_agent.v1.ResponseEvent.StreamFinished.QuotaLimit"> & {};
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.QuotaLimit.
 * Use `create(ResponseEvent_StreamFinished_QuotaLimitSchema)` to create a new message.
 */
export declare const ResponseEvent_StreamFinished_QuotaLimitSchema: GenMessage<ResponseEvent_StreamFinished_QuotaLimit>;
/**
 * @generated from message warp.multi_agent.v1.ResponseEvent.StreamFinished.ContextWindowExceeded
 */
export type ResponseEvent_StreamFinished_ContextWindowExceeded = Message<"warp.multi_agent.v1.ResponseEvent.StreamFinished.ContextWindowExceeded"> & {};
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.ContextWindowExceeded.
 * Use `create(ResponseEvent_StreamFinished_ContextWindowExceededSchema)` to create a new message.
 */
export declare const ResponseEvent_StreamFinished_ContextWindowExceededSchema: GenMessage<ResponseEvent_StreamFinished_ContextWindowExceeded>;
/**
 * @generated from message warp.multi_agent.v1.ResponseEvent.StreamFinished.LLMUnavailable
 */
export type ResponseEvent_StreamFinished_LLMUnavailable = Message<"warp.multi_agent.v1.ResponseEvent.StreamFinished.LLMUnavailable"> & {};
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.LLMUnavailable.
 * Use `create(ResponseEvent_StreamFinished_LLMUnavailableSchema)` to create a new message.
 */
export declare const ResponseEvent_StreamFinished_LLMUnavailableSchema: GenMessage<ResponseEvent_StreamFinished_LLMUnavailable>;
/**
 * @generated from message warp.multi_agent.v1.ResponseEvent.StreamFinished.InvalidApiKey
 */
export type ResponseEvent_StreamFinished_InvalidApiKey = Message<"warp.multi_agent.v1.ResponseEvent.StreamFinished.InvalidApiKey"> & {
    /**
     * @generated from field: warp.multi_agent.v1.LLMProvider provider = 1;
     */
    provider: LLMProvider;
    /**
     * @generated from field: string model_name = 2;
     */
    modelName: string;
};
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.InvalidApiKey.
 * Use `create(ResponseEvent_StreamFinished_InvalidApiKeySchema)` to create a new message.
 */
export declare const ResponseEvent_StreamFinished_InvalidApiKeySchema: GenMessage<ResponseEvent_StreamFinished_InvalidApiKey>;
/**
 * @generated from message warp.multi_agent.v1.ResponseEvent.StreamFinished.InternalError
 */
export type ResponseEvent_StreamFinished_InternalError = Message<"warp.multi_agent.v1.ResponseEvent.StreamFinished.InternalError"> & {
    /**
     * @generated from field: string message = 1;
     */
    message: string;
};
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.InternalError.
 * Use `create(ResponseEvent_StreamFinished_InternalErrorSchema)` to create a new message.
 */
export declare const ResponseEvent_StreamFinished_InternalErrorSchema: GenMessage<ResponseEvent_StreamFinished_InternalError>;
/**
 * Client actions that can be requested in a response
 *
 * @generated from message warp.multi_agent.v1.ClientAction
 */
export type ClientAction = Message<"warp.multi_agent.v1.ClientAction"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.ClientAction.action
     */
    action: {
        /**
         * @generated from field: warp.multi_agent.v1.ClientAction.CreateTask create_task = 1;
         */
        value: ClientAction_CreateTask;
        case: "createTask";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ClientAction.AddMessagesToTask add_messages_to_task = 3;
         */
        value: ClientAction_AddMessagesToTask;
        case: "addMessagesToTask";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ClientAction.UpdateTaskMessage update_task_message = 4;
         */
        value: ClientAction_UpdateTaskMessage;
        case: "updateTaskMessage";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ClientAction.AppendToMessageContent append_to_message_content = 5;
         */
        value: ClientAction_AppendToMessageContent;
        case: "appendToMessageContent";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Suggestions show_suggestions = 6;
         */
        value: Suggestions;
        case: "showSuggestions";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ClientAction.UpdateTaskSummary update_task_summary = 7;
         */
        value: ClientAction_UpdateTaskSummary;
        case: "updateTaskSummary";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ClientAction.UpdateTaskDescription update_task_description = 8;
         */
        value: ClientAction_UpdateTaskDescription;
        case: "updateTaskDescription";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ClientAction.BeginTransaction begin_transaction = 9;
         */
        value: ClientAction_BeginTransaction;
        case: "beginTransaction";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ClientAction.CommitTransaction commit_transaction = 10;
         */
        value: ClientAction_CommitTransaction;
        case: "commitTransaction";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ClientAction.RollbackTransaction rollback_transaction = 11;
         */
        value: ClientAction_RollbackTransaction;
        case: "rollbackTransaction";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ClientAction.StartNewConversation start_new_conversation = 12;
         */
        value: ClientAction_StartNewConversation;
        case: "startNewConversation";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ClientAction.UpdateTaskServerData update_task_server_data = 13;
         */
        value: ClientAction_UpdateTaskServerData;
        case: "updateTaskServerData";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ClientAction.MoveMessagesToNewTask move_messages_to_new_task = 14;
         */
        value: ClientAction_MoveMessagesToNewTask;
        case: "moveMessagesToNewTask";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.ClientAction.
 * Use `create(ClientActionSchema)` to create a new message.
 */
export declare const ClientActionSchema: GenMessage<ClientAction>;
/**
 * Create task action
 *
 * @generated from message warp.multi_agent.v1.ClientAction.CreateTask
 */
export type ClientAction_CreateTask = Message<"warp.multi_agent.v1.ClientAction.CreateTask"> & {
    /**
     * @generated from field: warp.multi_agent.v1.Task task = 1;
     */
    task?: Task;
};
/**
 * Describes the message warp.multi_agent.v1.ClientAction.CreateTask.
 * Use `create(ClientAction_CreateTaskSchema)` to create a new message.
 */
export declare const ClientAction_CreateTaskSchema: GenMessage<ClientAction_CreateTask>;
/**
 * @generated from message warp.multi_agent.v1.ClientAction.UpdateTaskServerData
 */
export type ClientAction_UpdateTaskServerData = Message<"warp.multi_agent.v1.ClientAction.UpdateTaskServerData"> & {
    /**
     * @generated from field: string task_id = 1;
     */
    taskId: string;
    /**
     * @generated from field: string server_data = 2;
     */
    serverData: string;
};
/**
 * Describes the message warp.multi_agent.v1.ClientAction.UpdateTaskServerData.
 * Use `create(ClientAction_UpdateTaskServerDataSchema)` to create a new message.
 */
export declare const ClientAction_UpdateTaskServerDataSchema: GenMessage<ClientAction_UpdateTaskServerData>;
/**
 * Update task description action
 *
 * @generated from message warp.multi_agent.v1.ClientAction.UpdateTaskDescription
 */
export type ClientAction_UpdateTaskDescription = Message<"warp.multi_agent.v1.ClientAction.UpdateTaskDescription"> & {
    /**
     * @generated from field: string task_id = 1;
     */
    taskId: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
};
/**
 * Describes the message warp.multi_agent.v1.ClientAction.UpdateTaskDescription.
 * Use `create(ClientAction_UpdateTaskDescriptionSchema)` to create a new message.
 */
export declare const ClientAction_UpdateTaskDescriptionSchema: GenMessage<ClientAction_UpdateTaskDescription>;
/**
 * Add message to task action
 *
 * @generated from message warp.multi_agent.v1.ClientAction.AddMessagesToTask
 */
export type ClientAction_AddMessagesToTask = Message<"warp.multi_agent.v1.ClientAction.AddMessagesToTask"> & {
    /**
     * @generated from field: string task_id = 1;
     */
    taskId: string;
    /**
     * @generated from field: repeated warp.multi_agent.v1.Message messages = 2;
     */
    messages: Message$1[];
};
/**
 * Describes the message warp.multi_agent.v1.ClientAction.AddMessagesToTask.
 * Use `create(ClientAction_AddMessagesToTaskSchema)` to create a new message.
 */
export declare const ClientAction_AddMessagesToTaskSchema: GenMessage<ClientAction_AddMessagesToTask>;
/**
 * Update task message action
 *
 * @generated from message warp.multi_agent.v1.ClientAction.UpdateTaskMessage
 */
export type ClientAction_UpdateTaskMessage = Message<"warp.multi_agent.v1.ClientAction.UpdateTaskMessage"> & {
    /**
     * ID of the task containing the message.
     *
     * @generated from field: string task_id = 3;
     */
    taskId: string;
    /**
     * @generated from field: warp.multi_agent.v1.Message message = 1;
     */
    message?: Message$1;
    /**
     * @generated from field: google.protobuf.FieldMask mask = 2;
     */
    mask?: FieldMask;
};
/**
 * Describes the message warp.multi_agent.v1.ClientAction.UpdateTaskMessage.
 * Use `create(ClientAction_UpdateTaskMessageSchema)` to create a new message.
 */
export declare const ClientAction_UpdateTaskMessageSchema: GenMessage<ClientAction_UpdateTaskMessage>;
/**
 * Append to message content action
 *
 * @generated from message warp.multi_agent.v1.ClientAction.AppendToMessageContent
 */
export type ClientAction_AppendToMessageContent = Message<"warp.multi_agent.v1.ClientAction.AppendToMessageContent"> & {
    /**
     * ID of the task containing the message.
     *
     * @generated from field: string task_id = 3;
     */
    taskId: string;
    /**
     * @generated from field: warp.multi_agent.v1.Message message = 1;
     */
    message?: Message$1;
    /**
     * Fields in mask must be of type string; content is appended
     *
     * @generated from field: google.protobuf.FieldMask mask = 2;
     */
    mask?: FieldMask;
};
/**
 * Describes the message warp.multi_agent.v1.ClientAction.AppendToMessageContent.
 * Use `create(ClientAction_AppendToMessageContentSchema)` to create a new message.
 */
export declare const ClientAction_AppendToMessageContentSchema: GenMessage<ClientAction_AppendToMessageContent>;
/**
 * Updates the summary of a task
 *
 * @generated from message warp.multi_agent.v1.ClientAction.UpdateTaskSummary
 */
export type ClientAction_UpdateTaskSummary = Message<"warp.multi_agent.v1.ClientAction.UpdateTaskSummary"> & {
    /**
     * @generated from field: string task_id = 1;
     */
    taskId: string;
    /**
     * @generated from field: string summary = 2;
     */
    summary: string;
};
/**
 * Describes the message warp.multi_agent.v1.ClientAction.UpdateTaskSummary.
 * Use `create(ClientAction_UpdateTaskSummarySchema)` to create a new message.
 */
export declare const ClientAction_UpdateTaskSummarySchema: GenMessage<ClientAction_UpdateTaskSummary>;
/**
 * Begins a transaction - messages created and updated during a transaction
 * are provisional and subject to rollback if the server or client encounters
 * an error.
 *
 * @generated from message warp.multi_agent.v1.ClientAction.BeginTransaction
 */
export type ClientAction_BeginTransaction = Message<"warp.multi_agent.v1.ClientAction.BeginTransaction"> & {};
/**
 * Describes the message warp.multi_agent.v1.ClientAction.BeginTransaction.
 * Use `create(ClientAction_BeginTransactionSchema)` to create a new message.
 */
export declare const ClientAction_BeginTransactionSchema: GenMessage<ClientAction_BeginTransaction>;
/**
 * Commits the active transaction - provisional messages are made permanent.
 *
 * @generated from message warp.multi_agent.v1.ClientAction.CommitTransaction
 */
export type ClientAction_CommitTransaction = Message<"warp.multi_agent.v1.ClientAction.CommitTransaction"> & {};
/**
 * Describes the message warp.multi_agent.v1.ClientAction.CommitTransaction.
 * Use `create(ClientAction_CommitTransactionSchema)` to create a new message.
 */
export declare const ClientAction_CommitTransactionSchema: GenMessage<ClientAction_CommitTransaction>;
/**
 * Rolls back the active transaction - provisional messages are discarded.
 *
 * @generated from message warp.multi_agent.v1.ClientAction.RollbackTransaction
 */
export type ClientAction_RollbackTransaction = Message<"warp.multi_agent.v1.ClientAction.RollbackTransaction"> & {};
/**
 * Describes the message warp.multi_agent.v1.ClientAction.RollbackTransaction.
 * Use `create(ClientAction_RollbackTransactionSchema)` to create a new message.
 */
export declare const ClientAction_RollbackTransactionSchema: GenMessage<ClientAction_RollbackTransaction>;
/**
 * Tells the client that a new conversation is started hereafter.
 *
 * @generated from message warp.multi_agent.v1.ClientAction.StartNewConversation
 */
export type ClientAction_StartNewConversation = Message<"warp.multi_agent.v1.ClientAction.StartNewConversation"> & {
    /**
     * @generated from field: string start_from_message_id = 1;
     */
    startFromMessageId: string;
};
/**
 * Describes the message warp.multi_agent.v1.ClientAction.StartNewConversation.
 * Use `create(ClientAction_StartNewConversationSchema)` to create a new message.
 */
export declare const ClientAction_StartNewConversationSchema: GenMessage<ClientAction_StartNewConversation>;
/**
 * Moves a contiguous range of messages into a new task, replacing them
 * in the source task with new messages.
 *
 * @generated from message warp.multi_agent.v1.ClientAction.MoveMessagesToNewTask
 */
export type ClientAction_MoveMessagesToNewTask = Message<"warp.multi_agent.v1.ClientAction.MoveMessagesToNewTask"> & {
    /**
     * ID of the task containing the messages to replace.
     *
     * @generated from field: string source_task_id = 1;
     */
    sourceTaskId: string;
    /**
     * A new task to move the messages into.
     *
     * @generated from field: warp.multi_agent.v1.Task new_task = 2;
     */
    newTask?: Task;
    /**
     * ID of the first message in the range to replace (inclusive).
     *
     * @generated from field: string first_message_id = 3;
     */
    firstMessageId: string;
    /**
     * ID of the last message in the range to replace (inclusive).
     *
     * @generated from field: string last_message_id = 4;
     */
    lastMessageId: string;
    /**
     * The expected number of messages in the range being moved. Acts as a
     * checksum to verify client and server agree on the range contents.
     *
     * @generated from field: uint32 expected_message_count = 5;
     */
    expectedMessageCount: number;
    /**
     * The new messages to insert in place of the source range.  If empty,
     * the messages are simply moved.
     *
     * @generated from field: repeated warp.multi_agent.v1.Message replacement_messages = 6;
     */
    replacementMessages: Message$1[];
};
/**
 * Describes the message warp.multi_agent.v1.ClientAction.MoveMessagesToNewTask.
 * Use `create(ClientAction_MoveMessagesToNewTaskSchema)` to create a new message.
 */
export declare const ClientAction_MoveMessagesToNewTaskSchema: GenMessage<ClientAction_MoveMessagesToNewTask>;
/**
 * @generated from enum warp.multi_agent.v1.LLMProvider
 */
export declare enum LLMProvider {
    /**
     * @generated from enum value: LLM_PROVIDER_UNKNOWN = 0;
     */
    LLM_PROVIDER_UNKNOWN = 0,
    /**
     * @generated from enum value: LLM_PROVIDER_ANTHROPIC = 1;
     */
    LLM_PROVIDER_ANTHROPIC = 1,
    /**
     * @generated from enum value: LLM_PROVIDER_OPENAI = 2;
     */
    LLM_PROVIDER_OPENAI = 2,
    /**
     * @generated from enum value: LLM_PROVIDER_GOOGLE = 3;
     */
    LLM_PROVIDER_GOOGLE = 3,
    /**
     * @generated from enum value: LLM_PROVIDER_XAI = 4;
     */
    LLM_PROVIDER_XAI = 4,
    /**
     * @generated from enum value: LLM_PROVIDER_OPENROUTER = 5;
     */
    LLM_PROVIDER_OPENROUTER = 5,
    /**
     * @generated from enum value: LLM_PROVIDER_AWS_BEDROCK = 6;
     */
    LLM_PROVIDER_AWS_BEDROCK = 6
}
/**
 * Describes the enum warp.multi_agent.v1.LLMProvider.
 */
export declare const LLMProviderSchema: GenEnum<LLMProvider>;
