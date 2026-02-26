import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file citations.proto.
 */
export declare const file_citations: GenFile;
/**
 * Citation represents a reference to a specific document or resource that was used by the LLM in generating
 * the response. Citations can be included both on the message level or on individual tool calls
 * It includes both the unique identifier of the document and its type classification.
 *
 * @generated from message warp.multi_agent.v1.Citation
 */
export type Citation = Message<"warp.multi_agent.v1.Citation"> & {
    /**
     * @generated from field: string document_id = 1;
     */
    documentId: string;
    /**
     * @generated from field: warp.multi_agent.v1.DocumentType document_type = 2;
     */
    documentType: DocumentType;
};
/**
 * Describes the message warp.multi_agent.v1.Citation.
 * Use `create(CitationSchema)` to create a new message.
 */
export declare const CitationSchema: GenMessage<Citation>;
/**
 * DocumentType represents the various types of documents that can be cited.
 *
 * @generated from enum warp.multi_agent.v1.DocumentType
 */
export declare enum DocumentType {
    /**
     * @generated from enum value: WARP_DRIVE_WORKFLOW = 0;
     */
    WARP_DRIVE_WORKFLOW = 0,
    /**
     * @generated from enum value: WARP_DRIVE_NOTEBOOK = 1;
     */
    WARP_DRIVE_NOTEBOOK = 1,
    /**
     * @generated from enum value: WARP_DRIVE_ENV_VAR = 2;
     */
    WARP_DRIVE_ENV_VAR = 2,
    /**
     * @generated from enum value: RULE = 3;
     */
    RULE = 3,
    /**
     * @generated from enum value: WARP_DOCUMENTATION = 4;
     */
    WARP_DOCUMENTATION = 4,
    /**
     * @generated from enum value: WEB_PAGE = 5;
     */
    WEB_PAGE = 5,
    /**
     * @generated from enum value: UNKNOWN = 6;
     */
    UNKNOWN = 6
}
/**
 * Describes the enum warp.multi_agent.v1.DocumentType.
 */
export declare const DocumentTypeSchema: GenEnum<DocumentType>;
