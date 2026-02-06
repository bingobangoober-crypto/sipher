
# BackendsHealth200ResponseData


## Properties

Name | Type
------------ | -------------
`name` | string
`available` | boolean
`estimatedCost` | string
`estimatedTime` | number
`health` | [BackendsHealth200ResponseDataHealth](BackendsHealth200ResponseDataHealth.md)
`metrics` | [BackendsHealth200ResponseDataMetrics](BackendsHealth200ResponseDataMetrics.md)
`capabilities` | object

## Example

```typescript
import type { BackendsHealth200ResponseData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "available": null,
  "estimatedCost": null,
  "estimatedTime": null,
  "health": null,
  "metrics": null,
  "capabilities": null,
} satisfies BackendsHealth200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BackendsHealth200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


