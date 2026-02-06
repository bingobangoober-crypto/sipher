
# GetHealth200ResponseDataSolana


## Properties

Name | Type
------------ | -------------
`connected` | boolean
`cluster` | string
`slot` | number
`latencyMs` | number

## Example

```typescript
import type { GetHealth200ResponseDataSolana } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "connected": null,
  "cluster": null,
  "slot": null,
  "latencyMs": null,
} satisfies GetHealth200ResponseDataSolana

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetHealth200ResponseDataSolana
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


