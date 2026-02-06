
# CsplWrapRequest


## Properties

Name | Type
------------ | -------------
`mint` | string
`amount` | string
`owner` | string
`createAccount` | boolean

## Example

```typescript
import type { CsplWrapRequest } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "mint": S1PMFspo4W6BYKHWkHNF7kZ3fnqibEXg3LQjxepS9at,
  "amount": 1000000000,
  "owner": S1PMFspo4W6BYKHWkHNF7kZ3fnqibEXg3LQjxepS9at,
  "createAccount": null,
} satisfies CsplWrapRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CsplWrapRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


