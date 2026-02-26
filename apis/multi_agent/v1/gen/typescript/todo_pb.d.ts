import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file todo.proto.
 */
export declare const file_todo: GenFile;
/**
 * A single TODO item.
 *
 * @generated from message warp.multi_agent.v1.TodoItem
 */
export type TodoItem = Message<"warp.multi_agent.v1.TodoItem"> & {
    /**
     * Unique identifier for the TODO item.
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * The title/summary of the TODO item.
     *
     * @generated from field: string title = 2;
     */
    title: string;
    /**
     * Detailed description of the TODO item.
     *
     * @generated from field: string description = 3;
     */
    description: string;
};
/**
 * Describes the message warp.multi_agent.v1.TodoItem.
 * Use `create(TodoItemSchema)` to create a new message.
 */
export declare const TodoItemSchema: GenMessage<TodoItem>;
/**
 * Tool call to create a new TODO list.
 *
 * @generated from message warp.multi_agent.v1.CreateTodoList
 */
export type CreateTodoList = Message<"warp.multi_agent.v1.CreateTodoList"> & {
    /**
     * Initial TODO items for the new list (optional).
     *
     * @generated from field: repeated warp.multi_agent.v1.TodoItem initial_todos = 1;
     */
    initialTodos: TodoItem[];
};
/**
 * Describes the message warp.multi_agent.v1.CreateTodoList.
 * Use `create(CreateTodoListSchema)` to create a new message.
 */
export declare const CreateTodoListSchema: GenMessage<CreateTodoList>;
/**
 * @generated from message warp.multi_agent.v1.UpdatePendingTodos
 */
export type UpdatePendingTodos = Message<"warp.multi_agent.v1.UpdatePendingTodos"> & {
    /**
     * @generated from field: repeated warp.multi_agent.v1.TodoItem updated_pending_todos = 1;
     */
    updatedPendingTodos: TodoItem[];
};
/**
 * Describes the message warp.multi_agent.v1.UpdatePendingTodos.
 * Use `create(UpdatePendingTodosSchema)` to create a new message.
 */
export declare const UpdatePendingTodosSchema: GenMessage<UpdatePendingTodos>;
/**
 * @generated from message warp.multi_agent.v1.MarkTodosCompleted
 */
export type MarkTodosCompleted = Message<"warp.multi_agent.v1.MarkTodosCompleted"> & {
    /**
     * @generated from field: repeated string todo_ids = 1;
     */
    todoIds: string[];
};
/**
 * Describes the message warp.multi_agent.v1.MarkTodosCompleted.
 * Use `create(MarkTodosCompletedSchema)` to create a new message.
 */
export declare const MarkTodosCompletedSchema: GenMessage<MarkTodosCompleted>;
