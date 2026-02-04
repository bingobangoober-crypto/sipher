import { MockProofProvider } from '@sip-protocol/sdk'
import type { ProofProvider } from '@sip-protocol/sdk'

let provider: ProofProvider | null = null

export async function getProofProvider(): Promise<ProofProvider> {
  if (!provider) {
    provider = new MockProofProvider({ silent: true })
    await provider.initialize()
  }
  return provider
}

export function resetProofProvider(): void {
  provider = null
}
