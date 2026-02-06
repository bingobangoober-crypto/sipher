
# GetHealth200ResponseData


## Properties

Name | Type
------------ | -------------
`status` | string
`version` | string
`timestamp` | Date
`uptime` | number
`solana` | [GetHealth200ResponseDataSolana](GetHealth200ResponseDataSolana.md)
`memory` | [GetHealth200ResponseDataMemory](GetHealth200ResponseDataMemory.md)
`endpoints` | number

## Example

```typescript
import type { GetHealth200ResponseData } from '@sip-protocol/sipher-client'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "version": null,
  "timestamp": null,
  "uptime": null,
  "solana": null,
  "memory": null,
  "endpoints": null,
} satisfies GetHealth200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetHealth200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


