import datetime

from google.protobuf import timestamp_pb2 as _timestamp_pb2
from . import file_content_pb2 as _file_content_pb2
from . import attachment_pb2 as _attachment_pb2
from . import options_pb2 as _options_pb2
from . import skill_pb2 as _skill_pb2
from . import lsp_pb2 as _lsp_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class InputContext(_message.Message):
    __slots__ = ("directory", "operating_system", "shell", "current_time", "codebases", "project_rules", "git", "updated_skills_context", "updated_lsp_servers_context", "executed_shell_commands", "selected_text", "images", "files")
    class SelectedText(_message.Message):
        __slots__ = ("text",)
        TEXT_FIELD_NUMBER: _ClassVar[int]
        text: str
        def __init__(self, text: _Optional[str] = ...) -> None: ...
    class Directory(_message.Message):
        __slots__ = ("pwd", "home", "pwd_file_symbols_indexed")
        PWD_FIELD_NUMBER: _ClassVar[int]
        HOME_FIELD_NUMBER: _ClassVar[int]
        PWD_FILE_SYMBOLS_INDEXED_FIELD_NUMBER: _ClassVar[int]
        pwd: str
        home: str
        pwd_file_symbols_indexed: bool
        def __init__(self, pwd: _Optional[str] = ..., home: _Optional[str] = ..., pwd_file_symbols_indexed: _Optional[bool] = ...) -> None: ...
    class Shell(_message.Message):
        __slots__ = ("name", "version")
        NAME_FIELD_NUMBER: _ClassVar[int]
        VERSION_FIELD_NUMBER: _ClassVar[int]
        name: str
        version: str
        def __init__(self, name: _Optional[str] = ..., version: _Optional[str] = ...) -> None: ...
    class OperatingSystem(_message.Message):
        __slots__ = ("platform", "distribution")
        PLATFORM_FIELD_NUMBER: _ClassVar[int]
        DISTRIBUTION_FIELD_NUMBER: _ClassVar[int]
        platform: str
        distribution: str
        def __init__(self, platform: _Optional[str] = ..., distribution: _Optional[str] = ...) -> None: ...
    class Image(_message.Message):
        __slots__ = ("data", "mime_type")
        DATA_FIELD_NUMBER: _ClassVar[int]
        MIME_TYPE_FIELD_NUMBER: _ClassVar[int]
        data: bytes
        mime_type: str
        def __init__(self, data: _Optional[bytes] = ..., mime_type: _Optional[str] = ...) -> None: ...
    class Codebase(_message.Message):
        __slots__ = ("name", "path")
        NAME_FIELD_NUMBER: _ClassVar[int]
        PATH_FIELD_NUMBER: _ClassVar[int]
        name: str
        path: str
        def __init__(self, name: _Optional[str] = ..., path: _Optional[str] = ...) -> None: ...
    class File(_message.Message):
        __slots__ = ("content",)
        CONTENT_FIELD_NUMBER: _ClassVar[int]
        content: _file_content_pb2.FileContent
        def __init__(self, content: _Optional[_Union[_file_content_pb2.FileContent, _Mapping]] = ...) -> None: ...
    class ProjectRules(_message.Message):
        __slots__ = ("root_path", "active_rule_files", "additional_rule_file_paths")
        ROOT_PATH_FIELD_NUMBER: _ClassVar[int]
        ACTIVE_RULE_FILES_FIELD_NUMBER: _ClassVar[int]
        ADDITIONAL_RULE_FILE_PATHS_FIELD_NUMBER: _ClassVar[int]
        root_path: str
        active_rule_files: _containers.RepeatedCompositeFieldContainer[_file_content_pb2.FileContent]
        additional_rule_file_paths: _containers.RepeatedScalarFieldContainer[str]
        def __init__(self, root_path: _Optional[str] = ..., active_rule_files: _Optional[_Iterable[_Union[_file_content_pb2.FileContent, _Mapping]]] = ..., additional_rule_file_paths: _Optional[_Iterable[str]] = ...) -> None: ...
    class Git(_message.Message):
        __slots__ = ("head",)
        HEAD_FIELD_NUMBER: _ClassVar[int]
        head: str
        def __init__(self, head: _Optional[str] = ...) -> None: ...
    class SkillsContext(_message.Message):
        __slots__ = ("available_skills",)
        AVAILABLE_SKILLS_FIELD_NUMBER: _ClassVar[int]
        available_skills: _containers.RepeatedCompositeFieldContainer[_skill_pb2.SkillDescriptor]
        def __init__(self, available_skills: _Optional[_Iterable[_Union[_skill_pb2.SkillDescriptor, _Mapping]]] = ...) -> None: ...
    class LspServersContext(_message.Message):
        __slots__ = ("available_lsp_servers",)
        AVAILABLE_LSP_SERVERS_FIELD_NUMBER: _ClassVar[int]
        available_lsp_servers: _containers.RepeatedCompositeFieldContainer[_lsp_pb2.LspDescriptor]
        def __init__(self, available_lsp_servers: _Optional[_Iterable[_Union[_lsp_pb2.LspDescriptor, _Mapping]]] = ...) -> None: ...
    DIRECTORY_FIELD_NUMBER: _ClassVar[int]
    OPERATING_SYSTEM_FIELD_NUMBER: _ClassVar[int]
    SHELL_FIELD_NUMBER: _ClassVar[int]
    CURRENT_TIME_FIELD_NUMBER: _ClassVar[int]
    CODEBASES_FIELD_NUMBER: _ClassVar[int]
    PROJECT_RULES_FIELD_NUMBER: _ClassVar[int]
    GIT_FIELD_NUMBER: _ClassVar[int]
    UPDATED_SKILLS_CONTEXT_FIELD_NUMBER: _ClassVar[int]
    UPDATED_LSP_SERVERS_CONTEXT_FIELD_NUMBER: _ClassVar[int]
    EXECUTED_SHELL_COMMANDS_FIELD_NUMBER: _ClassVar[int]
    SELECTED_TEXT_FIELD_NUMBER: _ClassVar[int]
    IMAGES_FIELD_NUMBER: _ClassVar[int]
    FILES_FIELD_NUMBER: _ClassVar[int]
    directory: InputContext.Directory
    operating_system: InputContext.OperatingSystem
    shell: InputContext.Shell
    current_time: _timestamp_pb2.Timestamp
    codebases: _containers.RepeatedCompositeFieldContainer[InputContext.Codebase]
    project_rules: _containers.RepeatedCompositeFieldContainer[InputContext.ProjectRules]
    git: InputContext.Git
    updated_skills_context: InputContext.SkillsContext
    updated_lsp_servers_context: InputContext.LspServersContext
    executed_shell_commands: _containers.RepeatedCompositeFieldContainer[_attachment_pb2.ExecutedShellCommand]
    selected_text: _containers.RepeatedCompositeFieldContainer[InputContext.SelectedText]
    images: _containers.RepeatedCompositeFieldContainer[InputContext.Image]
    files: _containers.RepeatedCompositeFieldContainer[InputContext.File]
    def __init__(self, directory: _Optional[_Union[InputContext.Directory, _Mapping]] = ..., operating_system: _Optional[_Union[InputContext.OperatingSystem, _Mapping]] = ..., shell: _Optional[_Union[InputContext.Shell, _Mapping]] = ..., current_time: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., codebases: _Optional[_Iterable[_Union[InputContext.Codebase, _Mapping]]] = ..., project_rules: _Optional[_Iterable[_Union[InputContext.ProjectRules, _Mapping]]] = ..., git: _Optional[_Union[InputContext.Git, _Mapping]] = ..., updated_skills_context: _Optional[_Union[InputContext.SkillsContext, _Mapping]] = ..., updated_lsp_servers_context: _Optional[_Union[InputContext.LspServersContext, _Mapping]] = ..., executed_shell_commands: _Optional[_Iterable[_Union[_attachment_pb2.ExecutedShellCommand, _Mapping]]] = ..., selected_text: _Optional[_Iterable[_Union[InputContext.SelectedText, _Mapping]]] = ..., images: _Optional[_Iterable[_Union[InputContext.Image, _Mapping]]] = ..., files: _Optional[_Iterable[_Union[InputContext.File, _Mapping]]] = ...) -> None: ...
