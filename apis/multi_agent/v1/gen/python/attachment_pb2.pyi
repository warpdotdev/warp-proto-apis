import datetime

from google.protobuf import empty_pb2 as _empty_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from . import document_content_pb2 as _document_content_pb2
from . import options_pb2 as _options_pb2
from . import file_content_pb2 as _file_content_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Attachment(_message.Message):
    __slots__ = ("plain_text", "executed_shell_command", "running_shell_command", "drive_object", "diff_hunk", "diff_set", "document_content", "file_path_reference")
    PLAIN_TEXT_FIELD_NUMBER: _ClassVar[int]
    EXECUTED_SHELL_COMMAND_FIELD_NUMBER: _ClassVar[int]
    RUNNING_SHELL_COMMAND_FIELD_NUMBER: _ClassVar[int]
    DRIVE_OBJECT_FIELD_NUMBER: _ClassVar[int]
    DIFF_HUNK_FIELD_NUMBER: _ClassVar[int]
    DIFF_SET_FIELD_NUMBER: _ClassVar[int]
    DOCUMENT_CONTENT_FIELD_NUMBER: _ClassVar[int]
    FILE_PATH_REFERENCE_FIELD_NUMBER: _ClassVar[int]
    plain_text: str
    executed_shell_command: ExecutedShellCommand
    running_shell_command: RunningShellCommand
    drive_object: DriveObject
    diff_hunk: DiffHunk
    diff_set: DiffSet
    document_content: _document_content_pb2.DocumentContent
    file_path_reference: FilePathReference
    def __init__(self, plain_text: _Optional[str] = ..., executed_shell_command: _Optional[_Union[ExecutedShellCommand, _Mapping]] = ..., running_shell_command: _Optional[_Union[RunningShellCommand, _Mapping]] = ..., drive_object: _Optional[_Union[DriveObject, _Mapping]] = ..., diff_hunk: _Optional[_Union[DiffHunk, _Mapping]] = ..., diff_set: _Optional[_Union[DiffSet, _Mapping]] = ..., document_content: _Optional[_Union[_document_content_pb2.DocumentContent, _Mapping]] = ..., file_path_reference: _Optional[_Union[FilePathReference, _Mapping]] = ...) -> None: ...

class ExecutedShellCommand(_message.Message):
    __slots__ = ("command", "output", "exit_code", "command_id", "started_ts", "finished_ts", "is_auto_attached")
    COMMAND_FIELD_NUMBER: _ClassVar[int]
    OUTPUT_FIELD_NUMBER: _ClassVar[int]
    EXIT_CODE_FIELD_NUMBER: _ClassVar[int]
    COMMAND_ID_FIELD_NUMBER: _ClassVar[int]
    STARTED_TS_FIELD_NUMBER: _ClassVar[int]
    FINISHED_TS_FIELD_NUMBER: _ClassVar[int]
    IS_AUTO_ATTACHED_FIELD_NUMBER: _ClassVar[int]
    command: str
    output: str
    exit_code: int
    command_id: str
    started_ts: _timestamp_pb2.Timestamp
    finished_ts: _timestamp_pb2.Timestamp
    is_auto_attached: bool
    def __init__(self, command: _Optional[str] = ..., output: _Optional[str] = ..., exit_code: _Optional[int] = ..., command_id: _Optional[str] = ..., started_ts: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., finished_ts: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., is_auto_attached: _Optional[bool] = ...) -> None: ...

class RunningShellCommand(_message.Message):
    __slots__ = ("command", "snapshot")
    COMMAND_FIELD_NUMBER: _ClassVar[int]
    SNAPSHOT_FIELD_NUMBER: _ClassVar[int]
    command: str
    snapshot: LongRunningShellCommandSnapshot
    def __init__(self, command: _Optional[str] = ..., snapshot: _Optional[_Union[LongRunningShellCommandSnapshot, _Mapping]] = ...) -> None: ...

class LongRunningShellCommandSnapshot(_message.Message):
    __slots__ = ("output", "cursor", "command_id")
    OUTPUT_FIELD_NUMBER: _ClassVar[int]
    CURSOR_FIELD_NUMBER: _ClassVar[int]
    COMMAND_ID_FIELD_NUMBER: _ClassVar[int]
    output: str
    cursor: str
    command_id: str
    def __init__(self, output: _Optional[str] = ..., cursor: _Optional[str] = ..., command_id: _Optional[str] = ...) -> None: ...

class DriveObject(_message.Message):
    __slots__ = ("uid", "workflow", "notebook", "generic_string_object")
    UID_FIELD_NUMBER: _ClassVar[int]
    WORKFLOW_FIELD_NUMBER: _ClassVar[int]
    NOTEBOOK_FIELD_NUMBER: _ClassVar[int]
    GENERIC_STRING_OBJECT_FIELD_NUMBER: _ClassVar[int]
    uid: str
    workflow: Workflow
    notebook: Notebook
    generic_string_object: GenericStringObject
    def __init__(self, uid: _Optional[str] = ..., workflow: _Optional[_Union[Workflow, _Mapping]] = ..., notebook: _Optional[_Union[Notebook, _Mapping]] = ..., generic_string_object: _Optional[_Union[GenericStringObject, _Mapping]] = ...) -> None: ...

class Workflow(_message.Message):
    __slots__ = ("name", "description", "command")
    NAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    COMMAND_FIELD_NUMBER: _ClassVar[int]
    name: str
    description: str
    command: str
    def __init__(self, name: _Optional[str] = ..., description: _Optional[str] = ..., command: _Optional[str] = ...) -> None: ...

class Notebook(_message.Message):
    __slots__ = ("title", "content")
    TITLE_FIELD_NUMBER: _ClassVar[int]
    CONTENT_FIELD_NUMBER: _ClassVar[int]
    title: str
    content: str
    def __init__(self, title: _Optional[str] = ..., content: _Optional[str] = ...) -> None: ...

class GenericStringObject(_message.Message):
    __slots__ = ("payload", "object_type")
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    OBJECT_TYPE_FIELD_NUMBER: _ClassVar[int]
    payload: str
    object_type: str
    def __init__(self, payload: _Optional[str] = ..., object_type: _Optional[str] = ...) -> None: ...

class DiffHunk(_message.Message):
    __slots__ = ("file_path", "line_range", "diff_content", "lines_added", "lines_removed", "current_branch_name", "current_headless_commit_sha", "base_branch_name", "base_headless_commit_sha", "uncommitted_changes")
    FILE_PATH_FIELD_NUMBER: _ClassVar[int]
    LINE_RANGE_FIELD_NUMBER: _ClassVar[int]
    DIFF_CONTENT_FIELD_NUMBER: _ClassVar[int]
    LINES_ADDED_FIELD_NUMBER: _ClassVar[int]
    LINES_REMOVED_FIELD_NUMBER: _ClassVar[int]
    CURRENT_BRANCH_NAME_FIELD_NUMBER: _ClassVar[int]
    CURRENT_HEADLESS_COMMIT_SHA_FIELD_NUMBER: _ClassVar[int]
    BASE_BRANCH_NAME_FIELD_NUMBER: _ClassVar[int]
    BASE_HEADLESS_COMMIT_SHA_FIELD_NUMBER: _ClassVar[int]
    UNCOMMITTED_CHANGES_FIELD_NUMBER: _ClassVar[int]
    file_path: str
    line_range: _file_content_pb2.FileContentLineRange
    diff_content: str
    lines_added: int
    lines_removed: int
    current_branch_name: str
    current_headless_commit_sha: str
    base_branch_name: str
    base_headless_commit_sha: str
    uncommitted_changes: _empty_pb2.Empty
    def __init__(self, file_path: _Optional[str] = ..., line_range: _Optional[_Union[_file_content_pb2.FileContentLineRange, _Mapping]] = ..., diff_content: _Optional[str] = ..., lines_added: _Optional[int] = ..., lines_removed: _Optional[int] = ..., current_branch_name: _Optional[str] = ..., current_headless_commit_sha: _Optional[str] = ..., base_branch_name: _Optional[str] = ..., base_headless_commit_sha: _Optional[str] = ..., uncommitted_changes: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ...) -> None: ...

class CurrentRef(_message.Message):
    __slots__ = ("branch_name", "headless_commit_sha")
    BRANCH_NAME_FIELD_NUMBER: _ClassVar[int]
    HEADLESS_COMMIT_SHA_FIELD_NUMBER: _ClassVar[int]
    branch_name: str
    headless_commit_sha: str
    def __init__(self, branch_name: _Optional[str] = ..., headless_commit_sha: _Optional[str] = ...) -> None: ...

class BaseRef(_message.Message):
    __slots__ = ("branch_name", "headless_commit_sha", "uncommitted_changes")
    BRANCH_NAME_FIELD_NUMBER: _ClassVar[int]
    HEADLESS_COMMIT_SHA_FIELD_NUMBER: _ClassVar[int]
    UNCOMMITTED_CHANGES_FIELD_NUMBER: _ClassVar[int]
    branch_name: str
    headless_commit_sha: str
    uncommitted_changes: _empty_pb2.Empty
    def __init__(self, branch_name: _Optional[str] = ..., headless_commit_sha: _Optional[str] = ..., uncommitted_changes: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ...) -> None: ...

class DiffSet(_message.Message):
    __slots__ = ("hunks", "curr_ref", "base_ref")
    class DiffHunk(_message.Message):
        __slots__ = ("file_path", "line_range", "diff_content", "lines_added", "lines_removed")
        FILE_PATH_FIELD_NUMBER: _ClassVar[int]
        LINE_RANGE_FIELD_NUMBER: _ClassVar[int]
        DIFF_CONTENT_FIELD_NUMBER: _ClassVar[int]
        LINES_ADDED_FIELD_NUMBER: _ClassVar[int]
        LINES_REMOVED_FIELD_NUMBER: _ClassVar[int]
        file_path: str
        line_range: _file_content_pb2.FileContentLineRange
        diff_content: str
        lines_added: int
        lines_removed: int
        def __init__(self, file_path: _Optional[str] = ..., line_range: _Optional[_Union[_file_content_pb2.FileContentLineRange, _Mapping]] = ..., diff_content: _Optional[str] = ..., lines_added: _Optional[int] = ..., lines_removed: _Optional[int] = ...) -> None: ...
    HUNKS_FIELD_NUMBER: _ClassVar[int]
    CURR_REF_FIELD_NUMBER: _ClassVar[int]
    BASE_REF_FIELD_NUMBER: _ClassVar[int]
    hunks: _containers.RepeatedCompositeFieldContainer[DiffSet.DiffHunk]
    curr_ref: CurrentRef
    base_ref: BaseRef
    def __init__(self, hunks: _Optional[_Iterable[_Union[DiffSet.DiffHunk, _Mapping]]] = ..., curr_ref: _Optional[_Union[CurrentRef, _Mapping]] = ..., base_ref: _Optional[_Union[BaseRef, _Mapping]] = ...) -> None: ...

class FilePathReference(_message.Message):
    __slots__ = ("file_path",)
    FILE_PATH_FIELD_NUMBER: _ClassVar[int]
    file_path: str
    def __init__(self, file_path: _Optional[str] = ...) -> None: ...
