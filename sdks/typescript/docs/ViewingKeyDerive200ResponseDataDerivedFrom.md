
# ViewingKeyDerive200ResponseDataDerivedFrom


## Properties

Name | Type
------------ | -------------
`parentHash` | string
`parentPath` | string
`childPath` | string

## Example

```typescript
import type { ViewingKeyDerive200ResponseDataDerivedFrom } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "parentHash": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "parentPath": null,
  "childPath": null,
} satisfies ViewingKeyDerive200ResponseDataDerivedFrom

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ViewingKeyDerive200ResponseDataDerivedFrom
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


