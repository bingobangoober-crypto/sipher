
# ComplianceDisclose200ResponseData


## Properties

Name | Type
------------ | -------------
`disclosureId` | string
`scopedViewingKeyHash` | string
`ciphertext` | string
`nonce` | string
`scope` | object
`auditorVerified` | boolean
`disclosedAt` | number

## Example

```typescript
import type { ComplianceDisclose200ResponseData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "disclosureId": null,
  "scopedViewingKeyHash": null,
  "ciphertext": null,
  "nonce": null,
  "scope": null,
  "auditorVerified": null,
  "disclosedAt": null,
} satisfies ComplianceDisclose200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ComplianceDisclose200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


