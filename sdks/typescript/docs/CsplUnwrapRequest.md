
# CsplUnwrapRequest


## Properties

Name | Type
------------ | -------------
`csplMint` | string
`encryptedAmount` | string
`owner` | string
`proof` | string

## Example

```typescript
import type { CsplUnwrapRequest } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "csplMint": null,
  "encryptedAmount": null,
  "owner": S1PMFspo4W6BYKHWkHNF7kZ3fnqibEXg3LQjxepS9at,
  "proof": null,
} satisfies CsplUnwrapRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CsplUnwrapRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


