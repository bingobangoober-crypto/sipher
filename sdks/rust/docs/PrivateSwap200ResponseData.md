# PrivateSwap200ResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_stealth_address** | Option<**String**> | Base58-encoded Solana public key | [optional]
**ephemeral_public_key** | Option<**String**> | 0x-prefixed 32-byte hex string | [optional]
**view_tag** | Option<**i32**> |  | [optional]
**commitment** | Option<**String**> | Pedersen commitment for output amount | [optional]
**blinding_factor** | Option<**String**> | Blinding factor for commitment | [optional]
**viewing_key_hash** | Option<**String**> | 0x-prefixed 32-byte hex string | [optional]
**shared_secret** | Option<**String**> |  | [optional]
**input_mint** | Option<**String**> |  | [optional]
**input_amount** | Option<**String**> |  | [optional]
**output_mint** | Option<**String**> |  | [optional]
**output_amount** | Option<**String**> |  | [optional]
**output_amount_min** | Option<**String**> |  | [optional]
**quote_id** | Option<**String**> |  | [optional]
**price_impact_pct** | Option<**String**> |  | [optional]
**slippage_bps** | Option<**i32**> |  | [optional]
**transactions** | Option<[**Vec<models::PrivateSwap200ResponseDataTransactionsInner>**](PrivateSwap200ResponseDataTransactionsInner.md)> |  | [optional]
**execution_order** | Option<**Vec<String>**> |  | [optional]
**estimated_compute_units** | Option<**i32**> |  | [optional]
**cspl_wrapped** | Option<**bool**> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


