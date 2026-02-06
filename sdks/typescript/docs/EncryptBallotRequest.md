
# EncryptBallotRequest


## Properties

Name | Type
------------ | -------------
`proposalId` | string
`vote` | string
`voterSecret` | string
`stealthAddress` | string

## Example

```typescript
import type { EncryptBallotRequest } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "proposalId": null,
  "vote": null,
  "voterSecret": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "stealthAddress": null,
} satisfies EncryptBallotRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EncryptBallotRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


