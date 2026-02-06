
# SubmitBallotRequest


## Properties

Name | Type
------------ | -------------
`proposalId` | string
`commitment` | string
`blindingFactor` | string
`nullifier` | string
`vote` | string
`stealthAddress` | string

## Example

```typescript
import type { SubmitBallotRequest } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "proposalId": null,
  "commitment": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "blindingFactor": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "nullifier": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "vote": null,
  "stealthAddress": null,
} satisfies SubmitBallotRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubmitBallotRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


