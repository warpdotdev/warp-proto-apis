# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Overview

This repository centralizes protobuf-based APIs for Warp services and clients. It maintains proto definitions alongside generated code for supported languages (Go and Rust).

## Common Commands

### Initial Setup
```bash
./script/bootstrap
```
Installs required dependencies:
- `protoc` (via Homebrew on macOS)
- `protoc-gen-go` Go plugin

### Generating Language Bindings
After modifying any `.proto` files, regenerate bindings:
```bash
./script/generate -a <api> -v <version>
```

Example:
```bash
./script/generate -a multi_agent -v v1
```

This regenerates both Go and Rust bindings. The Go bindings are checked into git, while Rust bindings are generated at compile time via build scripts.

### Building Rust Crates
```bash
cargo build
```
or
```bash
cargo build --release
```

The Rust build process automatically generates bindings from proto files via `build.rs` scripts.

### Testing
```bash
cargo test
```

## Repository Structure

```
apis/
└── <api>/              # e.g., multi_agent
    └── <version>/      # e.g., v1
        ├── *.proto     # Proto definitions (may be multiple files)
        └── gen/
            ├── go/     # Generated Go bindings (checked in)
            └── rust/   # Rust crate with build.rs (bindings generated at compile time)
```

### Current APIs
- `multi_agent/v1`: The primary API for Warp's multi-agent system, defining request/response messages, tasks, tool calls, and client actions

## Code Generation Architecture

### Go
- Uses `protoc-gen-go` plugin
- Generated `.pb.go` files are checked into version control
- Must be regenerated manually via `./script/generate` after proto changes
- Each API version has its own Go module at `apis/<api>/<version>/gen/go`
- Module path: `github.com/warpdotdev/warp-proto-apis/apis/<api>/<version>/gen/go`

### Rust
- Uses `prost` and `prost-reflect` crates
- Code generation happens at **compile time** via `build.rs` build scripts
- Generated bindings are **not** checked into git
- Build script preprocesses proto files to:
  - Remove `option features.*` directives
  - Convert `edition = "2023"` to `syntax = "proto3"`
  - Quote reserved identifiers
  - Remove Go-specific imports
- Workspace dependencies are defined in root `Cargo.toml`

## Proto File Conventions

### Sensitive Fields
String fields containing sensitive information (PII, API keys, etc.) must be marked with the `(sensitive)` option:
```protobuf
string api_key = 1 [ (sensitive) = true ];
```

When creating PRs, verify that all sensitive string fields are properly marked. See the PR template checklist.

### Internal Fields
Fields that should only be populated by internal users (WarpDev/WarpLocal clients) can be marked with `(internal)`:
```protobuf
repeated TokenUsage token_usage = 8 [ (internal) = true ];
```

### Proto3 Editions
The repository uses proto `edition = "2023"`, which is automatically converted to `syntax = "proto3"` for Rust compilation.

## CI/CD

The repository has a GitHub Actions workflow that validates generated code is up-to-date:
- Runs on pushes and PRs to `main`
- Executes `./script/bootstrap` and `./script/generate`
- Fails if generated Go code differs from what's checked in

**Important**: Always run `./script/generate` after modifying proto files and commit the generated Go code changes.

## Dependencies

### Required
- `protoc` (Protocol Buffer compiler)
- Go toolchain (for Go generation)
- Rust toolchain 1.84.1 (specified in `rust-toolchain.toml`)

### Go Dependencies
- `google.golang.org/protobuf` v1.36.6

### Rust Workspace Dependencies
- `prost` 0.13
- `prost-types` 0.13
- `prost-reflect` 0.15.1
- `prost-reflect-build` 0.15.0

## Tips for Development

### Adding a New Proto File
1. Create the `.proto` file in the appropriate `apis/<api>/<version>/` directory
2. Run `./script/generate -a <api> -v <version>`
3. Commit both the new proto file and the generated Go code
4. Rust bindings will be automatically generated at compile time

### Modifying Existing Proto Files
1. Edit the proto file
2. Run `./script/generate -a <api> -v <version>` to update Go bindings
3. For Rust, run `cargo build` to verify the build script handles the changes correctly
4. Commit both proto and generated Go changes

### Working with Multi-Agent API
The `multi_agent/v1` API is the core communication protocol between Warp clients and the multi-agent backend. Key message types:
- `Request`: Client requests with task context, user input, settings, and metadata
- `ResponseEvent`: Streamed server responses with `ClientAction` directives
- `Task`: Work units containing messages (queries, agent outputs, tool calls, etc.)
- `Message`: Individual conversation elements with various types (UserQuery, AgentOutput, ToolCall, etc.)

### Branch Naming
Prefix branch names with your username: `username/feature-name`
