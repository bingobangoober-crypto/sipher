
# SubmitArciumComputationRequest


## Properties

Name | Type
------------ | -------------
`circuitId` | string
`encryptedInputs` | Array&lt;string&gt;
`chain` | string
`cipher` | string
`viewingKey` | [SubmitArciumComputationRequestViewingKey](SubmitArciumComputationRequestViewingKey.md)
`cluster` | string
`timeout` | number

## Example

```typescript
import type { SubmitArciumComputationRequest } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "circuitId": null,
  "encryptedInputs": null,
  "chain": null,
  "cipher": null,
  "viewingKey": null,
  "cluster": null,
  "timeout": null,
} satisfies SubmitArciumComputationRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubmitArciumComputationRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


