use std::io::{Result, Write};
use regex::Regex;

fn main() -> Result<()> {
    let manifest_dir = std::path::PathBuf::from(std::env::var("CARGO_MANIFEST_DIR").unwrap());
    let proto_path = manifest_dir.parent().unwrap().parent().unwrap();

    let out_dir = std::path::PathBuf::from(std::env::var("OUT_DIR").unwrap());

    let mut proto_files = Vec::new();
    for proto in proto_path
        .read_dir()
        .unwrap()
        .map(|entry| entry.unwrap().path())
    {
        if !proto.extension().is_some_and(|ext| ext == "proto") {
            continue;
        }
        println!("cargo:rerun-if-changed={}", proto.display());

        let file_name = proto.file_name().unwrap();
        let out_path = out_dir.join(file_name);
        let mut out_file = std::fs::File::create(&out_path).unwrap();

        let proto_content = std::fs::read_to_string(&proto)
            .expect("Failed to read proto file");
        
        let content_step1 = proto_content.replace(r#"edition = "2023";"#, r#"syntax = "proto3";"#);
        
        let re_features = Regex::new(r"option features.*").unwrap();
        let content_step2 = re_features.replace_all(&content_step1, "").to_string();

        let modified_content = content_step2.replace(r#"import "google\/protobuf\/go_features.proto";"#, "");
        
        // Write the modified content to the output file
        out_file.write_all(modified_content.as_bytes())
            .expect("Failed to write to output file");

        proto_files.push(out_path);
    }

    prost_reflect_build::Builder::new()
        .descriptor_pool("crate::DESCRIPTOR_POOL")
        .compile_protos(&proto_files, &[out_dir])?;
    Ok(())
}
