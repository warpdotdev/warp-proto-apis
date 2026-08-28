use prost::Message;
use warp_conversation_mutation_api::{
    author, conversation_mutation, execution_mutation, get_descriptor_pool, media_reference,
    origin, AcceptedMessageContext, Attribution, Author, ConversationMutation, ExecutionMutation,
    MediaReference, MutationIdentity, Origin, SchemaVersion, SourceDeliveryReference,
};

#[test]
fn top_level_field_numbers_are_stable() {
    let mutation = get_descriptor_pool()
        .get_message_by_name("warp.conversation_mutation.v1.ConversationMutation")
        .expect("conversation mutation descriptor");

    let expected = [
        ("schema_version", 1),
        ("identity", 2),
        ("attribution", 3),
        ("occurred_at", 4),
        ("execution", 10),
        ("entry", 11),
        ("content", 12),
        ("action", 13),
        ("delivery", 14),
        ("interruption", 15),
        ("control", 16),
    ];

    for (name, number) in expected {
        assert_eq!(
            mutation
                .get_field_by_name(name)
                .unwrap_or_else(|| panic!("missing {name}"))
                .number(),
            number
        );
    }

    let oneof = mutation
        .oneofs()
        .find(|oneof| oneof.name() == "mutation")
        .expect("mutation oneof");
    assert_eq!(oneof.fields().count(), 7);
}

#[test]
fn options_descriptors_are_namespaced_across_linked_modules() {
    assert!(get_descriptor_pool()
        .get_file_by_name("warp/conversation_mutation/v1/options.proto")
        .is_some());
    assert!(warp_multi_agent_api::get_descriptor_pool()
        .get_file_by_name("options.proto")
        .is_some());
}

#[test]
fn accepted_message_context_is_compact_and_versioned() {
    let context = get_descriptor_pool()
        .get_message_by_name("warp.conversation_mutation.v1.AcceptedMessageContext")
        .expect("accepted message context descriptor");

    let fields = context
        .fields()
        .map(|field| (field.name().to_owned(), field.number()))
        .collect::<Vec<_>>();
    assert_eq!(
        fields,
        [
            ("schema_version".into(), 1),
            ("conversation_id".into(), 2),
            ("execution_id".into(), 3),
            ("message_id".into(), 4),
            ("attribution".into(), 5),
            ("media".into(), 6),
        ]
    );
}

#[test]
fn accepted_message_context_round_trips_with_canonical_references() {
    let context = AcceptedMessageContext {
        schema_version: SchemaVersion::V1 as i32,
        conversation_id: "conversation".into(),
        execution_id: "execution".into(),
        message_id: "message".into(),
        attribution: Some(Attribution {
            author: Some(Author {
                id: "user".into(),
                kind: author::Kind::User as i32,
                display_name: "User".into(),
            }),
            origin: Some(Origin {
                kind: origin::Kind::Factory as i32,
                source_id: "factory".into(),
                subtype: "slack".into(),
            }),
            source_delivery: Some(SourceDeliveryReference {
                delivery_id: "delivery".into(),
                channel_id: "channel".into(),
                thread_id: "thread".into(),
                message_id: "source-message".into(),
            }),
        }),
        media: vec![MediaReference {
            media_id: "media".into(),
            kind: media_reference::Kind::File as i32,
            mime_type: "text/plain".into(),
            size_bytes: 12,
            sha256: vec![1, 2, 3],
            display_name: "input.txt".into(),
            reference: "artifact".into(),
        }],
    };

    let encoded = context.encode_to_vec();
    let decoded = AcceptedMessageContext::decode(encoded.as_slice()).expect("decode context");
    assert_eq!(decoded, context);
}

#[test]
fn accepted_context_and_ordered_mutation_coexist_in_v1() {
    let pool = get_descriptor_pool();
    assert!(pool
        .get_message_by_name("warp.conversation_mutation.v1.AcceptedMessageContext")
        .is_some());
    assert!(pool
        .get_message_by_name("warp.conversation_mutation.v1.ConversationMutation")
        .is_some());
}
#[test]
fn v1_execution_started_wire_encoding_is_stable() {
    let mutation = ConversationMutation {
        schema_version: SchemaVersion::V1 as i32,
        identity: Some(MutationIdentity {
            conversation_id: "c".into(),
            execution_id: "e".into(),
            mutation_id: "m".into(),
            sequence: 1,
            run_id: String::new(),
            request_id: String::new(),
        }),
        attribution: None,
        occurred_at: None,
        mutation: Some(conversation_mutation::Mutation::Execution(
            ExecutionMutation {
                change: Some(execution_mutation::Change::Started(
                    execution_mutation::Started { started_at: None },
                )),
            },
        )),
    };

    let expected = [
        0x08, 0x01, 0x12, 0x0b, 0x0a, 0x01, b'c', 0x12, 0x01, b'e', 0x1a, 0x01, b'm', 0x20, 0x01,
        0x52, 0x02, 0x0a, 0x00,
    ];
    assert_eq!(mutation.encode_to_vec(), expected);

    let decoded = ConversationMutation::decode(expected.as_slice()).expect("decode v1 golden");
    assert_eq!(decoded, mutation);
}
