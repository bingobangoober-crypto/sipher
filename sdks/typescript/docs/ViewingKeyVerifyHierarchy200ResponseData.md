
# ViewingKeyVerifyHierarchy200ResponseData


## Properties

Name | Type
------------ | -------------
`valid` | boolean
`expectedPath` | string
`actualPath` | string
`parentHash` | string
`childHash` | string

## Example

```typescript
import type { ViewingKeyVerifyHierarchy200ResponseData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "valid": null,
  "expectedPath": null,
  "actualPath": null,
  "parentHash": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "childHash": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
} satisfies ViewingKeyVerifyHierarchy200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ViewingKeyVerifyHierarchy200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


