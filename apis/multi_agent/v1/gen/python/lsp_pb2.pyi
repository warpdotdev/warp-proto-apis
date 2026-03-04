from . import options_pb2 as _options_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class LspDescriptor(_message.Message):
    __slots__ = ("workspace_root", "server_name")
    WORKSPACE_ROOT_FIELD_NUMBER: _ClassVar[int]
    SERVER_NAME_FIELD_NUMBER: _ClassVar[int]
    workspace_root: str
    server_name: str
    def __init__(self, workspace_root: _Optional[str] = ..., server_name: _Optional[str] = ...) -> None: ...
