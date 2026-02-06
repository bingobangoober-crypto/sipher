# SubmitArciumComputationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**circuit_id** | **CircuitId** | Circuit identifier (enum: private_transfer, check_balance, validate_swap) | 
**encrypted_inputs** | **Vec<String>** | Encrypted inputs as hex strings | 
**chain** | Option<**String**> | Target chain | [optional][default to solana]
**cipher** | Option<**Cipher**> |  (enum: aes128, aes192, aes256, rescue) | [optional][default to Aes256]
**viewing_key** | Option<[**models::SubmitArciumComputationRequestViewingKey**](SubmitArciumComputationRequestViewingKey.md)> |  | [optional]
**cluster** | Option<**String**> | MPC cluster to use | [optional]
**timeout** | Option<**i32**> | Timeout in milliseconds | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


