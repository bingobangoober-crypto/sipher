
# ProofsFundingGenerateRequest


## Properties

Name | Type
------------ | -------------
`balance` | string
`minimumRequired` | string
`blindingFactor` | string
`assetId` | string
`userAddress` | string
`ownershipSignature` | string

## Example

```typescript
import type { ProofsFundingGenerateRequest } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "balance": null,
  "minimumRequired": null,
  "blindingFactor": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "assetId": null,
  "userAddress": null,
  "ownershipSignature": null,
} satisfies ProofsFundingGenerateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProofsFundingGenerateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


