# \PrivacyApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**privacy_score**](PrivacyApi.md#privacy_score) | **POST** /v1/privacy/score | Analyze wallet privacy score



## privacy_score

> models::PrivacyScore200Response privacy_score(privacy_score_request)
Analyze wallet privacy score

Analyzes on-chain activity of a Solana wallet and returns a 0-100 privacy score with breakdown by factor and actionable recommendations.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**privacy_score_request** | [**PrivacyScoreRequest**](PrivacyScoreRequest.md) |  | [required] |

### Return type

[**models::PrivacyScore200Response**](privacyScore_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

