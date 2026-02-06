
# GetBillingUsage200ResponseData


## Properties

Name | Type
------------ | -------------
`date` | Date
`tier` | string
`total` | number
`quotaTotal` | number
`categories` | [{ [key: string]: GetBillingUsage200ResponseDataCategoriesValue; }](GetBillingUsage200ResponseDataCategoriesValue.md)

## Example

```typescript
import type { GetBillingUsage200ResponseData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "date": null,
  "tier": null,
  "total": null,
  "quotaTotal": null,
  "categories": null,
} satisfies GetBillingUsage200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetBillingUsage200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


