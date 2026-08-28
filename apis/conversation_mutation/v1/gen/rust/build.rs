use regex::Regex;
use std::io::{Result, Write};
use std::path::{Path, PathBuf};

fn proto_files(root: &Path) -> Result<Vec<PathBuf>> {
    let mut files = Vec::new();
    let mut directories = vec![root.to_owned()];
    while let Some(directory) = directories.pop() {
        for entry in directory.read_dir()? {
            let path = entry?.path();
            if path.is_dir() {
                directories.push(path);
            } else if path
                .extension()
                .is_some_and(|extension| extension == "proto")
            {
                files.push(path);
            }
        }
    }
    files.sort();
    Ok(files)
}

fn main() -> Result<()> {
    let manifest_dir = PathBuf::from(std::env::var("CARGO_MANIFEST_DIR").unwrap());
    let proto_path = manifest_dir.parent().unwrap().parent().unwrap();
    let out_dir = PathBuf::from(std::env::var("OUT_DIR").unwrap());

    let re_features = Regex::new(r"option features.*").unwrap();
    let re_reserved = Regex::new(r"(?m)^(\s*)reserved\s+([^;]+);").unwrap();
    let re_identifier = Regex::new(r"^[a-zA-Z_][a-zA-Z0-9_]*$").unwrap();

    let mut generated_proto_files = Vec::new();
    for proto in proto_files(proto_path)? {
        println!("cargo:rerun-if-changed={}", proto.display());

        let relative_path = proto.strip_prefix(proto_path).unwrap();
        let out_path = out_dir.join(relative_path);
        std::fs::create_dir_all(out_path.parent().unwrap())?;
        let mut out_file = std::fs::File::create(&out_path)?;

        let proto_content = std::fs::read_to_string(&proto)?;
        let modified_content = re_features
            .replace_all(&proto_content, "")
            .replace(r#"edition = "2023";"#, r#"syntax = "proto3";"#)
            .replace(r#"import "google/protobuf/go_features.proto";"#, "");

        let modified_content =
            re_reserved.replace_all(&modified_content, |captures: &regex::Captures<'_>| {
                let values = captures[2]
                    .split(',')
                    .map(|value| {
                        let value = value.trim();
                        if re_identifier.is_match(value) {
                            format!("\"{value}\"")
                        } else {
                            value.to_owned()
                        }
                    })
                    .collect::<Vec<_>>()
                    .join(", ");

                format!("{}reserved {values};", &captures[1])
            });

        out_file.write_all(modified_content.as_bytes())?;
        generated_proto_files.push(out_path);
    }

    prost_reflect_build::Builder::new()
        .descriptor_pool("crate::DESCRIPTOR_POOL")
        .compile_protos(&generated_proto_files, &[out_dir])?;
    Ok(())
}
