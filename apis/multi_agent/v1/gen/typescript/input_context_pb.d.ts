import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { FileContent } from "./file_content_pb";
import type { ExecutedShellCommand } from "./attachment_pb";
import type { SkillDescriptor } from "./skill_pb";
import type { LspDescriptor } from "./lsp_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file input_context.proto.
 */
export declare const file_input_context: GenFile;
/**
 * Context that may be relevant to the input in a request.
 *
 * @generated from message warp.multi_agent.v1.InputContext
 */
export type InputContext = Message<"warp.multi_agent.v1.InputContext"> & {
    /**
     * @generated from field: warp.multi_agent.v1.InputContext.Directory directory = 1;
     */
    directory?: InputContext_Directory;
    /**
     * @generated from field: warp.multi_agent.v1.InputContext.OperatingSystem operating_system = 2;
     */
    operatingSystem?: InputContext_OperatingSystem;
    /**
     * @generated from field: warp.multi_agent.v1.InputContext.Shell shell = 3;
     */
    shell?: InputContext_Shell;
    /**
     * @generated from field: google.protobuf.Timestamp current_time = 4;
     */
    currentTime?: Timestamp;
    /**
     * @generated from field: repeated warp.multi_agent.v1.InputContext.Codebase codebases = 8;
     */
    codebases: InputContext_Codebase[];
    /**
     * @generated from field: repeated warp.multi_agent.v1.InputContext.ProjectRules project_rules = 10;
     */
    projectRules: InputContext_ProjectRules[];
    /**
     * @generated from field: warp.multi_agent.v1.InputContext.Git git = 11;
     */
    git?: InputContext_Git;
    /**
     * Sent on each request when scoped skills change
     *
     * @generated from field: warp.multi_agent.v1.InputContext.SkillsContext updated_skills_context = 12;
     */
    updatedSkillsContext?: InputContext_SkillsContext;
    /**
     * Sent on each request when LSP servers change
     *
     * @generated from field: warp.multi_agent.v1.InputContext.LspServersContext updated_lsp_servers_context = 13;
     */
    updatedLspServersContext?: InputContext_LspServersContext;
    /**
     * TODO: these fields should be _attachments_, not part of the input context.
     *
     * @generated from field: repeated warp.multi_agent.v1.ExecutedShellCommand executed_shell_commands = 5 [deprecated = true];
     * @deprecated
     */
    executedShellCommands: ExecutedShellCommand[];
    /**
     * @generated from field: repeated warp.multi_agent.v1.InputContext.SelectedText selected_text = 6;
     */
    selectedText: InputContext_SelectedText[];
    /**
     * @generated from field: repeated warp.multi_agent.v1.InputContext.Image images = 7;
     */
    images: InputContext_Image[];
    /**
     * END TODO
     *
     * @generated from field: repeated warp.multi_agent.v1.InputContext.File files = 9;
     */
    files: InputContext_File[];
};
/**
 * Describes the message warp.multi_agent.v1.InputContext.
 * Use `create(InputContextSchema)` to create a new message.
 */
export declare const InputContextSchema: GenMessage<InputContext>;
/**
 * @generated from message warp.multi_agent.v1.InputContext.SelectedText
 */
export type InputContext_SelectedText = Message<"warp.multi_agent.v1.InputContext.SelectedText"> & {
    /**
     * @generated from field: string text = 1;
     */
    text: string;
};
/**
 * Describes the message warp.multi_agent.v1.InputContext.SelectedText.
 * Use `create(InputContext_SelectedTextSchema)` to create a new message.
 */
export declare const InputContext_SelectedTextSchema: GenMessage<InputContext_SelectedText>;
/**
 * Information about the user's directories.
 *
 * @generated from message warp.multi_agent.v1.InputContext.Directory
 */
export type InputContext_Directory = Message<"warp.multi_agent.v1.InputContext.Directory"> & {
    /**
     * @generated from field: string pwd = 1;
     */
    pwd: string;
    /**
     * @generated from field: string home = 2;
     */
    home: string;
    /**
     * @generated from field: bool pwd_file_symbols_indexed = 3;
     */
    pwdFileSymbolsIndexed: boolean;
};
/**
 * Describes the message warp.multi_agent.v1.InputContext.Directory.
 * Use `create(InputContext_DirectorySchema)` to create a new message.
 */
export declare const InputContext_DirectorySchema: GenMessage<InputContext_Directory>;
/**
 * Information about the user's terminal shell.
 *
 * @generated from message warp.multi_agent.v1.InputContext.Shell
 */
export type InputContext_Shell = Message<"warp.multi_agent.v1.InputContext.Shell"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string version = 2;
     */
    version: string;
};
/**
 * Describes the message warp.multi_agent.v1.InputContext.Shell.
 * Use `create(InputContext_ShellSchema)` to create a new message.
 */
export declare const InputContext_ShellSchema: GenMessage<InputContext_Shell>;
/**
 * Information about the user's operating system.
 *
 * @generated from message warp.multi_agent.v1.InputContext.OperatingSystem
 */
export type InputContext_OperatingSystem = Message<"warp.multi_agent.v1.InputContext.OperatingSystem"> & {
    /**
     * The OS "category", e.g. "MacOS" or "Linux".
     *
     * @generated from field: string platform = 1;
     */
    platform: string;
    /**
     * The OS distribution, which is typically only populated for Linux,
     * e.g. Fedora or Ubuntu.
     *
     * @generated from field: string distribution = 2;
     */
    distribution: string;
};
/**
 * Describes the message warp.multi_agent.v1.InputContext.OperatingSystem.
 * Use `create(InputContext_OperatingSystemSchema)` to create a new message.
 */
export declare const InputContext_OperatingSystemSchema: GenMessage<InputContext_OperatingSystem>;
/**
 * Any attached images.
 *
 * @generated from message warp.multi_agent.v1.InputContext.Image
 */
export type InputContext_Image = Message<"warp.multi_agent.v1.InputContext.Image"> & {
    /**
     * The image payload.
     *
     * TODO: the client should NOT base64 encode the image data.
     * It should send up raw binary data and the server should
     * do what it needs to (e.g. b64 encode before sending to LLM).
     *
     * @generated from field: bytes data = 1;
     */
    data: Uint8Array;
    /**
     * MIME type of the image content (e.g., "image/jpeg", "image/png").
     *
     * @generated from field: string mime_type = 2;
     */
    mimeType: string;
};
/**
 * Describes the message warp.multi_agent.v1.InputContext.Image.
 * Use `create(InputContext_ImageSchema)` to create a new message.
 */
export declare const InputContext_ImageSchema: GenMessage<InputContext_Image>;
/**
 * Information about a codebase on the user's machine that we can search.
 *
 * @generated from message warp.multi_agent.v1.InputContext.Codebase
 */
export type InputContext_Codebase = Message<"warp.multi_agent.v1.InputContext.Codebase"> & {
    /**
     * The name of the codebase.
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * The absolute path to the codebase on the user's machine.
     *
     * @generated from field: string path = 2;
     */
    path: string;
};
/**
 * Describes the message warp.multi_agent.v1.InputContext.Codebase.
 * Use `create(InputContext_CodebaseSchema)` to create a new message.
 */
export declare const InputContext_CodebaseSchema: GenMessage<InputContext_Codebase>;
/**
 * @generated from message warp.multi_agent.v1.InputContext.File
 */
export type InputContext_File = Message<"warp.multi_agent.v1.InputContext.File"> & {
    /**
     * @generated from field: warp.multi_agent.v1.FileContent content = 1;
     */
    content?: FileContent;
};
/**
 * Describes the message warp.multi_agent.v1.InputContext.File.
 * Use `create(InputContext_FileSchema)` to create a new message.
 */
export declare const InputContext_FileSchema: GenMessage<InputContext_File>;
/**
 * @generated from message warp.multi_agent.v1.InputContext.ProjectRules
 */
export type InputContext_ProjectRules = Message<"warp.multi_agent.v1.InputContext.ProjectRules"> & {
    /**
     * @generated from field: string root_path = 1;
     */
    rootPath: string;
    /**
     * Active rules that should be eagerly applied to the conversation.
     *
     * @generated from field: repeated warp.multi_agent.v1.FileContent active_rule_files = 2;
     */
    activeRuleFiles: FileContent[];
    /**
     * Additional rules that are available to be retrieved.
     *
     * @generated from field: repeated string additional_rule_file_paths = 3;
     */
    additionalRuleFilePaths: string[];
};
/**
 * Describes the message warp.multi_agent.v1.InputContext.ProjectRules.
 * Use `create(InputContext_ProjectRulesSchema)` to create a new message.
 */
export declare const InputContext_ProjectRulesSchema: GenMessage<InputContext_ProjectRules>;
/**
 * Context about the repo in the user's working directory.
 *
 * @generated from message warp.multi_agent.v1.InputContext.Git
 */
export type InputContext_Git = Message<"warp.multi_agent.v1.InputContext.Git"> & {
    /**
     * The user's current head (i.e. branch name or commit hash).
     *
     * @generated from field: string head = 1;
     */
    head: string;
};
/**
 * Describes the message warp.multi_agent.v1.InputContext.Git.
 * Use `create(InputContext_GitSchema)` to create a new message.
 */
export declare const InputContext_GitSchema: GenMessage<InputContext_Git>;
/**
 * @generated from message warp.multi_agent.v1.InputContext.SkillsContext
 */
export type InputContext_SkillsContext = Message<"warp.multi_agent.v1.InputContext.SkillsContext"> & {
    /**
     * @generated from field: repeated warp.multi_agent.v1.SkillDescriptor available_skills = 1;
     */
    availableSkills: SkillDescriptor[];
};
/**
 * Describes the message warp.multi_agent.v1.InputContext.SkillsContext.
 * Use `create(InputContext_SkillsContextSchema)` to create a new message.
 */
export declare const InputContext_SkillsContextSchema: GenMessage<InputContext_SkillsContext>;
/**
 * @generated from message warp.multi_agent.v1.InputContext.LspServersContext
 */
export type InputContext_LspServersContext = Message<"warp.multi_agent.v1.InputContext.LspServersContext"> & {
    /**
     * @generated from field: repeated warp.multi_agent.v1.LspDescriptor available_lsp_servers = 1;
     */
    availableLspServers: LspDescriptor[];
};
/**
 * Describes the message warp.multi_agent.v1.InputContext.LspServersContext.
 * Use `create(InputContext_LspServersContextSchema)` to create a new message.
 */
export declare const InputContext_LspServersContextSchema: GenMessage<InputContext_LspServersContext>;
