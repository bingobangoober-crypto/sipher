
# ViewingKey


## Properties

Name | Type
------------ | -------------
`key` | string
`path` | string
`hash` | string

## Example

```typescript
import type { ViewingKey } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "key": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
  "path": null,
  "hash": 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef,
} satisfies ViewingKey

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ViewingKey
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


