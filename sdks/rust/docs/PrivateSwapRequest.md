# PrivateSwapRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sender** | **String** | Base58-encoded Solana public key | 
**input_mint** | **String** | SPL token mint to swap from | 
**input_amount** | **String** | Amount to swap (smallest units) | 
**output_mint** | **String** | SPL token mint to swap to | 
**slippage_bps** | Option<**i32**> | Slippage tolerance in basis points (default 50 = 0.5%) | [optional][default to 50]
**recipient_meta_address** | Option<[**models::PrivateSwapRequestRecipientMetaAddress**](PrivateSwapRequestRecipientMetaAddress.md)> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


