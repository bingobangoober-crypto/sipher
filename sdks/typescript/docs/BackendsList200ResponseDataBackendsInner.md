
# BackendsList200ResponseDataBackendsInner


## Properties

Name | Type
------------ | -------------
`name` | string
`type` | string
`chains` | Array&lt;string&gt;
`enabled` | boolean
`priority` | number
`capabilities` | [BackendsList200ResponseDataBackendsInnerCapabilities](BackendsList200ResponseDataBackendsInnerCapabilities.md)
`health` | [BackendsList200ResponseDataBackendsInnerHealth](BackendsList200ResponseDataBackendsInnerHealth.md)

## Example

```typescript
import type { BackendsList200ResponseDataBackendsInner } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "name": sip-native,
  "type": null,
  "chains": null,
  "enabled": null,
  "priority": null,
  "capabilities": null,
  "health": null,
} satisfies BackendsList200ResponseDataBackendsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BackendsList200ResponseDataBackendsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


