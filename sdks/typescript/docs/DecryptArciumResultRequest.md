
# DecryptArciumResultRequest


## Properties

Name | Type
------------ | -------------
`computationId` | string
`viewingKey` | [DecryptArciumResultRequestViewingKey](DecryptArciumResultRequestViewingKey.md)

## Example

```typescript
import type { DecryptArciumResultRequest } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "computationId": null,
  "viewingKey": null,
} satisfies DecryptArciumResultRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DecryptArciumResultRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


