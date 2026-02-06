
# BackendsList200ResponseDataBackendsInnerHealth


## Properties

Name | Type
------------ | -------------
`circuitState` | string
`isHealthy` | boolean
`consecutiveFailures` | number
`lastChecked` | number
`lastFailureReason` | string

## Example

```typescript
import type { BackendsList200ResponseDataBackendsInnerHealth } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "circuitState": null,
  "isHealthy": null,
  "consecutiveFailures": null,
  "lastChecked": null,
  "lastFailureReason": null,
} satisfies BackendsList200ResponseDataBackendsInnerHealth

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BackendsList200ResponseDataBackendsInnerHealth
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


