from . import options_pb2 as _options_pb2
from . import file_content_pb2 as _file_content_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class DocumentContent(_message.Message):
    __slots__ = ("document_id", "content", "line_range")
    DOCUMENT_ID_FIELD_NUMBER: _ClassVar[int]
    CONTENT_FIELD_NUMBER: _ClassVar[int]
    LINE_RANGE_FIELD_NUMBER: _ClassVar[int]
    document_id: str
    content: str
    line_range: _file_content_pb2.FileContentLineRange
    def __init__(self, document_id: _Optional[str] = ..., content: _Optional[str] = ..., line_range: _Optional[_Union[_file_content_pb2.FileContentLineRange, _Mapping]] = ...) -> None: ...
