
# CsplTransferRequest


## Properties

Name | Type
------------ | -------------
`csplMint` | string
`from` | string
`to` | string
`encryptedAmount` | string
`memo` | string

## Example

```typescript
import type { CsplTransferRequest } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "csplMint": null,
  "from": S1PMFspo4W6BYKHWkHNF7kZ3fnqibEXg3LQjxepS9at,
  "to": S1PMFspo4W6BYKHWkHNF7kZ3fnqibEXg3LQjxepS9at,
  "encryptedAmount": null,
  "memo": null,
} satisfies CsplTransferRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CsplTransferRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


