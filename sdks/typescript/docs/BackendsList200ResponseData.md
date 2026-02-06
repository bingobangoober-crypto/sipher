
# BackendsList200ResponseData


## Properties

Name | Type
------------ | -------------
`backends` | [Array&lt;BackendsList200ResponseDataBackendsInner&gt;](BackendsList200ResponseDataBackendsInner.md)
`total` | number
`totalEnabled` | number

## Example

```typescript
import type { BackendsList200ResponseData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "backends": null,
  "total": null,
  "totalEnabled": null,
} satisfies BackendsList200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BackendsList200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


