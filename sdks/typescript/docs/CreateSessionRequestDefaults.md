
# CreateSessionRequestDefaults


## Properties

Name | Type
------------ | -------------
`chain` | string
`privacyLevel` | string
`rpcProvider` | string
`backend` | string
`defaultViewingKey` | string

## Example

```typescript
import type { CreateSessionRequestDefaults } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "chain": null,
  "privacyLevel": null,
  "rpcProvider": null,
  "backend": null,
  "defaultViewingKey": null,
} satisfies CreateSessionRequestDefaults

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateSessionRequestDefaults
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


