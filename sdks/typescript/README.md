# @sip-protocol/sipher-client@0.1.0

A TypeScript SDK client for the sipher.sip-protocol.org API.

## Usage

First, install the SDK from npm.

```bash
npm install @sip-protocol/sipher-client --save
```

Next, try it out.


```ts
import {
  Configuration,
  ArciumApi,
} from '@sip-protocol/sipher-client';
import type { DecryptArciumResultOperationRequest } from '@sip-protocol/sipher-client';

async function example() {
  console.log("🚀 Testing @sip-protocol/sipher-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ArciumApi(config);

  const body = {
    // DecryptArciumResultRequest
    decryptArciumResultRequest: ...,
  } satisfies DecryptArciumResultOperationRequest;

  try {
    const data = await api.decryptArciumResult(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *https://sipher.sip-protocol.org*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*ArciumApi* | [**decryptArciumResult**](docs/ArciumApi.md#decryptarciumresultoperation) | **POST** /v1/arcium/decrypt | Decrypt computation result
*ArciumApi* | [**getArciumComputationStatus**](docs/ArciumApi.md#getarciumcomputationstatus) | **GET** /v1/arcium/compute/{id}/status | Get computation status
*ArciumApi* | [**submitArciumComputation**](docs/ArciumApi.md#submitarciumcomputationoperation) | **POST** /v1/arcium/compute | Submit MPC computation
*BackendsApi* | [**backendsCompare**](docs/BackendsApi.md#backendscompareoperation) | **POST** /v1/backends/compare | Compare privacy backends
*BackendsApi* | [**backendsHealth**](docs/BackendsApi.md#backendshealth) | **GET** /v1/backends/{id}/health | Check backend health
*BackendsApi* | [**backendsList**](docs/BackendsApi.md#backendslist) | **GET** /v1/backends | List privacy backends
*BackendsApi* | [**backendsSelect**](docs/BackendsApi.md#backendsselectoperation) | **POST** /v1/backends/select | Select preferred backend
*CSPLApi* | [**csplTransfer**](docs/CSPLApi.md#cspltransferoperation) | **POST** /v1/cspl/transfer | Confidential token transfer
*CSPLApi* | [**csplUnwrap**](docs/CSPLApi.md#csplunwrapoperation) | **POST** /v1/cspl/unwrap | Unwrap confidential tokens back to SPL
*CSPLApi* | [**csplWrap**](docs/CSPLApi.md#csplwrapoperation) | **POST** /v1/cspl/wrap | Wrap SPL tokens into confidential balance
*CommitmentApi* | [**commitmentAdd**](docs/CommitmentApi.md#commitmentaddoperation) | **POST** /v1/commitment/add | Add two commitments (homomorphic)
*CommitmentApi* | [**commitmentCreate**](docs/CommitmentApi.md#commitmentcreateoperation) | **POST** /v1/commitment/create | Create Pedersen commitment
*CommitmentApi* | [**commitmentCreateBatch**](docs/CommitmentApi.md#commitmentcreatebatchoperation) | **POST** /v1/commitment/create/batch | Batch create Pedersen commitments
*CommitmentApi* | [**commitmentSubtract**](docs/CommitmentApi.md#commitmentsubtract) | **POST** /v1/commitment/subtract | Subtract two commitments (homomorphic)
*CommitmentApi* | [**commitmentVerify**](docs/CommitmentApi.md#commitmentverifyoperation) | **POST** /v1/commitment/verify | Verify Pedersen commitment
*ComplianceApi* | [**complianceDisclose**](docs/ComplianceApi.md#compliancediscloseoperation) | **POST** /v1/compliance/disclose | Selective disclosure with scoped viewing key (enterprise)
*ComplianceApi* | [**complianceReport**](docs/ComplianceApi.md#compliancereportoperation) | **POST** /v1/compliance/report | Generate encrypted audit report (enterprise)
*ComplianceApi* | [**getComplianceReport**](docs/ComplianceApi.md#getcompliancereport) | **GET** /v1/compliance/report/{id} | Retrieve generated compliance report (enterprise)
*HealthApi* | [**getErrors**](docs/HealthApi.md#geterrors) | **GET** /v1/errors | Error code catalog
*HealthApi* | [**getHealth**](docs/HealthApi.md#gethealth) | **GET** /v1/health | Health check
*HealthApi* | [**getReady**](docs/HealthApi.md#getready) | **GET** /v1/ready | Readiness probe
*IncoApi* | [**computeIncoCiphertexts**](docs/IncoApi.md#computeincociphertextsoperation) | **POST** /v1/inco/compute | Compute on encrypted data
*IncoApi* | [**decryptIncoResult**](docs/IncoApi.md#decryptincoresultoperation) | **POST** /v1/inco/decrypt | Decrypt FHE computation result
*IncoApi* | [**encryptIncoValue**](docs/IncoApi.md#encryptincovalueoperation) | **POST** /v1/inco/encrypt | Encrypt value with FHE
*PrivacyApi* | [**privacyScore**](docs/PrivacyApi.md#privacyscoreoperation) | **POST** /v1/privacy/score | Analyze wallet privacy score
*ProofsApi* | [**proofsFulfillmentGenerate**](docs/ProofsApi.md#proofsfulfillmentgenerateoperation) | **POST** /v1/proofs/fulfillment/generate | Generate fulfillment proof
*ProofsApi* | [**proofsFulfillmentVerify**](docs/ProofsApi.md#proofsfulfillmentverifyoperation) | **POST** /v1/proofs/fulfillment/verify | Verify fulfillment proof
*ProofsApi* | [**proofsFundingGenerate**](docs/ProofsApi.md#proofsfundinggenerateoperation) | **POST** /v1/proofs/funding/generate | Generate funding proof
*ProofsApi* | [**proofsFundingVerify**](docs/ProofsApi.md#proofsfundingverifyoperation) | **POST** /v1/proofs/funding/verify | Verify funding proof
*ProofsApi* | [**proofsRangeGenerate**](docs/ProofsApi.md#proofsrangegenerateoperation) | **POST** /v1/proofs/range/generate | Generate STARK range proof
*ProofsApi* | [**proofsRangeVerify**](docs/ProofsApi.md#proofsrangeverifyoperation) | **POST** /v1/proofs/range/verify | Verify STARK range proof
*ProofsApi* | [**proofsValidityGenerate**](docs/ProofsApi.md#proofsvaliditygenerateoperation) | **POST** /v1/proofs/validity/generate | Generate validity proof
*ProofsApi* | [**proofsValidityVerify**](docs/ProofsApi.md#proofsvalidityverifyoperation) | **POST** /v1/proofs/validity/verify | Verify validity proof
*RPCApi* | [**getRpcProviders**](docs/RPCApi.md#getrpcproviders) | **GET** /v1/rpc/providers | List supported RPC providers and active configuration
*ScanApi* | [**scanPayments**](docs/ScanApi.md#scanpaymentsoperation) | **POST** /v1/scan/payments | Scan for incoming shielded payments
*ScanApi* | [**scanPaymentsBatch**](docs/ScanApi.md#scanpaymentsbatchoperation) | **POST** /v1/scan/payments/batch | Batch scan for payments across multiple key pairs
*StealthApi* | [**stealthCheck**](docs/StealthApi.md#stealthcheckoperation) | **POST** /v1/stealth/check | Check stealth address ownership
*StealthApi* | [**stealthDerive**](docs/StealthApi.md#stealthderiveoperation) | **POST** /v1/stealth/derive | Derive one-time stealth address
*StealthApi* | [**stealthGenerate**](docs/StealthApi.md#stealthgenerateoperation) | **POST** /v1/stealth/generate | Generate stealth meta-address keypair
*StealthApi* | [**stealthGenerateBatch**](docs/StealthApi.md#stealthgeneratebatchoperation) | **POST** /v1/stealth/generate/batch | Batch generate stealth keypairs
*SwapApi* | [**privateSwap**](docs/SwapApi.md#privateswapoperation) | **POST** /v1/swap/private | Privacy-preserving token swap via Jupiter DEX
*TransferApi* | [**transferClaim**](docs/TransferApi.md#transferclaimoperation) | **POST** /v1/transfer/claim | Claim stealth payment (signed)
*TransferApi* | [**transferPrivate**](docs/TransferApi.md#transferprivateoperation) | **POST** /v1/transfer/private | Build unified private transfer (chain-agnostic)
*TransferApi* | [**transferShield**](docs/TransferApi.md#transfershieldoperation) | **POST** /v1/transfer/shield | Build shielded transfer (unsigned)
*ViewingKeyApi* | [**viewingKeyDecrypt**](docs/ViewingKeyApi.md#viewingkeydecryptoperation) | **POST** /v1/viewing-key/decrypt | Decrypt transaction with viewing key
*ViewingKeyApi* | [**viewingKeyDerive**](docs/ViewingKeyApi.md#viewingkeyderiveoperation) | **POST** /v1/viewing-key/derive | Derive child viewing key (BIP32-style)
*ViewingKeyApi* | [**viewingKeyDisclose**](docs/ViewingKeyApi.md#viewingkeydiscloseoperation) | **POST** /v1/viewing-key/disclose | Encrypt transaction for disclosure
*ViewingKeyApi* | [**viewingKeyGenerate**](docs/ViewingKeyApi.md#viewingkeygenerateoperation) | **POST** /v1/viewing-key/generate | Generate viewing key
*ViewingKeyApi* | [**viewingKeyVerifyHierarchy**](docs/ViewingKeyApi.md#viewingkeyverifyhierarchyoperation) | **POST** /v1/viewing-key/verify-hierarchy | Verify viewing key parent-child relationship


### Models

- [BackendsCompare200Response](docs/BackendsCompare200Response.md)
- [BackendsCompare200ResponseData](docs/BackendsCompare200ResponseData.md)
- [BackendsCompare200ResponseDataComparisonsInner](docs/BackendsCompare200ResponseDataComparisonsInner.md)
- [BackendsCompare200ResponseDataRecommendation](docs/BackendsCompare200ResponseDataRecommendation.md)
- [BackendsCompareRequest](docs/BackendsCompareRequest.md)
- [BackendsHealth200Response](docs/BackendsHealth200Response.md)
- [BackendsHealth200ResponseData](docs/BackendsHealth200ResponseData.md)
- [BackendsHealth200ResponseDataHealth](docs/BackendsHealth200ResponseDataHealth.md)
- [BackendsHealth200ResponseDataMetrics](docs/BackendsHealth200ResponseDataMetrics.md)
- [BackendsList200Response](docs/BackendsList200Response.md)
- [BackendsList200ResponseData](docs/BackendsList200ResponseData.md)
- [BackendsList200ResponseDataBackendsInner](docs/BackendsList200ResponseDataBackendsInner.md)
- [BackendsList200ResponseDataBackendsInnerCapabilities](docs/BackendsList200ResponseDataBackendsInnerCapabilities.md)
- [BackendsList200ResponseDataBackendsInnerHealth](docs/BackendsList200ResponseDataBackendsInnerHealth.md)
- [BackendsSelect200Response](docs/BackendsSelect200Response.md)
- [BackendsSelect200ResponseData](docs/BackendsSelect200ResponseData.md)
- [BackendsSelectRequest](docs/BackendsSelectRequest.md)
- [CommitmentAdd200Response](docs/CommitmentAdd200Response.md)
- [CommitmentAdd200ResponseData](docs/CommitmentAdd200ResponseData.md)
- [CommitmentAddRequest](docs/CommitmentAddRequest.md)
- [CommitmentCreate200Response](docs/CommitmentCreate200Response.md)
- [CommitmentCreate200ResponseData](docs/CommitmentCreate200ResponseData.md)
- [CommitmentCreateBatch200Response](docs/CommitmentCreateBatch200Response.md)
- [CommitmentCreateBatch200ResponseData](docs/CommitmentCreateBatch200ResponseData.md)
- [CommitmentCreateBatch200ResponseDataResultsInner](docs/CommitmentCreateBatch200ResponseDataResultsInner.md)
- [CommitmentCreateBatchRequest](docs/CommitmentCreateBatchRequest.md)
- [CommitmentCreateBatchRequestItemsInner](docs/CommitmentCreateBatchRequestItemsInner.md)
- [CommitmentCreateRequest](docs/CommitmentCreateRequest.md)
- [CommitmentVerify200Response](docs/CommitmentVerify200Response.md)
- [CommitmentVerify200ResponseData](docs/CommitmentVerify200ResponseData.md)
- [CommitmentVerifyRequest](docs/CommitmentVerifyRequest.md)
- [ComplianceDisclose200Response](docs/ComplianceDisclose200Response.md)
- [ComplianceDisclose200ResponseData](docs/ComplianceDisclose200ResponseData.md)
- [ComplianceDiscloseRequest](docs/ComplianceDiscloseRequest.md)
- [ComplianceDiscloseRequestAuditorVerification](docs/ComplianceDiscloseRequestAuditorVerification.md)
- [ComplianceDiscloseRequestScope](docs/ComplianceDiscloseRequestScope.md)
- [ComplianceDiscloseRequestTransactionData](docs/ComplianceDiscloseRequestTransactionData.md)
- [ComplianceReport200Response](docs/ComplianceReport200Response.md)
- [ComplianceReport200ResponseData](docs/ComplianceReport200ResponseData.md)
- [ComplianceReport200ResponseDataSummary](docs/ComplianceReport200ResponseDataSummary.md)
- [ComplianceReportRequest](docs/ComplianceReportRequest.md)
- [ComputeIncoCiphertexts200Response](docs/ComputeIncoCiphertexts200Response.md)
- [ComputeIncoCiphertexts200ResponseData](docs/ComputeIncoCiphertexts200ResponseData.md)
- [ComputeIncoCiphertextsRequest](docs/ComputeIncoCiphertextsRequest.md)
- [CsplTransfer200Response](docs/CsplTransfer200Response.md)
- [CsplTransfer200ResponseData](docs/CsplTransfer200ResponseData.md)
- [CsplTransferRequest](docs/CsplTransferRequest.md)
- [CsplUnwrap200Response](docs/CsplUnwrap200Response.md)
- [CsplUnwrap200ResponseData](docs/CsplUnwrap200ResponseData.md)
- [CsplUnwrapRequest](docs/CsplUnwrapRequest.md)
- [CsplWrap200Response](docs/CsplWrap200Response.md)
- [CsplWrap200ResponseData](docs/CsplWrap200ResponseData.md)
- [CsplWrapRequest](docs/CsplWrapRequest.md)
- [DecryptArciumResult200Response](docs/DecryptArciumResult200Response.md)
- [DecryptArciumResult200ResponseData](docs/DecryptArciumResult200ResponseData.md)
- [DecryptArciumResultRequest](docs/DecryptArciumResultRequest.md)
- [DecryptArciumResultRequestViewingKey](docs/DecryptArciumResultRequestViewingKey.md)
- [DecryptIncoResult200Response](docs/DecryptIncoResult200Response.md)
- [DecryptIncoResult200ResponseData](docs/DecryptIncoResult200ResponseData.md)
- [DecryptIncoResultRequest](docs/DecryptIncoResultRequest.md)
- [EncryptIncoValue200Response](docs/EncryptIncoValue200Response.md)
- [EncryptIncoValue200ResponseData](docs/EncryptIncoValue200ResponseData.md)
- [EncryptIncoValueRequest](docs/EncryptIncoValueRequest.md)
- [EncryptIncoValueRequestPlaintext](docs/EncryptIncoValueRequestPlaintext.md)
- [ErrorResponse](docs/ErrorResponse.md)
- [EvmTransferData](docs/EvmTransferData.md)
- [GetArciumComputationStatus200Response](docs/GetArciumComputationStatus200Response.md)
- [GetArciumComputationStatus200ResponseData](docs/GetArciumComputationStatus200ResponseData.md)
- [GetComplianceReport200Response](docs/GetComplianceReport200Response.md)
- [GetComplianceReport200ResponseData](docs/GetComplianceReport200ResponseData.md)
- [GetErrors200Response](docs/GetErrors200Response.md)
- [GetErrors200ResponseData](docs/GetErrors200ResponseData.md)
- [GetErrors200ResponseDataErrorsInner](docs/GetErrors200ResponseDataErrorsInner.md)
- [GetHealth200Response](docs/GetHealth200Response.md)
- [GetHealth200ResponseData](docs/GetHealth200ResponseData.md)
- [GetHealth200ResponseDataMemory](docs/GetHealth200ResponseDataMemory.md)
- [GetHealth200ResponseDataSolana](docs/GetHealth200ResponseDataSolana.md)
- [GetHealth503Response](docs/GetHealth503Response.md)
- [GetHealth503ResponseError](docs/GetHealth503ResponseError.md)
- [GetReady200Response](docs/GetReady200Response.md)
- [GetReady200ResponseData](docs/GetReady200ResponseData.md)
- [GetReady200ResponseDataChecks](docs/GetReady200ResponseDataChecks.md)
- [GetRpcProviders200Response](docs/GetRpcProviders200Response.md)
- [GetRpcProviders200ResponseData](docs/GetRpcProviders200ResponseData.md)
- [GetRpcProviders200ResponseDataActive](docs/GetRpcProviders200ResponseDataActive.md)
- [GetRpcProviders200ResponseDataSupportedInner](docs/GetRpcProviders200ResponseDataSupportedInner.md)
- [NearTransferData](docs/NearTransferData.md)
- [NearTransferDataActionsInner](docs/NearTransferDataActionsInner.md)
- [PrivacyScore200Response](docs/PrivacyScore200Response.md)
- [PrivacyScore200ResponseData](docs/PrivacyScore200ResponseData.md)
- [PrivacyScore200ResponseDataFactors](docs/PrivacyScore200ResponseDataFactors.md)
- [PrivacyScore200ResponseDataFactorsAddressReuse](docs/PrivacyScore200ResponseDataFactorsAddressReuse.md)
- [PrivacyScoreRequest](docs/PrivacyScoreRequest.md)
- [PrivateSwap200Response](docs/PrivateSwap200Response.md)
- [PrivateSwap200ResponseData](docs/PrivateSwap200ResponseData.md)
- [PrivateSwap200ResponseDataTransactionsInner](docs/PrivateSwap200ResponseDataTransactionsInner.md)
- [PrivateSwapRequest](docs/PrivateSwapRequest.md)
- [PrivateSwapRequestRecipientMetaAddress](docs/PrivateSwapRequestRecipientMetaAddress.md)
- [ProofsFulfillmentGenerate200Response](docs/ProofsFulfillmentGenerate200Response.md)
- [ProofsFulfillmentGenerate200ResponseData](docs/ProofsFulfillmentGenerate200ResponseData.md)
- [ProofsFulfillmentGenerate200ResponseDataProof](docs/ProofsFulfillmentGenerate200ResponseDataProof.md)
- [ProofsFulfillmentGenerateRequest](docs/ProofsFulfillmentGenerateRequest.md)
- [ProofsFulfillmentGenerateRequestOracleAttestation](docs/ProofsFulfillmentGenerateRequestOracleAttestation.md)
- [ProofsFulfillmentVerifyRequest](docs/ProofsFulfillmentVerifyRequest.md)
- [ProofsFundingGenerate200Response](docs/ProofsFundingGenerate200Response.md)
- [ProofsFundingGenerate200ResponseData](docs/ProofsFundingGenerate200ResponseData.md)
- [ProofsFundingGenerate200ResponseDataProof](docs/ProofsFundingGenerate200ResponseDataProof.md)
- [ProofsFundingGenerateRequest](docs/ProofsFundingGenerateRequest.md)
- [ProofsFundingVerifyRequest](docs/ProofsFundingVerifyRequest.md)
- [ProofsRangeGenerate200Response](docs/ProofsRangeGenerate200Response.md)
- [ProofsRangeGenerate200ResponseData](docs/ProofsRangeGenerate200ResponseData.md)
- [ProofsRangeGenerate200ResponseDataMetadata](docs/ProofsRangeGenerate200ResponseDataMetadata.md)
- [ProofsRangeGenerate200ResponseDataProof](docs/ProofsRangeGenerate200ResponseDataProof.md)
- [ProofsRangeGenerateRequest](docs/ProofsRangeGenerateRequest.md)
- [ProofsRangeVerifyRequest](docs/ProofsRangeVerifyRequest.md)
- [ProofsValidityGenerate200Response](docs/ProofsValidityGenerate200Response.md)
- [ProofsValidityGenerate200ResponseData](docs/ProofsValidityGenerate200ResponseData.md)
- [ProofsValidityGenerate200ResponseDataProof](docs/ProofsValidityGenerate200ResponseDataProof.md)
- [ProofsValidityGenerateRequest](docs/ProofsValidityGenerateRequest.md)
- [ProofsValidityVerifyRequest](docs/ProofsValidityVerifyRequest.md)
- [ScanPayments200Response](docs/ScanPayments200Response.md)
- [ScanPayments200ResponseData](docs/ScanPayments200ResponseData.md)
- [ScanPayments200ResponseDataPaymentsInner](docs/ScanPayments200ResponseDataPaymentsInner.md)
- [ScanPaymentsBatch200Response](docs/ScanPaymentsBatch200Response.md)
- [ScanPaymentsBatch200ResponseData](docs/ScanPaymentsBatch200ResponseData.md)
- [ScanPaymentsBatch200ResponseDataResultsInner](docs/ScanPaymentsBatch200ResponseDataResultsInner.md)
- [ScanPaymentsBatch200ResponseDataResultsInnerData](docs/ScanPaymentsBatch200ResponseDataResultsInnerData.md)
- [ScanPaymentsBatch200ResponseDataSummary](docs/ScanPaymentsBatch200ResponseDataSummary.md)
- [ScanPaymentsBatchRequest](docs/ScanPaymentsBatchRequest.md)
- [ScanPaymentsBatchRequestKeyPairsInner](docs/ScanPaymentsBatchRequestKeyPairsInner.md)
- [ScanPaymentsRequest](docs/ScanPaymentsRequest.md)
- [SolanaTransferData](docs/SolanaTransferData.md)
- [StealthAddress](docs/StealthAddress.md)
- [StealthCheck200Response](docs/StealthCheck200Response.md)
- [StealthCheck200ResponseData](docs/StealthCheck200ResponseData.md)
- [StealthCheckRequest](docs/StealthCheckRequest.md)
- [StealthDerive200Response](docs/StealthDerive200Response.md)
- [StealthDerive200ResponseData](docs/StealthDerive200ResponseData.md)
- [StealthDeriveRequest](docs/StealthDeriveRequest.md)
- [StealthGenerate200Response](docs/StealthGenerate200Response.md)
- [StealthGenerate200ResponseData](docs/StealthGenerate200ResponseData.md)
- [StealthGenerateBatch200Response](docs/StealthGenerateBatch200Response.md)
- [StealthGenerateBatch200ResponseData](docs/StealthGenerateBatch200ResponseData.md)
- [StealthGenerateBatch200ResponseDataResultsInner](docs/StealthGenerateBatch200ResponseDataResultsInner.md)
- [StealthGenerateBatch200ResponseDataSummary](docs/StealthGenerateBatch200ResponseDataSummary.md)
- [StealthGenerateBatchRequest](docs/StealthGenerateBatchRequest.md)
- [StealthGenerateRequest](docs/StealthGenerateRequest.md)
- [StealthMetaAddress](docs/StealthMetaAddress.md)
- [SubmitArciumComputation200Response](docs/SubmitArciumComputation200Response.md)
- [SubmitArciumComputation200ResponseData](docs/SubmitArciumComputation200ResponseData.md)
- [SubmitArciumComputationRequest](docs/SubmitArciumComputationRequest.md)
- [SubmitArciumComputationRequestViewingKey](docs/SubmitArciumComputationRequestViewingKey.md)
- [TransferClaim200Response](docs/TransferClaim200Response.md)
- [TransferClaim200ResponseData](docs/TransferClaim200ResponseData.md)
- [TransferClaimRequest](docs/TransferClaimRequest.md)
- [TransferPrivate200Response](docs/TransferPrivate200Response.md)
- [TransferPrivate200ResponseData](docs/TransferPrivate200ResponseData.md)
- [TransferPrivate200ResponseDataChainData](docs/TransferPrivate200ResponseDataChainData.md)
- [TransferPrivate422Response](docs/TransferPrivate422Response.md)
- [TransferPrivate422ResponseError](docs/TransferPrivate422ResponseError.md)
- [TransferPrivateRequest](docs/TransferPrivateRequest.md)
- [TransferPrivateRequestRecipientMetaAddress](docs/TransferPrivateRequestRecipientMetaAddress.md)
- [TransferShield200Response](docs/TransferShield200Response.md)
- [TransferShield200ResponseData](docs/TransferShield200ResponseData.md)
- [TransferShieldRequest](docs/TransferShieldRequest.md)
- [ViewingKey](docs/ViewingKey.md)
- [ViewingKeyDecrypt200Response](docs/ViewingKeyDecrypt200Response.md)
- [ViewingKeyDecrypt200ResponseData](docs/ViewingKeyDecrypt200ResponseData.md)
- [ViewingKeyDecryptRequest](docs/ViewingKeyDecryptRequest.md)
- [ViewingKeyDecryptRequestEncrypted](docs/ViewingKeyDecryptRequestEncrypted.md)
- [ViewingKeyDerive200Response](docs/ViewingKeyDerive200Response.md)
- [ViewingKeyDerive200ResponseData](docs/ViewingKeyDerive200ResponseData.md)
- [ViewingKeyDerive200ResponseDataDerivedFrom](docs/ViewingKeyDerive200ResponseDataDerivedFrom.md)
- [ViewingKeyDeriveRequest](docs/ViewingKeyDeriveRequest.md)
- [ViewingKeyDisclose200Response](docs/ViewingKeyDisclose200Response.md)
- [ViewingKeyDisclose200ResponseData](docs/ViewingKeyDisclose200ResponseData.md)
- [ViewingKeyDiscloseRequest](docs/ViewingKeyDiscloseRequest.md)
- [ViewingKeyDiscloseRequestTransactionData](docs/ViewingKeyDiscloseRequestTransactionData.md)
- [ViewingKeyGenerate200Response](docs/ViewingKeyGenerate200Response.md)
- [ViewingKeyGenerateRequest](docs/ViewingKeyGenerateRequest.md)
- [ViewingKeyVerifyHierarchy200Response](docs/ViewingKeyVerifyHierarchy200Response.md)
- [ViewingKeyVerifyHierarchy200ResponseData](docs/ViewingKeyVerifyHierarchy200ResponseData.md)
- [ViewingKeyVerifyHierarchyRequest](docs/ViewingKeyVerifyHierarchyRequest.md)

### Authorization


Authentication schemes defined for the API:
<a id="ApiKeyAuth"></a>
#### ApiKeyAuth


- **Type**: API key
- **API key parameter name**: `X-API-Key`
- **Location**: HTTP header

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `0.1.0`
- Package version: `0.1.0`
- Generator version: `7.19.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system

For more information, please visit [https://sip-protocol.org](https://sip-protocol.org)

## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[MIT](https://opensource.org/licenses/MIT)
