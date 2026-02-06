
# ScanPaymentsBatch200ResponseDataResultsInner


## Properties

Name | Type
------------ | -------------
`index` | number
`label` | string
`success` | boolean
`data` | [ScanPaymentsBatch200ResponseDataResultsInnerData](ScanPaymentsBatch200ResponseDataResultsInnerData.md)
`error` | string

## Example

```typescript
import type { ScanPaymentsBatch200ResponseDataResultsInner } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "index": null,
  "label": null,
  "success": null,
  "data": null,
  "error": null,
} satisfies ScanPaymentsBatch200ResponseDataResultsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScanPaymentsBatch200ResponseDataResultsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


