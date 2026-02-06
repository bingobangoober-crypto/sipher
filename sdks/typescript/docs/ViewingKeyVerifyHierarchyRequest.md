
# ViewingKeyVerifyHierarchyRequest


## Properties

Name | Type
------------ | -------------
`parentKey` | [ViewingKey](ViewingKey.md)
`childKey` | [ViewingKey](ViewingKey.md)
`childPath` | string

## Example

```typescript
import type { ViewingKeyVerifyHierarchyRequest } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "parentKey": null,
  "childKey": null,
  "childPath": null,
} satisfies ViewingKeyVerifyHierarchyRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ViewingKeyVerifyHierarchyRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


