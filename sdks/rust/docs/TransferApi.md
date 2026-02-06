# \TransferApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transfer_claim**](TransferApi.md#transfer_claim) | **POST** /v1/transfer/claim | Claim stealth payment (signed)
[**transfer_private**](TransferApi.md#transfer_private) | **POST** /v1/transfer/private | Build unified private transfer (chain-agnostic)
[**transfer_shield**](TransferApi.md#transfer_shield) | **POST** /v1/transfer/shield | Build shielded transfer (unsigned)



## transfer_claim

> models::TransferClaim200Response transfer_claim(transfer_claim_request)
Claim stealth payment (signed)

Derives stealth private key, signs and submits claim transaction on-chain.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**transfer_claim_request** | [**TransferClaimRequest**](TransferClaimRequest.md) |  | [required] |

### Return type

[**models::TransferClaim200Response**](transferClaim_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## transfer_private

> models::TransferPrivate200Response transfer_private(transfer_private_request)
Build unified private transfer (chain-agnostic)

Builds a private transfer to a stealth address on any supported chain. Returns chain-specific transaction data (Solana unsigned tx, EVM tx descriptor, or NEAR action descriptors). Currently supports: solana, ethereum, polygon, arbitrum, optimism, base, near.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**transfer_private_request** | [**TransferPrivateRequest**](TransferPrivateRequest.md) |  | [required] |

### Return type

[**models::TransferPrivate200Response**](transferPrivate_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## transfer_shield

> models::TransferShield200Response transfer_shield(transfer_shield_request)
Build shielded transfer (unsigned)

Creates an unsigned Solana transaction sending to a stealth address with Pedersen commitment.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**transfer_shield_request** | [**TransferShieldRequest**](TransferShieldRequest.md) |  | [required] |

### Return type

[**models::TransferShield200Response**](transferShield_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

