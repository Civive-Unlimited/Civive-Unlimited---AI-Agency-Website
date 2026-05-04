type TrackingTarget = Record<string, string | number | boolean | undefined>;

type TrackingPayload = {
  event: string;
  target?: TrackingTarget;
  business?: string;
  contactId?: string;
  opportunityId?: string;
  campaign?: string;
  batch?: string;
};

const TRACKING_ENDPOINT = "/api/track";
const ATTRIBUTION_KEYS = [
  "cid",
  "contact_id",
  "contactId",
  "oid",
  "opportunity_id",
  "opportunityId",
  "business",
  "campaign",
  "batch",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "report",
];

function isBrowser() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

function trimValue(value: unknown, maxLength = 300) {
  if (value === undefined || value === null) return "";
  return String(value).trim().replace(/\s+/g, " ").slice(0, maxLength);
}

export function readTrackingAttribution() {
  if (!isBrowser()) return {};

  const params = new URLSearchParams(window.location.search);
  const attribution: Record<string, string> = {};
  for (const key of ATTRIBUTION_KEYS) {
    const value = trimValue(params.get(key), 400);
    if (value) attribution[key] = value;
  }
  return attribution;
}

function getContactId(attribution: Record<string, string>) {
  return attribution.cid || attribution.contact_id || attribution.contactId || "";
}

function getOpportunityId(attribution: Record<string, string>) {
  return attribution.oid || attribution.opportunity_id || attribution.opportunityId || "";
}

function getCampaign(attribution: Record<string, string>) {
  return attribution.campaign || attribution.utm_campaign || "";
}

function eventBody(payload: TrackingPayload) {
  const attribution = readTrackingAttribution();
  return {
    event: payload.event,
    occurredAt: new Date().toISOString(),
    path: `${window.location.pathname}${window.location.search}${window.location.hash}`,
    title: document.title,
    referrer: document.referrer,
    attribution,
    contactId: payload.contactId || getContactId(attribution),
    opportunityId: payload.opportunityId || getOpportunityId(attribution),
    business: payload.business || attribution.business,
    campaign: payload.campaign || getCampaign(attribution),
    batch: payload.batch || attribution.batch,
    target: payload.target || {},
  };
}

export function trackEvent(payload: TrackingPayload) {
  if (!isBrowser()) return;

  const body = JSON.stringify(eventBody(payload));
  const blob = new Blob([body], { type: "application/json" });

  if (navigator.sendBeacon?.(TRACKING_ENDPOINT, blob)) return;

  window
    .fetch(TRACKING_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    })
    .catch(() => {});
}

function describeElement(element: Element): TrackingTarget {
  const labeledElement = element.closest<HTMLElement>(
    "[data-track-label], a, button, input, textarea, select, summary, [role='button']"
  );

  const trackedElement =
    labeledElement || (element instanceof HTMLElement ? element : null);

  if (!trackedElement) return {};

  const text =
    trackedElement.dataset.trackLabel ||
    trackedElement.getAttribute("aria-label") ||
    trackedElement.getAttribute("title") ||
    trackedElement.textContent ||
    trackedElement.getAttribute("name") ||
    "";

  return {
    tag: trackedElement.tagName.toLowerCase(),
    label: trimValue(text, 160),
    href: trimValue(trackedElement.getAttribute("href"), 500),
    id: trimValue(trackedElement.id, 120),
    name: trimValue(trackedElement.getAttribute("name"), 120),
    type: trimValue(trackedElement.getAttribute("type"), 80),
    trackId: trimValue(trackedElement.dataset.trackId, 120),
  };
}

function eventNameForClick(target: TrackingTarget) {
  const href = trimValue(target.href, 500);
  if (href.startsWith("tel:")) return "phone_click";
  if (href.startsWith("mailto:")) return "email_click";
  if (href.includes("/contact")) return "contact_cta_click";
  return "click";
}

export function installWebsiteTracking() {
  if (!isBrowser()) return () => {};

  let lastPageKey = "";

  const trackPageView = () => {
    const pageKey = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    if (pageKey === lastPageKey) return;
    lastPageKey = pageKey;
    trackEvent({
      event: window.location.pathname === "/prospecting-report" ? "report_view" : "page_view",
    });
  };

  const handleClick = (event: MouseEvent) => {
    if (!(event.target instanceof Element)) return;
    const target = describeElement(event.target);
    if (!Object.keys(target).length) return;
    trackEvent({ event: eventNameForClick(target), target });
  };

  const handleSubmit = (event: SubmitEvent) => {
    const form = event.target instanceof HTMLFormElement ? event.target : null;
    trackEvent({
      event: "form_submit",
      target: {
        id: trimValue(form?.id, 120),
        name: trimValue(form?.getAttribute("name"), 120),
        action: trimValue(form?.getAttribute("action"), 500),
      },
    });
  };

  const interval = window.setInterval(trackPageView, 1000);
  trackPageView();
  document.addEventListener("click", handleClick, { capture: true });
  document.addEventListener("submit", handleSubmit, { capture: true });

  return () => {
    window.clearInterval(interval);
    document.removeEventListener("click", handleClick, { capture: true });
    document.removeEventListener("submit", handleSubmit, { capture: true });
  };
}
