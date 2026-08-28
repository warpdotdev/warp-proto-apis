use std::sync::LazyLock;

use prost_reflect::DescriptorPool;

static FILE_DESCRIPTOR_SET: &[u8] =
    include_bytes!(concat!(env!("OUT_DIR"), "/file_descriptor_set.bin"));

static DESCRIPTOR_POOL: LazyLock<DescriptorPool> = LazyLock::new(|| {
    DescriptorPool::decode(FILE_DESCRIPTOR_SET).expect("Failed to load file descriptor set")
});

pub static CONVERSATION_MUTATION_DESCRIPTOR: LazyLock<prost_reflect::MessageDescriptor> =
    LazyLock::new(|| {
        get_descriptor_pool()
            .get_message_by_name("warp.conversation_mutation.v1.ConversationMutation")
            .expect("Proto definition exists.")
    });

include!(concat!(
    env!("OUT_DIR"),
    "/warp.conversation_mutation.v1.rs"
));

/// Returns the descriptor pool for the generated types.
pub fn get_descriptor_pool() -> &'static DescriptorPool {
    &DESCRIPTOR_POOL
}
