
# EncryptIncoValue200ResponseData


## Properties

Name | Type
------------ | -------------
`encryptionId` | string
`ciphertext` | string
`scheme` | string
`noiseBudget` | number

## Example

```typescript
import type { EncryptIncoValue200ResponseData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "encryptionId": null,
  "ciphertext": null,
  "scheme": null,
  "noiseBudget": null,
} satisfies EncryptIncoValue200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EncryptIncoValue200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


