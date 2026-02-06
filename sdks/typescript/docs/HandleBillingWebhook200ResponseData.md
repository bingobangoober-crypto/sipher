
# HandleBillingWebhook200ResponseData


## Properties

Name | Type
------------ | -------------
`eventId` | string
`type` | string
`processed` | boolean

## Example

```typescript
import type { HandleBillingWebhook200ResponseData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "eventId": null,
  "type": null,
  "processed": null,
} satisfies HandleBillingWebhook200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HandleBillingWebhook200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


