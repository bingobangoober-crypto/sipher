
# BackendsHealth200ResponseDataHealth


## Properties

Name | Type
------------ | -------------
`circuitState` | string
`isHealthy` | boolean
`consecutiveFailures` | number
`consecutiveSuccesses` | number
`lastChecked` | number
`lastFailureReason` | string

## Example

```typescript
import type { BackendsHealth200ResponseDataHealth } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "circuitState": null,
  "isHealthy": null,
  "consecutiveFailures": null,
  "consecutiveSuccesses": null,
  "lastChecked": null,
  "lastFailureReason": null,
} satisfies BackendsHealth200ResponseDataHealth

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BackendsHealth200ResponseDataHealth
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


