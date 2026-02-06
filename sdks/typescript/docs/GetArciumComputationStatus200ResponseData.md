
# GetArciumComputationStatus200ResponseData


## Properties

Name | Type
------------ | -------------
`computationId` | string
`circuitId` | string
`chain` | string
`status` | string
`progress` | number
`output` | string
`proof` | string

## Example

```typescript
import type { GetArciumComputationStatus200ResponseData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "computationId": null,
  "circuitId": null,
  "chain": null,
  "status": null,
  "progress": null,
  "output": null,
  "proof": null,
} satisfies GetArciumComputationStatus200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetArciumComputationStatus200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


