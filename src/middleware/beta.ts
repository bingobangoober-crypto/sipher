import type { Request, Response, NextFunction } from 'express'

/**
 * Beta endpoint middleware
 * Marks endpoints as beta/experimental with appropriate headers and warnings
 */
export function betaEndpoint(feature: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    // Add beta header
    res.setHeader('X-Beta', 'true')
    res.setHeader('X-Beta-Feature', feature)

    // Store warning for response (can be included in JSON response)
    ;(req as Request & { betaWarning?: string }).betaWarning =
      `This endpoint is in beta. ${feature} functionality may change without notice.`

    next()
  }
}

/**
 * Get beta warning from request (for use in route handlers)
 */
export function getBetaWarning(req: Request): string | undefined {
  return (req as Request & { betaWarning?: string }).betaWarning
}
