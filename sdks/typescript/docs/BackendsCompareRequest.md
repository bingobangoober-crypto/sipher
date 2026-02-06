
# BackendsCompareRequest


## Properties

Name | Type
------------ | -------------
`operation` | string
`chain` | string
`amount` | string
`prioritize` | string

## Example

```typescript
import type { BackendsCompareRequest } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "operation": null,
  "chain": solana,
  "amount": null,
  "prioritize": null,
} satisfies BackendsCompareRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BackendsCompareRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


