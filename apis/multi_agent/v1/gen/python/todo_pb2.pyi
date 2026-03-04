from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class TodoItem(_message.Message):
    __slots__ = ("id", "title", "description")
    ID_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    id: str
    title: str
    description: str
    def __init__(self, id: _Optional[str] = ..., title: _Optional[str] = ..., description: _Optional[str] = ...) -> None: ...

class CreateTodoList(_message.Message):
    __slots__ = ("initial_todos",)
    INITIAL_TODOS_FIELD_NUMBER: _ClassVar[int]
    initial_todos: _containers.RepeatedCompositeFieldContainer[TodoItem]
    def __init__(self, initial_todos: _Optional[_Iterable[_Union[TodoItem, _Mapping]]] = ...) -> None: ...

class UpdatePendingTodos(_message.Message):
    __slots__ = ("updated_pending_todos",)
    UPDATED_PENDING_TODOS_FIELD_NUMBER: _ClassVar[int]
    updated_pending_todos: _containers.RepeatedCompositeFieldContainer[TodoItem]
    def __init__(self, updated_pending_todos: _Optional[_Iterable[_Union[TodoItem, _Mapping]]] = ...) -> None: ...

class MarkTodosCompleted(_message.Message):
    __slots__ = ("todo_ids",)
    TODO_IDS_FIELD_NUMBER: _ClassVar[int]
    todo_ids: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, todo_ids: _Optional[_Iterable[str]] = ...) -> None: ...
