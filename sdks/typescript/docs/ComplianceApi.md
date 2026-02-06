# ComplianceApi

All URIs are relative to *https://sipher.sip-protocol.org*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**complianceDisclose**](ComplianceApi.md#compliancediscloseoperation) | **POST** /v1/compliance/disclose | Selective disclosure with scoped viewing key (enterprise) |
| [**complianceReport**](ComplianceApi.md#compliancereportoperation) | **POST** /v1/compliance/report | Generate encrypted audit report (enterprise) |
| [**getComplianceReport**](ComplianceApi.md#getcompliancereport) | **GET** /v1/compliance/report/{id} | Retrieve generated compliance report (enterprise) |



## complianceDisclose

> ComplianceDisclose200Response complianceDisclose(complianceDiscloseRequest)

Selective disclosure with scoped viewing key (enterprise)

Creates a selective disclosure for a verified auditor. Derives a scoped viewing key limited to the specified scope, encrypts transaction data, and returns the disclosure record. Requires enterprise tier.

### Example

```ts
import {
  Configuration,
  ComplianceApi,
} from '@sip-protocol/sipher-client';
import type { ComplianceDiscloseOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ComplianceApi(config);

  const body = {
    // ComplianceDiscloseRequest
    complianceDiscloseRequest: ...,
  } satisfies ComplianceDiscloseOperationRequest;

  try {
    const data = await api.complianceDisclose(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **complianceDiscloseRequest** | [ComplianceDiscloseRequest](ComplianceDiscloseRequest.md) |  | |

### Return type

[**ComplianceDisclose200Response**](ComplianceDisclose200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Disclosure created |  -  |
| **400** | Validation error |  -  |
| **403** | Tier access denied (enterprise only) |  -  |
| **500** | Disclosure failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## complianceReport

> ComplianceReport200Response complianceReport(complianceReportRequest)

Generate encrypted audit report (enterprise)

Generates an encrypted compliance audit report for the specified time range. Verifies auditor identity, produces transaction summaries with encrypted entries, and caches the report for 24 hours. Requires enterprise tier.

### Example

```ts
import {
  Configuration,
  ComplianceApi,
} from '@sip-protocol/sipher-client';
import type { ComplianceReportOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ComplianceApi(config);

  const body = {
    // ComplianceReportRequest
    complianceReportRequest: ...,
  } satisfies ComplianceReportOperationRequest;

  try {
    const data = await api.complianceReport(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **complianceReportRequest** | [ComplianceReportRequest](ComplianceReportRequest.md) |  | |

### Return type

[**ComplianceReport200Response**](ComplianceReport200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Report generated |  -  |
| **400** | Validation error |  -  |
| **403** | Tier access denied (enterprise only) |  -  |
| **500** | Report generation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getComplianceReport

> GetComplianceReport200Response getComplianceReport(id)

Retrieve generated compliance report (enterprise)

Retrieves a previously generated compliance audit report by ID. Reports are cached for 24 hours after generation. Requires enterprise tier.

### Example

```ts
import {
  Configuration,
  ComplianceApi,
} from '@sip-protocol/sipher-client';
import type { GetComplianceReportRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ComplianceApi(config);

  const body = {
    // string | Report ID returned from POST /v1/compliance/report
    id: id_example,
  } satisfies GetComplianceReportRequest;

  try {
    const data = await api.getComplianceReport(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Report ID returned from POST /v1/compliance/report | [Defaults to `undefined`] |

### Return type

[**GetComplianceReport200Response**](GetComplianceReport200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Report found |  -  |
| **400** | Invalid report ID format |  -  |
| **403** | Tier access denied (enterprise only) |  -  |
| **404** | Report not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

