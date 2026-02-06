
# ScanPayments200ResponseData


## Properties

Name | Type
------------ | -------------
`payments` | [Array&lt;ScanPayments200ResponseDataPaymentsInner&gt;](ScanPayments200ResponseDataPaymentsInner.md)
`scanned` | number

## Example

```typescript
import type { ScanPayments200ResponseData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "payments": null,
  "scanned": null,
} satisfies ScanPayments200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScanPayments200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


