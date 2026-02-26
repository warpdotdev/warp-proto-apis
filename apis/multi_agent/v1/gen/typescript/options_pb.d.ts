import type { GenExtension, GenFile } from "@bufbuild/protobuf/codegenv2";
import type { FieldOptions } from "@bufbuild/protobuf/wkt";
/**
 * Describes the file options.proto.
 */
export declare const file_options: GenFile;
/**
 * Indicates that the field might contain sensitive information (e.g. PII).
 *
 * Can be applied to:
 * scalars: strings, bytes
 * repeated fields where the repeated item is a supported scalar
 * map fields where the value is a supported scalar
 *
 * @generated from extension: bool sensitive = 50000;
 */
export declare const sensitive: GenExtension<FieldOptions, boolean>;
/**
 * Indicates the field should only be populated when the request is made by an internal user.
 *
 * E.g., comes from a WarpDev or WarpLocal client.
 *
 * @generated from extension: bool internal = 50001;
 */
export declare const internal: GenExtension<FieldOptions, boolean>;
