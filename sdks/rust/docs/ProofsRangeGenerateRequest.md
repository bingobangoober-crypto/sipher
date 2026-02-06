# ProofsRangeGenerateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **String** | Value to prove (private, not revealed) | 
**threshold** | **String** | Minimum threshold (public) | 
**blinding_factor** | **String** | 0x-prefixed 32-byte hex string | 
**commitment** | Option<**String**> | Optional existing Pedersen commitment. If omitted, one is created from value + blindingFactor. | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


