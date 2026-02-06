
# GetTally200ResponseData


## Properties

Name | Type
------------ | -------------
`tallyId` | string
`proposalId` | string
`totalVotes` | number
`yesVotes` | number
`noVotes` | number
`abstainVotes` | number
`tallyCommitment` | string
`tallyBlinding` | string
`verificationHash` | string
`verified` | boolean
`talliedAt` | number

## Example

```typescript
import type { GetTally200ResponseData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "tallyId": null,
  "proposalId": null,
  "totalVotes": null,
  "yesVotes": null,
  "noVotes": null,
  "abstainVotes": null,
  "tallyCommitment": null,
  "tallyBlinding": null,
  "verificationHash": null,
  "verified": null,
  "talliedAt": null,
} satisfies GetTally200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetTally200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


