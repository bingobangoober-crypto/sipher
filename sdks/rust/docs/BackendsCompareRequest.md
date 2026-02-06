# BackendsCompareRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **Operation** | Type of privacy operation to compare backends for (enum: stealth_privacy, encrypted_compute, compliance_audit) | 
**chain** | Option<**String**> | Target blockchain (default: solana) | [optional]
**amount** | Option<**String**> | Transaction amount in smallest units | [optional]
**prioritize** | Option<**Prioritize**> | Factor to prioritize in scoring (adjusts weights to 60%) (enum: cost, speed, privacy) | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


