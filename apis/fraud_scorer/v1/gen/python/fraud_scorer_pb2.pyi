from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class ScoreRequest(_message.Message):
    __slots__ = ("multi_agent_request",)
    MULTI_AGENT_REQUEST_FIELD_NUMBER: _ClassVar[int]
    multi_agent_request: bytes
    def __init__(self, multi_agent_request: _Optional[bytes] = ...) -> None: ...

class ScoreResponse(_message.Message):
    __slots__ = ("score",)
    SCORE_FIELD_NUMBER: _ClassVar[int]
    score: float
    def __init__(self, score: _Optional[float] = ...) -> None: ...
