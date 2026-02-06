# EncryptBallotRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**proposal_id** | **String** | Unique proposal identifier | 
**vote** | **Vote** | Vote choice (enum: yes, no, abstain) | 
**voter_secret** | **String** | Private entropy for nullifier derivation (never stored) | 
**stealth_address** | Option<**String**> | Optional stealth address for voter anonymity (from /stealth/derive) | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


