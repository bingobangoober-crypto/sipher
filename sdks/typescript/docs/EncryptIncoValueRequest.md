
# EncryptIncoValueRequest


## Properties

Name | Type
------------ | -------------
`plaintext` | [EncryptIncoValueRequestPlaintext](EncryptIncoValueRequestPlaintext.md)
`scheme` | string
`label` | string

## Example

```typescript
import type { EncryptIncoValueRequest } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "plaintext": null,
  "scheme": null,
  "label": null,
} satisfies EncryptIncoValueRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EncryptIncoValueRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


