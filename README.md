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

## Required dependencies
Must have `protoc` installed. See here on how to install for your platform: https://protobuf.dev/installation/.

### Go
Requires the `protoc-gen-go` plugin: `go install google.golang.org/protobuf/cmd/protoc-gen-go@latest`.

From the directory that contains the API's `.proto` files, Go bindings can be generated using:
```
protoc --go_out=gen/go --go_opt=paths=source_relative --proto_path=. *.proto
```

Workflow: https://staging.warp.dev/drive/workflow/Generate-Go-bindings-from-Protocol-Buffers-definition-KU8Kt2hwkgaTVgRDyvBy6A

### Rust
Generating Rust bindings is a little bit more involved:
1. Install `protoc-gen-prost` and `protoc-gen-prost-crate`: `cargo install protoc-gen-prost protoc-gen-prost-crate`. 
1. Create a bare library crate under `gen/rust`.
1. From the directory that contains the API's `.proto` files, Rust bindings can be generated using:
    ```
    protoc --prost_out=gen/rust/src *.proto
    ```
    Workflow: https://staging.warp.dev/drive/workflow/Generate-Rust-bindings-from-Protocol-Buffers-definition-QndPWGlVfrvukqmBZmBoZ6

TODO: the library we use to generate client stubs for Rust doesn't
support the "edition" feature: https://github.com/tokio-rs/prost/issues/1031.
So to generate Rust stubs in the meantime, we need to use
`syntax = "proto3"` in place of the `edition` line and remove the
API_OPAQUE feature (which relies on `edition` support).