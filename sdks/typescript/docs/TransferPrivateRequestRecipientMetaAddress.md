
# TransferPrivateRequestRecipientMetaAddress


## Properties

Name | Type
------------ | -------------
`spendingKey` | string
`viewingKey` | string
`chain` | string
`label` | string

## Example

```typescript
import type { TransferPrivateRequestRecipientMetaAddress } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "spendingKey": null,
  "viewingKey": null,
  "chain": null,
  "label": null,
} satisfies TransferPrivateRequestRecipientMetaAddress

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransferPrivateRequestRecipientMetaAddress
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


