
# ViewingKeyDerive200ResponseData


## Properties

Name | Type
------------ | -------------
`key` | string
`path` | string
`hash` | string
`derivedFrom` | [ViewingKeyDerive200ResponseDataDerivedFrom](ViewingKeyDerive200ResponseDataDerivedFrom.md)

## Example

```typescript
import type { ViewingKeyDerive200ResponseData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "key": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "path": null,
  "hash": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "derivedFrom": null,
} satisfies ViewingKeyDerive200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ViewingKeyDerive200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


