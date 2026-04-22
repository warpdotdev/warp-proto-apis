# warp-proto-apis

Repository to centralize protobuf-based APIs for Warp services and clients.
Maintains proto definitions alongside generated code for supported clients.

## General structure
```
warp-server-apis/
└── apis/
    └── <api>/
        └── <version>/
            ├── <api>.proto // or could be broken down into multiple .proto files
            └── gen/
                └── <bindings_for_lang>/
```

## Initial setup

Run `./script/bootstrap` to install proto compiler dependencies.

## Updating generated bindings

When updating the proto definitions, you will need to run the `./script/generate` script.  This will automatically update bindings for all supported languages.

For example, to update the `multi_agent` API:
```bash
./script/generate -a multi_agent -v v1
```

## Required dependencies
Must have `protoc` installed. See here on how to install for your platform: https://protobuf.dev/installation/.

### Go
Requires the `protoc-gen-go` plugin: `go install google.golang.org/protobuf/cmd/protoc-gen-go@latest`.

This is installed by the bootstrap script.

### Rust
There are no specific dependencies required for Rust, outside of the `protoc` compiler and a Rust toolchain.  The Rust code generation happens at compile time (as part of a Rust build script), so no additional setup is required and nothing needs to be regenerated and checked in when proto files are modified.

## License

This project is licensed under version 3 of the GNU Affero General Public License; see LICENSE.md.

Warp requires contributors to sign a contributor license agreement (CLA) before their contributions can be merged. You can read and sign our CLA at https://cla.warp.dev.
