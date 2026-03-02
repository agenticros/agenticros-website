/**
 * Google Analytics (gtag.js) helper for use in React components.
 * Add the gtag script and config to index.html with your measurement ID,
 * then use trackEvent() from components.
 */

export const GA_MEASUREMENT_ID = '' // Set your GA4 measurement ID and add script to index.html

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      config?: Record<string, unknown>
    ) => void
    dataLayer?: unknown[]
  }
}

export function gtag(
  command: 'config' | 'event' | 'js',
  targetId: string,
  config?: Record<string, unknown>
): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(command, targetId, config)
  }
}

/** Send a custom event to GA4 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
): void {
  gtag('event', eventName, params as Record<string, unknown>)
}
