# \HealthApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_errors**](HealthApi.md#get_errors) | **GET** /v1/errors | Error code catalog
[**get_health**](HealthApi.md#get_health) | **GET** /v1/health | Health check
[**get_ready**](HealthApi.md#get_ready) | **GET** /v1/ready | Readiness probe



## get_errors

> models::GetErrors200Response get_errors()
Error code catalog

Returns all API error codes with descriptions, HTTP statuses, and retry guidance.

### Parameters

This endpoint does not need any parameter.

### Return type

[**models::GetErrors200Response**](getErrors_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_health

> models::GetHealth200Response get_health()
Health check

### Parameters

This endpoint does not need any parameter.

### Return type

[**models::GetHealth200Response**](getHealth_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_ready

> models::GetReady200Response get_ready()
Readiness probe

Returns 200 only if all critical systems are healthy. Use as Docker/k8s readiness probe.

### Parameters

This endpoint does not need any parameter.

### Return type

[**models::GetReady200Response**](getReady_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

