
# GetRpcProviders200ResponseDataActive


## Properties

Name | Type
------------ | -------------
`provider` | string
`endpoint` | string
`connected` | boolean
`cluster` | string
`latencyMs` | number

## Example

```typescript
import type { GetRpcProviders200ResponseDataActive } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "provider": null,
  "endpoint": null,
  "connected": null,
  "cluster": null,
  "latencyMs": null,
} satisfies GetRpcProviders200ResponseDataActive

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetRpcProviders200ResponseDataActive
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


