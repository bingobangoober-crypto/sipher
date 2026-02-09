
# TransferShield200ResponseData


## Properties

Name | Type
------------ | -------------
`transaction` | string
`stealthAddress` | string
`ephemeralPublicKey` | string
`viewTag` | number
`commitment` | string
`blindingFactor` | string
`viewingKeyHash` | string
`sharedSecret` | string
`programId` | string
`noteId` | string
`instructionType` | string
`encryptedAmount` | string

## Example

```typescript
import type { TransferShield200ResponseData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "transaction": null,
  "stealthAddress": null,
  "ephemeralPublicKey": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "viewTag": null,
  "commitment": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "blindingFactor": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "viewingKeyHash": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "sharedSecret": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "programId": null,
  "noteId": null,
  "instructionType": null,
  "encryptedAmount": null,
} satisfies TransferShield200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransferShield200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


