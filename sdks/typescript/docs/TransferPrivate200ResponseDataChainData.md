
# TransferPrivate200ResponseDataChainData


## Properties

Name | Type
------------ | -------------
`type` | string
`transaction` | string
`mint` | string
`to` | string
`value` | string
`data` | string
`chainId` | number
`tokenContract` | string
`receiverId` | string
`actions` | [Array&lt;NearTransferDataActionsInner&gt;](NearTransferDataActionsInner.md)

## Example

```typescript
import type { TransferPrivate200ResponseDataChainData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "transaction": null,
  "mint": null,
  "to": null,
  "value": null,
  "data": null,
  "chainId": null,
  "tokenContract": null,
  "receiverId": null,
  "actions": null,
} satisfies TransferPrivate200ResponseDataChainData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransferPrivate200ResponseDataChainData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


