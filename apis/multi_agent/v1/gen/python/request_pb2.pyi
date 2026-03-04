from google.protobuf import empty_pb2 as _empty_pb2
from google.protobuf import struct_pb2 as _struct_pb2
from . import input_context_pb2 as _input_context_pb2
from . import attachment_pb2 as _attachment_pb2
from . import file_content_pb2 as _file_content_pb2
from . import options_pb2 as _options_pb2
from . import suggestions_pb2 as _suggestions_pb2
from . import task_pb2 as _task_pb2
from . import skill_pb2 as _skill_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class AutonomyLevel(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    SUPERVISED: _ClassVar[AutonomyLevel]
    UNSUPERVISED: _ClassVar[AutonomyLevel]

class IsolationLevel(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    NONE: _ClassVar[IsolationLevel]
    SANDBOX: _ClassVar[IsolationLevel]
SUPERVISED: AutonomyLevel
UNSUPERVISED: AutonomyLevel
NONE: IsolationLevel
SANDBOX: IsolationLevel

class Request(_message.Message):
    __slots__ = ("task_context", "input", "settings", "metadata", "existing_suggestions", "mcp_context")
    class TaskContext(_message.Message):
        __slots__ = ("tasks",)
        TASKS_FIELD_NUMBER: _ClassVar[int]
        tasks: _containers.RepeatedCompositeFieldContainer[_task_pb2.Task]
        def __init__(self, tasks: _Optional[_Iterable[_Union[_task_pb2.Task, _Mapping]]] = ...) -> None: ...
    class Input(_message.Message):
        __slots__ = ("context", "user_inputs", "query_with_canned_response", "auto_code_diff_query", "resume_conversation", "init_project_rules", "generate_passive_suggestions", "create_new_project", "clone_repository", "code_review", "summarize_conversation", "create_environment", "fetch_review_comments", "start_from_ambient_run_prompt", "invoke_skill", "user_query", "tool_call_result")
        class UserQuery(_message.Message):
            __slots__ = ("query", "referenced_attachments", "mode", "intended_agent")
            class ReferencedAttachmentsEntry(_message.Message):
                __slots__ = ("key", "value")
                KEY_FIELD_NUMBER: _ClassVar[int]
                VALUE_FIELD_NUMBER: _ClassVar[int]
                key: str
                value: _attachment_pb2.Attachment
                def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_attachment_pb2.Attachment, _Mapping]] = ...) -> None: ...
            QUERY_FIELD_NUMBER: _ClassVar[int]
            REFERENCED_ATTACHMENTS_FIELD_NUMBER: _ClassVar[int]
            MODE_FIELD_NUMBER: _ClassVar[int]
            INTENDED_AGENT_FIELD_NUMBER: _ClassVar[int]
            query: str
            referenced_attachments: _containers.MessageMap[str, _attachment_pb2.Attachment]
            mode: _task_pb2.UserQueryMode
            intended_agent: _task_pb2.AgentType
            def __init__(self, query: _Optional[str] = ..., referenced_attachments: _Optional[_Mapping[str, _attachment_pb2.Attachment]] = ..., mode: _Optional[_Union[_task_pb2.UserQueryMode, _Mapping]] = ..., intended_agent: _Optional[_Union[_task_pb2.AgentType, str]] = ...) -> None: ...
        class CLIAgentUserQuery(_message.Message):
            __slots__ = ("user_query", "running_command", "run_shell_command_tool_call_id")
            USER_QUERY_FIELD_NUMBER: _ClassVar[int]
            RUNNING_COMMAND_FIELD_NUMBER: _ClassVar[int]
            RUN_SHELL_COMMAND_TOOL_CALL_ID_FIELD_NUMBER: _ClassVar[int]
            user_query: Request.Input.UserQuery
            running_command: _attachment_pb2.RunningShellCommand
            run_shell_command_tool_call_id: str
            def __init__(self, user_query: _Optional[_Union[Request.Input.UserQuery, _Mapping]] = ..., running_command: _Optional[_Union[_attachment_pb2.RunningShellCommand, _Mapping]] = ..., run_shell_command_tool_call_id: _Optional[str] = ...) -> None: ...
        class UserInputs(_message.Message):
            __slots__ = ("inputs",)
            class UserInput(_message.Message):
                __slots__ = ("user_query", "tool_call_result", "cli_agent_user_query", "messages_received_from_agents")
                USER_QUERY_FIELD_NUMBER: _ClassVar[int]
                TOOL_CALL_RESULT_FIELD_NUMBER: _ClassVar[int]
                CLI_AGENT_USER_QUERY_FIELD_NUMBER: _ClassVar[int]
                MESSAGES_RECEIVED_FROM_AGENTS_FIELD_NUMBER: _ClassVar[int]
                user_query: Request.Input.UserQuery
                tool_call_result: Request.Input.ToolCallResult
                cli_agent_user_query: Request.Input.CLIAgentUserQuery
                messages_received_from_agents: Request.Input.UserInputs.MessagesReceivedFromAgents
                def __init__(self, user_query: _Optional[_Union[Request.Input.UserQuery, _Mapping]] = ..., tool_call_result: _Optional[_Union[Request.Input.ToolCallResult, _Mapping]] = ..., cli_agent_user_query: _Optional[_Union[Request.Input.CLIAgentUserQuery, _Mapping]] = ..., messages_received_from_agents: _Optional[_Union[Request.Input.UserInputs.MessagesReceivedFromAgents, _Mapping]] = ...) -> None: ...
            class MessagesReceivedFromAgents(_message.Message):
                __slots__ = ("messages",)
                class ReceivedMessage(_message.Message):
                    __slots__ = ("message_id", "sender_agent_id", "addresses", "subject", "message_body")
                    MESSAGE_ID_FIELD_NUMBER: _ClassVar[int]
                    SENDER_AGENT_ID_FIELD_NUMBER: _ClassVar[int]
                    ADDRESSES_FIELD_NUMBER: _ClassVar[int]
                    SUBJECT_FIELD_NUMBER: _ClassVar[int]
                    MESSAGE_BODY_FIELD_NUMBER: _ClassVar[int]
                    message_id: str
                    sender_agent_id: str
                    addresses: _containers.RepeatedScalarFieldContainer[str]
                    subject: str
                    message_body: str
                    def __init__(self, message_id: _Optional[str] = ..., sender_agent_id: _Optional[str] = ..., addresses: _Optional[_Iterable[str]] = ..., subject: _Optional[str] = ..., message_body: _Optional[str] = ...) -> None: ...
                MESSAGES_FIELD_NUMBER: _ClassVar[int]
                messages: _containers.RepeatedCompositeFieldContainer[Request.Input.UserInputs.MessagesReceivedFromAgents.ReceivedMessage]
                def __init__(self, messages: _Optional[_Iterable[_Union[Request.Input.UserInputs.MessagesReceivedFromAgents.ReceivedMessage, _Mapping]]] = ...) -> None: ...
            INPUTS_FIELD_NUMBER: _ClassVar[int]
            inputs: _containers.RepeatedCompositeFieldContainer[Request.Input.UserInputs.UserInput]
            def __init__(self, inputs: _Optional[_Iterable[_Union[Request.Input.UserInputs.UserInput, _Mapping]]] = ...) -> None: ...
        class ToolCallResult(_message.Message):
            __slots__ = ("tool_call_id", "run_shell_command", "read_files", "search_codebase", "apply_file_diffs", "suggest_plan", "suggest_create_plan", "grep", "file_glob", "read_mcp_resource", "call_mcp_tool", "write_to_long_running_shell_command", "suggest_new_conversation", "file_glob_v2", "suggest_prompt", "open_code_review", "init_project", "read_documents", "edit_documents", "create_documents", "read_shell_command_output", "use_computer", "insert_review_comments", "request_computer_use", "read_skill", "fetch_conversation", "start_agent", "send_message_to_agent", "transfer_shell_command_control_to_user")
            TOOL_CALL_ID_FIELD_NUMBER: _ClassVar[int]
            RUN_SHELL_COMMAND_FIELD_NUMBER: _ClassVar[int]
            READ_FILES_FIELD_NUMBER: _ClassVar[int]
            SEARCH_CODEBASE_FIELD_NUMBER: _ClassVar[int]
            APPLY_FILE_DIFFS_FIELD_NUMBER: _ClassVar[int]
            SUGGEST_PLAN_FIELD_NUMBER: _ClassVar[int]
            SUGGEST_CREATE_PLAN_FIELD_NUMBER: _ClassVar[int]
            GREP_FIELD_NUMBER: _ClassVar[int]
            FILE_GLOB_FIELD_NUMBER: _ClassVar[int]
            READ_MCP_RESOURCE_FIELD_NUMBER: _ClassVar[int]
            CALL_MCP_TOOL_FIELD_NUMBER: _ClassVar[int]
            WRITE_TO_LONG_RUNNING_SHELL_COMMAND_FIELD_NUMBER: _ClassVar[int]
            SUGGEST_NEW_CONVERSATION_FIELD_NUMBER: _ClassVar[int]
            FILE_GLOB_V2_FIELD_NUMBER: _ClassVar[int]
            SUGGEST_PROMPT_FIELD_NUMBER: _ClassVar[int]
            OPEN_CODE_REVIEW_FIELD_NUMBER: _ClassVar[int]
            INIT_PROJECT_FIELD_NUMBER: _ClassVar[int]
            READ_DOCUMENTS_FIELD_NUMBER: _ClassVar[int]
            EDIT_DOCUMENTS_FIELD_NUMBER: _ClassVar[int]
            CREATE_DOCUMENTS_FIELD_NUMBER: _ClassVar[int]
            READ_SHELL_COMMAND_OUTPUT_FIELD_NUMBER: _ClassVar[int]
            USE_COMPUTER_FIELD_NUMBER: _ClassVar[int]
            INSERT_REVIEW_COMMENTS_FIELD_NUMBER: _ClassVar[int]
            REQUEST_COMPUTER_USE_FIELD_NUMBER: _ClassVar[int]
            READ_SKILL_FIELD_NUMBER: _ClassVar[int]
            FETCH_CONVERSATION_FIELD_NUMBER: _ClassVar[int]
            START_AGENT_FIELD_NUMBER: _ClassVar[int]
            SEND_MESSAGE_TO_AGENT_FIELD_NUMBER: _ClassVar[int]
            TRANSFER_SHELL_COMMAND_CONTROL_TO_USER_FIELD_NUMBER: _ClassVar[int]
            tool_call_id: str
            run_shell_command: _task_pb2.RunShellCommandResult
            read_files: _task_pb2.ReadFilesResult
            search_codebase: _task_pb2.SearchCodebaseResult
            apply_file_diffs: _task_pb2.ApplyFileDiffsResult
            suggest_plan: _task_pb2.SuggestPlanResult
            suggest_create_plan: _task_pb2.SuggestCreatePlanResult
            grep: _task_pb2.GrepResult
            file_glob: _task_pb2.FileGlobResult
            read_mcp_resource: _task_pb2.ReadMCPResourceResult
            call_mcp_tool: _task_pb2.CallMCPToolResult
            write_to_long_running_shell_command: _task_pb2.WriteToLongRunningShellCommandResult
            suggest_new_conversation: _task_pb2.SuggestNewConversationResult
            file_glob_v2: _task_pb2.FileGlobV2Result
            suggest_prompt: _task_pb2.SuggestPromptResult
            open_code_review: _task_pb2.OpenCodeReviewResult
            init_project: _task_pb2.InitProjectResult
            read_documents: _task_pb2.ReadDocumentsResult
            edit_documents: _task_pb2.EditDocumentsResult
            create_documents: _task_pb2.CreateDocumentsResult
            read_shell_command_output: _task_pb2.ReadShellCommandOutputResult
            use_computer: _task_pb2.UseComputerResult
            insert_review_comments: _task_pb2.InsertReviewCommentsResult
            request_computer_use: _task_pb2.RequestComputerUseResult
            read_skill: _task_pb2.ReadSkillResult
            fetch_conversation: _task_pb2.FetchConversationResult
            start_agent: _task_pb2.StartAgentResult
            send_message_to_agent: _task_pb2.SendMessageToAgentResult
            transfer_shell_command_control_to_user: _task_pb2.TransferShellCommandControlToUserResult
            def __init__(self, tool_call_id: _Optional[str] = ..., run_shell_command: _Optional[_Union[_task_pb2.RunShellCommandResult, _Mapping]] = ..., read_files: _Optional[_Union[_task_pb2.ReadFilesResult, _Mapping]] = ..., search_codebase: _Optional[_Union[_task_pb2.SearchCodebaseResult, _Mapping]] = ..., apply_file_diffs: _Optional[_Union[_task_pb2.ApplyFileDiffsResult, _Mapping]] = ..., suggest_plan: _Optional[_Union[_task_pb2.SuggestPlanResult, _Mapping]] = ..., suggest_create_plan: _Optional[_Union[_task_pb2.SuggestCreatePlanResult, _Mapping]] = ..., grep: _Optional[_Union[_task_pb2.GrepResult, _Mapping]] = ..., file_glob: _Optional[_Union[_task_pb2.FileGlobResult, _Mapping]] = ..., read_mcp_resource: _Optional[_Union[_task_pb2.ReadMCPResourceResult, _Mapping]] = ..., call_mcp_tool: _Optional[_Union[_task_pb2.CallMCPToolResult, _Mapping]] = ..., write_to_long_running_shell_command: _Optional[_Union[_task_pb2.WriteToLongRunningShellCommandResult, _Mapping]] = ..., suggest_new_conversation: _Optional[_Union[_task_pb2.SuggestNewConversationResult, _Mapping]] = ..., file_glob_v2: _Optional[_Union[_task_pb2.FileGlobV2Result, _Mapping]] = ..., suggest_prompt: _Optional[_Union[_task_pb2.SuggestPromptResult, _Mapping]] = ..., open_code_review: _Optional[_Union[_task_pb2.OpenCodeReviewResult, _Mapping]] = ..., init_project: _Optional[_Union[_task_pb2.InitProjectResult, _Mapping]] = ..., read_documents: _Optional[_Union[_task_pb2.ReadDocumentsResult, _Mapping]] = ..., edit_documents: _Optional[_Union[_task_pb2.EditDocumentsResult, _Mapping]] = ..., create_documents: _Optional[_Union[_task_pb2.CreateDocumentsResult, _Mapping]] = ..., read_shell_command_output: _Optional[_Union[_task_pb2.ReadShellCommandOutputResult, _Mapping]] = ..., use_computer: _Optional[_Union[_task_pb2.UseComputerResult, _Mapping]] = ..., insert_review_comments: _Optional[_Union[_task_pb2.InsertReviewCommentsResult, _Mapping]] = ..., request_computer_use: _Optional[_Union[_task_pb2.RequestComputerUseResult, _Mapping]] = ..., read_skill: _Optional[_Union[_task_pb2.ReadSkillResult, _Mapping]] = ..., fetch_conversation: _Optional[_Union[_task_pb2.FetchConversationResult, _Mapping]] = ..., start_agent: _Optional[_Union[_task_pb2.StartAgentResult, _Mapping]] = ..., send_message_to_agent: _Optional[_Union[_task_pb2.SendMessageToAgentResult, _Mapping]] = ..., transfer_shell_command_control_to_user: _Optional[_Union[_task_pb2.TransferShellCommandControlToUserResult, _Mapping]] = ...) -> None: ...
        class QueryWithCannedResponse(_message.Message):
            __slots__ = ("query", "install", "code", "deploy", "something_else", "custom_onboarding_request", "agentic_onboarding_kickoff")
            class Install(_message.Message):
                __slots__ = ()
                def __init__(self) -> None: ...
            class Code(_message.Message):
                __slots__ = ()
                def __init__(self) -> None: ...
            class Deploy(_message.Message):
                __slots__ = ()
                def __init__(self) -> None: ...
            class SomethingElse(_message.Message):
                __slots__ = ()
                def __init__(self) -> None: ...
            class CustomOnboardingRequest(_message.Message):
                __slots__ = ()
                def __init__(self) -> None: ...
            class AgenticOnboardingKickoff(_message.Message):
                __slots__ = ()
                def __init__(self) -> None: ...
            QUERY_FIELD_NUMBER: _ClassVar[int]
            INSTALL_FIELD_NUMBER: _ClassVar[int]
            CODE_FIELD_NUMBER: _ClassVar[int]
            DEPLOY_FIELD_NUMBER: _ClassVar[int]
            SOMETHING_ELSE_FIELD_NUMBER: _ClassVar[int]
            CUSTOM_ONBOARDING_REQUEST_FIELD_NUMBER: _ClassVar[int]
            AGENTIC_ONBOARDING_KICKOFF_FIELD_NUMBER: _ClassVar[int]
            query: str
            install: Request.Input.QueryWithCannedResponse.Install
            code: Request.Input.QueryWithCannedResponse.Code
            deploy: Request.Input.QueryWithCannedResponse.Deploy
            something_else: Request.Input.QueryWithCannedResponse.SomethingElse
            custom_onboarding_request: Request.Input.QueryWithCannedResponse.CustomOnboardingRequest
            agentic_onboarding_kickoff: Request.Input.QueryWithCannedResponse.AgenticOnboardingKickoff
            def __init__(self, query: _Optional[str] = ..., install: _Optional[_Union[Request.Input.QueryWithCannedResponse.Install, _Mapping]] = ..., code: _Optional[_Union[Request.Input.QueryWithCannedResponse.Code, _Mapping]] = ..., deploy: _Optional[_Union[Request.Input.QueryWithCannedResponse.Deploy, _Mapping]] = ..., something_else: _Optional[_Union[Request.Input.QueryWithCannedResponse.SomethingElse, _Mapping]] = ..., custom_onboarding_request: _Optional[_Union[Request.Input.QueryWithCannedResponse.CustomOnboardingRequest, _Mapping]] = ..., agentic_onboarding_kickoff: _Optional[_Union[Request.Input.QueryWithCannedResponse.AgenticOnboardingKickoff, _Mapping]] = ...) -> None: ...
        class AutoCodeDiffQuery(_message.Message):
            __slots__ = ("query",)
            QUERY_FIELD_NUMBER: _ClassVar[int]
            query: str
            def __init__(self, query: _Optional[str] = ...) -> None: ...
        class ResumeConversation(_message.Message):
            __slots__ = ()
            def __init__(self) -> None: ...
        class InitProjectRules(_message.Message):
            __slots__ = ()
            def __init__(self) -> None: ...
        class CreateNewProject(_message.Message):
            __slots__ = ("query",)
            QUERY_FIELD_NUMBER: _ClassVar[int]
            query: str
            def __init__(self, query: _Optional[str] = ...) -> None: ...
        class CloneRepository(_message.Message):
            __slots__ = ("url",)
            URL_FIELD_NUMBER: _ClassVar[int]
            url: str
            def __init__(self, url: _Optional[str] = ...) -> None: ...
        class CreateEnvironment(_message.Message):
            __slots__ = ("repo_paths",)
            REPO_PATHS_FIELD_NUMBER: _ClassVar[int]
            repo_paths: _containers.RepeatedScalarFieldContainer[str]
            def __init__(self, repo_paths: _Optional[_Iterable[str]] = ...) -> None: ...
        class GeneratePassiveSuggestions(_message.Message):
            __slots__ = ("attachments", "files_changed", "command_run", "shell_command_completed", "agent_response_completed")
            class ShellCommandCompleted(_message.Message):
                __slots__ = ("executed_shell_command", "relevant_files")
                EXECUTED_SHELL_COMMAND_FIELD_NUMBER: _ClassVar[int]
                RELEVANT_FILES_FIELD_NUMBER: _ClassVar[int]
                executed_shell_command: _attachment_pb2.ExecutedShellCommand
                relevant_files: _containers.RepeatedCompositeFieldContainer[_file_content_pb2.AnyFileContent]
                def __init__(self, executed_shell_command: _Optional[_Union[_attachment_pb2.ExecutedShellCommand, _Mapping]] = ..., relevant_files: _Optional[_Iterable[_Union[_file_content_pb2.AnyFileContent, _Mapping]]] = ...) -> None: ...
            class AgentResponseCompleted(_message.Message):
                __slots__ = ()
                def __init__(self) -> None: ...
            ATTACHMENTS_FIELD_NUMBER: _ClassVar[int]
            FILES_CHANGED_FIELD_NUMBER: _ClassVar[int]
            COMMAND_RUN_FIELD_NUMBER: _ClassVar[int]
            SHELL_COMMAND_COMPLETED_FIELD_NUMBER: _ClassVar[int]
            AGENT_RESPONSE_COMPLETED_FIELD_NUMBER: _ClassVar[int]
            attachments: _containers.RepeatedCompositeFieldContainer[_attachment_pb2.Attachment]
            files_changed: _empty_pb2.Empty
            command_run: _empty_pb2.Empty
            shell_command_completed: Request.Input.GeneratePassiveSuggestions.ShellCommandCompleted
            agent_response_completed: Request.Input.GeneratePassiveSuggestions.AgentResponseCompleted
            def __init__(self, attachments: _Optional[_Iterable[_Union[_attachment_pb2.Attachment, _Mapping]]] = ..., files_changed: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ..., command_run: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ..., shell_command_completed: _Optional[_Union[Request.Input.GeneratePassiveSuggestions.ShellCommandCompleted, _Mapping]] = ..., agent_response_completed: _Optional[_Union[Request.Input.GeneratePassiveSuggestions.AgentResponseCompleted, _Mapping]] = ...) -> None: ...
        class OnShellCommandCompletion(_message.Message):
            __slots__ = ("command",)
            COMMAND_FIELD_NUMBER: _ClassVar[int]
            command: str
            def __init__(self, command: _Optional[str] = ...) -> None: ...
        class CodeReview(_message.Message):
            __slots__ = ("initial_review_comments",)
            class InitialReviewComments(_message.Message):
                __slots__ = ("review_comments", "diff_set")
                REVIEW_COMMENTS_FIELD_NUMBER: _ClassVar[int]
                DIFF_SET_FIELD_NUMBER: _ClassVar[int]
                review_comments: _containers.RepeatedCompositeFieldContainer[_task_pb2.ReviewComment]
                diff_set: _attachment_pb2.DiffSet
                def __init__(self, review_comments: _Optional[_Iterable[_Union[_task_pb2.ReviewComment, _Mapping]]] = ..., diff_set: _Optional[_Union[_attachment_pb2.DiffSet, _Mapping]] = ...) -> None: ...
            INITIAL_REVIEW_COMMENTS_FIELD_NUMBER: _ClassVar[int]
            initial_review_comments: Request.Input.CodeReview.InitialReviewComments
            def __init__(self, initial_review_comments: _Optional[_Union[Request.Input.CodeReview.InitialReviewComments, _Mapping]] = ...) -> None: ...
        class FetchReviewComments(_message.Message):
            __slots__ = ("repo_path",)
            REPO_PATH_FIELD_NUMBER: _ClassVar[int]
            repo_path: str
            def __init__(self, repo_path: _Optional[str] = ...) -> None: ...
        class SummarizeConversation(_message.Message):
            __slots__ = ("prompt",)
            PROMPT_FIELD_NUMBER: _ClassVar[int]
            prompt: str
            def __init__(self, prompt: _Optional[str] = ...) -> None: ...
        class StartFromAmbientRunPrompt(_message.Message):
            __slots__ = ("ambient_run_id", "runtime_base_prompt", "runtime_skill", "attachments_dir")
            AMBIENT_RUN_ID_FIELD_NUMBER: _ClassVar[int]
            RUNTIME_BASE_PROMPT_FIELD_NUMBER: _ClassVar[int]
            RUNTIME_SKILL_FIELD_NUMBER: _ClassVar[int]
            ATTACHMENTS_DIR_FIELD_NUMBER: _ClassVar[int]
            ambient_run_id: str
            runtime_base_prompt: str
            runtime_skill: _skill_pb2.Skill
            attachments_dir: str
            def __init__(self, ambient_run_id: _Optional[str] = ..., runtime_base_prompt: _Optional[str] = ..., runtime_skill: _Optional[_Union[_skill_pb2.Skill, _Mapping]] = ..., attachments_dir: _Optional[str] = ...) -> None: ...
        class InvokeSkill(_message.Message):
            __slots__ = ("skill", "user_query")
            SKILL_FIELD_NUMBER: _ClassVar[int]
            USER_QUERY_FIELD_NUMBER: _ClassVar[int]
            skill: _skill_pb2.Skill
            user_query: Request.Input.UserQuery
            def __init__(self, skill: _Optional[_Union[_skill_pb2.Skill, _Mapping]] = ..., user_query: _Optional[_Union[Request.Input.UserQuery, _Mapping]] = ...) -> None: ...
        CONTEXT_FIELD_NUMBER: _ClassVar[int]
        USER_INPUTS_FIELD_NUMBER: _ClassVar[int]
        QUERY_WITH_CANNED_RESPONSE_FIELD_NUMBER: _ClassVar[int]
        AUTO_CODE_DIFF_QUERY_FIELD_NUMBER: _ClassVar[int]
        RESUME_CONVERSATION_FIELD_NUMBER: _ClassVar[int]
        INIT_PROJECT_RULES_FIELD_NUMBER: _ClassVar[int]
        GENERATE_PASSIVE_SUGGESTIONS_FIELD_NUMBER: _ClassVar[int]
        CREATE_NEW_PROJECT_FIELD_NUMBER: _ClassVar[int]
        CLONE_REPOSITORY_FIELD_NUMBER: _ClassVar[int]
        CODE_REVIEW_FIELD_NUMBER: _ClassVar[int]
        SUMMARIZE_CONVERSATION_FIELD_NUMBER: _ClassVar[int]
        CREATE_ENVIRONMENT_FIELD_NUMBER: _ClassVar[int]
        FETCH_REVIEW_COMMENTS_FIELD_NUMBER: _ClassVar[int]
        START_FROM_AMBIENT_RUN_PROMPT_FIELD_NUMBER: _ClassVar[int]
        INVOKE_SKILL_FIELD_NUMBER: _ClassVar[int]
        USER_QUERY_FIELD_NUMBER: _ClassVar[int]
        TOOL_CALL_RESULT_FIELD_NUMBER: _ClassVar[int]
        context: _input_context_pb2.InputContext
        user_inputs: Request.Input.UserInputs
        query_with_canned_response: Request.Input.QueryWithCannedResponse
        auto_code_diff_query: Request.Input.AutoCodeDiffQuery
        resume_conversation: Request.Input.ResumeConversation
        init_project_rules: Request.Input.InitProjectRules
        generate_passive_suggestions: Request.Input.GeneratePassiveSuggestions
        create_new_project: Request.Input.CreateNewProject
        clone_repository: Request.Input.CloneRepository
        code_review: Request.Input.CodeReview
        summarize_conversation: Request.Input.SummarizeConversation
        create_environment: Request.Input.CreateEnvironment
        fetch_review_comments: Request.Input.FetchReviewComments
        start_from_ambient_run_prompt: Request.Input.StartFromAmbientRunPrompt
        invoke_skill: Request.Input.InvokeSkill
        user_query: Request.Input.UserQuery
        tool_call_result: Request.Input.ToolCallResult
        def __init__(self, context: _Optional[_Union[_input_context_pb2.InputContext, _Mapping]] = ..., user_inputs: _Optional[_Union[Request.Input.UserInputs, _Mapping]] = ..., query_with_canned_response: _Optional[_Union[Request.Input.QueryWithCannedResponse, _Mapping]] = ..., auto_code_diff_query: _Optional[_Union[Request.Input.AutoCodeDiffQuery, _Mapping]] = ..., resume_conversation: _Optional[_Union[Request.Input.ResumeConversation, _Mapping]] = ..., init_project_rules: _Optional[_Union[Request.Input.InitProjectRules, _Mapping]] = ..., generate_passive_suggestions: _Optional[_Union[Request.Input.GeneratePassiveSuggestions, _Mapping]] = ..., create_new_project: _Optional[_Union[Request.Input.CreateNewProject, _Mapping]] = ..., clone_repository: _Optional[_Union[Request.Input.CloneRepository, _Mapping]] = ..., code_review: _Optional[_Union[Request.Input.CodeReview, _Mapping]] = ..., summarize_conversation: _Optional[_Union[Request.Input.SummarizeConversation, _Mapping]] = ..., create_environment: _Optional[_Union[Request.Input.CreateEnvironment, _Mapping]] = ..., fetch_review_comments: _Optional[_Union[Request.Input.FetchReviewComments, _Mapping]] = ..., start_from_ambient_run_prompt: _Optional[_Union[Request.Input.StartFromAmbientRunPrompt, _Mapping]] = ..., invoke_skill: _Optional[_Union[Request.Input.InvokeSkill, _Mapping]] = ..., user_query: _Optional[_Union[Request.Input.UserQuery, _Mapping]] = ..., tool_call_result: _Optional[_Union[Request.Input.ToolCallResult, _Mapping]] = ...) -> None: ...
    class Metadata(_message.Message):
        __slots__ = ("conversation_id", "logging", "ambient_agent_task_id", "forked_from_conversation_id", "parent_agent_id", "agent_name")
        class LoggingEntry(_message.Message):
            __slots__ = ("key", "value")
            KEY_FIELD_NUMBER: _ClassVar[int]
            VALUE_FIELD_NUMBER: _ClassVar[int]
            key: str
            value: _struct_pb2.Value
            def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_struct_pb2.Value, _Mapping]] = ...) -> None: ...
        CONVERSATION_ID_FIELD_NUMBER: _ClassVar[int]
        LOGGING_FIELD_NUMBER: _ClassVar[int]
        AMBIENT_AGENT_TASK_ID_FIELD_NUMBER: _ClassVar[int]
        FORKED_FROM_CONVERSATION_ID_FIELD_NUMBER: _ClassVar[int]
        PARENT_AGENT_ID_FIELD_NUMBER: _ClassVar[int]
        AGENT_NAME_FIELD_NUMBER: _ClassVar[int]
        conversation_id: str
        logging: _containers.MessageMap[str, _struct_pb2.Value]
        ambient_agent_task_id: str
        forked_from_conversation_id: str
        parent_agent_id: str
        agent_name: str
        def __init__(self, conversation_id: _Optional[str] = ..., logging: _Optional[_Mapping[str, _struct_pb2.Value]] = ..., ambient_agent_task_id: _Optional[str] = ..., forked_from_conversation_id: _Optional[str] = ..., parent_agent_id: _Optional[str] = ..., agent_name: _Optional[str] = ...) -> None: ...
    class Settings(_message.Message):
        __slots__ = ("model_config", "rules_enabled", "web_context_retrieval_enabled", "supports_parallel_tool_calls", "use_anthropic_text_editor_tools", "planning_enabled", "warp_drive_context_enabled", "supports_create_files", "supported_tools", "supports_long_running_commands", "should_preserve_file_content_in_history", "supports_todos_ui", "supports_linked_code_blocks", "supports_started_child_task_message", "supports_suggest_prompt", "supports_read_image_files", "supports_reasoning_message", "api_keys", "autonomy_level", "isolation_level", "web_search_enabled", "supported_cli_agent_tools", "supports_v4a_file_diffs", "supports_summarization_via_message_replacement", "supports_bundled_skills")
        class ModelConfig(_message.Message):
            __slots__ = ("base", "planning", "coding", "cli_agent", "computer_use_agent")
            BASE_FIELD_NUMBER: _ClassVar[int]
            PLANNING_FIELD_NUMBER: _ClassVar[int]
            CODING_FIELD_NUMBER: _ClassVar[int]
            CLI_AGENT_FIELD_NUMBER: _ClassVar[int]
            COMPUTER_USE_AGENT_FIELD_NUMBER: _ClassVar[int]
            base: str
            planning: str
            coding: str
            cli_agent: str
            computer_use_agent: str
            def __init__(self, base: _Optional[str] = ..., planning: _Optional[str] = ..., coding: _Optional[str] = ..., cli_agent: _Optional[str] = ..., computer_use_agent: _Optional[str] = ...) -> None: ...
        class ApiKeys(_message.Message):
            __slots__ = ("anthropic", "openai", "google", "open_router", "allow_use_of_warp_credits", "aws_credentials")
            class AWSCredentials(_message.Message):
                __slots__ = ("access_key", "secret_key", "session_token", "region")
                ACCESS_KEY_FIELD_NUMBER: _ClassVar[int]
                SECRET_KEY_FIELD_NUMBER: _ClassVar[int]
                SESSION_TOKEN_FIELD_NUMBER: _ClassVar[int]
                REGION_FIELD_NUMBER: _ClassVar[int]
                access_key: str
                secret_key: str
                session_token: str
                region: str
                def __init__(self, access_key: _Optional[str] = ..., secret_key: _Optional[str] = ..., session_token: _Optional[str] = ..., region: _Optional[str] = ...) -> None: ...
            ANTHROPIC_FIELD_NUMBER: _ClassVar[int]
            OPENAI_FIELD_NUMBER: _ClassVar[int]
            GOOGLE_FIELD_NUMBER: _ClassVar[int]
            OPEN_ROUTER_FIELD_NUMBER: _ClassVar[int]
            ALLOW_USE_OF_WARP_CREDITS_FIELD_NUMBER: _ClassVar[int]
            AWS_CREDENTIALS_FIELD_NUMBER: _ClassVar[int]
            anthropic: str
            openai: str
            google: str
            open_router: str
            allow_use_of_warp_credits: bool
            aws_credentials: Request.Settings.ApiKeys.AWSCredentials
            def __init__(self, anthropic: _Optional[str] = ..., openai: _Optional[str] = ..., google: _Optional[str] = ..., open_router: _Optional[str] = ..., allow_use_of_warp_credits: _Optional[bool] = ..., aws_credentials: _Optional[_Union[Request.Settings.ApiKeys.AWSCredentials, _Mapping]] = ...) -> None: ...
        MODEL_CONFIG_FIELD_NUMBER: _ClassVar[int]
        RULES_ENABLED_FIELD_NUMBER: _ClassVar[int]
        WEB_CONTEXT_RETRIEVAL_ENABLED_FIELD_NUMBER: _ClassVar[int]
        SUPPORTS_PARALLEL_TOOL_CALLS_FIELD_NUMBER: _ClassVar[int]
        USE_ANTHROPIC_TEXT_EDITOR_TOOLS_FIELD_NUMBER: _ClassVar[int]
        PLANNING_ENABLED_FIELD_NUMBER: _ClassVar[int]
        WARP_DRIVE_CONTEXT_ENABLED_FIELD_NUMBER: _ClassVar[int]
        SUPPORTS_CREATE_FILES_FIELD_NUMBER: _ClassVar[int]
        SUPPORTED_TOOLS_FIELD_NUMBER: _ClassVar[int]
        SUPPORTS_LONG_RUNNING_COMMANDS_FIELD_NUMBER: _ClassVar[int]
        SHOULD_PRESERVE_FILE_CONTENT_IN_HISTORY_FIELD_NUMBER: _ClassVar[int]
        SUPPORTS_TODOS_UI_FIELD_NUMBER: _ClassVar[int]
        SUPPORTS_LINKED_CODE_BLOCKS_FIELD_NUMBER: _ClassVar[int]
        SUPPORTS_STARTED_CHILD_TASK_MESSAGE_FIELD_NUMBER: _ClassVar[int]
        SUPPORTS_SUGGEST_PROMPT_FIELD_NUMBER: _ClassVar[int]
        SUPPORTS_READ_IMAGE_FILES_FIELD_NUMBER: _ClassVar[int]
        SUPPORTS_REASONING_MESSAGE_FIELD_NUMBER: _ClassVar[int]
        API_KEYS_FIELD_NUMBER: _ClassVar[int]
        AUTONOMY_LEVEL_FIELD_NUMBER: _ClassVar[int]
        ISOLATION_LEVEL_FIELD_NUMBER: _ClassVar[int]
        WEB_SEARCH_ENABLED_FIELD_NUMBER: _ClassVar[int]
        SUPPORTED_CLI_AGENT_TOOLS_FIELD_NUMBER: _ClassVar[int]
        SUPPORTS_V4A_FILE_DIFFS_FIELD_NUMBER: _ClassVar[int]
        SUPPORTS_SUMMARIZATION_VIA_MESSAGE_REPLACEMENT_FIELD_NUMBER: _ClassVar[int]
        SUPPORTS_BUNDLED_SKILLS_FIELD_NUMBER: _ClassVar[int]
        model_config: Request.Settings.ModelConfig
        rules_enabled: bool
        web_context_retrieval_enabled: bool
        supports_parallel_tool_calls: bool
        use_anthropic_text_editor_tools: bool
        planning_enabled: bool
        warp_drive_context_enabled: bool
        supports_create_files: bool
        supported_tools: _containers.RepeatedScalarFieldContainer[_task_pb2.ToolType]
        supports_long_running_commands: bool
        should_preserve_file_content_in_history: bool
        supports_todos_ui: bool
        supports_linked_code_blocks: bool
        supports_started_child_task_message: bool
        supports_suggest_prompt: bool
        supports_read_image_files: bool
        supports_reasoning_message: bool
        api_keys: Request.Settings.ApiKeys
        autonomy_level: AutonomyLevel
        isolation_level: IsolationLevel
        web_search_enabled: bool
        supported_cli_agent_tools: _containers.RepeatedScalarFieldContainer[_task_pb2.ToolType]
        supports_v4a_file_diffs: bool
        supports_summarization_via_message_replacement: bool
        supports_bundled_skills: bool
        def __init__(self, model_config: _Optional[_Union[Request.Settings.ModelConfig, _Mapping]] = ..., rules_enabled: _Optional[bool] = ..., web_context_retrieval_enabled: _Optional[bool] = ..., supports_parallel_tool_calls: _Optional[bool] = ..., use_anthropic_text_editor_tools: _Optional[bool] = ..., planning_enabled: _Optional[bool] = ..., warp_drive_context_enabled: _Optional[bool] = ..., supports_create_files: _Optional[bool] = ..., supported_tools: _Optional[_Iterable[_Union[_task_pb2.ToolType, str]]] = ..., supports_long_running_commands: _Optional[bool] = ..., should_preserve_file_content_in_history: _Optional[bool] = ..., supports_todos_ui: _Optional[bool] = ..., supports_linked_code_blocks: _Optional[bool] = ..., supports_started_child_task_message: _Optional[bool] = ..., supports_suggest_prompt: _Optional[bool] = ..., supports_read_image_files: _Optional[bool] = ..., supports_reasoning_message: _Optional[bool] = ..., api_keys: _Optional[_Union[Request.Settings.ApiKeys, _Mapping]] = ..., autonomy_level: _Optional[_Union[AutonomyLevel, str]] = ..., isolation_level: _Optional[_Union[IsolationLevel, str]] = ..., web_search_enabled: _Optional[bool] = ..., supported_cli_agent_tools: _Optional[_Iterable[_Union[_task_pb2.ToolType, str]]] = ..., supports_v4a_file_diffs: _Optional[bool] = ..., supports_summarization_via_message_replacement: _Optional[bool] = ..., supports_bundled_skills: _Optional[bool] = ...) -> None: ...
    class MCPContext(_message.Message):
        __slots__ = ("resources", "tools", "servers")
        class MCPResource(_message.Message):
            __slots__ = ("uri", "name", "description", "mime_type")
            URI_FIELD_NUMBER: _ClassVar[int]
            NAME_FIELD_NUMBER: _ClassVar[int]
            DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
            MIME_TYPE_FIELD_NUMBER: _ClassVar[int]
            uri: str
            name: str
            description: str
            mime_type: str
            def __init__(self, uri: _Optional[str] = ..., name: _Optional[str] = ..., description: _Optional[str] = ..., mime_type: _Optional[str] = ...) -> None: ...
        class MCPTool(_message.Message):
            __slots__ = ("name", "description", "input_schema")
            NAME_FIELD_NUMBER: _ClassVar[int]
            DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
            INPUT_SCHEMA_FIELD_NUMBER: _ClassVar[int]
            name: str
            description: str
            input_schema: _struct_pb2.Struct
            def __init__(self, name: _Optional[str] = ..., description: _Optional[str] = ..., input_schema: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ...) -> None: ...
        class MCPServer(_message.Message):
            __slots__ = ("name", "description", "id", "resources", "tools")
            NAME_FIELD_NUMBER: _ClassVar[int]
            DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
            ID_FIELD_NUMBER: _ClassVar[int]
            RESOURCES_FIELD_NUMBER: _ClassVar[int]
            TOOLS_FIELD_NUMBER: _ClassVar[int]
            name: str
            description: str
            id: str
            resources: _containers.RepeatedCompositeFieldContainer[Request.MCPContext.MCPResource]
            tools: _containers.RepeatedCompositeFieldContainer[Request.MCPContext.MCPTool]
            def __init__(self, name: _Optional[str] = ..., description: _Optional[str] = ..., id: _Optional[str] = ..., resources: _Optional[_Iterable[_Union[Request.MCPContext.MCPResource, _Mapping]]] = ..., tools: _Optional[_Iterable[_Union[Request.MCPContext.MCPTool, _Mapping]]] = ...) -> None: ...
        RESOURCES_FIELD_NUMBER: _ClassVar[int]
        TOOLS_FIELD_NUMBER: _ClassVar[int]
        SERVERS_FIELD_NUMBER: _ClassVar[int]
        resources: _containers.RepeatedCompositeFieldContainer[Request.MCPContext.MCPResource]
        tools: _containers.RepeatedCompositeFieldContainer[Request.MCPContext.MCPTool]
        servers: _containers.RepeatedCompositeFieldContainer[Request.MCPContext.MCPServer]
        def __init__(self, resources: _Optional[_Iterable[_Union[Request.MCPContext.MCPResource, _Mapping]]] = ..., tools: _Optional[_Iterable[_Union[Request.MCPContext.MCPTool, _Mapping]]] = ..., servers: _Optional[_Iterable[_Union[Request.MCPContext.MCPServer, _Mapping]]] = ...) -> None: ...
    TASK_CONTEXT_FIELD_NUMBER: _ClassVar[int]
    INPUT_FIELD_NUMBER: _ClassVar[int]
    SETTINGS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    EXISTING_SUGGESTIONS_FIELD_NUMBER: _ClassVar[int]
    MCP_CONTEXT_FIELD_NUMBER: _ClassVar[int]
    task_context: Request.TaskContext
    input: Request.Input
    settings: Request.Settings
    metadata: Request.Metadata
    existing_suggestions: _suggestions_pb2.Suggestions
    mcp_context: Request.MCPContext
    def __init__(self, task_context: _Optional[_Union[Request.TaskContext, _Mapping]] = ..., input: _Optional[_Union[Request.Input, _Mapping]] = ..., settings: _Optional[_Union[Request.Settings, _Mapping]] = ..., metadata: _Optional[_Union[Request.Metadata, _Mapping]] = ..., existing_suggestions: _Optional[_Union[_suggestions_pb2.Suggestions, _Mapping]] = ..., mcp_context: _Optional[_Union[Request.MCPContext, _Mapping]] = ...) -> None: ...
