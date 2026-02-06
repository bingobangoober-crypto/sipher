
# TransferClaimRequest


## Properties

Name | Type
------------ | -------------
`stealthAddress` | string
`ephemeralPublicKey` | string
`spendingPrivateKey` | string
`viewingPrivateKey` | string
`destinationAddress` | string
`mint` | string

## Example

```typescript
import type { TransferClaimRequest } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "stealthAddress": S1PMFspo4W6BYKHWkHNF7kZ3fnqibEXg3LQjxepS9at,
  "ephemeralPublicKey": S1PMFspo4W6BYKHWkHNF7kZ3fnqibEXg3LQjxepS9at,
  "spendingPrivateKey": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "viewingPrivateKey": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "destinationAddress": S1PMFspo4W6BYKHWkHNF7kZ3fnqibEXg3LQjxepS9at,
  "mint": S1PMFspo4W6BYKHWkHNF7kZ3fnqibEXg3LQjxepS9at,
} satisfies TransferClaimRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransferClaimRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


