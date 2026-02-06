
# DecryptIncoResult200ResponseData


## Properties

Name | Type
------------ | -------------
`computationId` | string
`operation` | string
`decryptedOutput` | string
`verificationHash` | string

## Example

```typescript
import type { DecryptIncoResult200ResponseData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "computationId": null,
  "operation": null,
  "decryptedOutput": null,
  "verificationHash": null,
} satisfies DecryptIncoResult200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DecryptIncoResult200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


