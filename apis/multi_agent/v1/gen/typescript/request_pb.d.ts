import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Empty, Value } from "@bufbuild/protobuf/wkt";
import type { InputContext } from "./input_context_pb";
import type { Attachment, DiffSet, RunningShellCommand } from "./attachment_pb";
import type { Suggestions } from "./suggestions_pb";
import type { AgentType, ApplyFileDiffsResult, CallMCPToolResult, CreateDocumentsResult, EditDocumentsResult, FileGlobResult, FileGlobV2Result, GrepResult, InitProjectResult, InsertReviewCommentsResult, OpenCodeReviewResult, ReadDocumentsResult, ReadFilesResult, ReadMCPResourceResult, ReadShellCommandOutputResult, ReadSkillResult, RequestComputerUseResult, ReviewComment, RunShellCommandResult, SearchCodebaseResult, SuggestCreatePlanResult, SuggestNewConversationResult, SuggestPlanResult, SuggestPromptResult, Task, ToolType, UseComputerResult, UserQueryMode, WriteToLongRunningShellCommandResult } from "./task_pb";
import type { Skill } from "./skill_pb";
import type { JsonObject, Message } from "@bufbuild/protobuf";
/**
 * Describes the file request.proto.
 */
export declare const file_request: GenFile;
/**
 * The main request type. Every multi-agent API call begins with a `Request`.
 *
 * @generated from message warp.multi_agent.v1.Request
 */
export type Request = Message<"warp.multi_agent.v1.Request"> & {
    /**
     * The task state.
     *
     * @generated from field: warp.multi_agent.v1.Request.TaskContext task_context = 1;
     */
    taskContext?: Request_TaskContext;
    /**
     * User input to progress the task state.
     *
     * @generated from field: warp.multi_agent.v1.Request.Input input = 2;
     */
    input?: Request_Input;
    /**
     * Supported configuration for the request.
     *
     * @generated from field: warp.multi_agent.v1.Request.Settings settings = 3;
     */
    settings?: Request_Settings;
    /**
     * General metadata for the request.
     *
     * @generated from field: warp.multi_agent.v1.Request.Metadata metadata = 4;
     */
    metadata?: Request_Metadata;
    /**
     * The list of suggestions received from the previous request.
     *
     * @generated from field: warp.multi_agent.v1.Suggestions existing_suggestions = 5;
     */
    existingSuggestions?: Suggestions;
    /**
     * Information about the client's MCP capabilities.
     *
     * @generated from field: warp.multi_agent.v1.Request.MCPContext mcp_context = 6;
     */
    mcpContext?: Request_MCPContext;
};
/**
 * Describes the message warp.multi_agent.v1.Request.
 * Use `create(RequestSchema)` to create a new message.
 */
export declare const RequestSchema: GenMessage<Request>;
/**
 * @generated from message warp.multi_agent.v1.Request.TaskContext
 */
export type Request_TaskContext = Message<"warp.multi_agent.v1.Request.TaskContext"> & {
    /**
     * List of all known tasks.
     *
     * @generated from field: repeated warp.multi_agent.v1.Task tasks = 1;
     */
    tasks: Task[];
};
/**
 * Describes the message warp.multi_agent.v1.Request.TaskContext.
 * Use `create(Request_TaskContextSchema)` to create a new message.
 */
export declare const Request_TaskContextSchema: GenMessage<Request_TaskContext>;
/**
 * @generated from message warp.multi_agent.v1.Request.Input
 */
export type Request_Input = Message<"warp.multi_agent.v1.Request.Input"> & {
    /**
     * @generated from field: warp.multi_agent.v1.InputContext context = 1;
     */
    context?: InputContext;
    /**
     * The type of input from the user.
     *
     * @generated from oneof warp.multi_agent.v1.Request.Input.type
     */
    type: {
        /**
         * @generated from field: warp.multi_agent.v1.Request.Input.UserInputs user_inputs = 6;
         */
        value: Request_Input_UserInputs;
        case: "userInputs";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Request.Input.QueryWithCannedResponse query_with_canned_response = 4;
         */
        value: Request_Input_QueryWithCannedResponse;
        case: "queryWithCannedResponse";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Request.Input.AutoCodeDiffQuery auto_code_diff_query = 5;
         */
        value: Request_Input_AutoCodeDiffQuery;
        case: "autoCodeDiffQuery";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Request.Input.ResumeConversation resume_conversation = 7;
         */
        value: Request_Input_ResumeConversation;
        case: "resumeConversation";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Request.Input.InitProjectRules init_project_rules = 8;
         */
        value: Request_Input_InitProjectRules;
        case: "initProjectRules";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Request.Input.TriggerSuggestPrompt trigger_suggest_prompt = 9;
         */
        value: Request_Input_TriggerSuggestPrompt;
        case: "triggerSuggestPrompt";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Request.Input.CreateNewProject create_new_project = 10;
         */
        value: Request_Input_CreateNewProject;
        case: "createNewProject";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Request.Input.CloneRepository clone_repository = 11;
         */
        value: Request_Input_CloneRepository;
        case: "cloneRepository";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Request.Input.CodeReview code_review = 12;
         */
        value: Request_Input_CodeReview;
        case: "codeReview";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Request.Input.SummarizeConversation summarize_conversation = 13;
         */
        value: Request_Input_SummarizeConversation;
        case: "summarizeConversation";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Request.Input.CreateEnvironment create_environment = 14;
         */
        value: Request_Input_CreateEnvironment;
        case: "createEnvironment";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Request.Input.FetchReviewComments fetch_review_comments = 15;
         */
        value: Request_Input_FetchReviewComments;
        case: "fetchReviewComments";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Request.Input.StartFromAmbientRunPrompt start_from_ambient_run_prompt = 16;
         */
        value: Request_Input_StartFromAmbientRunPrompt;
        case: "startFromAmbientRunPrompt";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Request.Input.InvokeSkill invoke_skill = 17;
         */
        value: Request_Input_InvokeSkill;
        case: "invokeSkill";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Request.Input.UserQuery user_query = 2 [deprecated = true];
         * @deprecated
         */
        value: Request_Input_UserQuery;
        case: "userQuery";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Request.Input.ToolCallResult tool_call_result = 3 [deprecated = true];
         * @deprecated
         */
        value: Request_Input_ToolCallResult;
        case: "toolCallResult";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.Request.Input.
 * Use `create(Request_InputSchema)` to create a new message.
 */
export declare const Request_InputSchema: GenMessage<Request_Input>;
/**
 * @generated from message warp.multi_agent.v1.Request.Input.UserQuery
 */
export type Request_Input_UserQuery = Message<"warp.multi_agent.v1.Request.Input.UserQuery"> & {
    /**
     * @generated from field: string query = 1;
     */
    query: string;
    /**
     * An attachment referenced by key in the query text.
     *
     * @generated from field: map<string, warp.multi_agent.v1.Attachment> referenced_attachments = 2;
     */
    referencedAttachments: {
        [key: string]: Attachment;
    };
    /**
     * @generated from field: warp.multi_agent.v1.UserQueryMode mode = 3;
     */
    mode?: UserQueryMode;
    /**
     * @generated from field: warp.multi_agent.v1.AgentType intended_agent = 4;
     */
    intendedAgent: AgentType;
};
/**
 * Describes the message warp.multi_agent.v1.Request.Input.UserQuery.
 * Use `create(Request_Input_UserQuerySchema)` to create a new message.
 */
export declare const Request_Input_UserQuerySchema: GenMessage<Request_Input_UserQuery>;
/**
 * Initial query to spawn the CLI (long-running command) subagent on a running command.
 *
 * @generated from message warp.multi_agent.v1.Request.Input.CLIAgentUserQuery
 */
export type Request_Input_CLIAgentUserQuery = Message<"warp.multi_agent.v1.Request.Input.CLIAgentUserQuery"> & {
    /**
     * The user query to send to the subagent.
     *
     * @generated from field: warp.multi_agent.v1.Request.Input.UserQuery user_query = 1;
     */
    userQuery?: Request_Input_UserQuery;
    /**
     * The active (long-)running command.
     *
     * @generated from field: warp.multi_agent.v1.RunningShellCommand running_command = 2;
     */
    runningCommand?: RunningShellCommand;
    /**
     * The tool call ID of the RunShellCommand tool call that ran this command, if any.
     *
     * In most cases, this is not populated, because the user is actively 'spawning' the
     * subagent for a command they ran themself.
     *
     * If, however, the agent runs a command (via `RunShellCommand`) and the user eagerly sends
     * a query just after command execution but prior to the subagent being autumatically
     * spawned (e.g. interrupts the response stream issuing client actions that are spawning
     * the agent), this is populated. This enables the server to imperatively spawn the subagent
     * on this request, along with the eagerly-sent user query, continuing execution in the same
     * way as it would have had the original stream not been interrupted, albeit with the
     * additional user query.
     *
     * @generated from field: string run_shell_command_tool_call_id = 3;
     */
    runShellCommandToolCallId: string;
};
/**
 * Describes the message warp.multi_agent.v1.Request.Input.CLIAgentUserQuery.
 * Use `create(Request_Input_CLIAgentUserQuerySchema)` to create a new message.
 */
export declare const Request_Input_CLIAgentUserQuerySchema: GenMessage<Request_Input_CLIAgentUserQuery>;
/**
 * @generated from message warp.multi_agent.v1.Request.Input.UserInputs
 */
export type Request_Input_UserInputs = Message<"warp.multi_agent.v1.Request.Input.UserInputs"> & {
    /**
     * @generated from field: repeated warp.multi_agent.v1.Request.Input.UserInputs.UserInput inputs = 1;
     */
    inputs: Request_Input_UserInputs_UserInput[];
};
/**
 * Describes the message warp.multi_agent.v1.Request.Input.UserInputs.
 * Use `create(Request_Input_UserInputsSchema)` to create a new message.
 */
export declare const Request_Input_UserInputsSchema: GenMessage<Request_Input_UserInputs>;
/**
 * @generated from message warp.multi_agent.v1.Request.Input.UserInputs.UserInput
 */
export type Request_Input_UserInputs_UserInput = Message<"warp.multi_agent.v1.Request.Input.UserInputs.UserInput"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.Request.Input.UserInputs.UserInput.input
     */
    input: {
        /**
         * @generated from field: warp.multi_agent.v1.Request.Input.UserQuery user_query = 1;
         */
        value: Request_Input_UserQuery;
        case: "userQuery";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Request.Input.ToolCallResult tool_call_result = 2;
         */
        value: Request_Input_ToolCallResult;
        case: "toolCallResult";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Request.Input.CLIAgentUserQuery cli_agent_user_query = 3;
         */
        value: Request_Input_CLIAgentUserQuery;
        case: "cliAgentUserQuery";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.Request.Input.UserInputs.UserInput.
 * Use `create(Request_Input_UserInputs_UserInputSchema)` to create a new message.
 */
export declare const Request_Input_UserInputs_UserInputSchema: GenMessage<Request_Input_UserInputs_UserInput>;
/**
 * Tool call result
 *
 * @generated from message warp.multi_agent.v1.Request.Input.ToolCallResult
 */
export type Request_Input_ToolCallResult = Message<"warp.multi_agent.v1.Request.Input.ToolCallResult"> & {
    /**
     * @generated from field: string tool_call_id = 1;
     */
    toolCallId: string;
    /**
     * @generated from oneof warp.multi_agent.v1.Request.Input.ToolCallResult.result
     */
    result: {
        /**
         * @generated from field: warp.multi_agent.v1.RunShellCommandResult run_shell_command = 2;
         */
        value: RunShellCommandResult;
        case: "runShellCommand";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ReadFilesResult read_files = 3;
         */
        value: ReadFilesResult;
        case: "readFiles";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.SearchCodebaseResult search_codebase = 4;
         */
        value: SearchCodebaseResult;
        case: "searchCodebase";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ApplyFileDiffsResult apply_file_diffs = 5;
         */
        value: ApplyFileDiffsResult;
        case: "applyFileDiffs";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.SuggestPlanResult suggest_plan = 6;
         */
        value: SuggestPlanResult;
        case: "suggestPlan";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.SuggestCreatePlanResult suggest_create_plan = 7;
         */
        value: SuggestCreatePlanResult;
        case: "suggestCreatePlan";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.GrepResult grep = 8;
         */
        value: GrepResult;
        case: "grep";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.FileGlobResult file_glob = 9;
         */
        value: FileGlobResult;
        case: "fileGlob";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ReadMCPResourceResult read_mcp_resource = 11;
         */
        value: ReadMCPResourceResult;
        case: "readMcpResource";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.CallMCPToolResult call_mcp_tool = 12;
         */
        value: CallMCPToolResult;
        case: "callMcpTool";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.WriteToLongRunningShellCommandResult write_to_long_running_shell_command = 13;
         */
        value: WriteToLongRunningShellCommandResult;
        case: "writeToLongRunningShellCommand";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.SuggestNewConversationResult suggest_new_conversation = 14;
         */
        value: SuggestNewConversationResult;
        case: "suggestNewConversation";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.FileGlobV2Result file_glob_v2 = 15;
         */
        value: FileGlobV2Result;
        case: "fileGlobV2";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.SuggestPromptResult suggest_prompt = 16;
         */
        value: SuggestPromptResult;
        case: "suggestPrompt";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.OpenCodeReviewResult open_code_review = 17;
         */
        value: OpenCodeReviewResult;
        case: "openCodeReview";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.InitProjectResult init_project = 18;
         */
        value: InitProjectResult;
        case: "initProject";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ReadDocumentsResult read_documents = 19;
         */
        value: ReadDocumentsResult;
        case: "readDocuments";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.EditDocumentsResult edit_documents = 20;
         */
        value: EditDocumentsResult;
        case: "editDocuments";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.CreateDocumentsResult create_documents = 21;
         */
        value: CreateDocumentsResult;
        case: "createDocuments";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ReadShellCommandOutputResult read_shell_command_output = 22;
         */
        value: ReadShellCommandOutputResult;
        case: "readShellCommandOutput";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.UseComputerResult use_computer = 23;
         */
        value: UseComputerResult;
        case: "useComputer";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.InsertReviewCommentsResult insert_review_comments = 24;
         */
        value: InsertReviewCommentsResult;
        case: "insertReviewComments";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.RequestComputerUseResult request_computer_use = 25;
         */
        value: RequestComputerUseResult;
        case: "requestComputerUse";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ReadSkillResult read_skill = 26;
         */
        value: ReadSkillResult;
        case: "readSkill";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.Request.Input.ToolCallResult.
 * Use `create(Request_Input_ToolCallResultSchema)` to create a new message.
 */
export declare const Request_Input_ToolCallResultSchema: GenMessage<Request_Input_ToolCallResult>;
/**
 * Canned responses correspond to hardcoded predefined responses from
 * Agent Mode e.g. the zero-state chip for "Install" has a predefined
 * initial response asking the user for more information, before passing it
 * off to "real AI".
 *
 * @generated from message warp.multi_agent.v1.Request.Input.QueryWithCannedResponse
 */
export type Request_Input_QueryWithCannedResponse = Message<"warp.multi_agent.v1.Request.Input.QueryWithCannedResponse"> & {
    /**
     * @generated from field: string query = 1;
     */
    query: string;
    /**
     * @generated from oneof warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.type
     */
    type: {
        /**
         * @generated from field: warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.Install install = 2;
         */
        value: Request_Input_QueryWithCannedResponse_Install;
        case: "install";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.Code code = 3;
         */
        value: Request_Input_QueryWithCannedResponse_Code;
        case: "code";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.Deploy deploy = 4;
         */
        value: Request_Input_QueryWithCannedResponse_Deploy;
        case: "deploy";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.SomethingElse something_else = 5;
         */
        value: Request_Input_QueryWithCannedResponse_SomethingElse;
        case: "somethingElse";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.CustomOnboardingRequest custom_onboarding_request = 6;
         */
        value: Request_Input_QueryWithCannedResponse_CustomOnboardingRequest;
        case: "customOnboardingRequest";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.AgenticOnboardingKickoff agentic_onboarding_kickoff = 7;
         */
        value: Request_Input_QueryWithCannedResponse_AgenticOnboardingKickoff;
        case: "agenticOnboardingKickoff";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.
 * Use `create(Request_Input_QueryWithCannedResponseSchema)` to create a new message.
 */
export declare const Request_Input_QueryWithCannedResponseSchema: GenMessage<Request_Input_QueryWithCannedResponse>;
/**
 * @generated from message warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.Install
 */
export type Request_Input_QueryWithCannedResponse_Install = Message<"warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.Install"> & {};
/**
 * Describes the message warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.Install.
 * Use `create(Request_Input_QueryWithCannedResponse_InstallSchema)` to create a new message.
 */
export declare const Request_Input_QueryWithCannedResponse_InstallSchema: GenMessage<Request_Input_QueryWithCannedResponse_Install>;
/**
 * @generated from message warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.Code
 */
export type Request_Input_QueryWithCannedResponse_Code = Message<"warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.Code"> & {};
/**
 * Describes the message warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.Code.
 * Use `create(Request_Input_QueryWithCannedResponse_CodeSchema)` to create a new message.
 */
export declare const Request_Input_QueryWithCannedResponse_CodeSchema: GenMessage<Request_Input_QueryWithCannedResponse_Code>;
/**
 * @generated from message warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.Deploy
 */
export type Request_Input_QueryWithCannedResponse_Deploy = Message<"warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.Deploy"> & {};
/**
 * Describes the message warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.Deploy.
 * Use `create(Request_Input_QueryWithCannedResponse_DeploySchema)` to create a new message.
 */
export declare const Request_Input_QueryWithCannedResponse_DeploySchema: GenMessage<Request_Input_QueryWithCannedResponse_Deploy>;
/**
 * @generated from message warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.SomethingElse
 */
export type Request_Input_QueryWithCannedResponse_SomethingElse = Message<"warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.SomethingElse"> & {};
/**
 * Describes the message warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.SomethingElse.
 * Use `create(Request_Input_QueryWithCannedResponse_SomethingElseSchema)` to create a new message.
 */
export declare const Request_Input_QueryWithCannedResponse_SomethingElseSchema: GenMessage<Request_Input_QueryWithCannedResponse_SomethingElse>;
/**
 * @generated from message warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.CustomOnboardingRequest
 */
export type Request_Input_QueryWithCannedResponse_CustomOnboardingRequest = Message<"warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.CustomOnboardingRequest"> & {};
/**
 * Describes the message warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.CustomOnboardingRequest.
 * Use `create(Request_Input_QueryWithCannedResponse_CustomOnboardingRequestSchema)` to create a new message.
 */
export declare const Request_Input_QueryWithCannedResponse_CustomOnboardingRequestSchema: GenMessage<Request_Input_QueryWithCannedResponse_CustomOnboardingRequest>;
/**
 * @generated from message warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.AgenticOnboardingKickoff
 */
export type Request_Input_QueryWithCannedResponse_AgenticOnboardingKickoff = Message<"warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.AgenticOnboardingKickoff"> & {};
/**
 * Describes the message warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.AgenticOnboardingKickoff.
 * Use `create(Request_Input_QueryWithCannedResponse_AgenticOnboardingKickoffSchema)` to create a new message.
 */
export declare const Request_Input_QueryWithCannedResponse_AgenticOnboardingKickoffSchema: GenMessage<Request_Input_QueryWithCannedResponse_AgenticOnboardingKickoff>;
/**
 * A query to perform an automatic code diff e.g. Warp detects compilation errors
 * in the last run block, and surfaces relevant a code diff to show to the user.
 *
 * @generated from message warp.multi_agent.v1.Request.Input.AutoCodeDiffQuery
 */
export type Request_Input_AutoCodeDiffQuery = Message<"warp.multi_agent.v1.Request.Input.AutoCodeDiffQuery"> & {
    /**
     * @generated from field: string query = 1;
     */
    query: string;
};
/**
 * Describes the message warp.multi_agent.v1.Request.Input.AutoCodeDiffQuery.
 * Use `create(Request_Input_AutoCodeDiffQuerySchema)` to create a new message.
 */
export declare const Request_Input_AutoCodeDiffQuerySchema: GenMessage<Request_Input_AutoCodeDiffQuery>;
/**
 * An input to resume a conversation.
 *
 * @generated from message warp.multi_agent.v1.Request.Input.ResumeConversation
 */
export type Request_Input_ResumeConversation = Message<"warp.multi_agent.v1.Request.Input.ResumeConversation"> & {};
/**
 * Describes the message warp.multi_agent.v1.Request.Input.ResumeConversation.
 * Use `create(Request_Input_ResumeConversationSchema)` to create a new message.
 */
export declare const Request_Input_ResumeConversationSchema: GenMessage<Request_Input_ResumeConversation>;
/**
 * An input to generate project rules. This will override the query with a hardcoded prompt and pass the model's response back.
 *
 * @generated from message warp.multi_agent.v1.Request.Input.InitProjectRules
 */
export type Request_Input_InitProjectRules = Message<"warp.multi_agent.v1.Request.Input.InitProjectRules"> & {};
/**
 * Describes the message warp.multi_agent.v1.Request.Input.InitProjectRules.
 * Use `create(Request_Input_InitProjectRulesSchema)` to create a new message.
 */
export declare const Request_Input_InitProjectRulesSchema: GenMessage<Request_Input_InitProjectRules>;
/**
 * An input to create a new project. When present, the runtime will prepend a predefined
 * prefix to the user-provided description and send that as the effective user query.
 *
 * @generated from message warp.multi_agent.v1.Request.Input.CreateNewProject
 */
export type Request_Input_CreateNewProject = Message<"warp.multi_agent.v1.Request.Input.CreateNewProject"> & {
    /**
     * @generated from field: string query = 1;
     */
    query: string;
};
/**
 * Describes the message warp.multi_agent.v1.Request.Input.CreateNewProject.
 * Use `create(Request_Input_CreateNewProjectSchema)` to create a new message.
 */
export declare const Request_Input_CreateNewProjectSchema: GenMessage<Request_Input_CreateNewProject>;
/**
 * An input to clone a repository. Similar to CreateNewProject, it adds a prefix to the user
 * input.
 *
 * @generated from message warp.multi_agent.v1.Request.Input.CloneRepository
 */
export type Request_Input_CloneRepository = Message<"warp.multi_agent.v1.Request.Input.CloneRepository"> & {
    /**
     * @generated from field: string url = 1;
     */
    url: string;
};
/**
 * Describes the message warp.multi_agent.v1.Request.Input.CloneRepository.
 * Use `create(Request_Input_CloneRepositorySchema)` to create a new message.
 */
export declare const Request_Input_CloneRepositorySchema: GenMessage<Request_Input_CloneRepository>;
/**
 * An input to create a development environment. This will override the query with a hardcoded prompt to set up a warp environment.
 *
 * @generated from message warp.multi_agent.v1.Request.Input.CreateEnvironment
 */
export type Request_Input_CreateEnvironment = Message<"warp.multi_agent.v1.Request.Input.CreateEnvironment"> & {
    /**
     * @generated from field: repeated string repo_paths = 1;
     */
    repoPaths: string[];
};
/**
 * Describes the message warp.multi_agent.v1.Request.Input.CreateEnvironment.
 * Use `create(Request_Input_CreateEnvironmentSchema)` to create a new message.
 */
export declare const Request_Input_CreateEnvironmentSchema: GenMessage<Request_Input_CreateEnvironment>;
/**
 * An input to trigger a suggested prompt.
 *
 * @generated from message warp.multi_agent.v1.Request.Input.TriggerSuggestPrompt
 */
export type Request_Input_TriggerSuggestPrompt = Message<"warp.multi_agent.v1.Request.Input.TriggerSuggestPrompt"> & {
    /**
     * @generated from field: repeated warp.multi_agent.v1.Attachment attachments = 1;
     */
    attachments: Attachment[];
    /**
     * @generated from oneof warp.multi_agent.v1.Request.Input.TriggerSuggestPrompt.trigger
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
 * Describes the message warp.multi_agent.v1.Request.Input.TriggerSuggestPrompt.
 * Use `create(Request_Input_TriggerSuggestPromptSchema)` to create a new message.
 */
export declare const Request_Input_TriggerSuggestPromptSchema: GenMessage<Request_Input_TriggerSuggestPrompt>;
/**
 * @generated from message warp.multi_agent.v1.Request.Input.CodeReview
 */
export type Request_Input_CodeReview = Message<"warp.multi_agent.v1.Request.Input.CodeReview"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.Request.Input.CodeReview.operation
     */
    operation: {
        /**
         * @generated from field: warp.multi_agent.v1.Request.Input.CodeReview.InitialReviewComments initial_review_comments = 1;
         */
        value: Request_Input_CodeReview_InitialReviewComments;
        case: "initialReviewComments";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.Request.Input.CodeReview.
 * Use `create(Request_Input_CodeReviewSchema)` to create a new message.
 */
export declare const Request_Input_CodeReviewSchema: GenMessage<Request_Input_CodeReview>;
/**
 * @generated from message warp.multi_agent.v1.Request.Input.CodeReview.InitialReviewComments
 */
export type Request_Input_CodeReview_InitialReviewComments = Message<"warp.multi_agent.v1.Request.Input.CodeReview.InitialReviewComments"> & {
    /**
     * @generated from field: repeated warp.multi_agent.v1.ReviewComment review_comments = 1;
     */
    reviewComments: ReviewComment[];
    /**
     * @generated from field: warp.multi_agent.v1.DiffSet diff_set = 2;
     */
    diffSet?: DiffSet;
};
/**
 * Describes the message warp.multi_agent.v1.Request.Input.CodeReview.InitialReviewComments.
 * Use `create(Request_Input_CodeReview_InitialReviewCommentsSchema)` to create a new message.
 */
export declare const Request_Input_CodeReview_InitialReviewCommentsSchema: GenMessage<Request_Input_CodeReview_InitialReviewComments>;
/**
 * @generated from message warp.multi_agent.v1.Request.Input.FetchReviewComments
 */
export type Request_Input_FetchReviewComments = Message<"warp.multi_agent.v1.Request.Input.FetchReviewComments"> & {
    /**
     * @generated from field: string repo_path = 1;
     */
    repoPath: string;
};
/**
 * Describes the message warp.multi_agent.v1.Request.Input.FetchReviewComments.
 * Use `create(Request_Input_FetchReviewCommentsSchema)` to create a new message.
 */
export declare const Request_Input_FetchReviewCommentsSchema: GenMessage<Request_Input_FetchReviewComments>;
/**
 * An input to summarize the active conversation.
 *
 * @generated from message warp.multi_agent.v1.Request.Input.SummarizeConversation
 */
export type Request_Input_SummarizeConversation = Message<"warp.multi_agent.v1.Request.Input.SummarizeConversation"> & {
    /**
     * Optional user-specified instructions to focus or augment the summary.
     *
     * @generated from field: string prompt = 1;
     */
    prompt: string;
};
/**
 * Describes the message warp.multi_agent.v1.Request.Input.SummarizeConversation.
 * Use `create(Request_Input_SummarizeConversationSchema)` to create a new message.
 */
export declare const Request_Input_SummarizeConversationSchema: GenMessage<Request_Input_SummarizeConversation>;
/**
 * A special input type used to start an ambient agent run where the initial prompt
 * is retrieved at runtime as the latest prompt known for the run.
 * This is only valid when supplied at the start of a conversation.
 *
 * @generated from message warp.multi_agent.v1.Request.Input.StartFromAmbientRunPrompt
 */
export type Request_Input_StartFromAmbientRunPrompt = Message<"warp.multi_agent.v1.Request.Input.StartFromAmbientRunPrompt"> & {
    /**
     * The ambient agent run ID to resolve the prompt from.
     *
     * @generated from field: string ambient_run_id = 1;
     */
    ambientRunId: string;
    /**
     * Optional runtime base prompt / instructions (e.g., from file-based agent config).
     * When provided, this is prepended to the user-visible prompt.
     *
     * @generated from field: string runtime_base_prompt = 2;
     */
    runtimeBasePrompt: string;
    /**
     * Optional skill to use as base context.
     * When provided, creates an InvokeSkill message (content hidden from user in UI).
     *
     * @generated from field: warp.multi_agent.v1.Skill runtime_skill = 3;
     */
    runtimeSkill?: Skill;
};
/**
 * Describes the message warp.multi_agent.v1.Request.Input.StartFromAmbientRunPrompt.
 * Use `create(Request_Input_StartFromAmbientRunPromptSchema)` to create a new message.
 */
export declare const Request_Input_StartFromAmbientRunPromptSchema: GenMessage<Request_Input_StartFromAmbientRunPrompt>;
/**
 * @generated from message warp.multi_agent.v1.Request.Input.InvokeSkill
 */
export type Request_Input_InvokeSkill = Message<"warp.multi_agent.v1.Request.Input.InvokeSkill"> & {
    /**
     * @generated from field: warp.multi_agent.v1.Skill skill = 1;
     */
    skill?: Skill;
};
/**
 * Describes the message warp.multi_agent.v1.Request.Input.InvokeSkill.
 * Use `create(Request_Input_InvokeSkillSchema)` to create a new message.
 */
export declare const Request_Input_InvokeSkillSchema: GenMessage<Request_Input_InvokeSkill>;
/**
 * @generated from message warp.multi_agent.v1.Request.Metadata
 */
export type Request_Metadata = Message<"warp.multi_agent.v1.Request.Metadata"> & {
    /**
     * Optional conversation ID.
     *
     * If this request continues an existing conversation, this is expected to
     * be the same conversation ID received in a previous AI response earlier in
     * the conversation.
     *
     * @generated from field: string conversation_id = 1;
     */
    conversationId: string;
    /**
     * Map of metadata to inline in server analytic events for this request.
     * Values in the map should be valid JSON values.
     *
     * @generated from field: map<string, google.protobuf.Value> logging = 2;
     */
    logging: {
        [key: string]: Value;
    };
    /**
     * Optional ambient agent task ID.
     *
     * This is set if the client is working autonomously on an ambient agent task.
     *
     * @generated from field: string ambient_agent_task_id = 3;
     */
    ambientAgentTaskId: string;
    /**
     * Optional forked-from conversation ID.
     *
     * Only populated when starting a new conversation (conversation_id is empty)
     * that was created by forking an existing conversation.
     * Value is the source conversation's server conversation ID.
     *
     * @generated from field: string forked_from_conversation_id = 4;
     */
    forkedFromConversationId: string;
};
/**
 * Describes the message warp.multi_agent.v1.Request.Metadata.
 * Use `create(Request_MetadataSchema)` to create a new message.
 */
export declare const Request_MetadataSchema: GenMessage<Request_Metadata>;
/**
 * @generated from message warp.multi_agent.v1.Request.Settings
 */
export type Request_Settings = Message<"warp.multi_agent.v1.Request.Settings"> & {
    /**
     * @generated from field: warp.multi_agent.v1.Request.Settings.ModelConfig model_config = 1;
     */
    modelConfig?: Request_Settings_ModelConfig;
    /**
     * @generated from field: bool rules_enabled = 2;
     */
    rulesEnabled: boolean;
    /**
     * @generated from field: bool web_context_retrieval_enabled = 3;
     */
    webContextRetrievalEnabled: boolean;
    /**
     * @generated from field: bool supports_parallel_tool_calls = 4;
     */
    supportsParallelToolCalls: boolean;
    /**
     * Internal-only field for client to opt-in to using the Anthropic text editor tools.
     * This will be deprecated before launching MAA.
     *
     * @generated from field: bool use_anthropic_text_editor_tools = 5;
     */
    useAnthropicTextEditorTools: boolean;
    /**
     * If `true`, planning is never suggested.
     *
     * @generated from field: bool planning_enabled = 6;
     */
    planningEnabled: boolean;
    /**
     * If `true`, the user's Warp Drive contents can be used as Agent Mode context.
     *
     * @generated from field: bool warp_drive_context_enabled = 7;
     */
    warpDriveContextEnabled: boolean;
    /**
     * If `true`, the `ApplyFileDiffs` tool call may use the `new_files` argument for creating
     * files. Otherwise, new files are created by emitting a diff with an empty `search` field.
     *
     * @generated from field: bool supports_create_files = 8;
     */
    supportsCreateFiles: boolean;
    /**
     * The set of tools that are supported by the client.
     *
     * By contract, the server will only emit tool calls that are in this list.
     * If the list is empty / unspecified, the server can use any tool.
     *
     * @generated from field: repeated warp.multi_agent.v1.ToolType supported_tools = 9;
     */
    supportedTools: ToolType[];
    /**
     * If `true`, the client generally supports long-running commands.
     *
     * This is different from declaring tool support for `WriteToLongRunningShellCommand`;
     * that should be used on a per-request basis to indicate if the client can consume
     * that tool in its current state.
     *
     * @generated from field: bool supports_long_running_commands = 10;
     */
    supportsLongRunningCommands: boolean;
    /**
     * `true` if the server should preserve file contents in conversation history, instead of
     * eliding old file contents and marking them as stale.
     *
     * This is the default behavior for clients released 7/3/2025 and newer.
     *
     * @generated from field: bool should_preserve_file_content_in_history = 11;
     */
    shouldPreserveFileContentInHistory: boolean;
    /**
     * If `true`, the client supports the todos UI and should receive todo-related public API messages.
     * If `false`, todo-related public API messages should not be sent to the client.
     *
     * @generated from field: bool supports_todos_ui = 12;
     */
    supportsTodosUi: boolean;
    /**
     * If `true`, the client supports rendering linked code blocks, and the agent will prefer to output them in its responses.
     * If `false` or unset, the agent will use plain text code block formatting in its responses.
     *
     * @generated from field: bool supports_linked_code_blocks = 13;
     */
    supportsLinkedCodeBlocks: boolean;
    /**
     * If 'true', the client supports the StartedChildTask message.
     * If 'false', the server needs to use the legacy ServerEvent.StartedChildTask, since the
     * client can't deserialize and pass back up the new message.
     *
     * @generated from field: bool supports_started_child_task_message = 14;
     */
    supportsStartedChildTaskMessage: boolean;
    /**
     * If `true`, the client supports suggested/passive prompts.
     *
     * @generated from field: bool supports_suggest_prompt = 15;
     */
    supportsSuggestPrompt: boolean;
    /**
     * If `true`, the client supports using `read_files` to read images.
     *
     * @generated from field: bool supports_read_image_files = 16;
     */
    supportsReadImageFiles: boolean;
    /**
     * If `true`, the client supports the `Reasoning` message type.
     *
     * @generated from field: bool supports_reasoning_message = 17;
     */
    supportsReasoningMessage: boolean;
    /**
     * Optional user-provided API keys for LLM providers.
     * If provided, these keys will be used instead of Warp's default keys.
     *
     * @generated from field: warp.multi_agent.v1.Request.Settings.ApiKeys api_keys = 18;
     */
    apiKeys?: Request_Settings_ApiKeys;
    /**
     * @generated from field: warp.multi_agent.v1.AutonomyLevel autonomy_level = 19;
     */
    autonomyLevel: AutonomyLevel;
    /**
     * @generated from field: warp.multi_agent.v1.IsolationLevel isolation_level = 20;
     */
    isolationLevel: IsolationLevel;
    /**
     * If `true`, the agent may use web search when helpful for completing tasks.
     * Controlled by the user's execution profile settings.
     *
     * @generated from field: bool web_search_enabled = 21;
     */
    webSearchEnabled: boolean;
    /**
     * The set of CLI subagent tools that are supported by the client.
     *
     * @generated from field: repeated warp.multi_agent.v1.ToolType supported_cli_agent_tools = 22;
     */
    supportedCliAgentTools: ToolType[];
    /**
     * If `true`, the client supports V4A-style diffs.
     *
     * @generated from field: bool supports_v4a_file_diffs = 23;
     */
    supportsV4aFileDiffs: boolean;
    /**
     * If `true`, the client supports the new summarization approach where messages
     * are moved to a subtask and replaced with a subagent tool call + result.
     *
     * @generated from field: bool supports_summarization_via_message_replacement = 24;
     */
    supportsSummarizationViaMessageReplacement: boolean;
    /**
     * If `true`, the client supports reading bundled skills that are distributed alongside it.
     *
     * @generated from field: bool supports_bundled_skills = 25;
     */
    supportsBundledSkills: boolean;
};
/**
 * Describes the message warp.multi_agent.v1.Request.Settings.
 * Use `create(Request_SettingsSchema)` to create a new message.
 */
export declare const Request_SettingsSchema: GenMessage<Request_Settings>;
/**
 * @generated from message warp.multi_agent.v1.Request.Settings.ModelConfig
 */
export type Request_Settings_ModelConfig = Message<"warp.multi_agent.v1.Request.Settings.ModelConfig"> & {
    /**
     * The LLM of preference for general tasks.
     *
     * @generated from field: string base = 1;
     */
    base: string;
    /**
     * DEPRECATED: The LLM of preference for reasoning tasks.
     *
     * @generated from field: string planning = 2 [deprecated = true];
     * @deprecated
     */
    planning: string;
    /**
     * The LLM of preference for coding tasks.
     *
     * @generated from field: string coding = 3;
     */
    coding: string;
    /**
     * The LLM of preference for CLI agent.
     *
     * @generated from field: string cli_agent = 4;
     */
    cliAgent: string;
    /**
     * The LLM of preference for the Computer Use agent.
     *
     * @generated from field: string computer_use_agent = 5;
     */
    computerUseAgent: string;
};
/**
 * Describes the message warp.multi_agent.v1.Request.Settings.ModelConfig.
 * Use `create(Request_Settings_ModelConfigSchema)` to create a new message.
 */
export declare const Request_Settings_ModelConfigSchema: GenMessage<Request_Settings_ModelConfig>;
/**
 * @generated from message warp.multi_agent.v1.Request.Settings.ApiKeys
 */
export type Request_Settings_ApiKeys = Message<"warp.multi_agent.v1.Request.Settings.ApiKeys"> & {
    /**
     * @generated from field: string anthropic = 1;
     */
    anthropic: string;
    /**
     * @generated from field: string openai = 2;
     */
    openai: string;
    /**
     * @generated from field: string google = 3;
     */
    google: string;
    /**
     * @generated from field: string open_router = 4;
     */
    openRouter: string;
    /**
     * If `true`, the client allows the use of Warp credits for LLM calls when
     * keys are provided.
     *
     * @generated from field: bool allow_use_of_warp_credits = 5;
     */
    allowUseOfWarpCredits: boolean;
    /**
     * Optional AWS credentials (e.g. for Bedrock).
     *
     * @generated from field: warp.multi_agent.v1.Request.Settings.ApiKeys.AWSCredentials aws_credentials = 6;
     */
    awsCredentials?: Request_Settings_ApiKeys_AWSCredentials;
};
/**
 * Describes the message warp.multi_agent.v1.Request.Settings.ApiKeys.
 * Use `create(Request_Settings_ApiKeysSchema)` to create a new message.
 */
export declare const Request_Settings_ApiKeysSchema: GenMessage<Request_Settings_ApiKeys>;
/**
 * @generated from message warp.multi_agent.v1.Request.Settings.ApiKeys.AWSCredentials
 */
export type Request_Settings_ApiKeys_AWSCredentials = Message<"warp.multi_agent.v1.Request.Settings.ApiKeys.AWSCredentials"> & {
    /**
     * @generated from field: string access_key = 1;
     */
    accessKey: string;
    /**
     * @generated from field: string secret_key = 2;
     */
    secretKey: string;
    /**
     * @generated from field: string session_token = 3;
     */
    sessionToken: string;
    /**
     * @generated from field: string region = 4;
     */
    region: string;
};
/**
 * Describes the message warp.multi_agent.v1.Request.Settings.ApiKeys.AWSCredentials.
 * Use `create(Request_Settings_ApiKeys_AWSCredentialsSchema)` to create a new message.
 */
export declare const Request_Settings_ApiKeys_AWSCredentialsSchema: GenMessage<Request_Settings_ApiKeys_AWSCredentials>;
/**
 * @generated from message warp.multi_agent.v1.Request.MCPContext
 */
export type Request_MCPContext = Message<"warp.multi_agent.v1.Request.MCPContext"> & {
    /**
     * DEPRECATED: Use `servers` field instead for server-attributed tools/resources.
     * Kept for backwards compatibility with older clients.
     *
     * @generated from field: repeated warp.multi_agent.v1.Request.MCPContext.MCPResource resources = 1 [deprecated = true];
     * @deprecated
     */
    resources: Request_MCPContext_MCPResource[];
    /**
     * @generated from field: repeated warp.multi_agent.v1.Request.MCPContext.MCPTool tools = 2 [deprecated = true];
     * @deprecated
     */
    tools: Request_MCPContext_MCPTool[];
    /**
     * Server-grouped MCP context. Each entry represents a single MCP server summary.
     *
     * @generated from field: repeated warp.multi_agent.v1.Request.MCPContext.MCPServer servers = 3;
     */
    servers: Request_MCPContext_MCPServer[];
};
/**
 * Describes the message warp.multi_agent.v1.Request.MCPContext.
 * Use `create(Request_MCPContextSchema)` to create a new message.
 */
export declare const Request_MCPContextSchema: GenMessage<Request_MCPContext>;
/**
 * @generated from message warp.multi_agent.v1.Request.MCPContext.MCPResource
 */
export type Request_MCPContext_MCPResource = Message<"warp.multi_agent.v1.Request.MCPContext.MCPResource"> & {
    /**
     * @generated from field: string uri = 1;
     */
    uri: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string description = 3;
     */
    description: string;
    /**
     * @generated from field: string mime_type = 4;
     */
    mimeType: string;
};
/**
 * Describes the message warp.multi_agent.v1.Request.MCPContext.MCPResource.
 * Use `create(Request_MCPContext_MCPResourceSchema)` to create a new message.
 */
export declare const Request_MCPContext_MCPResourceSchema: GenMessage<Request_MCPContext_MCPResource>;
/**
 * @generated from message warp.multi_agent.v1.Request.MCPContext.MCPTool
 */
export type Request_MCPContext_MCPTool = Message<"warp.multi_agent.v1.Request.MCPContext.MCPTool"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * The input schema for an MCP Tool is specified as
     * as JSON schema, which is a JSON struct at root.
     *
     * @generated from field: google.protobuf.Struct input_schema = 3;
     */
    inputSchema?: JsonObject;
};
/**
 * Describes the message warp.multi_agent.v1.Request.MCPContext.MCPTool.
 * Use `create(Request_MCPContext_MCPToolSchema)` to create a new message.
 */
export declare const Request_MCPContext_MCPToolSchema: GenMessage<Request_MCPContext_MCPTool>;
/**
 * @generated from message warp.multi_agent.v1.Request.MCPContext.MCPServer
 */
export type Request_MCPContext_MCPServer = Message<"warp.multi_agent.v1.Request.MCPContext.MCPServer"> & {
    /**
     * The name of the MCP server (e.g., "Sentry", "Linear", "GitHub").
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * Optional description of the server's purpose.
     *
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * Unique identifier for this MCP server.
     *
     * @generated from field: string id = 5;
     */
    id: string;
    /**
     * Resources provided by this server.
     *
     * @generated from field: repeated warp.multi_agent.v1.Request.MCPContext.MCPResource resources = 3;
     */
    resources: Request_MCPContext_MCPResource[];
    /**
     * Tools provided by this server.
     *
     * @generated from field: repeated warp.multi_agent.v1.Request.MCPContext.MCPTool tools = 4;
     */
    tools: Request_MCPContext_MCPTool[];
};
/**
 * Describes the message warp.multi_agent.v1.Request.MCPContext.MCPServer.
 * Use `create(Request_MCPContext_MCPServerSchema)` to create a new message.
 */
export declare const Request_MCPContext_MCPServerSchema: GenMessage<Request_MCPContext_MCPServer>;
/**
 * @generated from enum warp.multi_agent.v1.AutonomyLevel
 */
export declare enum AutonomyLevel {
    /**
     * This is the default and lowest level of autonomy. This assumes a user is
     * present to answer clarifying questions, approve requested commands, etc.
     *
     * @generated from enum value: SUPERVISED = 0;
     */
    SUPERVISED = 0,
    /**
     * No user is available to answer questions.
     *
     * @generated from enum value: UNSUPERVISED = 1;
     */
    UNSUPERVISED = 1
}
/**
 * Describes the enum warp.multi_agent.v1.AutonomyLevel.
 */
export declare const AutonomyLevelSchema: GenEnum<AutonomyLevel>;
/**
 * @generated from enum warp.multi_agent.v1.IsolationLevel
 */
export declare enum IsolationLevel {
    /**
     * i.e. on a user's machine with no isolation from their environment.
     *
     * @generated from enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * Fully sandboxed.
     *
     * @generated from enum value: SANDBOX = 1;
     */
    SANDBOX = 1
}
/**
 * Describes the enum warp.multi_agent.v1.IsolationLevel.
 */
export declare const IsolationLevelSchema: GenEnum<IsolationLevel>;
