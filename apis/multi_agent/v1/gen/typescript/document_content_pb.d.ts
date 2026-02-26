import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { FileContentLineRange } from "./file_content_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file document_content.proto.
 */
export declare const file_document_content: GenFile;
/**
 * A representation of text content within a document.
 *
 * @generated from message warp.multi_agent.v1.DocumentContent
 */
export type DocumentContent = Message<"warp.multi_agent.v1.DocumentContent"> & {
    /**
     * @generated from field: string document_id = 1;
     */
    documentId: string;
    /**
     * @generated from field: string content = 2;
     */
    content: string;
    /**
     * @generated from field: warp.multi_agent.v1.FileContentLineRange line_range = 3;
     */
    lineRange?: FileContentLineRange;
};
/**
 * Describes the message warp.multi_agent.v1.DocumentContent.
 * Use `create(DocumentContentSchema)` to create a new message.
 */
export declare const DocumentContentSchema: GenMessage<DocumentContent>;
