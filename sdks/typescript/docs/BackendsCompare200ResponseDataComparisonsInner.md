
# BackendsCompare200ResponseDataComparisonsInner


## Properties

Name | Type
------------ | -------------
`backend` | string
`type` | string
`available` | boolean
`costLamports` | number
`costSOL` | string
`latencyMs` | number
`latencyCategory` | string
`privacyLevel` | string
`capabilities` | Array&lt;string&gt;
`score` | number
`recommended` | boolean

## Example

```typescript
import type { BackendsCompare200ResponseDataComparisonsInner } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "backend": null,
  "type": null,
  "available": null,
  "costLamports": null,
  "costSOL": null,
  "latencyMs": null,
  "latencyCategory": null,
  "privacyLevel": null,
  "capabilities": null,
  "score": null,
  "recommended": null,
} satisfies BackendsCompare200ResponseDataComparisonsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BackendsCompare200ResponseDataComparisonsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


