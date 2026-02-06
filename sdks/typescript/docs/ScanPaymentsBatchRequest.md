
# ScanPaymentsBatchRequest


## Properties

Name | Type
------------ | -------------
`keyPairs` | [Array&lt;ScanPaymentsBatchRequestKeyPairsInner&gt;](ScanPaymentsBatchRequestKeyPairsInner.md)
`fromSlot` | number
`toSlot` | number
`limit` | number

## Example

```typescript
import type { ScanPaymentsBatchRequest } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "keyPairs": null,
  "fromSlot": null,
  "toSlot": null,
  "limit": null,
} satisfies ScanPaymentsBatchRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScanPaymentsBatchRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


