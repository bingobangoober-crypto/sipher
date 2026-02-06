# ProofsApi

All URIs are relative to *https://sipher.sip-protocol.org*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**proofsFulfillmentGenerate**](ProofsApi.md#proofsfulfillmentgenerateoperation) | **POST** /v1/proofs/fulfillment/generate | Generate fulfillment proof |
| [**proofsFulfillmentVerify**](ProofsApi.md#proofsfulfillmentverifyoperation) | **POST** /v1/proofs/fulfillment/verify | Verify fulfillment proof |
| [**proofsFundingGenerate**](ProofsApi.md#proofsfundinggenerateoperation) | **POST** /v1/proofs/funding/generate | Generate funding proof |
| [**proofsFundingVerify**](ProofsApi.md#proofsfundingverifyoperation) | **POST** /v1/proofs/funding/verify | Verify funding proof |
| [**proofsRangeGenerate**](ProofsApi.md#proofsrangegenerateoperation) | **POST** /v1/proofs/range/generate | Generate STARK range proof |
| [**proofsRangeVerify**](ProofsApi.md#proofsrangeverifyoperation) | **POST** /v1/proofs/range/verify | Verify STARK range proof |
| [**proofsValidityGenerate**](ProofsApi.md#proofsvaliditygenerateoperation) | **POST** /v1/proofs/validity/generate | Generate validity proof |
| [**proofsValidityVerify**](ProofsApi.md#proofsvalidityverifyoperation) | **POST** /v1/proofs/validity/verify | Verify validity proof |



## proofsFulfillmentGenerate

> ProofsFulfillmentGenerate200Response proofsFulfillmentGenerate(proofsFulfillmentGenerateRequest)

Generate fulfillment proof

Generates a ZK proof that the solver delivered output &gt;&#x3D; minimum to the correct recipient.

### Example

```ts
import {
  Configuration,
  ProofsApi,
} from '@sip-protocol/sipher-client';
import type { ProofsFulfillmentGenerateOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProofsApi(config);

  const body = {
    // ProofsFulfillmentGenerateRequest
    proofsFulfillmentGenerateRequest: ...,
  } satisfies ProofsFulfillmentGenerateOperationRequest;

  try {
    const data = await api.proofsFulfillmentGenerate(body);
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
| **proofsFulfillmentGenerateRequest** | [ProofsFulfillmentGenerateRequest](ProofsFulfillmentGenerateRequest.md) |  | |

### Return type

[**ProofsFulfillmentGenerate200Response**](ProofsFulfillmentGenerate200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Proof generated |  -  |
| **400** | Validation or proof generation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## proofsFulfillmentVerify

> CommitmentVerify200Response proofsFulfillmentVerify(proofsFulfillmentVerifyRequest)

Verify fulfillment proof

Verifies a previously generated fulfillment proof.

### Example

```ts
import {
  Configuration,
  ProofsApi,
} from '@sip-protocol/sipher-client';
import type { ProofsFulfillmentVerifyOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProofsApi(config);

  const body = {
    // ProofsFulfillmentVerifyRequest
    proofsFulfillmentVerifyRequest: ...,
  } satisfies ProofsFulfillmentVerifyOperationRequest;

  try {
    const data = await api.proofsFulfillmentVerify(body);
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
| **proofsFulfillmentVerifyRequest** | [ProofsFulfillmentVerifyRequest](ProofsFulfillmentVerifyRequest.md) |  | |

### Return type

[**CommitmentVerify200Response**](CommitmentVerify200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Verification result |  -  |
| **400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## proofsFundingGenerate

> ProofsFundingGenerate200Response proofsFundingGenerate(proofsFundingGenerateRequest)

Generate funding proof

Generates a ZK proof that balance &gt;&#x3D; minimumRequired without revealing the balance.

### Example

```ts
import {
  Configuration,
  ProofsApi,
} from '@sip-protocol/sipher-client';
import type { ProofsFundingGenerateOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProofsApi(config);

  const body = {
    // ProofsFundingGenerateRequest
    proofsFundingGenerateRequest: ...,
  } satisfies ProofsFundingGenerateOperationRequest;

  try {
    const data = await api.proofsFundingGenerate(body);
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
| **proofsFundingGenerateRequest** | [ProofsFundingGenerateRequest](ProofsFundingGenerateRequest.md) |  | |

### Return type

[**ProofsFundingGenerate200Response**](ProofsFundingGenerate200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Proof generated |  -  |
| **400** | Validation or proof generation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## proofsFundingVerify

> CommitmentVerify200Response proofsFundingVerify(proofsFundingVerifyRequest)

Verify funding proof

Verifies a previously generated funding proof.

### Example

```ts
import {
  Configuration,
  ProofsApi,
} from '@sip-protocol/sipher-client';
import type { ProofsFundingVerifyOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProofsApi(config);

  const body = {
    // ProofsFundingVerifyRequest
    proofsFundingVerifyRequest: ...,
  } satisfies ProofsFundingVerifyOperationRequest;

  try {
    const data = await api.proofsFundingVerify(body);
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
| **proofsFundingVerifyRequest** | [ProofsFundingVerifyRequest](ProofsFundingVerifyRequest.md) |  | |

### Return type

[**CommitmentVerify200Response**](CommitmentVerify200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Verification result |  -  |
| **400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## proofsRangeGenerate

> ProofsRangeGenerate200Response proofsRangeGenerate(proofsRangeGenerateRequest)

Generate STARK range proof

Generates a STARK-based range proof that value &gt;&#x3D; threshold on a Pedersen commitment without revealing the value. Uses M31 limb decomposition. Currently uses a mock STARK prover — real Murkl integration coming soon.

### Example

```ts
import {
  Configuration,
  ProofsApi,
} from '@sip-protocol/sipher-client';
import type { ProofsRangeGenerateOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProofsApi(config);

  const body = {
    // ProofsRangeGenerateRequest
    proofsRangeGenerateRequest: ...,
  } satisfies ProofsRangeGenerateOperationRequest;

  try {
    const data = await api.proofsRangeGenerate(body);
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
| **proofsRangeGenerateRequest** | [ProofsRangeGenerateRequest](ProofsRangeGenerateRequest.md) |  | |

### Return type

[**ProofsRangeGenerate200Response**](ProofsRangeGenerate200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Range proof generated |  -  |
| **400** | Validation or proof generation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## proofsRangeVerify

> CommitmentVerify200Response proofsRangeVerify(proofsRangeVerifyRequest)

Verify STARK range proof

Verifies a previously generated STARK range proof.

### Example

```ts
import {
  Configuration,
  ProofsApi,
} from '@sip-protocol/sipher-client';
import type { ProofsRangeVerifyOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProofsApi(config);

  const body = {
    // ProofsRangeVerifyRequest
    proofsRangeVerifyRequest: ...,
  } satisfies ProofsRangeVerifyOperationRequest;

  try {
    const data = await api.proofsRangeVerify(body);
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
| **proofsRangeVerifyRequest** | [ProofsRangeVerifyRequest](ProofsRangeVerifyRequest.md) |  | |

### Return type

[**CommitmentVerify200Response**](CommitmentVerify200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Verification result |  -  |
| **400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## proofsValidityGenerate

> ProofsValidityGenerate200Response proofsValidityGenerate(proofsValidityGenerateRequest)

Generate validity proof

Generates a ZK proof that an intent is authorized by the sender without revealing the sender.

### Example

```ts
import {
  Configuration,
  ProofsApi,
} from '@sip-protocol/sipher-client';
import type { ProofsValidityGenerateOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProofsApi(config);

  const body = {
    // ProofsValidityGenerateRequest
    proofsValidityGenerateRequest: ...,
  } satisfies ProofsValidityGenerateOperationRequest;

  try {
    const data = await api.proofsValidityGenerate(body);
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
| **proofsValidityGenerateRequest** | [ProofsValidityGenerateRequest](ProofsValidityGenerateRequest.md) |  | |

### Return type

[**ProofsValidityGenerate200Response**](ProofsValidityGenerate200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Proof generated |  -  |
| **400** | Validation or proof generation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## proofsValidityVerify

> CommitmentVerify200Response proofsValidityVerify(proofsValidityVerifyRequest)

Verify validity proof

Verifies a previously generated validity proof.

### Example

```ts
import {
  Configuration,
  ProofsApi,
} from '@sip-protocol/sipher-client';
import type { ProofsValidityVerifyOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProofsApi(config);

  const body = {
    // ProofsValidityVerifyRequest
    proofsValidityVerifyRequest: ...,
  } satisfies ProofsValidityVerifyOperationRequest;

  try {
    const data = await api.proofsValidityVerify(body);
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
| **proofsValidityVerifyRequest** | [ProofsValidityVerifyRequest](ProofsValidityVerifyRequest.md) |  | |

### Return type

[**CommitmentVerify200Response**](CommitmentVerify200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Verification result |  -  |
| **400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

