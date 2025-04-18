use std::sync::LazyLock;

use prost_reflect::DescriptorPool;

static FILE_DESCRIPTOR_SET: &[u8] =
    include_bytes!(concat!(env!("OUT_DIR"), "/file_descriptor_set.bin"));

static DESCRIPTOR_POOL: LazyLock<DescriptorPool> = LazyLock::new(|| {
    DescriptorPool::decode(FILE_DESCRIPTOR_SET).expect("Failed to load file descriptor set")
});

// Re-export all generated types.
include!(concat!(env!("OUT_DIR"), "/warp.multi_agent.v1.rs"));

/// Returns the descriptor pool for the generated types.
///
/// This enables clients to use reflection APIs on the types defined
/// in this crate.
pub fn get_descriptor_pool() -> &'static DescriptorPool {
    &DESCRIPTOR_POOL
}
