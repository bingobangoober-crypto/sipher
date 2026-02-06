
# PrivacyScoreRequest


## Properties

Name | Type
------------ | -------------
`address` | string
`limit` | number

## Example

```typescript
import type { PrivacyScoreRequest } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "address": S1PMFspo4W6BYKHWkHNF7kZ3fnqibEXg3LQjxepS9at,
  "limit": null,
} satisfies PrivacyScoreRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PrivacyScoreRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


