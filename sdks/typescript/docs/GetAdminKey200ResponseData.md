
# GetAdminKey200ResponseData


## Properties

Name | Type
------------ | -------------
`id` | string
`key` | string
`tier` | string
`name` | string
`createdAt` | Date
`expiresAt` | Date
`revokedAt` | Date
`limits` | object
`usage` | object

## Example

```typescript
import type { GetAdminKey200ResponseData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "key": null,
  "tier": null,
  "name": null,
  "createdAt": null,
  "expiresAt": null,
  "revokedAt": null,
  "limits": null,
  "usage": null,
} satisfies GetAdminKey200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetAdminKey200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


