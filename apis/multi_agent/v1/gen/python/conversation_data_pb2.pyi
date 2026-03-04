from . import task_pb2 as _task_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ConversationData(_message.Message):
    __slots__ = ("tasks", "ordered_message_ids")
    TASKS_FIELD_NUMBER: _ClassVar[int]
    ORDERED_MESSAGE_IDS_FIELD_NUMBER: _ClassVar[int]
    tasks: _containers.RepeatedCompositeFieldContainer[_task_pb2.Task]
    ordered_message_ids: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, tasks: _Optional[_Iterable[_Union[_task_pb2.Task, _Mapping]]] = ..., ordered_message_ids: _Optional[_Iterable[str]] = ...) -> None: ...
