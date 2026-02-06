
# ViewingKeyDeriveRequest


## Properties

Name | Type
------------ | -------------
`masterKey` | [ViewingKey](ViewingKey.md)
`childPath` | string

## Example

```typescript
import type { ViewingKeyDeriveRequest } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "masterKey": null,
  "childPath": null,
} satisfies ViewingKeyDeriveRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ViewingKeyDeriveRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


