from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Suggestions(_message.Message):
    __slots__ = ("rules", "workflows")
    RULES_FIELD_NUMBER: _ClassVar[int]
    WORKFLOWS_FIELD_NUMBER: _ClassVar[int]
    rules: _containers.RepeatedCompositeFieldContainer[SuggestedRule]
    workflows: _containers.RepeatedCompositeFieldContainer[SuggestedAgentModeWorkflow]
    def __init__(self, rules: _Optional[_Iterable[_Union[SuggestedRule, _Mapping]]] = ..., workflows: _Optional[_Iterable[_Union[SuggestedAgentModeWorkflow, _Mapping]]] = ...) -> None: ...

class SuggestedRule(_message.Message):
    __slots__ = ("name", "content", "logging_id")
    NAME_FIELD_NUMBER: _ClassVar[int]
    CONTENT_FIELD_NUMBER: _ClassVar[int]
    LOGGING_ID_FIELD_NUMBER: _ClassVar[int]
    name: str
    content: str
    logging_id: str
    def __init__(self, name: _Optional[str] = ..., content: _Optional[str] = ..., logging_id: _Optional[str] = ...) -> None: ...

class SuggestedAgentModeWorkflow(_message.Message):
    __slots__ = ("name", "prompt", "logging_id")
    NAME_FIELD_NUMBER: _ClassVar[int]
    PROMPT_FIELD_NUMBER: _ClassVar[int]
    LOGGING_ID_FIELD_NUMBER: _ClassVar[int]
    name: str
    prompt: str
    logging_id: str
    def __init__(self, name: _Optional[str] = ..., prompt: _Optional[str] = ..., logging_id: _Optional[str] = ...) -> None: ...
