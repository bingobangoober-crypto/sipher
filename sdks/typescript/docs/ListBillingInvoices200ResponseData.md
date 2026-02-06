
# ListBillingInvoices200ResponseData


## Properties

Name | Type
------------ | -------------
`invoices` | Array&lt;any&gt;
`total` | number
`limit` | number
`offset` | number

## Example

```typescript
import type { ListBillingInvoices200ResponseData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "invoices": null,
  "total": null,
  "limit": null,
  "offset": null,
} satisfies ListBillingInvoices200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListBillingInvoices200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


