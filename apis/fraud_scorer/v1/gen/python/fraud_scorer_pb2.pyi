from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class ScoreRequest(_message.Message):
    __slots__ = ("request_data",)
    REQUEST_DATA_FIELD_NUMBER: _ClassVar[int]
    request_data: bytes
    def __init__(self, request_data: _Optional[bytes] = ...) -> None: ...

class ScoreResponse(_message.Message):
    __slots__ = ("score",)
    SCORE_FIELD_NUMBER: _ClassVar[int]
    score: float
    def __init__(self, score: _Optional[float] = ...) -> None: ...
