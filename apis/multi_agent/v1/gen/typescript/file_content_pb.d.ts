import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file file_content.proto.
 */
export declare const file_file_content: GenFile;
/**
 * A range of lines [start, end] that situate content in a file, 1-indexed.
 *
 * @generated from message warp.multi_agent.v1.FileContentLineRange
 */
export type FileContentLineRange = Message<"warp.multi_agent.v1.FileContentLineRange"> & {
    /**
     * @generated from field: uint32 start = 1;
     */
    start: number;
    /**
     * @generated from field: uint32 end = 2;
     */
    end: number;
};
/**
 * Describes the message warp.multi_agent.v1.FileContentLineRange.
 * Use `create(FileContentLineRangeSchema)` to create a new message.
 */
export declare const FileContentLineRangeSchema: GenMessage<FileContentLineRange>;
/**
 * A representation of text content within a file.
 *
 * @generated from message warp.multi_agent.v1.FileContent
 */
export type FileContent = Message<"warp.multi_agent.v1.FileContent"> & {
    /**
     * @generated from field: string file_path = 1;
     */
    filePath: string;
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
 * Describes the message warp.multi_agent.v1.FileContent.
 * Use `create(FileContentSchema)` to create a new message.
 */
export declare const FileContentSchema: GenMessage<FileContent>;
/**
 * A representation of binary content within a file.
 *
 * @generated from message warp.multi_agent.v1.BinaryFileContent
 */
export type BinaryFileContent = Message<"warp.multi_agent.v1.BinaryFileContent"> & {
    /**
     * @generated from field: string file_path = 1;
     */
    filePath: string;
    /**
     * @generated from field: bytes data = 2;
     */
    data: Uint8Array;
};
/**
 * Describes the message warp.multi_agent.v1.BinaryFileContent.
 * Use `create(BinaryFileContentSchema)` to create a new message.
 */
export declare const BinaryFileContentSchema: GenMessage<BinaryFileContent>;
/**
 * A representation of binary or text content within a file.
 *
 * @generated from message warp.multi_agent.v1.AnyFileContent
 */
export type AnyFileContent = Message<"warp.multi_agent.v1.AnyFileContent"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.AnyFileContent.content
     */
    content: {
        /**
         * @generated from field: warp.multi_agent.v1.BinaryFileContent binary_content = 1;
         */
        value: BinaryFileContent;
        case: "binaryContent";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.FileContent text_content = 2;
         */
        value: FileContent;
        case: "textContent";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.AnyFileContent.
 * Use `create(AnyFileContentSchema)` to create a new message.
 */
export declare const AnyFileContentSchema: GenMessage<AnyFileContent>;
