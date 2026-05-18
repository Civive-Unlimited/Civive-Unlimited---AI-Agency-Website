type WebsiteEventValue = string | number | boolean | null | undefined;

export type WebsiteEventMetadata = Record<string, WebsiteEventValue>;

export function trackWebsiteEvent(
  eventName: string,
  metadata: WebsiteEventMetadata = {}
) {
  if (typeof window === "undefined") return;

  const payload = {
    eventName,
    path: `${window.location.pathname}${window.location.search}${window.location.hash}`,
    url: window.location.href,
    referrer: document.referrer || undefined,
    metadata,
  };
  const body = JSON.stringify(payload);

  try {
    if (navigator.sendBeacon) {
      const blob = new Blob([body], { type: "application/json" });
      if (navigator.sendBeacon("/api/track", blob)) return;
    }
  } catch {
    // Ignore tracking failures so CTAs and forms never depend on analytics.
  }

  void fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {});
}
