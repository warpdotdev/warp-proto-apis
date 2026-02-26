// The request types for the multi-agent API.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_google_protobuf_empty, file_google_protobuf_go_features, file_google_protobuf_struct } from "@bufbuild/protobuf/wkt";
import { file_input_context } from "./input_context_pb";
import { file_attachment } from "./attachment_pb";
import { file_options } from "./options_pb";
import { file_suggestions } from "./suggestions_pb";
import { file_task } from "./task_pb";
import { file_skill } from "./skill_pb";
/**
 * Describes the file request.proto.
 */
export const file_request = /*@__PURE__*/ fileDesc("Cg1yZXF1ZXN0LnByb3RvEhN3YXJwLm11bHRpX2FnZW50LnYxIrpDCgdSZXF1ZXN0Ej4KDHRhc2tfY29udGV4dBgBIAEoCzIoLndhcnAubXVsdGlfYWdlbnQudjEuUmVxdWVzdC5UYXNrQ29udGV4dBIxCgVpbnB1dBgCIAEoCzIiLndhcnAubXVsdGlfYWdlbnQudjEuUmVxdWVzdC5JbnB1dBI3CghzZXR0aW5ncxgDIAEoCzIlLndhcnAubXVsdGlfYWdlbnQudjEuUmVxdWVzdC5TZXR0aW5ncxI3CghtZXRhZGF0YRgEIAEoCzIlLndhcnAubXVsdGlfYWdlbnQudjEuUmVxdWVzdC5NZXRhZGF0YRI+ChRleGlzdGluZ19zdWdnZXN0aW9ucxgFIAEoCzIgLndhcnAubXVsdGlfYWdlbnQudjEuU3VnZ2VzdGlvbnMSPAoLbWNwX2NvbnRleHQYBiABKAsyJy53YXJwLm11bHRpX2FnZW50LnYxLlJlcXVlc3QuTUNQQ29udGV4dBpNCgtUYXNrQ29udGV4dBIoCgV0YXNrcxgBIAMoCzIZLndhcnAubXVsdGlfYWdlbnQudjEuVGFza0oECAIQA1IOYWN0aXZlX3Rhc2tfaWQagC0KBUlucHV0EjIKB2NvbnRleHQYASABKAsyIS53YXJwLm11bHRpX2FnZW50LnYxLklucHV0Q29udGV4dBJECgt1c2VyX2lucHV0cxgGIAEoCzItLndhcnAubXVsdGlfYWdlbnQudjEuUmVxdWVzdC5JbnB1dC5Vc2VySW5wdXRzSAASYAoacXVlcnlfd2l0aF9jYW5uZWRfcmVzcG9uc2UYBCABKAsyOi53YXJwLm11bHRpX2FnZW50LnYxLlJlcXVlc3QuSW5wdXQuUXVlcnlXaXRoQ2FubmVkUmVzcG9uc2VIABJUChRhdXRvX2NvZGVfZGlmZl9xdWVyeRgFIAEoCzI0LndhcnAubXVsdGlfYWdlbnQudjEuUmVxdWVzdC5JbnB1dC5BdXRvQ29kZURpZmZRdWVyeUgAElQKE3Jlc3VtZV9jb252ZXJzYXRpb24YByABKAsyNS53YXJwLm11bHRpX2FnZW50LnYxLlJlcXVlc3QuSW5wdXQuUmVzdW1lQ29udmVyc2F0aW9uSAASUQoSaW5pdF9wcm9qZWN0X3J1bGVzGAggASgLMjMud2FycC5tdWx0aV9hZ2VudC52MS5SZXF1ZXN0LklucHV0LkluaXRQcm9qZWN0UnVsZXNIABJZChZ0cmlnZ2VyX3N1Z2dlc3RfcHJvbXB0GAkgASgLMjcud2FycC5tdWx0aV9hZ2VudC52MS5SZXF1ZXN0LklucHV0LlRyaWdnZXJTdWdnZXN0UHJvbXB0SAASUQoSY3JlYXRlX25ld19wcm9qZWN0GAogASgLMjMud2FycC5tdWx0aV9hZ2VudC52MS5SZXF1ZXN0LklucHV0LkNyZWF0ZU5ld1Byb2plY3RIABJOChBjbG9uZV9yZXBvc2l0b3J5GAsgASgLMjIud2FycC5tdWx0aV9hZ2VudC52MS5SZXF1ZXN0LklucHV0LkNsb25lUmVwb3NpdG9yeUgAEkQKC2NvZGVfcmV2aWV3GAwgASgLMi0ud2FycC5tdWx0aV9hZ2VudC52MS5SZXF1ZXN0LklucHV0LkNvZGVSZXZpZXdIABJaChZzdW1tYXJpemVfY29udmVyc2F0aW9uGA0gASgLMjgud2FycC5tdWx0aV9hZ2VudC52MS5SZXF1ZXN0LklucHV0LlN1bW1hcml6ZUNvbnZlcnNhdGlvbkgAElIKEmNyZWF0ZV9lbnZpcm9ubWVudBgOIAEoCzI0LndhcnAubXVsdGlfYWdlbnQudjEuUmVxdWVzdC5JbnB1dC5DcmVhdGVFbnZpcm9ubWVudEgAElcKFWZldGNoX3Jldmlld19jb21tZW50cxgPIAEoCzI2LndhcnAubXVsdGlfYWdlbnQudjEuUmVxdWVzdC5JbnB1dC5GZXRjaFJldmlld0NvbW1lbnRzSAASZQodc3RhcnRfZnJvbV9hbWJpZW50X3J1bl9wcm9tcHQYECABKAsyPC53YXJwLm11bHRpX2FnZW50LnYxLlJlcXVlc3QuSW5wdXQuU3RhcnRGcm9tQW1iaWVudFJ1blByb21wdEgAEkYKDGludm9rZV9za2lsbBgRIAEoCzIuLndhcnAubXVsdGlfYWdlbnQudjEuUmVxdWVzdC5JbnB1dC5JbnZva2VTa2lsbEgAEkYKCnVzZXJfcXVlcnkYAiABKAsyLC53YXJwLm11bHRpX2FnZW50LnYxLlJlcXVlc3QuSW5wdXQuVXNlclF1ZXJ5QgIYAUgAElEKEHRvb2xfY2FsbF9yZXN1bHQYAyABKAsyMS53YXJwLm11bHRpX2FnZW50LnYxLlJlcXVlc3QuSW5wdXQuVG9vbENhbGxSZXN1bHRCAhgBSAAa0gIKCVVzZXJRdWVyeRITCgVxdWVyeRgBIAEoCUIEgLUYARJnChZyZWZlcmVuY2VkX2F0dGFjaG1lbnRzGAIgAygLMkcud2FycC5tdWx0aV9hZ2VudC52MS5SZXF1ZXN0LklucHV0LlVzZXJRdWVyeS5SZWZlcmVuY2VkQXR0YWNobWVudHNFbnRyeRIwCgRtb2RlGAMgASgLMiIud2FycC5tdWx0aV9hZ2VudC52MS5Vc2VyUXVlcnlNb2RlEjYKDmludGVuZGVkX2FnZW50GAQgASgOMh4ud2FycC5tdWx0aV9hZ2VudC52MS5BZ2VudFR5cGUaXQoaUmVmZXJlbmNlZEF0dGFjaG1lbnRzRW50cnkSCwoDa2V5GAEgASgJEi4KBXZhbHVlGAIgASgLMh8ud2FycC5tdWx0aV9hZ2VudC52MS5BdHRhY2htZW50OgI4ARrAAQoRQ0xJQWdlbnRVc2VyUXVlcnkSQAoKdXNlcl9xdWVyeRgBIAEoCzIsLndhcnAubXVsdGlfYWdlbnQudjEuUmVxdWVzdC5JbnB1dC5Vc2VyUXVlcnkSQQoPcnVubmluZ19jb21tYW5kGAIgASgLMigud2FycC5tdWx0aV9hZ2VudC52MS5SdW5uaW5nU2hlbGxDb21tYW5kEiYKHnJ1bl9zaGVsbF9jb21tYW5kX3Rvb2xfY2FsbF9pZBgDIAEoCRrVAgoKVXNlcklucHV0cxJHCgZpbnB1dHMYASADKAsyNy53YXJwLm11bHRpX2FnZW50LnYxLlJlcXVlc3QuSW5wdXQuVXNlcklucHV0cy5Vc2VySW5wdXQa/QEKCVVzZXJJbnB1dBJCCgp1c2VyX3F1ZXJ5GAEgASgLMiwud2FycC5tdWx0aV9hZ2VudC52MS5SZXF1ZXN0LklucHV0LlVzZXJRdWVyeUgAEk0KEHRvb2xfY2FsbF9yZXN1bHQYAiABKAsyMS53YXJwLm11bHRpX2FnZW50LnYxLlJlcXVlc3QuSW5wdXQuVG9vbENhbGxSZXN1bHRIABJUChRjbGlfYWdlbnRfdXNlcl9xdWVyeRgDIAEoCzI0LndhcnAubXVsdGlfYWdlbnQudjEuUmVxdWVzdC5JbnB1dC5DTElBZ2VudFVzZXJRdWVyeUgAQgcKBWlucHV0GuMNCg5Ub29sQ2FsbFJlc3VsdBIUCgx0b29sX2NhbGxfaWQYASABKAkSRwoRcnVuX3NoZWxsX2NvbW1hbmQYAiABKAsyKi53YXJwLm11bHRpX2FnZW50LnYxLlJ1blNoZWxsQ29tbWFuZFJlc3VsdEgAEjoKCnJlYWRfZmlsZXMYAyABKAsyJC53YXJwLm11bHRpX2FnZW50LnYxLlJlYWRGaWxlc1Jlc3VsdEgAEkQKD3NlYXJjaF9jb2RlYmFzZRgEIAEoCzIpLndhcnAubXVsdGlfYWdlbnQudjEuU2VhcmNoQ29kZWJhc2VSZXN1bHRIABJFChBhcHBseV9maWxlX2RpZmZzGAUgASgLMikud2FycC5tdWx0aV9hZ2VudC52MS5BcHBseUZpbGVEaWZmc1Jlc3VsdEgAEj4KDHN1Z2dlc3RfcGxhbhgGIAEoCzImLndhcnAubXVsdGlfYWdlbnQudjEuU3VnZ2VzdFBsYW5SZXN1bHRIABJLChNzdWdnZXN0X2NyZWF0ZV9wbGFuGAcgASgLMiwud2FycC5tdWx0aV9hZ2VudC52MS5TdWdnZXN0Q3JlYXRlUGxhblJlc3VsdEgAEi8KBGdyZXAYCCABKAsyHy53YXJwLm11bHRpX2FnZW50LnYxLkdyZXBSZXN1bHRIABI4CglmaWxlX2dsb2IYCSABKAsyIy53YXJwLm11bHRpX2FnZW50LnYxLkZpbGVHbG9iUmVzdWx0SAASRwoRcmVhZF9tY3BfcmVzb3VyY2UYCyABKAsyKi53YXJwLm11bHRpX2FnZW50LnYxLlJlYWRNQ1BSZXNvdXJjZVJlc3VsdEgAEj8KDWNhbGxfbWNwX3Rvb2wYDCABKAsyJi53YXJwLm11bHRpX2FnZW50LnYxLkNhbGxNQ1BUb29sUmVzdWx0SAASaAojd3JpdGVfdG9fbG9uZ19ydW5uaW5nX3NoZWxsX2NvbW1hbmQYDSABKAsyOS53YXJwLm11bHRpX2FnZW50LnYxLldyaXRlVG9Mb25nUnVubmluZ1NoZWxsQ29tbWFuZFJlc3VsdEgAElUKGHN1Z2dlc3RfbmV3X2NvbnZlcnNhdGlvbhgOIAEoCzIxLndhcnAubXVsdGlfYWdlbnQudjEuU3VnZ2VzdE5ld0NvbnZlcnNhdGlvblJlc3VsdEgAEj0KDGZpbGVfZ2xvYl92MhgPIAEoCzIlLndhcnAubXVsdGlfYWdlbnQudjEuRmlsZUdsb2JWMlJlc3VsdEgAEkIKDnN1Z2dlc3RfcHJvbXB0GBAgASgLMigud2FycC5tdWx0aV9hZ2VudC52MS5TdWdnZXN0UHJvbXB0UmVzdWx0SAASRQoQb3Blbl9jb2RlX3JldmlldxgRIAEoCzIpLndhcnAubXVsdGlfYWdlbnQudjEuT3BlbkNvZGVSZXZpZXdSZXN1bHRIABI+Cgxpbml0X3Byb2plY3QYEiABKAsyJi53YXJwLm11bHRpX2FnZW50LnYxLkluaXRQcm9qZWN0UmVzdWx0SAASQgoOcmVhZF9kb2N1bWVudHMYEyABKAsyKC53YXJwLm11bHRpX2FnZW50LnYxLlJlYWREb2N1bWVudHNSZXN1bHRIABJCCg5lZGl0X2RvY3VtZW50cxgUIAEoCzIoLndhcnAubXVsdGlfYWdlbnQudjEuRWRpdERvY3VtZW50c1Jlc3VsdEgAEkYKEGNyZWF0ZV9kb2N1bWVudHMYFSABKAsyKi53YXJwLm11bHRpX2FnZW50LnYxLkNyZWF0ZURvY3VtZW50c1Jlc3VsdEgAElYKGXJlYWRfc2hlbGxfY29tbWFuZF9vdXRwdXQYFiABKAsyMS53YXJwLm11bHRpX2FnZW50LnYxLlJlYWRTaGVsbENvbW1hbmRPdXRwdXRSZXN1bHRIABI+Cgx1c2VfY29tcHV0ZXIYFyABKAsyJi53YXJwLm11bHRpX2FnZW50LnYxLlVzZUNvbXB1dGVyUmVzdWx0SAASUQoWaW5zZXJ0X3Jldmlld19jb21tZW50cxgYIAEoCzIvLndhcnAubXVsdGlfYWdlbnQudjEuSW5zZXJ0UmV2aWV3Q29tbWVudHNSZXN1bHRIABJNChRyZXF1ZXN0X2NvbXB1dGVyX3VzZRgZIAEoCzItLndhcnAubXVsdGlfYWdlbnQudjEuUmVxdWVzdENvbXB1dGVyVXNlUmVzdWx0SAASOgoKcmVhZF9za2lsbBgaIAEoCzIkLndhcnAubXVsdGlfYWdlbnQudjEuUmVhZFNraWxsUmVzdWx0SABCCAoGcmVzdWx0SgQIChALUgZyZWZpbmUa6gUKF1F1ZXJ5V2l0aENhbm5lZFJlc3BvbnNlEg0KBXF1ZXJ5GAEgASgJElUKB2luc3RhbGwYAiABKAsyQi53YXJwLm11bHRpX2FnZW50LnYxLlJlcXVlc3QuSW5wdXQuUXVlcnlXaXRoQ2FubmVkUmVzcG9uc2UuSW5zdGFsbEgAEk8KBGNvZGUYAyABKAsyPy53YXJwLm11bHRpX2FnZW50LnYxLlJlcXVlc3QuSW5wdXQuUXVlcnlXaXRoQ2FubmVkUmVzcG9uc2UuQ29kZUgAElMKBmRlcGxveRgEIAEoCzJBLndhcnAubXVsdGlfYWdlbnQudjEuUmVxdWVzdC5JbnB1dC5RdWVyeVdpdGhDYW5uZWRSZXNwb25zZS5EZXBsb3lIABJiCg5zb21ldGhpbmdfZWxzZRgFIAEoCzJILndhcnAubXVsdGlfYWdlbnQudjEuUmVxdWVzdC5JbnB1dC5RdWVyeVdpdGhDYW5uZWRSZXNwb25zZS5Tb21ldGhpbmdFbHNlSAASdwoZY3VzdG9tX29uYm9hcmRpbmdfcmVxdWVzdBgGIAEoCzJSLndhcnAubXVsdGlfYWdlbnQudjEuUmVxdWVzdC5JbnB1dC5RdWVyeVdpdGhDYW5uZWRSZXNwb25zZS5DdXN0b21PbmJvYXJkaW5nUmVxdWVzdEgAEnkKGmFnZW50aWNfb25ib2FyZGluZ19raWNrb2ZmGAcgASgLMlMud2FycC5tdWx0aV9hZ2VudC52MS5SZXF1ZXN0LklucHV0LlF1ZXJ5V2l0aENhbm5lZFJlc3BvbnNlLkFnZW50aWNPbmJvYXJkaW5nS2lja29mZkgAGgkKB0luc3RhbGwaBgoEQ29kZRoICgZEZXBsb3kaDwoNU29tZXRoaW5nRWxzZRoZChdDdXN0b21PbmJvYXJkaW5nUmVxdWVzdBoaChhBZ2VudGljT25ib2FyZGluZ0tpY2tvZmZCBgoEdHlwZRooChFBdXRvQ29kZURpZmZRdWVyeRITCgVxdWVyeRgBIAEoCUIEgLUYARoUChJSZXN1bWVDb252ZXJzYXRpb24aEgoQSW5pdFByb2plY3RSdWxlcxonChBDcmVhdGVOZXdQcm9qZWN0EhMKBXF1ZXJ5GAEgASgJQgSAtRgBGiQKD0Nsb25lUmVwb3NpdG9yeRIRCgN1cmwYASABKAlCBIC1GAEaLQoRQ3JlYXRlRW52aXJvbm1lbnQSGAoKcmVwb19wYXRocxgBIAMoCUIEgLUYARq3AQoUVHJpZ2dlclN1Z2dlc3RQcm9tcHQSNAoLYXR0YWNobWVudHMYASADKAsyHy53YXJwLm11bHRpX2FnZW50LnYxLkF0dGFjaG1lbnQSLwoNZmlsZXNfY2hhbmdlZBgCIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eUgAEi0KC2NvbW1hbmRfcnVuGAMgASgLMhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5SABCCQoHdHJpZ2dlchqIAgoKQ29kZVJldmlldxJmChdpbml0aWFsX3Jldmlld19jb21tZW50cxgBIAEoCzJDLndhcnAubXVsdGlfYWdlbnQudjEuUmVxdWVzdC5JbnB1dC5Db2RlUmV2aWV3LkluaXRpYWxSZXZpZXdDb21tZW50c0gAGoQBChVJbml0aWFsUmV2aWV3Q29tbWVudHMSOwoPcmV2aWV3X2NvbW1lbnRzGAEgAygLMiIud2FycC5tdWx0aV9hZ2VudC52MS5SZXZpZXdDb21tZW50Ei4KCGRpZmZfc2V0GAIgASgLMhwud2FycC5tdWx0aV9hZ2VudC52MS5EaWZmU2V0QgsKCW9wZXJhdGlvbhouChNGZXRjaFJldmlld0NvbW1lbnRzEhcKCXJlcG9fcGF0aBgBIAEoCUIEgLUYARotChVTdW1tYXJpemVDb252ZXJzYXRpb24SFAoGcHJvbXB0GAEgASgJQgSAtRgBGokBChlTdGFydEZyb21BbWJpZW50UnVuUHJvbXB0EhYKDmFtYmllbnRfcnVuX2lkGAEgASgJEiEKE3J1bnRpbWVfYmFzZV9wcm9tcHQYAiABKAlCBIC1GAESMQoNcnVudGltZV9za2lsbBgDIAEoCzIaLndhcnAubXVsdGlfYWdlbnQudjEuU2tpbGwaOAoLSW52b2tlU2tpbGwSKQoFc2tpbGwYASABKAsyGi53YXJwLm11bHRpX2FnZW50LnYxLlNraWxsQgYKBHR5cGUa9AEKCE1ldGFkYXRhEhcKD2NvbnZlcnNhdGlvbl9pZBgBIAEoCRJDCgdsb2dnaW5nGAIgAygLMjIud2FycC5tdWx0aV9hZ2VudC52MS5SZXF1ZXN0Lk1ldGFkYXRhLkxvZ2dpbmdFbnRyeRIdChVhbWJpZW50X2FnZW50X3Rhc2tfaWQYAyABKAkSIwobZm9ya2VkX2Zyb21fY29udmVyc2F0aW9uX2lkGAQgASgJGkYKDExvZ2dpbmdFbnRyeRILCgNrZXkYASABKAkSJQoFdmFsdWUYAiABKAsyFi5nb29nbGUucHJvdG9idWYuVmFsdWU6AjgBGoEMCghTZXR0aW5ncxJHCgxtb2RlbF9jb25maWcYASABKAsyMS53YXJwLm11bHRpX2FnZW50LnYxLlJlcXVlc3QuU2V0dGluZ3MuTW9kZWxDb25maWcSFQoNcnVsZXNfZW5hYmxlZBgCIAEoCBIlCh13ZWJfY29udGV4dF9yZXRyaWV2YWxfZW5hYmxlZBgDIAEoCBIkChxzdXBwb3J0c19wYXJhbGxlbF90b29sX2NhbGxzGAQgASgIEicKH3VzZV9hbnRocm9waWNfdGV4dF9lZGl0b3JfdG9vbHMYBSABKAgSGAoQcGxhbm5pbmdfZW5hYmxlZBgGIAEoCBIiChp3YXJwX2RyaXZlX2NvbnRleHRfZW5hYmxlZBgHIAEoCBIdChVzdXBwb3J0c19jcmVhdGVfZmlsZXMYCCABKAgSNgoPc3VwcG9ydGVkX3Rvb2xzGAkgAygOMh0ud2FycC5tdWx0aV9hZ2VudC52MS5Ub29sVHlwZRImCh5zdXBwb3J0c19sb25nX3J1bm5pbmdfY29tbWFuZHMYCiABKAgSLwonc2hvdWxkX3ByZXNlcnZlX2ZpbGVfY29udGVudF9pbl9oaXN0b3J5GAsgASgIEhkKEXN1cHBvcnRzX3RvZG9zX3VpGAwgASgIEiMKG3N1cHBvcnRzX2xpbmtlZF9jb2RlX2Jsb2NrcxgNIAEoCBIrCiNzdXBwb3J0c19zdGFydGVkX2NoaWxkX3Rhc2tfbWVzc2FnZRgOIAEoCBIfChdzdXBwb3J0c19zdWdnZXN0X3Byb21wdBgPIAEoCBIhChlzdXBwb3J0c19yZWFkX2ltYWdlX2ZpbGVzGBAgASgIEiIKGnN1cHBvcnRzX3JlYXNvbmluZ19tZXNzYWdlGBEgASgIEj8KCGFwaV9rZXlzGBIgASgLMi0ud2FycC5tdWx0aV9hZ2VudC52MS5SZXF1ZXN0LlNldHRpbmdzLkFwaUtleXMSOgoOYXV0b25vbXlfbGV2ZWwYEyABKA4yIi53YXJwLm11bHRpX2FnZW50LnYxLkF1dG9ub215TGV2ZWwSPAoPaXNvbGF0aW9uX2xldmVsGBQgASgOMiMud2FycC5tdWx0aV9hZ2VudC52MS5Jc29sYXRpb25MZXZlbBIaChJ3ZWJfc2VhcmNoX2VuYWJsZWQYFSABKAgSQAoZc3VwcG9ydGVkX2NsaV9hZ2VudF90b29scxgWIAMoDjIdLndhcnAubXVsdGlfYWdlbnQudjEuVG9vbFR5cGUSHwoXc3VwcG9ydHNfdjRhX2ZpbGVfZGlmZnMYFyABKAgSNgouc3VwcG9ydHNfc3VtbWFyaXphdGlvbl92aWFfbWVzc2FnZV9yZXBsYWNlbWVudBgYIAEoCBIfChdzdXBwb3J0c19idW5kbGVkX3NraWxscxgZIAEoCBpwCgtNb2RlbENvbmZpZxIMCgRiYXNlGAEgASgJEhQKCHBsYW5uaW5nGAIgASgJQgIYARIOCgZjb2RpbmcYAyABKAkSEQoJY2xpX2FnZW50GAQgASgJEhoKEmNvbXB1dGVyX3VzZV9hZ2VudBgFIAEoCRrWAgoHQXBpS2V5cxIXCglhbnRocm9waWMYASABKAlCBIC1GAESFAoGb3BlbmFpGAIgASgJQgSAtRgBEhQKBmdvb2dsZRgDIAEoCUIEgLUYARIZCgtvcGVuX3JvdXRlchgEIAEoCUIEgLUYARIhChlhbGxvd191c2Vfb2Zfd2FycF9jcmVkaXRzGAUgASgIElUKD2F3c19jcmVkZW50aWFscxgGIAEoCzI8LndhcnAubXVsdGlfYWdlbnQudjEuUmVxdWVzdC5TZXR0aW5ncy5BcGlLZXlzLkFXU0NyZWRlbnRpYWxzGnEKDkFXU0NyZWRlbnRpYWxzEhgKCmFjY2Vzc19rZXkYASABKAlCBIC1GAESGAoKc2VjcmV0X2tleRgCIAEoCUIEgLUYARIbCg1zZXNzaW9uX3Rva2VuGAMgASgJQgSAtRgBEg4KBnJlZ2lvbhgEIAEoCRr+BAoKTUNQQ29udGV4dBJKCglyZXNvdXJjZXMYASADKAsyMy53YXJwLm11bHRpX2FnZW50LnYxLlJlcXVlc3QuTUNQQ29udGV4dC5NQ1BSZXNvdXJjZUICGAESQgoFdG9vbHMYAiADKAsyLy53YXJwLm11bHRpX2FnZW50LnYxLlJlcXVlc3QuTUNQQ29udGV4dC5NQ1BUb29sQgIYARJCCgdzZXJ2ZXJzGAMgAygLMjEud2FycC5tdWx0aV9hZ2VudC52MS5SZXF1ZXN0Lk1DUENvbnRleHQuTUNQU2VydmVyGmIKC01DUFJlc291cmNlEhEKA3VyaRgBIAEoCUIEgLUYARISCgRuYW1lGAIgASgJQgSAtRgBEhkKC2Rlc2NyaXB0aW9uGAMgASgJQgSAtRgBEhEKCW1pbWVfdHlwZRgEIAEoCRpnCgdNQ1BUb29sEhIKBG5hbWUYASABKAlCBIC1GAESGQoLZGVzY3JpcHRpb24YAiABKAlCBIC1GAESLQoMaW5wdXRfc2NoZW1hGAMgASgLMhcuZ29vZ2xlLnByb3RvYnVmLlN0cnVjdBrOAQoJTUNQU2VydmVyEhIKBG5hbWUYASABKAlCBIC1GAESGQoLZGVzY3JpcHRpb24YAiABKAlCBIC1GAESCgoCaWQYBSABKAkSRgoJcmVzb3VyY2VzGAMgAygLMjMud2FycC5tdWx0aV9hZ2VudC52MS5SZXF1ZXN0Lk1DUENvbnRleHQuTUNQUmVzb3VyY2USPgoFdG9vbHMYBCADKAsyLy53YXJwLm11bHRpX2FnZW50LnYxLlJlcXVlc3QuTUNQQ29udGV4dC5NQ1BUb29sKjEKDUF1dG9ub215TGV2ZWwSDgoKU1VQRVJWSVNFRBAAEhAKDFVOU1VQRVJWSVNFRBABKicKDklzb2xhdGlvbkxldmVsEggKBE5PTkUQABILCgdTQU5EQk9YEAFCOFouZ2l0aHViLmNvbS93YXJwL3dhcnAtcHJvdG8tYXBpcy9tdWx0aV9hZ2VudC92MZIDBdI+AhADYghlZGl0aW9uc3DoBw", [file_google_protobuf_empty, file_google_protobuf_go_features, file_google_protobuf_struct, file_input_context, file_attachment, file_options, file_suggestions, file_task, file_skill]);
/**
 * Describes the message warp.multi_agent.v1.Request.
 * Use `create(RequestSchema)` to create a new message.
 */
export const RequestSchema = /*@__PURE__*/ messageDesc(file_request, 0);
/**
 * Describes the message warp.multi_agent.v1.Request.TaskContext.
 * Use `create(Request_TaskContextSchema)` to create a new message.
 */
export const Request_TaskContextSchema = /*@__PURE__*/ messageDesc(file_request, 0, 0);
/**
 * Describes the message warp.multi_agent.v1.Request.Input.
 * Use `create(Request_InputSchema)` to create a new message.
 */
export const Request_InputSchema = /*@__PURE__*/ messageDesc(file_request, 0, 1);
/**
 * Describes the message warp.multi_agent.v1.Request.Input.UserQuery.
 * Use `create(Request_Input_UserQuerySchema)` to create a new message.
 */
export const Request_Input_UserQuerySchema = /*@__PURE__*/ messageDesc(file_request, 0, 1, 0);
/**
 * Describes the message warp.multi_agent.v1.Request.Input.CLIAgentUserQuery.
 * Use `create(Request_Input_CLIAgentUserQuerySchema)` to create a new message.
 */
export const Request_Input_CLIAgentUserQuerySchema = /*@__PURE__*/ messageDesc(file_request, 0, 1, 1);
/**
 * Describes the message warp.multi_agent.v1.Request.Input.UserInputs.
 * Use `create(Request_Input_UserInputsSchema)` to create a new message.
 */
export const Request_Input_UserInputsSchema = /*@__PURE__*/ messageDesc(file_request, 0, 1, 2);
/**
 * Describes the message warp.multi_agent.v1.Request.Input.UserInputs.UserInput.
 * Use `create(Request_Input_UserInputs_UserInputSchema)` to create a new message.
 */
export const Request_Input_UserInputs_UserInputSchema = /*@__PURE__*/ messageDesc(file_request, 0, 1, 2, 0);
/**
 * Describes the message warp.multi_agent.v1.Request.Input.ToolCallResult.
 * Use `create(Request_Input_ToolCallResultSchema)` to create a new message.
 */
export const Request_Input_ToolCallResultSchema = /*@__PURE__*/ messageDesc(file_request, 0, 1, 3);
/**
 * Describes the message warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.
 * Use `create(Request_Input_QueryWithCannedResponseSchema)` to create a new message.
 */
export const Request_Input_QueryWithCannedResponseSchema = /*@__PURE__*/ messageDesc(file_request, 0, 1, 4);
/**
 * Describes the message warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.Install.
 * Use `create(Request_Input_QueryWithCannedResponse_InstallSchema)` to create a new message.
 */
export const Request_Input_QueryWithCannedResponse_InstallSchema = /*@__PURE__*/ messageDesc(file_request, 0, 1, 4, 0);
/**
 * Describes the message warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.Code.
 * Use `create(Request_Input_QueryWithCannedResponse_CodeSchema)` to create a new message.
 */
export const Request_Input_QueryWithCannedResponse_CodeSchema = /*@__PURE__*/ messageDesc(file_request, 0, 1, 4, 1);
/**
 * Describes the message warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.Deploy.
 * Use `create(Request_Input_QueryWithCannedResponse_DeploySchema)` to create a new message.
 */
export const Request_Input_QueryWithCannedResponse_DeploySchema = /*@__PURE__*/ messageDesc(file_request, 0, 1, 4, 2);
/**
 * Describes the message warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.SomethingElse.
 * Use `create(Request_Input_QueryWithCannedResponse_SomethingElseSchema)` to create a new message.
 */
export const Request_Input_QueryWithCannedResponse_SomethingElseSchema = /*@__PURE__*/ messageDesc(file_request, 0, 1, 4, 3);
/**
 * Describes the message warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.CustomOnboardingRequest.
 * Use `create(Request_Input_QueryWithCannedResponse_CustomOnboardingRequestSchema)` to create a new message.
 */
export const Request_Input_QueryWithCannedResponse_CustomOnboardingRequestSchema = /*@__PURE__*/ messageDesc(file_request, 0, 1, 4, 4);
/**
 * Describes the message warp.multi_agent.v1.Request.Input.QueryWithCannedResponse.AgenticOnboardingKickoff.
 * Use `create(Request_Input_QueryWithCannedResponse_AgenticOnboardingKickoffSchema)` to create a new message.
 */
export const Request_Input_QueryWithCannedResponse_AgenticOnboardingKickoffSchema = /*@__PURE__*/ messageDesc(file_request, 0, 1, 4, 5);
/**
 * Describes the message warp.multi_agent.v1.Request.Input.AutoCodeDiffQuery.
 * Use `create(Request_Input_AutoCodeDiffQuerySchema)` to create a new message.
 */
export const Request_Input_AutoCodeDiffQuerySchema = /*@__PURE__*/ messageDesc(file_request, 0, 1, 5);
/**
 * Describes the message warp.multi_agent.v1.Request.Input.ResumeConversation.
 * Use `create(Request_Input_ResumeConversationSchema)` to create a new message.
 */
export const Request_Input_ResumeConversationSchema = /*@__PURE__*/ messageDesc(file_request, 0, 1, 6);
/**
 * Describes the message warp.multi_agent.v1.Request.Input.InitProjectRules.
 * Use `create(Request_Input_InitProjectRulesSchema)` to create a new message.
 */
export const Request_Input_InitProjectRulesSchema = /*@__PURE__*/ messageDesc(file_request, 0, 1, 7);
/**
 * Describes the message warp.multi_agent.v1.Request.Input.CreateNewProject.
 * Use `create(Request_Input_CreateNewProjectSchema)` to create a new message.
 */
export const Request_Input_CreateNewProjectSchema = /*@__PURE__*/ messageDesc(file_request, 0, 1, 8);
/**
 * Describes the message warp.multi_agent.v1.Request.Input.CloneRepository.
 * Use `create(Request_Input_CloneRepositorySchema)` to create a new message.
 */
export const Request_Input_CloneRepositorySchema = /*@__PURE__*/ messageDesc(file_request, 0, 1, 9);
/**
 * Describes the message warp.multi_agent.v1.Request.Input.CreateEnvironment.
 * Use `create(Request_Input_CreateEnvironmentSchema)` to create a new message.
 */
export const Request_Input_CreateEnvironmentSchema = /*@__PURE__*/ messageDesc(file_request, 0, 1, 10);
/**
 * Describes the message warp.multi_agent.v1.Request.Input.TriggerSuggestPrompt.
 * Use `create(Request_Input_TriggerSuggestPromptSchema)` to create a new message.
 */
export const Request_Input_TriggerSuggestPromptSchema = /*@__PURE__*/ messageDesc(file_request, 0, 1, 11);
/**
 * Describes the message warp.multi_agent.v1.Request.Input.CodeReview.
 * Use `create(Request_Input_CodeReviewSchema)` to create a new message.
 */
export const Request_Input_CodeReviewSchema = /*@__PURE__*/ messageDesc(file_request, 0, 1, 12);
/**
 * Describes the message warp.multi_agent.v1.Request.Input.CodeReview.InitialReviewComments.
 * Use `create(Request_Input_CodeReview_InitialReviewCommentsSchema)` to create a new message.
 */
export const Request_Input_CodeReview_InitialReviewCommentsSchema = /*@__PURE__*/ messageDesc(file_request, 0, 1, 12, 0);
/**
 * Describes the message warp.multi_agent.v1.Request.Input.FetchReviewComments.
 * Use `create(Request_Input_FetchReviewCommentsSchema)` to create a new message.
 */
export const Request_Input_FetchReviewCommentsSchema = /*@__PURE__*/ messageDesc(file_request, 0, 1, 13);
/**
 * Describes the message warp.multi_agent.v1.Request.Input.SummarizeConversation.
 * Use `create(Request_Input_SummarizeConversationSchema)` to create a new message.
 */
export const Request_Input_SummarizeConversationSchema = /*@__PURE__*/ messageDesc(file_request, 0, 1, 14);
/**
 * Describes the message warp.multi_agent.v1.Request.Input.StartFromAmbientRunPrompt.
 * Use `create(Request_Input_StartFromAmbientRunPromptSchema)` to create a new message.
 */
export const Request_Input_StartFromAmbientRunPromptSchema = /*@__PURE__*/ messageDesc(file_request, 0, 1, 15);
/**
 * Describes the message warp.multi_agent.v1.Request.Input.InvokeSkill.
 * Use `create(Request_Input_InvokeSkillSchema)` to create a new message.
 */
export const Request_Input_InvokeSkillSchema = /*@__PURE__*/ messageDesc(file_request, 0, 1, 16);
/**
 * Describes the message warp.multi_agent.v1.Request.Metadata.
 * Use `create(Request_MetadataSchema)` to create a new message.
 */
export const Request_MetadataSchema = /*@__PURE__*/ messageDesc(file_request, 0, 2);
/**
 * Describes the message warp.multi_agent.v1.Request.Settings.
 * Use `create(Request_SettingsSchema)` to create a new message.
 */
export const Request_SettingsSchema = /*@__PURE__*/ messageDesc(file_request, 0, 3);
/**
 * Describes the message warp.multi_agent.v1.Request.Settings.ModelConfig.
 * Use `create(Request_Settings_ModelConfigSchema)` to create a new message.
 */
export const Request_Settings_ModelConfigSchema = /*@__PURE__*/ messageDesc(file_request, 0, 3, 0);
/**
 * Describes the message warp.multi_agent.v1.Request.Settings.ApiKeys.
 * Use `create(Request_Settings_ApiKeysSchema)` to create a new message.
 */
export const Request_Settings_ApiKeysSchema = /*@__PURE__*/ messageDesc(file_request, 0, 3, 1);
/**
 * Describes the message warp.multi_agent.v1.Request.Settings.ApiKeys.AWSCredentials.
 * Use `create(Request_Settings_ApiKeys_AWSCredentialsSchema)` to create a new message.
 */
export const Request_Settings_ApiKeys_AWSCredentialsSchema = /*@__PURE__*/ messageDesc(file_request, 0, 3, 1, 0);
/**
 * Describes the message warp.multi_agent.v1.Request.MCPContext.
 * Use `create(Request_MCPContextSchema)` to create a new message.
 */
export const Request_MCPContextSchema = /*@__PURE__*/ messageDesc(file_request, 0, 4);
/**
 * Describes the message warp.multi_agent.v1.Request.MCPContext.MCPResource.
 * Use `create(Request_MCPContext_MCPResourceSchema)` to create a new message.
 */
export const Request_MCPContext_MCPResourceSchema = /*@__PURE__*/ messageDesc(file_request, 0, 4, 0);
/**
 * Describes the message warp.multi_agent.v1.Request.MCPContext.MCPTool.
 * Use `create(Request_MCPContext_MCPToolSchema)` to create a new message.
 */
export const Request_MCPContext_MCPToolSchema = /*@__PURE__*/ messageDesc(file_request, 0, 4, 1);
/**
 * Describes the message warp.multi_agent.v1.Request.MCPContext.MCPServer.
 * Use `create(Request_MCPContext_MCPServerSchema)` to create a new message.
 */
export const Request_MCPContext_MCPServerSchema = /*@__PURE__*/ messageDesc(file_request, 0, 4, 2);
/**
 * @generated from enum warp.multi_agent.v1.AutonomyLevel
 */
export var AutonomyLevel;
(function (AutonomyLevel) {
    /**
     * This is the default and lowest level of autonomy. This assumes a user is
     * present to answer clarifying questions, approve requested commands, etc.
     *
     * @generated from enum value: SUPERVISED = 0;
     */
    AutonomyLevel[AutonomyLevel["SUPERVISED"] = 0] = "SUPERVISED";
    /**
     * No user is available to answer questions.
     *
     * @generated from enum value: UNSUPERVISED = 1;
     */
    AutonomyLevel[AutonomyLevel["UNSUPERVISED"] = 1] = "UNSUPERVISED";
})(AutonomyLevel || (AutonomyLevel = {}));
/**
 * Describes the enum warp.multi_agent.v1.AutonomyLevel.
 */
export const AutonomyLevelSchema = /*@__PURE__*/ enumDesc(file_request, 0);
/**
 * @generated from enum warp.multi_agent.v1.IsolationLevel
 */
export var IsolationLevel;
(function (IsolationLevel) {
    /**
     * i.e. on a user's machine with no isolation from their environment.
     *
     * @generated from enum value: NONE = 0;
     */
    IsolationLevel[IsolationLevel["NONE"] = 0] = "NONE";
    /**
     * Fully sandboxed.
     *
     * @generated from enum value: SANDBOX = 1;
     */
    IsolationLevel[IsolationLevel["SANDBOX"] = 1] = "SANDBOX";
})(IsolationLevel || (IsolationLevel = {}));
/**
 * Describes the enum warp.multi_agent.v1.IsolationLevel.
 */
export const IsolationLevelSchema = /*@__PURE__*/ enumDesc(file_request, 1);
