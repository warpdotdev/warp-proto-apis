import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Empty, Timestamp } from "@bufbuild/protobuf/wkt";
import type { DocumentContent } from "./document_content_pb";
import type { FileContentLineRange } from "./file_content_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file attachment.proto.
 */
export declare const file_attachment: GenFile;
/**
 * @generated from message warp.multi_agent.v1.Attachment
 */
export type Attachment = Message<"warp.multi_agent.v1.Attachment"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.Attachment.value
     */
    value: {
        /**
         * @generated from field: string plain_text = 1;
         */
        value: string;
        case: "plainText";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.ExecutedShellCommand executed_shell_command = 2;
         */
        value: ExecutedShellCommand;
        case: "executedShellCommand";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.RunningShellCommand running_shell_command = 3;
         */
        value: RunningShellCommand;
        case: "runningShellCommand";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.DriveObject drive_object = 4;
         */
        value: DriveObject;
        case: "driveObject";
    } | {
        /**
         * Deprecated: Represent a hunk as a DiffSet of size 1.
         *
         * @generated from field: warp.multi_agent.v1.DiffHunk diff_hunk = 5 [deprecated = true];
         * @deprecated
         */
        value: DiffHunk;
        case: "diffHunk";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.DiffSet diff_set = 6;
         */
        value: DiffSet;
        case: "diffSet";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.DocumentContent document_content = 7;
         */
        value: DocumentContent;
        case: "documentContent";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.Attachment.
 * Use `create(AttachmentSchema)` to create a new message.
 */
export declare const AttachmentSchema: GenMessage<Attachment>;
/**
 * Information about shell commands that the user has executed.
 *
 * @generated from message warp.multi_agent.v1.ExecutedShellCommand
 */
export type ExecutedShellCommand = Message<"warp.multi_agent.v1.ExecutedShellCommand"> & {
    /**
     * @generated from field: string command = 1;
     */
    command: string;
    /**
     * @generated from field: string output = 2;
     */
    output: string;
    /**
     * @generated from field: int32 exit_code = 3;
     */
    exitCode: number;
    /**
     * @generated from field: string command_id = 4;
     */
    commandId: string;
    /**
     * @generated from field: google.protobuf.Timestamp started_ts = 5;
     */
    startedTs?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp finished_ts = 6;
     */
    finishedTs?: Timestamp;
    /**
     * `true` if the command was auto-attached.
     *
     * This is done by clients with `supports_auto_attached_commands` for user-executed commands in
     * the agent view.
     *
     * @generated from field: bool is_auto_attached = 7;
     */
    isAutoAttached: boolean;
};
/**
 * Describes the message warp.multi_agent.v1.ExecutedShellCommand.
 * Use `create(ExecutedShellCommandSchema)` to create a new message.
 */
export declare const ExecutedShellCommandSchema: GenMessage<ExecutedShellCommand>;
/**
 * @generated from message warp.multi_agent.v1.RunningShellCommand
 */
export type RunningShellCommand = Message<"warp.multi_agent.v1.RunningShellCommand"> & {
    /**
     * @generated from field: string command = 1;
     */
    command: string;
    /**
     * @generated from field: warp.multi_agent.v1.LongRunningShellCommandSnapshot snapshot = 2;
     */
    snapshot?: LongRunningShellCommandSnapshot;
};
/**
 * Describes the message warp.multi_agent.v1.RunningShellCommand.
 * Use `create(RunningShellCommandSchema)` to create a new message.
 */
export declare const RunningShellCommandSchema: GenMessage<RunningShellCommand>;
/**
 * A snapshot of the terminal grid for a long-running command.
 *
 * @generated from message warp.multi_agent.v1.LongRunningShellCommandSnapshot
 */
export type LongRunningShellCommandSnapshot = Message<"warp.multi_agent.v1.LongRunningShellCommandSnapshot"> & {
    /**
     * Raw output grid contents.
     *
     * @generated from field: string output = 1;
     */
    output: string;
    /**
     * The substring in 'output' used to represent the current cursor.
     *
     * This may be used by the server to find the cursor in `output` and change its formatting.
     *
     * @generated from field: string cursor = 2;
     */
    cursor: string;
    /**
     * "ID" of the command execution to be included in tool calls to write to or read from the
     * snapshotted command.
     *
     * @generated from field: string command_id = 3;
     */
    commandId: string;
};
/**
 * Describes the message warp.multi_agent.v1.LongRunningShellCommandSnapshot.
 * Use `create(LongRunningShellCommandSnapshotSchema)` to create a new message.
 */
export declare const LongRunningShellCommandSnapshotSchema: GenMessage<LongRunningShellCommandSnapshot>;
/**
 * @generated from message warp.multi_agent.v1.DriveObject
 */
export type DriveObject = Message<"warp.multi_agent.v1.DriveObject"> & {
    /**
     * @generated from field: string uid = 1;
     */
    uid: string;
    /**
     * @generated from oneof warp.multi_agent.v1.DriveObject.object_payload
     */
    objectPayload: {
        /**
         * @generated from field: warp.multi_agent.v1.Workflow workflow = 2;
         */
        value: Workflow;
        case: "workflow";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.Notebook notebook = 3;
         */
        value: Notebook;
        case: "notebook";
    } | {
        /**
         * @generated from field: warp.multi_agent.v1.GenericStringObject generic_string_object = 4;
         */
        value: GenericStringObject;
        case: "genericStringObject";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.DriveObject.
 * Use `create(DriveObjectSchema)` to create a new message.
 */
export declare const DriveObjectSchema: GenMessage<DriveObject>;
/**
 * @generated from message warp.multi_agent.v1.Workflow
 */
export type Workflow = Message<"warp.multi_agent.v1.Workflow"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: string command = 3;
     */
    command: string;
};
/**
 * Describes the message warp.multi_agent.v1.Workflow.
 * Use `create(WorkflowSchema)` to create a new message.
 */
export declare const WorkflowSchema: GenMessage<Workflow>;
/**
 * @generated from message warp.multi_agent.v1.Notebook
 */
export type Notebook = Message<"warp.multi_agent.v1.Notebook"> & {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string content = 2;
     */
    content: string;
};
/**
 * Describes the message warp.multi_agent.v1.Notebook.
 * Use `create(NotebookSchema)` to create a new message.
 */
export declare const NotebookSchema: GenMessage<Notebook>;
/**
 * @generated from message warp.multi_agent.v1.GenericStringObject
 */
export type GenericStringObject = Message<"warp.multi_agent.v1.GenericStringObject"> & {
    /**
     * @generated from field: string payload = 1;
     */
    payload: string;
    /**
     * Refers to the JSON type of the object such as "JsonEnvVarCollection" or "JsonAIFact"
     *
     * @generated from field: string object_type = 2;
     */
    objectType: string;
};
/**
 * Describes the message warp.multi_agent.v1.GenericStringObject.
 * Use `create(GenericStringObjectSchema)` to create a new message.
 */
export declare const GenericStringObjectSchema: GenMessage<GenericStringObject>;
/**
 * This has been deprecated.  Use DiffSets of size 1 instead.
 *
 * @generated from message warp.multi_agent.v1.DiffHunk
 */
export type DiffHunk = Message<"warp.multi_agent.v1.DiffHunk"> & {
    /**
     * @generated from field: string file_path = 1;
     */
    filePath: string;
    /**
     * @generated from field: warp.multi_agent.v1.FileContentLineRange line_range = 2;
     */
    lineRange?: FileContentLineRange;
    /**
     * @generated from field: string diff_content = 3;
     */
    diffContent: string;
    /**
     * @generated from field: uint32 lines_added = 4;
     */
    linesAdded: number;
    /**
     * @generated from field: uint32 lines_removed = 5;
     */
    linesRemoved: number;
    /**
     * @generated from oneof warp.multi_agent.v1.DiffHunk.current
     */
    current: {
        /**
         * @generated from field: string current_branch_name = 6;
         */
        value: string;
        case: "currentBranchName";
    } | {
        /**
         * @generated from field: string current_headless_commit_sha = 7;
         */
        value: string;
        case: "currentHeadlessCommitSha";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from oneof warp.multi_agent.v1.DiffHunk.base
     */
    base: {
        /**
         * @generated from field: string base_branch_name = 8;
         */
        value: string;
        case: "baseBranchName";
    } | {
        /**
         * @generated from field: string base_headless_commit_sha = 9;
         */
        value: string;
        case: "baseHeadlessCommitSha";
    } | {
        /**
         * @generated from field: google.protobuf.Empty uncommitted_changes = 10;
         */
        value: Empty;
        case: "uncommittedChanges";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.DiffHunk.
 * Use `create(DiffHunkSchema)` to create a new message.
 */
export declare const DiffHunkSchema: GenMessage<DiffHunk>;
/**
 * Reference to the current state (branch or commit)
 *
 * @generated from message warp.multi_agent.v1.CurrentRef
 */
export type CurrentRef = Message<"warp.multi_agent.v1.CurrentRef"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.CurrentRef.ref
     */
    ref: {
        /**
         * @generated from field: string branch_name = 1;
         */
        value: string;
        case: "branchName";
    } | {
        /**
         * @generated from field: string headless_commit_sha = 2;
         */
        value: string;
        case: "headlessCommitSha";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.CurrentRef.
 * Use `create(CurrentRefSchema)` to create a new message.
 */
export declare const CurrentRefSchema: GenMessage<CurrentRef>;
/**
 * Reference to the base state (branch, commit, or uncommitted changes)
 *
 * @generated from message warp.multi_agent.v1.BaseRef
 */
export type BaseRef = Message<"warp.multi_agent.v1.BaseRef"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.BaseRef.ref
     */
    ref: {
        /**
         * @generated from field: string branch_name = 1;
         */
        value: string;
        case: "branchName";
    } | {
        /**
         * @generated from field: string headless_commit_sha = 2;
         */
        value: string;
        case: "headlessCommitSha";
    } | {
        /**
         * @generated from field: google.protobuf.Empty uncommitted_changes = 3;
         */
        value: Empty;
        case: "uncommittedChanges";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.BaseRef.
 * Use `create(BaseRefSchema)` to create a new message.
 */
export declare const BaseRefSchema: GenMessage<BaseRef>;
/**
 * @generated from message warp.multi_agent.v1.DiffSet
 */
export type DiffSet = Message<"warp.multi_agent.v1.DiffSet"> & {
    /**
     * @generated from field: repeated warp.multi_agent.v1.DiffSet.DiffHunk hunks = 1;
     */
    hunks: DiffSet_DiffHunk[];
    /**
     * @generated from field: warp.multi_agent.v1.CurrentRef curr_ref = 2;
     */
    currRef?: CurrentRef;
    /**
     * @generated from field: warp.multi_agent.v1.BaseRef base_ref = 3;
     */
    baseRef?: BaseRef;
};
/**
 * Describes the message warp.multi_agent.v1.DiffSet.
 * Use `create(DiffSetSchema)` to create a new message.
 */
export declare const DiffSetSchema: GenMessage<DiffSet>;
/**
 * @generated from message warp.multi_agent.v1.DiffSet.DiffHunk
 */
export type DiffSet_DiffHunk = Message<"warp.multi_agent.v1.DiffSet.DiffHunk"> & {
    /**
     * @generated from field: string file_path = 1;
     */
    filePath: string;
    /**
     * @generated from field: warp.multi_agent.v1.FileContentLineRange line_range = 2;
     */
    lineRange?: FileContentLineRange;
    /**
     * @generated from field: string diff_content = 3;
     */
    diffContent: string;
    /**
     * @generated from field: uint32 lines_added = 4;
     */
    linesAdded: number;
    /**
     * @generated from field: uint32 lines_removed = 5;
     */
    linesRemoved: number;
};
/**
 * Describes the message warp.multi_agent.v1.DiffSet.DiffHunk.
 * Use `create(DiffSet_DiffHunkSchema)` to create a new message.
 */
export declare const DiffSet_DiffHunkSchema: GenMessage<DiffSet_DiffHunk>;
