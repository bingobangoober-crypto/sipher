
# EncryptBallot200ResponseData


## Properties

Name | Type
------------ | -------------
`commitment` | string
`blindingFactor` | string
`nullifier` | string
`vote` | string
`proposalId` | string
`anonymousId` | string

## Example

```typescript
import type { EncryptBallot200ResponseData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "commitment": null,
  "blindingFactor": null,
  "nullifier": null,
  "vote": null,
  "proposalId": null,
  "anonymousId": null,
} satisfies EncryptBallot200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EncryptBallot200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


