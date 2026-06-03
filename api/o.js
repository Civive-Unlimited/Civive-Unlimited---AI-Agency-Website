import { recordOutboundEvent, sendNoStoreHeaders } from "./_outbound-track.js";

const TRANSPARENT_GIF = Buffer.from(
  "R0lGODlhAQABAPAAAP///wAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
  "base64"
);

export default async function handler(req, res) {
  sendNoStoreHeaders(res);

  if (req.method !== "GET" && req.method !== "HEAD") {
    res.setHeader("Allow", "GET, HEAD");
    res.statusCode = 405;
    res.end("Method not allowed.");
    return;
  }

  await recordOutboundEvent({ req, eventName: "email_open" });

  res.statusCode = 200;
  res.setHeader("Content-Type", "image/gif");
  res.setHeader("Content-Length", String(TRANSPARENT_GIF.length));
  res.end(req.method === "HEAD" ? "" : TRANSPARENT_GIF);
}
