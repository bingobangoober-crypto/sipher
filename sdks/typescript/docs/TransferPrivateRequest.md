
# TransferPrivateRequest


## Properties

Name | Type
------------ | -------------
`sender` | string
`recipientMetaAddress` | [TransferPrivateRequestRecipientMetaAddress](TransferPrivateRequestRecipientMetaAddress.md)
`amount` | string
`token` | string

## Example

```typescript
import type { TransferPrivateRequest } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "sender": null,
  "recipientMetaAddress": null,
  "amount": 1000000000,
  "token": null,
} satisfies TransferPrivateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransferPrivateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


