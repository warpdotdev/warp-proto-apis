from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class DocumentType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    WARP_DRIVE_WORKFLOW: _ClassVar[DocumentType]
    WARP_DRIVE_NOTEBOOK: _ClassVar[DocumentType]
    WARP_DRIVE_ENV_VAR: _ClassVar[DocumentType]
    RULE: _ClassVar[DocumentType]
    WARP_DOCUMENTATION: _ClassVar[DocumentType]
    WEB_PAGE: _ClassVar[DocumentType]
    UNKNOWN: _ClassVar[DocumentType]
WARP_DRIVE_WORKFLOW: DocumentType
WARP_DRIVE_NOTEBOOK: DocumentType
WARP_DRIVE_ENV_VAR: DocumentType
RULE: DocumentType
WARP_DOCUMENTATION: DocumentType
WEB_PAGE: DocumentType
UNKNOWN: DocumentType

class Citation(_message.Message):
    __slots__ = ("document_id", "document_type")
    DOCUMENT_ID_FIELD_NUMBER: _ClassVar[int]
    DOCUMENT_TYPE_FIELD_NUMBER: _ClassVar[int]
    document_id: str
    document_type: DocumentType
    def __init__(self, document_id: _Optional[str] = ..., document_type: _Optional[_Union[DocumentType, str]] = ...) -> None: ...
