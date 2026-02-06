
# SolanaTransferData


## Properties

Name | Type
------------ | -------------
`type` | string
`transaction` | string
`mint` | string

## Example

```typescript
import type { SolanaTransferData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "transaction": null,
  "mint": null,
} satisfies SolanaTransferData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SolanaTransferData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


