// The response types for the multi-agent API.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_google_protobuf_field_mask, file_google_protobuf_go_features } from "@bufbuild/protobuf/wkt";
import { file_options } from "./options_pb";
import { file_suggestions } from "./suggestions_pb";
import { file_task } from "./task_pb";
/**
 * Describes the file response.proto.
 */
export const file_response = /*@__PURE__*/ fileDesc("Cg5yZXNwb25zZS5wcm90bxITd2FycC5tdWx0aV9hZ2VudC52MSLvIQoNUmVzcG9uc2VFdmVudBI9CgRpbml0GAEgASgLMi0ud2FycC5tdWx0aV9hZ2VudC52MS5SZXNwb25zZUV2ZW50LlN0cmVhbUluaXRIABJKCg5jbGllbnRfYWN0aW9ucxgCIAEoCzIwLndhcnAubXVsdGlfYWdlbnQudjEuUmVzcG9uc2VFdmVudC5DbGllbnRBY3Rpb25zSAASRQoIZmluaXNoZWQYAyABKAsyMS53YXJwLm11bHRpX2FnZW50LnYxLlJlc3BvbnNlRXZlbnQuU3RyZWFtRmluaXNoZWRIABo5CgpTdHJlYW1Jbml0EhcKD2NvbnZlcnNhdGlvbl9pZBgBIAEoCRISCgpyZXF1ZXN0X2lkGAIgASgJGkMKDUNsaWVudEFjdGlvbnMSMgoHYWN0aW9ucxgBIAMoCzIhLndhcnAubXVsdGlfYWdlbnQudjEuQ2xpZW50QWN0aW9uGoMfCg5TdHJlYW1GaW5pc2hlZBJICgVvdGhlchgBIAEoCzI3LndhcnAubXVsdGlfYWdlbnQudjEuUmVzcG9uc2VFdmVudC5TdHJlYW1GaW5pc2hlZC5PdGhlckgAEkYKBGRvbmUYAiABKAsyNi53YXJwLm11bHRpX2FnZW50LnYxLlJlc3BvbnNlRXZlbnQuU3RyZWFtRmluaXNoZWQuRG9uZUgAEmEKD21heF90b2tlbl9saW1pdBgDIAEoCzJGLndhcnAubXVsdGlfYWdlbnQudjEuUmVzcG9uc2VFdmVudC5TdHJlYW1GaW5pc2hlZC5SZWFjaGVkTWF4VG9rZW5MaW1pdEgAElMKC3F1b3RhX2xpbWl0GAQgASgLMjwud2FycC5tdWx0aV9hZ2VudC52MS5SZXNwb25zZUV2ZW50LlN0cmVhbUZpbmlzaGVkLlF1b3RhTGltaXRIABJqChdjb250ZXh0X3dpbmRvd19leGNlZWRlZBgFIAEoCzJHLndhcnAubXVsdGlfYWdlbnQudjEuUmVzcG9uc2VFdmVudC5TdHJlYW1GaW5pc2hlZC5Db250ZXh0V2luZG93RXhjZWVkZWRIABJbCg9sbG1fdW5hdmFpbGFibGUYBiABKAsyQC53YXJwLm11bHRpX2FnZW50LnYxLlJlc3BvbnNlRXZlbnQuU3RyZWFtRmluaXNoZWQuTExNVW5hdmFpbGFibGVIABJZCg5pbnRlcm5hbF9lcnJvchgHIAEoCzI/LndhcnAubXVsdGlfYWdlbnQudjEuUmVzcG9uc2VFdmVudC5TdHJlYW1GaW5pc2hlZC5JbnRlcm5hbEVycm9ySAASWgoPaW52YWxpZF9hcGlfa2V5GAwgASgLMj8ud2FycC5tdWx0aV9hZ2VudC52MS5SZXNwb25zZUV2ZW50LlN0cmVhbUZpbmlzaGVkLkludmFsaWRBcGlLZXlIABJXCgt0b2tlbl91c2FnZRgIIAMoCzI8LndhcnAubXVsdGlfYWdlbnQudjEuUmVzcG9uc2VFdmVudC5TdHJlYW1GaW5pc2hlZC5Ub2tlblVzYWdlQgSItRgBEiMKG3Nob3VsZF9yZWZyZXNoX21vZGVsX2NvbmZpZxgJIAEoCBJTCgxyZXF1ZXN0X2Nvc3QYCiABKAsyPS53YXJwLm11bHRpX2FnZW50LnYxLlJlc3BvbnNlRXZlbnQuU3RyZWFtRmluaXNoZWQuUmVxdWVzdENvc3QScAobY29udmVyc2F0aW9uX3VzYWdlX21ldGFkYXRhGAsgASgLMksud2FycC5tdWx0aV9hZ2VudC52MS5SZXNwb25zZUV2ZW50LlN0cmVhbUZpbmlzaGVkLkNvbnZlcnNhdGlvblVzYWdlTWV0YWRhdGEajAYKGUNvbnZlcnNhdGlvblVzYWdlTWV0YWRhdGESHAoUY29udGV4dF93aW5kb3dfdXNhZ2UYASABKAISEgoKc3VtbWFyaXplZBgCIAEoCBIVCg1jcmVkaXRzX3NwZW50GAMgASgCEloKC3Rva2VuX3VzYWdlGAQgAygLMkEud2FycC5tdWx0aV9hZ2VudC52MS5SZXNwb25zZUV2ZW50LlN0cmVhbUZpbmlzaGVkLk1vZGVsVG9rZW5Vc2FnZUICGAESYAoTdG9vbF91c2FnZV9tZXRhZGF0YRgFIAEoCzJDLndhcnAubXVsdGlfYWdlbnQudjEuUmVzcG9uc2VFdmVudC5TdHJlYW1GaW5pc2hlZC5Ub29sVXNhZ2VNZXRhZGF0YRJ5ChB3YXJwX3Rva2VuX3VzYWdlGAYgAygLMl8ud2FycC5tdWx0aV9hZ2VudC52MS5SZXNwb25zZUV2ZW50LlN0cmVhbUZpbmlzaGVkLkNvbnZlcnNhdGlvblVzYWdlTWV0YWRhdGEuV2FycFRva2VuVXNhZ2VFbnRyeRJ5ChBieW9rX3Rva2VuX3VzYWdlGAcgAygLMl8ud2FycC5tdWx0aV9hZ2VudC52MS5SZXNwb25zZUV2ZW50LlN0cmVhbUZpbmlzaGVkLkNvbnZlcnNhdGlvblVzYWdlTWV0YWRhdGEuQnlva1Rva2VuVXNhZ2VFbnRyeRp4ChNXYXJwVG9rZW5Vc2FnZUVudHJ5EgsKA2tleRgBIAEoCRJQCgV2YWx1ZRgCIAEoCzJBLndhcnAubXVsdGlfYWdlbnQudjEuUmVzcG9uc2VFdmVudC5TdHJlYW1GaW5pc2hlZC5Nb2RlbFRva2VuVXNhZ2U6AjgBGngKE0J5b2tUb2tlblVzYWdlRW50cnkSCwoDa2V5GAEgASgJElAKBXZhbHVlGAIgASgLMkEud2FycC5tdWx0aV9hZ2VudC52MS5SZXNwb25zZUV2ZW50LlN0cmVhbUZpbmlzaGVkLk1vZGVsVG9rZW5Vc2FnZToCOAEa+AEKD01vZGVsVG9rZW5Vc2FnZRIUCghtb2RlbF9pZBgBIAEoCUICGAESFAoMdG90YWxfdG9rZW5zGAIgASgNEnwKF3Rva2VuX3VzYWdlX2J5X2NhdGVnb3J5GAMgAygLMlsud2FycC5tdWx0aV9hZ2VudC52MS5SZXNwb25zZUV2ZW50LlN0cmVhbUZpbmlzaGVkLk1vZGVsVG9rZW5Vc2FnZS5Ub2tlblVzYWdlQnlDYXRlZ29yeUVudHJ5GjsKGVRva2VuVXNhZ2VCeUNhdGVnb3J5RW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgNOgI4ARr8CQoRVG9vbFVzYWdlTWV0YWRhdGESXAoRcnVuX2NvbW1hbmRfc3RhdHMYASABKAsyQS53YXJwLm11bHRpX2FnZW50LnYxLlJlc3BvbnNlRXZlbnQuU3RyZWFtRmluaXNoZWQuUnVuQ29tbWFuZFN0YXRzElkKEHJlYWRfZmlsZXNfc3RhdHMYAiABKAsyPy53YXJwLm11bHRpX2FnZW50LnYxLlJlc3BvbnNlRXZlbnQuU3RyZWFtRmluaXNoZWQuVG9vbENhbGxTdGF0cxJeChVzZWFyY2hfY29kZWJhc2Vfc3RhdHMYAyABKAsyPy53YXJwLm11bHRpX2FnZW50LnYxLlJlc3BvbnNlRXZlbnQuU3RyZWFtRmluaXNoZWQuVG9vbENhbGxTdGF0cxJTCgpncmVwX3N0YXRzGAQgASgLMj8ud2FycC5tdWx0aV9hZ2VudC52MS5SZXNwb25zZUV2ZW50LlN0cmVhbUZpbmlzaGVkLlRvb2xDYWxsU3RhdHMSWAoPZmlsZV9nbG9iX3N0YXRzGAUgASgLMj8ud2FycC5tdWx0aV9hZ2VudC52MS5SZXNwb25zZUV2ZW50LlN0cmVhbUZpbmlzaGVkLlRvb2xDYWxsU3RhdHMSYwoVYXBwbHlfZmlsZV9kaWZmX3N0YXRzGAYgASgLMkQud2FycC5tdWx0aV9hZ2VudC52MS5SZXNwb25zZUV2ZW50LlN0cmVhbUZpbmlzaGVkLkFwcGx5RmlsZURpZmZTdGF0cxJyCil3cml0ZV90b19sb25nX3J1bm5pbmdfc2hlbGxfY29tbWFuZF9zdGF0cxgHIAEoCzI/LndhcnAubXVsdGlfYWdlbnQudjEuUmVzcG9uc2VFdmVudC5TdHJlYW1GaW5pc2hlZC5Ub29sQ2FsbFN0YXRzEmAKF3JlYWRfbWNwX3Jlc291cmNlX3N0YXRzGAggASgLMj8ud2FycC5tdWx0aV9hZ2VudC52MS5SZXNwb25zZUV2ZW50LlN0cmVhbUZpbmlzaGVkLlRvb2xDYWxsU3RhdHMSXAoTY2FsbF9tY3BfdG9vbF9zdGF0cxgJIAEoCzI/LndhcnAubXVsdGlfYWdlbnQudjEuUmVzcG9uc2VFdmVudC5TdHJlYW1GaW5pc2hlZC5Ub29sQ2FsbFN0YXRzElsKEnN1Z2dlc3RfcGxhbl9zdGF0cxgKIAEoCzI/LndhcnAubXVsdGlfYWdlbnQudjEuUmVzcG9uc2VFdmVudC5TdHJlYW1GaW5pc2hlZC5Ub29sQ2FsbFN0YXRzEmIKGXN1Z2dlc3RfY3JlYXRlX3BsYW5fc3RhdHMYCyABKAsyPy53YXJwLm11bHRpX2FnZW50LnYxLlJlc3BvbnNlRXZlbnQuU3RyZWFtRmluaXNoZWQuVG9vbENhbGxTdGF0cxJoCh9yZWFkX3NoZWxsX2NvbW1hbmRfb3V0cHV0X3N0YXRzGAwgASgLMj8ud2FycC5tdWx0aV9hZ2VudC52MS5SZXNwb25zZUV2ZW50LlN0cmVhbUZpbmlzaGVkLlRvb2xDYWxsU3RhdHMSWwoSdXNlX2NvbXB1dGVyX3N0YXRzGA0gASgLMj8ud2FycC5tdWx0aV9hZ2VudC52MS5SZXNwb25zZUV2ZW50LlN0cmVhbUZpbmlzaGVkLlRvb2xDYWxsU3RhdHMaHgoNVG9vbENhbGxTdGF0cxINCgVjb3VudBgBIAEoBRpmChJBcHBseUZpbGVEaWZmU3RhdHMSDQoFY291bnQYASABKAUSEwoLbGluZXNfYWRkZWQYAiABKAUSFQoNbGluZXNfcmVtb3ZlZBgDIAEoBRIVCg1maWxlc19jaGFuZ2VkGAQgASgFGjoKD1J1bkNvbW1hbmRTdGF0cxINCgVjb3VudBgBIAEoBRIYChBjb21tYW5kX2V4ZWN1dGVkGAIgASgFGhwKC1JlcXVlc3RDb3N0Eg0KBWV4YWN0GAEgASgCGo8BCgpUb2tlblVzYWdlEhAKCG1vZGVsX2lkGAEgASgJEhMKC3RvdGFsX2lucHV0GAIgASgNEg4KBm91dHB1dBgDIAEoDRIYChBpbnB1dF9jYWNoZV9yZWFkGAQgASgNEhkKEWlucHV0X2NhY2hlX3dyaXRlGAUgASgNEhUKDWNvc3RfaW5fY2VudHMYBiABKAIaBwoFT3RoZXIaBgoERG9uZRoWChRSZWFjaGVkTWF4VG9rZW5MaW1pdBoMCgpRdW90YUxpbWl0GhcKFUNvbnRleHRXaW5kb3dFeGNlZWRlZBoQCg5MTE1VbmF2YWlsYWJsZRpXCg1JbnZhbGlkQXBpS2V5EjIKCHByb3ZpZGVyGAEgASgOMiAud2FycC5tdWx0aV9hZ2VudC52MS5MTE1Qcm92aWRlchISCgptb2RlbF9uYW1lGAIgASgJGiAKDUludGVybmFsRXJyb3ISDwoHbWVzc2FnZRgBIAEoCUIICgZyZWFzb25CBgoEdHlwZSKlEAoMQ2xpZW50QWN0aW9uEkMKC2NyZWF0ZV90YXNrGAEgASgLMiwud2FycC5tdWx0aV9hZ2VudC52MS5DbGllbnRBY3Rpb24uQ3JlYXRlVGFza0gAElMKFGFkZF9tZXNzYWdlc190b190YXNrGAMgASgLMjMud2FycC5tdWx0aV9hZ2VudC52MS5DbGllbnRBY3Rpb24uQWRkTWVzc2FnZXNUb1Rhc2tIABJSChN1cGRhdGVfdGFza19tZXNzYWdlGAQgASgLMjMud2FycC5tdWx0aV9hZ2VudC52MS5DbGllbnRBY3Rpb24uVXBkYXRlVGFza01lc3NhZ2VIABJdChlhcHBlbmRfdG9fbWVzc2FnZV9jb250ZW50GAUgASgLMjgud2FycC5tdWx0aV9hZ2VudC52MS5DbGllbnRBY3Rpb24uQXBwZW5kVG9NZXNzYWdlQ29udGVudEgAEjwKEHNob3dfc3VnZ2VzdGlvbnMYBiABKAsyIC53YXJwLm11bHRpX2FnZW50LnYxLlN1Z2dlc3Rpb25zSAASUgoTdXBkYXRlX3Rhc2tfc3VtbWFyeRgHIAEoCzIzLndhcnAubXVsdGlfYWdlbnQudjEuQ2xpZW50QWN0aW9uLlVwZGF0ZVRhc2tTdW1tYXJ5SAASWgoXdXBkYXRlX3Rhc2tfZGVzY3JpcHRpb24YCCABKAsyNy53YXJwLm11bHRpX2FnZW50LnYxLkNsaWVudEFjdGlvbi5VcGRhdGVUYXNrRGVzY3JpcHRpb25IABJPChFiZWdpbl90cmFuc2FjdGlvbhgJIAEoCzIyLndhcnAubXVsdGlfYWdlbnQudjEuQ2xpZW50QWN0aW9uLkJlZ2luVHJhbnNhY3Rpb25IABJRChJjb21taXRfdHJhbnNhY3Rpb24YCiABKAsyMy53YXJwLm11bHRpX2FnZW50LnYxLkNsaWVudEFjdGlvbi5Db21taXRUcmFuc2FjdGlvbkgAElUKFHJvbGxiYWNrX3RyYW5zYWN0aW9uGAsgASgLMjUud2FycC5tdWx0aV9hZ2VudC52MS5DbGllbnRBY3Rpb24uUm9sbGJhY2tUcmFuc2FjdGlvbkgAElgKFnN0YXJ0X25ld19jb252ZXJzYXRpb24YDCABKAsyNi53YXJwLm11bHRpX2FnZW50LnYxLkNsaWVudEFjdGlvbi5TdGFydE5ld0NvbnZlcnNhdGlvbkgAElkKF3VwZGF0ZV90YXNrX3NlcnZlcl9kYXRhGA0gASgLMjYud2FycC5tdWx0aV9hZ2VudC52MS5DbGllbnRBY3Rpb24uVXBkYXRlVGFza1NlcnZlckRhdGFIABJcChltb3ZlX21lc3NhZ2VzX3RvX25ld190YXNrGA4gASgLMjcud2FycC5tdWx0aV9hZ2VudC52MS5DbGllbnRBY3Rpb24uTW92ZU1lc3NhZ2VzVG9OZXdUYXNrSAAaNQoKQ3JlYXRlVGFzaxInCgR0YXNrGAEgASgLMhkud2FycC5tdWx0aV9hZ2VudC52MS5UYXNrGjwKFFVwZGF0ZVRhc2tTZXJ2ZXJEYXRhEg8KB3Rhc2tfaWQYASABKAkSEwoLc2VydmVyX2RhdGEYAiABKAkaPQoVVXBkYXRlVGFza0Rlc2NyaXB0aW9uEg8KB3Rhc2tfaWQYASABKAkSEwoLZGVzY3JpcHRpb24YAiABKAkaVAoRQWRkTWVzc2FnZXNUb1Rhc2sSDwoHdGFza19pZBgBIAEoCRIuCghtZXNzYWdlcxgCIAMoCzIcLndhcnAubXVsdGlfYWdlbnQudjEuTWVzc2FnZRp9ChFVcGRhdGVUYXNrTWVzc2FnZRIPCgd0YXNrX2lkGAMgASgJEi0KB21lc3NhZ2UYASABKAsyHC53YXJwLm11bHRpX2FnZW50LnYxLk1lc3NhZ2USKAoEbWFzaxgCIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5GaWVsZE1hc2saggEKFkFwcGVuZFRvTWVzc2FnZUNvbnRlbnQSDwoHdGFza19pZBgDIAEoCRItCgdtZXNzYWdlGAEgASgLMhwud2FycC5tdWx0aV9hZ2VudC52MS5NZXNzYWdlEigKBG1hc2sYAiABKAsyGi5nb29nbGUucHJvdG9idWYuRmllbGRNYXNrGjUKEVVwZGF0ZVRhc2tTdW1tYXJ5Eg8KB3Rhc2tfaWQYASABKAkSDwoHc3VtbWFyeRgCIAEoCRoSChBCZWdpblRyYW5zYWN0aW9uGhMKEUNvbW1pdFRyYW5zYWN0aW9uGhUKE1JvbGxiYWNrVHJhbnNhY3Rpb24aNQoUU3RhcnROZXdDb252ZXJzYXRpb24SHQoVc3RhcnRfZnJvbV9tZXNzYWdlX2lkGAEgASgJGusBChVNb3ZlTWVzc2FnZXNUb05ld1Rhc2sSFgoOc291cmNlX3Rhc2tfaWQYASABKAkSKwoIbmV3X3Rhc2sYAiABKAsyGS53YXJwLm11bHRpX2FnZW50LnYxLlRhc2sSGAoQZmlyc3RfbWVzc2FnZV9pZBgDIAEoCRIXCg9sYXN0X21lc3NhZ2VfaWQYBCABKAkSHgoWZXhwZWN0ZWRfbWVzc2FnZV9jb3VudBgFIAEoDRI6ChRyZXBsYWNlbWVudF9tZXNzYWdlcxgGIAMoCzIcLndhcnAubXVsdGlfYWdlbnQudjEuTWVzc2FnZUIICgZhY3Rpb25KBAgCEANSEnVwZGF0ZV90YXNrX3N0YXR1cyrGAQoLTExNUHJvdmlkZXISGAoUTExNX1BST1ZJREVSX1VOS05PV04QABIaChZMTE1fUFJPVklERVJfQU5USFJPUElDEAESFwoTTExNX1BST1ZJREVSX09QRU5BSRACEhcKE0xMTV9QUk9WSURFUl9HT09HTEUQAxIUChBMTE1fUFJPVklERVJfWEFJEAQSGwoXTExNX1BST1ZJREVSX09QRU5ST1VURVIQBRIcChhMTE1fUFJPVklERVJfQVdTX0JFRFJPQ0sQBkI4Wi5naXRodWIuY29tL3dhcnAvd2FycC1wcm90by1hcGlzL211bHRpX2FnZW50L3YxkgMF0j4CEANiCGVkaXRpb25zcOgH", [file_google_protobuf_field_mask, file_google_protobuf_go_features, file_options, file_suggestions, file_task]);
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.
 * Use `create(ResponseEventSchema)` to create a new message.
 */
export const ResponseEventSchema = /*@__PURE__*/ messageDesc(file_response, 0);
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamInit.
 * Use `create(ResponseEvent_StreamInitSchema)` to create a new message.
 */
export const ResponseEvent_StreamInitSchema = /*@__PURE__*/ messageDesc(file_response, 0, 0);
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.ClientActions.
 * Use `create(ResponseEvent_ClientActionsSchema)` to create a new message.
 */
export const ResponseEvent_ClientActionsSchema = /*@__PURE__*/ messageDesc(file_response, 0, 1);
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.
 * Use `create(ResponseEvent_StreamFinishedSchema)` to create a new message.
 */
export const ResponseEvent_StreamFinishedSchema = /*@__PURE__*/ messageDesc(file_response, 0, 2);
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.ConversationUsageMetadata.
 * Use `create(ResponseEvent_StreamFinished_ConversationUsageMetadataSchema)` to create a new message.
 */
export const ResponseEvent_StreamFinished_ConversationUsageMetadataSchema = /*@__PURE__*/ messageDesc(file_response, 0, 2, 0);
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.ModelTokenUsage.
 * Use `create(ResponseEvent_StreamFinished_ModelTokenUsageSchema)` to create a new message.
 */
export const ResponseEvent_StreamFinished_ModelTokenUsageSchema = /*@__PURE__*/ messageDesc(file_response, 0, 2, 1);
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.ToolUsageMetadata.
 * Use `create(ResponseEvent_StreamFinished_ToolUsageMetadataSchema)` to create a new message.
 */
export const ResponseEvent_StreamFinished_ToolUsageMetadataSchema = /*@__PURE__*/ messageDesc(file_response, 0, 2, 2);
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.ToolCallStats.
 * Use `create(ResponseEvent_StreamFinished_ToolCallStatsSchema)` to create a new message.
 */
export const ResponseEvent_StreamFinished_ToolCallStatsSchema = /*@__PURE__*/ messageDesc(file_response, 0, 2, 3);
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.ApplyFileDiffStats.
 * Use `create(ResponseEvent_StreamFinished_ApplyFileDiffStatsSchema)` to create a new message.
 */
export const ResponseEvent_StreamFinished_ApplyFileDiffStatsSchema = /*@__PURE__*/ messageDesc(file_response, 0, 2, 4);
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.RunCommandStats.
 * Use `create(ResponseEvent_StreamFinished_RunCommandStatsSchema)` to create a new message.
 */
export const ResponseEvent_StreamFinished_RunCommandStatsSchema = /*@__PURE__*/ messageDesc(file_response, 0, 2, 5);
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.RequestCost.
 * Use `create(ResponseEvent_StreamFinished_RequestCostSchema)` to create a new message.
 */
export const ResponseEvent_StreamFinished_RequestCostSchema = /*@__PURE__*/ messageDesc(file_response, 0, 2, 6);
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.TokenUsage.
 * Use `create(ResponseEvent_StreamFinished_TokenUsageSchema)` to create a new message.
 */
export const ResponseEvent_StreamFinished_TokenUsageSchema = /*@__PURE__*/ messageDesc(file_response, 0, 2, 7);
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.Other.
 * Use `create(ResponseEvent_StreamFinished_OtherSchema)` to create a new message.
 */
export const ResponseEvent_StreamFinished_OtherSchema = /*@__PURE__*/ messageDesc(file_response, 0, 2, 8);
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.Done.
 * Use `create(ResponseEvent_StreamFinished_DoneSchema)` to create a new message.
 */
export const ResponseEvent_StreamFinished_DoneSchema = /*@__PURE__*/ messageDesc(file_response, 0, 2, 9);
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.ReachedMaxTokenLimit.
 * Use `create(ResponseEvent_StreamFinished_ReachedMaxTokenLimitSchema)` to create a new message.
 */
export const ResponseEvent_StreamFinished_ReachedMaxTokenLimitSchema = /*@__PURE__*/ messageDesc(file_response, 0, 2, 10);
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.QuotaLimit.
 * Use `create(ResponseEvent_StreamFinished_QuotaLimitSchema)` to create a new message.
 */
export const ResponseEvent_StreamFinished_QuotaLimitSchema = /*@__PURE__*/ messageDesc(file_response, 0, 2, 11);
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.ContextWindowExceeded.
 * Use `create(ResponseEvent_StreamFinished_ContextWindowExceededSchema)` to create a new message.
 */
export const ResponseEvent_StreamFinished_ContextWindowExceededSchema = /*@__PURE__*/ messageDesc(file_response, 0, 2, 12);
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.LLMUnavailable.
 * Use `create(ResponseEvent_StreamFinished_LLMUnavailableSchema)` to create a new message.
 */
export const ResponseEvent_StreamFinished_LLMUnavailableSchema = /*@__PURE__*/ messageDesc(file_response, 0, 2, 13);
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.InvalidApiKey.
 * Use `create(ResponseEvent_StreamFinished_InvalidApiKeySchema)` to create a new message.
 */
export const ResponseEvent_StreamFinished_InvalidApiKeySchema = /*@__PURE__*/ messageDesc(file_response, 0, 2, 14);
/**
 * Describes the message warp.multi_agent.v1.ResponseEvent.StreamFinished.InternalError.
 * Use `create(ResponseEvent_StreamFinished_InternalErrorSchema)` to create a new message.
 */
export const ResponseEvent_StreamFinished_InternalErrorSchema = /*@__PURE__*/ messageDesc(file_response, 0, 2, 15);
/**
 * Describes the message warp.multi_agent.v1.ClientAction.
 * Use `create(ClientActionSchema)` to create a new message.
 */
export const ClientActionSchema = /*@__PURE__*/ messageDesc(file_response, 1);
/**
 * Describes the message warp.multi_agent.v1.ClientAction.CreateTask.
 * Use `create(ClientAction_CreateTaskSchema)` to create a new message.
 */
export const ClientAction_CreateTaskSchema = /*@__PURE__*/ messageDesc(file_response, 1, 0);
/**
 * Describes the message warp.multi_agent.v1.ClientAction.UpdateTaskServerData.
 * Use `create(ClientAction_UpdateTaskServerDataSchema)` to create a new message.
 */
export const ClientAction_UpdateTaskServerDataSchema = /*@__PURE__*/ messageDesc(file_response, 1, 1);
/**
 * Describes the message warp.multi_agent.v1.ClientAction.UpdateTaskDescription.
 * Use `create(ClientAction_UpdateTaskDescriptionSchema)` to create a new message.
 */
export const ClientAction_UpdateTaskDescriptionSchema = /*@__PURE__*/ messageDesc(file_response, 1, 2);
/**
 * Describes the message warp.multi_agent.v1.ClientAction.AddMessagesToTask.
 * Use `create(ClientAction_AddMessagesToTaskSchema)` to create a new message.
 */
export const ClientAction_AddMessagesToTaskSchema = /*@__PURE__*/ messageDesc(file_response, 1, 3);
/**
 * Describes the message warp.multi_agent.v1.ClientAction.UpdateTaskMessage.
 * Use `create(ClientAction_UpdateTaskMessageSchema)` to create a new message.
 */
export const ClientAction_UpdateTaskMessageSchema = /*@__PURE__*/ messageDesc(file_response, 1, 4);
/**
 * Describes the message warp.multi_agent.v1.ClientAction.AppendToMessageContent.
 * Use `create(ClientAction_AppendToMessageContentSchema)` to create a new message.
 */
export const ClientAction_AppendToMessageContentSchema = /*@__PURE__*/ messageDesc(file_response, 1, 5);
/**
 * Describes the message warp.multi_agent.v1.ClientAction.UpdateTaskSummary.
 * Use `create(ClientAction_UpdateTaskSummarySchema)` to create a new message.
 */
export const ClientAction_UpdateTaskSummarySchema = /*@__PURE__*/ messageDesc(file_response, 1, 6);
/**
 * Describes the message warp.multi_agent.v1.ClientAction.BeginTransaction.
 * Use `create(ClientAction_BeginTransactionSchema)` to create a new message.
 */
export const ClientAction_BeginTransactionSchema = /*@__PURE__*/ messageDesc(file_response, 1, 7);
/**
 * Describes the message warp.multi_agent.v1.ClientAction.CommitTransaction.
 * Use `create(ClientAction_CommitTransactionSchema)` to create a new message.
 */
export const ClientAction_CommitTransactionSchema = /*@__PURE__*/ messageDesc(file_response, 1, 8);
/**
 * Describes the message warp.multi_agent.v1.ClientAction.RollbackTransaction.
 * Use `create(ClientAction_RollbackTransactionSchema)` to create a new message.
 */
export const ClientAction_RollbackTransactionSchema = /*@__PURE__*/ messageDesc(file_response, 1, 9);
/**
 * Describes the message warp.multi_agent.v1.ClientAction.StartNewConversation.
 * Use `create(ClientAction_StartNewConversationSchema)` to create a new message.
 */
export const ClientAction_StartNewConversationSchema = /*@__PURE__*/ messageDesc(file_response, 1, 10);
/**
 * Describes the message warp.multi_agent.v1.ClientAction.MoveMessagesToNewTask.
 * Use `create(ClientAction_MoveMessagesToNewTaskSchema)` to create a new message.
 */
export const ClientAction_MoveMessagesToNewTaskSchema = /*@__PURE__*/ messageDesc(file_response, 1, 11);
/**
 * @generated from enum warp.multi_agent.v1.LLMProvider
 */
export var LLMProvider;
(function (LLMProvider) {
    /**
     * @generated from enum value: LLM_PROVIDER_UNKNOWN = 0;
     */
    LLMProvider[LLMProvider["LLM_PROVIDER_UNKNOWN"] = 0] = "LLM_PROVIDER_UNKNOWN";
    /**
     * @generated from enum value: LLM_PROVIDER_ANTHROPIC = 1;
     */
    LLMProvider[LLMProvider["LLM_PROVIDER_ANTHROPIC"] = 1] = "LLM_PROVIDER_ANTHROPIC";
    /**
     * @generated from enum value: LLM_PROVIDER_OPENAI = 2;
     */
    LLMProvider[LLMProvider["LLM_PROVIDER_OPENAI"] = 2] = "LLM_PROVIDER_OPENAI";
    /**
     * @generated from enum value: LLM_PROVIDER_GOOGLE = 3;
     */
    LLMProvider[LLMProvider["LLM_PROVIDER_GOOGLE"] = 3] = "LLM_PROVIDER_GOOGLE";
    /**
     * @generated from enum value: LLM_PROVIDER_XAI = 4;
     */
    LLMProvider[LLMProvider["LLM_PROVIDER_XAI"] = 4] = "LLM_PROVIDER_XAI";
    /**
     * @generated from enum value: LLM_PROVIDER_OPENROUTER = 5;
     */
    LLMProvider[LLMProvider["LLM_PROVIDER_OPENROUTER"] = 5] = "LLM_PROVIDER_OPENROUTER";
    /**
     * @generated from enum value: LLM_PROVIDER_AWS_BEDROCK = 6;
     */
    LLMProvider[LLMProvider["LLM_PROVIDER_AWS_BEDROCK"] = 6] = "LLM_PROVIDER_AWS_BEDROCK";
})(LLMProvider || (LLMProvider = {}));
/**
 * Describes the enum warp.multi_agent.v1.LLMProvider.
 */
export const LLMProviderSchema = /*@__PURE__*/ enumDesc(file_response, 0);
