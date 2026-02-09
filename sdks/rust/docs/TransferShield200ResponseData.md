# TransferShield200ResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction** | Option<**String**> | Base64-encoded unsigned transaction | [optional]
**stealth_address** | Option<**String**> |  | [optional]
**ephemeral_public_key** | Option<**String**> | 0x-prefixed 32-byte hex string | [optional]
**view_tag** | Option<**i32**> |  | [optional]
**commitment** | Option<**String**> | 0x-prefixed 32-byte hex string | [optional]
**blinding_factor** | Option<**String**> | 0x-prefixed 32-byte hex string | [optional]
**viewing_key_hash** | Option<**String**> | 0x-prefixed 32-byte hex string | [optional]
**shared_secret** | Option<**String**> | 0x-prefixed 32-byte hex string | [optional]
**program_id** | Option<**String**> | SIP Privacy program ID | [optional]
**note_id** | Option<**String**> | Transfer record PDA (base58). Null when using SystemProgram fallback. | [optional]
**instruction_type** | Option<**InstructionType**> | Which program path was used for the transaction. (enum: anchor, system) | [optional]
**encrypted_amount** | Option<**String**> | Amount encrypted with viewing key hash (hex). Only present on Anchor path. | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


