import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Task } from "./task_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file conversation_data.proto.
 */
export declare const file_conversation_data: GenFile;
/**
 * Contains the data needed to save and continue a conversation on another machine.
 * This is the type stored in the ai_conversations GCS bucket.
 * It is also used as the response type for serving the final task list
 * after applying client actions in an MAA debug API.
 *
 * @generated from message warp.multi_agent.v1.ConversationData
 */
export type ConversationData = Message<"warp.multi_agent.v1.ConversationData"> & {
    /**
     * @generated from field: repeated warp.multi_agent.v1.Task tasks = 1;
     */
    tasks: Task[];
    /**
     * The linearized message IDs from the tasks above.
     * The client cannot derive this from tasks because
     * starting child tasks is a ServerEvent opaque to the client,
     * and those events are necessary to know the ordering of messages.
     * DEPRECATED: the Tasks themselves contain the information needed to linearize now.
     *
     * @generated from field: repeated string ordered_message_ids = 2 [deprecated = true];
     * @deprecated
     */
    orderedMessageIds: string[];
};
/**
 * Describes the message warp.multi_agent.v1.ConversationData.
 * Use `create(ConversationDataSchema)` to create a new message.
 */
export declare const ConversationDataSchema: GenMessage<ConversationData>;
