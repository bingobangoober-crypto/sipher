
# ViewingKeyDecryptRequestEncrypted


## Properties

Name | Type
------------ | -------------
`ciphertext` | string
`nonce` | string
`viewingKeyHash` | string

## Example

```typescript
import type { ViewingKeyDecryptRequestEncrypted } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "ciphertext": null,
  "nonce": null,
  "viewingKeyHash": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
} satisfies ViewingKeyDecryptRequestEncrypted

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ViewingKeyDecryptRequestEncrypted
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


