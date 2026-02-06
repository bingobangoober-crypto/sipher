
# EvmTransferData


## Properties

Name | Type
------------ | -------------
`type` | string
`to` | string
`value` | string
`data` | string
`chainId` | number
`tokenContract` | string

## Example

```typescript
import type { EvmTransferData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "to": null,
  "value": null,
  "data": null,
  "chainId": null,
  "tokenContract": null,
} satisfies EvmTransferData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EvmTransferData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


