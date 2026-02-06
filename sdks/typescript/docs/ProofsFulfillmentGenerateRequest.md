
# ProofsFulfillmentGenerateRequest


## Properties

Name | Type
------------ | -------------
`intentHash` | string
`outputAmount` | string
`outputBlinding` | string
`minOutputAmount` | string
`recipientStealth` | string
`solverId` | string
`solverSecret` | string
`oracleAttestation` | [ProofsFulfillmentGenerateRequestOracleAttestation](ProofsFulfillmentGenerateRequestOracleAttestation.md)
`fulfillmentTime` | number
`expiry` | number

## Example

```typescript
import type { ProofsFulfillmentGenerateRequest } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "intentHash": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "outputAmount": null,
  "outputBlinding": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "minOutputAmount": null,
  "recipientStealth": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "solverId": null,
  "solverSecret": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "oracleAttestation": null,
  "fulfillmentTime": null,
  "expiry": null,
} satisfies ProofsFulfillmentGenerateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProofsFulfillmentGenerateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


