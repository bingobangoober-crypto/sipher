# \ComplianceApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**compliance_disclose**](ComplianceApi.md#compliance_disclose) | **POST** /v1/compliance/disclose | Selective disclosure with scoped viewing key (enterprise)
[**compliance_report**](ComplianceApi.md#compliance_report) | **POST** /v1/compliance/report | Generate encrypted audit report (enterprise)
[**get_compliance_report**](ComplianceApi.md#get_compliance_report) | **GET** /v1/compliance/report/{id} | Retrieve generated compliance report (enterprise)



## compliance_disclose

> models::ComplianceDisclose200Response compliance_disclose(compliance_disclose_request)
Selective disclosure with scoped viewing key (enterprise)

Creates a selective disclosure for a verified auditor. Derives a scoped viewing key limited to the specified scope, encrypts transaction data, and returns the disclosure record. Requires enterprise tier.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**compliance_disclose_request** | [**ComplianceDiscloseRequest**](ComplianceDiscloseRequest.md) |  | [required] |

### Return type

[**models::ComplianceDisclose200Response**](complianceDisclose_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## compliance_report

> models::ComplianceReport200Response compliance_report(compliance_report_request)
Generate encrypted audit report (enterprise)

Generates an encrypted compliance audit report for the specified time range. Verifies auditor identity, produces transaction summaries with encrypted entries, and caches the report for 24 hours. Requires enterprise tier.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**compliance_report_request** | [**ComplianceReportRequest**](ComplianceReportRequest.md) |  | [required] |

### Return type

[**models::ComplianceReport200Response**](complianceReport_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_compliance_report

> models::GetComplianceReport200Response get_compliance_report(id)
Retrieve generated compliance report (enterprise)

Retrieves a previously generated compliance audit report by ID. Reports are cached for 24 hours after generation. Requires enterprise tier.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Report ID returned from POST /v1/compliance/report | [required] |

### Return type

[**models::GetComplianceReport200Response**](getComplianceReport_200_response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

