
# TransferPrivate200ResponseData


## Properties

Name | Type
------------ | -------------
`chain` | string
`curve` | string
`stealthAddress` | string
`ephemeralPublicKey` | string
`viewTag` | number
`commitment` | string
`blindingFactor` | string
`viewingKeyHash` | string
`sharedSecret` | string
`chainData` | [TransferPrivate200ResponseDataChainData](TransferPrivate200ResponseDataChainData.md)

## Example

```typescript
import type { TransferPrivate200ResponseData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "chain": null,
  "curve": null,
  "stealthAddress": null,
  "ephemeralPublicKey": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "viewTag": null,
  "commitment": null,
  "blindingFactor": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "viewingKeyHash": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "sharedSecret": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "chainData": null,
} satisfies TransferPrivate200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransferPrivate200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


