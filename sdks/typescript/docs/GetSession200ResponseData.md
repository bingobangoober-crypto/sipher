
# GetSession200ResponseData


## Properties

Name | Type
------------ | -------------
`sessionId` | string
`defaults` | object
`createdAt` | number
`expiresAt` | number
`lastAccessedAt` | number

## Example

```typescript
import type { GetSession200ResponseData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "sessionId": null,
  "defaults": null,
  "createdAt": null,
  "expiresAt": null,
  "lastAccessedAt": null,
} satisfies GetSession200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSession200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


