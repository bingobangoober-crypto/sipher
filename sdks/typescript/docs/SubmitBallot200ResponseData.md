
# SubmitBallot200ResponseData


## Properties

Name | Type
------------ | -------------
`proposalId` | string
`nullifier` | string
`accepted` | boolean
`totalBallots` | number

## Example

```typescript
import type { SubmitBallot200ResponseData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "proposalId": null,
  "nullifier": null,
  "accepted": null,
  "totalBallots": null,
} satisfies SubmitBallot200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubmitBallot200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


