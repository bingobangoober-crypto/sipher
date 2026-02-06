
# CommitmentAddRequest


## Properties

Name | Type
------------ | -------------
`commitmentA` | string
`commitmentB` | string
`blindingA` | string
`blindingB` | string

## Example

```typescript
import type { CommitmentAddRequest } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "commitmentA": null,
  "commitmentB": null,
  "blindingA": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "blindingB": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
} satisfies CommitmentAddRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CommitmentAddRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


