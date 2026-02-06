import { PrivacyBackendRegistry, SIPNativeBackend } from '@sip-protocol/sdk'
import { ArciumMockBackend } from './arcium-backend.js'
import { IncoFHEBackend } from './inco-backend.js'

let registry: PrivacyBackendRegistry | null = null

export function getBackendRegistry(): PrivacyBackendRegistry {
  if (!registry) {
    registry = new PrivacyBackendRegistry({ enableHealthTracking: true })
    registry.register(new SIPNativeBackend(), { priority: 100, enabled: true })
    registry.register(new ArciumMockBackend(), { priority: 50, enabled: true })
    registry.register(new IncoFHEBackend(), { priority: 45, enabled: true })
  }
  return registry
}

export function resetBackendRegistry(): void {
  if (registry) registry.clear()
  registry = null
}
