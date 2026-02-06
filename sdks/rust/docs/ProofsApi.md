# \ProofsApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**proofs_fulfillment_generate**](ProofsApi.md#proofs_fulfillment_generate) | **POST** /v1/proofs/fulfillment/generate | Generate fulfillment proof
[**proofs_fulfillment_verify**](ProofsApi.md#proofs_fulfillment_verify) | **POST** /v1/proofs/fulfillment/verify | Verify fulfillment proof
[**proofs_funding_generate**](ProofsApi.md#proofs_funding_generate) | **POST** /v1/proofs/funding/generate | Generate funding proof
[**proofs_funding_verify**](ProofsApi.md#proofs_funding_verify) | **POST** /v1/proofs/funding/verify | Verify funding proof
[**proofs_range_generate**](ProofsApi.md#proofs_range_generate) | **POST** /v1/proofs/range/generate | Generate STARK range proof
[**proofs_range_verify**](ProofsApi.md#proofs_range_verify) | **POST** /v1/proofs/range/verify | Verify STARK range proof
[**proofs_validity_generate**](ProofsApi.md#proofs_validity_generate) | **POST** /v1/proofs/validity/generate | Generate validity proof
[**proofs_validity_verify**](ProofsApi.md#proofs_validity_verify) | **POST** /v1/proofs/validity/verify | Verify validity proof



## proofs_fulfillment_generate

> models::ProofsFulfillmentGenerate200Response proofs_fulfillment_generate(proofs_fulfillment_generate_request)
Generate fulfillment proof

Generates a ZK proof that the solver delivered output >= minimum to the correct recipient.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**proofs_fulfillment_generate_request** | [**ProofsFulfillmentGenerateRequest**](ProofsFulfillmentGenerateRequest.md) |  | [required] |

### Return type

[**models::ProofsFulfillmentGenerate200Response**](proofsFulfillmentGenerate_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## proofs_fulfillment_verify

> models::CommitmentVerify200Response proofs_fulfillment_verify(proofs_fulfillment_verify_request)
Verify fulfillment proof

Verifies a previously generated fulfillment proof.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**proofs_fulfillment_verify_request** | [**ProofsFulfillmentVerifyRequest**](ProofsFulfillmentVerifyRequest.md) |  | [required] |

### Return type

[**models::CommitmentVerify200Response**](commitmentVerify_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## proofs_funding_generate

> models::ProofsFundingGenerate200Response proofs_funding_generate(proofs_funding_generate_request)
Generate funding proof

Generates a ZK proof that balance >= minimumRequired without revealing the balance.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**proofs_funding_generate_request** | [**ProofsFundingGenerateRequest**](ProofsFundingGenerateRequest.md) |  | [required] |

### Return type

[**models::ProofsFundingGenerate200Response**](proofsFundingGenerate_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## proofs_funding_verify

> models::CommitmentVerify200Response proofs_funding_verify(proofs_funding_verify_request)
Verify funding proof

Verifies a previously generated funding proof.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**proofs_funding_verify_request** | [**ProofsFundingVerifyRequest**](ProofsFundingVerifyRequest.md) |  | [required] |

### Return type

[**models::CommitmentVerify200Response**](commitmentVerify_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## proofs_range_generate

> models::ProofsRangeGenerate200Response proofs_range_generate(proofs_range_generate_request)
Generate STARK range proof

Generates a STARK-based range proof that value >= threshold on a Pedersen commitment without revealing the value. Uses M31 limb decomposition. Currently uses a mock STARK prover — real Murkl integration coming soon.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**proofs_range_generate_request** | [**ProofsRangeGenerateRequest**](ProofsRangeGenerateRequest.md) |  | [required] |

### Return type

[**models::ProofsRangeGenerate200Response**](proofsRangeGenerate_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## proofs_range_verify

> models::CommitmentVerify200Response proofs_range_verify(proofs_range_verify_request)
Verify STARK range proof

Verifies a previously generated STARK range proof.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**proofs_range_verify_request** | [**ProofsRangeVerifyRequest**](ProofsRangeVerifyRequest.md) |  | [required] |

### Return type

[**models::CommitmentVerify200Response**](commitmentVerify_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## proofs_validity_generate

> models::ProofsValidityGenerate200Response proofs_validity_generate(proofs_validity_generate_request)
Generate validity proof

Generates a ZK proof that an intent is authorized by the sender without revealing the sender.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**proofs_validity_generate_request** | [**ProofsValidityGenerateRequest**](ProofsValidityGenerateRequest.md) |  | [required] |

### Return type

[**models::ProofsValidityGenerate200Response**](proofsValidityGenerate_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## proofs_validity_verify

> models::CommitmentVerify200Response proofs_validity_verify(proofs_validity_verify_request)
Verify validity proof

Verifies a previously generated validity proof.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**proofs_validity_verify_request** | [**ProofsValidityVerifyRequest**](ProofsValidityVerifyRequest.md) |  | [required] |

### Return type

[**models::CommitmentVerify200Response**](commitmentVerify_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

