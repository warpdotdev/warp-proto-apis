use std::io::Result;

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
        let out_file = std::fs::File::create(&out_path).unwrap();

        std::process::Command::new("sed")
            .args(["-e", r#"s/edition = "2023";/syntax = "proto3";/g"#])
            .args(["-e", r#"s/option features.*//g"#])
            .args([
                "-e",
                r#"s/import "google\/protobuf\/go_features.proto";//g"#,
            ])
            .arg(&proto)
            .stdout(out_file)
            .spawn()
            .expect("Failed to run sed");
        proto_files.push(out_path);
    }

    prost_reflect_build::Builder::new()
        .descriptor_pool("crate::DESCRIPTOR_POOL")
        .compile_protos(&proto_files, &[out_dir])?;
    Ok(())
}
