from google.protobuf import empty_pb2 as _empty_pb2
from . import file_content_pb2 as _file_content_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class SkillDescriptor(_message.Message):
    __slots__ = ("path", "bundled_skill_id", "name", "description", "provider", "scope")
    class Provider(_message.Message):
        __slots__ = ("warp", "agents", "claude", "codex", "cursor", "gemini", "copilot", "droid", "github", "open_code")
        WARP_FIELD_NUMBER: _ClassVar[int]
        AGENTS_FIELD_NUMBER: _ClassVar[int]
        CLAUDE_FIELD_NUMBER: _ClassVar[int]
        CODEX_FIELD_NUMBER: _ClassVar[int]
        CURSOR_FIELD_NUMBER: _ClassVar[int]
        GEMINI_FIELD_NUMBER: _ClassVar[int]
        COPILOT_FIELD_NUMBER: _ClassVar[int]
        DROID_FIELD_NUMBER: _ClassVar[int]
        GITHUB_FIELD_NUMBER: _ClassVar[int]
        OPEN_CODE_FIELD_NUMBER: _ClassVar[int]
        warp: _empty_pb2.Empty
        agents: _empty_pb2.Empty
        claude: _empty_pb2.Empty
        codex: _empty_pb2.Empty
        cursor: _empty_pb2.Empty
        gemini: _empty_pb2.Empty
        copilot: _empty_pb2.Empty
        droid: _empty_pb2.Empty
        github: _empty_pb2.Empty
        open_code: _empty_pb2.Empty
        def __init__(self, warp: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ..., agents: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ..., claude: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ..., codex: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ..., cursor: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ..., gemini: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ..., copilot: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ..., droid: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ..., github: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ..., open_code: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ...) -> None: ...
    class Scope(_message.Message):
        __slots__ = ("home", "project", "bundled")
        HOME_FIELD_NUMBER: _ClassVar[int]
        PROJECT_FIELD_NUMBER: _ClassVar[int]
        BUNDLED_FIELD_NUMBER: _ClassVar[int]
        home: _empty_pb2.Empty
        project: _empty_pb2.Empty
        bundled: _empty_pb2.Empty
        def __init__(self, home: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ..., project: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ..., bundled: _Optional[_Union[_empty_pb2.Empty, _Mapping]] = ...) -> None: ...
    PATH_FIELD_NUMBER: _ClassVar[int]
    BUNDLED_SKILL_ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    PROVIDER_FIELD_NUMBER: _ClassVar[int]
    SCOPE_FIELD_NUMBER: _ClassVar[int]
    path: str
    bundled_skill_id: str
    name: str
    description: str
    provider: SkillDescriptor.Provider
    scope: SkillDescriptor.Scope
    def __init__(self, path: _Optional[str] = ..., bundled_skill_id: _Optional[str] = ..., name: _Optional[str] = ..., description: _Optional[str] = ..., provider: _Optional[_Union[SkillDescriptor.Provider, _Mapping]] = ..., scope: _Optional[_Union[SkillDescriptor.Scope, _Mapping]] = ...) -> None: ...

class Skill(_message.Message):
    __slots__ = ("descriptor", "content")
    DESCRIPTOR_FIELD_NUMBER: _ClassVar[int]
    CONTENT_FIELD_NUMBER: _ClassVar[int]
    descriptor: SkillDescriptor
    content: _file_content_pb2.FileContent
    def __init__(self, descriptor: _Optional[_Union[SkillDescriptor, _Mapping]] = ..., content: _Optional[_Union[_file_content_pb2.FileContent, _Mapping]] = ...) -> None: ...
