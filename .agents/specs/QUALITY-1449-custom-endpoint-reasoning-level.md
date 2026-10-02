# Spec: Custom endpoint reasoning-level wire contract

## Summary
QUALITY-1449 adds a semantically optional reasoning level to each custom model sent from the Warp client to warp-server. This repository owns only that wire contract and generated bindings; protocol-specific request behavior remains in warp-server, and persistence/UI behavior remains in the consuming repositories.

This spec adopts the shared working assumptions without reopening product alignment: the setting is per custom model; the values are `none`, `low`, `medium`, `high`, and `xhigh`; and an unset legacy value means “omit the provider-specific reasoning parameter,” preserving current behavior. If the product lead changes the value set before implementation, the field placement and number remain stable and only the enum values plus downstream mappings change.

## Key design choices
- Add `reasoning_level` to `Request.Settings.CustomModelProviders.CustomModel`, not `CustomModelProvider`, because one endpoint may expose models with different reasoning capabilities.
- Use a protobuf enum rather than a string so producers and consumers get generated, reviewable values instead of accepting misspellings or undocumented strings.
- Reserve enum value zero for `REASONING_LEVEL_UNSPECIFIED`; `REASONING_LEVEL_NONE` is a distinct explicit choice. This keeps old clients behaviorally unchanged.

## Wire contract
At `apis/multi_agent/v1/request.proto:554` on baseline `b0886a9523e2e05d102f61bd0a212dc15ade4835`, add this enum beside `CustomEndpointSchema`:

```proto
enum ReasoningLevel {
  REASONING_LEVEL_UNSPECIFIED = 0;
  REASONING_LEVEL_NONE = 1;
  REASONING_LEVEL_LOW = 2;
  REASONING_LEVEL_MEDIUM = 3;
  REASONING_LEVEL_HIGH = 4;
  REASONING_LEVEL_XHIGH = 5;
}
```

Add the field to `CustomModel` after `config_key`:

```proto
// Optional reasoning level for this model. Unspecified preserves legacy
// behavior: the server omits schema-specific reasoning configuration.
ReasoningLevel reasoning_level = 3;
```

The source uses protobuf edition 2023, whose generated Go API tracks scalar presence. The contract must nevertheless use `REASONING_LEVEL_UNSPECIFIED = 0` as its canonical absent state rather than depend on presence alone: the Rust crate’s build script converts the source to proto3 before Prost code generation, and zero is the representation shared by both consumers.

Backward-compatibility requirements:
- Requests from clients that do not know field `3` decode as `REASONING_LEVEL_UNSPECIFIED`.
- `REASONING_LEVEL_NONE` is never the enum default and must not be inferred from omission.
- Servers built from older schemas ignore the unknown field.
- Future enum values may be appended without renumbering existing values. A consumer that cannot interpret an enum number must apply the same behavior as `UNSPECIFIED`, not reject the whole custom-model registry.
- Field number `3` and all published enum numbers are permanent once merged; removed values must be reserved rather than reused.

## Cross-repo contract
This repository consumes the shared product decision led by the warp-server spec: per-model ownership, the five named levels, and unset meaning omit. It does not define provider-specific mappings or the Chat Completions tools policy.

This repository provides both consuming repositories with:
- `Request.Settings.CustomModelProviders.ReasoningLevel` and the stable numeric values above.
- `Request.Settings.CustomModelProviders.CustomModel.reasoning_level` at field `3`.
- Regenerated Go bindings in `apis/multi_agent/v1/gen/go/request.pb.go`.
- Rust bindings generated at consumer build time from the committed proto source; no Rust generated source is checked in here.

Consumption and merge order:
1. Implement and merge the warp-proto-apis PR first.
2. In `warpdotdev/warp`, update the `warp_multi_agent_api` Git revision in `Cargo.toml` and `Cargo.lock` to the finalized commit on `warp-proto-apis/main`, then serialize each personal custom model’s optional level.
3. In `warpdotdev/warp-server`, update the `github.com/warpdotdev/warp-proto-apis/apis/multi_agent` pseudo-version in `go.mod` and `go.sum` to that same finalized commit, then map the enum into runtime custom-model configuration.

Steps 2 and 3 may proceed in parallel after step 1; there is no ordering dependency between the two downstream repositories. During development they may temporarily pin an immutable commit from this PR, but both must re-pin to the finalized `main` commit before merge if the merge strategy changes the commit SHA.

QUALITY-1210 is orthogonal to this wire contract and may land first as a server-side safety default for Chat Completions with tools. This dial supplies the later explicit user selection; it does not encode or replace the server’s fallback policy. The warp-server spec decides how an explicit level and the QUALITY-1210 fallback interact.

## Design alternatives
- **Free-form string:** easier to pass future provider values without a proto update, but permits typos, weakens exhaustive mappings, and moves validation to runtime. Rejected in favor of an enum; adding a value remains a small additive proto change.
- **Provider-level field:** mirrors the existing `schema` placement but forces every model hosted by one endpoint to share a reasoning level. Rejected because product ownership is per custom model.
- **`NONE = 0`:** compact but changes omission from “use today’s behavior” to an explicit request for no reasoning. Rejected for backward compatibility.
- **Wrapper/oneof solely for optionality:** preserves presence in every generator but adds unnecessary generated types. Rejected because the explicit `UNSPECIFIED` sentinel carries the required cross-language semantics.

## Affected files
- `apis/multi_agent/v1/request.proto`
- `apis/multi_agent/v1/gen/go/request.pb.go` (generated by `./script/generate -a multi_agent -v v1`)

## Open questions resolved
- Placement: `CustomModel`, per the shared per-model ownership assumption.
- Optionality: semantic optionality through `UNSPECIFIED = 0`; no wrapper or oneof.
- Naming: wire field `reasoning_level`; enum `ReasoningLevel`; prefixed enum constants to avoid collisions and make generated references self-describing.
- Initial value set: `UNSPECIFIED`, `NONE`, `LOW`, `MEDIUM`, `HIGH`, `XHIGH`. Provider support restrictions belong in downstream UI/runtime mappings, not the transport.
- UI and provider request behavior are outside this repository’s scope.

## Risks and blast radius
- Renumbering enum values or using zero for `NONE` would silently reinterpret legacy payloads. Fixed numbers and the zero sentinel prevent this.
- The Go and Rust generators expose scalar presence differently. Downstream logic must map the zero sentinel, not assume identical presence APIs.
- Downstream repositories are SHA/pseudo-version pinned; failing to bump either leaves that consumer unable to reference the new generated type.
- This is a headless wire-schema change, so no computer-use validation applies in this repository.

## Validation and verification criteria
All criteria must pass before the proto implementation merges:

1. `request.proto` defines `ReasoningLevel` with exactly the numeric assignments in this spec and defines `CustomModel.reasoning_level` as field `3`; verify by reviewing the source diff and the generated descriptor in `request.pb.go`.
2. An omitted field decodes to `REASONING_LEVEL_UNSPECIFIED`, while an explicitly serialized `REASONING_LEVEL_NONE` decodes to `REASONING_LEVEL_NONE`; verify with a focused Go marshal/unmarshal check using the generated opaque builders/accessors.
3. Adding the field is wire-compatible with the pre-change descriptor: a pre-change reader ignores field `3`, and a post-change reader accepts a payload without it; verify with a descriptor or binary round-trip compatibility check rather than JSON-only serialization.
4. Run `./script/generate -a multi_agent -v v1` from the repository root and commit all resulting Go changes. Run the command a second time and verify it produces no meaningful diff, matching `.github/workflows/check-generated-code.yml`.
5. Run `go test ./...` from `apis/multi_agent` to compile and exercise the committed Go binding.
6. Run `cargo check --workspace` from the repository root to prove the Rust build-time generator accepts the new enum and field.
7. Verify the generated Go API exposes the `ReasoningLevel` enum plus `GetReasoningLevel`, `SetReasoningLevel`, `HasReasoningLevel`, and `ClearReasoningLevel` on `CustomModel`.
8. Before either downstream implementation merges, verify `warp` pins the finalized proto commit in both `Cargo.toml` and `Cargo.lock` and its affected packages compile; verify `warp-server` pins the corresponding Go pseudo-version in both `go.mod` and `go.sum` and its affected packages compile.

This is a pure data/contract schema change. A repository-specific behavioral regression test beyond the binary compatibility check is testing-exempt because it would only restate generated-code behavior; deterministic regeneration, cross-language compilation, and the two-direction wire checks are the required evidence.
