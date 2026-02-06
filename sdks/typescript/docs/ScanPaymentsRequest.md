
# ScanPaymentsRequest


## Properties

Name | Type
------------ | -------------
`viewingPrivateKey` | string
`spendingPublicKey` | string
`fromSlot` | number
`toSlot` | number
`limit` | number

## Example

```typescript
import type { ScanPaymentsRequest } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "viewingPrivateKey": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "spendingPublicKey": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "fromSlot": null,
  "toSlot": null,
  "limit": null,
} satisfies ScanPaymentsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScanPaymentsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


