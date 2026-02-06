
# SubmitJitoBundle200ResponseData


## Properties

Name | Type
------------ | -------------
`bundleId` | string
`status` | string
`tipAccount` | string
`tipLamports` | string
`gasSponsored` | boolean
`slot` | number
`signature` | string
`estimatedConfirmation` | number

## Example

```typescript
import type { SubmitJitoBundle200ResponseData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "bundleId": null,
  "status": null,
  "tipAccount": null,
  "tipLamports": null,
  "gasSponsored": null,
  "slot": null,
  "signature": null,
  "estimatedConfirmation": null,
} satisfies SubmitJitoBundle200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubmitJitoBundle200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


