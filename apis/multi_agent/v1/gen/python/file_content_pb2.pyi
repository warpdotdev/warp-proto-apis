from . import options_pb2 as _options_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class FileContentLineRange(_message.Message):
    __slots__ = ("start", "end")
    START_FIELD_NUMBER: _ClassVar[int]
    END_FIELD_NUMBER: _ClassVar[int]
    start: int
    end: int
    def __init__(self, start: _Optional[int] = ..., end: _Optional[int] = ...) -> None: ...

class FileContent(_message.Message):
    __slots__ = ("file_path", "content", "line_range")
    FILE_PATH_FIELD_NUMBER: _ClassVar[int]
    CONTENT_FIELD_NUMBER: _ClassVar[int]
    LINE_RANGE_FIELD_NUMBER: _ClassVar[int]
    file_path: str
    content: str
    line_range: FileContentLineRange
    def __init__(self, file_path: _Optional[str] = ..., content: _Optional[str] = ..., line_range: _Optional[_Union[FileContentLineRange, _Mapping]] = ...) -> None: ...

class BinaryFileContent(_message.Message):
    __slots__ = ("file_path", "data")
    FILE_PATH_FIELD_NUMBER: _ClassVar[int]
    DATA_FIELD_NUMBER: _ClassVar[int]
    file_path: str
    data: bytes
    def __init__(self, file_path: _Optional[str] = ..., data: _Optional[bytes] = ...) -> None: ...

class AnyFileContent(_message.Message):
    __slots__ = ("binary_content", "text_content")
    BINARY_CONTENT_FIELD_NUMBER: _ClassVar[int]
    TEXT_CONTENT_FIELD_NUMBER: _ClassVar[int]
    binary_content: BinaryFileContent
    text_content: FileContent
    def __init__(self, binary_content: _Optional[_Union[BinaryFileContent, _Mapping]] = ..., text_content: _Optional[_Union[FileContent, _Mapping]] = ...) -> None: ...
