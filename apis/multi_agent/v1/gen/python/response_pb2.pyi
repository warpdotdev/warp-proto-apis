from google.protobuf import field_mask_pb2 as _field_mask_pb2
from . import options_pb2 as _options_pb2
from . import suggestions_pb2 as _suggestions_pb2
from . import task_pb2 as _task_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class LLMProvider(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    LLM_PROVIDER_UNKNOWN: _ClassVar[LLMProvider]
    LLM_PROVIDER_ANTHROPIC: _ClassVar[LLMProvider]
    LLM_PROVIDER_OPENAI: _ClassVar[LLMProvider]
    LLM_PROVIDER_GOOGLE: _ClassVar[LLMProvider]
    LLM_PROVIDER_XAI: _ClassVar[LLMProvider]
    LLM_PROVIDER_OPENROUTER: _ClassVar[LLMProvider]
    LLM_PROVIDER_AWS_BEDROCK: _ClassVar[LLMProvider]
LLM_PROVIDER_UNKNOWN: LLMProvider
LLM_PROVIDER_ANTHROPIC: LLMProvider
LLM_PROVIDER_OPENAI: LLMProvider
LLM_PROVIDER_GOOGLE: LLMProvider
LLM_PROVIDER_XAI: LLMProvider
LLM_PROVIDER_OPENROUTER: LLMProvider
LLM_PROVIDER_AWS_BEDROCK: LLMProvider

class ResponseEvent(_message.Message):
    __slots__ = ("init", "client_actions", "finished")
    class StreamInit(_message.Message):
        __slots__ = ("conversation_id", "request_id")
        CONVERSATION_ID_FIELD_NUMBER: _ClassVar[int]
        REQUEST_ID_FIELD_NUMBER: _ClassVar[int]
        conversation_id: str
        request_id: str
        def __init__(self, conversation_id: _Optional[str] = ..., request_id: _Optional[str] = ...) -> None: ...
    class ClientActions(_message.Message):
        __slots__ = ("actions",)
        ACTIONS_FIELD_NUMBER: _ClassVar[int]
        actions: _containers.RepeatedCompositeFieldContainer[ClientAction]
        def __init__(self, actions: _Optional[_Iterable[_Union[ClientAction, _Mapping]]] = ...) -> None: ...
    class StreamFinished(_message.Message):
        __slots__ = ("other", "done", "max_token_limit", "quota_limit", "context_window_exceeded", "llm_unavailable", "internal_error", "invalid_api_key", "token_usage", "should_refresh_model_config", "request_cost", "conversation_usage_metadata")
        class ConversationUsageMetadata(_message.Message):
            __slots__ = ("context_window_usage", "summarized", "credits_spent", "token_usage", "tool_usage_metadata", "warp_token_usage", "byok_token_usage")
            class WarpTokenUsageEntry(_message.Message):
                __slots__ = ("key", "value")
                KEY_FIELD_NUMBER: _ClassVar[int]
                VALUE_FIELD_NUMBER: _ClassVar[int]
                key: str
                value: ResponseEvent.StreamFinished.ModelTokenUsage
                def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[ResponseEvent.StreamFinished.ModelTokenUsage, _Mapping]] = ...) -> None: ...
            class ByokTokenUsageEntry(_message.Message):
                __slots__ = ("key", "value")
                KEY_FIELD_NUMBER: _ClassVar[int]
                VALUE_FIELD_NUMBER: _ClassVar[int]
                key: str
                value: ResponseEvent.StreamFinished.ModelTokenUsage
                def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[ResponseEvent.StreamFinished.ModelTokenUsage, _Mapping]] = ...) -> None: ...
            CONTEXT_WINDOW_USAGE_FIELD_NUMBER: _ClassVar[int]
            SUMMARIZED_FIELD_NUMBER: _ClassVar[int]
            CREDITS_SPENT_FIELD_NUMBER: _ClassVar[int]
            TOKEN_USAGE_FIELD_NUMBER: _ClassVar[int]
            TOOL_USAGE_METADATA_FIELD_NUMBER: _ClassVar[int]
            WARP_TOKEN_USAGE_FIELD_NUMBER: _ClassVar[int]
            BYOK_TOKEN_USAGE_FIELD_NUMBER: _ClassVar[int]
            context_window_usage: float
            summarized: bool
            credits_spent: float
            token_usage: _containers.RepeatedCompositeFieldContainer[ResponseEvent.StreamFinished.ModelTokenUsage]
            tool_usage_metadata: ResponseEvent.StreamFinished.ToolUsageMetadata
            warp_token_usage: _containers.MessageMap[str, ResponseEvent.StreamFinished.ModelTokenUsage]
            byok_token_usage: _containers.MessageMap[str, ResponseEvent.StreamFinished.ModelTokenUsage]
            def __init__(self, context_window_usage: _Optional[float] = ..., summarized: _Optional[bool] = ..., credits_spent: _Optional[float] = ..., token_usage: _Optional[_Iterable[_Union[ResponseEvent.StreamFinished.ModelTokenUsage, _Mapping]]] = ..., tool_usage_metadata: _Optional[_Union[ResponseEvent.StreamFinished.ToolUsageMetadata, _Mapping]] = ..., warp_token_usage: _Optional[_Mapping[str, ResponseEvent.StreamFinished.ModelTokenUsage]] = ..., byok_token_usage: _Optional[_Mapping[str, ResponseEvent.StreamFinished.ModelTokenUsage]] = ...) -> None: ...
        class ModelTokenUsage(_message.Message):
            __slots__ = ("model_id", "total_tokens", "token_usage_by_category")
            class TokenUsageByCategoryEntry(_message.Message):
                __slots__ = ("key", "value")
                KEY_FIELD_NUMBER: _ClassVar[int]
                VALUE_FIELD_NUMBER: _ClassVar[int]
                key: str
                value: int
                def __init__(self, key: _Optional[str] = ..., value: _Optional[int] = ...) -> None: ...
            MODEL_ID_FIELD_NUMBER: _ClassVar[int]
            TOTAL_TOKENS_FIELD_NUMBER: _ClassVar[int]
            TOKEN_USAGE_BY_CATEGORY_FIELD_NUMBER: _ClassVar[int]
            model_id: str
            total_tokens: int
            token_usage_by_category: _containers.ScalarMap[str, int]
            def __init__(self, model_id: _Optional[str] = ..., total_tokens: _Optional[int] = ..., token_usage_by_category: _Optional[_Mapping[str, int]] = ...) -> None: ...
        class ToolUsageMetadata(_message.Message):
            __slots__ = ("run_command_stats", "read_files_stats", "search_codebase_stats", "grep_stats", "file_glob_stats", "apply_file_diff_stats", "write_to_long_running_shell_command_stats", "read_mcp_resource_stats", "call_mcp_tool_stats", "suggest_plan_stats", "suggest_create_plan_stats", "read_shell_command_output_stats", "use_computer_stats")
            RUN_COMMAND_STATS_FIELD_NUMBER: _ClassVar[int]
            READ_FILES_STATS_FIELD_NUMBER: _ClassVar[int]
            SEARCH_CODEBASE_STATS_FIELD_NUMBER: _ClassVar[int]
            GREP_STATS_FIELD_NUMBER: _ClassVar[int]
            FILE_GLOB_STATS_FIELD_NUMBER: _ClassVar[int]
            APPLY_FILE_DIFF_STATS_FIELD_NUMBER: _ClassVar[int]
            WRITE_TO_LONG_RUNNING_SHELL_COMMAND_STATS_FIELD_NUMBER: _ClassVar[int]
            READ_MCP_RESOURCE_STATS_FIELD_NUMBER: _ClassVar[int]
            CALL_MCP_TOOL_STATS_FIELD_NUMBER: _ClassVar[int]
            SUGGEST_PLAN_STATS_FIELD_NUMBER: _ClassVar[int]
            SUGGEST_CREATE_PLAN_STATS_FIELD_NUMBER: _ClassVar[int]
            READ_SHELL_COMMAND_OUTPUT_STATS_FIELD_NUMBER: _ClassVar[int]
            USE_COMPUTER_STATS_FIELD_NUMBER: _ClassVar[int]
            run_command_stats: ResponseEvent.StreamFinished.RunCommandStats
            read_files_stats: ResponseEvent.StreamFinished.ToolCallStats
            search_codebase_stats: ResponseEvent.StreamFinished.ToolCallStats
            grep_stats: ResponseEvent.StreamFinished.ToolCallStats
            file_glob_stats: ResponseEvent.StreamFinished.ToolCallStats
            apply_file_diff_stats: ResponseEvent.StreamFinished.ApplyFileDiffStats
            write_to_long_running_shell_command_stats: ResponseEvent.StreamFinished.ToolCallStats
            read_mcp_resource_stats: ResponseEvent.StreamFinished.ToolCallStats
            call_mcp_tool_stats: ResponseEvent.StreamFinished.ToolCallStats
            suggest_plan_stats: ResponseEvent.StreamFinished.ToolCallStats
            suggest_create_plan_stats: ResponseEvent.StreamFinished.ToolCallStats
            read_shell_command_output_stats: ResponseEvent.StreamFinished.ToolCallStats
            use_computer_stats: ResponseEvent.StreamFinished.ToolCallStats
            def __init__(self, run_command_stats: _Optional[_Union[ResponseEvent.StreamFinished.RunCommandStats, _Mapping]] = ..., read_files_stats: _Optional[_Union[ResponseEvent.StreamFinished.ToolCallStats, _Mapping]] = ..., search_codebase_stats: _Optional[_Union[ResponseEvent.StreamFinished.ToolCallStats, _Mapping]] = ..., grep_stats: _Optional[_Union[ResponseEvent.StreamFinished.ToolCallStats, _Mapping]] = ..., file_glob_stats: _Optional[_Union[ResponseEvent.StreamFinished.ToolCallStats, _Mapping]] = ..., apply_file_diff_stats: _Optional[_Union[ResponseEvent.StreamFinished.ApplyFileDiffStats, _Mapping]] = ..., write_to_long_running_shell_command_stats: _Optional[_Union[ResponseEvent.StreamFinished.ToolCallStats, _Mapping]] = ..., read_mcp_resource_stats: _Optional[_Union[ResponseEvent.StreamFinished.ToolCallStats, _Mapping]] = ..., call_mcp_tool_stats: _Optional[_Union[ResponseEvent.StreamFinished.ToolCallStats, _Mapping]] = ..., suggest_plan_stats: _Optional[_Union[ResponseEvent.StreamFinished.ToolCallStats, _Mapping]] = ..., suggest_create_plan_stats: _Optional[_Union[ResponseEvent.StreamFinished.ToolCallStats, _Mapping]] = ..., read_shell_command_output_stats: _Optional[_Union[ResponseEvent.StreamFinished.ToolCallStats, _Mapping]] = ..., use_computer_stats: _Optional[_Union[ResponseEvent.StreamFinished.ToolCallStats, _Mapping]] = ...) -> None: ...
        class ToolCallStats(_message.Message):
            __slots__ = ("count",)
            COUNT_FIELD_NUMBER: _ClassVar[int]
            count: int
            def __init__(self, count: _Optional[int] = ...) -> None: ...
        class ApplyFileDiffStats(_message.Message):
            __slots__ = ("count", "lines_added", "lines_removed", "files_changed")
            COUNT_FIELD_NUMBER: _ClassVar[int]
            LINES_ADDED_FIELD_NUMBER: _ClassVar[int]
            LINES_REMOVED_FIELD_NUMBER: _ClassVar[int]
            FILES_CHANGED_FIELD_NUMBER: _ClassVar[int]
            count: int
            lines_added: int
            lines_removed: int
            files_changed: int
            def __init__(self, count: _Optional[int] = ..., lines_added: _Optional[int] = ..., lines_removed: _Optional[int] = ..., files_changed: _Optional[int] = ...) -> None: ...
        class RunCommandStats(_message.Message):
            __slots__ = ("count", "command_executed")
            COUNT_FIELD_NUMBER: _ClassVar[int]
            COMMAND_EXECUTED_FIELD_NUMBER: _ClassVar[int]
            count: int
            command_executed: int
            def __init__(self, count: _Optional[int] = ..., command_executed: _Optional[int] = ...) -> None: ...
        class RequestCost(_message.Message):
            __slots__ = ("exact",)
            EXACT_FIELD_NUMBER: _ClassVar[int]
            exact: float
            def __init__(self, exact: _Optional[float] = ...) -> None: ...
        class TokenUsage(_message.Message):
            __slots__ = ("model_id", "total_input", "output", "input_cache_read", "input_cache_write", "cost_in_cents")
            MODEL_ID_FIELD_NUMBER: _ClassVar[int]
            TOTAL_INPUT_FIELD_NUMBER: _ClassVar[int]
            OUTPUT_FIELD_NUMBER: _ClassVar[int]
            INPUT_CACHE_READ_FIELD_NUMBER: _ClassVar[int]
            INPUT_CACHE_WRITE_FIELD_NUMBER: _ClassVar[int]
            COST_IN_CENTS_FIELD_NUMBER: _ClassVar[int]
            model_id: str
            total_input: int
            output: int
            input_cache_read: int
            input_cache_write: int
            cost_in_cents: float
            def __init__(self, model_id: _Optional[str] = ..., total_input: _Optional[int] = ..., output: _Optional[int] = ..., input_cache_read: _Optional[int] = ..., input_cache_write: _Optional[int] = ..., cost_in_cents: _Optional[float] = ...) -> None: ...
        class Other(_message.Message):
            __slots__ = ()
            def __init__(self) -> None: ...
        class Done(_message.Message):
            __slots__ = ()
            def __init__(self) -> None: ...
        class ReachedMaxTokenLimit(_message.Message):
            __slots__ = ()
            def __init__(self) -> None: ...
        class QuotaLimit(_message.Message):
            __slots__ = ()
            def __init__(self) -> None: ...
        class ContextWindowExceeded(_message.Message):
            __slots__ = ()
            def __init__(self) -> None: ...
        class LLMUnavailable(_message.Message):
            __slots__ = ()
            def __init__(self) -> None: ...
        class InvalidApiKey(_message.Message):
            __slots__ = ("provider", "model_name")
            PROVIDER_FIELD_NUMBER: _ClassVar[int]
            MODEL_NAME_FIELD_NUMBER: _ClassVar[int]
            provider: LLMProvider
            model_name: str
            def __init__(self, provider: _Optional[_Union[LLMProvider, str]] = ..., model_name: _Optional[str] = ...) -> None: ...
        class InternalError(_message.Message):
            __slots__ = ("message",)
            MESSAGE_FIELD_NUMBER: _ClassVar[int]
            message: str
            def __init__(self, message: _Optional[str] = ...) -> None: ...
        OTHER_FIELD_NUMBER: _ClassVar[int]
        DONE_FIELD_NUMBER: _ClassVar[int]
        MAX_TOKEN_LIMIT_FIELD_NUMBER: _ClassVar[int]
        QUOTA_LIMIT_FIELD_NUMBER: _ClassVar[int]
        CONTEXT_WINDOW_EXCEEDED_FIELD_NUMBER: _ClassVar[int]
        LLM_UNAVAILABLE_FIELD_NUMBER: _ClassVar[int]
        INTERNAL_ERROR_FIELD_NUMBER: _ClassVar[int]
        INVALID_API_KEY_FIELD_NUMBER: _ClassVar[int]
        TOKEN_USAGE_FIELD_NUMBER: _ClassVar[int]
        SHOULD_REFRESH_MODEL_CONFIG_FIELD_NUMBER: _ClassVar[int]
        REQUEST_COST_FIELD_NUMBER: _ClassVar[int]
        CONVERSATION_USAGE_METADATA_FIELD_NUMBER: _ClassVar[int]
        other: ResponseEvent.StreamFinished.Other
        done: ResponseEvent.StreamFinished.Done
        max_token_limit: ResponseEvent.StreamFinished.ReachedMaxTokenLimit
        quota_limit: ResponseEvent.StreamFinished.QuotaLimit
        context_window_exceeded: ResponseEvent.StreamFinished.ContextWindowExceeded
        llm_unavailable: ResponseEvent.StreamFinished.LLMUnavailable
        internal_error: ResponseEvent.StreamFinished.InternalError
        invalid_api_key: ResponseEvent.StreamFinished.InvalidApiKey
        token_usage: _containers.RepeatedCompositeFieldContainer[ResponseEvent.StreamFinished.TokenUsage]
        should_refresh_model_config: bool
        request_cost: ResponseEvent.StreamFinished.RequestCost
        conversation_usage_metadata: ResponseEvent.StreamFinished.ConversationUsageMetadata
        def __init__(self, other: _Optional[_Union[ResponseEvent.StreamFinished.Other, _Mapping]] = ..., done: _Optional[_Union[ResponseEvent.StreamFinished.Done, _Mapping]] = ..., max_token_limit: _Optional[_Union[ResponseEvent.StreamFinished.ReachedMaxTokenLimit, _Mapping]] = ..., quota_limit: _Optional[_Union[ResponseEvent.StreamFinished.QuotaLimit, _Mapping]] = ..., context_window_exceeded: _Optional[_Union[ResponseEvent.StreamFinished.ContextWindowExceeded, _Mapping]] = ..., llm_unavailable: _Optional[_Union[ResponseEvent.StreamFinished.LLMUnavailable, _Mapping]] = ..., internal_error: _Optional[_Union[ResponseEvent.StreamFinished.InternalError, _Mapping]] = ..., invalid_api_key: _Optional[_Union[ResponseEvent.StreamFinished.InvalidApiKey, _Mapping]] = ..., token_usage: _Optional[_Iterable[_Union[ResponseEvent.StreamFinished.TokenUsage, _Mapping]]] = ..., should_refresh_model_config: _Optional[bool] = ..., request_cost: _Optional[_Union[ResponseEvent.StreamFinished.RequestCost, _Mapping]] = ..., conversation_usage_metadata: _Optional[_Union[ResponseEvent.StreamFinished.ConversationUsageMetadata, _Mapping]] = ...) -> None: ...
    INIT_FIELD_NUMBER: _ClassVar[int]
    CLIENT_ACTIONS_FIELD_NUMBER: _ClassVar[int]
    FINISHED_FIELD_NUMBER: _ClassVar[int]
    init: ResponseEvent.StreamInit
    client_actions: ResponseEvent.ClientActions
    finished: ResponseEvent.StreamFinished
    def __init__(self, init: _Optional[_Union[ResponseEvent.StreamInit, _Mapping]] = ..., client_actions: _Optional[_Union[ResponseEvent.ClientActions, _Mapping]] = ..., finished: _Optional[_Union[ResponseEvent.StreamFinished, _Mapping]] = ...) -> None: ...

class ClientAction(_message.Message):
    __slots__ = ("create_task", "add_messages_to_task", "update_task_message", "append_to_message_content", "show_suggestions", "update_task_summary", "update_task_description", "begin_transaction", "commit_transaction", "rollback_transaction", "start_new_conversation", "update_task_server_data", "move_messages_to_new_task")
    class CreateTask(_message.Message):
        __slots__ = ("task",)
        TASK_FIELD_NUMBER: _ClassVar[int]
        task: _task_pb2.Task
        def __init__(self, task: _Optional[_Union[_task_pb2.Task, _Mapping]] = ...) -> None: ...
    class UpdateTaskServerData(_message.Message):
        __slots__ = ("task_id", "server_data")
        TASK_ID_FIELD_NUMBER: _ClassVar[int]
        SERVER_DATA_FIELD_NUMBER: _ClassVar[int]
        task_id: str
        server_data: str
        def __init__(self, task_id: _Optional[str] = ..., server_data: _Optional[str] = ...) -> None: ...
    class UpdateTaskDescription(_message.Message):
        __slots__ = ("task_id", "description")
        TASK_ID_FIELD_NUMBER: _ClassVar[int]
        DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
        task_id: str
        description: str
        def __init__(self, task_id: _Optional[str] = ..., description: _Optional[str] = ...) -> None: ...
    class AddMessagesToTask(_message.Message):
        __slots__ = ("task_id", "messages")
        TASK_ID_FIELD_NUMBER: _ClassVar[int]
        MESSAGES_FIELD_NUMBER: _ClassVar[int]
        task_id: str
        messages: _containers.RepeatedCompositeFieldContainer[_task_pb2.Message]
        def __init__(self, task_id: _Optional[str] = ..., messages: _Optional[_Iterable[_Union[_task_pb2.Message, _Mapping]]] = ...) -> None: ...
    class UpdateTaskMessage(_message.Message):
        __slots__ = ("task_id", "message", "mask")
        TASK_ID_FIELD_NUMBER: _ClassVar[int]
        MESSAGE_FIELD_NUMBER: _ClassVar[int]
        MASK_FIELD_NUMBER: _ClassVar[int]
        task_id: str
        message: _task_pb2.Message
        mask: _field_mask_pb2.FieldMask
        def __init__(self, task_id: _Optional[str] = ..., message: _Optional[_Union[_task_pb2.Message, _Mapping]] = ..., mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...
    class AppendToMessageContent(_message.Message):
        __slots__ = ("task_id", "message", "mask")
        TASK_ID_FIELD_NUMBER: _ClassVar[int]
        MESSAGE_FIELD_NUMBER: _ClassVar[int]
        MASK_FIELD_NUMBER: _ClassVar[int]
        task_id: str
        message: _task_pb2.Message
        mask: _field_mask_pb2.FieldMask
        def __init__(self, task_id: _Optional[str] = ..., message: _Optional[_Union[_task_pb2.Message, _Mapping]] = ..., mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...
    class UpdateTaskSummary(_message.Message):
        __slots__ = ("task_id", "summary")
        TASK_ID_FIELD_NUMBER: _ClassVar[int]
        SUMMARY_FIELD_NUMBER: _ClassVar[int]
        task_id: str
        summary: str
        def __init__(self, task_id: _Optional[str] = ..., summary: _Optional[str] = ...) -> None: ...
    class BeginTransaction(_message.Message):
        __slots__ = ()
        def __init__(self) -> None: ...
    class CommitTransaction(_message.Message):
        __slots__ = ()
        def __init__(self) -> None: ...
    class RollbackTransaction(_message.Message):
        __slots__ = ()
        def __init__(self) -> None: ...
    class StartNewConversation(_message.Message):
        __slots__ = ("start_from_message_id",)
        START_FROM_MESSAGE_ID_FIELD_NUMBER: _ClassVar[int]
        start_from_message_id: str
        def __init__(self, start_from_message_id: _Optional[str] = ...) -> None: ...
    class MoveMessagesToNewTask(_message.Message):
        __slots__ = ("source_task_id", "new_task", "first_message_id", "last_message_id", "expected_message_count", "replacement_messages")
        SOURCE_TASK_ID_FIELD_NUMBER: _ClassVar[int]
        NEW_TASK_FIELD_NUMBER: _ClassVar[int]
        FIRST_MESSAGE_ID_FIELD_NUMBER: _ClassVar[int]
        LAST_MESSAGE_ID_FIELD_NUMBER: _ClassVar[int]
        EXPECTED_MESSAGE_COUNT_FIELD_NUMBER: _ClassVar[int]
        REPLACEMENT_MESSAGES_FIELD_NUMBER: _ClassVar[int]
        source_task_id: str
        new_task: _task_pb2.Task
        first_message_id: str
        last_message_id: str
        expected_message_count: int
        replacement_messages: _containers.RepeatedCompositeFieldContainer[_task_pb2.Message]
        def __init__(self, source_task_id: _Optional[str] = ..., new_task: _Optional[_Union[_task_pb2.Task, _Mapping]] = ..., first_message_id: _Optional[str] = ..., last_message_id: _Optional[str] = ..., expected_message_count: _Optional[int] = ..., replacement_messages: _Optional[_Iterable[_Union[_task_pb2.Message, _Mapping]]] = ...) -> None: ...
    CREATE_TASK_FIELD_NUMBER: _ClassVar[int]
    ADD_MESSAGES_TO_TASK_FIELD_NUMBER: _ClassVar[int]
    UPDATE_TASK_MESSAGE_FIELD_NUMBER: _ClassVar[int]
    APPEND_TO_MESSAGE_CONTENT_FIELD_NUMBER: _ClassVar[int]
    SHOW_SUGGESTIONS_FIELD_NUMBER: _ClassVar[int]
    UPDATE_TASK_SUMMARY_FIELD_NUMBER: _ClassVar[int]
    UPDATE_TASK_DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    BEGIN_TRANSACTION_FIELD_NUMBER: _ClassVar[int]
    COMMIT_TRANSACTION_FIELD_NUMBER: _ClassVar[int]
    ROLLBACK_TRANSACTION_FIELD_NUMBER: _ClassVar[int]
    START_NEW_CONVERSATION_FIELD_NUMBER: _ClassVar[int]
    UPDATE_TASK_SERVER_DATA_FIELD_NUMBER: _ClassVar[int]
    MOVE_MESSAGES_TO_NEW_TASK_FIELD_NUMBER: _ClassVar[int]
    create_task: ClientAction.CreateTask
    add_messages_to_task: ClientAction.AddMessagesToTask
    update_task_message: ClientAction.UpdateTaskMessage
    append_to_message_content: ClientAction.AppendToMessageContent
    show_suggestions: _suggestions_pb2.Suggestions
    update_task_summary: ClientAction.UpdateTaskSummary
    update_task_description: ClientAction.UpdateTaskDescription
    begin_transaction: ClientAction.BeginTransaction
    commit_transaction: ClientAction.CommitTransaction
    rollback_transaction: ClientAction.RollbackTransaction
    start_new_conversation: ClientAction.StartNewConversation
    update_task_server_data: ClientAction.UpdateTaskServerData
    move_messages_to_new_task: ClientAction.MoveMessagesToNewTask
    def __init__(self, create_task: _Optional[_Union[ClientAction.CreateTask, _Mapping]] = ..., add_messages_to_task: _Optional[_Union[ClientAction.AddMessagesToTask, _Mapping]] = ..., update_task_message: _Optional[_Union[ClientAction.UpdateTaskMessage, _Mapping]] = ..., append_to_message_content: _Optional[_Union[ClientAction.AppendToMessageContent, _Mapping]] = ..., show_suggestions: _Optional[_Union[_suggestions_pb2.Suggestions, _Mapping]] = ..., update_task_summary: _Optional[_Union[ClientAction.UpdateTaskSummary, _Mapping]] = ..., update_task_description: _Optional[_Union[ClientAction.UpdateTaskDescription, _Mapping]] = ..., begin_transaction: _Optional[_Union[ClientAction.BeginTransaction, _Mapping]] = ..., commit_transaction: _Optional[_Union[ClientAction.CommitTransaction, _Mapping]] = ..., rollback_transaction: _Optional[_Union[ClientAction.RollbackTransaction, _Mapping]] = ..., start_new_conversation: _Optional[_Union[ClientAction.StartNewConversation, _Mapping]] = ..., update_task_server_data: _Optional[_Union[ClientAction.UpdateTaskServerData, _Mapping]] = ..., move_messages_to_new_task: _Optional[_Union[ClientAction.MoveMessagesToNewTask, _Mapping]] = ...) -> None: ...
