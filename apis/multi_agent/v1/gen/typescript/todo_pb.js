// TODO list types and operations for the multi-agent API.
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_google_protobuf_go_features } from "@bufbuild/protobuf/wkt";
/**
 * Describes the file todo.proto.
 */
export const file_todo = /*@__PURE__*/ fileDesc("Cgp0b2RvLnByb3RvEhN3YXJwLm11bHRpX2FnZW50LnYxIjoKCFRvZG9JdGVtEgoKAmlkGAEgASgJEg0KBXRpdGxlGAIgASgJEhMKC2Rlc2NyaXB0aW9uGAMgASgJIkYKDkNyZWF0ZVRvZG9MaXN0EjQKDWluaXRpYWxfdG9kb3MYASADKAsyHS53YXJwLm11bHRpX2FnZW50LnYxLlRvZG9JdGVtIlIKElVwZGF0ZVBlbmRpbmdUb2RvcxI8ChV1cGRhdGVkX3BlbmRpbmdfdG9kb3MYASADKAsyHS53YXJwLm11bHRpX2FnZW50LnYxLlRvZG9JdGVtIiYKEk1hcmtUb2Rvc0NvbXBsZXRlZBIQCgh0b2RvX2lkcxgBIAMoCUI4Wi5naXRodWIuY29tL3dhcnAvd2FycC1wcm90by1hcGlzL211bHRpX2FnZW50L3YxkgMF0j4CEANiCGVkaXRpb25zcOgH", [file_google_protobuf_go_features]);
/**
 * Describes the message warp.multi_agent.v1.TodoItem.
 * Use `create(TodoItemSchema)` to create a new message.
 */
export const TodoItemSchema = /*@__PURE__*/ messageDesc(file_todo, 0);
/**
 * Describes the message warp.multi_agent.v1.CreateTodoList.
 * Use `create(CreateTodoListSchema)` to create a new message.
 */
export const CreateTodoListSchema = /*@__PURE__*/ messageDesc(file_todo, 1);
/**
 * Describes the message warp.multi_agent.v1.UpdatePendingTodos.
 * Use `create(UpdatePendingTodosSchema)` to create a new message.
 */
export const UpdatePendingTodosSchema = /*@__PURE__*/ messageDesc(file_todo, 2);
/**
 * Describes the message warp.multi_agent.v1.MarkTodosCompleted.
 * Use `create(MarkTodosCompletedSchema)` to create a new message.
 */
export const MarkTodosCompletedSchema = /*@__PURE__*/ messageDesc(file_todo, 3);
