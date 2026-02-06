
# PrivateSwapRequest


## Properties

Name | Type
------------ | -------------
`sender` | string
`inputMint` | string
`inputAmount` | string
`outputMint` | string
`slippageBps` | number
`recipientMetaAddress` | [PrivateSwapRequestRecipientMetaAddress](PrivateSwapRequestRecipientMetaAddress.md)

## Example

```typescript
import type { PrivateSwapRequest } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "sender": S1PMFspo4W6BYKHWkHNF7kZ3fnqibEXg3LQjxepS9at,
  "inputMint": S1PMFspo4W6BYKHWkHNF7kZ3fnqibEXg3LQjxepS9at,
  "inputAmount": 1000000000,
  "outputMint": S1PMFspo4W6BYKHWkHNF7kZ3fnqibEXg3LQjxepS9at,
  "slippageBps": null,
  "recipientMetaAddress": null,
} satisfies PrivateSwapRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PrivateSwapRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


