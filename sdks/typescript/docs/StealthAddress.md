
# StealthAddress


## Properties

Name | Type
------------ | -------------
`address` | string
`ephemeralPublicKey` | string
`viewTag` | number

## Example

```typescript
import type { StealthAddress } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "address": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "ephemeralPublicKey": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "viewTag": null,
} satisfies StealthAddress

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StealthAddress
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


