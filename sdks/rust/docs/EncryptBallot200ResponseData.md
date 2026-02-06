# EncryptBallot200ResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commitment** | Option<**String**> | Pedersen commitment to the vote value | [optional]
**blinding_factor** | Option<**String**> | Blinding factor for the commitment | [optional]
**nullifier** | Option<**String**> | Deterministic nullifier (prevents double-voting) | [optional]
**vote** | Option<**Vote**> |  (enum: yes, no, abstain) | [optional]
**proposal_id** | Option<**String**> |  | [optional]
**anonymous_id** | Option<**String**> | Anonymous voter identifier (stealth address or hash) | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


