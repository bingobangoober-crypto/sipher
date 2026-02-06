
# CreateAdminKey201ResponseData


## Properties

Name | Type
------------ | -------------
`id` | string
`key` | string
`tier` | string
`name` | string
`createdAt` | Date
`expiresAt` | Date
`limits` | object
`notice` | string

## Example

```typescript
import type { CreateAdminKey201ResponseData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "key": null,
  "tier": null,
  "name": null,
  "createdAt": null,
  "expiresAt": null,
  "limits": null,
  "notice": null,
} satisfies CreateAdminKey201ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateAdminKey201ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


