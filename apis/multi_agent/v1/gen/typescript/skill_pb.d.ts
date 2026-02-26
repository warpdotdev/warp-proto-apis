import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Empty } from "@bufbuild/protobuf/wkt";
import type { FileContent } from "./file_content_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file skill.proto.
 */
export declare const file_skill: GenFile;
/**
 * A complete descriptor of a skill without file content.
 *
 * @generated from message warp.multi_agent.v1.SkillDescriptor
 */
export type SkillDescriptor = Message<"warp.multi_agent.v1.SkillDescriptor"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.SkillDescriptor.skill_reference
     */
    skillReference: {
        /**
         * Path to the SKILL.md file defining this skill.
         *
         * @generated from field: string path = 1;
         */
        value: string;
        case: "path";
    } | {
        /**
         * Unique identifier for a skill bundled with the client.
         *
         * @generated from field: string bundled_skill_id = 4;
         */
        value: string;
        case: "bundledSkillId";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string description = 3;
     */
    description: string;
    /**
     * @generated from field: warp.multi_agent.v1.SkillDescriptor.Provider provider = 5;
     */
    provider?: SkillDescriptor_Provider;
    /**
     * @generated from field: warp.multi_agent.v1.SkillDescriptor.Scope scope = 6;
     */
    scope?: SkillDescriptor_Scope;
};
/**
 * Describes the message warp.multi_agent.v1.SkillDescriptor.
 * Use `create(SkillDescriptorSchema)` to create a new message.
 */
export declare const SkillDescriptorSchema: GenMessage<SkillDescriptor>;
/**
 * @generated from message warp.multi_agent.v1.SkillDescriptor.Provider
 */
export type SkillDescriptor_Provider = Message<"warp.multi_agent.v1.SkillDescriptor.Provider"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.SkillDescriptor.Provider.type
     */
    type: {
        /**
         * @generated from field: google.protobuf.Empty warp = 1;
         */
        value: Empty;
        case: "warp";
    } | {
        /**
         * @generated from field: google.protobuf.Empty agents = 2;
         */
        value: Empty;
        case: "agents";
    } | {
        /**
         * @generated from field: google.protobuf.Empty claude = 3;
         */
        value: Empty;
        case: "claude";
    } | {
        /**
         * @generated from field: google.protobuf.Empty codex = 4;
         */
        value: Empty;
        case: "codex";
    } | {
        /**
         * @generated from field: google.protobuf.Empty cursor = 5;
         */
        value: Empty;
        case: "cursor";
    } | {
        /**
         * @generated from field: google.protobuf.Empty gemini = 6;
         */
        value: Empty;
        case: "gemini";
    } | {
        /**
         * @generated from field: google.protobuf.Empty copilot = 7;
         */
        value: Empty;
        case: "copilot";
    } | {
        /**
         * @generated from field: google.protobuf.Empty droid = 8;
         */
        value: Empty;
        case: "droid";
    } | {
        /**
         * @generated from field: google.protobuf.Empty github = 9;
         */
        value: Empty;
        case: "github";
    } | {
        /**
         * @generated from field: google.protobuf.Empty open_code = 10;
         */
        value: Empty;
        case: "openCode";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.SkillDescriptor.Provider.
 * Use `create(SkillDescriptor_ProviderSchema)` to create a new message.
 */
export declare const SkillDescriptor_ProviderSchema: GenMessage<SkillDescriptor_Provider>;
/**
 * @generated from message warp.multi_agent.v1.SkillDescriptor.Scope
 */
export type SkillDescriptor_Scope = Message<"warp.multi_agent.v1.SkillDescriptor.Scope"> & {
    /**
     * @generated from oneof warp.multi_agent.v1.SkillDescriptor.Scope.type
     */
    type: {
        /**
         * @generated from field: google.protobuf.Empty home = 1;
         */
        value: Empty;
        case: "home";
    } | {
        /**
         * @generated from field: google.protobuf.Empty project = 2;
         */
        value: Empty;
        case: "project";
    } | {
        /**
         * @generated from field: google.protobuf.Empty bundled = 3;
         */
        value: Empty;
        case: "bundled";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message warp.multi_agent.v1.SkillDescriptor.Scope.
 * Use `create(SkillDescriptor_ScopeSchema)` to create a new message.
 */
export declare const SkillDescriptor_ScopeSchema: GenMessage<SkillDescriptor_Scope>;
/**
 * A full representation of a skill, including file content.
 * This should contain all the information necessary to recreate a ParsedSkill in the client.
 *
 * @generated from message warp.multi_agent.v1.Skill
 */
export type Skill = Message<"warp.multi_agent.v1.Skill"> & {
    /**
     * @generated from field: warp.multi_agent.v1.SkillDescriptor descriptor = 1;
     */
    descriptor?: SkillDescriptor;
    /**
     * @generated from field: warp.multi_agent.v1.FileContent content = 2;
     */
    content?: FileContent;
};
/**
 * Describes the message warp.multi_agent.v1.Skill.
 * Use `create(SkillSchema)` to create a new message.
 */
export declare const SkillSchema: GenMessage<Skill>;
