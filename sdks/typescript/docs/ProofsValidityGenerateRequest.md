
# ProofsValidityGenerateRequest


## Properties

Name | Type
------------ | -------------
`intentHash` | string
`senderAddress` | string
`senderBlinding` | string
`senderSecret` | string
`authorizationSignature` | string
`nonce` | string
`timestamp` | number
`expiry` | number

## Example

```typescript
import type { ProofsValidityGenerateRequest } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "intentHash": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "senderAddress": null,
  "senderBlinding": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "senderSecret": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "authorizationSignature": null,
  "nonce": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "timestamp": null,
  "expiry": null,
} satisfies ProofsValidityGenerateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProofsValidityGenerateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


