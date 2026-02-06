
# CreateSessionRequest


## Properties

Name | Type
------------ | -------------
`defaults` | [CreateSessionRequestDefaults](CreateSessionRequestDefaults.md)
`ttlSeconds` | number

## Example

```typescript
import type { CreateSessionRequest } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "defaults": null,
  "ttlSeconds": null,
} satisfies CreateSessionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateSessionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


