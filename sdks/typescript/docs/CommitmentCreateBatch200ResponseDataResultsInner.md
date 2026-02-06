
# CommitmentCreateBatch200ResponseDataResultsInner


## Properties

Name | Type
------------ | -------------
`index` | number
`success` | boolean
`data` | [CommitmentAdd200ResponseData](CommitmentAdd200ResponseData.md)
`error` | string

## Example

```typescript
import type { CommitmentCreateBatch200ResponseDataResultsInner } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "index": null,
  "success": null,
  "data": null,
  "error": null,
} satisfies CommitmentCreateBatch200ResponseDataResultsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CommitmentCreateBatch200ResponseDataResultsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


