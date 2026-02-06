
# PrivateSwap200ResponseData


## Properties

Name | Type
------------ | -------------
`outputStealthAddress` | string
`ephemeralPublicKey` | string
`viewTag` | number
`commitment` | string
`blindingFactor` | string
`viewingKeyHash` | string
`sharedSecret` | string
`inputMint` | string
`inputAmount` | string
`outputMint` | string
`outputAmount` | string
`outputAmountMin` | string
`quoteId` | string
`priceImpactPct` | string
`slippageBps` | number
`transactions` | [Array&lt;PrivateSwap200ResponseDataTransactionsInner&gt;](PrivateSwap200ResponseDataTransactionsInner.md)
`executionOrder` | Array&lt;string&gt;
`estimatedComputeUnits` | number
`csplWrapped` | boolean

## Example

```typescript
import type { PrivateSwap200ResponseData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "outputStealthAddress": S1PMFspo4W6BYKHWkHNF7kZ3fnqibEXg3LQjxepS9at,
  "ephemeralPublicKey": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "viewTag": null,
  "commitment": null,
  "blindingFactor": null,
  "viewingKeyHash": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "sharedSecret": null,
  "inputMint": null,
  "inputAmount": null,
  "outputMint": null,
  "outputAmount": null,
  "outputAmountMin": null,
  "quoteId": null,
  "priceImpactPct": null,
  "slippageBps": null,
  "transactions": null,
  "executionOrder": null,
  "estimatedComputeUnits": null,
  "csplWrapped": null,
} satisfies PrivateSwap200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PrivateSwap200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


