// Contains types used for loading conversation data.
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_google_protobuf_go_features } from "@bufbuild/protobuf/wkt";
import { file_task } from "./task_pb";
/**
 * Describes the file conversation_data.proto.
 */
export const file_conversation_data = /*@__PURE__*/ fileDesc("Chdjb252ZXJzYXRpb25fZGF0YS5wcm90bxITd2FycC5tdWx0aV9hZ2VudC52MSJdChBDb252ZXJzYXRpb25EYXRhEigKBXRhc2tzGAEgAygLMhkud2FycC5tdWx0aV9hZ2VudC52MS5UYXNrEh8KE29yZGVyZWRfbWVzc2FnZV9pZHMYAiADKAlCAhgBQjhaLmdpdGh1Yi5jb20vd2FycC93YXJwLXByb3RvLWFwaXMvbXVsdGlfYWdlbnQvdjGSAwXSPgIQA2IIZWRpdGlvbnNw6Ac", [file_google_protobuf_go_features, file_task]);
/**
 * Describes the message warp.multi_agent.v1.ConversationData.
 * Use `create(ConversationDataSchema)` to create a new message.
 */
export const ConversationDataSchema = /*@__PURE__*/ messageDesc(file_conversation_data, 0);
