import {
  recordOutboundEvent,
  safeRedirectUrl,
  sendNoStoreHeaders,
  requestUrl,
} from "./_outbound-track.js";

export default async function handler(req, res) {
  sendNoStoreHeaders(res);

  if (req.method !== "GET" && req.method !== "HEAD") {
    res.setHeader("Allow", "GET, HEAD");
    res.statusCode = 405;
    res.end("Method not allowed.");
    return;
  }

  const url = requestUrl(req);
  const targetUrl = safeRedirectUrl(url.searchParams.get("u"));
  await recordOutboundEvent({ req, eventName: "report_click", targetUrl });

  res.statusCode = 302;
  res.setHeader("Location", targetUrl);
  res.end("");
}
