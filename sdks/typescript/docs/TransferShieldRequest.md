
# TransferShieldRequest


## Properties

Name | Type
------------ | -------------
`sender` | string
`recipientMetaAddress` | [StealthMetaAddress](StealthMetaAddress.md)
`amount` | string
`mint` | string

## Example

```typescript
import type { TransferShieldRequest } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "sender": S1PMFspo4W6BYKHWkHNF7kZ3fnqibEXg3LQjxepS9at,
  "recipientMetaAddress": null,
  "amount": 1000000000,
  "mint": S1PMFspo4W6BYKHWkHNF7kZ3fnqibEXg3LQjxepS9at,
} satisfies TransferShieldRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransferShieldRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


