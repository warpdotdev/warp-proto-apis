import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Duration, Empty, Timestamp } from "@bufbuild/protobuf/wkt";
import type { Citation } from "./citations_pb";
import type { InputContext } from "./input_context_pb";
import type { Attachment, BaseRef, CurrentRef, DiffHunk, DiffSet, LongRunningShellCommandSnapshot } from "./attachment_pb";
import type { AnyFileContent, FileContent, FileContentLineRange } from "./file_content_pb";
import type { DocumentContent } from "./document_content_pb";
import type { CreateTodoList, MarkTodosCompleted, UpdatePendingTodos } from "./todo_pb";
import type { Skill } from "./skill_pb";
import type { JsonObject, Message as Message$1 } from "@bufbuild/protobuf";
/**
 * Describes the file task.proto.
 */
export declare const file_task: GenFile;
/**
 * A task represents a unit of work with messages
 *
 * @generated from message warp.multi_agent.v1.Task
 */
export type Task = Message$1<"warp.multi_agent.v1.Task"> & {
    /**
     * Unique identifier for the task.
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * Short description for the task.
     *
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * Dependencies for task hierarchy and execution order.
     *
     * @generated from field: warp.multi_agent.v1.Task.Dependencies dependencies = 3;
     */
    dependencies?: Task_Dependencies;
    /**
     * Messages associated with this task
     *
     * @generated from field: repeated warp.multi_agent.v1.Message messages = 5;
     */
    messages: Message[];
    /**
     * The task summary. Differs from the task description in that it summarizes
     * what has been done to accomplish the task.
     *
     * @generated from field: string summary = 6;
     */
    summary: string;
    /**
     * An opaque payload that the client should simply roundtrip.
     *
     * @generated from field: string server_data = 8;
     */
    serverData: string;
};
/**
 * Describes the message warp.multi_agent.v1.Task.
 * Use `create(TaskSchema)` to create a new message.
 */
export declare const TaskSchema: GenMessage<Task>;
/**
 * Dependencies for task hierarchy and execution order.
 *
 * @generated from message warp.multi_agent.v1.Task.Dependencies
 */
export type Task_Dependencies = Message$1<"warp.multi_agent.v1.Task.Dependencies"> & {
    /**
     * ID of the parent task, may be null for root tasks.  This task cannot
     * start executing until the parent has started executing.
     *
     * @generated from field: string parent_task_id = 1;
     */
    parentTaskId: string;
};
/**
 * Describes the message warp.multi_agent.v1.Task.Dependencies.
 * Use `create(Task_DependenciesSchema)` to create a new message.
 */
export declare const Task_DependenciesSchema: GenMessage<Task_Dependencies>;
/**
 * @generated from message warp.multi_agent.v1.ReviewComments
 */
export type ReviewComments = Message$1<"warp.multi_agent.v1.ReviewComments"> & {
    /**
     * @generated from field: repeated warp.multi_agent.v1.ReviewComment pending_comments = 1;
     */
    pendingComments: ReviewComment[];
    /**
     * @generated from field: repeated warp.multi_agent.v1.ReviewComment completed_comments = 2;
     */
    completedComments: ReviewComment[];
    /**
     * @generated from field: warp.multi_agent.v1.DiffSet diff_set = 3;
     */
    diffSet?: DiffSet;
};
/**
 * Describes the message warp.multi_agent.v1.ReviewComments.
 * Use `create(ReviewCommentsSchema)` to create a new message.
 */
export declare const ReviewCommentsSchema: GenMessage<ReviewComments>;
/**
 * @generated from message warp.multi_agent.v1.ReviewComment
 */
export type ReviewComment = Message$1<"warp.multi_agent.v1.ReviewComment"> & {
    /**
     * Unique identifier for the review comment.
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string comment = 2;
     */
    comment: string;
    /**
     * The context this comment is associated with. At least one of these must be provided.
     *
     * @generated from oneof warp.multi_agent.v1.ReviewComment.comment_target
     */
    commentTarget: {
        /**
         * The exact file location and line content that this comment is associated with.
         * We need a diff hunk rather than just a starting and ending line number
         * because the latter cannot uniquely identify a deleted line.
         *
         * @generated from field: warp.multi_agent.v1.DiffHunk commented_line = 3;
         */
        value: DiffHunk;
        case: "commentedLine";
    } | {
        /**
         * The file path that this comment is associated with.
         *
         * @generated from field: warp.multi_agent.v1.ReviewComment.CommentedFile commented_file = 4;
         */
        value: ReviewComment_CommentedFile;
        case: "commentedFile";
    } | {
        /**
         * Indicates this comment is associated with the entire diff set.
         *
         * @generated from field: warp.multi_agent.v1.ReviewComment.CommentedDiffset commented_diffset = 5;
         */
        value: ReviewComment_CommentedDiffset;
        case: "commentedDiffset";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.ReviewComment.
 * Use `create(ReviewCommentSchema)` to create a new message.
 */
export declare const ReviewCommentSchema: GenMessage<ReviewComment>;
/**
 * File-level comment with current and base reference information.
 *
 * @generated from message warp.multi_agent.v1.ReviewComment.CommentedFile
 */
export type ReviewComment_CommentedFile = Message$1<"warp.multi_agent.v1.ReviewComment.CommentedFile"> & {
    /**
     * @generated from field: string file_path = 1;
     */
    filePath: string;
    /**
     * @generated from field: warp.multi_agent.v1.CurrentRef current = 2;
     */
    current?: CurrentRef;
    /**
     * @generated from field: warp.multi_agent.v1.BaseRef base = 3;
     */
    base?: BaseRef;
};
/**
 * Describes the message warp.multi_agent.v1.ReviewComment.CommentedFile.
 * Use `create(ReviewComment_CommentedFileSchema)` to create a new message.
 */
export declare const ReviewComment_CommentedFileSchema: GenMessage<ReviewComment_CommentedFile>;
/**
 * Diffset-level comment with current and base reference information.
 *
 * @generated from message warp.multi_agent.v1.ReviewComment.CommentedDiffset
 */
export type ReviewComment_CommentedDiffset = Message$1<"warp.multi_agent.v1.ReviewComment.CommentedDiffset"> & {
    /**
     * @generated from field: warp.multi_agent.v1.CurrentRef current = 1;
     */
    current?: CurrentRef;
    /**
     * @generated from field: warp.multi_agent.v1.BaseRef base = 2;
     */
    base?: BaseRef;
};
/**
 * Describes the message warp.multi_agent.v1.ReviewComment.CommentedDiffset.
 * Use `create(ReviewComment_CommentedDiffsetSchema)` to create a new message.
 */
export declare const ReviewComment_CommentedDiffsetSchema: GenMessage<ReviewComment_CommentedDiffset>;
/**
 * A message within a task
 *
 * @generated from message warp.multi_agent.v1.Message
 */
export type Message = Message$1<"warp.multi_agent.v1.Message"> & {
    /**
     * Globally-unique identifier for the message.
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * The ID of the task this message belongs to.
     *
     * @generated from field: string task_id = 11;
     */
    taskId: string;
    /**
     * The ID of the request that originally added this message to the task.
     *
     * @generated from field: string request_id = 13;
     */
    requestId: string;
    /**
     * The timestamp that this message was produced.
     * For input messages, this is the timestamp the server received the request.
     * For output messages, this is the timestamp the server finished the response for the request.
     *
     * @generated from field: google.protobuf.Timestamp timestamp = 14;
     */
    timestamp?: Timestamp;
    /**
     * An opaque payload that the client should simply roundtrip.
     *
     * @generated from field: string server_message_data = 7;
     */
    serverMessageData: string;
    /**
     * Citations associated with this message
     *
     * @generated from field: repeated warp.multi_agent.v1.Citation citations = 8;
     */
    citations: Citation[];
    /**
     * The type of message with its specific content
     *
     * @generated from oneof warp.multi_agent.v1.Message.message
     */
    message: {
        /**
         * @generated from field: warp.multi_agent.v1.Message.UserQuery user_query = 2;
         */
        value: Message_UserQuery;
        case: "userQuery";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.AgentOutput agent_output = 3;
         */
        value: Message_AgentOutput;
        case: "agentOutput";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall tool_call = 4;
         */
        value: Message_ToolCall;
        case: "toolCall";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCallResult tool_call_result = 5;
         */
        value: Message_ToolCallResult;
        case: "toolCallResult";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ServerEvent server_event = 6;
         */
        value: Message_ServerEvent;
        case: "serverEvent";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.SystemQuery system_query = 9;
         */
        value: Message_SystemQuery;
        case: "systemQuery";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.UpdateTodos update_todos = 10;
         */
        value: Message_UpdateTodos;
        case: "updateTodos";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.AgentReasoning agent_reasoning = 15;
         */
        value: Message_AgentReasoning;
        case: "agentReasoning";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.Summarization summarization = 16;
         */
        value: Message_Summarization;
        case: "summarization";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.CodeReview code_review = 17;
         */
        value: Message_CodeReview;
        case: "codeReview";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.UpdateReviewComments update_review_comments = 18;
         */
        value: Message_UpdateReviewComments;
        case: "updateReviewComments";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.WebSearch web_search = 19;
         */
        value: Message_WebSearch;
        case: "webSearch";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.WebFetch web_fetch = 20;
         */
        value: Message_WebFetch;
        case: "webFetch";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.DebugOutput debug_output = 21;
         */
        value: Message_DebugOutput;
        case: "debugOutput";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ArtifactEvent artifact_event = 22;
         */
        value: Message_ArtifactEvent;
        case: "artifactEvent";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.InvokeSkill invoke_skill = 23;
         */
        value: Message_InvokeSkill;
        case: "invokeSkill";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.Message.
 * Use `create(MessageSchema)` to create a new message.
 */
export declare const MessageSchema: GenMessage<Message>;
/**
 * User query message type
 *
 * @generated from message warp.multi_agent.v1.Message.UserQuery
 */
export type Message_UserQuery = Message$1<"warp.multi_agent.v1.Message.UserQuery"> & {
    /**
     * @generated from field: string query = 1;
     */
    query: string;
    /**
     * Context that the client supplied as part of the user query input.
     *
     * @generated from field: warp.multi_agent.v1.InputContext context = 2;
     */
    context?: InputContext;
    /**
     * @generated from field: map<string, warp.multi_agent.v1.Attachment> referenced_attachments = 3;
     */
    referencedAttachments: {
        [key: string]: Attachment;
    };
    /**
     * @generated from field: warp.multi_agent.v1.UserQueryMode mode = 4;
     */
    mode?: UserQueryMode;
    /**
     * @generated from field: warp.multi_agent.v1.AgentType intended_agent = 5;
     */
    intendedAgent: AgentType;
};
/**
 * Describes the message warp.multi_agent.v1.Message.UserQuery.
 * Use `create(Message_UserQuerySchema)` to create a new message.
 */
export declare const Message_UserQuerySchema: GenMessage<Message_UserQuery>;
/**
 * System queries represent prompts from the Warp client that were
 * not explicitly sent by the end-user e.g. automatic code diff
 * suggestions for errors.
 *
 * @generated from message warp.multi_agent.v1.Message.SystemQuery
 */
export type Message_SystemQuery = Message$1<"warp.multi_agent.v1.Message.SystemQuery"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.Message.SystemQuery.type
     */
    type: {
        /**
         * @generated from field: warp.multi_agent.v1.Message.AutoCodeDiff auto_code_diff = 1;
         */
        value: Message_AutoCodeDiff;
        case: "autoCodeDiff";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ResumeConversation resume_conversation = 3;
         */
        value: Message_ResumeConversation;
        case: "resumeConversation";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.TriggerSuggestPrompt trigger_suggest_prompt = 4;
         */
        value: Message_TriggerSuggestPrompt;
        case: "triggerSuggestPrompt";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.CreateNewProject create_new_project = 5;
         */
        value: Message_CreateNewProject;
        case: "createNewProject";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.CloneRepository clone_repository = 6;
         */
        value: Message_CloneRepository;
        case: "cloneRepository";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.SummarizeConversation summarize_conversation = 7;
         */
        value: Message_SummarizeConversation;
        case: "summarizeConversation";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.FetchReviewComments fetch_review_comments = 8;
         */
        value: Message_FetchReviewComments;
        case: "fetchReviewComments";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: warp.multi_agent.v1.InputContext context = 2;
     */
    context?: InputContext;
};
/**
 * Describes the message warp.multi_agent.v1.Message.SystemQuery.
 * Use `create(Message_SystemQuerySchema)` to create a new message.
 */
export declare const Message_SystemQuerySchema: GenMessage<Message_SystemQuery>;
/**
 * @generated from message warp.multi_agent.v1.Message.AutoCodeDiff
 */
export type Message_AutoCodeDiff = Message$1<"warp.multi_agent.v1.Message.AutoCodeDiff"> & {
    /**
     * @generated from field: string query = 1;
     */
    query: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.AutoCodeDiff.
 * Use `create(Message_AutoCodeDiffSchema)` to create a new message.
 */
export declare const Message_AutoCodeDiffSchema: GenMessage<Message_AutoCodeDiff>;
/**
 * @generated from message warp.multi_agent.v1.Message.ResumeConversation
 */
export type Message_ResumeConversation = Message$1<"warp.multi_agent.v1.Message.ResumeConversation"> & {};
/**
 * Describes the message warp.multi_agent.v1.Message.ResumeConversation.
 * Use `create(Message_ResumeConversationSchema)` to create a new message.
 */
export declare const Message_ResumeConversationSchema: GenMessage<Message_ResumeConversation>;
/**
 * @generated from message warp.multi_agent.v1.Message.TriggerSuggestPrompt
 */
export type Message_TriggerSuggestPrompt = Message$1<"warp.multi_agent.v1.Message.TriggerSuggestPrompt"> & {
    /**
     * @generated from field: repeated warp.multi_agent.v1.Attachment attachments = 1;
     */
    attachments: Attachment[];
    /**
     * @generated from oneof warp.multi_agent.v1.Message.TriggerSuggestPrompt.trigger
     */
    trigger: {
        /**
         * @generated from field: google.protobuf.Empty files_changed = 2;
         */
        value: Empty;
        case: "filesChanged";
    } | {
        /**
         * @generated from field: google.protobuf.Empty command_run = 3;
         */
        value: Empty;
        case: "commandRun";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.Message.TriggerSuggestPrompt.
 * Use `create(Message_TriggerSuggestPromptSchema)` to create a new message.
 */
export declare const Message_TriggerSuggestPromptSchema: GenMessage<Message_TriggerSuggestPrompt>;
/**
 * @generated from message warp.multi_agent.v1.Message.CreateNewProject
 */
export type Message_CreateNewProject = Message$1<"warp.multi_agent.v1.Message.CreateNewProject"> & {
    /**
     * @generated from field: string query = 1;
     */
    query: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.CreateNewProject.
 * Use `create(Message_CreateNewProjectSchema)` to create a new message.
 */
export declare const Message_CreateNewProjectSchema: GenMessage<Message_CreateNewProject>;
/**
 * @generated from message warp.multi_agent.v1.Message.CloneRepository
 */
export type Message_CloneRepository = Message$1<"warp.multi_agent.v1.Message.CloneRepository"> & {
    /**
     * @generated from field: string url = 1;
     */
    url: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.CloneRepository.
 * Use `create(Message_CloneRepositorySchema)` to create a new message.
 */
export declare const Message_CloneRepositorySchema: GenMessage<Message_CloneRepository>;
/**
 * A user-requested summarization.
 *
 * @generated from message warp.multi_agent.v1.Message.SummarizeConversation
 */
export type Message_SummarizeConversation = Message$1<"warp.multi_agent.v1.Message.SummarizeConversation"> & {
    /**
     * Optional user-specified instructions to focus or augment the summary.
     *
     * @generated from field: string prompt = 1;
     */
    prompt: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.SummarizeConversation.
 * Use `create(Message_SummarizeConversationSchema)` to create a new message.
 */
export declare const Message_SummarizeConversationSchema: GenMessage<Message_SummarizeConversation>;
/**
 * Agent output message type
 *
 * @generated from message warp.multi_agent.v1.Message.AgentOutput
 */
export type Message_AgentOutput = Message$1<"warp.multi_agent.v1.Message.AgentOutput"> & {
    /**
     * Text to be shown to the user.
     *
     * @generated from field: string text = 1;
     */
    text: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.AgentOutput.
 * Use `create(Message_AgentOutputSchema)` to create a new message.
 */
export declare const Message_AgentOutputSchema: GenMessage<Message_AgentOutput>;
/**
 * @generated from message warp.multi_agent.v1.Message.AgentReasoning
 */
export type Message_AgentReasoning = Message$1<"warp.multi_agent.v1.Message.AgentReasoning"> & {
    /**
     * The user-visible reasoning tokens.
     *
     * @generated from field: string reasoning = 1;
     */
    reasoning: string;
    /**
     * How long the agent spent reasoning.
     * Only set when the reasoning is finished.
     *
     * @generated from field: google.protobuf.Duration finished_duration = 2;
     */
    finishedDuration?: Duration;
};
/**
 * Describes the message warp.multi_agent.v1.Message.AgentReasoning.
 * Use `create(Message_AgentReasoningSchema)` to create a new message.
 */
export declare const Message_AgentReasoningSchema: GenMessage<Message_AgentReasoning>;
/**
 * @generated from message warp.multi_agent.v1.Message.Summarization
 */
export type Message_Summarization = Message$1<"warp.multi_agent.v1.Message.Summarization"> & {
    /**
     * How long the agent spent summarizing
     * Only set when the summarization is finished.
     *
     * @generated from field: google.protobuf.Duration finished_duration = 2;
     */
    finishedDuration?: Duration;
    /**
     * Type of summarization being performed.
     *
     * @generated from oneof warp.multi_agent.v1.Message.Summarization.summary_type
     */
    summaryType: {
        /**
         * @generated from field: warp.multi_agent.v1.Message.Summarization.ConversationSummary conversation_summary = 1;
         */
        value: Message_Summarization_ConversationSummary;
        case: "conversationSummary";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.Summarization.ToolCallResultSummary tool_call_result_summary = 3;
         */
        value: Message_Summarization_ToolCallResultSummary;
        case: "toolCallResultSummary";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.Message.Summarization.
 * Use `create(Message_SummarizationSchema)` to create a new message.
 */
export declare const Message_SummarizationSchema: GenMessage<Message_Summarization>;
/**
 * A summary of the overall conversation.
 *
 * @generated from message warp.multi_agent.v1.Message.Summarization.ConversationSummary
 */
export type Message_Summarization_ConversationSummary = Message$1<"warp.multi_agent.v1.Message.Summarization.ConversationSummary"> & {
    /**
     * @generated from field: string summary = 1;
     */
    summary: string;
    /**
     * @generated from field: int32 token_count = 2;
     */
    tokenCount: number;
};
/**
 * Describes the message warp.multi_agent.v1.Message.Summarization.ConversationSummary.
 * Use `create(Message_Summarization_ConversationSummarySchema)` to create a new message.
 */
export declare const Message_Summarization_ConversationSummarySchema: GenMessage<Message_Summarization_ConversationSummary>;
/**
 * Summarize the result of a tool call.
 *
 * @generated from message warp.multi_agent.v1.Message.Summarization.ToolCallResultSummary
 */
export type Message_Summarization_ToolCallResultSummary = Message$1<"warp.multi_agent.v1.Message.Summarization.ToolCallResultSummary"> & {};
/**
 * Describes the message warp.multi_agent.v1.Message.Summarization.ToolCallResultSummary.
 * Use `create(Message_Summarization_ToolCallResultSummarySchema)` to create a new message.
 */
export declare const Message_Summarization_ToolCallResultSummarySchema: GenMessage<Message_Summarization_ToolCallResultSummary>;
/**
 * @generated from message warp.multi_agent.v1.Message.CodeReview
 */
export type Message_CodeReview = Message$1<"warp.multi_agent.v1.Message.CodeReview"> & {
    /**
     * @generated from field: warp.multi_agent.v1.ReviewComments comments = 1;
     */
    comments?: ReviewComments;
};
/**
 * Describes the message warp.multi_agent.v1.Message.CodeReview.
 * Use `create(Message_CodeReviewSchema)` to create a new message.
 */
export declare const Message_CodeReviewSchema: GenMessage<Message_CodeReview>;
/**
 * @generated from message warp.multi_agent.v1.Message.FetchReviewComments
 */
export type Message_FetchReviewComments = Message$1<"warp.multi_agent.v1.Message.FetchReviewComments"> & {
    /**
     * @generated from field: string repo_path = 1;
     */
    repoPath: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.FetchReviewComments.
 * Use `create(Message_FetchReviewCommentsSchema)` to create a new message.
 */
export declare const Message_FetchReviewCommentsSchema: GenMessage<Message_FetchReviewComments>;
/**
 * Tool call message type
 *
 * @generated from message warp.multi_agent.v1.Message.ToolCall
 */
export type Message_ToolCall = Message$1<"warp.multi_agent.v1.Message.ToolCall"> & {
    /**
     * @generated from field: string tool_call_id = 1;
     */
    toolCallId: string;
    /**
     * The specific tool being called
     *
     * @generated from oneof warp.multi_agent.v1.Message.ToolCall.tool
     */
    tool: {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.RunShellCommand run_shell_command = 2;
         */
        value: Message_ToolCall_RunShellCommand;
        case: "runShellCommand";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.SearchCodebase search_codebase = 3;
         */
        value: Message_ToolCall_SearchCodebase;
        case: "searchCodebase";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.Server server = 4;
         */
        value: Message_ToolCall_Server;
        case: "server";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.ReadFiles read_files = 5;
         */
        value: Message_ToolCall_ReadFiles;
        case: "readFiles";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.ApplyFileDiffs apply_file_diffs = 6;
         */
        value: Message_ToolCall_ApplyFileDiffs;
        case: "applyFileDiffs";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.SuggestPlan suggest_plan = 7;
         */
        value: Message_ToolCall_SuggestPlan;
        case: "suggestPlan";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.SuggestCreatePlan suggest_create_plan = 8;
         */
        value: Message_ToolCall_SuggestCreatePlan;
        case: "suggestCreatePlan";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.Grep grep = 9;
         */
        value: Message_ToolCall_Grep;
        case: "grep";
    } | {
        /**
         * DEPRECATED: Being replaced by FileGlobV2.
         *
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.FileGlob file_glob = 10 [deprecated = true];
         * @deprecated
         */
        value: Message_ToolCall_FileGlob;
        case: "fileGlob";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.ReadMCPResource read_mcp_resource = 11;
         */
        value: Message_ToolCall_ReadMCPResource;
        case: "readMcpResource";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.CallMCPTool call_mcp_tool = 12;
         */
        value: Message_ToolCall_CallMCPTool;
        case: "callMcpTool";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.WriteToLongRunningShellCommand write_to_long_running_shell_command = 13;
         */
        value: Message_ToolCall_WriteToLongRunningShellCommand;
        case: "writeToLongRunningShellCommand";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.SuggestNewConversation suggest_new_conversation = 14;
         */
        value: Message_ToolCall_SuggestNewConversation;
        case: "suggestNewConversation";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.FileGlobV2 file_glob_v2 = 15;
         */
        value: Message_ToolCall_FileGlobV2;
        case: "fileGlobV2";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.SuggestPrompt suggest_prompt = 16;
         */
        value: Message_ToolCall_SuggestPrompt;
        case: "suggestPrompt";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.OpenCodeReview open_code_review = 17;
         */
        value: Message_ToolCall_OpenCodeReview;
        case: "openCodeReview";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.InitProject init_project = 18;
         */
        value: Message_ToolCall_InitProject;
        case: "initProject";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.Subagent subagent = 19;
         */
        value: Message_ToolCall_Subagent;
        case: "subagent";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.ReadDocuments read_documents = 20;
         */
        value: Message_ToolCall_ReadDocuments;
        case: "readDocuments";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.EditDocuments edit_documents = 21;
         */
        value: Message_ToolCall_EditDocuments;
        case: "editDocuments";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.CreateDocuments create_documents = 22;
         */
        value: Message_ToolCall_CreateDocuments;
        case: "createDocuments";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.ReadShellCommandOutput read_shell_command_output = 23;
         */
        value: Message_ToolCall_ReadShellCommandOutput;
        case: "readShellCommandOutput";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.UseComputer use_computer = 24;
         */
        value: Message_ToolCall_UseComputer;
        case: "useComputer";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.InsertReviewComments insert_review_comments = 25;
         */
        value: Message_ToolCall_InsertReviewComments;
        case: "insertReviewComments";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.ReadSkill read_skill = 26;
         */
        value: Message_ToolCall_ReadSkill;
        case: "readSkill";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.RequestComputerUse request_computer_use = 27;
         */
        value: Message_ToolCall_RequestComputerUse;
        case: "requestComputerUse";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.FetchConversation fetch_conversation = 28;
         */
        value: Message_ToolCall_FetchConversation;
        case: "fetchConversation";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.
 * Use `create(Message_ToolCallSchema)` to create a new message.
 */
export declare const Message_ToolCallSchema: GenMessage<Message_ToolCall>;
/**
 * A tool call to fetch a conversation's tasks from the client.
 * Used by subagents that need to access a different conversation's data.
 *
 * @generated from message warp.multi_agent.v1.Message.ToolCall.FetchConversation
 */
export type Message_ToolCall_FetchConversation = Message$1<"warp.multi_agent.v1.Message.ToolCall.FetchConversation"> & {
    /**
     * The ID of the conversation to fetch.
     *
     * @generated from field: string conversation_id = 1;
     */
    conversationId: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.FetchConversation.
 * Use `create(Message_ToolCall_FetchConversationSchema)` to create a new message.
 */
export declare const Message_ToolCall_FetchConversationSchema: GenMessage<Message_ToolCall_FetchConversation>;
/**
 * A tool call that is totally resolved server-side and hence opaque to
 * clients. It's included in the message history for bookkeeping purposes.
 *
 * @generated from message warp.multi_agent.v1.Message.ToolCall.Server
 */
export type Message_ToolCall_Server = Message$1<"warp.multi_agent.v1.Message.ToolCall.Server"> & {
    /**
     * @generated from field: string payload = 1;
     */
    payload: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.Server.
 * Use `create(Message_ToolCall_ServerSchema)` to create a new message.
 */
export declare const Message_ToolCall_ServerSchema: GenMessage<Message_ToolCall_Server>;
/**
 * A tool call to run a shell command.
 *
 * @generated from message warp.multi_agent.v1.Message.ToolCall.RunShellCommand
 */
export type Message_ToolCall_RunShellCommand = Message$1<"warp.multi_agent.v1.Message.ToolCall.RunShellCommand"> & {
    /**
     * @generated from field: string command = 1;
     */
    command: string;
    /**
     * DEPRECATED: Being replaced by risk_category
     *
     * @generated from field: bool is_read_only = 2;
     */
    isReadOnly: boolean;
    /**
     * @generated from field: bool uses_pager = 3;
     */
    usesPager: boolean;
    /**
     * @generated from field: repeated warp.multi_agent.v1.Citation citations = 4;
     */
    citations: Citation[];
    /**
     * Whether the agent thinks this command is risky and therefore should be
     * passed by the user first.
     * DEPRECATED: Being replaced by risk_category
     *
     * @generated from field: bool is_risky = 5;
     */
    isRisky: boolean;
    /**
     * Whether or not the harness should wait until the command is complete to report a result.
     *
     * This is wrapped in a oneof to preserve field presence, which isn't preserved for scalar
     * fields in prost-generated rust bindings. If unset, the client should wait until completion.
     *
     * @generated from oneof warp.multi_agent.v1.Message.ToolCall.RunShellCommand.wait_until_complete_value
     */
    waitUntilCompleteValue: {
        /**
         * @generated from field: bool wait_until_complete = 6;
         */
        value: boolean;
        case: "waitUntilComplete";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * Finer-grained classification of command risk. When present, clients should prefer
     * this over is_read_only and is_risky.
     *
     * @generated from field: warp.multi_agent.v1.RiskCategory risk_category = 7;
     */
    riskCategory: RiskCategory;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.RunShellCommand.
 * Use `create(Message_ToolCall_RunShellCommandSchema)` to create a new message.
 */
export declare const Message_ToolCall_RunShellCommandSchema: GenMessage<Message_ToolCall_RunShellCommand>;
/**
 * A tool call to write bytes to the PTY when a command is running in the foreground.
 *
 * @generated from message warp.multi_agent.v1.Message.ToolCall.WriteToLongRunningShellCommand
 */
export type Message_ToolCall_WriteToLongRunningShellCommand = Message$1<"warp.multi_agent.v1.Message.ToolCall.WriteToLongRunningShellCommand"> & {
    /**
     * The exact set of bytes that the client should write to PTY.
     *
     * @generated from field: bytes input = 1;
     */
    input: Uint8Array;
    /**
     * The "mode" for the write.
     *
     * @generated from field: warp.multi_agent.v1.Message.ToolCall.WriteToLongRunningShellCommand.Mode mode = 2;
     */
    mode?: Message_ToolCall_WriteToLongRunningShellCommand_Mode;
    /**
     * The 'ID' of the command to write to, taken from the initial
     * `LongRunningShellCommandSnapshot` for the command.
     *
     * @generated from field: string command_id = 3;
     */
    commandId: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.WriteToLongRunningShellCommand.
 * Use `create(Message_ToolCall_WriteToLongRunningShellCommandSchema)` to create a new message.
 */
export declare const Message_ToolCall_WriteToLongRunningShellCommandSchema: GenMessage<Message_ToolCall_WriteToLongRunningShellCommand>;
/**
 * @generated from message warp.multi_agent.v1.Message.ToolCall.WriteToLongRunningShellCommand.Mode
 */
export type Message_ToolCall_WriteToLongRunningShellCommand_Mode = Message$1<"warp.multi_agent.v1.Message.ToolCall.WriteToLongRunningShellCommand.Mode"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.Message.ToolCall.WriteToLongRunningShellCommand.Mode.mode
     */
    mode: {
        /**
         * Write raw bytes directly.
         *
         * @generated from field: google.protobuf.Empty raw = 1;
         */
        value: Empty;
        case: "raw";
    } | {
        /**
         * Write a line of text input.
         *
         * This write mode is designed to be used with REPLs/shell-like TUIs. Ensures the cursor is at the
         * beginnning of the input buffer and sends an enter keystroke after `line`.
         *
         * @generated from field: google.protobuf.Empty line = 2;
         */
        value: Empty;
        case: "line";
    } | {
        /**
         * Writes a block of multi-line text input.
         *
         * Under the hood, this uses bracketed paste to insert the text as-is.
         *
         * @generated from field: google.protobuf.Empty block = 3;
         */
        value: Empty;
        case: "block";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.WriteToLongRunningShellCommand.Mode.
 * Use `create(Message_ToolCall_WriteToLongRunningShellCommand_ModeSchema)` to create a new message.
 */
export declare const Message_ToolCall_WriteToLongRunningShellCommand_ModeSchema: GenMessage<Message_ToolCall_WriteToLongRunningShellCommand_Mode>;
/**
 * @generated from message warp.multi_agent.v1.Message.ToolCall.SuggestNewConversation
 */
export type Message_ToolCall_SuggestNewConversation = Message$1<"warp.multi_agent.v1.Message.ToolCall.SuggestNewConversation"> & {
    /**
     * The id of the message where we'd branch a new conversation.
     *
     * @generated from field: string message_id = 1;
     */
    messageId: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.SuggestNewConversation.
 * Use `create(Message_ToolCall_SuggestNewConversationSchema)` to create a new message.
 */
export declare const Message_ToolCall_SuggestNewConversationSchema: GenMessage<Message_ToolCall_SuggestNewConversation>;
/**
 * A tool call to read files.
 *
 * @generated from message warp.multi_agent.v1.Message.ToolCall.ReadFiles
 */
export type Message_ToolCall_ReadFiles = Message$1<"warp.multi_agent.v1.Message.ToolCall.ReadFiles"> & {
    /**
     * @generated from field: repeated warp.multi_agent.v1.Message.ToolCall.ReadFiles.File files = 1;
     */
    files: Message_ToolCall_ReadFiles_File[];
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.ReadFiles.
 * Use `create(Message_ToolCall_ReadFilesSchema)` to create a new message.
 */
export declare const Message_ToolCall_ReadFilesSchema: GenMessage<Message_ToolCall_ReadFiles>;
/**
 * @generated from message warp.multi_agent.v1.Message.ToolCall.ReadFiles.File
 */
export type Message_ToolCall_ReadFiles_File = Message$1<"warp.multi_agent.v1.Message.ToolCall.ReadFiles.File"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * If empty, the entire file is retrieved.
     *
     * @generated from field: repeated warp.multi_agent.v1.FileContentLineRange line_ranges = 2;
     */
    lineRanges: FileContentLineRange[];
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.ReadFiles.File.
 * Use `create(Message_ToolCall_ReadFiles_FileSchema)` to create a new message.
 */
export declare const Message_ToolCall_ReadFiles_FileSchema: GenMessage<Message_ToolCall_ReadFiles_File>;
/**
 * A tool call to search a codebase.
 *
 * @generated from message warp.multi_agent.v1.Message.ToolCall.SearchCodebase
 */
export type Message_ToolCall_SearchCodebase = Message$1<"warp.multi_agent.v1.Message.ToolCall.SearchCodebase"> & {
    /**
     * @generated from field: string query = 1;
     */
    query: string;
    /**
     * @generated from field: repeated string path_filters = 2;
     */
    pathFilters: string[];
    /**
     * Optional. The absolute path to the codebase that we want to search. If
     * not provided, we will use the codebase in the user's current directory.
     *
     * @generated from field: string codebase_path = 3;
     */
    codebasePath: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.SearchCodebase.
 * Use `create(Message_ToolCall_SearchCodebaseSchema)` to create a new message.
 */
export declare const Message_ToolCall_SearchCodebaseSchema: GenMessage<Message_ToolCall_SearchCodebase>;
/**
 * A tool call to apply diffs to files.
 *
 * @generated from message warp.multi_agent.v1.Message.ToolCall.ApplyFileDiffs
 */
export type Message_ToolCall_ApplyFileDiffs = Message$1<"warp.multi_agent.v1.Message.ToolCall.ApplyFileDiffs"> & {
    /**
     * @generated from field: string summary = 1;
     */
    summary: string;
    /**
     * @generated from field: repeated warp.multi_agent.v1.Message.ToolCall.ApplyFileDiffs.FileDiff diffs = 2;
     */
    diffs: Message_ToolCall_ApplyFileDiffs_FileDiff[];
    /**
     * @generated from field: repeated warp.multi_agent.v1.Message.ToolCall.ApplyFileDiffs.NewFile new_files = 3;
     */
    newFiles: Message_ToolCall_ApplyFileDiffs_NewFile[];
    /**
     * @generated from field: repeated warp.multi_agent.v1.Message.ToolCall.ApplyFileDiffs.DeleteFile deleted_files = 4;
     */
    deletedFiles: Message_ToolCall_ApplyFileDiffs_DeleteFile[];
    /**
     * @generated from field: repeated warp.multi_agent.v1.Message.ToolCall.ApplyFileDiffs.V4AFileUpdate v4a_updates = 5;
     */
    v4aUpdates: Message_ToolCall_ApplyFileDiffs_V4AFileUpdate[];
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.ApplyFileDiffs.
 * Use `create(Message_ToolCall_ApplyFileDiffsSchema)` to create a new message.
 */
export declare const Message_ToolCall_ApplyFileDiffsSchema: GenMessage<Message_ToolCall_ApplyFileDiffs>;
/**
 * @generated from message warp.multi_agent.v1.Message.ToolCall.ApplyFileDiffs.FileDiff
 */
export type Message_ToolCall_ApplyFileDiffs_FileDiff = Message$1<"warp.multi_agent.v1.Message.ToolCall.ApplyFileDiffs.FileDiff"> & {
    /**
     * @generated from field: string file_path = 1;
     */
    filePath: string;
    /**
     * The content to be replaced.
     *
     * @generated from field: string search = 2;
     */
    search: string;
    /**
     * The content that replaces `search`.
     *
     * @generated from field: string replace = 3;
     */
    replace: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.ApplyFileDiffs.FileDiff.
 * Use `create(Message_ToolCall_ApplyFileDiffs_FileDiffSchema)` to create a new message.
 */
export declare const Message_ToolCall_ApplyFileDiffs_FileDiffSchema: GenMessage<Message_ToolCall_ApplyFileDiffs_FileDiff>;
/**
 * @generated from message warp.multi_agent.v1.Message.ToolCall.ApplyFileDiffs.V4AFileUpdate
 */
export type Message_ToolCall_ApplyFileDiffs_V4AFileUpdate = Message$1<"warp.multi_agent.v1.Message.ToolCall.ApplyFileDiffs.V4AFileUpdate"> & {
    /**
     * @generated from field: string file_path = 1;
     */
    filePath: string;
    /**
     * Optional file rename.
     *
     * @generated from field: string move_to = 2;
     */
    moveTo: string;
    /**
     * @generated from field: repeated warp.multi_agent.v1.Message.ToolCall.ApplyFileDiffs.V4AFileUpdate.Hunk hunks = 3;
     */
    hunks: Message_ToolCall_ApplyFileDiffs_V4AFileUpdate_Hunk[];
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.ApplyFileDiffs.V4AFileUpdate.
 * Use `create(Message_ToolCall_ApplyFileDiffs_V4AFileUpdateSchema)` to create a new message.
 */
export declare const Message_ToolCall_ApplyFileDiffs_V4AFileUpdateSchema: GenMessage<Message_ToolCall_ApplyFileDiffs_V4AFileUpdate>;
/**
 * A V4A hunk represents a single change block in a file update.
 * See here for more details on the semantic meaning of the fields:
 * https://cookbook.openai.com/examples/gpt4-1_prompting_guide#apply-patch
 *
 * @generated from message warp.multi_agent.v1.Message.ToolCall.ApplyFileDiffs.V4AFileUpdate.Hunk
 */
export type Message_ToolCall_ApplyFileDiffs_V4AFileUpdate_Hunk = Message$1<"warp.multi_agent.v1.Message.ToolCall.ApplyFileDiffs.V4AFileUpdate.Hunk"> & {
    /**
     * Context to quickly identify the location of the change (i.e. the `@@` statements).
     *
     * @generated from field: repeated string change_context = 1;
     */
    changeContext: string[];
    /**
     * The context lines right before the change.
     *
     * @generated from field: string pre_context = 2;
     */
    preContext: string;
    /**
     * The old content that is being replaced.
     * Empty if lines are only being added.
     *
     * @generated from field: string old = 3;
     */
    old: string;
    /**
     * The new content that replaces the old content.
     * Empty if lines are only being deleted.
     *
     * @generated from field: string new = 4;
     */
    new: string;
    /**
     * The context lines right after the change.
     *
     * @generated from field: string post_context = 5;
     */
    postContext: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.ApplyFileDiffs.V4AFileUpdate.Hunk.
 * Use `create(Message_ToolCall_ApplyFileDiffs_V4AFileUpdate_HunkSchema)` to create a new message.
 */
export declare const Message_ToolCall_ApplyFileDiffs_V4AFileUpdate_HunkSchema: GenMessage<Message_ToolCall_ApplyFileDiffs_V4AFileUpdate_Hunk>;
/**
 * @generated from message warp.multi_agent.v1.Message.ToolCall.ApplyFileDiffs.NewFile
 */
export type Message_ToolCall_ApplyFileDiffs_NewFile = Message$1<"warp.multi_agent.v1.Message.ToolCall.ApplyFileDiffs.NewFile"> & {
    /**
     * Path of the file to create.
     *
     * @generated from field: string file_path = 1;
     */
    filePath: string;
    /**
     * The new file contents.
     *
     * @generated from field: string content = 2;
     */
    content: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.ApplyFileDiffs.NewFile.
 * Use `create(Message_ToolCall_ApplyFileDiffs_NewFileSchema)` to create a new message.
 */
export declare const Message_ToolCall_ApplyFileDiffs_NewFileSchema: GenMessage<Message_ToolCall_ApplyFileDiffs_NewFile>;
/**
 * @generated from message warp.multi_agent.v1.Message.ToolCall.ApplyFileDiffs.DeleteFile
 */
export type Message_ToolCall_ApplyFileDiffs_DeleteFile = Message$1<"warp.multi_agent.v1.Message.ToolCall.ApplyFileDiffs.DeleteFile"> & {
    /**
     * @generated from field: string file_path = 1;
     */
    filePath: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.ApplyFileDiffs.DeleteFile.
 * Use `create(Message_ToolCall_ApplyFileDiffs_DeleteFileSchema)` to create a new message.
 */
export declare const Message_ToolCall_ApplyFileDiffs_DeleteFileSchema: GenMessage<Message_ToolCall_ApplyFileDiffs_DeleteFile>;
/**
 * A tool call to suggest a plan.
 *
 * @generated from message warp.multi_agent.v1.Message.ToolCall.SuggestPlan
 */
export type Message_ToolCall_SuggestPlan = Message$1<"warp.multi_agent.v1.Message.ToolCall.SuggestPlan"> & {
    /**
     * A high-level summary.
     *
     * @generated from field: string summary = 1;
     */
    summary: string;
    /**
     * A set of tasks that form the proposed execution plan.
     *
     * @generated from field: repeated warp.multi_agent.v1.Task proposed_tasks = 2;
     */
    proposedTasks: Task[];
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.SuggestPlan.
 * Use `create(Message_ToolCall_SuggestPlanSchema)` to create a new message.
 */
export declare const Message_ToolCall_SuggestPlanSchema: GenMessage<Message_ToolCall_SuggestPlan>;
/**
 * A tool call to suggest creating a plan (i.e. autoplanning).
 *
 * @generated from message warp.multi_agent.v1.Message.ToolCall.SuggestCreatePlan
 */
export type Message_ToolCall_SuggestCreatePlan = Message$1<"warp.multi_agent.v1.Message.ToolCall.SuggestCreatePlan"> & {};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.SuggestCreatePlan.
 * Use `create(Message_ToolCall_SuggestCreatePlanSchema)` to create a new message.
 */
export declare const Message_ToolCall_SuggestCreatePlanSchema: GenMessage<Message_ToolCall_SuggestCreatePlan>;
/**
 * A tool call to perform a grep search.
 *
 * @generated from message warp.multi_agent.v1.Message.ToolCall.Grep
 */
export type Message_ToolCall_Grep = Message$1<"warp.multi_agent.v1.Message.ToolCall.Grep"> & {
    /**
     * The search terms or patterns to look for.
     *
     * @generated from field: repeated string queries = 1;
     */
    queries: string[];
    /**
     * The relative path to the file or directory to search in.
     *
     * @generated from field: string path = 2;
     */
    path: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.Grep.
 * Use `create(Message_ToolCall_GrepSchema)` to create a new message.
 */
export declare const Message_ToolCall_GrepSchema: GenMessage<Message_ToolCall_Grep>;
/**
 * A tool call to find files matching glob patterns.
 *
 * @generated from message warp.multi_agent.v1.Message.ToolCall.FileGlob
 */
export type Message_ToolCall_FileGlob = Message$1<"warp.multi_agent.v1.Message.ToolCall.FileGlob"> & {
    /**
     * The glob patterns to match file names against.
     *
     * @generated from field: repeated string patterns = 1;
     */
    patterns: string[];
    /**
     * The relative path to the directory to search in.
     *
     * @generated from field: string path = 2;
     */
    path: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.FileGlob.
 * Use `create(Message_ToolCall_FileGlobSchema)` to create a new message.
 */
export declare const Message_ToolCall_FileGlobSchema: GenMessage<Message_ToolCall_FileGlob>;
/**
 * A tool call to find files with names matching patterns.
 *
 * @generated from message warp.multi_agent.v1.Message.ToolCall.FileGlobV2
 */
export type Message_ToolCall_FileGlobV2 = Message$1<"warp.multi_agent.v1.Message.ToolCall.FileGlobV2"> & {
    /**
     * The patterns to match file names against. Supports ?, *, [].
     *
     * @generated from field: repeated string patterns = 1;
     */
    patterns: string[];
    /**
     * The relative path to the directory to search in.
     *
     * @generated from field: string search_dir = 2;
     */
    searchDir: string;
    /**
     * The maximum number of matches to return. Zero indicates no limit.
     *
     * @generated from field: int32 max_matches = 3;
     */
    maxMatches: number;
    /**
     * The maximum depth to search in. Zero indicates no limit. A max depth of 1 will match children of the path directory only.
     *
     * @generated from field: int32 max_depth = 4;
     */
    maxDepth: number;
    /**
     * The minimum depth to search in. Zero indicates no limit.
     *
     * @generated from field: int32 min_depth = 5;
     */
    minDepth: number;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.FileGlobV2.
 * Use `create(Message_ToolCall_FileGlobV2Schema)` to create a new message.
 */
export declare const Message_ToolCall_FileGlobV2Schema: GenMessage<Message_ToolCall_FileGlobV2>;
/**
 * A tool call to read an MCP resource identified by its URI.
 *
 * @generated from message warp.multi_agent.v1.Message.ToolCall.ReadMCPResource
 */
export type Message_ToolCall_ReadMCPResource = Message$1<"warp.multi_agent.v1.Message.ToolCall.ReadMCPResource"> & {
    /**
     * @generated from field: string uri = 1;
     */
    uri: string;
    /**
     * Optional identifier of the MCP server that provides this tool.
     * If set, this should match the `id` of an MCPServer in the request's MCPContext.
     *
     * @generated from field: string server_id = 2;
     */
    serverId: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.ReadMCPResource.
 * Use `create(Message_ToolCall_ReadMCPResourceSchema)` to create a new message.
 */
export declare const Message_ToolCall_ReadMCPResourceSchema: GenMessage<Message_ToolCall_ReadMCPResource>;
/**
 * A tool call to execute an MCP tool.
 *
 * @generated from message warp.multi_agent.v1.Message.ToolCall.CallMCPTool
 */
export type Message_ToolCall_CallMCPTool = Message$1<"warp.multi_agent.v1.Message.ToolCall.CallMCPTool"> & {
    /**
     * Name of the tool call.
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * An MCP tool call specifies args as named JSON arguments
     * (not arbitrary JSON, e.g. a string).
     *
     * @generated from field: google.protobuf.Struct args = 2;
     */
    args?: JsonObject;
    /**
     * Optional identifier of the MCP server that provides this tool.
     * If set, this should match the `id` of an MCPServer in the request's MCPContext.
     *
     * @generated from field: string server_id = 3;
     */
    serverId: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.CallMCPTool.
 * Use `create(Message_ToolCall_CallMCPToolSchema)` to create a new message.
 */
export declare const Message_ToolCall_CallMCPToolSchema: GenMessage<Message_ToolCall_CallMCPTool>;
/**
 * A tool call to suggest a prompt.
 *
 * @generated from message warp.multi_agent.v1.Message.ToolCall.SuggestPrompt
 */
export type Message_ToolCall_SuggestPrompt = Message$1<"warp.multi_agent.v1.Message.ToolCall.SuggestPrompt"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.Message.ToolCall.SuggestPrompt.display_mode
     */
    displayMode: {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.SuggestPrompt.InlineQueryBanner inline_query_banner = 1;
         */
        value: Message_ToolCall_SuggestPrompt_InlineQueryBanner;
        case: "inlineQueryBanner";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.SuggestPrompt.
 * Use `create(Message_ToolCall_SuggestPromptSchema)` to create a new message.
 */
export declare const Message_ToolCall_SuggestPromptSchema: GenMessage<Message_ToolCall_SuggestPrompt>;
/**
 * @generated from message warp.multi_agent.v1.Message.ToolCall.SuggestPrompt.InlineQueryBanner
 */
export type Message_ToolCall_SuggestPrompt_InlineQueryBanner = Message$1<"warp.multi_agent.v1.Message.ToolCall.SuggestPrompt.InlineQueryBanner"> & {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: string query = 3;
     */
    query: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.SuggestPrompt.InlineQueryBanner.
 * Use `create(Message_ToolCall_SuggestPrompt_InlineQueryBannerSchema)` to create a new message.
 */
export declare const Message_ToolCall_SuggestPrompt_InlineQueryBannerSchema: GenMessage<Message_ToolCall_SuggestPrompt_InlineQueryBanner>;
/**
 * Trigger the client to open the code review pane.
 *
 * @generated from message warp.multi_agent.v1.Message.ToolCall.OpenCodeReview
 */
export type Message_ToolCall_OpenCodeReview = Message$1<"warp.multi_agent.v1.Message.ToolCall.OpenCodeReview"> & {};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.OpenCodeReview.
 * Use `create(Message_ToolCall_OpenCodeReviewSchema)` to create a new message.
 */
export declare const Message_ToolCall_OpenCodeReviewSchema: GenMessage<Message_ToolCall_OpenCodeReview>;
/**
 * Initialize project setup flow on the client.
 *
 * @generated from message warp.multi_agent.v1.Message.ToolCall.InitProject
 */
export type Message_ToolCall_InitProject = Message$1<"warp.multi_agent.v1.Message.ToolCall.InitProject"> & {};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.InitProject.
 * Use `create(Message_ToolCall_InitProjectSchema)` to create a new message.
 */
export declare const Message_ToolCall_InitProjectSchema: GenMessage<Message_ToolCall_InitProject>;
/**
 * @generated from message warp.multi_agent.v1.Message.ToolCall.Subagent
 */
export type Message_ToolCall_Subagent = Message$1<"warp.multi_agent.v1.Message.ToolCall.Subagent"> & {
    /**
     * @generated from field: string task_id = 1;
     */
    taskId: string;
    /**
     * @generated from field: string payload = 2;
     */
    payload: string;
    /**
     * Optional metadata about the subagent required to render the appropriate UI.
     *
     * @generated from oneof warp.multi_agent.v1.Message.ToolCall.Subagent.metadata
     */
    metadata: {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.Subagent.CLISubagent cli = 3;
         */
        value: Message_ToolCall_Subagent_CLISubagent;
        case: "cli";
    } | {
        /**
         * @generated from field: google.protobuf.Empty research = 4;
         */
        value: Empty;
        case: "research";
    } | {
        /**
         * @generated from field: google.protobuf.Empty advice = 5;
         */
        value: Empty;
        case: "advice";
    } | {
        /**
         * @generated from field: google.protobuf.Empty computer_use = 6;
         */
        value: Empty;
        case: "computerUse";
    } | {
        /**
         * @generated from field: google.protobuf.Empty summarization = 7;
         */
        value: Empty;
        case: "summarization";
    } | {
        /**
         * @generated from field: google.protobuf.Empty conversation_search = 8;
         */
        value: Empty;
        case: "conversationSearch";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.Subagent.
 * Use `create(Message_ToolCall_SubagentSchema)` to create a new message.
 */
export declare const Message_ToolCall_SubagentSchema: GenMessage<Message_ToolCall_Subagent>;
/**
 * @generated from message warp.multi_agent.v1.Message.ToolCall.Subagent.CLISubagent
 */
export type Message_ToolCall_Subagent_CLISubagent = Message$1<"warp.multi_agent.v1.Message.ToolCall.Subagent.CLISubagent"> & {
    /**
     * @generated from field: string command_id = 1;
     */
    commandId: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.Subagent.CLISubagent.
 * Use `create(Message_ToolCall_Subagent_CLISubagentSchema)` to create a new message.
 */
export declare const Message_ToolCall_Subagent_CLISubagentSchema: GenMessage<Message_ToolCall_Subagent_CLISubagent>;
/**
 * A tool call to read documents.
 *
 * @generated from message warp.multi_agent.v1.Message.ToolCall.ReadDocuments
 */
export type Message_ToolCall_ReadDocuments = Message$1<"warp.multi_agent.v1.Message.ToolCall.ReadDocuments"> & {
    /**
     * @generated from field: repeated warp.multi_agent.v1.Message.ToolCall.ReadDocuments.Document documents = 1;
     */
    documents: Message_ToolCall_ReadDocuments_Document[];
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.ReadDocuments.
 * Use `create(Message_ToolCall_ReadDocumentsSchema)` to create a new message.
 */
export declare const Message_ToolCall_ReadDocumentsSchema: GenMessage<Message_ToolCall_ReadDocuments>;
/**
 * @generated from message warp.multi_agent.v1.Message.ToolCall.ReadDocuments.Document
 */
export type Message_ToolCall_ReadDocuments_Document = Message$1<"warp.multi_agent.v1.Message.ToolCall.ReadDocuments.Document"> & {
    /**
     * @generated from field: string document_id = 1;
     */
    documentId: string;
    /**
     * If empty, the entire document is retrieved.
     *
     * @generated from field: repeated warp.multi_agent.v1.FileContentLineRange line_ranges = 2;
     */
    lineRanges: FileContentLineRange[];
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.ReadDocuments.Document.
 * Use `create(Message_ToolCall_ReadDocuments_DocumentSchema)` to create a new message.
 */
export declare const Message_ToolCall_ReadDocuments_DocumentSchema: GenMessage<Message_ToolCall_ReadDocuments_Document>;
/**
 * A tool call to edit one or more existing documents.
 *
 * @generated from message warp.multi_agent.v1.Message.ToolCall.EditDocuments
 */
export type Message_ToolCall_EditDocuments = Message$1<"warp.multi_agent.v1.Message.ToolCall.EditDocuments"> & {
    /**
     * @generated from field: repeated warp.multi_agent.v1.Message.ToolCall.EditDocuments.DocumentDiff diffs = 1;
     */
    diffs: Message_ToolCall_EditDocuments_DocumentDiff[];
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.EditDocuments.
 * Use `create(Message_ToolCall_EditDocumentsSchema)` to create a new message.
 */
export declare const Message_ToolCall_EditDocumentsSchema: GenMessage<Message_ToolCall_EditDocuments>;
/**
 * @generated from message warp.multi_agent.v1.Message.ToolCall.EditDocuments.DocumentDiff
 */
export type Message_ToolCall_EditDocuments_DocumentDiff = Message$1<"warp.multi_agent.v1.Message.ToolCall.EditDocuments.DocumentDiff"> & {
    /**
     * @generated from field: string document_id = 1;
     */
    documentId: string;
    /**
     * The content to be replaced.
     *
     * @generated from field: string search = 2;
     */
    search: string;
    /**
     * The content that replaces `search`.
     *
     * @generated from field: string replace = 3;
     */
    replace: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.EditDocuments.DocumentDiff.
 * Use `create(Message_ToolCall_EditDocuments_DocumentDiffSchema)` to create a new message.
 */
export declare const Message_ToolCall_EditDocuments_DocumentDiffSchema: GenMessage<Message_ToolCall_EditDocuments_DocumentDiff>;
/**
 * A tool call to create one or more new documents.
 *
 * @generated from message warp.multi_agent.v1.Message.ToolCall.CreateDocuments
 */
export type Message_ToolCall_CreateDocuments = Message$1<"warp.multi_agent.v1.Message.ToolCall.CreateDocuments"> & {
    /**
     * @generated from field: repeated warp.multi_agent.v1.Message.ToolCall.CreateDocuments.NewDocument new_documents = 1;
     */
    newDocuments: Message_ToolCall_CreateDocuments_NewDocument[];
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.CreateDocuments.
 * Use `create(Message_ToolCall_CreateDocumentsSchema)` to create a new message.
 */
export declare const Message_ToolCall_CreateDocumentsSchema: GenMessage<Message_ToolCall_CreateDocuments>;
/**
 * @generated from message warp.multi_agent.v1.Message.ToolCall.CreateDocuments.NewDocument
 */
export type Message_ToolCall_CreateDocuments_NewDocument = Message$1<"warp.multi_agent.v1.Message.ToolCall.CreateDocuments.NewDocument"> & {
    /**
     * The new document contents.
     *
     * @generated from field: string content = 1;
     */
    content: string;
    /**
     * @generated from field: string title = 2;
     */
    title: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.CreateDocuments.NewDocument.
 * Use `create(Message_ToolCall_CreateDocuments_NewDocumentSchema)` to create a new message.
 */
export declare const Message_ToolCall_CreateDocuments_NewDocumentSchema: GenMessage<Message_ToolCall_CreateDocuments_NewDocument>;
/**
 * A tool call to read the output of a shell command.
 *
 * @generated from message warp.multi_agent.v1.Message.ToolCall.ReadShellCommandOutput
 */
export type Message_ToolCall_ReadShellCommandOutput = Message$1<"warp.multi_agent.v1.Message.ToolCall.ReadShellCommandOutput"> & {
    /**
     * The 'ID' of the command to write to, taken from the initial
     * `LongRunningShellCommandSnapshot` for the command.
     *
     * @generated from field: string command_id = 1;
     */
    commandId: string;
    /**
     * @generated from oneof warp.multi_agent.v1.Message.ToolCall.ReadShellCommandOutput.delay
     */
    delay: {
        /**
         * Return the output after a certain delay.
         *
         * @generated from field: google.protobuf.Duration duration = 2;
         */
        value: Duration;
        case: "duration";
    } | {
        /**
         * Return the output when the command completes.
         *
         * @generated from field: google.protobuf.Empty on_completion = 3;
         */
        value: Empty;
        case: "onCompletion";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.ReadShellCommandOutput.
 * Use `create(Message_ToolCall_ReadShellCommandOutputSchema)` to create a new message.
 */
export declare const Message_ToolCall_ReadShellCommandOutputSchema: GenMessage<Message_ToolCall_ReadShellCommandOutput>;
/**
 * @generated from message warp.multi_agent.v1.Message.ToolCall.InsertReviewComments
 */
export type Message_ToolCall_InsertReviewComments = Message$1<"warp.multi_agent.v1.Message.ToolCall.InsertReviewComments"> & {
    /**
     * @generated from field: string repo_path = 1;
     */
    repoPath: string;
    /**
     * @generated from field: repeated warp.multi_agent.v1.Message.ToolCall.InsertReviewComments.Comment comments = 2;
     */
    comments: Message_ToolCall_InsertReviewComments_Comment[];
    /**
     * @generated from field: string base_branch = 3;
     */
    baseBranch: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.InsertReviewComments.
 * Use `create(Message_ToolCall_InsertReviewCommentsSchema)` to create a new message.
 */
export declare const Message_ToolCall_InsertReviewCommentsSchema: GenMessage<Message_ToolCall_InsertReviewComments>;
/**
 * @generated from message warp.multi_agent.v1.Message.ToolCall.InsertReviewComments.Comment
 */
export type Message_ToolCall_InsertReviewComments_Comment = Message$1<"warp.multi_agent.v1.Message.ToolCall.InsertReviewComments.Comment"> & {
    /**
     * @generated from field: string comment_id = 1;
     */
    commentId: string;
    /**
     * @generated from field: string author = 2;
     */
    author: string;
    /**
     * @generated from field: string last_modified_timestamp = 3;
     */
    lastModifiedTimestamp: string;
    /**
     * @generated from field: string comment_body = 4;
     */
    commentBody: string;
    /**
     * @generated from field: string parent_comment_id = 5;
     */
    parentCommentId: string;
    /**
     * @generated from field: warp.multi_agent.v1.Message.ToolCall.InsertReviewComments.CommentLocation location = 6;
     */
    location?: Message_ToolCall_InsertReviewComments_CommentLocation;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.InsertReviewComments.Comment.
 * Use `create(Message_ToolCall_InsertReviewComments_CommentSchema)` to create a new message.
 */
export declare const Message_ToolCall_InsertReviewComments_CommentSchema: GenMessage<Message_ToolCall_InsertReviewComments_Comment>;
/**
 * @generated from message warp.multi_agent.v1.Message.ToolCall.InsertReviewComments.CommentLocation
 */
export type Message_ToolCall_InsertReviewComments_CommentLocation = Message$1<"warp.multi_agent.v1.Message.ToolCall.InsertReviewComments.CommentLocation"> & {
    /**
     * @generated from field: string file_path = 1;
     */
    filePath: string;
    /**
     * @generated from field: warp.multi_agent.v1.Message.ToolCall.InsertReviewComments.CommentLineRange line = 2;
     */
    line?: Message_ToolCall_InsertReviewComments_CommentLineRange;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.InsertReviewComments.CommentLocation.
 * Use `create(Message_ToolCall_InsertReviewComments_CommentLocationSchema)` to create a new message.
 */
export declare const Message_ToolCall_InsertReviewComments_CommentLocationSchema: GenMessage<Message_ToolCall_InsertReviewComments_CommentLocation>;
/**
 * @generated from message warp.multi_agent.v1.Message.ToolCall.InsertReviewComments.CommentLineRange
 */
export type Message_ToolCall_InsertReviewComments_CommentLineRange = Message$1<"warp.multi_agent.v1.Message.ToolCall.InsertReviewComments.CommentLineRange"> & {
    /**
     * @generated from field: string diff_hunk = 1;
     */
    diffHunk: string;
    /**
     * @generated from field: warp.multi_agent.v1.FileContentLineRange range = 2;
     */
    range?: FileContentLineRange;
    /**
     * @generated from field: warp.multi_agent.v1.Message.ToolCall.InsertReviewComments.CommentSide side = 3;
     */
    side: Message_ToolCall_InsertReviewComments_CommentSide;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.InsertReviewComments.CommentLineRange.
 * Use `create(Message_ToolCall_InsertReviewComments_CommentLineRangeSchema)` to create a new message.
 */
export declare const Message_ToolCall_InsertReviewComments_CommentLineRangeSchema: GenMessage<Message_ToolCall_InsertReviewComments_CommentLineRange>;
/**
 * The side of the diff the comment is attached to.
 *
 * @generated from enum warp.multi_agent.v1.Message.ToolCall.InsertReviewComments.CommentSide
 */
export declare enum Message_ToolCall_InsertReviewComments_CommentSide {
    /**
     * Right side, current file state, additions
     *
     * @generated from enum value: NEW = 0;
     */
    NEW = 0,
    /**
     * Left side, past file state, deletions
     *
     * @generated from enum value: OLD = 1;
     */
    OLD = 1
}
/**
 * Describes the enum warp.multi_agent.v1.Message.ToolCall.InsertReviewComments.CommentSide.
 */
export declare const Message_ToolCall_InsertReviewComments_CommentSideSchema: GenEnum<Message_ToolCall_InsertReviewComments_CommentSide>;
/**
 * A tool call to run a Skill.
 *
 * @generated from message warp.multi_agent.v1.Message.ToolCall.ReadSkill
 */
export type Message_ToolCall_ReadSkill = Message$1<"warp.multi_agent.v1.Message.ToolCall.ReadSkill"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.Message.ToolCall.ReadSkill.skill_reference
     */
    skillReference: {
        /**
         * The path to the SKILL.md to be read.
         *
         * @generated from field: string skill_path = 1;
         */
        value: string;
        case: "skillPath";
    } | {
        /**
         * The unique identifier for a skill bundled with the client.
         *
         * @generated from field: string bundled_skill_id = 2;
         */
        value: string;
        case: "bundledSkillId";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * The name of the skill.
     *
     * @generated from field: string name = 3;
     */
    name: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.ReadSkill.
 * Use `create(Message_ToolCall_ReadSkillSchema)` to create a new message.
 */
export declare const Message_ToolCall_ReadSkillSchema: GenMessage<Message_ToolCall_ReadSkill>;
/**
 * @generated from message warp.multi_agent.v1.Message.ToolCall.UseComputer
 */
export type Message_ToolCall_UseComputer = Message$1<"warp.multi_agent.v1.Message.ToolCall.UseComputer"> & {
    /**
     * A series of actions to execute on the machine.
     *
     * @generated from field: repeated warp.multi_agent.v1.Message.ToolCall.UseComputer.Action actions = 1;
     */
    actions: Message_ToolCall_UseComputer_Action[];
    /**
     * If set, a screenshot will be captured after the actions are executed.
     *
     * The parameters specify what constraints, if any, the client must apply
     * to the screenshot.
     *
     * @generated from field: warp.multi_agent.v1.Message.ToolCall.ScreenshotParams post_actions_screenshot_params = 2;
     */
    postActionsScreenshotParams?: Message_ToolCall_ScreenshotParams;
    /**
     * User-facing message of what the actions are doing.
     *
     * @generated from field: string action_summary = 3;
     */
    actionSummary: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.UseComputer.
 * Use `create(Message_ToolCall_UseComputerSchema)` to create a new message.
 */
export declare const Message_ToolCall_UseComputerSchema: GenMessage<Message_ToolCall_UseComputer>;
/**
 * @generated from message warp.multi_agent.v1.Message.ToolCall.UseComputer.Action
 */
export type Message_ToolCall_UseComputer_Action = Message$1<"warp.multi_agent.v1.Message.ToolCall.UseComputer.Action"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.type
     */
    type: {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.MouseMove mouse_move = 1;
         */
        value: Message_ToolCall_UseComputer_Action_MouseMove;
        case: "mouseMove";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.MouseDown mouse_down = 2;
         */
        value: Message_ToolCall_UseComputer_Action_MouseDown;
        case: "mouseDown";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.MouseUp mouse_up = 3;
         */
        value: Message_ToolCall_UseComputer_Action_MouseUp;
        case: "mouseUp";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.MouseWheel mouse_wheel = 4;
         */
        value: Message_ToolCall_UseComputer_Action_MouseWheel;
        case: "mouseWheel";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.Wait wait = 5;
         */
        value: Message_ToolCall_UseComputer_Action_Wait;
        case: "wait";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.TypeText type_text = 6;
         */
        value: Message_ToolCall_UseComputer_Action_TypeText;
        case: "typeText";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.KeyDown key_down = 7;
         */
        value: Message_ToolCall_UseComputer_Action_KeyDown;
        case: "keyDown";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.KeyUp key_up = 8;
         */
        value: Message_ToolCall_UseComputer_Action_KeyUp;
        case: "keyUp";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.
 * Use `create(Message_ToolCall_UseComputer_ActionSchema)` to create a new message.
 */
export declare const Message_ToolCall_UseComputer_ActionSchema: GenMessage<Message_ToolCall_UseComputer_Action>;
/**
 * @generated from message warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.MouseMove
 */
export type Message_ToolCall_UseComputer_Action_MouseMove = Message$1<"warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.MouseMove"> & {
    /**
     * @generated from field: warp.multi_agent.v1.Coordinates to = 1;
     */
    to?: Coordinates;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.MouseMove.
 * Use `create(Message_ToolCall_UseComputer_Action_MouseMoveSchema)` to create a new message.
 */
export declare const Message_ToolCall_UseComputer_Action_MouseMoveSchema: GenMessage<Message_ToolCall_UseComputer_Action_MouseMove>;
/**
 * @generated from message warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.MouseDown
 */
export type Message_ToolCall_UseComputer_Action_MouseDown = Message$1<"warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.MouseDown"> & {
    /**
     * @generated from field: warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.MouseButton button = 1;
     */
    button: Message_ToolCall_UseComputer_Action_MouseButton;
    /**
     * @generated from field: warp.multi_agent.v1.Coordinates at = 2;
     */
    at?: Coordinates;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.MouseDown.
 * Use `create(Message_ToolCall_UseComputer_Action_MouseDownSchema)` to create a new message.
 */
export declare const Message_ToolCall_UseComputer_Action_MouseDownSchema: GenMessage<Message_ToolCall_UseComputer_Action_MouseDown>;
/**
 * @generated from message warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.MouseUp
 */
export type Message_ToolCall_UseComputer_Action_MouseUp = Message$1<"warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.MouseUp"> & {
    /**
     * @generated from field: warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.MouseButton button = 1;
     */
    button: Message_ToolCall_UseComputer_Action_MouseButton;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.MouseUp.
 * Use `create(Message_ToolCall_UseComputer_Action_MouseUpSchema)` to create a new message.
 */
export declare const Message_ToolCall_UseComputer_Action_MouseUpSchema: GenMessage<Message_ToolCall_UseComputer_Action_MouseUp>;
/**
 * @generated from message warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.MouseWheel
 */
export type Message_ToolCall_UseComputer_Action_MouseWheel = Message$1<"warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.MouseWheel"> & {
    /**
     * @generated from field: warp.multi_agent.v1.Coordinates at = 1;
     */
    at?: Coordinates;
    /**
     * @generated from field: warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.MouseWheel.Direction direction = 2;
     */
    direction: Message_ToolCall_UseComputer_Action_MouseWheel_Direction;
    /**
     * The model providers can provide a scroll distance either in pixels or clicks.
     *
     * @generated from oneof warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.MouseWheel.distance
     */
    distance: {
        /**
         * The number of pixels to scroll.
         *
         * @generated from field: int32 pixels = 3;
         */
        value: number;
        case: "pixels";
    } | {
        /**
         * The number of times the scroll button is clicked.
         *
         * @generated from field: int32 clicks = 4;
         */
        value: number;
        case: "clicks";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.MouseWheel.
 * Use `create(Message_ToolCall_UseComputer_Action_MouseWheelSchema)` to create a new message.
 */
export declare const Message_ToolCall_UseComputer_Action_MouseWheelSchema: GenMessage<Message_ToolCall_UseComputer_Action_MouseWheel>;
/**
 * @generated from enum warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.MouseWheel.Direction
 */
export declare enum Message_ToolCall_UseComputer_Action_MouseWheel_Direction {
    /**
     * @generated from enum value: UP = 0;
     */
    UP = 0,
    /**
     * @generated from enum value: DOWN = 1;
     */
    DOWN = 1,
    /**
     * @generated from enum value: LEFT = 2;
     */
    LEFT = 2,
    /**
     * @generated from enum value: RIGHT = 3;
     */
    RIGHT = 3
}
/**
 * Describes the enum warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.MouseWheel.Direction.
 */
export declare const Message_ToolCall_UseComputer_Action_MouseWheel_DirectionSchema: GenEnum<Message_ToolCall_UseComputer_Action_MouseWheel_Direction>;
/**
 * @generated from message warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.Wait
 */
export type Message_ToolCall_UseComputer_Action_Wait = Message$1<"warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.Wait"> & {
    /**
     * @generated from field: google.protobuf.Duration duration = 1;
     */
    duration?: Duration;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.Wait.
 * Use `create(Message_ToolCall_UseComputer_Action_WaitSchema)` to create a new message.
 */
export declare const Message_ToolCall_UseComputer_Action_WaitSchema: GenMessage<Message_ToolCall_UseComputer_Action_Wait>;
/**
 * @generated from message warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.TypeText
 */
export type Message_ToolCall_UseComputer_Action_TypeText = Message$1<"warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.TypeText"> & {
    /**
     * @generated from field: string text = 1;
     */
    text: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.TypeText.
 * Use `create(Message_ToolCall_UseComputer_Action_TypeTextSchema)` to create a new message.
 */
export declare const Message_ToolCall_UseComputer_Action_TypeTextSchema: GenMessage<Message_ToolCall_UseComputer_Action_TypeText>;
/**
 * Representation of a single key on the keyboard.
 *
 * @generated from message warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.Key
 */
export type Message_ToolCall_UseComputer_Action_Key = Message$1<"warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.Key"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.Key.data
     */
    data: {
        /**
         * Representation of a non-character key (e.g. "Tab", "Enter"). On MacOS and
         * Windows, this is a keycode that represents the physical key. On Linux,
         * this is an X11 keysym.
         *
         * @generated from field: int32 keycode = 1;
         */
        value: number;
        case: "keycode";
    } | {
        /**
         * A character key (e.g. "a", "+").
         *
         * @generated from field: string char = 2;
         */
        value: string;
        case: "char";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.Key.
 * Use `create(Message_ToolCall_UseComputer_Action_KeySchema)` to create a new message.
 */
export declare const Message_ToolCall_UseComputer_Action_KeySchema: GenMessage<Message_ToolCall_UseComputer_Action_Key>;
/**
 * @generated from message warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.KeyDown
 */
export type Message_ToolCall_UseComputer_Action_KeyDown = Message$1<"warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.KeyDown"> & {
    /**
     * @generated from field: warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.Key key = 1;
     */
    key?: Message_ToolCall_UseComputer_Action_Key;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.KeyDown.
 * Use `create(Message_ToolCall_UseComputer_Action_KeyDownSchema)` to create a new message.
 */
export declare const Message_ToolCall_UseComputer_Action_KeyDownSchema: GenMessage<Message_ToolCall_UseComputer_Action_KeyDown>;
/**
 * @generated from message warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.KeyUp
 */
export type Message_ToolCall_UseComputer_Action_KeyUp = Message$1<"warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.KeyUp"> & {
    /**
     * @generated from field: warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.Key key = 2;
     */
    key?: Message_ToolCall_UseComputer_Action_Key;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.KeyUp.
 * Use `create(Message_ToolCall_UseComputer_Action_KeyUpSchema)` to create a new message.
 */
export declare const Message_ToolCall_UseComputer_Action_KeyUpSchema: GenMessage<Message_ToolCall_UseComputer_Action_KeyUp>;
/**
 * @generated from enum warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.MouseButton
 */
export declare enum Message_ToolCall_UseComputer_Action_MouseButton {
    /**
     * @generated from enum value: LEFT = 0;
     */
    LEFT = 0,
    /**
     * @generated from enum value: RIGHT = 1;
     */
    RIGHT = 1,
    /**
     * @generated from enum value: MIDDLE = 2;
     */
    MIDDLE = 2,
    /**
     * @generated from enum value: BACK = 3;
     */
    BACK = 3,
    /**
     * @generated from enum value: FORWARD = 4;
     */
    FORWARD = 4
}
/**
 * Describes the enum warp.multi_agent.v1.Message.ToolCall.UseComputer.Action.MouseButton.
 */
export declare const Message_ToolCall_UseComputer_Action_MouseButtonSchema: GenEnum<Message_ToolCall_UseComputer_Action_MouseButton>;
/**
 * A tool call to check with the client that the agent is allowed to initiate
 * computer use.
 *
 * @generated from message warp.multi_agent.v1.Message.ToolCall.RequestComputerUse
 */
export type Message_ToolCall_RequestComputerUse = Message$1<"warp.multi_agent.v1.Message.ToolCall.RequestComputerUse"> & {
    /**
     * A brief description of what the agent wants to do with computer use.
     *
     * @generated from field: string task_summary = 1;
     */
    taskSummary: string;
    /**
     * The parameters that specify the constrains the client must apply to the
     * screenshot.
     *
     * @generated from field: warp.multi_agent.v1.Message.ToolCall.ScreenshotParams screenshot_params = 2;
     */
    screenshotParams?: Message_ToolCall_ScreenshotParams;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.RequestComputerUse.
 * Use `create(Message_ToolCall_RequestComputerUseSchema)` to create a new message.
 */
export declare const Message_ToolCall_RequestComputerUseSchema: GenMessage<Message_ToolCall_RequestComputerUse>;
/**
 * @generated from message warp.multi_agent.v1.Message.ToolCall.ScreenshotParams
 */
export type Message_ToolCall_ScreenshotParams = Message$1<"warp.multi_agent.v1.Message.ToolCall.ScreenshotParams"> & {
    /**
     * The maximum length of the long edge of the screenshot in pixels.
     *
     * @generated from field: int32 max_long_edge_px = 1;
     */
    maxLongEdgePx: number;
    /**
     * The maximum total number of pixels in the screenshot.
     *
     * @generated from field: int32 max_total_px = 2;
     */
    maxTotalPx: number;
    /**
     * Capture a rectangular sub-region of the display. If unset, will capture
     * the full source.
     *
     * @generated from field: warp.multi_agent.v1.Message.ToolCall.ScreenshotParams.Region region = 3;
     */
    region?: Message_ToolCall_ScreenshotParams_Region;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.ScreenshotParams.
 * Use `create(Message_ToolCall_ScreenshotParamsSchema)` to create a new message.
 */
export declare const Message_ToolCall_ScreenshotParamsSchema: GenMessage<Message_ToolCall_ScreenshotParams>;
/**
 * A rectangular region defined by its top-left and bottom-right corners,
 * in physical screen pixel coordinates.
 *
 * @generated from message warp.multi_agent.v1.Message.ToolCall.ScreenshotParams.Region
 */
export type Message_ToolCall_ScreenshotParams_Region = Message$1<"warp.multi_agent.v1.Message.ToolCall.ScreenshotParams.Region"> & {
    /**
     * @generated from field: warp.multi_agent.v1.Coordinates top_left = 1;
     */
    topLeft?: Coordinates;
    /**
     * @generated from field: warp.multi_agent.v1.Coordinates bottom_right = 2;
     */
    bottomRight?: Coordinates;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCall.ScreenshotParams.Region.
 * Use `create(Message_ToolCall_ScreenshotParams_RegionSchema)` to create a new message.
 */
export declare const Message_ToolCall_ScreenshotParams_RegionSchema: GenMessage<Message_ToolCall_ScreenshotParams_Region>;
/**
 * Entry in the message log representing the result of a tool call.
 *
 * @generated from message warp.multi_agent.v1.Message.ToolCallResult
 */
export type Message_ToolCallResult = Message$1<"warp.multi_agent.v1.Message.ToolCallResult"> & {
    /**
     * @generated from field: string tool_call_id = 1;
     */
    toolCallId: string;
    /**
     * Context that the client supplied as part of the tool call result input.
     *
     * Not included for `ServerResult`s.
     *
     * @generated from field: warp.multi_agent.v1.InputContext context = 11;
     */
    context?: InputContext;
    /**
     * @generated from oneof warp.multi_agent.v1.Message.ToolCallResult.result
     */
    result: {
        /**
         * @generated from field: warp.multi_agent.v1.RunShellCommandResult run_shell_command = 2;
         */
        value: RunShellCommandResult;
        case: "runShellCommand";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.SearchCodebaseResult search_codebase = 3;
         */
        value: SearchCodebaseResult;
        case: "searchCodebase";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCallResult.ServerResult server = 4;
         */
        value: Message_ToolCallResult_ServerResult;
        case: "server";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ReadFilesResult read_files = 5;
         */
        value: ReadFilesResult;
        case: "readFiles";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ApplyFileDiffsResult apply_file_diffs = 6;
         */
        value: ApplyFileDiffsResult;
        case: "applyFileDiffs";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.SuggestPlanResult suggest_plan = 7;
         */
        value: SuggestPlanResult;
        case: "suggestPlan";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.SuggestCreatePlanResult suggest_create_plan = 8;
         */
        value: SuggestCreatePlanResult;
        case: "suggestCreatePlan";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.GrepResult grep = 9;
         */
        value: GrepResult;
        case: "grep";
    } | {
        /**
         * DEPRECATED: Being replaced by FileGlobV2Result.
         *
         * @generated from field: warp.multi_agent.v1.FileGlobResult file_glob = 10 [deprecated = true];
         * @deprecated
         */
        value: FileGlobResult;
        case: "fileGlob";
    } | {
        /**
         * @generated from field: google.protobuf.Empty cancel = 14;
         */
        value: Empty;
        case: "cancel";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ReadMCPResourceResult read_mcp_resource = 15;
         */
        value: ReadMCPResourceResult;
        case: "readMcpResource";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.CallMCPToolResult call_mcp_tool = 16;
         */
        value: CallMCPToolResult;
        case: "callMcpTool";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.WriteToLongRunningShellCommandResult write_to_long_running_shell_command = 17;
         */
        value: WriteToLongRunningShellCommandResult;
        case: "writeToLongRunningShellCommand";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.SuggestNewConversationResult suggest_new_conversation = 18;
         */
        value: SuggestNewConversationResult;
        case: "suggestNewConversation";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.FileGlobV2Result file_glob_v2 = 19;
         */
        value: FileGlobV2Result;
        case: "fileGlobV2";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.SuggestPromptResult suggest_prompt = 20;
         */
        value: SuggestPromptResult;
        case: "suggestPrompt";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.OpenCodeReviewResult open_code_review = 21;
         */
        value: OpenCodeReviewResult;
        case: "openCodeReview";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.InitProjectResult init_project = 22;
         */
        value: InitProjectResult;
        case: "initProject";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ToolCallResult.SubagentResult subagent = 23;
         */
        value: Message_ToolCallResult_SubagentResult;
        case: "subagent";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ReadDocumentsResult read_documents = 24;
         */
        value: ReadDocumentsResult;
        case: "readDocuments";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.EditDocumentsResult edit_documents = 25;
         */
        value: EditDocumentsResult;
        case: "editDocuments";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.CreateDocumentsResult create_documents = 26;
         */
        value: CreateDocumentsResult;
        case: "createDocuments";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ReadShellCommandOutputResult read_shell_command_output = 27;
         */
        value: ReadShellCommandOutputResult;
        case: "readShellCommandOutput";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.UseComputerResult use_computer = 28;
         */
        value: UseComputerResult;
        case: "useComputer";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.InsertReviewCommentsResult insert_review_comments = 29;
         */
        value: InsertReviewCommentsResult;
        case: "insertReviewComments";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ReadSkillResult read_skill = 30;
         */
        value: ReadSkillResult;
        case: "readSkill";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.RequestComputerUseResult request_computer_use_result = 31;
         */
        value: RequestComputerUseResult;
        case: "requestComputerUseResult";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.FetchConversationResult fetch_conversation = 32;
         */
        value: FetchConversationResult;
        case: "fetchConversation";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCallResult.
 * Use `create(Message_ToolCallResultSchema)` to create a new message.
 */
export declare const Message_ToolCallResultSchema: GenMessage<Message_ToolCallResult>;
/**
 * Result of a server-side tool call.
 * Provided by the server to simply roundtrip.
 *
 * @generated from message warp.multi_agent.v1.Message.ToolCallResult.ServerResult
 */
export type Message_ToolCallResult_ServerResult = Message$1<"warp.multi_agent.v1.Message.ToolCallResult.ServerResult"> & {
    /**
     * @generated from field: string serialized_result = 1;
     */
    serializedResult: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCallResult.ServerResult.
 * Use `create(Message_ToolCallResult_ServerResultSchema)` to create a new message.
 */
export declare const Message_ToolCallResult_ServerResultSchema: GenMessage<Message_ToolCallResult_ServerResult>;
/**
 * @generated from message warp.multi_agent.v1.Message.ToolCallResult.SubagentResult
 */
export type Message_ToolCallResult_SubagentResult = Message$1<"warp.multi_agent.v1.Message.ToolCallResult.SubagentResult"> & {
    /**
     * @generated from field: string payload = 1;
     */
    payload: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ToolCallResult.SubagentResult.
 * Use `create(Message_ToolCallResult_SubagentResultSchema)` to create a new message.
 */
export declare const Message_ToolCallResult_SubagentResultSchema: GenMessage<Message_ToolCallResult_SubagentResult>;
/**
 * An event that is preserved in message history
 * for server-side processing.
 *
 * The client should treat the `payload` as an opaque blob.
 *
 * @generated from message warp.multi_agent.v1.Message.ServerEvent
 */
export type Message_ServerEvent = Message$1<"warp.multi_agent.v1.Message.ServerEvent"> & {
    /**
     * @generated from field: string payload = 1;
     */
    payload: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ServerEvent.
 * Use `create(Message_ServerEventSchema)` to create a new message.
 */
export declare const Message_ServerEventSchema: GenMessage<Message_ServerEvent>;
/**
 * Message for TODO list operations.
 *
 * @generated from message warp.multi_agent.v1.Message.UpdateTodos
 */
export type Message_UpdateTodos = Message$1<"warp.multi_agent.v1.Message.UpdateTodos"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.Message.UpdateTodos.operation
     */
    operation: {
        /**
         * @generated from field: warp.multi_agent.v1.CreateTodoList create_todo_list = 1;
         */
        value: CreateTodoList;
        case: "createTodoList";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.UpdatePendingTodos update_pending_todos = 2;
         */
        value: UpdatePendingTodos;
        case: "updatePendingTodos";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.MarkTodosCompleted mark_todos_completed = 3;
         */
        value: MarkTodosCompleted;
        case: "markTodosCompleted";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.Message.UpdateTodos.
 * Use `create(Message_UpdateTodosSchema)` to create a new message.
 */
export declare const Message_UpdateTodosSchema: GenMessage<Message_UpdateTodos>;
/**
 * Message for review comment operations.
 *
 * @generated from message warp.multi_agent.v1.Message.UpdateReviewComments
 */
export type Message_UpdateReviewComments = Message$1<"warp.multi_agent.v1.Message.UpdateReviewComments"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.Message.UpdateReviewComments.operation
     */
    operation: {
        /**
         * @generated from field: warp.multi_agent.v1.Message.UpdateReviewComments.AddressReviewComments address_review_comments = 1;
         */
        value: Message_UpdateReviewComments_AddressReviewComments;
        case: "addressReviewComments";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.Message.UpdateReviewComments.
 * Use `create(Message_UpdateReviewCommentsSchema)` to create a new message.
 */
export declare const Message_UpdateReviewCommentsSchema: GenMessage<Message_UpdateReviewComments>;
/**
 * @generated from message warp.multi_agent.v1.Message.UpdateReviewComments.AddressReviewComments
 */
export type Message_UpdateReviewComments_AddressReviewComments = Message$1<"warp.multi_agent.v1.Message.UpdateReviewComments.AddressReviewComments"> & {
    /**
     * @generated from field: repeated string comment_ids = 1;
     */
    commentIds: string[];
};
/**
 * Describes the message warp.multi_agent.v1.Message.UpdateReviewComments.AddressReviewComments.
 * Use `create(Message_UpdateReviewComments_AddressReviewCommentsSchema)` to create a new message.
 */
export declare const Message_UpdateReviewComments_AddressReviewCommentsSchema: GenMessage<Message_UpdateReviewComments_AddressReviewComments>;
/**
 * @generated from message warp.multi_agent.v1.Message.WebSearch
 */
export type Message_WebSearch = Message$1<"warp.multi_agent.v1.Message.WebSearch"> & {
    /**
     * @generated from field: warp.multi_agent.v1.Message.WebSearch.Status status = 1;
     */
    status?: Message_WebSearch_Status;
};
/**
 * Describes the message warp.multi_agent.v1.Message.WebSearch.
 * Use `create(Message_WebSearchSchema)` to create a new message.
 */
export declare const Message_WebSearchSchema: GenMessage<Message_WebSearch>;
/**
 * @generated from message warp.multi_agent.v1.Message.WebSearch.Status
 */
export type Message_WebSearch_Status = Message$1<"warp.multi_agent.v1.Message.WebSearch.Status"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.Message.WebSearch.Status.type
     */
    type: {
        /**
         * @generated from field: warp.multi_agent.v1.Message.WebSearch.Status.Searching searching = 1;
         */
        value: Message_WebSearch_Status_Searching;
        case: "searching";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.WebSearch.Status.Success success = 2;
         */
        value: Message_WebSearch_Status_Success;
        case: "success";
    } | {
        /**
         * @generated from field: google.protobuf.Empty error = 3;
         */
        value: Empty;
        case: "error";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.Message.WebSearch.Status.
 * Use `create(Message_WebSearch_StatusSchema)` to create a new message.
 */
export declare const Message_WebSearch_StatusSchema: GenMessage<Message_WebSearch_Status>;
/**
 * @generated from message warp.multi_agent.v1.Message.WebSearch.Status.Searching
 */
export type Message_WebSearch_Status_Searching = Message$1<"warp.multi_agent.v1.Message.WebSearch.Status.Searching"> & {
    /**
     * @generated from field: string query = 1;
     */
    query: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.WebSearch.Status.Searching.
 * Use `create(Message_WebSearch_Status_SearchingSchema)` to create a new message.
 */
export declare const Message_WebSearch_Status_SearchingSchema: GenMessage<Message_WebSearch_Status_Searching>;
/**
 * @generated from message warp.multi_agent.v1.Message.WebSearch.Status.Success
 */
export type Message_WebSearch_Status_Success = Message$1<"warp.multi_agent.v1.Message.WebSearch.Status.Success"> & {
    /**
     * @generated from field: string query = 1;
     */
    query: string;
    /**
     * @generated from field: repeated warp.multi_agent.v1.Message.WebSearch.Status.Success.SearchedPage pages = 2;
     */
    pages: Message_WebSearch_Status_Success_SearchedPage[];
};
/**
 * Describes the message warp.multi_agent.v1.Message.WebSearch.Status.Success.
 * Use `create(Message_WebSearch_Status_SuccessSchema)` to create a new message.
 */
export declare const Message_WebSearch_Status_SuccessSchema: GenMessage<Message_WebSearch_Status_Success>;
/**
 * @generated from message warp.multi_agent.v1.Message.WebSearch.Status.Success.SearchedPage
 */
export type Message_WebSearch_Status_Success_SearchedPage = Message$1<"warp.multi_agent.v1.Message.WebSearch.Status.Success.SearchedPage"> & {
    /**
     * @generated from field: string url = 1;
     */
    url: string;
    /**
     * @generated from field: string title = 2;
     */
    title: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.WebSearch.Status.Success.SearchedPage.
 * Use `create(Message_WebSearch_Status_Success_SearchedPageSchema)` to create a new message.
 */
export declare const Message_WebSearch_Status_Success_SearchedPageSchema: GenMessage<Message_WebSearch_Status_Success_SearchedPage>;
/**
 * @generated from message warp.multi_agent.v1.Message.WebFetch
 */
export type Message_WebFetch = Message$1<"warp.multi_agent.v1.Message.WebFetch"> & {
    /**
     * @generated from field: warp.multi_agent.v1.Message.WebFetch.Status status = 1;
     */
    status?: Message_WebFetch_Status;
};
/**
 * Describes the message warp.multi_agent.v1.Message.WebFetch.
 * Use `create(Message_WebFetchSchema)` to create a new message.
 */
export declare const Message_WebFetchSchema: GenMessage<Message_WebFetch>;
/**
 * @generated from message warp.multi_agent.v1.Message.WebFetch.Status
 */
export type Message_WebFetch_Status = Message$1<"warp.multi_agent.v1.Message.WebFetch.Status"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.Message.WebFetch.Status.type
     */
    type: {
        /**
         * @generated from field: warp.multi_agent.v1.Message.WebFetch.Status.Fetching fetching = 1;
         */
        value: Message_WebFetch_Status_Fetching;
        case: "fetching";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.WebFetch.Status.Success success = 2;
         */
        value: Message_WebFetch_Status_Success;
        case: "success";
    } | {
        /**
         * @generated from field: google.protobuf.Empty error = 3;
         */
        value: Empty;
        case: "error";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.Message.WebFetch.Status.
 * Use `create(Message_WebFetch_StatusSchema)` to create a new message.
 */
export declare const Message_WebFetch_StatusSchema: GenMessage<Message_WebFetch_Status>;
/**
 * @generated from message warp.multi_agent.v1.Message.WebFetch.Status.Fetching
 */
export type Message_WebFetch_Status_Fetching = Message$1<"warp.multi_agent.v1.Message.WebFetch.Status.Fetching"> & {
    /**
     * @generated from field: repeated string urls = 1;
     */
    urls: string[];
};
/**
 * Describes the message warp.multi_agent.v1.Message.WebFetch.Status.Fetching.
 * Use `create(Message_WebFetch_Status_FetchingSchema)` to create a new message.
 */
export declare const Message_WebFetch_Status_FetchingSchema: GenMessage<Message_WebFetch_Status_Fetching>;
/**
 * @generated from message warp.multi_agent.v1.Message.WebFetch.Status.Success
 */
export type Message_WebFetch_Status_Success = Message$1<"warp.multi_agent.v1.Message.WebFetch.Status.Success"> & {
    /**
     * @generated from field: repeated warp.multi_agent.v1.Message.WebFetch.Status.Success.FetchedPage pages = 1;
     */
    pages: Message_WebFetch_Status_Success_FetchedPage[];
};
/**
 * Describes the message warp.multi_agent.v1.Message.WebFetch.Status.Success.
 * Use `create(Message_WebFetch_Status_SuccessSchema)` to create a new message.
 */
export declare const Message_WebFetch_Status_SuccessSchema: GenMessage<Message_WebFetch_Status_Success>;
/**
 * @generated from message warp.multi_agent.v1.Message.WebFetch.Status.Success.FetchedPage
 */
export type Message_WebFetch_Status_Success_FetchedPage = Message$1<"warp.multi_agent.v1.Message.WebFetch.Status.Success.FetchedPage"> & {
    /**
     * @generated from field: string url = 1;
     */
    url: string;
    /**
     * @generated from field: string title = 2;
     */
    title: string;
    /**
     * @generated from field: bool success = 3;
     */
    success: boolean;
};
/**
 * Describes the message warp.multi_agent.v1.Message.WebFetch.Status.Success.FetchedPage.
 * Use `create(Message_WebFetch_Status_Success_FetchedPageSchema)` to create a new message.
 */
export declare const Message_WebFetch_Status_Success_FetchedPageSchema: GenMessage<Message_WebFetch_Status_Success_FetchedPage>;
/**
 * Debug output message type for staging/local development only.
 * These messages are emitted by the server for debugging purposes
 * and should only be displayed on WarpDev client builds.
 *
 * @generated from message warp.multi_agent.v1.Message.DebugOutput
 */
export type Message_DebugOutput = Message$1<"warp.multi_agent.v1.Message.DebugOutput"> & {
    /**
     * @generated from field: string text = 1;
     */
    text: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.DebugOutput.
 * Use `create(Message_DebugOutputSchema)` to create a new message.
 */
export declare const Message_DebugOutputSchema: GenMessage<Message_DebugOutput>;
/**
 * Message for artifact-related events.
 *
 * @generated from message warp.multi_agent.v1.Message.ArtifactEvent
 */
export type Message_ArtifactEvent = Message$1<"warp.multi_agent.v1.Message.ArtifactEvent"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.Message.ArtifactEvent.event
     */
    event: {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ArtifactEvent.ArtifactCreated created = 1;
         */
        value: Message_ArtifactEvent_ArtifactCreated;
        case: "created";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.Message.ArtifactEvent.
 * Use `create(Message_ArtifactEventSchema)` to create a new message.
 */
export declare const Message_ArtifactEventSchema: GenMessage<Message_ArtifactEvent>;
/**
 * @generated from message warp.multi_agent.v1.Message.ArtifactEvent.PullRequestArtifact
 */
export type Message_ArtifactEvent_PullRequestArtifact = Message$1<"warp.multi_agent.v1.Message.ArtifactEvent.PullRequestArtifact"> & {
    /**
     * @generated from field: string url = 1;
     */
    url: string;
    /**
     * @generated from field: string branch = 2;
     */
    branch: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ArtifactEvent.PullRequestArtifact.
 * Use `create(Message_ArtifactEvent_PullRequestArtifactSchema)` to create a new message.
 */
export declare const Message_ArtifactEvent_PullRequestArtifactSchema: GenMessage<Message_ArtifactEvent_PullRequestArtifact>;
/**
 * @generated from message warp.multi_agent.v1.Message.ArtifactEvent.ScreenshotArtifact
 */
export type Message_ArtifactEvent_ScreenshotArtifact = Message$1<"warp.multi_agent.v1.Message.ArtifactEvent.ScreenshotArtifact"> & {
    /**
     * @generated from field: string artifact_uid = 1;
     */
    artifactUid: string;
    /**
     * @generated from field: string mime_type = 2;
     */
    mimeType: string;
    /**
     * @generated from field: string description = 3;
     */
    description: string;
};
/**
 * Describes the message warp.multi_agent.v1.Message.ArtifactEvent.ScreenshotArtifact.
 * Use `create(Message_ArtifactEvent_ScreenshotArtifactSchema)` to create a new message.
 */
export declare const Message_ArtifactEvent_ScreenshotArtifactSchema: GenMessage<Message_ArtifactEvent_ScreenshotArtifact>;
/**
 * Notifies the client that an artifact was created (e.g. a PR).
 *
 * @generated from message warp.multi_agent.v1.Message.ArtifactEvent.ArtifactCreated
 */
export type Message_ArtifactEvent_ArtifactCreated = Message$1<"warp.multi_agent.v1.Message.ArtifactEvent.ArtifactCreated"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.Message.ArtifactEvent.ArtifactCreated.artifact
     */
    artifact: {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ArtifactEvent.PullRequestArtifact pull_request = 1;
         */
        value: Message_ArtifactEvent_PullRequestArtifact;
        case: "pullRequest";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Message.ArtifactEvent.ScreenshotArtifact screenshot = 2;
         */
        value: Message_ArtifactEvent_ScreenshotArtifact;
        case: "screenshot";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.Message.ArtifactEvent.ArtifactCreated.
 * Use `create(Message_ArtifactEvent_ArtifactCreatedSchema)` to create a new message.
 */
export declare const Message_ArtifactEvent_ArtifactCreatedSchema: GenMessage<Message_ArtifactEvent_ArtifactCreated>;
/**
 * @generated from message warp.multi_agent.v1.Message.InvokeSkill
 */
export type Message_InvokeSkill = Message$1<"warp.multi_agent.v1.Message.InvokeSkill"> & {
    /**
     * @generated from field: warp.multi_agent.v1.Skill skill = 1;
     */
    skill?: Skill;
};
/**
 * Describes the message warp.multi_agent.v1.Message.InvokeSkill.
 * Use `create(Message_InvokeSkillSchema)` to create a new message.
 */
export declare const Message_InvokeSkillSchema: GenMessage<Message_InvokeSkill>;
/**
 * Result of a `RunShellCommand` tool call.
 *
 * @generated from message warp.multi_agent.v1.RunShellCommandResult
 */
export type RunShellCommandResult = Message$1<"warp.multi_agent.v1.RunShellCommandResult"> & {
    /**
     * The command that was actually run. This might be different
     * from the command in the corresponding tool-call payload if the user
     * edited it before running.
     *
     * @generated from field: string command = 3;
     */
    command: string;
    /**
     * @generated from oneof warp.multi_agent.v1.RunShellCommandResult.result
     */
    result: {
        /**
         * The command is now considered long-running and this is it's latest snapshot.
         *
         * @generated from field: warp.multi_agent.v1.LongRunningShellCommandSnapshot long_running_command_snapshot = 4;
         */
        value: LongRunningShellCommandSnapshot;
        case: "longRunningCommandSnapshot";
    } | {
        /**
         * The command completed.
         *
         * @generated from field: warp.multi_agent.v1.ShellCommandFinished command_finished = 5;
         */
        value: ShellCommandFinished;
        case: "commandFinished";
    } | {
        /**
         * The command was denied permission to run.
         *
         * @generated from field: warp.multi_agent.v1.PermissionDenied permission_denied = 6;
         */
        value: PermissionDenied;
        case: "permissionDenied";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * Deprecated; use [ShellCommandFinished::output] instead;
     *
     * @generated from field: string output = 1 [deprecated = true];
     * @deprecated
     */
    output: string;
    /**
     * Deprecated; use [ShellCommandFinished::exit_code] instead;
     *
     * @generated from field: int32 exit_code = 2 [deprecated = true];
     * @deprecated
     */
    exitCode: number;
};
/**
 * Describes the message warp.multi_agent.v1.RunShellCommandResult.
 * Use `create(RunShellCommandResultSchema)` to create a new message.
 */
export declare const RunShellCommandResultSchema: GenMessage<RunShellCommandResult>;
/**
 * Result of a `ReadFiles` tool call.
 *
 * @generated from message warp.multi_agent.v1.ReadFilesResult
 */
export type ReadFilesResult = Message$1<"warp.multi_agent.v1.ReadFilesResult"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.ReadFilesResult.result
     */
    result: {
        /**
         * @generated from field: warp.multi_agent.v1.ReadFilesResult.TextFilesSuccess text_files_success = 1;
         */
        value: ReadFilesResult_TextFilesSuccess;
        case: "textFilesSuccess";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ReadFilesResult.AnyFilesSuccess any_files_success = 3;
         */
        value: ReadFilesResult_AnyFilesSuccess;
        case: "anyFilesSuccess";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ReadFilesResult.Error error = 2;
         */
        value: ReadFilesResult_Error;
        case: "error";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.ReadFilesResult.
 * Use `create(ReadFilesResultSchema)` to create a new message.
 */
export declare const ReadFilesResultSchema: GenMessage<ReadFilesResult>;
/**
 * @generated from message warp.multi_agent.v1.ReadFilesResult.TextFilesSuccess
 */
export type ReadFilesResult_TextFilesSuccess = Message$1<"warp.multi_agent.v1.ReadFilesResult.TextFilesSuccess"> & {
    /**
     * @generated from field: repeated warp.multi_agent.v1.FileContent files = 1;
     */
    files: FileContent[];
};
/**
 * Describes the message warp.multi_agent.v1.ReadFilesResult.TextFilesSuccess.
 * Use `create(ReadFilesResult_TextFilesSuccessSchema)` to create a new message.
 */
export declare const ReadFilesResult_TextFilesSuccessSchema: GenMessage<ReadFilesResult_TextFilesSuccess>;
/**
 * @generated from message warp.multi_agent.v1.ReadFilesResult.AnyFilesSuccess
 */
export type ReadFilesResult_AnyFilesSuccess = Message$1<"warp.multi_agent.v1.ReadFilesResult.AnyFilesSuccess"> & {
    /**
     * @generated from field: repeated warp.multi_agent.v1.AnyFileContent files = 1;
     */
    files: AnyFileContent[];
};
/**
 * Describes the message warp.multi_agent.v1.ReadFilesResult.AnyFilesSuccess.
 * Use `create(ReadFilesResult_AnyFilesSuccessSchema)` to create a new message.
 */
export declare const ReadFilesResult_AnyFilesSuccessSchema: GenMessage<ReadFilesResult_AnyFilesSuccess>;
/**
 * @generated from message warp.multi_agent.v1.ReadFilesResult.Error
 */
export type ReadFilesResult_Error = Message$1<"warp.multi_agent.v1.ReadFilesResult.Error"> & {
    /**
     * @generated from field: string message = 1;
     */
    message: string;
};
/**
 * Describes the message warp.multi_agent.v1.ReadFilesResult.Error.
 * Use `create(ReadFilesResult_ErrorSchema)` to create a new message.
 */
export declare const ReadFilesResult_ErrorSchema: GenMessage<ReadFilesResult_Error>;
/**
 * Result of a `SearchCodebase` tool call.
 *
 * @generated from message warp.multi_agent.v1.SearchCodebaseResult
 */
export type SearchCodebaseResult = Message$1<"warp.multi_agent.v1.SearchCodebaseResult"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.SearchCodebaseResult.result
     */
    result: {
        /**
         * @generated from field: warp.multi_agent.v1.SearchCodebaseResult.Success success = 1;
         */
        value: SearchCodebaseResult_Success;
        case: "success";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.SearchCodebaseResult.Error error = 2;
         */
        value: SearchCodebaseResult_Error;
        case: "error";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.SearchCodebaseResult.
 * Use `create(SearchCodebaseResultSchema)` to create a new message.
 */
export declare const SearchCodebaseResultSchema: GenMessage<SearchCodebaseResult>;
/**
 * @generated from message warp.multi_agent.v1.SearchCodebaseResult.Success
 */
export type SearchCodebaseResult_Success = Message$1<"warp.multi_agent.v1.SearchCodebaseResult.Success"> & {
    /**
     * @generated from field: repeated warp.multi_agent.v1.FileContent files = 1;
     */
    files: FileContent[];
};
/**
 * Describes the message warp.multi_agent.v1.SearchCodebaseResult.Success.
 * Use `create(SearchCodebaseResult_SuccessSchema)` to create a new message.
 */
export declare const SearchCodebaseResult_SuccessSchema: GenMessage<SearchCodebaseResult_Success>;
/**
 * @generated from message warp.multi_agent.v1.SearchCodebaseResult.Error
 */
export type SearchCodebaseResult_Error = Message$1<"warp.multi_agent.v1.SearchCodebaseResult.Error"> & {
    /**
     * @generated from field: string message = 1;
     */
    message: string;
};
/**
 * Describes the message warp.multi_agent.v1.SearchCodebaseResult.Error.
 * Use `create(SearchCodebaseResult_ErrorSchema)` to create a new message.
 */
export declare const SearchCodebaseResult_ErrorSchema: GenMessage<SearchCodebaseResult_Error>;
/**
 * Result of a `ApplyFileDiffs` tool call.
 *
 * @generated from message warp.multi_agent.v1.ApplyFileDiffsResult
 */
export type ApplyFileDiffsResult = Message$1<"warp.multi_agent.v1.ApplyFileDiffsResult"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.ApplyFileDiffsResult.result
     */
    result: {
        /**
         * @generated from field: warp.multi_agent.v1.ApplyFileDiffsResult.Success success = 1;
         */
        value: ApplyFileDiffsResult_Success;
        case: "success";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ApplyFileDiffsResult.Error error = 2;
         */
        value: ApplyFileDiffsResult_Error;
        case: "error";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.ApplyFileDiffsResult.
 * Use `create(ApplyFileDiffsResultSchema)` to create a new message.
 */
export declare const ApplyFileDiffsResultSchema: GenMessage<ApplyFileDiffsResult>;
/**
 * @generated from message warp.multi_agent.v1.ApplyFileDiffsResult.Success
 */
export type ApplyFileDiffsResult_Success = Message$1<"warp.multi_agent.v1.ApplyFileDiffsResult.Success"> & {
    /**
     * Deprecated: Use updated_files_v2 instead. This field is kept for backward compatibility
     * with older clients and will be removed in a future version.
     *
     * @generated from field: repeated warp.multi_agent.v1.FileContent updated_files = 1 [deprecated = true];
     * @deprecated
     */
    updatedFiles: FileContent[];
    /**
     * @generated from field: repeated warp.multi_agent.v1.ApplyFileDiffsResult.Success.UpdatedFileContent updated_files_v2 = 2;
     */
    updatedFilesV2: ApplyFileDiffsResult_Success_UpdatedFileContent[];
    /**
     * @generated from field: repeated warp.multi_agent.v1.ApplyFileDiffsResult.Success.DeletedFile deleted_files = 3;
     */
    deletedFiles: ApplyFileDiffsResult_Success_DeletedFile[];
};
/**
 * Describes the message warp.multi_agent.v1.ApplyFileDiffsResult.Success.
 * Use `create(ApplyFileDiffsResult_SuccessSchema)` to create a new message.
 */
export declare const ApplyFileDiffsResult_SuccessSchema: GenMessage<ApplyFileDiffsResult_Success>;
/**
 * @generated from message warp.multi_agent.v1.ApplyFileDiffsResult.Success.UpdatedFileContent
 */
export type ApplyFileDiffsResult_Success_UpdatedFileContent = Message$1<"warp.multi_agent.v1.ApplyFileDiffsResult.Success.UpdatedFileContent"> & {
    /**
     * Content of the updated file.
     *
     * @generated from field: warp.multi_agent.v1.FileContent file = 1;
     */
    file?: FileContent;
    /**
     * Whether the applied update contains user edit.
     *
     * @generated from field: bool was_edited_by_user = 2;
     */
    wasEditedByUser: boolean;
};
/**
 * Describes the message warp.multi_agent.v1.ApplyFileDiffsResult.Success.UpdatedFileContent.
 * Use `create(ApplyFileDiffsResult_Success_UpdatedFileContentSchema)` to create a new message.
 */
export declare const ApplyFileDiffsResult_Success_UpdatedFileContentSchema: GenMessage<ApplyFileDiffsResult_Success_UpdatedFileContent>;
/**
 * @generated from message warp.multi_agent.v1.ApplyFileDiffsResult.Success.DeletedFile
 */
export type ApplyFileDiffsResult_Success_DeletedFile = Message$1<"warp.multi_agent.v1.ApplyFileDiffsResult.Success.DeletedFile"> & {
    /**
     * @generated from field: string file_path = 1;
     */
    filePath: string;
};
/**
 * Describes the message warp.multi_agent.v1.ApplyFileDiffsResult.Success.DeletedFile.
 * Use `create(ApplyFileDiffsResult_Success_DeletedFileSchema)` to create a new message.
 */
export declare const ApplyFileDiffsResult_Success_DeletedFileSchema: GenMessage<ApplyFileDiffsResult_Success_DeletedFile>;
/**
 * @generated from message warp.multi_agent.v1.ApplyFileDiffsResult.Error
 */
export type ApplyFileDiffsResult_Error = Message$1<"warp.multi_agent.v1.ApplyFileDiffsResult.Error"> & {
    /**
     * @generated from field: string message = 1;
     */
    message: string;
};
/**
 * Describes the message warp.multi_agent.v1.ApplyFileDiffsResult.Error.
 * Use `create(ApplyFileDiffsResult_ErrorSchema)` to create a new message.
 */
export declare const ApplyFileDiffsResult_ErrorSchema: GenMessage<ApplyFileDiffsResult_Error>;
/**
 * Result of a `SuggestCreatePlan` tool call.
 *
 * @generated from message warp.multi_agent.v1.SuggestCreatePlanResult
 */
export type SuggestCreatePlanResult = Message$1<"warp.multi_agent.v1.SuggestCreatePlanResult"> & {
    /**
     * @generated from field: bool accepted = 1;
     */
    accepted: boolean;
};
/**
 * Describes the message warp.multi_agent.v1.SuggestCreatePlanResult.
 * Use `create(SuggestCreatePlanResultSchema)` to create a new message.
 */
export declare const SuggestCreatePlanResultSchema: GenMessage<SuggestCreatePlanResult>;
/**
 * Result of a `SuggestPlan` tool call.
 *
 * @generated from message warp.multi_agent.v1.SuggestPlanResult
 */
export type SuggestPlanResult = Message$1<"warp.multi_agent.v1.SuggestPlanResult"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.SuggestPlanResult.result
     */
    result: {
        /**
         * The user accepted the plan as-is.
         *
         * @generated from field: google.protobuf.Empty accepted = 1;
         */
        value: Empty;
        case: "accepted";
    } | {
        /**
         * The user provided a manually-edited plan to execute.
         *
         * @generated from field: warp.multi_agent.v1.SuggestPlanResult.UserEditedPlan user_edited_plan = 2;
         */
        value: SuggestPlanResult_UserEditedPlan;
        case: "userEditedPlan";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.SuggestPlanResult.
 * Use `create(SuggestPlanResultSchema)` to create a new message.
 */
export declare const SuggestPlanResultSchema: GenMessage<SuggestPlanResult>;
/**
 * A plan that was provided by the user.
 *
 * @generated from message warp.multi_agent.v1.SuggestPlanResult.UserEditedPlan
 */
export type SuggestPlanResult_UserEditedPlan = Message$1<"warp.multi_agent.v1.SuggestPlanResult.UserEditedPlan"> & {
    /**
     * The plan text provided by the user.
     *
     * @generated from field: string plan_text = 1;
     */
    planText: string;
};
/**
 * Describes the message warp.multi_agent.v1.SuggestPlanResult.UserEditedPlan.
 * Use `create(SuggestPlanResult_UserEditedPlanSchema)` to create a new message.
 */
export declare const SuggestPlanResult_UserEditedPlanSchema: GenMessage<SuggestPlanResult_UserEditedPlan>;
/**
 * Result of a `Grep` tool call.
 *
 * @generated from message warp.multi_agent.v1.GrepResult
 */
export type GrepResult = Message$1<"warp.multi_agent.v1.GrepResult"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.GrepResult.result
     */
    result: {
        /**
         * @generated from field: warp.multi_agent.v1.GrepResult.Success success = 1;
         */
        value: GrepResult_Success;
        case: "success";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.GrepResult.Error error = 2;
         */
        value: GrepResult_Error;
        case: "error";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.GrepResult.
 * Use `create(GrepResultSchema)` to create a new message.
 */
export declare const GrepResultSchema: GenMessage<GrepResult>;
/**
 * @generated from message warp.multi_agent.v1.GrepResult.Success
 */
export type GrepResult_Success = Message$1<"warp.multi_agent.v1.GrepResult.Success"> & {
    /**
     * List of files containing lines that matched the grep query.
     *
     * @generated from field: repeated warp.multi_agent.v1.GrepResult.Success.GrepFileMatch matched_files = 1;
     */
    matchedFiles: GrepResult_Success_GrepFileMatch[];
};
/**
 * Describes the message warp.multi_agent.v1.GrepResult.Success.
 * Use `create(GrepResult_SuccessSchema)` to create a new message.
 */
export declare const GrepResult_SuccessSchema: GenMessage<GrepResult_Success>;
/**
 * @generated from message warp.multi_agent.v1.GrepResult.Success.GrepFileMatch
 */
export type GrepResult_Success_GrepFileMatch = Message$1<"warp.multi_agent.v1.GrepResult.Success.GrepFileMatch"> & {
    /**
     * The path to the file that matched the grep query.
     *
     * @generated from field: string file_path = 1;
     */
    filePath: string;
    /**
     * List of line matches within this file.
     *
     * @generated from field: repeated warp.multi_agent.v1.GrepResult.Success.GrepFileMatch.GrepLineMatch matched_lines = 2;
     */
    matchedLines: GrepResult_Success_GrepFileMatch_GrepLineMatch[];
};
/**
 * Describes the message warp.multi_agent.v1.GrepResult.Success.GrepFileMatch.
 * Use `create(GrepResult_Success_GrepFileMatchSchema)` to create a new message.
 */
export declare const GrepResult_Success_GrepFileMatchSchema: GenMessage<GrepResult_Success_GrepFileMatch>;
/**
 * @generated from message warp.multi_agent.v1.GrepResult.Success.GrepFileMatch.GrepLineMatch
 */
export type GrepResult_Success_GrepFileMatch_GrepLineMatch = Message$1<"warp.multi_agent.v1.GrepResult.Success.GrepFileMatch.GrepLineMatch"> & {
    /**
     * The matched line within the file. This currently only includes the
     * line number, but could be extended to include the line content in the
     * future.
     *
     * @generated from field: uint32 line_number = 1;
     */
    lineNumber: number;
};
/**
 * Describes the message warp.multi_agent.v1.GrepResult.Success.GrepFileMatch.GrepLineMatch.
 * Use `create(GrepResult_Success_GrepFileMatch_GrepLineMatchSchema)` to create a new message.
 */
export declare const GrepResult_Success_GrepFileMatch_GrepLineMatchSchema: GenMessage<GrepResult_Success_GrepFileMatch_GrepLineMatch>;
/**
 * @generated from message warp.multi_agent.v1.GrepResult.Error
 */
export type GrepResult_Error = Message$1<"warp.multi_agent.v1.GrepResult.Error"> & {
    /**
     * @generated from field: string message = 1;
     */
    message: string;
};
/**
 * Describes the message warp.multi_agent.v1.GrepResult.Error.
 * Use `create(GrepResult_ErrorSchema)` to create a new message.
 */
export declare const GrepResult_ErrorSchema: GenMessage<GrepResult_Error>;
/**
 * Result of a `FileGlob` tool call.
 *
 * @generated from message warp.multi_agent.v1.FileGlobResult
 */
export type FileGlobResult = Message$1<"warp.multi_agent.v1.FileGlobResult"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.FileGlobResult.result
     */
    result: {
        /**
         * @generated from field: warp.multi_agent.v1.FileGlobResult.Success success = 1;
         */
        value: FileGlobResult_Success;
        case: "success";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.FileGlobResult.Error error = 2;
         */
        value: FileGlobResult_Error;
        case: "error";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.FileGlobResult.
 * Use `create(FileGlobResultSchema)` to create a new message.
 */
export declare const FileGlobResultSchema: GenMessage<FileGlobResult>;
/**
 * @generated from message warp.multi_agent.v1.FileGlobResult.Success
 */
export type FileGlobResult_Success = Message$1<"warp.multi_agent.v1.FileGlobResult.Success"> & {
    /**
     * String containing list of file paths matching the glob patterns.
     *
     * @generated from field: string matched_files = 1;
     */
    matchedFiles: string;
};
/**
 * Describes the message warp.multi_agent.v1.FileGlobResult.Success.
 * Use `create(FileGlobResult_SuccessSchema)` to create a new message.
 */
export declare const FileGlobResult_SuccessSchema: GenMessage<FileGlobResult_Success>;
/**
 * @generated from message warp.multi_agent.v1.FileGlobResult.Error
 */
export type FileGlobResult_Error = Message$1<"warp.multi_agent.v1.FileGlobResult.Error"> & {
    /**
     * @generated from field: string message = 1;
     */
    message: string;
};
/**
 * Describes the message warp.multi_agent.v1.FileGlobResult.Error.
 * Use `create(FileGlobResult_ErrorSchema)` to create a new message.
 */
export declare const FileGlobResult_ErrorSchema: GenMessage<FileGlobResult_Error>;
/**
 * Result of a `FileGlobV2` tool call.
 *
 * @generated from message warp.multi_agent.v1.FileGlobV2Result
 */
export type FileGlobV2Result = Message$1<"warp.multi_agent.v1.FileGlobV2Result"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.FileGlobV2Result.result
     */
    result: {
        /**
         * @generated from field: warp.multi_agent.v1.FileGlobV2Result.Success success = 1;
         */
        value: FileGlobV2Result_Success;
        case: "success";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.FileGlobV2Result.Error error = 2;
         */
        value: FileGlobV2Result_Error;
        case: "error";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.FileGlobV2Result.
 * Use `create(FileGlobV2ResultSchema)` to create a new message.
 */
export declare const FileGlobV2ResultSchema: GenMessage<FileGlobV2Result>;
/**
 * @generated from message warp.multi_agent.v1.FileGlobV2Result.Success
 */
export type FileGlobV2Result_Success = Message$1<"warp.multi_agent.v1.FileGlobV2Result.Success"> & {
    /**
     * List of file paths matching the file name patterns.
     *
     * @generated from field: repeated warp.multi_agent.v1.FileGlobV2Result.Success.FileGlobMatch matched_files = 1;
     */
    matchedFiles: FileGlobV2Result_Success_FileGlobMatch[];
    /**
     * Optional warnings from the file glob operation (e.g. permission errors).
     * These warnings are typically from stderr when the find succeeded but
     * encountered non-fatal issues.
     *
     * @generated from field: string warnings = 2;
     */
    warnings: string;
};
/**
 * Describes the message warp.multi_agent.v1.FileGlobV2Result.Success.
 * Use `create(FileGlobV2Result_SuccessSchema)` to create a new message.
 */
export declare const FileGlobV2Result_SuccessSchema: GenMessage<FileGlobV2Result_Success>;
/**
 * @generated from message warp.multi_agent.v1.FileGlobV2Result.Success.FileGlobMatch
 */
export type FileGlobV2Result_Success_FileGlobMatch = Message$1<"warp.multi_agent.v1.FileGlobV2Result.Success.FileGlobMatch"> & {
    /**
     * The path to the file that matched a file name pattern.
     *
     * @generated from field: string file_path = 1;
     */
    filePath: string;
};
/**
 * Describes the message warp.multi_agent.v1.FileGlobV2Result.Success.FileGlobMatch.
 * Use `create(FileGlobV2Result_Success_FileGlobMatchSchema)` to create a new message.
 */
export declare const FileGlobV2Result_Success_FileGlobMatchSchema: GenMessage<FileGlobV2Result_Success_FileGlobMatch>;
/**
 * @generated from message warp.multi_agent.v1.FileGlobV2Result.Error
 */
export type FileGlobV2Result_Error = Message$1<"warp.multi_agent.v1.FileGlobV2Result.Error"> & {
    /**
     * @generated from field: string message = 1;
     */
    message: string;
};
/**
 * Describes the message warp.multi_agent.v1.FileGlobV2Result.Error.
 * Use `create(FileGlobV2Result_ErrorSchema)` to create a new message.
 */
export declare const FileGlobV2Result_ErrorSchema: GenMessage<FileGlobV2Result_Error>;
/**
 * @generated from message warp.multi_agent.v1.MCPResourceContent
 */
export type MCPResourceContent = Message$1<"warp.multi_agent.v1.MCPResourceContent"> & {
    /**
     * Every MCP resource is uniquely identified by a URI.
     *
     * @generated from field: string uri = 1;
     */
    uri: string;
    /**
     * The type of content that this MCP resource contains.
     *
     * @generated from oneof warp.multi_agent.v1.MCPResourceContent.content_type
     */
    contentType: {
        /**
         * @generated from field: warp.multi_agent.v1.MCPResourceContent.Text text = 2;
         */
        value: MCPResourceContent_Text;
        case: "text";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.MCPResourceContent.Binary binary = 3;
         */
        value: MCPResourceContent_Binary;
        case: "binary";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.MCPResourceContent.
 * Use `create(MCPResourceContentSchema)` to create a new message.
 */
export declare const MCPResourceContentSchema: GenMessage<MCPResourceContent>;
/**
 * @generated from message warp.multi_agent.v1.MCPResourceContent.Text
 */
export type MCPResourceContent_Text = Message$1<"warp.multi_agent.v1.MCPResourceContent.Text"> & {
    /**
     * @generated from field: string content = 1;
     */
    content: string;
    /**
     * @generated from field: string mime_type = 2;
     */
    mimeType: string;
};
/**
 * Describes the message warp.multi_agent.v1.MCPResourceContent.Text.
 * Use `create(MCPResourceContent_TextSchema)` to create a new message.
 */
export declare const MCPResourceContent_TextSchema: GenMessage<MCPResourceContent_Text>;
/**
 * @generated from message warp.multi_agent.v1.MCPResourceContent.Binary
 */
export type MCPResourceContent_Binary = Message$1<"warp.multi_agent.v1.MCPResourceContent.Binary"> & {
    /**
     * The raw binary payload.
     *
     * This should be b64-encoded already because of the MCP contract:
     * https://github.com/modelcontextprotocol/modelcontextprotocol/blob/4161f02acc841010004b7357b7907e6a270ad093/schema/2025-03-26/schema.json#L54
     *
     * @generated from field: bytes data = 1;
     */
    data: Uint8Array;
    /**
     * @generated from field: string mime_type = 2;
     */
    mimeType: string;
};
/**
 * Describes the message warp.multi_agent.v1.MCPResourceContent.Binary.
 * Use `create(MCPResourceContent_BinarySchema)` to create a new message.
 */
export declare const MCPResourceContent_BinarySchema: GenMessage<MCPResourceContent_Binary>;
/**
 * @generated from message warp.multi_agent.v1.ReadMCPResourceResult
 */
export type ReadMCPResourceResult = Message$1<"warp.multi_agent.v1.ReadMCPResourceResult"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.ReadMCPResourceResult.result
     */
    result: {
        /**
         * @generated from field: warp.multi_agent.v1.ReadMCPResourceResult.Success success = 1;
         */
        value: ReadMCPResourceResult_Success;
        case: "success";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ReadMCPResourceResult.Error error = 2;
         */
        value: ReadMCPResourceResult_Error;
        case: "error";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.ReadMCPResourceResult.
 * Use `create(ReadMCPResourceResultSchema)` to create a new message.
 */
export declare const ReadMCPResourceResultSchema: GenMessage<ReadMCPResourceResult>;
/**
 * @generated from message warp.multi_agent.v1.ReadMCPResourceResult.Success
 */
export type ReadMCPResourceResult_Success = Message$1<"warp.multi_agent.v1.ReadMCPResourceResult.Success"> & {
    /**
     * Reading a single MCP resource can result in multiple resources.
     * See https://modelcontextprotocol.io/docs/concepts/resources#reading-resources.
     *
     * @generated from field: repeated warp.multi_agent.v1.MCPResourceContent contents = 1;
     */
    contents: MCPResourceContent[];
};
/**
 * Describes the message warp.multi_agent.v1.ReadMCPResourceResult.Success.
 * Use `create(ReadMCPResourceResult_SuccessSchema)` to create a new message.
 */
export declare const ReadMCPResourceResult_SuccessSchema: GenMessage<ReadMCPResourceResult_Success>;
/**
 * @generated from message warp.multi_agent.v1.ReadMCPResourceResult.Error
 */
export type ReadMCPResourceResult_Error = Message$1<"warp.multi_agent.v1.ReadMCPResourceResult.Error"> & {
    /**
     * @generated from field: string message = 1;
     */
    message: string;
};
/**
 * Describes the message warp.multi_agent.v1.ReadMCPResourceResult.Error.
 * Use `create(ReadMCPResourceResult_ErrorSchema)` to create a new message.
 */
export declare const ReadMCPResourceResult_ErrorSchema: GenMessage<ReadMCPResourceResult_Error>;
/**
 * @generated from message warp.multi_agent.v1.WriteToLongRunningShellCommandResult
 */
export type WriteToLongRunningShellCommandResult = Message$1<"warp.multi_agent.v1.WriteToLongRunningShellCommandResult"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.WriteToLongRunningShellCommandResult.result
     */
    result: {
        /**
         * @generated from field: warp.multi_agent.v1.LongRunningShellCommandSnapshot long_running_command_snapshot = 1;
         */
        value: LongRunningShellCommandSnapshot;
        case: "longRunningCommandSnapshot";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ShellCommandFinished command_finished = 2;
         */
        value: ShellCommandFinished;
        case: "commandFinished";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ShellCommandError error = 3;
         */
        value: ShellCommandError;
        case: "error";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.WriteToLongRunningShellCommandResult.
 * Use `create(WriteToLongRunningShellCommandResultSchema)` to create a new message.
 */
export declare const WriteToLongRunningShellCommandResultSchema: GenMessage<WriteToLongRunningShellCommandResult>;
/**
 * @generated from message warp.multi_agent.v1.SuggestNewConversationResult
 */
export type SuggestNewConversationResult = Message$1<"warp.multi_agent.v1.SuggestNewConversationResult"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.SuggestNewConversationResult.result
     */
    result: {
        /**
         * @generated from field: warp.multi_agent.v1.SuggestNewConversationResult.Accepted accepted = 1;
         */
        value: SuggestNewConversationResult_Accepted;
        case: "accepted";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.SuggestNewConversationResult.Rejected rejected = 2;
         */
        value: SuggestNewConversationResult_Rejected;
        case: "rejected";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.SuggestNewConversationResult.
 * Use `create(SuggestNewConversationResultSchema)` to create a new message.
 */
export declare const SuggestNewConversationResultSchema: GenMessage<SuggestNewConversationResult>;
/**
 * @generated from message warp.multi_agent.v1.SuggestNewConversationResult.Accepted
 */
export type SuggestNewConversationResult_Accepted = Message$1<"warp.multi_agent.v1.SuggestNewConversationResult.Accepted"> & {
    /**
     * @generated from field: string message_id = 1;
     */
    messageId: string;
};
/**
 * Describes the message warp.multi_agent.v1.SuggestNewConversationResult.Accepted.
 * Use `create(SuggestNewConversationResult_AcceptedSchema)` to create a new message.
 */
export declare const SuggestNewConversationResult_AcceptedSchema: GenMessage<SuggestNewConversationResult_Accepted>;
/**
 * @generated from message warp.multi_agent.v1.SuggestNewConversationResult.Rejected
 */
export type SuggestNewConversationResult_Rejected = Message$1<"warp.multi_agent.v1.SuggestNewConversationResult.Rejected"> & {};
/**
 * Describes the message warp.multi_agent.v1.SuggestNewConversationResult.Rejected.
 * Use `create(SuggestNewConversationResult_RejectedSchema)` to create a new message.
 */
export declare const SuggestNewConversationResult_RejectedSchema: GenMessage<SuggestNewConversationResult_Rejected>;
/**
 * The output when a shell command is finished.
 *
 * @generated from message warp.multi_agent.v1.ShellCommandFinished
 */
export type ShellCommandFinished = Message$1<"warp.multi_agent.v1.ShellCommandFinished"> & {
    /**
     * @generated from field: string output = 1;
     */
    output: string;
    /**
     * @generated from field: int32 exit_code = 2;
     */
    exitCode: number;
    /**
     * @generated from field: string command_id = 3;
     */
    commandId: string;
};
/**
 * Describes the message warp.multi_agent.v1.ShellCommandFinished.
 * Use `create(ShellCommandFinishedSchema)` to create a new message.
 */
export declare const ShellCommandFinishedSchema: GenMessage<ShellCommandFinished>;
/**
 * The reason why a shell command was denied permission to run.
 *
 * @generated from message warp.multi_agent.v1.PermissionDenied
 */
export type PermissionDenied = Message$1<"warp.multi_agent.v1.PermissionDenied"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.PermissionDenied.reason
     */
    reason: {
        /**
         * @generated from field: google.protobuf.Empty denylisted_command = 1;
         */
        value: Empty;
        case: "denylistedCommand";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.PermissionDenied.
 * Use `create(PermissionDeniedSchema)` to create a new message.
 */
export declare const PermissionDeniedSchema: GenMessage<PermissionDenied>;
/**
 * @generated from message warp.multi_agent.v1.CallMCPToolResult
 */
export type CallMCPToolResult = Message$1<"warp.multi_agent.v1.CallMCPToolResult"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.CallMCPToolResult.result
     */
    result: {
        /**
         * @generated from field: warp.multi_agent.v1.CallMCPToolResult.Success success = 1;
         */
        value: CallMCPToolResult_Success;
        case: "success";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.CallMCPToolResult.Error error = 2;
         */
        value: CallMCPToolResult_Error;
        case: "error";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.CallMCPToolResult.
 * Use `create(CallMCPToolResultSchema)` to create a new message.
 */
export declare const CallMCPToolResultSchema: GenMessage<CallMCPToolResult>;
/**
 * @generated from message warp.multi_agent.v1.CallMCPToolResult.Success
 */
export type CallMCPToolResult_Success = Message$1<"warp.multi_agent.v1.CallMCPToolResult.Success"> & {
    /**
     * @generated from field: repeated warp.multi_agent.v1.CallMCPToolResult.Success.Result results = 1;
     */
    results: CallMCPToolResult_Success_Result[];
};
/**
 * Describes the message warp.multi_agent.v1.CallMCPToolResult.Success.
 * Use `create(CallMCPToolResult_SuccessSchema)` to create a new message.
 */
export declare const CallMCPToolResult_SuccessSchema: GenMessage<CallMCPToolResult_Success>;
/**
 * @generated from message warp.multi_agent.v1.CallMCPToolResult.Success.Result
 */
export type CallMCPToolResult_Success_Result = Message$1<"warp.multi_agent.v1.CallMCPToolResult.Success.Result"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.CallMCPToolResult.Success.Result.result
     */
    result: {
        /**
         * @generated from field: warp.multi_agent.v1.CallMCPToolResult.Success.Result.Text text = 1;
         */
        value: CallMCPToolResult_Success_Result_Text;
        case: "text";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.CallMCPToolResult.Success.Result.Image image = 2;
         */
        value: CallMCPToolResult_Success_Result_Image;
        case: "image";
    } | {
        /**
         * An MCP tool call can produce an embedded resource.
         *
         * @generated from field: warp.multi_agent.v1.MCPResourceContent resource = 3;
         */
        value: MCPResourceContent;
        case: "resource";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.CallMCPToolResult.Success.Result.
 * Use `create(CallMCPToolResult_Success_ResultSchema)` to create a new message.
 */
export declare const CallMCPToolResult_Success_ResultSchema: GenMessage<CallMCPToolResult_Success_Result>;
/**
 * @generated from message warp.multi_agent.v1.CallMCPToolResult.Success.Result.Text
 */
export type CallMCPToolResult_Success_Result_Text = Message$1<"warp.multi_agent.v1.CallMCPToolResult.Success.Result.Text"> & {
    /**
     * @generated from field: string text = 1;
     */
    text: string;
};
/**
 * Describes the message warp.multi_agent.v1.CallMCPToolResult.Success.Result.Text.
 * Use `create(CallMCPToolResult_Success_Result_TextSchema)` to create a new message.
 */
export declare const CallMCPToolResult_Success_Result_TextSchema: GenMessage<CallMCPToolResult_Success_Result_Text>;
/**
 * @generated from message warp.multi_agent.v1.CallMCPToolResult.Success.Result.Image
 */
export type CallMCPToolResult_Success_Result_Image = Message$1<"warp.multi_agent.v1.CallMCPToolResult.Success.Result.Image"> & {
    /**
     * The image payload.
     *
     * This should be b64-encoded already because of the MCP contract:
     * https://github.com/modelcontextprotocol/modelcontextprotocol/blob/42273f11b9b3d5d5a93d3af8fd9a942b220adc01/schema/2025-03-26/schema.json#L566
     *
     * @generated from field: bytes data = 1;
     */
    data: Uint8Array;
    /**
     * @generated from field: string mime_type = 2;
     */
    mimeType: string;
};
/**
 * Describes the message warp.multi_agent.v1.CallMCPToolResult.Success.Result.Image.
 * Use `create(CallMCPToolResult_Success_Result_ImageSchema)` to create a new message.
 */
export declare const CallMCPToolResult_Success_Result_ImageSchema: GenMessage<CallMCPToolResult_Success_Result_Image>;
/**
 * @generated from message warp.multi_agent.v1.CallMCPToolResult.Error
 */
export type CallMCPToolResult_Error = Message$1<"warp.multi_agent.v1.CallMCPToolResult.Error"> & {
    /**
     * @generated from field: string message = 1;
     */
    message: string;
};
/**
 * Describes the message warp.multi_agent.v1.CallMCPToolResult.Error.
 * Use `create(CallMCPToolResult_ErrorSchema)` to create a new message.
 */
export declare const CallMCPToolResult_ErrorSchema: GenMessage<CallMCPToolResult_Error>;
/**
 * @generated from message warp.multi_agent.v1.SuggestPromptResult
 */
export type SuggestPromptResult = Message$1<"warp.multi_agent.v1.SuggestPromptResult"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.SuggestPromptResult.result
     */
    result: {
        /**
         * @generated from field: google.protobuf.Empty accepted = 1;
         */
        value: Empty;
        case: "accepted";
    } | {
        /**
         * @generated from field: google.protobuf.Empty rejected = 2;
         */
        value: Empty;
        case: "rejected";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.SuggestPromptResult.
 * Use `create(SuggestPromptResultSchema)` to create a new message.
 */
export declare const SuggestPromptResultSchema: GenMessage<SuggestPromptResult>;
/**
 * Result of an `OpenCodeReview` tool call.
 *
 * @generated from message warp.multi_agent.v1.OpenCodeReviewResult
 */
export type OpenCodeReviewResult = Message$1<"warp.multi_agent.v1.OpenCodeReviewResult"> & {};
/**
 * Describes the message warp.multi_agent.v1.OpenCodeReviewResult.
 * Use `create(OpenCodeReviewResultSchema)` to create a new message.
 */
export declare const OpenCodeReviewResultSchema: GenMessage<OpenCodeReviewResult>;
/**
 * Result of an `InitProject` tool call.
 *
 * @generated from message warp.multi_agent.v1.InitProjectResult
 */
export type InitProjectResult = Message$1<"warp.multi_agent.v1.InitProjectResult"> & {};
/**
 * Describes the message warp.multi_agent.v1.InitProjectResult.
 * Use `create(InitProjectResultSchema)` to create a new message.
 */
export declare const InitProjectResultSchema: GenMessage<InitProjectResult>;
/**
 * Result of a `ReadDocuments` tool call.
 *
 * @generated from message warp.multi_agent.v1.ReadDocumentsResult
 */
export type ReadDocumentsResult = Message$1<"warp.multi_agent.v1.ReadDocumentsResult"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.ReadDocumentsResult.result
     */
    result: {
        /**
         * @generated from field: warp.multi_agent.v1.ReadDocumentsResult.Success success = 1;
         */
        value: ReadDocumentsResult_Success;
        case: "success";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ReadDocumentsResult.Error error = 2;
         */
        value: ReadDocumentsResult_Error;
        case: "error";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.ReadDocumentsResult.
 * Use `create(ReadDocumentsResultSchema)` to create a new message.
 */
export declare const ReadDocumentsResultSchema: GenMessage<ReadDocumentsResult>;
/**
 * @generated from message warp.multi_agent.v1.ReadDocumentsResult.Success
 */
export type ReadDocumentsResult_Success = Message$1<"warp.multi_agent.v1.ReadDocumentsResult.Success"> & {
    /**
     * @generated from field: repeated warp.multi_agent.v1.DocumentContent documents = 1;
     */
    documents: DocumentContent[];
};
/**
 * Describes the message warp.multi_agent.v1.ReadDocumentsResult.Success.
 * Use `create(ReadDocumentsResult_SuccessSchema)` to create a new message.
 */
export declare const ReadDocumentsResult_SuccessSchema: GenMessage<ReadDocumentsResult_Success>;
/**
 * @generated from message warp.multi_agent.v1.ReadDocumentsResult.Error
 */
export type ReadDocumentsResult_Error = Message$1<"warp.multi_agent.v1.ReadDocumentsResult.Error"> & {
    /**
     * @generated from field: string message = 1;
     */
    message: string;
};
/**
 * Describes the message warp.multi_agent.v1.ReadDocumentsResult.Error.
 * Use `create(ReadDocumentsResult_ErrorSchema)` to create a new message.
 */
export declare const ReadDocumentsResult_ErrorSchema: GenMessage<ReadDocumentsResult_Error>;
/**
 * Result of an `EditDocuments` tool call.
 *
 * @generated from message warp.multi_agent.v1.EditDocumentsResult
 */
export type EditDocumentsResult = Message$1<"warp.multi_agent.v1.EditDocumentsResult"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.EditDocumentsResult.result
     */
    result: {
        /**
         * @generated from field: warp.multi_agent.v1.EditDocumentsResult.Success success = 1;
         */
        value: EditDocumentsResult_Success;
        case: "success";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.EditDocumentsResult.Error error = 2;
         */
        value: EditDocumentsResult_Error;
        case: "error";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.EditDocumentsResult.
 * Use `create(EditDocumentsResultSchema)` to create a new message.
 */
export declare const EditDocumentsResultSchema: GenMessage<EditDocumentsResult>;
/**
 * @generated from message warp.multi_agent.v1.EditDocumentsResult.Success
 */
export type EditDocumentsResult_Success = Message$1<"warp.multi_agent.v1.EditDocumentsResult.Success"> & {
    /**
     * @generated from field: repeated warp.multi_agent.v1.DocumentContent updated_documents = 1;
     */
    updatedDocuments: DocumentContent[];
};
/**
 * Describes the message warp.multi_agent.v1.EditDocumentsResult.Success.
 * Use `create(EditDocumentsResult_SuccessSchema)` to create a new message.
 */
export declare const EditDocumentsResult_SuccessSchema: GenMessage<EditDocumentsResult_Success>;
/**
 * @generated from message warp.multi_agent.v1.EditDocumentsResult.Error
 */
export type EditDocumentsResult_Error = Message$1<"warp.multi_agent.v1.EditDocumentsResult.Error"> & {
    /**
     * @generated from field: string message = 1;
     */
    message: string;
};
/**
 * Describes the message warp.multi_agent.v1.EditDocumentsResult.Error.
 * Use `create(EditDocumentsResult_ErrorSchema)` to create a new message.
 */
export declare const EditDocumentsResult_ErrorSchema: GenMessage<EditDocumentsResult_Error>;
/**
 * Result of a `CreateDocuments` tool call.
 *
 * @generated from message warp.multi_agent.v1.CreateDocumentsResult
 */
export type CreateDocumentsResult = Message$1<"warp.multi_agent.v1.CreateDocumentsResult"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.CreateDocumentsResult.result
     */
    result: {
        /**
         * @generated from field: warp.multi_agent.v1.CreateDocumentsResult.Success success = 1;
         */
        value: CreateDocumentsResult_Success;
        case: "success";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.CreateDocumentsResult.Error error = 2;
         */
        value: CreateDocumentsResult_Error;
        case: "error";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.CreateDocumentsResult.
 * Use `create(CreateDocumentsResultSchema)` to create a new message.
 */
export declare const CreateDocumentsResultSchema: GenMessage<CreateDocumentsResult>;
/**
 * @generated from message warp.multi_agent.v1.CreateDocumentsResult.Success
 */
export type CreateDocumentsResult_Success = Message$1<"warp.multi_agent.v1.CreateDocumentsResult.Success"> & {
    /**
     * @generated from field: repeated warp.multi_agent.v1.DocumentContent created_documents = 1;
     */
    createdDocuments: DocumentContent[];
};
/**
 * Describes the message warp.multi_agent.v1.CreateDocumentsResult.Success.
 * Use `create(CreateDocumentsResult_SuccessSchema)` to create a new message.
 */
export declare const CreateDocumentsResult_SuccessSchema: GenMessage<CreateDocumentsResult_Success>;
/**
 * @generated from message warp.multi_agent.v1.CreateDocumentsResult.Error
 */
export type CreateDocumentsResult_Error = Message$1<"warp.multi_agent.v1.CreateDocumentsResult.Error"> & {
    /**
     * @generated from field: string message = 1;
     */
    message: string;
};
/**
 * Describes the message warp.multi_agent.v1.CreateDocumentsResult.Error.
 * Use `create(CreateDocumentsResult_ErrorSchema)` to create a new message.
 */
export declare const CreateDocumentsResult_ErrorSchema: GenMessage<CreateDocumentsResult_Error>;
/**
 * @generated from message warp.multi_agent.v1.ReadShellCommandOutputResult
 */
export type ReadShellCommandOutputResult = Message$1<"warp.multi_agent.v1.ReadShellCommandOutputResult"> & {
    /**
     * @generated from field: string command = 1;
     */
    command: string;
    /**
     * @generated from oneof warp.multi_agent.v1.ReadShellCommandOutputResult.result
     */
    result: {
        /**
         * @generated from field: warp.multi_agent.v1.LongRunningShellCommandSnapshot long_running_command_snapshot = 2;
         */
        value: LongRunningShellCommandSnapshot;
        case: "longRunningCommandSnapshot";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ShellCommandFinished command_finished = 3;
         */
        value: ShellCommandFinished;
        case: "commandFinished";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ShellCommandError error = 4;
         */
        value: ShellCommandError;
        case: "error";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.ReadShellCommandOutputResult.
 * Use `create(ReadShellCommandOutputResultSchema)` to create a new message.
 */
export declare const ReadShellCommandOutputResultSchema: GenMessage<ReadShellCommandOutputResult>;
/**
 * @generated from message warp.multi_agent.v1.InsertReviewCommentsResult
 */
export type InsertReviewCommentsResult = Message$1<"warp.multi_agent.v1.InsertReviewCommentsResult"> & {
    /**
     * @generated from field: string repo_path = 1;
     */
    repoPath: string;
    /**
     * @generated from oneof warp.multi_agent.v1.InsertReviewCommentsResult.result
     */
    result: {
        /**
         * @generated from field: warp.multi_agent.v1.InsertReviewCommentsResult.Success success = 2;
         */
        value: InsertReviewCommentsResult_Success;
        case: "success";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.InsertReviewCommentsResult.Error error = 3;
         */
        value: InsertReviewCommentsResult_Error;
        case: "error";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.InsertReviewCommentsResult.
 * Use `create(InsertReviewCommentsResultSchema)` to create a new message.
 */
export declare const InsertReviewCommentsResultSchema: GenMessage<InsertReviewCommentsResult>;
/**
 * @generated from message warp.multi_agent.v1.InsertReviewCommentsResult.Success
 */
export type InsertReviewCommentsResult_Success = Message$1<"warp.multi_agent.v1.InsertReviewCommentsResult.Success"> & {};
/**
 * Describes the message warp.multi_agent.v1.InsertReviewCommentsResult.Success.
 * Use `create(InsertReviewCommentsResult_SuccessSchema)` to create a new message.
 */
export declare const InsertReviewCommentsResult_SuccessSchema: GenMessage<InsertReviewCommentsResult_Success>;
/**
 * @generated from message warp.multi_agent.v1.InsertReviewCommentsResult.Error
 */
export type InsertReviewCommentsResult_Error = Message$1<"warp.multi_agent.v1.InsertReviewCommentsResult.Error"> & {
    /**
     * @generated from field: string message = 1;
     */
    message: string;
};
/**
 * Describes the message warp.multi_agent.v1.InsertReviewCommentsResult.Error.
 * Use `create(InsertReviewCommentsResult_ErrorSchema)` to create a new message.
 */
export declare const InsertReviewCommentsResult_ErrorSchema: GenMessage<InsertReviewCommentsResult_Error>;
/**
 * Screen coordinates used for computer use actions.
 *
 * @generated from message warp.multi_agent.v1.Coordinates
 */
export type Coordinates = Message$1<"warp.multi_agent.v1.Coordinates"> & {
    /**
     * @generated from field: int32 x = 1;
     */
    x: number;
    /**
     * @generated from field: int32 y = 2;
     */
    y: number;
};
/**
 * Describes the message warp.multi_agent.v1.Coordinates.
 * Use `create(CoordinatesSchema)` to create a new message.
 */
export declare const CoordinatesSchema: GenMessage<Coordinates>;
/**
 * @generated from message warp.multi_agent.v1.UseComputerResult
 */
export type UseComputerResult = Message$1<"warp.multi_agent.v1.UseComputerResult"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.UseComputerResult.result
     */
    result: {
        /**
         * @generated from field: warp.multi_agent.v1.UseComputerResult.Success success = 1;
         */
        value: UseComputerResult_Success;
        case: "success";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.UseComputerResult.Error error = 2;
         */
        value: UseComputerResult_Error;
        case: "error";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.UseComputerResult.
 * Use `create(UseComputerResultSchema)` to create a new message.
 */
export declare const UseComputerResultSchema: GenMessage<UseComputerResult>;
/**
 * @generated from message warp.multi_agent.v1.UseComputerResult.Success
 */
export type UseComputerResult_Success = Message$1<"warp.multi_agent.v1.UseComputerResult.Success"> & {
    /**
     * @generated from field: warp.multi_agent.v1.RawImage screenshot = 1;
     */
    screenshot?: RawImage;
    /**
     * @generated from field: warp.multi_agent.v1.Coordinates cursor_position = 2;
     */
    cursorPosition?: Coordinates;
};
/**
 * Describes the message warp.multi_agent.v1.UseComputerResult.Success.
 * Use `create(UseComputerResult_SuccessSchema)` to create a new message.
 */
export declare const UseComputerResult_SuccessSchema: GenMessage<UseComputerResult_Success>;
/**
 * @generated from message warp.multi_agent.v1.UseComputerResult.Error
 */
export type UseComputerResult_Error = Message$1<"warp.multi_agent.v1.UseComputerResult.Error"> & {
    /**
     * @generated from field: string message = 1;
     */
    message: string;
};
/**
 * Describes the message warp.multi_agent.v1.UseComputerResult.Error.
 * Use `create(UseComputerResult_ErrorSchema)` to create a new message.
 */
export declare const UseComputerResult_ErrorSchema: GenMessage<UseComputerResult_Error>;
/**
 * @generated from message warp.multi_agent.v1.ReadSkillResult
 */
export type ReadSkillResult = Message$1<"warp.multi_agent.v1.ReadSkillResult"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.ReadSkillResult.result
     */
    result: {
        /**
         * @generated from field: warp.multi_agent.v1.ReadSkillResult.Success success = 1;
         */
        value: ReadSkillResult_Success;
        case: "success";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ReadSkillResult.Error error = 2;
         */
        value: ReadSkillResult_Error;
        case: "error";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.ReadSkillResult.
 * Use `create(ReadSkillResultSchema)` to create a new message.
 */
export declare const ReadSkillResultSchema: GenMessage<ReadSkillResult>;
/**
 * @generated from message warp.multi_agent.v1.ReadSkillResult.Success
 */
export type ReadSkillResult_Success = Message$1<"warp.multi_agent.v1.ReadSkillResult.Success"> & {
    /**
     * The content of the SKILL.md file that was read.
     *
     * @generated from field: warp.multi_agent.v1.FileContent content = 1;
     */
    content?: FileContent;
};
/**
 * Describes the message warp.multi_agent.v1.ReadSkillResult.Success.
 * Use `create(ReadSkillResult_SuccessSchema)` to create a new message.
 */
export declare const ReadSkillResult_SuccessSchema: GenMessage<ReadSkillResult_Success>;
/**
 * @generated from message warp.multi_agent.v1.ReadSkillResult.Error
 */
export type ReadSkillResult_Error = Message$1<"warp.multi_agent.v1.ReadSkillResult.Error"> & {
    /**
     * @generated from field: string message = 1;
     */
    message: string;
};
/**
 * Describes the message warp.multi_agent.v1.ReadSkillResult.Error.
 * Use `create(ReadSkillResult_ErrorSchema)` to create a new message.
 */
export declare const ReadSkillResult_ErrorSchema: GenMessage<ReadSkillResult_Error>;
/**
 * The dimensions of a user's screen, used for computer use.
 *
 * @generated from message warp.multi_agent.v1.ScreenDimensions
 */
export type ScreenDimensions = Message$1<"warp.multi_agent.v1.ScreenDimensions"> & {
    /**
     * @generated from field: int32 width_px = 1;
     */
    widthPx: number;
    /**
     * @generated from field: int32 height_px = 2;
     */
    heightPx: number;
};
/**
 * Describes the message warp.multi_agent.v1.ScreenDimensions.
 * Use `create(ScreenDimensionsSchema)` to create a new message.
 */
export declare const ScreenDimensionsSchema: GenMessage<ScreenDimensions>;
/**
 * Result of a `RequestComputerUse` tool call.
 *
 * @generated from message warp.multi_agent.v1.RequestComputerUseResult
 */
export type RequestComputerUseResult = Message$1<"warp.multi_agent.v1.RequestComputerUseResult"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.RequestComputerUseResult.result
     */
    result: {
        /**
         * The user approved this computer use.
         *
         * @generated from field: warp.multi_agent.v1.RequestComputerUseResult.Approved approved = 1;
         */
        value: RequestComputerUseResult_Approved;
        case: "approved";
    } | {
        /**
         * The user rejected this comptuer use.
         *
         * @generated from field: warp.multi_agent.v1.RequestComputerUseResult.Rejected rejected = 2;
         */
        value: RequestComputerUseResult_Rejected;
        case: "rejected";
    } | {
        /**
         * There was an error requesting computer use.
         *
         * @generated from field: warp.multi_agent.v1.RequestComputerUseResult.Error error = 3;
         */
        value: RequestComputerUseResult_Error;
        case: "error";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.RequestComputerUseResult.
 * Use `create(RequestComputerUseResultSchema)` to create a new message.
 */
export declare const RequestComputerUseResultSchema: GenMessage<RequestComputerUseResult>;
/**
 * @generated from message warp.multi_agent.v1.RequestComputerUseResult.Approved
 */
export type RequestComputerUseResult_Approved = Message$1<"warp.multi_agent.v1.RequestComputerUseResult.Approved"> & {
    /**
     * The dimensions of the screen that we are using computer use on.
     *
     * @generated from field: warp.multi_agent.v1.ScreenDimensions screen_dimensions = 1;
     */
    screenDimensions?: ScreenDimensions;
    /**
     * The screenshot that captures the initial state of the computer.
     *
     * @generated from field: warp.multi_agent.v1.RawImage initial_screenshot = 2;
     */
    initialScreenshot?: RawImage;
    /**
     * That platform that computer use is running on.
     *
     * @generated from field: warp.multi_agent.v1.RequestComputerUseResult.Approved.Platform platform = 3;
     */
    platform: RequestComputerUseResult_Approved_Platform;
};
/**
 * Describes the message warp.multi_agent.v1.RequestComputerUseResult.Approved.
 * Use `create(RequestComputerUseResult_ApprovedSchema)` to create a new message.
 */
export declare const RequestComputerUseResult_ApprovedSchema: GenMessage<RequestComputerUseResult_Approved>;
/**
 * @generated from enum warp.multi_agent.v1.RequestComputerUseResult.Approved.Platform
 */
export declare enum RequestComputerUseResult_Approved_Platform {
    /**
     * @generated from enum value: MACOS = 0;
     */
    MACOS = 0,
    /**
     * @generated from enum value: WINDOWS = 1;
     */
    WINDOWS = 1,
    /**
     * @generated from enum value: LINUX_X11 = 2;
     */
    LINUX_X11 = 2,
    /**
     * @generated from enum value: LINUX_WAYLAND = 3;
     */
    LINUX_WAYLAND = 3
}
/**
 * Describes the enum warp.multi_agent.v1.RequestComputerUseResult.Approved.Platform.
 */
export declare const RequestComputerUseResult_Approved_PlatformSchema: GenEnum<RequestComputerUseResult_Approved_Platform>;
/**
 * @generated from message warp.multi_agent.v1.RequestComputerUseResult.Rejected
 */
export type RequestComputerUseResult_Rejected = Message$1<"warp.multi_agent.v1.RequestComputerUseResult.Rejected"> & {};
/**
 * Describes the message warp.multi_agent.v1.RequestComputerUseResult.Rejected.
 * Use `create(RequestComputerUseResult_RejectedSchema)` to create a new message.
 */
export declare const RequestComputerUseResult_RejectedSchema: GenMessage<RequestComputerUseResult_Rejected>;
/**
 * @generated from message warp.multi_agent.v1.RequestComputerUseResult.Error
 */
export type RequestComputerUseResult_Error = Message$1<"warp.multi_agent.v1.RequestComputerUseResult.Error"> & {
    /**
     * @generated from field: string message = 1;
     */
    message: string;
};
/**
 * Describes the message warp.multi_agent.v1.RequestComputerUseResult.Error.
 * Use `create(RequestComputerUseResult_ErrorSchema)` to create a new message.
 */
export declare const RequestComputerUseResult_ErrorSchema: GenMessage<RequestComputerUseResult_Error>;
/**
 * Result of a `FetchConversation` tool call.
 *
 * @generated from message warp.multi_agent.v1.FetchConversationResult
 */
export type FetchConversationResult = Message$1<"warp.multi_agent.v1.FetchConversationResult"> & {
    /**
     * The tasks from the fetched conversation.
     *
     * @generated from field: repeated warp.multi_agent.v1.Task tasks = 1;
     */
    tasks: Task[];
};
/**
 * Describes the message warp.multi_agent.v1.FetchConversationResult.
 * Use `create(FetchConversationResultSchema)` to create a new message.
 */
export declare const FetchConversationResultSchema: GenMessage<FetchConversationResult>;
/**
 * @generated from message warp.multi_agent.v1.ShellCommandError
 */
export type ShellCommandError = Message$1<"warp.multi_agent.v1.ShellCommandError"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.ShellCommandError.type
     */
    type: {
        /**
         * There was no command execution found with the given command_id in the tool call.
         *
         * @generated from field: google.protobuf.Empty command_not_found = 1;
         */
        value: Empty;
        case: "commandNotFound";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.ShellCommandError.
 * Use `create(ShellCommandErrorSchema)` to create a new message.
 */
export declare const ShellCommandErrorSchema: GenMessage<ShellCommandError>;
/**
 * @generated from message warp.multi_agent.v1.UserQueryMode
 */
export type UserQueryMode = Message$1<"warp.multi_agent.v1.UserQueryMode"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.UserQueryMode.type
     */
    type: {
        /**
         * We can change this to a non-empty `Plan` type later, this is backwards compatible
         *
         * @generated from field: google.protobuf.Empty plan = 1;
         */
        value: Empty;
        case: "plan";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.UserQueryMode.
 * Use `create(UserQueryModeSchema)` to create a new message.
 */
export declare const UserQueryModeSchema: GenMessage<UserQueryMode>;
/**
 * @generated from message warp.multi_agent.v1.RawImage
 */
export type RawImage = Message$1<"warp.multi_agent.v1.RawImage"> & {
    /**
     * Raw image bytes.
     *
     * @generated from field: bytes data = 1;
     */
    data: Uint8Array;
    /**
     * MIME type of the image content (e.g., "image/png").
     *
     * @generated from field: string mime_type = 2;
     */
    mimeType: string;
    /**
     * The width of the image, in pixels.
     *
     * @generated from field: int32 width = 3;
     */
    width: number;
    /**
     * The height of the image, in pixels.
     *
     * @generated from field: int32 height = 4;
     */
    height: number;
};
/**
 * Describes the message warp.multi_agent.v1.RawImage.
 * Use `create(RawImageSchema)` to create a new message.
 */
export declare const RawImageSchema: GenMessage<RawImage>;
/**
 * An enumeration of the different types of client-server tools.
 * This must map 1:1 with the list of structured tool call / tool call result types.
 *
 * Note that the `Server` tool is omitted from this list as an exception;
 * it's not a tool call understood by the client.
 *
 * @generated from enum warp.multi_agent.v1.ToolType
 */
export declare enum ToolType {
    /**
     * @generated from enum value: RUN_SHELL_COMMAND = 0;
     */
    RUN_SHELL_COMMAND = 0,
    /**
     * @generated from enum value: SEARCH_CODEBASE = 1;
     */
    SEARCH_CODEBASE = 1,
    /**
     * @generated from enum value: READ_FILES = 2;
     */
    READ_FILES = 2,
    /**
     * @generated from enum value: APPLY_FILE_DIFFS = 3;
     */
    APPLY_FILE_DIFFS = 3,
    /**
     * @generated from enum value: SUGGEST_PLAN = 4;
     */
    SUGGEST_PLAN = 4,
    /**
     * @generated from enum value: SUGGEST_CREATE_PLAN = 5;
     */
    SUGGEST_CREATE_PLAN = 5,
    /**
     * @generated from enum value: GREP = 6;
     */
    GREP = 6,
    /**
     * @generated from enum value: FILE_GLOB = 7;
     */
    FILE_GLOB = 7,
    /**
     * @generated from enum value: READ_MCP_RESOURCE = 8;
     */
    READ_MCP_RESOURCE = 8,
    /**
     * @generated from enum value: CALL_MCP_TOOL = 9;
     */
    CALL_MCP_TOOL = 9,
    /**
     * @generated from enum value: WRITE_TO_LONG_RUNNING_SHELL_COMMAND = 10;
     */
    WRITE_TO_LONG_RUNNING_SHELL_COMMAND = 10,
    /**
     * @generated from enum value: SUGGEST_NEW_CONVERSATION = 11;
     */
    SUGGEST_NEW_CONVERSATION = 11,
    /**
     * @generated from enum value: FILE_GLOB_V2 = 12;
     */
    FILE_GLOB_V2 = 12,
    /**
     * @generated from enum value: SUGGEST_PROMPT = 13;
     */
    SUGGEST_PROMPT = 13,
    /**
     * @generated from enum value: OPEN_CODE_REVIEW = 14;
     */
    OPEN_CODE_REVIEW = 14,
    /**
     * @generated from enum value: INIT_PROJECT = 15;
     */
    INIT_PROJECT = 15,
    /**
     * @generated from enum value: SUBAGENT = 16;
     */
    SUBAGENT = 16,
    /**
     * @generated from enum value: READ_DOCUMENTS = 17;
     */
    READ_DOCUMENTS = 17,
    /**
     * @generated from enum value: EDIT_DOCUMENTS = 18;
     */
    EDIT_DOCUMENTS = 18,
    /**
     * @generated from enum value: CREATE_DOCUMENTS = 19;
     */
    CREATE_DOCUMENTS = 19,
    /**
     * @generated from enum value: READ_SHELL_COMMAND_OUTPUT = 20;
     */
    READ_SHELL_COMMAND_OUTPUT = 20,
    /**
     * @generated from enum value: USE_COMPUTER = 21;
     */
    USE_COMPUTER = 21,
    /**
     * @generated from enum value: INSERT_REVIEW_COMMENTS = 22;
     */
    INSERT_REVIEW_COMMENTS = 22,
    /**
     * @generated from enum value: READ_SKILL = 23;
     */
    READ_SKILL = 23,
    /**
     * @generated from enum value: REQUEST_COMPUTER_USE = 24;
     */
    REQUEST_COMPUTER_USE = 24,
    /**
     * @generated from enum value: FETCH_CONVERSATION = 25;
     */
    FETCH_CONVERSATION = 25
}
/**
 * Describes the enum warp.multi_agent.v1.ToolType.
 */
export declare const ToolTypeSchema: GenEnum<ToolType>;
/**
 * @generated from enum warp.multi_agent.v1.AgentType
 */
export declare enum AgentType {
    /**
     * @generated from enum value: AGENT_TYPE_UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: AGENT_TYPE_PRIMARY = 1;
     */
    PRIMARY = 1,
    /**
     * @generated from enum value: AGENT_TYPE_CLI = 2;
     */
    CLI = 2
}
/**
 * Describes the enum warp.multi_agent.v1.AgentType.
 */
export declare const AgentTypeSchema: GenEnum<AgentType>;
/**
 * Classifies the risk level of a shell command.
 *
 * @generated from enum warp.multi_agent.v1.RiskCategory
 */
export declare enum RiskCategory {
    /**
     * @generated from enum value: RISK_CATEGORY_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: RISK_CATEGORY_READ_ONLY = 1;
     */
    READ_ONLY = 1,
    /**
     * @generated from enum value: RISK_CATEGORY_TRIVIAL_LOCAL_CHANGE = 2;
     */
    TRIVIAL_LOCAL_CHANGE = 2,
    /**
     * @generated from enum value: RISK_CATEGORY_NONTRIVIAL_LOCAL_CHANGE = 3;
     */
    NONTRIVIAL_LOCAL_CHANGE = 3,
    /**
     * @generated from enum value: RISK_CATEGORY_EXTERNAL_CHANGE = 4;
     */
    EXTERNAL_CHANGE = 4,
    /**
     * @generated from enum value: RISK_CATEGORY_RISKY = 5;
     */
    RISKY = 5
}
/**
 * Describes the enum warp.multi_agent.v1.RiskCategory.
 */
export declare const RiskCategorySchema: GenEnum<RiskCategory>;
