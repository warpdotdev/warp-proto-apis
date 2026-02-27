# warp-proto-apis

Repository to centralize protobuf-based APIs for Warp services and clients.
Maintains proto definitions alongside generated code for supported clients.

## General structure
```
warp-proto-apis/
└── apis/
    └── <api>/
        └── <version>/
            ├── <api>.proto // or could be broken down into multiple .proto files
            └── gen/
                └── <bindings_for_lang>/
```

## Installing TypeScript bindings from GitHub

Install the package from a pinned commit:

```bash
npm install @warp/multi-agent-api-v1@github:warpdotdev/warp-proto-apis#<commit-sha>
```

or:

```bash
pnpm add @warp/multi-agent-api-v1@github:warpdotdev/warp-proto-apis#<commit-sha>
```

Requirements for Git installs:
- Node.js 18+
- `git`
- `protoc` in `PATH` (https://protobuf.dev/installation/)

Example import:

```ts
import { RequestSchema } from "@warp/multi-agent-api-v1/request_pb";
```

## Initial setup

Run `./script/bootstrap` to install proto compiler dependencies.

## Updating generated bindings

When updating the proto definitions, run:

```bash
./script/generate -a multi_agent -v v1
```

This updates checked-in Go bindings.

### Go
Requires the `protoc-gen-go` plugin: `go install google.golang.org/protobuf/cmd/protoc-gen-go@latest`.

This is installed by the bootstrap script.

### TypeScript
TypeScript bindings are generated during package install via the root `prepare` script and are not checked into git.
To generate them locally:

```bash
npm install
npm run generate:ts
```

This writes generated files to `generated/`. The generated code depends on `@bufbuild/protobuf` at runtime.

### Rust
There are no specific dependencies required for Rust, outside of the `protoc` compiler and a Rust toolchain.  The Rust code generation happens at compile time (as part of a Rust build script), so no additional setup is required and nothing needs to be regenerated and checked in when proto files are modified.

## License

This project is licensed under version 3 of the GNU Affero General Public License; see LICENSE.md.

Warp requires contributors to sign a contributor license agreement (CLA) before their contributions can be merged. You can read and sign our CLA at https://cla.warp.dev.
