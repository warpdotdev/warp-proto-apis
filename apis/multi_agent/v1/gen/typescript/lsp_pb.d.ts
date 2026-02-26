import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file lsp.proto.
 */
export declare const file_lsp: GenFile;
/**
 * A descriptor for an LSP server instance that the client can report as available.
 *
 * @generated from message warp.multi_agent.v1.LspDescriptor
 */
export type LspDescriptor = Message<"warp.multi_agent.v1.LspDescriptor"> & {
    /**
     * Workspace root this server is associated with (repo/workspace path on the user's machine).
     *
     * @generated from field: string workspace_root = 1;
     */
    workspaceRoot: string;
    /**
     * The LSP server name (e.g. "rust-analyzer", "gopls", "pyright-langserver").
     *
     * @generated from field: string server_name = 2;
     */
    serverName: string;
};
/**
 * Describes the message warp.multi_agent.v1.LspDescriptor.
 * Use `create(LspDescriptorSchema)` to create a new message.
 */
export declare const LspDescriptorSchema: GenMessage<LspDescriptor>;
