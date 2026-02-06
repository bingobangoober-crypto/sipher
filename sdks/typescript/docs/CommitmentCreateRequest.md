
# CommitmentCreateRequest


## Properties

Name | Type
------------ | -------------
`value` | string
`blindingFactor` | string

## Example

```typescript
import type { CommitmentCreateRequest } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "value": null,
  "blindingFactor": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
} satisfies CommitmentCreateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CommitmentCreateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


