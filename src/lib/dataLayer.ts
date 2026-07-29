declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

// Envía un evento a GTM. No-op en SSR (window no existe todavía).
export function pushToDataLayer(event: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}
