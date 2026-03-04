import datetime

from google.protobuf import empty_pb2 as _empty_pb2
from google.protobuf import descriptor_pb2 as _descriptor_pb2
from google.protobuf import struct_pb2 as _struct_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import duration_pb2 as _duration_pb2
from . import citations_pb2 as _citations_pb2
from . import input_context_pb2 as _input_context_pb2
from . import attachment_pb2 as _attachment_pb2
from . import file_content_pb2 as _file_content_pb2
from . import document_content_pb2 as _document_content_pb2
from . import options_pb2 as _options_pb2
from . import todo_pb2 as _todo_pb2
from . import skill_pb2 as _skill_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ToolType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    RUN_SHELL_COMMAND: _ClassVar[ToolType]
    SEARCH_CODEBASE: _ClassVar[ToolType]
    READ_FILES: _ClassVar[ToolType]
    APPLY_FILE_DIFFS: _ClassVar[ToolType]
    SUGGEST_PLAN: _ClassVar[ToolType]
    SUGGEST_CREATE_PLAN: _ClassVar[ToolType]
    GREP: _ClassVar[ToolType]
    FILE_GLOB: _ClassVar[ToolType]
    READ_MCP_RESOURCE: _ClassVar[ToolType]
    CALL_MCP_TOOL: _ClassVar[ToolType]
    WRITE_TO_LONG_RUNNING_SHELL_COMMAND: _ClassVar[ToolType]
    SUGGEST_NEW_CONVERSATION: _ClassVar[ToolType]
    FILE_GLOB_V2: _ClassVar[ToolType]
    SUGGEST_PROMPT: _ClassVar[ToolType]
    OPEN_CODE_REVIEW: _ClassVar[ToolType]
    INIT_PROJECT: _ClassVar[ToolType]
    SUBAGENT: _ClassVar[ToolType]
    READ_DOCUMENTS: _ClassVar[ToolType]
    EDIT_DOCUMENTS: _ClassVar[ToolType]
    CREATE_DOCUMENTS: _ClassVar[ToolType]
    READ_SHELL_COMMAND_OUTPUT: _ClassVar[ToolType]
    USE_COMPUTER: _ClassVar[ToolType]
    INSERT_REVIEW_COMMENTS: _ClassVar[ToolType]
    READ_SKILL: _ClassVar[ToolType]
    REQUEST_COMPUTER_USE: _ClassVar[ToolType]
    FETCH_CONVERSATION: _ClassVar[ToolType]
    START_AGENT: _ClassVar[ToolType]
    SEND_MESSAGE_TO_AGENT: _ClassVar[ToolType]
    TRANSFER_SHELL_COMMAND_CONTROL_TO_USER: _ClassVar[ToolType]

class AgentType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    AGENT_TYPE_UNKNOWN: _ClassVar[AgentType]
    AGENT_TYPE_PRIMARY: _ClassVar[AgentType]
    AGENT_TYPE_CLI: _ClassVar[AgentType]

class RiskCategory(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    RISK_CATEGORY_UNSPECIFIED: _ClassVar[RiskCategory]
    RISK_CATEGORY_READ_ONLY: _ClassVar[RiskCategory]
    RISK_CATEGORY_TRIVIAL_LOCAL_CHANGE: _ClassVar[RiskCategory]
    RISK_CATEGORY_NONTRIVIAL_LOCAL_CHANGE: _ClassVar[RiskCategory]
    RISK_CATEGORY_EXTERNAL_CHANGE: _ClassVar[RiskCategory]
    RISK_CATEGORY_RISKY: _ClassVar[RiskCategory]
RUN_SHELL_COMMAND: ToolType
SEARCH_CODEBASE: ToolType
READ_FILES: ToolType
APPLY_FILE_DIFFS: ToolType
SUGGEST_PLAN: ToolType
SUGGEST_CREATE_PLAN: ToolType
GREP: ToolType
FILE_GLOB: ToolType
READ_MCP_RESOURCE: ToolType
CALL_MCP_TOOL: ToolType
WRITE_TO_LONG_RUNNING_SHELL_COMMAND: ToolType
SUGGEST_NEW_CONVERSATION: ToolType
FILE_GLOB_V2: ToolType
SUGGEST_PROMPT: ToolType
OPEN_CODE_REVIEW: ToolType
INIT_PROJECT: ToolType
SUBAGENT: ToolType
READ_DOCUMENTS: ToolType
EDIT_DOCUMENTS: ToolType
CREATE_DOCUMENTS: ToolType
READ_SHELL_COMMAND_OUTPUT: ToolType
USE_COMPUTER: ToolType
INSERT_REVIEW_COMMENTS: ToolType
READ_SKILL: ToolType
REQUEST_COMPUTER_USE: ToolType
FETCH_CONVERSATION: ToolType
START_AGENT: ToolType
SEND_MESSAGE_TO_AGENT: ToolType
TRANSFER_SHELL_COMMAND_CONTROL_TO_USER: ToolType
AGENT_TYPE_UNKNOWN: AgentType
AGENT_TYPE_PRIMARY: AgentType
AGENT_TYPE_CLI: AgentType
RISK_CATEGORY_UNSPECIFIED: RiskCategory
RISK_CATEGORY_READ_ONLY: RiskCategory
RISK_CATEGORY_TRIVIAL_LOCAL_CHANGE: RiskCategory
RISK_CATEGORY_NONTRIVIAL_LOCAL_CHANGE: RiskCategory
RISK_CATEGORY_EXTERNAL_CHANGE: RiskCategory
RISK_CATEGORY_RISKY: RiskCategory

class Task(_message.Message):
    __slots__ = ("id", "description", "dependencies", "messages", "summary", "server_data")
    class Dependencies(_message.Message):
        __slots__ = ("parent_task_id",)
        PARENT_TASK_ID_FIELD_NUMBER: _ClassVar[int]
        parent_task_id: str
        def __init__(self, parent_task_id: _Optional[str] = ...) -> None: ...
    ID_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    DEPENDENCIES_FIELD_NUMBER: _ClassVar[int]
    MESSAGES_FIELD_NUMBER: _ClassVar[int]
    SUMMARY_FIELD_NUMBER: _ClassVar[int]
    SERVER_DATA_FIELD_NUMBER: _ClassVar[int]
    id: str
    description: str
    dependencies: Task.Dependencies
    messages: _containers.RepeatedCompositeFieldContainer[Message]
    summary: str
    server_data: str
    def __init__(self, id: _Optional[str] = ..., description: _Optional[str] = ..., dependencies: _Optional[_Union[Task.Dependencies, _Mapping]] = ..., messages: _Optional[_Iterable[_Union[Message, _Mapping]]] = ..., summary: _Optional[str] = ..., server_data: _Optional[str] = ...) -> None: ...

class ReviewComments(_message.Message):
    __slots__ = ("pending_comments", "completed_comments", "diff_set")
    PENDING_COMMENTS_FIELD_NUMBER: _ClassVar[int]
    COMPLETED_COMMENTS_FIELD_NUMBER: _ClassVar[int]
    DIFF_SET_FIELD_NUMBER: _ClassVar[int]
    pending_comments: _containers.RepeatedCompositeFieldContainer[ReviewComment]
    completed_comments: _containers.RepeatedCompositeFieldContainer[ReviewComment]
    diff_set: _attachment_pb2.DiffSet
    def __init__(self, pending_comments: _Optional[_Iterable[_Union[ReviewComment, _Mapping]]] = ..., completed_comments: _Optional[_Iterable[_Union[ReviewComment, _Mapping]]] = ..., diff_set: _Optional[_Union[_attachment_pb2.DiffSet, _Mapping]] = ...) -> None: ...

class ReviewComment(_message.Message):
    __slots__ = ("id", "comment", "commented_line", "commented_file", "commented_diffset")
    class CommentedFile(_message.Message):
        __slots__ = ("file_path", "current", "base")
        FILE_PATH_FIELD_NUMBER: _ClassVar[int]
        CURRENT_FIELD_NUMBER: _ClassVar[int]
        BASE_FIELD_NUMBER: _ClassVar[int]
        file_path: str
        current: _attachment_pb2.CurrentRef
        base: _attachment_pb2.BaseRef
        def __init__(self, file_path: _Optional[str] = ..., current: _Optional[_Union[_attachment_pb2.CurrentRef, _Mapping]] = ..., base: _Optional[_Union[_attachment_pb2.BaseRef, _Mapping]] = ...) -> None: ...
    class CommentedDiffset(_message.Message):
        __slots__ = ("current", "base")
        CURRENT_FIELD_NUMBER: _ClassVar[int]
        BASE_FIELD_NUMBER: _ClassVar[int]
        current: _attachment_pb2.CurrentRef
        base: _attachment_pb2.BaseRef
        def __init__(self, current: _Optional[_Union[_attachment_pb2.CurrentRef, _Mapping]] = ..., base: _Optional[_Union[_attachment_pb2.BaseRef, _Mapping]] = ...) -> None: ...
    ID_FIELD_NUMBER: _ClassVar[int]
    COMMENT_FIELD_NUMBER: _ClassVar[int]
    COMMENTED_LINE_FIELD_NUMBER: _ClassVar[int]
    COMMENTED_FILE_FIELD_NUMBER: _ClassVar[int]
    COMMENTED_DIFFSET_FIELD_NUMBER: _ClassVar[int]
    id: str
    comment: str
    commented_line: _attachment_pb2.DiffHunk
    commented_file: ReviewComment.CommentedFile
    commented_diffset: ReviewComment.CommentedDiffset
    def __init__(self, id: _Optional[str] = ..., comment: _Optional[str] = ..., commented_line: _Optional[_Union[_attachment_pb2.DiffHunk, _Mapping]] = ..., commented_file: _Optional[_Union[ReviewComment.CommentedFile, _Mapping]] = ..., commented_diffset: _Optional[_Union[ReviewComment.CommentedDiffset, _Mapping]] = ...) -> None: ...

class Message(_message.Message):
    __slots__ = ("id", "task_id", "request_id", "timestamp", "server_message_data", "citations", "user_query", "agent_output", "tool_call", "tool_call_result", "server_event", "system_query", "update_todos", "agent_reasoning", "summarization", "code_review", "update_review_comments", "web_search", "web_fetch", "debug_output", "artifact_event", "invoke_skill", "messages_received_from_agents", "model_fallback")
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
        messages: _containers.RepeatedCompositeFieldContainer[Message.MessagesReceivedFromAgents.ReceivedMessage]
        def __init__(self, messages: _Optional[_Iterable[_Union[Message.MessagesReceivedFromAgents.ReceivedMessage, _Mapping]]] = ...) -> None: ...
    class UserQuery(_message.Message):
        __slots__ = ("query", "context", "referenced_attachments", "mode", "intended_agent")
        class ReferencedAttachmentsEntry(_message.Message):
            __slots__ = ("key", "value")
            KEY_FIELD_NUMBER: _ClassVar[int]
            VALUE_FIELD_NUMBER: _ClassVar[int]
            key: str
            value: _attachment_pb2.Attachment
            def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_attachment_pb2.Attachment, _Mapping]] = ...) -> None: ...
        QUERY_FIELD_NUMBER: _ClassVar[int]
        CONTEXT_FIELD_NUMBER: _ClassVar[int]
        REFERENCED_ATTACHMENTS_FIELD_NUMBER: _ClassVar[int]
        MODE_FIELD_NUMBER: _ClassVar[int]
        INTENDED_AGENT_FIELD_NUMBER: _ClassVar[int]
        query: str
        context: _input_context_pb2.InputContext
        referenced_attachments: _containers.MessageMap[str, _attachment_pb2.Attachment]
        mode: UserQueryMode
        intended_agent: AgentType
        def __init__(self, query: _Optional[str] = ..., context: _Optional[_Union[_input_context_pb2.InputContext, _Mapping]] = ..., referenced_attachments: _Optional[_Mapping[str, _attachment_pb2.Attachment]] = ..., mode: _Optional[_Union[UserQueryMode, _Mapping]] = ..., intended_agent: _Optional[_Union[AgentType, str]] = ...) -> None: ...
    class SystemQuery(_message.Message):
        __slots__ = ("auto_code_diff", "resume_conversation", "generate_passive_suggestions", "create_new_project", "clone_repository", "summarize_conversation", "fetch_review_comments", "context")
        AUTO_CODE_DIFF_FIELD_NUMBER: _ClassVar[int]
        RESUME_CONVERSATION_FIELD_NUMBER: _ClassVar[int]
        GENERATE_PASSIVE_SUGGESTIONS_FIELD_NUMBER: _ClassVar[int]
        CREATE_NEW_PROJECT_FIELD_NUMBER: _ClassVar[int]
        CLONE_REPOSITORY_FIELD_NUMBER: _ClassVar[int]
        SUMMARIZE_CONVERSATION_FIELD_NUMBER: _ClassVar[int]
        FETCH_REVIEW_COMMENTS_FIELD_NUMBER: _ClassVar[int]
        CONTEXT_FIELD_NUMBER: _ClassVar[int]
        auto_code_diff: Message.AutoCodeDiff
        resume_conversation: Message.ResumeConversation
        generate_passive_suggestions: Message.GeneratePassiveSuggestions
        create_new_project: Message.CreateNewProject
        clone_repository: Message.CloneRepository
        summarize_conversation: Message.SummarizeConversation
        fetch_review_comments: Message.FetchReviewComments
        context: _input_context_pb2.InputContext
        def __init__(self, auto_code_diff: _Optional[_Union[Message.AutoCodeDiff, _Mapping]] = ..., resume_conversation: _Optional[_Union[Message.ResumeConversation, _Mapping]] = ..., generate_passive_suggestions: _Optional[_Union[Message.GeneratePassiveSuggestions, _Mapping]] = ..., create_new_project: _Optional[_Union[Message.CreateNewProject, _Mapping]] = ..., clone_repository: _Optional[_Union[Message.CloneRepository, _Mapping]] = ..., summarize_conversation: _Optional[_Union[Message.SummarizeConversation, _Mapping]] = ..., fetch_review_comments: _Optional[_Union[Message.FetchReviewComments, _Mapping]] = ..., context: _Optional[_Union[_input_context_pb2.InputContext, _Mapping]] = ...) -> None: ...
    class AutoCodeDiff(_message.Message):
        __slots__ = ("query",)
        QUERY_FIELD_NUMBER: _ClassVar[int]
        query: str
        def __init__(self, query: _Optional[str] = ...) -> None: ...
    class ResumeConversation(_message.Message):
        __slots__ = ()
        def __init__(self) -> None: ...
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
        shell_command_completed: Message.GeneratePassiveSuggestions.ShellCommandCompleted
        agent_response_completed: Message.GeneratePassiveSuggestions.AgentResponseCompleted
        def __init__(self, attachments: _Optional[_Iterable[_Union[_attachment_pb2.Attachment, _Mapping]]] = ..., files_changed: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ..., command_run: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ..., shell_command_completed: _Optional[_Union[Message.GeneratePassiveSuggestions.ShellCommandCompleted, _Mapping]] = ..., agent_response_completed: _Optional[_Union[Message.GeneratePassiveSuggestions.AgentResponseCompleted, _Mapping]] = ...) -> None: ...
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
    class SummarizeConversation(_message.Message):
        __slots__ = ("prompt",)
        PROMPT_FIELD_NUMBER: _ClassVar[int]
        prompt: str
        def __init__(self, prompt: _Optional[str] = ...) -> None: ...
    class AgentOutput(_message.Message):
        __slots__ = ("text",)
        TEXT_FIELD_NUMBER: _ClassVar[int]
        text: str
        def __init__(self, text: _Optional[str] = ...) -> None: ...
    class AgentReasoning(_message.Message):
        __slots__ = ("reasoning", "finished_duration")
        REASONING_FIELD_NUMBER: _ClassVar[int]
        FINISHED_DURATION_FIELD_NUMBER: _ClassVar[int]
        reasoning: str
        finished_duration: _duration_pb2.Duration
        def __init__(self, reasoning: _Optional[str] = ..., finished_duration: _Optional[_Union[datetime.timedelta, _duration_pb2.Duration, _Mapping]] = ...) -> None: ...
    class Summarization(_message.Message):
        __slots__ = ("finished_duration", "conversation_summary", "tool_call_result_summary")
        class ConversationSummary(_message.Message):
            __slots__ = ("summary", "token_count")
            SUMMARY_FIELD_NUMBER: _ClassVar[int]
            TOKEN_COUNT_FIELD_NUMBER: _ClassVar[int]
            summary: str
            token_count: int
            def __init__(self, summary: _Optional[str] = ..., token_count: _Optional[int] = ...) -> None: ...
        class ToolCallResultSummary(_message.Message):
            __slots__ = ()
            def __init__(self) -> None: ...
        FINISHED_DURATION_FIELD_NUMBER: _ClassVar[int]
        CONVERSATION_SUMMARY_FIELD_NUMBER: _ClassVar[int]
        TOOL_CALL_RESULT_SUMMARY_FIELD_NUMBER: _ClassVar[int]
        finished_duration: _duration_pb2.Duration
        conversation_summary: Message.Summarization.ConversationSummary
        tool_call_result_summary: Message.Summarization.ToolCallResultSummary
        def __init__(self, finished_duration: _Optional[_Union[datetime.timedelta, _duration_pb2.Duration, _Mapping]] = ..., conversation_summary: _Optional[_Union[Message.Summarization.ConversationSummary, _Mapping]] = ..., tool_call_result_summary: _Optional[_Union[Message.Summarization.ToolCallResultSummary, _Mapping]] = ...) -> None: ...
    class CodeReview(_message.Message):
        __slots__ = ("comments",)
        COMMENTS_FIELD_NUMBER: _ClassVar[int]
        comments: ReviewComments
        def __init__(self, comments: _Optional[_Union[ReviewComments, _Mapping]] = ...) -> None: ...
    class FetchReviewComments(_message.Message):
        __slots__ = ("repo_path",)
        REPO_PATH_FIELD_NUMBER: _ClassVar[int]
        repo_path: str
        def __init__(self, repo_path: _Optional[str] = ...) -> None: ...
    class ToolCall(_message.Message):
        __slots__ = ("tool_call_id", "run_shell_command", "search_codebase", "server", "read_files", "apply_file_diffs", "suggest_plan", "suggest_create_plan", "grep", "file_glob", "read_mcp_resource", "call_mcp_tool", "write_to_long_running_shell_command", "suggest_new_conversation", "file_glob_v2", "suggest_prompt", "open_code_review", "init_project", "subagent", "read_documents", "edit_documents", "create_documents", "read_shell_command_output", "use_computer", "insert_review_comments", "read_skill", "request_computer_use", "fetch_conversation", "start_agent", "send_message_to_agent", "transfer_shell_command_control_to_user")
        class FetchConversation(_message.Message):
            __slots__ = ("conversation_id",)
            CONVERSATION_ID_FIELD_NUMBER: _ClassVar[int]
            conversation_id: str
            def __init__(self, conversation_id: _Optional[str] = ...) -> None: ...
        class Server(_message.Message):
            __slots__ = ("payload",)
            PAYLOAD_FIELD_NUMBER: _ClassVar[int]
            payload: str
            def __init__(self, payload: _Optional[str] = ...) -> None: ...
        class RunShellCommand(_message.Message):
            __slots__ = ("command", "is_read_only", "uses_pager", "citations", "is_risky", "wait_until_complete", "risk_category")
            COMMAND_FIELD_NUMBER: _ClassVar[int]
            IS_READ_ONLY_FIELD_NUMBER: _ClassVar[int]
            USES_PAGER_FIELD_NUMBER: _ClassVar[int]
            CITATIONS_FIELD_NUMBER: _ClassVar[int]
            IS_RISKY_FIELD_NUMBER: _ClassVar[int]
            WAIT_UNTIL_COMPLETE_FIELD_NUMBER: _ClassVar[int]
            RISK_CATEGORY_FIELD_NUMBER: _ClassVar[int]
            command: str
            is_read_only: bool
            uses_pager: bool
            citations: _containers.RepeatedCompositeFieldContainer[_citations_pb2.Citation]
            is_risky: bool
            wait_until_complete: bool
            risk_category: RiskCategory
            def __init__(self, command: _Optional[str] = ..., is_read_only: _Optional[bool] = ..., uses_pager: _Optional[bool] = ..., citations: _Optional[_Iterable[_Union[_citations_pb2.Citation, _Mapping]]] = ..., is_risky: _Optional[bool] = ..., wait_until_complete: _Optional[bool] = ..., risk_category: _Optional[_Union[RiskCategory, str]] = ...) -> None: ...
        class WriteToLongRunningShellCommand(_message.Message):
            __slots__ = ("input", "mode", "command_id")
            class Mode(_message.Message):
                __slots__ = ("raw", "line", "block")
                RAW_FIELD_NUMBER: _ClassVar[int]
                LINE_FIELD_NUMBER: _ClassVar[int]
                BLOCK_FIELD_NUMBER: _ClassVar[int]
                raw: _empty_pb2.Empty
                line: _empty_pb2.Empty
                block: _empty_pb2.Empty
                def __init__(self, raw: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ..., line: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ..., block: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ...) -> None: ...
            INPUT_FIELD_NUMBER: _ClassVar[int]
            MODE_FIELD_NUMBER: _ClassVar[int]
            COMMAND_ID_FIELD_NUMBER: _ClassVar[int]
            input: bytes
            mode: Message.ToolCall.WriteToLongRunningShellCommand.Mode
            command_id: str
            def __init__(self, input: _Optional[bytes] = ..., mode: _Optional[_Union[Message.ToolCall.WriteToLongRunningShellCommand.Mode, _Mapping]] = ..., command_id: _Optional[str] = ...) -> None: ...
        class TransferShellCommandControlToUser(_message.Message):
            __slots__ = ("reason",)
            REASON_FIELD_NUMBER: _ClassVar[int]
            reason: str
            def __init__(self, reason: _Optional[str] = ...) -> None: ...
        class SuggestNewConversation(_message.Message):
            __slots__ = ("message_id",)
            MESSAGE_ID_FIELD_NUMBER: _ClassVar[int]
            message_id: str
            def __init__(self, message_id: _Optional[str] = ...) -> None: ...
        class ReadFiles(_message.Message):
            __slots__ = ("files",)
            class File(_message.Message):
                __slots__ = ("name", "line_ranges")
                NAME_FIELD_NUMBER: _ClassVar[int]
                LINE_RANGES_FIELD_NUMBER: _ClassVar[int]
                name: str
                line_ranges: _containers.RepeatedCompositeFieldContainer[_file_content_pb2.FileContentLineRange]
                def __init__(self, name: _Optional[str] = ..., line_ranges: _Optional[_Iterable[_Union[_file_content_pb2.FileContentLineRange, _Mapping]]] = ...) -> None: ...
            FILES_FIELD_NUMBER: _ClassVar[int]
            files: _containers.RepeatedCompositeFieldContainer[Message.ToolCall.ReadFiles.File]
            def __init__(self, files: _Optional[_Iterable[_Union[Message.ToolCall.ReadFiles.File, _Mapping]]] = ...) -> None: ...
        class SearchCodebase(_message.Message):
            __slots__ = ("query", "path_filters", "codebase_path")
            QUERY_FIELD_NUMBER: _ClassVar[int]
            PATH_FILTERS_FIELD_NUMBER: _ClassVar[int]
            CODEBASE_PATH_FIELD_NUMBER: _ClassVar[int]
            query: str
            path_filters: _containers.RepeatedScalarFieldContainer[str]
            codebase_path: str
            def __init__(self, query: _Optional[str] = ..., path_filters: _Optional[_Iterable[str]] = ..., codebase_path: _Optional[str] = ...) -> None: ...
        class ApplyFileDiffs(_message.Message):
            __slots__ = ("summary", "diffs", "new_files", "deleted_files", "v4a_updates")
            class FileDiff(_message.Message):
                __slots__ = ("file_path", "search", "replace")
                FILE_PATH_FIELD_NUMBER: _ClassVar[int]
                SEARCH_FIELD_NUMBER: _ClassVar[int]
                REPLACE_FIELD_NUMBER: _ClassVar[int]
                file_path: str
                search: str
                replace: str
                def __init__(self, file_path: _Optional[str] = ..., search: _Optional[str] = ..., replace: _Optional[str] = ...) -> None: ...
            class V4AFileUpdate(_message.Message):
                __slots__ = ("file_path", "move_to", "hunks")
                class Hunk(_message.Message):
                    __slots__ = ("change_context", "pre_context", "old", "new", "post_context")
                    CHANGE_CONTEXT_FIELD_NUMBER: _ClassVar[int]
                    PRE_CONTEXT_FIELD_NUMBER: _ClassVar[int]
                    OLD_FIELD_NUMBER: _ClassVar[int]
                    NEW_FIELD_NUMBER: _ClassVar[int]
                    POST_CONTEXT_FIELD_NUMBER: _ClassVar[int]
                    change_context: _containers.RepeatedScalarFieldContainer[str]
                    pre_context: str
                    old: str
                    new: str
                    post_context: str
                    def __init__(self, change_context: _Optional[_Iterable[str]] = ..., pre_context: _Optional[str] = ..., old: _Optional[str] = ..., new: _Optional[str] = ..., post_context: _Optional[str] = ...) -> None: ...
                FILE_PATH_FIELD_NUMBER: _ClassVar[int]
                MOVE_TO_FIELD_NUMBER: _ClassVar[int]
                HUNKS_FIELD_NUMBER: _ClassVar[int]
                file_path: str
                move_to: str
                hunks: _containers.RepeatedCompositeFieldContainer[Message.ToolCall.ApplyFileDiffs.V4AFileUpdate.Hunk]
                def __init__(self, file_path: _Optional[str] = ..., move_to: _Optional[str] = ..., hunks: _Optional[_Iterable[_Union[Message.ToolCall.ApplyFileDiffs.V4AFileUpdate.Hunk, _Mapping]]] = ...) -> None: ...
            class NewFile(_message.Message):
                __slots__ = ("file_path", "content")
                FILE_PATH_FIELD_NUMBER: _ClassVar[int]
                CONTENT_FIELD_NUMBER: _ClassVar[int]
                file_path: str
                content: str
                def __init__(self, file_path: _Optional[str] = ..., content: _Optional[str] = ...) -> None: ...
            class DeleteFile(_message.Message):
                __slots__ = ("file_path",)
                FILE_PATH_FIELD_NUMBER: _ClassVar[int]
                file_path: str
                def __init__(self, file_path: _Optional[str] = ...) -> None: ...
            SUMMARY_FIELD_NUMBER: _ClassVar[int]
            DIFFS_FIELD_NUMBER: _ClassVar[int]
            NEW_FILES_FIELD_NUMBER: _ClassVar[int]
            DELETED_FILES_FIELD_NUMBER: _ClassVar[int]
            V4A_UPDATES_FIELD_NUMBER: _ClassVar[int]
            summary: str
            diffs: _containers.RepeatedCompositeFieldContainer[Message.ToolCall.ApplyFileDiffs.FileDiff]
            new_files: _containers.RepeatedCompositeFieldContainer[Message.ToolCall.ApplyFileDiffs.NewFile]
            deleted_files: _containers.RepeatedCompositeFieldContainer[Message.ToolCall.ApplyFileDiffs.DeleteFile]
            v4a_updates: _containers.RepeatedCompositeFieldContainer[Message.ToolCall.ApplyFileDiffs.V4AFileUpdate]
            def __init__(self, summary: _Optional[str] = ..., diffs: _Optional[_Iterable[_Union[Message.ToolCall.ApplyFileDiffs.FileDiff, _Mapping]]] = ..., new_files: _Optional[_Iterable[_Union[Message.ToolCall.ApplyFileDiffs.NewFile, _Mapping]]] = ..., deleted_files: _Optional[_Iterable[_Union[Message.ToolCall.ApplyFileDiffs.DeleteFile, _Mapping]]] = ..., v4a_updates: _Optional[_Iterable[_Union[Message.ToolCall.ApplyFileDiffs.V4AFileUpdate, _Mapping]]] = ...) -> None: ...
        class SuggestPlan(_message.Message):
            __slots__ = ("summary", "proposed_tasks")
            SUMMARY_FIELD_NUMBER: _ClassVar[int]
            PROPOSED_TASKS_FIELD_NUMBER: _ClassVar[int]
            summary: str
            proposed_tasks: _containers.RepeatedCompositeFieldContainer[Task]
            def __init__(self, summary: _Optional[str] = ..., proposed_tasks: _Optional[_Iterable[_Union[Task, _Mapping]]] = ...) -> None: ...
        class SuggestCreatePlan(_message.Message):
            __slots__ = ()
            def __init__(self) -> None: ...
        class Grep(_message.Message):
            __slots__ = ("queries", "path")
            QUERIES_FIELD_NUMBER: _ClassVar[int]
            PATH_FIELD_NUMBER: _ClassVar[int]
            queries: _containers.RepeatedScalarFieldContainer[str]
            path: str
            def __init__(self, queries: _Optional[_Iterable[str]] = ..., path: _Optional[str] = ...) -> None: ...
        class FileGlob(_message.Message):
            __slots__ = ("patterns", "path")
            PATTERNS_FIELD_NUMBER: _ClassVar[int]
            PATH_FIELD_NUMBER: _ClassVar[int]
            patterns: _containers.RepeatedScalarFieldContainer[str]
            path: str
            def __init__(self, patterns: _Optional[_Iterable[str]] = ..., path: _Optional[str] = ...) -> None: ...
        class FileGlobV2(_message.Message):
            __slots__ = ("patterns", "search_dir", "max_matches", "max_depth", "min_depth")
            PATTERNS_FIELD_NUMBER: _ClassVar[int]
            SEARCH_DIR_FIELD_NUMBER: _ClassVar[int]
            MAX_MATCHES_FIELD_NUMBER: _ClassVar[int]
            MAX_DEPTH_FIELD_NUMBER: _ClassVar[int]
            MIN_DEPTH_FIELD_NUMBER: _ClassVar[int]
            patterns: _containers.RepeatedScalarFieldContainer[str]
            search_dir: str
            max_matches: int
            max_depth: int
            min_depth: int
            def __init__(self, patterns: _Optional[_Iterable[str]] = ..., search_dir: _Optional[str] = ..., max_matches: _Optional[int] = ..., max_depth: _Optional[int] = ..., min_depth: _Optional[int] = ...) -> None: ...
        class ReadMCPResource(_message.Message):
            __slots__ = ("uri", "server_id")
            URI_FIELD_NUMBER: _ClassVar[int]
            SERVER_ID_FIELD_NUMBER: _ClassVar[int]
            uri: str
            server_id: str
            def __init__(self, uri: _Optional[str] = ..., server_id: _Optional[str] = ...) -> None: ...
        class CallMCPTool(_message.Message):
            __slots__ = ("name", "args", "server_id")
            NAME_FIELD_NUMBER: _ClassVar[int]
            ARGS_FIELD_NUMBER: _ClassVar[int]
            SERVER_ID_FIELD_NUMBER: _ClassVar[int]
            name: str
            args: _struct_pb2.Struct
            server_id: str
            def __init__(self, name: _Optional[str] = ..., args: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ..., server_id: _Optional[str] = ...) -> None: ...
        class SuggestPrompt(_message.Message):
            __slots__ = ("inline_query_banner", "prompt_chip")
            class InlineQueryBanner(_message.Message):
                __slots__ = ("title", "description", "query")
                TITLE_FIELD_NUMBER: _ClassVar[int]
                DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
                QUERY_FIELD_NUMBER: _ClassVar[int]
                title: str
                description: str
                query: str
                def __init__(self, title: _Optional[str] = ..., description: _Optional[str] = ..., query: _Optional[str] = ...) -> None: ...
            class PromptChip(_message.Message):
                __slots__ = ("prompt", "label")
                PROMPT_FIELD_NUMBER: _ClassVar[int]
                LABEL_FIELD_NUMBER: _ClassVar[int]
                prompt: str
                label: str
                def __init__(self, prompt: _Optional[str] = ..., label: _Optional[str] = ...) -> None: ...
            INLINE_QUERY_BANNER_FIELD_NUMBER: _ClassVar[int]
            PROMPT_CHIP_FIELD_NUMBER: _ClassVar[int]
            inline_query_banner: Message.ToolCall.SuggestPrompt.InlineQueryBanner
            prompt_chip: Message.ToolCall.SuggestPrompt.PromptChip
            def __init__(self, inline_query_banner: _Optional[_Union[Message.ToolCall.SuggestPrompt.InlineQueryBanner, _Mapping]] = ..., prompt_chip: _Optional[_Union[Message.ToolCall.SuggestPrompt.PromptChip, _Mapping]] = ...) -> None: ...
        class OpenCodeReview(_message.Message):
            __slots__ = ()
            def __init__(self) -> None: ...
        class InitProject(_message.Message):
            __slots__ = ()
            def __init__(self) -> None: ...
        class Subagent(_message.Message):
            __slots__ = ("task_id", "payload", "cli", "research", "advice", "computer_use", "summarization", "conversation_search", "warp_documentation_search")
            class CLISubagent(_message.Message):
                __slots__ = ("command_id",)
                COMMAND_ID_FIELD_NUMBER: _ClassVar[int]
                command_id: str
                def __init__(self, command_id: _Optional[str] = ...) -> None: ...
            TASK_ID_FIELD_NUMBER: _ClassVar[int]
            PAYLOAD_FIELD_NUMBER: _ClassVar[int]
            CLI_FIELD_NUMBER: _ClassVar[int]
            RESEARCH_FIELD_NUMBER: _ClassVar[int]
            ADVICE_FIELD_NUMBER: _ClassVar[int]
            COMPUTER_USE_FIELD_NUMBER: _ClassVar[int]
            SUMMARIZATION_FIELD_NUMBER: _ClassVar[int]
            CONVERSATION_SEARCH_FIELD_NUMBER: _ClassVar[int]
            WARP_DOCUMENTATION_SEARCH_FIELD_NUMBER: _ClassVar[int]
            task_id: str
            payload: str
            cli: Message.ToolCall.Subagent.CLISubagent
            research: _empty_pb2.Empty
            advice: _empty_pb2.Empty
            computer_use: _empty_pb2.Empty
            summarization: _empty_pb2.Empty
            conversation_search: _empty_pb2.Empty
            warp_documentation_search: _empty_pb2.Empty
            def __init__(self, task_id: _Optional[str] = ..., payload: _Optional[str] = ..., cli: _Optional[_Union[Message.ToolCall.Subagent.CLISubagent, _Mapping]] = ..., research: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ..., advice: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ..., computer_use: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ..., summarization: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ..., conversation_search: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ..., warp_documentation_search: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ...) -> None: ...
        class ReadDocuments(_message.Message):
            __slots__ = ("documents",)
            class Document(_message.Message):
                __slots__ = ("document_id", "line_ranges")
                DOCUMENT_ID_FIELD_NUMBER: _ClassVar[int]
                LINE_RANGES_FIELD_NUMBER: _ClassVar[int]
                document_id: str
                line_ranges: _containers.RepeatedCompositeFieldContainer[_file_content_pb2.FileContentLineRange]
                def __init__(self, document_id: _Optional[str] = ..., line_ranges: _Optional[_Iterable[_Union[_file_content_pb2.FileContentLineRange, _Mapping]]] = ...) -> None: ...
            DOCUMENTS_FIELD_NUMBER: _ClassVar[int]
            documents: _containers.RepeatedCompositeFieldContainer[Message.ToolCall.ReadDocuments.Document]
            def __init__(self, documents: _Optional[_Iterable[_Union[Message.ToolCall.ReadDocuments.Document, _Mapping]]] = ...) -> None: ...
        class EditDocuments(_message.Message):
            __slots__ = ("diffs",)
            class DocumentDiff(_message.Message):
                __slots__ = ("document_id", "search", "replace")
                DOCUMENT_ID_FIELD_NUMBER: _ClassVar[int]
                SEARCH_FIELD_NUMBER: _ClassVar[int]
                REPLACE_FIELD_NUMBER: _ClassVar[int]
                document_id: str
                search: str
                replace: str
                def __init__(self, document_id: _Optional[str] = ..., search: _Optional[str] = ..., replace: _Optional[str] = ...) -> None: ...
            DIFFS_FIELD_NUMBER: _ClassVar[int]
            diffs: _containers.RepeatedCompositeFieldContainer[Message.ToolCall.EditDocuments.DocumentDiff]
            def __init__(self, diffs: _Optional[_Iterable[_Union[Message.ToolCall.EditDocuments.DocumentDiff, _Mapping]]] = ...) -> None: ...
        class CreateDocuments(_message.Message):
            __slots__ = ("new_documents",)
            class NewDocument(_message.Message):
                __slots__ = ("content", "title")
                CONTENT_FIELD_NUMBER: _ClassVar[int]
                TITLE_FIELD_NUMBER: _ClassVar[int]
                content: str
                title: str
                def __init__(self, content: _Optional[str] = ..., title: _Optional[str] = ...) -> None: ...
            NEW_DOCUMENTS_FIELD_NUMBER: _ClassVar[int]
            new_documents: _containers.RepeatedCompositeFieldContainer[Message.ToolCall.CreateDocuments.NewDocument]
            def __init__(self, new_documents: _Optional[_Iterable[_Union[Message.ToolCall.CreateDocuments.NewDocument, _Mapping]]] = ...) -> None: ...
        class ReadShellCommandOutput(_message.Message):
            __slots__ = ("command_id", "duration", "on_completion")
            COMMAND_ID_FIELD_NUMBER: _ClassVar[int]
            DURATION_FIELD_NUMBER: _ClassVar[int]
            ON_COMPLETION_FIELD_NUMBER: _ClassVar[int]
            command_id: str
            duration: _duration_pb2.Duration
            on_completion: _empty_pb2.Empty
            def __init__(self, command_id: _Optional[str] = ..., duration: _Optional[_Union[datetime.timedelta, _duration_pb2.Duration, _Mapping]] = ..., on_completion: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ...) -> None: ...
        class InsertReviewComments(_message.Message):
            __slots__ = ("repo_path", "comments", "base_branch")
            class CommentSide(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
                __slots__ = ()
                NEW: _ClassVar[Message.ToolCall.InsertReviewComments.CommentSide]
                OLD: _ClassVar[Message.ToolCall.InsertReviewComments.CommentSide]
            NEW: Message.ToolCall.InsertReviewComments.CommentSide
            OLD: Message.ToolCall.InsertReviewComments.CommentSide
            class Comment(_message.Message):
                __slots__ = ("comment_id", "author", "last_modified_timestamp", "comment_body", "parent_comment_id", "location")
                COMMENT_ID_FIELD_NUMBER: _ClassVar[int]
                AUTHOR_FIELD_NUMBER: _ClassVar[int]
                LAST_MODIFIED_TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
                COMMENT_BODY_FIELD_NUMBER: _ClassVar[int]
                PARENT_COMMENT_ID_FIELD_NUMBER: _ClassVar[int]
                LOCATION_FIELD_NUMBER: _ClassVar[int]
                comment_id: str
                author: str
                last_modified_timestamp: str
                comment_body: str
                parent_comment_id: str
                location: Message.ToolCall.InsertReviewComments.CommentLocation
                def __init__(self, comment_id: _Optional[str] = ..., author: _Optional[str] = ..., last_modified_timestamp: _Optional[str] = ..., comment_body: _Optional[str] = ..., parent_comment_id: _Optional[str] = ..., location: _Optional[_Union[Message.ToolCall.InsertReviewComments.CommentLocation, _Mapping]] = ...) -> None: ...
            class CommentLocation(_message.Message):
                __slots__ = ("file_path", "line")
                FILE_PATH_FIELD_NUMBER: _ClassVar[int]
                LINE_FIELD_NUMBER: _ClassVar[int]
                file_path: str
                line: Message.ToolCall.InsertReviewComments.CommentLineRange
                def __init__(self, file_path: _Optional[str] = ..., line: _Optional[_Union[Message.ToolCall.InsertReviewComments.CommentLineRange, _Mapping]] = ...) -> None: ...
            class CommentLineRange(_message.Message):
                __slots__ = ("diff_hunk", "range", "side")
                DIFF_HUNK_FIELD_NUMBER: _ClassVar[int]
                RANGE_FIELD_NUMBER: _ClassVar[int]
                SIDE_FIELD_NUMBER: _ClassVar[int]
                diff_hunk: str
                range: _file_content_pb2.FileContentLineRange
                side: Message.ToolCall.InsertReviewComments.CommentSide
                def __init__(self, diff_hunk: _Optional[str] = ..., range: _Optional[_Union[_file_content_pb2.FileContentLineRange, _Mapping]] = ..., side: _Optional[_Union[Message.ToolCall.InsertReviewComments.CommentSide, str]] = ...) -> None: ...
            REPO_PATH_FIELD_NUMBER: _ClassVar[int]
            COMMENTS_FIELD_NUMBER: _ClassVar[int]
            BASE_BRANCH_FIELD_NUMBER: _ClassVar[int]
            repo_path: str
            comments: _containers.RepeatedCompositeFieldContainer[Message.ToolCall.InsertReviewComments.Comment]
            base_branch: str
            def __init__(self, repo_path: _Optional[str] = ..., comments: _Optional[_Iterable[_Union[Message.ToolCall.InsertReviewComments.Comment, _Mapping]]] = ..., base_branch: _Optional[str] = ...) -> None: ...
        class ReadSkill(_message.Message):
            __slots__ = ("skill_path", "bundled_skill_id", "name")
            SKILL_PATH_FIELD_NUMBER: _ClassVar[int]
            BUNDLED_SKILL_ID_FIELD_NUMBER: _ClassVar[int]
            NAME_FIELD_NUMBER: _ClassVar[int]
            skill_path: str
            bundled_skill_id: str
            name: str
            def __init__(self, skill_path: _Optional[str] = ..., bundled_skill_id: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...
        class UseComputer(_message.Message):
            __slots__ = ("actions", "post_actions_screenshot_params", "action_summary")
            class Action(_message.Message):
                __slots__ = ("mouse_move", "mouse_down", "mouse_up", "mouse_wheel", "wait", "type_text", "key_down", "key_up")
                class MouseButton(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
                    __slots__ = ()
                    LEFT: _ClassVar[Message.ToolCall.UseComputer.Action.MouseButton]
                    RIGHT: _ClassVar[Message.ToolCall.UseComputer.Action.MouseButton]
                    MIDDLE: _ClassVar[Message.ToolCall.UseComputer.Action.MouseButton]
                    BACK: _ClassVar[Message.ToolCall.UseComputer.Action.MouseButton]
                    FORWARD: _ClassVar[Message.ToolCall.UseComputer.Action.MouseButton]
                LEFT: Message.ToolCall.UseComputer.Action.MouseButton
                RIGHT: Message.ToolCall.UseComputer.Action.MouseButton
                MIDDLE: Message.ToolCall.UseComputer.Action.MouseButton
                BACK: Message.ToolCall.UseComputer.Action.MouseButton
                FORWARD: Message.ToolCall.UseComputer.Action.MouseButton
                class MouseMove(_message.Message):
                    __slots__ = ("to",)
                    TO_FIELD_NUMBER: _ClassVar[int]
                    to: Coordinates
                    def __init__(self, to: _Optional[_Union[Coordinates, _Mapping]] = ...) -> None: ...
                class MouseDown(_message.Message):
                    __slots__ = ("button", "at")
                    BUTTON_FIELD_NUMBER: _ClassVar[int]
                    AT_FIELD_NUMBER: _ClassVar[int]
                    button: Message.ToolCall.UseComputer.Action.MouseButton
                    at: Coordinates
                    def __init__(self, button: _Optional[_Union[Message.ToolCall.UseComputer.Action.MouseButton, str]] = ..., at: _Optional[_Union[Coordinates, _Mapping]] = ...) -> None: ...
                class MouseUp(_message.Message):
                    __slots__ = ("button",)
                    BUTTON_FIELD_NUMBER: _ClassVar[int]
                    button: Message.ToolCall.UseComputer.Action.MouseButton
                    def __init__(self, button: _Optional[_Union[Message.ToolCall.UseComputer.Action.MouseButton, str]] = ...) -> None: ...
                class MouseWheel(_message.Message):
                    __slots__ = ("at", "direction", "pixels", "clicks")
                    class Direction(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
                        __slots__ = ()
                        UP: _ClassVar[Message.ToolCall.UseComputer.Action.MouseWheel.Direction]
                        DOWN: _ClassVar[Message.ToolCall.UseComputer.Action.MouseWheel.Direction]
                        LEFT: _ClassVar[Message.ToolCall.UseComputer.Action.MouseWheel.Direction]
                        RIGHT: _ClassVar[Message.ToolCall.UseComputer.Action.MouseWheel.Direction]
                    UP: Message.ToolCall.UseComputer.Action.MouseWheel.Direction
                    DOWN: Message.ToolCall.UseComputer.Action.MouseWheel.Direction
                    LEFT: Message.ToolCall.UseComputer.Action.MouseWheel.Direction
                    RIGHT: Message.ToolCall.UseComputer.Action.MouseWheel.Direction
                    AT_FIELD_NUMBER: _ClassVar[int]
                    DIRECTION_FIELD_NUMBER: _ClassVar[int]
                    PIXELS_FIELD_NUMBER: _ClassVar[int]
                    CLICKS_FIELD_NUMBER: _ClassVar[int]
                    at: Coordinates
                    direction: Message.ToolCall.UseComputer.Action.MouseWheel.Direction
                    pixels: int
                    clicks: int
                    def __init__(self, at: _Optional[_Union[Coordinates, _Mapping]] = ..., direction: _Optional[_Union[Message.ToolCall.UseComputer.Action.MouseWheel.Direction, str]] = ..., pixels: _Optional[int] = ..., clicks: _Optional[int] = ...) -> None: ...
                class Wait(_message.Message):
                    __slots__ = ("duration",)
                    DURATION_FIELD_NUMBER: _ClassVar[int]
                    duration: _duration_pb2.Duration
                    def __init__(self, duration: _Optional[_Union[datetime.timedelta, _duration_pb2.Duration, _Mapping]] = ...) -> None: ...
                class TypeText(_message.Message):
                    __slots__ = ("text",)
                    TEXT_FIELD_NUMBER: _ClassVar[int]
                    text: str
                    def __init__(self, text: _Optional[str] = ...) -> None: ...
                class Key(_message.Message):
                    __slots__ = ("keycode", "char")
                    KEYCODE_FIELD_NUMBER: _ClassVar[int]
                    CHAR_FIELD_NUMBER: _ClassVar[int]
                    keycode: int
                    char: str
                    def __init__(self, keycode: _Optional[int] = ..., char: _Optional[str] = ...) -> None: ...
                class KeyDown(_message.Message):
                    __slots__ = ("key",)
                    KEY_FIELD_NUMBER: _ClassVar[int]
                    key: Message.ToolCall.UseComputer.Action.Key
                    def __init__(self, key: _Optional[_Union[Message.ToolCall.UseComputer.Action.Key, _Mapping]] = ...) -> None: ...
                class KeyUp(_message.Message):
                    __slots__ = ("key",)
                    KEY_FIELD_NUMBER: _ClassVar[int]
                    key: Message.ToolCall.UseComputer.Action.Key
                    def __init__(self, key: _Optional[_Union[Message.ToolCall.UseComputer.Action.Key, _Mapping]] = ...) -> None: ...
                MOUSE_MOVE_FIELD_NUMBER: _ClassVar[int]
                MOUSE_DOWN_FIELD_NUMBER: _ClassVar[int]
                MOUSE_UP_FIELD_NUMBER: _ClassVar[int]
                MOUSE_WHEEL_FIELD_NUMBER: _ClassVar[int]
                WAIT_FIELD_NUMBER: _ClassVar[int]
                TYPE_TEXT_FIELD_NUMBER: _ClassVar[int]
                KEY_DOWN_FIELD_NUMBER: _ClassVar[int]
                KEY_UP_FIELD_NUMBER: _ClassVar[int]
                mouse_move: Message.ToolCall.UseComputer.Action.MouseMove
                mouse_down: Message.ToolCall.UseComputer.Action.MouseDown
                mouse_up: Message.ToolCall.UseComputer.Action.MouseUp
                mouse_wheel: Message.ToolCall.UseComputer.Action.MouseWheel
                wait: Message.ToolCall.UseComputer.Action.Wait
                type_text: Message.ToolCall.UseComputer.Action.TypeText
                key_down: Message.ToolCall.UseComputer.Action.KeyDown
                key_up: Message.ToolCall.UseComputer.Action.KeyUp
                def __init__(self, mouse_move: _Optional[_Union[Message.ToolCall.UseComputer.Action.MouseMove, _Mapping]] = ..., mouse_down: _Optional[_Union[Message.ToolCall.UseComputer.Action.MouseDown, _Mapping]] = ..., mouse_up: _Optional[_Union[Message.ToolCall.UseComputer.Action.MouseUp, _Mapping]] = ..., mouse_wheel: _Optional[_Union[Message.ToolCall.UseComputer.Action.MouseWheel, _Mapping]] = ..., wait: _Optional[_Union[Message.ToolCall.UseComputer.Action.Wait, _Mapping]] = ..., type_text: _Optional[_Union[Message.ToolCall.UseComputer.Action.TypeText, _Mapping]] = ..., key_down: _Optional[_Union[Message.ToolCall.UseComputer.Action.KeyDown, _Mapping]] = ..., key_up: _Optional[_Union[Message.ToolCall.UseComputer.Action.KeyUp, _Mapping]] = ...) -> None: ...
            ACTIONS_FIELD_NUMBER: _ClassVar[int]
            POST_ACTIONS_SCREENSHOT_PARAMS_FIELD_NUMBER: _ClassVar[int]
            ACTION_SUMMARY_FIELD_NUMBER: _ClassVar[int]
            actions: _containers.RepeatedCompositeFieldContainer[Message.ToolCall.UseComputer.Action]
            post_actions_screenshot_params: Message.ToolCall.ScreenshotParams
            action_summary: str
            def __init__(self, actions: _Optional[_Iterable[_Union[Message.ToolCall.UseComputer.Action, _Mapping]]] = ..., post_actions_screenshot_params: _Optional[_Union[Message.ToolCall.ScreenshotParams, _Mapping]] = ..., action_summary: _Optional[str] = ...) -> None: ...
        class RequestComputerUse(_message.Message):
            __slots__ = ("task_summary", "screenshot_params")
            TASK_SUMMARY_FIELD_NUMBER: _ClassVar[int]
            SCREENSHOT_PARAMS_FIELD_NUMBER: _ClassVar[int]
            task_summary: str
            screenshot_params: Message.ToolCall.ScreenshotParams
            def __init__(self, task_summary: _Optional[str] = ..., screenshot_params: _Optional[_Union[Message.ToolCall.ScreenshotParams, _Mapping]] = ...) -> None: ...
        class ScreenshotParams(_message.Message):
            __slots__ = ("max_long_edge_px", "max_total_px", "region")
            class Region(_message.Message):
                __slots__ = ("top_left", "bottom_right")
                TOP_LEFT_FIELD_NUMBER: _ClassVar[int]
                BOTTOM_RIGHT_FIELD_NUMBER: _ClassVar[int]
                top_left: Coordinates
                bottom_right: Coordinates
                def __init__(self, top_left: _Optional[_Union[Coordinates, _Mapping]] = ..., bottom_right: _Optional[_Union[Coordinates, _Mapping]] = ...) -> None: ...
            MAX_LONG_EDGE_PX_FIELD_NUMBER: _ClassVar[int]
            MAX_TOTAL_PX_FIELD_NUMBER: _ClassVar[int]
            REGION_FIELD_NUMBER: _ClassVar[int]
            max_long_edge_px: int
            max_total_px: int
            region: Message.ToolCall.ScreenshotParams.Region
            def __init__(self, max_long_edge_px: _Optional[int] = ..., max_total_px: _Optional[int] = ..., region: _Optional[_Union[Message.ToolCall.ScreenshotParams.Region, _Mapping]] = ...) -> None: ...
        TOOL_CALL_ID_FIELD_NUMBER: _ClassVar[int]
        RUN_SHELL_COMMAND_FIELD_NUMBER: _ClassVar[int]
        SEARCH_CODEBASE_FIELD_NUMBER: _ClassVar[int]
        SERVER_FIELD_NUMBER: _ClassVar[int]
        READ_FILES_FIELD_NUMBER: _ClassVar[int]
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
        SUBAGENT_FIELD_NUMBER: _ClassVar[int]
        READ_DOCUMENTS_FIELD_NUMBER: _ClassVar[int]
        EDIT_DOCUMENTS_FIELD_NUMBER: _ClassVar[int]
        CREATE_DOCUMENTS_FIELD_NUMBER: _ClassVar[int]
        READ_SHELL_COMMAND_OUTPUT_FIELD_NUMBER: _ClassVar[int]
        USE_COMPUTER_FIELD_NUMBER: _ClassVar[int]
        INSERT_REVIEW_COMMENTS_FIELD_NUMBER: _ClassVar[int]
        READ_SKILL_FIELD_NUMBER: _ClassVar[int]
        REQUEST_COMPUTER_USE_FIELD_NUMBER: _ClassVar[int]
        FETCH_CONVERSATION_FIELD_NUMBER: _ClassVar[int]
        START_AGENT_FIELD_NUMBER: _ClassVar[int]
        SEND_MESSAGE_TO_AGENT_FIELD_NUMBER: _ClassVar[int]
        TRANSFER_SHELL_COMMAND_CONTROL_TO_USER_FIELD_NUMBER: _ClassVar[int]
        tool_call_id: str
        run_shell_command: Message.ToolCall.RunShellCommand
        search_codebase: Message.ToolCall.SearchCodebase
        server: Message.ToolCall.Server
        read_files: Message.ToolCall.ReadFiles
        apply_file_diffs: Message.ToolCall.ApplyFileDiffs
        suggest_plan: Message.ToolCall.SuggestPlan
        suggest_create_plan: Message.ToolCall.SuggestCreatePlan
        grep: Message.ToolCall.Grep
        file_glob: Message.ToolCall.FileGlob
        read_mcp_resource: Message.ToolCall.ReadMCPResource
        call_mcp_tool: Message.ToolCall.CallMCPTool
        write_to_long_running_shell_command: Message.ToolCall.WriteToLongRunningShellCommand
        suggest_new_conversation: Message.ToolCall.SuggestNewConversation
        file_glob_v2: Message.ToolCall.FileGlobV2
        suggest_prompt: Message.ToolCall.SuggestPrompt
        open_code_review: Message.ToolCall.OpenCodeReview
        init_project: Message.ToolCall.InitProject
        subagent: Message.ToolCall.Subagent
        read_documents: Message.ToolCall.ReadDocuments
        edit_documents: Message.ToolCall.EditDocuments
        create_documents: Message.ToolCall.CreateDocuments
        read_shell_command_output: Message.ToolCall.ReadShellCommandOutput
        use_computer: Message.ToolCall.UseComputer
        insert_review_comments: Message.ToolCall.InsertReviewComments
        read_skill: Message.ToolCall.ReadSkill
        request_computer_use: Message.ToolCall.RequestComputerUse
        fetch_conversation: Message.ToolCall.FetchConversation
        start_agent: StartAgent
        send_message_to_agent: SendMessageToAgent
        transfer_shell_command_control_to_user: Message.ToolCall.TransferShellCommandControlToUser
        def __init__(self, tool_call_id: _Optional[str] = ..., run_shell_command: _Optional[_Union[Message.ToolCall.RunShellCommand, _Mapping]] = ..., search_codebase: _Optional[_Union[Message.ToolCall.SearchCodebase, _Mapping]] = ..., server: _Optional[_Union[Message.ToolCall.Server, _Mapping]] = ..., read_files: _Optional[_Union[Message.ToolCall.ReadFiles, _Mapping]] = ..., apply_file_diffs: _Optional[_Union[Message.ToolCall.ApplyFileDiffs, _Mapping]] = ..., suggest_plan: _Optional[_Union[Message.ToolCall.SuggestPlan, _Mapping]] = ..., suggest_create_plan: _Optional[_Union[Message.ToolCall.SuggestCreatePlan, _Mapping]] = ..., grep: _Optional[_Union[Message.ToolCall.Grep, _Mapping]] = ..., file_glob: _Optional[_Union[Message.ToolCall.FileGlob, _Mapping]] = ..., read_mcp_resource: _Optional[_Union[Message.ToolCall.ReadMCPResource, _Mapping]] = ..., call_mcp_tool: _Optional[_Union[Message.ToolCall.CallMCPTool, _Mapping]] = ..., write_to_long_running_shell_command: _Optional[_Union[Message.ToolCall.WriteToLongRunningShellCommand, _Mapping]] = ..., suggest_new_conversation: _Optional[_Union[Message.ToolCall.SuggestNewConversation, _Mapping]] = ..., file_glob_v2: _Optional[_Union[Message.ToolCall.FileGlobV2, _Mapping]] = ..., suggest_prompt: _Optional[_Union[Message.ToolCall.SuggestPrompt, _Mapping]] = ..., open_code_review: _Optional[_Union[Message.ToolCall.OpenCodeReview, _Mapping]] = ..., init_project: _Optional[_Union[Message.ToolCall.InitProject, _Mapping]] = ..., subagent: _Optional[_Union[Message.ToolCall.Subagent, _Mapping]] = ..., read_documents: _Optional[_Union[Message.ToolCall.ReadDocuments, _Mapping]] = ..., edit_documents: _Optional[_Union[Message.ToolCall.EditDocuments, _Mapping]] = ..., create_documents: _Optional[_Union[Message.ToolCall.CreateDocuments, _Mapping]] = ..., read_shell_command_output: _Optional[_Union[Message.ToolCall.ReadShellCommandOutput, _Mapping]] = ..., use_computer: _Optional[_Union[Message.ToolCall.UseComputer, _Mapping]] = ..., insert_review_comments: _Optional[_Union[Message.ToolCall.InsertReviewComments, _Mapping]] = ..., read_skill: _Optional[_Union[Message.ToolCall.ReadSkill, _Mapping]] = ..., request_computer_use: _Optional[_Union[Message.ToolCall.RequestComputerUse, _Mapping]] = ..., fetch_conversation: _Optional[_Union[Message.ToolCall.FetchConversation, _Mapping]] = ..., start_agent: _Optional[_Union[StartAgent, _Mapping]] = ..., send_message_to_agent: _Optional[_Union[SendMessageToAgent, _Mapping]] = ..., transfer_shell_command_control_to_user: _Optional[_Union[Message.ToolCall.TransferShellCommandControlToUser, _Mapping]] = ...) -> None: ...
    class ToolCallResult(_message.Message):
        __slots__ = ("tool_call_id", "context", "run_shell_command", "search_codebase", "server", "read_files", "apply_file_diffs", "suggest_plan", "suggest_create_plan", "grep", "file_glob", "cancel", "read_mcp_resource", "call_mcp_tool", "write_to_long_running_shell_command", "suggest_new_conversation", "file_glob_v2", "suggest_prompt", "open_code_review", "init_project", "subagent", "read_documents", "edit_documents", "create_documents", "read_shell_command_output", "use_computer", "insert_review_comments", "read_skill", "request_computer_use_result", "fetch_conversation", "start_agent", "send_message_to_agent", "transfer_shell_command_control_to_user")
        class ServerResult(_message.Message):
            __slots__ = ("serialized_result",)
            SERIALIZED_RESULT_FIELD_NUMBER: _ClassVar[int]
            serialized_result: str
            def __init__(self, serialized_result: _Optional[str] = ...) -> None: ...
        class SubagentResult(_message.Message):
            __slots__ = ("payload",)
            PAYLOAD_FIELD_NUMBER: _ClassVar[int]
            payload: str
            def __init__(self, payload: _Optional[str] = ...) -> None: ...
        TOOL_CALL_ID_FIELD_NUMBER: _ClassVar[int]
        CONTEXT_FIELD_NUMBER: _ClassVar[int]
        RUN_SHELL_COMMAND_FIELD_NUMBER: _ClassVar[int]
        SEARCH_CODEBASE_FIELD_NUMBER: _ClassVar[int]
        SERVER_FIELD_NUMBER: _ClassVar[int]
        READ_FILES_FIELD_NUMBER: _ClassVar[int]
        APPLY_FILE_DIFFS_FIELD_NUMBER: _ClassVar[int]
        SUGGEST_PLAN_FIELD_NUMBER: _ClassVar[int]
        SUGGEST_CREATE_PLAN_FIELD_NUMBER: _ClassVar[int]
        GREP_FIELD_NUMBER: _ClassVar[int]
        FILE_GLOB_FIELD_NUMBER: _ClassVar[int]
        CANCEL_FIELD_NUMBER: _ClassVar[int]
        READ_MCP_RESOURCE_FIELD_NUMBER: _ClassVar[int]
        CALL_MCP_TOOL_FIELD_NUMBER: _ClassVar[int]
        WRITE_TO_LONG_RUNNING_SHELL_COMMAND_FIELD_NUMBER: _ClassVar[int]
        SUGGEST_NEW_CONVERSATION_FIELD_NUMBER: _ClassVar[int]
        FILE_GLOB_V2_FIELD_NUMBER: _ClassVar[int]
        SUGGEST_PROMPT_FIELD_NUMBER: _ClassVar[int]
        OPEN_CODE_REVIEW_FIELD_NUMBER: _ClassVar[int]
        INIT_PROJECT_FIELD_NUMBER: _ClassVar[int]
        SUBAGENT_FIELD_NUMBER: _ClassVar[int]
        READ_DOCUMENTS_FIELD_NUMBER: _ClassVar[int]
        EDIT_DOCUMENTS_FIELD_NUMBER: _ClassVar[int]
        CREATE_DOCUMENTS_FIELD_NUMBER: _ClassVar[int]
        READ_SHELL_COMMAND_OUTPUT_FIELD_NUMBER: _ClassVar[int]
        USE_COMPUTER_FIELD_NUMBER: _ClassVar[int]
        INSERT_REVIEW_COMMENTS_FIELD_NUMBER: _ClassVar[int]
        READ_SKILL_FIELD_NUMBER: _ClassVar[int]
        REQUEST_COMPUTER_USE_RESULT_FIELD_NUMBER: _ClassVar[int]
        FETCH_CONVERSATION_FIELD_NUMBER: _ClassVar[int]
        START_AGENT_FIELD_NUMBER: _ClassVar[int]
        SEND_MESSAGE_TO_AGENT_FIELD_NUMBER: _ClassVar[int]
        TRANSFER_SHELL_COMMAND_CONTROL_TO_USER_FIELD_NUMBER: _ClassVar[int]
        tool_call_id: str
        context: _input_context_pb2.InputContext
        run_shell_command: RunShellCommandResult
        search_codebase: SearchCodebaseResult
        server: Message.ToolCallResult.ServerResult
        read_files: ReadFilesResult
        apply_file_diffs: ApplyFileDiffsResult
        suggest_plan: SuggestPlanResult
        suggest_create_plan: SuggestCreatePlanResult
        grep: GrepResult
        file_glob: FileGlobResult
        cancel: _empty_pb2.Empty
        read_mcp_resource: ReadMCPResourceResult
        call_mcp_tool: CallMCPToolResult
        write_to_long_running_shell_command: WriteToLongRunningShellCommandResult
        suggest_new_conversation: SuggestNewConversationResult
        file_glob_v2: FileGlobV2Result
        suggest_prompt: SuggestPromptResult
        open_code_review: OpenCodeReviewResult
        init_project: InitProjectResult
        subagent: Message.ToolCallResult.SubagentResult
        read_documents: ReadDocumentsResult
        edit_documents: EditDocumentsResult
        create_documents: CreateDocumentsResult
        read_shell_command_output: ReadShellCommandOutputResult
        use_computer: UseComputerResult
        insert_review_comments: InsertReviewCommentsResult
        read_skill: ReadSkillResult
        request_computer_use_result: RequestComputerUseResult
        fetch_conversation: FetchConversationResult
        start_agent: StartAgentResult
        send_message_to_agent: SendMessageToAgentResult
        transfer_shell_command_control_to_user: TransferShellCommandControlToUserResult
        def __init__(self, tool_call_id: _Optional[str] = ..., context: _Optional[_Union[_input_context_pb2.InputContext, _Mapping]] = ..., run_shell_command: _Optional[_Union[RunShellCommandResult, _Mapping]] = ..., search_codebase: _Optional[_Union[SearchCodebaseResult, _Mapping]] = ..., server: _Optional[_Union[Message.ToolCallResult.ServerResult, _Mapping]] = ..., read_files: _Optional[_Union[ReadFilesResult, _Mapping]] = ..., apply_file_diffs: _Optional[_Union[ApplyFileDiffsResult, _Mapping]] = ..., suggest_plan: _Optional[_Union[SuggestPlanResult, _Mapping]] = ..., suggest_create_plan: _Optional[_Union[SuggestCreatePlanResult, _Mapping]] = ..., grep: _Optional[_Union[GrepResult, _Mapping]] = ..., file_glob: _Optional[_Union[FileGlobResult, _Mapping]] = ..., cancel: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ..., read_mcp_resource: _Optional[_Union[ReadMCPResourceResult, _Mapping]] = ..., call_mcp_tool: _Optional[_Union[CallMCPToolResult, _Mapping]] = ..., write_to_long_running_shell_command: _Optional[_Union[WriteToLongRunningShellCommandResult, _Mapping]] = ..., suggest_new_conversation: _Optional[_Union[SuggestNewConversationResult, _Mapping]] = ..., file_glob_v2: _Optional[_Union[FileGlobV2Result, _Mapping]] = ..., suggest_prompt: _Optional[_Union[SuggestPromptResult, _Mapping]] = ..., open_code_review: _Optional[_Union[OpenCodeReviewResult, _Mapping]] = ..., init_project: _Optional[_Union[InitProjectResult, _Mapping]] = ..., subagent: _Optional[_Union[Message.ToolCallResult.SubagentResult, _Mapping]] = ..., read_documents: _Optional[_Union[ReadDocumentsResult, _Mapping]] = ..., edit_documents: _Optional[_Union[EditDocumentsResult, _Mapping]] = ..., create_documents: _Optional[_Union[CreateDocumentsResult, _Mapping]] = ..., read_shell_command_output: _Optional[_Union[ReadShellCommandOutputResult, _Mapping]] = ..., use_computer: _Optional[_Union[UseComputerResult, _Mapping]] = ..., insert_review_comments: _Optional[_Union[InsertReviewCommentsResult, _Mapping]] = ..., read_skill: _Optional[_Union[ReadSkillResult, _Mapping]] = ..., request_computer_use_result: _Optional[_Union[RequestComputerUseResult, _Mapping]] = ..., fetch_conversation: _Optional[_Union[FetchConversationResult, _Mapping]] = ..., start_agent: _Optional[_Union[StartAgentResult, _Mapping]] = ..., send_message_to_agent: _Optional[_Union[SendMessageToAgentResult, _Mapping]] = ..., transfer_shell_command_control_to_user: _Optional[_Union[TransferShellCommandControlToUserResult, _Mapping]] = ...) -> None: ...
    class ServerEvent(_message.Message):
        __slots__ = ("payload",)
        PAYLOAD_FIELD_NUMBER: _ClassVar[int]
        payload: str
        def __init__(self, payload: _Optional[str] = ...) -> None: ...
    class UpdateTodos(_message.Message):
        __slots__ = ("create_todo_list", "update_pending_todos", "mark_todos_completed")
        CREATE_TODO_LIST_FIELD_NUMBER: _ClassVar[int]
        UPDATE_PENDING_TODOS_FIELD_NUMBER: _ClassVar[int]
        MARK_TODOS_COMPLETED_FIELD_NUMBER: _ClassVar[int]
        create_todo_list: _todo_pb2.CreateTodoList
        update_pending_todos: _todo_pb2.UpdatePendingTodos
        mark_todos_completed: _todo_pb2.MarkTodosCompleted
        def __init__(self, create_todo_list: _Optional[_Union[_todo_pb2.CreateTodoList, _Mapping]] = ..., update_pending_todos: _Optional[_Union[_todo_pb2.UpdatePendingTodos, _Mapping]] = ..., mark_todos_completed: _Optional[_Union[_todo_pb2.MarkTodosCompleted, _Mapping]] = ...) -> None: ...
    class UpdateReviewComments(_message.Message):
        __slots__ = ("address_review_comments",)
        class AddressReviewComments(_message.Message):
            __slots__ = ("comment_ids",)
            COMMENT_IDS_FIELD_NUMBER: _ClassVar[int]
            comment_ids: _containers.RepeatedScalarFieldContainer[str]
            def __init__(self, comment_ids: _Optional[_Iterable[str]] = ...) -> None: ...
        ADDRESS_REVIEW_COMMENTS_FIELD_NUMBER: _ClassVar[int]
        address_review_comments: Message.UpdateReviewComments.AddressReviewComments
        def __init__(self, address_review_comments: _Optional[_Union[Message.UpdateReviewComments.AddressReviewComments, _Mapping]] = ...) -> None: ...
    class WebSearch(_message.Message):
        __slots__ = ("status",)
        class Status(_message.Message):
            __slots__ = ("searching", "success", "error")
            class Searching(_message.Message):
                __slots__ = ("query",)
                QUERY_FIELD_NUMBER: _ClassVar[int]
                query: str
                def __init__(self, query: _Optional[str] = ...) -> None: ...
            class Success(_message.Message):
                __slots__ = ("query", "pages")
                class SearchedPage(_message.Message):
                    __slots__ = ("url", "title")
                    URL_FIELD_NUMBER: _ClassVar[int]
                    TITLE_FIELD_NUMBER: _ClassVar[int]
                    url: str
                    title: str
                    def __init__(self, url: _Optional[str] = ..., title: _Optional[str] = ...) -> None: ...
                QUERY_FIELD_NUMBER: _ClassVar[int]
                PAGES_FIELD_NUMBER: _ClassVar[int]
                query: str
                pages: _containers.RepeatedCompositeFieldContainer[Message.WebSearch.Status.Success.SearchedPage]
                def __init__(self, query: _Optional[str] = ..., pages: _Optional[_Iterable[_Union[Message.WebSearch.Status.Success.SearchedPage, _Mapping]]] = ...) -> None: ...
            SEARCHING_FIELD_NUMBER: _ClassVar[int]
            SUCCESS_FIELD_NUMBER: _ClassVar[int]
            ERROR_FIELD_NUMBER: _ClassVar[int]
            searching: Message.WebSearch.Status.Searching
            success: Message.WebSearch.Status.Success
            error: _empty_pb2.Empty
            def __init__(self, searching: _Optional[_Union[Message.WebSearch.Status.Searching, _Mapping]] = ..., success: _Optional[_Union[Message.WebSearch.Status.Success, _Mapping]] = ..., error: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ...) -> None: ...
        STATUS_FIELD_NUMBER: _ClassVar[int]
        status: Message.WebSearch.Status
        def __init__(self, status: _Optional[_Union[Message.WebSearch.Status, _Mapping]] = ...) -> None: ...
    class WebFetch(_message.Message):
        __slots__ = ("status",)
        class Status(_message.Message):
            __slots__ = ("fetching", "success", "error")
            class Fetching(_message.Message):
                __slots__ = ("urls",)
                URLS_FIELD_NUMBER: _ClassVar[int]
                urls: _containers.RepeatedScalarFieldContainer[str]
                def __init__(self, urls: _Optional[_Iterable[str]] = ...) -> None: ...
            class Success(_message.Message):
                __slots__ = ("pages",)
                class FetchedPage(_message.Message):
                    __slots__ = ("url", "title", "success")
                    URL_FIELD_NUMBER: _ClassVar[int]
                    TITLE_FIELD_NUMBER: _ClassVar[int]
                    SUCCESS_FIELD_NUMBER: _ClassVar[int]
                    url: str
                    title: str
                    success: bool
                    def __init__(self, url: _Optional[str] = ..., title: _Optional[str] = ..., success: _Optional[bool] = ...) -> None: ...
                PAGES_FIELD_NUMBER: _ClassVar[int]
                pages: _containers.RepeatedCompositeFieldContainer[Message.WebFetch.Status.Success.FetchedPage]
                def __init__(self, pages: _Optional[_Iterable[_Union[Message.WebFetch.Status.Success.FetchedPage, _Mapping]]] = ...) -> None: ...
            FETCHING_FIELD_NUMBER: _ClassVar[int]
            SUCCESS_FIELD_NUMBER: _ClassVar[int]
            ERROR_FIELD_NUMBER: _ClassVar[int]
            fetching: Message.WebFetch.Status.Fetching
            success: Message.WebFetch.Status.Success
            error: _empty_pb2.Empty
            def __init__(self, fetching: _Optional[_Union[Message.WebFetch.Status.Fetching, _Mapping]] = ..., success: _Optional[_Union[Message.WebFetch.Status.Success, _Mapping]] = ..., error: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ...) -> None: ...
        STATUS_FIELD_NUMBER: _ClassVar[int]
        status: Message.WebFetch.Status
        def __init__(self, status: _Optional[_Union[Message.WebFetch.Status, _Mapping]] = ...) -> None: ...
    class DebugOutput(_message.Message):
        __slots__ = ("text",)
        TEXT_FIELD_NUMBER: _ClassVar[int]
        text: str
        def __init__(self, text: _Optional[str] = ...) -> None: ...
    class ArtifactEvent(_message.Message):
        __slots__ = ("created",)
        class PullRequestArtifact(_message.Message):
            __slots__ = ("url", "branch")
            URL_FIELD_NUMBER: _ClassVar[int]
            BRANCH_FIELD_NUMBER: _ClassVar[int]
            url: str
            branch: str
            def __init__(self, url: _Optional[str] = ..., branch: _Optional[str] = ...) -> None: ...
        class ScreenshotArtifact(_message.Message):
            __slots__ = ("artifact_uid", "mime_type", "description")
            ARTIFACT_UID_FIELD_NUMBER: _ClassVar[int]
            MIME_TYPE_FIELD_NUMBER: _ClassVar[int]
            DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
            artifact_uid: str
            mime_type: str
            description: str
            def __init__(self, artifact_uid: _Optional[str] = ..., mime_type: _Optional[str] = ..., description: _Optional[str] = ...) -> None: ...
        class ArtifactCreated(_message.Message):
            __slots__ = ("pull_request", "screenshot")
            PULL_REQUEST_FIELD_NUMBER: _ClassVar[int]
            SCREENSHOT_FIELD_NUMBER: _ClassVar[int]
            pull_request: Message.ArtifactEvent.PullRequestArtifact
            screenshot: Message.ArtifactEvent.ScreenshotArtifact
            def __init__(self, pull_request: _Optional[_Union[Message.ArtifactEvent.PullRequestArtifact, _Mapping]] = ..., screenshot: _Optional[_Union[Message.ArtifactEvent.ScreenshotArtifact, _Mapping]] = ...) -> None: ...
        CREATED_FIELD_NUMBER: _ClassVar[int]
        created: Message.ArtifactEvent.ArtifactCreated
        def __init__(self, created: _Optional[_Union[Message.ArtifactEvent.ArtifactCreated, _Mapping]] = ...) -> None: ...
    class InvokeSkill(_message.Message):
        __slots__ = ("skill", "user_query")
        SKILL_FIELD_NUMBER: _ClassVar[int]
        USER_QUERY_FIELD_NUMBER: _ClassVar[int]
        skill: _skill_pb2.Skill
        user_query: Message.UserQuery
        def __init__(self, skill: _Optional[_Union[_skill_pb2.Skill, _Mapping]] = ..., user_query: _Optional[_Union[Message.UserQuery, _Mapping]] = ...) -> None: ...
    class ModelFallback(_message.Message):
        __slots__ = ("model_id", "model_display_name")
        MODEL_ID_FIELD_NUMBER: _ClassVar[int]
        MODEL_DISPLAY_NAME_FIELD_NUMBER: _ClassVar[int]
        model_id: str
        model_display_name: str
        def __init__(self, model_id: _Optional[str] = ..., model_display_name: _Optional[str] = ...) -> None: ...
    ID_FIELD_NUMBER: _ClassVar[int]
    TASK_ID_FIELD_NUMBER: _ClassVar[int]
    REQUEST_ID_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    SERVER_MESSAGE_DATA_FIELD_NUMBER: _ClassVar[int]
    CITATIONS_FIELD_NUMBER: _ClassVar[int]
    USER_QUERY_FIELD_NUMBER: _ClassVar[int]
    AGENT_OUTPUT_FIELD_NUMBER: _ClassVar[int]
    TOOL_CALL_FIELD_NUMBER: _ClassVar[int]
    TOOL_CALL_RESULT_FIELD_NUMBER: _ClassVar[int]
    SERVER_EVENT_FIELD_NUMBER: _ClassVar[int]
    SYSTEM_QUERY_FIELD_NUMBER: _ClassVar[int]
    UPDATE_TODOS_FIELD_NUMBER: _ClassVar[int]
    AGENT_REASONING_FIELD_NUMBER: _ClassVar[int]
    SUMMARIZATION_FIELD_NUMBER: _ClassVar[int]
    CODE_REVIEW_FIELD_NUMBER: _ClassVar[int]
    UPDATE_REVIEW_COMMENTS_FIELD_NUMBER: _ClassVar[int]
    WEB_SEARCH_FIELD_NUMBER: _ClassVar[int]
    WEB_FETCH_FIELD_NUMBER: _ClassVar[int]
    DEBUG_OUTPUT_FIELD_NUMBER: _ClassVar[int]
    ARTIFACT_EVENT_FIELD_NUMBER: _ClassVar[int]
    INVOKE_SKILL_FIELD_NUMBER: _ClassVar[int]
    MESSAGES_RECEIVED_FROM_AGENTS_FIELD_NUMBER: _ClassVar[int]
    MODEL_FALLBACK_FIELD_NUMBER: _ClassVar[int]
    id: str
    task_id: str
    request_id: str
    timestamp: _timestamp_pb2.Timestamp
    server_message_data: str
    citations: _containers.RepeatedCompositeFieldContainer[_citations_pb2.Citation]
    user_query: Message.UserQuery
    agent_output: Message.AgentOutput
    tool_call: Message.ToolCall
    tool_call_result: Message.ToolCallResult
    server_event: Message.ServerEvent
    system_query: Message.SystemQuery
    update_todos: Message.UpdateTodos
    agent_reasoning: Message.AgentReasoning
    summarization: Message.Summarization
    code_review: Message.CodeReview
    update_review_comments: Message.UpdateReviewComments
    web_search: Message.WebSearch
    web_fetch: Message.WebFetch
    debug_output: Message.DebugOutput
    artifact_event: Message.ArtifactEvent
    invoke_skill: Message.InvokeSkill
    messages_received_from_agents: Message.MessagesReceivedFromAgents
    model_fallback: Message.ModelFallback
    def __init__(self, id: _Optional[str] = ..., task_id: _Optional[str] = ..., request_id: _Optional[str] = ..., timestamp: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., server_message_data: _Optional[str] = ..., citations: _Optional[_Iterable[_Union[_citations_pb2.Citation, _Mapping]]] = ..., user_query: _Optional[_Union[Message.UserQuery, _Mapping]] = ..., agent_output: _Optional[_Union[Message.AgentOutput, _Mapping]] = ..., tool_call: _Optional[_Union[Message.ToolCall, _Mapping]] = ..., tool_call_result: _Optional[_Union[Message.ToolCallResult, _Mapping]] = ..., server_event: _Optional[_Union[Message.ServerEvent, _Mapping]] = ..., system_query: _Optional[_Union[Message.SystemQuery, _Mapping]] = ..., update_todos: _Optional[_Union[Message.UpdateTodos, _Mapping]] = ..., agent_reasoning: _Optional[_Union[Message.AgentReasoning, _Mapping]] = ..., summarization: _Optional[_Union[Message.Summarization, _Mapping]] = ..., code_review: _Optional[_Union[Message.CodeReview, _Mapping]] = ..., update_review_comments: _Optional[_Union[Message.UpdateReviewComments, _Mapping]] = ..., web_search: _Optional[_Union[Message.WebSearch, _Mapping]] = ..., web_fetch: _Optional[_Union[Message.WebFetch, _Mapping]] = ..., debug_output: _Optional[_Union[Message.DebugOutput, _Mapping]] = ..., artifact_event: _Optional[_Union[Message.ArtifactEvent, _Mapping]] = ..., invoke_skill: _Optional[_Union[Message.InvokeSkill, _Mapping]] = ..., messages_received_from_agents: _Optional[_Union[Message.MessagesReceivedFromAgents, _Mapping]] = ..., model_fallback: _Optional[_Union[Message.ModelFallback, _Mapping]] = ...) -> None: ...

class RunShellCommandResult(_message.Message):
    __slots__ = ("command", "long_running_command_snapshot", "command_finished", "permission_denied", "output", "exit_code")
    COMMAND_FIELD_NUMBER: _ClassVar[int]
    LONG_RUNNING_COMMAND_SNAPSHOT_FIELD_NUMBER: _ClassVar[int]
    COMMAND_FINISHED_FIELD_NUMBER: _ClassVar[int]
    PERMISSION_DENIED_FIELD_NUMBER: _ClassVar[int]
    OUTPUT_FIELD_NUMBER: _ClassVar[int]
    EXIT_CODE_FIELD_NUMBER: _ClassVar[int]
    command: str
    long_running_command_snapshot: _attachment_pb2.LongRunningShellCommandSnapshot
    command_finished: ShellCommandFinished
    permission_denied: PermissionDenied
    output: str
    exit_code: int
    def __init__(self, command: _Optional[str] = ..., long_running_command_snapshot: _Optional[_Union[_attachment_pb2.LongRunningShellCommandSnapshot, _Mapping]] = ..., command_finished: _Optional[_Union[ShellCommandFinished, _Mapping]] = ..., permission_denied: _Optional[_Union[PermissionDenied, _Mapping]] = ..., output: _Optional[str] = ..., exit_code: _Optional[int] = ...) -> None: ...

class ReadFilesResult(_message.Message):
    __slots__ = ("text_files_success", "any_files_success", "error")
    class TextFilesSuccess(_message.Message):
        __slots__ = ("files",)
        FILES_FIELD_NUMBER: _ClassVar[int]
        files: _containers.RepeatedCompositeFieldContainer[_file_content_pb2.FileContent]
        def __init__(self, files: _Optional[_Iterable[_Union[_file_content_pb2.FileContent, _Mapping]]] = ...) -> None: ...
    class AnyFilesSuccess(_message.Message):
        __slots__ = ("files",)
        FILES_FIELD_NUMBER: _ClassVar[int]
        files: _containers.RepeatedCompositeFieldContainer[_file_content_pb2.AnyFileContent]
        def __init__(self, files: _Optional[_Iterable[_Union[_file_content_pb2.AnyFileContent, _Mapping]]] = ...) -> None: ...
    class Error(_message.Message):
        __slots__ = ("message",)
        MESSAGE_FIELD_NUMBER: _ClassVar[int]
        message: str
        def __init__(self, message: _Optional[str] = ...) -> None: ...
    TEXT_FILES_SUCCESS_FIELD_NUMBER: _ClassVar[int]
    ANY_FILES_SUCCESS_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    text_files_success: ReadFilesResult.TextFilesSuccess
    any_files_success: ReadFilesResult.AnyFilesSuccess
    error: ReadFilesResult.Error
    def __init__(self, text_files_success: _Optional[_Union[ReadFilesResult.TextFilesSuccess, _Mapping]] = ..., any_files_success: _Optional[_Union[ReadFilesResult.AnyFilesSuccess, _Mapping]] = ..., error: _Optional[_Union[ReadFilesResult.Error, _Mapping]] = ...) -> None: ...

class SearchCodebaseResult(_message.Message):
    __slots__ = ("success", "error")
    class Success(_message.Message):
        __slots__ = ("files",)
        FILES_FIELD_NUMBER: _ClassVar[int]
        files: _containers.RepeatedCompositeFieldContainer[_file_content_pb2.FileContent]
        def __init__(self, files: _Optional[_Iterable[_Union[_file_content_pb2.FileContent, _Mapping]]] = ...) -> None: ...
    class Error(_message.Message):
        __slots__ = ("message",)
        MESSAGE_FIELD_NUMBER: _ClassVar[int]
        message: str
        def __init__(self, message: _Optional[str] = ...) -> None: ...
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    success: SearchCodebaseResult.Success
    error: SearchCodebaseResult.Error
    def __init__(self, success: _Optional[_Union[SearchCodebaseResult.Success, _Mapping]] = ..., error: _Optional[_Union[SearchCodebaseResult.Error, _Mapping]] = ...) -> None: ...

class ApplyFileDiffsResult(_message.Message):
    __slots__ = ("success", "error")
    class Success(_message.Message):
        __slots__ = ("updated_files", "updated_files_v2", "deleted_files")
        class UpdatedFileContent(_message.Message):
            __slots__ = ("file", "was_edited_by_user")
            FILE_FIELD_NUMBER: _ClassVar[int]
            WAS_EDITED_BY_USER_FIELD_NUMBER: _ClassVar[int]
            file: _file_content_pb2.FileContent
            was_edited_by_user: bool
            def __init__(self, file: _Optional[_Union[_file_content_pb2.FileContent, _Mapping]] = ..., was_edited_by_user: _Optional[bool] = ...) -> None: ...
        class DeletedFile(_message.Message):
            __slots__ = ("file_path",)
            FILE_PATH_FIELD_NUMBER: _ClassVar[int]
            file_path: str
            def __init__(self, file_path: _Optional[str] = ...) -> None: ...
        UPDATED_FILES_FIELD_NUMBER: _ClassVar[int]
        UPDATED_FILES_V2_FIELD_NUMBER: _ClassVar[int]
        DELETED_FILES_FIELD_NUMBER: _ClassVar[int]
        updated_files: _containers.RepeatedCompositeFieldContainer[_file_content_pb2.FileContent]
        updated_files_v2: _containers.RepeatedCompositeFieldContainer[ApplyFileDiffsResult.Success.UpdatedFileContent]
        deleted_files: _containers.RepeatedCompositeFieldContainer[ApplyFileDiffsResult.Success.DeletedFile]
        def __init__(self, updated_files: _Optional[_Iterable[_Union[_file_content_pb2.FileContent, _Mapping]]] = ..., updated_files_v2: _Optional[_Iterable[_Union[ApplyFileDiffsResult.Success.UpdatedFileContent, _Mapping]]] = ..., deleted_files: _Optional[_Iterable[_Union[ApplyFileDiffsResult.Success.DeletedFile, _Mapping]]] = ...) -> None: ...
    class Error(_message.Message):
        __slots__ = ("message",)
        MESSAGE_FIELD_NUMBER: _ClassVar[int]
        message: str
        def __init__(self, message: _Optional[str] = ...) -> None: ...
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    success: ApplyFileDiffsResult.Success
    error: ApplyFileDiffsResult.Error
    def __init__(self, success: _Optional[_Union[ApplyFileDiffsResult.Success, _Mapping]] = ..., error: _Optional[_Union[ApplyFileDiffsResult.Error, _Mapping]] = ...) -> None: ...

class SuggestCreatePlanResult(_message.Message):
    __slots__ = ("accepted",)
    ACCEPTED_FIELD_NUMBER: _ClassVar[int]
    accepted: bool
    def __init__(self, accepted: _Optional[bool] = ...) -> None: ...

class SuggestPlanResult(_message.Message):
    __slots__ = ("accepted", "user_edited_plan")
    class UserEditedPlan(_message.Message):
        __slots__ = ("plan_text",)
        PLAN_TEXT_FIELD_NUMBER: _ClassVar[int]
        plan_text: str
        def __init__(self, plan_text: _Optional[str] = ...) -> None: ...
    ACCEPTED_FIELD_NUMBER: _ClassVar[int]
    USER_EDITED_PLAN_FIELD_NUMBER: _ClassVar[int]
    accepted: _empty_pb2.Empty
    user_edited_plan: SuggestPlanResult.UserEditedPlan
    def __init__(self, accepted: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ..., user_edited_plan: _Optional[_Union[SuggestPlanResult.UserEditedPlan, _Mapping]] = ...) -> None: ...

class GrepResult(_message.Message):
    __slots__ = ("success", "error")
    class Success(_message.Message):
        __slots__ = ("matched_files",)
        class GrepFileMatch(_message.Message):
            __slots__ = ("file_path", "matched_lines")
            class GrepLineMatch(_message.Message):
                __slots__ = ("line_number",)
                LINE_NUMBER_FIELD_NUMBER: _ClassVar[int]
                line_number: int
                def __init__(self, line_number: _Optional[int] = ...) -> None: ...
            FILE_PATH_FIELD_NUMBER: _ClassVar[int]
            MATCHED_LINES_FIELD_NUMBER: _ClassVar[int]
            file_path: str
            matched_lines: _containers.RepeatedCompositeFieldContainer[GrepResult.Success.GrepFileMatch.GrepLineMatch]
            def __init__(self, file_path: _Optional[str] = ..., matched_lines: _Optional[_Iterable[_Union[GrepResult.Success.GrepFileMatch.GrepLineMatch, _Mapping]]] = ...) -> None: ...
        MATCHED_FILES_FIELD_NUMBER: _ClassVar[int]
        matched_files: _containers.RepeatedCompositeFieldContainer[GrepResult.Success.GrepFileMatch]
        def __init__(self, matched_files: _Optional[_Iterable[_Union[GrepResult.Success.GrepFileMatch, _Mapping]]] = ...) -> None: ...
    class Error(_message.Message):
        __slots__ = ("message",)
        MESSAGE_FIELD_NUMBER: _ClassVar[int]
        message: str
        def __init__(self, message: _Optional[str] = ...) -> None: ...
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    success: GrepResult.Success
    error: GrepResult.Error
    def __init__(self, success: _Optional[_Union[GrepResult.Success, _Mapping]] = ..., error: _Optional[_Union[GrepResult.Error, _Mapping]] = ...) -> None: ...

class FileGlobResult(_message.Message):
    __slots__ = ("success", "error")
    class Success(_message.Message):
        __slots__ = ("matched_files",)
        MATCHED_FILES_FIELD_NUMBER: _ClassVar[int]
        matched_files: str
        def __init__(self, matched_files: _Optional[str] = ...) -> None: ...
    class Error(_message.Message):
        __slots__ = ("message",)
        MESSAGE_FIELD_NUMBER: _ClassVar[int]
        message: str
        def __init__(self, message: _Optional[str] = ...) -> None: ...
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    success: FileGlobResult.Success
    error: FileGlobResult.Error
    def __init__(self, success: _Optional[_Union[FileGlobResult.Success, _Mapping]] = ..., error: _Optional[_Union[FileGlobResult.Error, _Mapping]] = ...) -> None: ...

class FileGlobV2Result(_message.Message):
    __slots__ = ("success", "error")
    class Success(_message.Message):
        __slots__ = ("matched_files", "warnings")
        class FileGlobMatch(_message.Message):
            __slots__ = ("file_path",)
            FILE_PATH_FIELD_NUMBER: _ClassVar[int]
            file_path: str
            def __init__(self, file_path: _Optional[str] = ...) -> None: ...
        MATCHED_FILES_FIELD_NUMBER: _ClassVar[int]
        WARNINGS_FIELD_NUMBER: _ClassVar[int]
        matched_files: _containers.RepeatedCompositeFieldContainer[FileGlobV2Result.Success.FileGlobMatch]
        warnings: str
        def __init__(self, matched_files: _Optional[_Iterable[_Union[FileGlobV2Result.Success.FileGlobMatch, _Mapping]]] = ..., warnings: _Optional[str] = ...) -> None: ...
    class Error(_message.Message):
        __slots__ = ("message",)
        MESSAGE_FIELD_NUMBER: _ClassVar[int]
        message: str
        def __init__(self, message: _Optional[str] = ...) -> None: ...
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    success: FileGlobV2Result.Success
    error: FileGlobV2Result.Error
    def __init__(self, success: _Optional[_Union[FileGlobV2Result.Success, _Mapping]] = ..., error: _Optional[_Union[FileGlobV2Result.Error, _Mapping]] = ...) -> None: ...

class MCPResourceContent(_message.Message):
    __slots__ = ("uri", "text", "binary")
    class Text(_message.Message):
        __slots__ = ("content", "mime_type")
        CONTENT_FIELD_NUMBER: _ClassVar[int]
        MIME_TYPE_FIELD_NUMBER: _ClassVar[int]
        content: str
        mime_type: str
        def __init__(self, content: _Optional[str] = ..., mime_type: _Optional[str] = ...) -> None: ...
    class Binary(_message.Message):
        __slots__ = ("data", "mime_type")
        DATA_FIELD_NUMBER: _ClassVar[int]
        MIME_TYPE_FIELD_NUMBER: _ClassVar[int]
        data: bytes
        mime_type: str
        def __init__(self, data: _Optional[bytes] = ..., mime_type: _Optional[str] = ...) -> None: ...
    URI_FIELD_NUMBER: _ClassVar[int]
    TEXT_FIELD_NUMBER: _ClassVar[int]
    BINARY_FIELD_NUMBER: _ClassVar[int]
    uri: str
    text: MCPResourceContent.Text
    binary: MCPResourceContent.Binary
    def __init__(self, uri: _Optional[str] = ..., text: _Optional[_Union[MCPResourceContent.Text, _Mapping]] = ..., binary: _Optional[_Union[MCPResourceContent.Binary, _Mapping]] = ...) -> None: ...

class ReadMCPResourceResult(_message.Message):
    __slots__ = ("success", "error")
    class Success(_message.Message):
        __slots__ = ("contents",)
        CONTENTS_FIELD_NUMBER: _ClassVar[int]
        contents: _containers.RepeatedCompositeFieldContainer[MCPResourceContent]
        def __init__(self, contents: _Optional[_Iterable[_Union[MCPResourceContent, _Mapping]]] = ...) -> None: ...
    class Error(_message.Message):
        __slots__ = ("message",)
        MESSAGE_FIELD_NUMBER: _ClassVar[int]
        message: str
        def __init__(self, message: _Optional[str] = ...) -> None: ...
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    success: ReadMCPResourceResult.Success
    error: ReadMCPResourceResult.Error
    def __init__(self, success: _Optional[_Union[ReadMCPResourceResult.Success, _Mapping]] = ..., error: _Optional[_Union[ReadMCPResourceResult.Error, _Mapping]] = ...) -> None: ...

class WriteToLongRunningShellCommandResult(_message.Message):
    __slots__ = ("long_running_command_snapshot", "command_finished", "error")
    LONG_RUNNING_COMMAND_SNAPSHOT_FIELD_NUMBER: _ClassVar[int]
    COMMAND_FINISHED_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    long_running_command_snapshot: _attachment_pb2.LongRunningShellCommandSnapshot
    command_finished: ShellCommandFinished
    error: ShellCommandError
    def __init__(self, long_running_command_snapshot: _Optional[_Union[_attachment_pb2.LongRunningShellCommandSnapshot, _Mapping]] = ..., command_finished: _Optional[_Union[ShellCommandFinished, _Mapping]] = ..., error: _Optional[_Union[ShellCommandError, _Mapping]] = ...) -> None: ...

class TransferShellCommandControlToUserResult(_message.Message):
    __slots__ = ("long_running_command_snapshot", "command_finished", "error")
    LONG_RUNNING_COMMAND_SNAPSHOT_FIELD_NUMBER: _ClassVar[int]
    COMMAND_FINISHED_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    long_running_command_snapshot: _attachment_pb2.LongRunningShellCommandSnapshot
    command_finished: ShellCommandFinished
    error: ShellCommandError
    def __init__(self, long_running_command_snapshot: _Optional[_Union[_attachment_pb2.LongRunningShellCommandSnapshot, _Mapping]] = ..., command_finished: _Optional[_Union[ShellCommandFinished, _Mapping]] = ..., error: _Optional[_Union[ShellCommandError, _Mapping]] = ...) -> None: ...

class SuggestNewConversationResult(_message.Message):
    __slots__ = ("accepted", "rejected")
    class Accepted(_message.Message):
        __slots__ = ("message_id",)
        MESSAGE_ID_FIELD_NUMBER: _ClassVar[int]
        message_id: str
        def __init__(self, message_id: _Optional[str] = ...) -> None: ...
    class Rejected(_message.Message):
        __slots__ = ()
        def __init__(self) -> None: ...
    ACCEPTED_FIELD_NUMBER: _ClassVar[int]
    REJECTED_FIELD_NUMBER: _ClassVar[int]
    accepted: SuggestNewConversationResult.Accepted
    rejected: SuggestNewConversationResult.Rejected
    def __init__(self, accepted: _Optional[_Union[SuggestNewConversationResult.Accepted, _Mapping]] = ..., rejected: _Optional[_Union[SuggestNewConversationResult.Rejected, _Mapping]] = ...) -> None: ...

class ShellCommandFinished(_message.Message):
    __slots__ = ("output", "exit_code", "command_id")
    OUTPUT_FIELD_NUMBER: _ClassVar[int]
    EXIT_CODE_FIELD_NUMBER: _ClassVar[int]
    COMMAND_ID_FIELD_NUMBER: _ClassVar[int]
    output: str
    exit_code: int
    command_id: str
    def __init__(self, output: _Optional[str] = ..., exit_code: _Optional[int] = ..., command_id: _Optional[str] = ...) -> None: ...

class PermissionDenied(_message.Message):
    __slots__ = ("denylisted_command",)
    DENYLISTED_COMMAND_FIELD_NUMBER: _ClassVar[int]
    denylisted_command: _empty_pb2.Empty
    def __init__(self, denylisted_command: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ...) -> None: ...

class CallMCPToolResult(_message.Message):
    __slots__ = ("success", "error")
    class Success(_message.Message):
        __slots__ = ("results",)
        class Result(_message.Message):
            __slots__ = ("text", "image", "resource")
            class Text(_message.Message):
                __slots__ = ("text",)
                TEXT_FIELD_NUMBER: _ClassVar[int]
                text: str
                def __init__(self, text: _Optional[str] = ...) -> None: ...
            class Image(_message.Message):
                __slots__ = ("data", "mime_type")
                DATA_FIELD_NUMBER: _ClassVar[int]
                MIME_TYPE_FIELD_NUMBER: _ClassVar[int]
                data: bytes
                mime_type: str
                def __init__(self, data: _Optional[bytes] = ..., mime_type: _Optional[str] = ...) -> None: ...
            TEXT_FIELD_NUMBER: _ClassVar[int]
            IMAGE_FIELD_NUMBER: _ClassVar[int]
            RESOURCE_FIELD_NUMBER: _ClassVar[int]
            text: CallMCPToolResult.Success.Result.Text
            image: CallMCPToolResult.Success.Result.Image
            resource: MCPResourceContent
            def __init__(self, text: _Optional[_Union[CallMCPToolResult.Success.Result.Text, _Mapping]] = ..., image: _Optional[_Union[CallMCPToolResult.Success.Result.Image, _Mapping]] = ..., resource: _Optional[_Union[MCPResourceContent, _Mapping]] = ...) -> None: ...
        RESULTS_FIELD_NUMBER: _ClassVar[int]
        results: _containers.RepeatedCompositeFieldContainer[CallMCPToolResult.Success.Result]
        def __init__(self, results: _Optional[_Iterable[_Union[CallMCPToolResult.Success.Result, _Mapping]]] = ...) -> None: ...
    class Error(_message.Message):
        __slots__ = ("message",)
        MESSAGE_FIELD_NUMBER: _ClassVar[int]
        message: str
        def __init__(self, message: _Optional[str] = ...) -> None: ...
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    success: CallMCPToolResult.Success
    error: CallMCPToolResult.Error
    def __init__(self, success: _Optional[_Union[CallMCPToolResult.Success, _Mapping]] = ..., error: _Optional[_Union[CallMCPToolResult.Error, _Mapping]] = ...) -> None: ...

class SuggestPromptResult(_message.Message):
    __slots__ = ("accepted", "rejected")
    ACCEPTED_FIELD_NUMBER: _ClassVar[int]
    REJECTED_FIELD_NUMBER: _ClassVar[int]
    accepted: _empty_pb2.Empty
    rejected: _empty_pb2.Empty
    def __init__(self, accepted: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ..., rejected: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ...) -> None: ...

class OpenCodeReviewResult(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class InitProjectResult(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class ReadDocumentsResult(_message.Message):
    __slots__ = ("success", "error")
    class Success(_message.Message):
        __slots__ = ("documents",)
        DOCUMENTS_FIELD_NUMBER: _ClassVar[int]
        documents: _containers.RepeatedCompositeFieldContainer[_document_content_pb2.DocumentContent]
        def __init__(self, documents: _Optional[_Iterable[_Union[_document_content_pb2.DocumentContent, _Mapping]]] = ...) -> None: ...
    class Error(_message.Message):
        __slots__ = ("message",)
        MESSAGE_FIELD_NUMBER: _ClassVar[int]
        message: str
        def __init__(self, message: _Optional[str] = ...) -> None: ...
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    success: ReadDocumentsResult.Success
    error: ReadDocumentsResult.Error
    def __init__(self, success: _Optional[_Union[ReadDocumentsResult.Success, _Mapping]] = ..., error: _Optional[_Union[ReadDocumentsResult.Error, _Mapping]] = ...) -> None: ...

class EditDocumentsResult(_message.Message):
    __slots__ = ("success", "error")
    class Success(_message.Message):
        __slots__ = ("updated_documents",)
        UPDATED_DOCUMENTS_FIELD_NUMBER: _ClassVar[int]
        updated_documents: _containers.RepeatedCompositeFieldContainer[_document_content_pb2.DocumentContent]
        def __init__(self, updated_documents: _Optional[_Iterable[_Union[_document_content_pb2.DocumentContent, _Mapping]]] = ...) -> None: ...
    class Error(_message.Message):
        __slots__ = ("message",)
        MESSAGE_FIELD_NUMBER: _ClassVar[int]
        message: str
        def __init__(self, message: _Optional[str] = ...) -> None: ...
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    success: EditDocumentsResult.Success
    error: EditDocumentsResult.Error
    def __init__(self, success: _Optional[_Union[EditDocumentsResult.Success, _Mapping]] = ..., error: _Optional[_Union[EditDocumentsResult.Error, _Mapping]] = ...) -> None: ...

class CreateDocumentsResult(_message.Message):
    __slots__ = ("success", "error")
    class Success(_message.Message):
        __slots__ = ("created_documents",)
        CREATED_DOCUMENTS_FIELD_NUMBER: _ClassVar[int]
        created_documents: _containers.RepeatedCompositeFieldContainer[_document_content_pb2.DocumentContent]
        def __init__(self, created_documents: _Optional[_Iterable[_Union[_document_content_pb2.DocumentContent, _Mapping]]] = ...) -> None: ...
    class Error(_message.Message):
        __slots__ = ("message",)
        MESSAGE_FIELD_NUMBER: _ClassVar[int]
        message: str
        def __init__(self, message: _Optional[str] = ...) -> None: ...
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    success: CreateDocumentsResult.Success
    error: CreateDocumentsResult.Error
    def __init__(self, success: _Optional[_Union[CreateDocumentsResult.Success, _Mapping]] = ..., error: _Optional[_Union[CreateDocumentsResult.Error, _Mapping]] = ...) -> None: ...

class ReadShellCommandOutputResult(_message.Message):
    __slots__ = ("command", "long_running_command_snapshot", "command_finished", "error")
    COMMAND_FIELD_NUMBER: _ClassVar[int]
    LONG_RUNNING_COMMAND_SNAPSHOT_FIELD_NUMBER: _ClassVar[int]
    COMMAND_FINISHED_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    command: str
    long_running_command_snapshot: _attachment_pb2.LongRunningShellCommandSnapshot
    command_finished: ShellCommandFinished
    error: ShellCommandError
    def __init__(self, command: _Optional[str] = ..., long_running_command_snapshot: _Optional[_Union[_attachment_pb2.LongRunningShellCommandSnapshot, _Mapping]] = ..., command_finished: _Optional[_Union[ShellCommandFinished, _Mapping]] = ..., error: _Optional[_Union[ShellCommandError, _Mapping]] = ...) -> None: ...

class InsertReviewCommentsResult(_message.Message):
    __slots__ = ("repo_path", "success", "error")
    class Success(_message.Message):
        __slots__ = ()
        def __init__(self) -> None: ...
    class Error(_message.Message):
        __slots__ = ("message",)
        MESSAGE_FIELD_NUMBER: _ClassVar[int]
        message: str
        def __init__(self, message: _Optional[str] = ...) -> None: ...
    REPO_PATH_FIELD_NUMBER: _ClassVar[int]
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    repo_path: str
    success: InsertReviewCommentsResult.Success
    error: InsertReviewCommentsResult.Error
    def __init__(self, repo_path: _Optional[str] = ..., success: _Optional[_Union[InsertReviewCommentsResult.Success, _Mapping]] = ..., error: _Optional[_Union[InsertReviewCommentsResult.Error, _Mapping]] = ...) -> None: ...

class Coordinates(_message.Message):
    __slots__ = ("x", "y")
    X_FIELD_NUMBER: _ClassVar[int]
    Y_FIELD_NUMBER: _ClassVar[int]
    x: int
    y: int
    def __init__(self, x: _Optional[int] = ..., y: _Optional[int] = ...) -> None: ...

class UseComputerResult(_message.Message):
    __slots__ = ("success", "error")
    class Success(_message.Message):
        __slots__ = ("screenshot", "cursor_position")
        SCREENSHOT_FIELD_NUMBER: _ClassVar[int]
        CURSOR_POSITION_FIELD_NUMBER: _ClassVar[int]
        screenshot: RawImage
        cursor_position: Coordinates
        def __init__(self, screenshot: _Optional[_Union[RawImage, _Mapping]] = ..., cursor_position: _Optional[_Union[Coordinates, _Mapping]] = ...) -> None: ...
    class Error(_message.Message):
        __slots__ = ("message",)
        MESSAGE_FIELD_NUMBER: _ClassVar[int]
        message: str
        def __init__(self, message: _Optional[str] = ...) -> None: ...
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    success: UseComputerResult.Success
    error: UseComputerResult.Error
    def __init__(self, success: _Optional[_Union[UseComputerResult.Success, _Mapping]] = ..., error: _Optional[_Union[UseComputerResult.Error, _Mapping]] = ...) -> None: ...

class ReadSkillResult(_message.Message):
    __slots__ = ("success", "error")
    class Success(_message.Message):
        __slots__ = ("content",)
        CONTENT_FIELD_NUMBER: _ClassVar[int]
        content: _file_content_pb2.FileContent
        def __init__(self, content: _Optional[_Union[_file_content_pb2.FileContent, _Mapping]] = ...) -> None: ...
    class Error(_message.Message):
        __slots__ = ("message",)
        MESSAGE_FIELD_NUMBER: _ClassVar[int]
        message: str
        def __init__(self, message: _Optional[str] = ...) -> None: ...
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    success: ReadSkillResult.Success
    error: ReadSkillResult.Error
    def __init__(self, success: _Optional[_Union[ReadSkillResult.Success, _Mapping]] = ..., error: _Optional[_Union[ReadSkillResult.Error, _Mapping]] = ...) -> None: ...

class ScreenDimensions(_message.Message):
    __slots__ = ("width_px", "height_px")
    WIDTH_PX_FIELD_NUMBER: _ClassVar[int]
    HEIGHT_PX_FIELD_NUMBER: _ClassVar[int]
    width_px: int
    height_px: int
    def __init__(self, width_px: _Optional[int] = ..., height_px: _Optional[int] = ...) -> None: ...

class RequestComputerUseResult(_message.Message):
    __slots__ = ("approved", "rejected", "error")
    class Approved(_message.Message):
        __slots__ = ("screen_dimensions", "initial_screenshot", "platform")
        class Platform(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
            __slots__ = ()
            MACOS: _ClassVar[RequestComputerUseResult.Approved.Platform]
            WINDOWS: _ClassVar[RequestComputerUseResult.Approved.Platform]
            LINUX_X11: _ClassVar[RequestComputerUseResult.Approved.Platform]
            LINUX_WAYLAND: _ClassVar[RequestComputerUseResult.Approved.Platform]
        MACOS: RequestComputerUseResult.Approved.Platform
        WINDOWS: RequestComputerUseResult.Approved.Platform
        LINUX_X11: RequestComputerUseResult.Approved.Platform
        LINUX_WAYLAND: RequestComputerUseResult.Approved.Platform
        SCREEN_DIMENSIONS_FIELD_NUMBER: _ClassVar[int]
        INITIAL_SCREENSHOT_FIELD_NUMBER: _ClassVar[int]
        PLATFORM_FIELD_NUMBER: _ClassVar[int]
        screen_dimensions: ScreenDimensions
        initial_screenshot: RawImage
        platform: RequestComputerUseResult.Approved.Platform
        def __init__(self, screen_dimensions: _Optional[_Union[ScreenDimensions, _Mapping]] = ..., initial_screenshot: _Optional[_Union[RawImage, _Mapping]] = ..., platform: _Optional[_Union[RequestComputerUseResult.Approved.Platform, str]] = ...) -> None: ...
    class Rejected(_message.Message):
        __slots__ = ()
        def __init__(self) -> None: ...
    class Error(_message.Message):
        __slots__ = ("message",)
        MESSAGE_FIELD_NUMBER: _ClassVar[int]
        message: str
        def __init__(self, message: _Optional[str] = ...) -> None: ...
    APPROVED_FIELD_NUMBER: _ClassVar[int]
    REJECTED_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    approved: RequestComputerUseResult.Approved
    rejected: RequestComputerUseResult.Rejected
    error: RequestComputerUseResult.Error
    def __init__(self, approved: _Optional[_Union[RequestComputerUseResult.Approved, _Mapping]] = ..., rejected: _Optional[_Union[RequestComputerUseResult.Rejected, _Mapping]] = ..., error: _Optional[_Union[RequestComputerUseResult.Error, _Mapping]] = ...) -> None: ...

class FetchConversationResult(_message.Message):
    __slots__ = ("success", "error")
    class Success(_message.Message):
        __slots__ = ("tasks",)
        TASKS_FIELD_NUMBER: _ClassVar[int]
        tasks: _containers.RepeatedCompositeFieldContainer[Task]
        def __init__(self, tasks: _Optional[_Iterable[_Union[Task, _Mapping]]] = ...) -> None: ...
    class Error(_message.Message):
        __slots__ = ("message",)
        MESSAGE_FIELD_NUMBER: _ClassVar[int]
        message: str
        def __init__(self, message: _Optional[str] = ...) -> None: ...
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    success: FetchConversationResult.Success
    error: FetchConversationResult.Error
    def __init__(self, success: _Optional[_Union[FetchConversationResult.Success, _Mapping]] = ..., error: _Optional[_Union[FetchConversationResult.Error, _Mapping]] = ...) -> None: ...

class ShellCommandError(_message.Message):
    __slots__ = ("command_not_found",)
    COMMAND_NOT_FOUND_FIELD_NUMBER: _ClassVar[int]
    command_not_found: _empty_pb2.Empty
    def __init__(self, command_not_found: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ...) -> None: ...

class UserQueryMode(_message.Message):
    __slots__ = ("plan", "orchestrate")
    PLAN_FIELD_NUMBER: _ClassVar[int]
    ORCHESTRATE_FIELD_NUMBER: _ClassVar[int]
    plan: _empty_pb2.Empty
    orchestrate: _empty_pb2.Empty
    def __init__(self, plan: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ..., orchestrate: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ...) -> None: ...

class StartAgent(_message.Message):
    __slots__ = ("name", "prompt")
    NAME_FIELD_NUMBER: _ClassVar[int]
    PROMPT_FIELD_NUMBER: _ClassVar[int]
    name: str
    prompt: str
    def __init__(self, name: _Optional[str] = ..., prompt: _Optional[str] = ...) -> None: ...

class StartAgentResult(_message.Message):
    __slots__ = ("success", "error")
    class Success(_message.Message):
        __slots__ = ("agent_id",)
        AGENT_ID_FIELD_NUMBER: _ClassVar[int]
        agent_id: str
        def __init__(self, agent_id: _Optional[str] = ...) -> None: ...
    class Error(_message.Message):
        __slots__ = ("error",)
        ERROR_FIELD_NUMBER: _ClassVar[int]
        error: str
        def __init__(self, error: _Optional[str] = ...) -> None: ...
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    success: StartAgentResult.Success
    error: StartAgentResult.Error
    def __init__(self, success: _Optional[_Union[StartAgentResult.Success, _Mapping]] = ..., error: _Optional[_Union[StartAgentResult.Error, _Mapping]] = ...) -> None: ...

class SendMessageToAgent(_message.Message):
    __slots__ = ("addresses", "subject", "message")
    ADDRESSES_FIELD_NUMBER: _ClassVar[int]
    SUBJECT_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    addresses: _containers.RepeatedScalarFieldContainer[str]
    subject: str
    message: str
    def __init__(self, addresses: _Optional[_Iterable[str]] = ..., subject: _Optional[str] = ..., message: _Optional[str] = ...) -> None: ...

class SendMessageToAgentResult(_message.Message):
    __slots__ = ("success", "error")
    class Success(_message.Message):
        __slots__ = ("message_id",)
        MESSAGE_ID_FIELD_NUMBER: _ClassVar[int]
        message_id: str
        def __init__(self, message_id: _Optional[str] = ...) -> None: ...
    class Error(_message.Message):
        __slots__ = ("message",)
        MESSAGE_FIELD_NUMBER: _ClassVar[int]
        message: str
        def __init__(self, message: _Optional[str] = ...) -> None: ...
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    success: SendMessageToAgentResult.Success
    error: SendMessageToAgentResult.Error
    def __init__(self, success: _Optional[_Union[SendMessageToAgentResult.Success, _Mapping]] = ..., error: _Optional[_Union[SendMessageToAgentResult.Error, _Mapping]] = ...) -> None: ...

class RawImage(_message.Message):
    __slots__ = ("data", "mime_type", "width", "height")
    DATA_FIELD_NUMBER: _ClassVar[int]
    MIME_TYPE_FIELD_NUMBER: _ClassVar[int]
    WIDTH_FIELD_NUMBER: _ClassVar[int]
    HEIGHT_FIELD_NUMBER: _ClassVar[int]
    data: bytes
    mime_type: str
    width: int
    height: int
    def __init__(self, data: _Optional[bytes] = ..., mime_type: _Optional[str] = ..., width: _Optional[int] = ..., height: _Optional[int] = ...) -> None: ...
