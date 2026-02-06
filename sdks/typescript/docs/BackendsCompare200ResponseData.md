
# BackendsCompare200ResponseData


## Properties

Name | Type
------------ | -------------
`operation` | string
`chain` | string
`comparisons` | [Array&lt;BackendsCompare200ResponseDataComparisonsInner&gt;](BackendsCompare200ResponseDataComparisonsInner.md)
`recommendation` | [BackendsCompare200ResponseDataRecommendation](BackendsCompare200ResponseDataRecommendation.md)

## Example

```typescript
import type { BackendsCompare200ResponseData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "operation": null,
  "chain": null,
  "comparisons": null,
  "recommendation": null,
} satisfies BackendsCompare200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BackendsCompare200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


