
# SubmitArciumComputation200ResponseData


## Properties

Name | Type
------------ | -------------
`computationId` | string
`status` | string
`estimatedCompletion` | number
`circuitId` | string
`chain` | string
`inputCount` | number

## Example

```typescript
import type { SubmitArciumComputation200ResponseData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "computationId": null,
  "status": null,
  "estimatedCompletion": null,
  "circuitId": null,
  "chain": null,
  "inputCount": null,
} satisfies SubmitArciumComputation200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubmitArciumComputation200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


