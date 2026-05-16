import { Readable } from "node:stream";
import trackHandler from "../api/track.js";

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function callTrackApi({
  method = "POST",
  headers = {},
  body,
  rawBody,
} = {}) {
  const serializedBody =
    rawBody ?? (body === undefined ? "" : JSON.stringify(body));
  const req = Readable.from(
    serializedBody ? [Buffer.from(serializedBody)] : []
  );
  Object.assign(req, {
    method,
    headers: {
      "content-type": "application/json",
      ...headers,
    },
  });

  return new Promise((resolve, reject) => {
    const res = {
      statusCode: 200,
      headers: {},
      setHeader(name, value) {
        this.headers[name.toLowerCase()] = value;
      },
      end(payload) {
        try {
          resolve({
            statusCode: this.statusCode,
            headers: this.headers,
            payload: payload ? JSON.parse(payload) : null,
          });
        } catch (error) {
          reject(error);
        }
      },
    };

    Promise.resolve(trackHandler(req, res)).catch(reject);
  });
}

const envSnapshot = {
  NODE_ENV: process.env.NODE_ENV,
};

try {
  process.env.NODE_ENV = "test";

  const validEvent = await callTrackApi({
    body: {
      eventName: "cta_click",
      path: "/",
      url: "https://www.civiveunlimited.com/",
      referrer: "https://example.com/",
      metadata: {
        placement: "hero",
        count: 1,
        ok: true,
        ignoredNested: { nested: true },
      },
    },
  });
  assert(validEvent.statusCode === 200, "Valid tracking event should pass.");
  assert(validEvent.payload.ok === true, "Valid tracking response should be ok.");
  assert(
    validEvent.payload.eventName === "cta_click",
    "Tracking response should echo the cleaned event name."
  );

  const missingEventName = await callTrackApi({
    body: { metadata: { placement: "hero" } },
  });
  assert(
    missingEventName.statusCode === 400,
    "Tracking event without eventName should be rejected."
  );

  const malformedJson = await callTrackApi({
    rawBody: '{"eventName":',
  });
  assert(
    malformedJson.statusCode === 400,
    "Malformed tracking JSON should be rejected."
  );

  const oversizedBody = await callTrackApi({
    headers: {
      "content-length": String(17 * 1024),
    },
    rawBody: "",
  });
  assert(
    oversizedBody.statusCode === 413,
    "Oversized tracking payloads should be rejected before parsing."
  );

  console.log(
    JSON.stringify(
      {
        ok: true,
        checked: [
          "valid tracking event",
          "missing eventName rejection",
          "malformed JSON handling",
          "oversized request rejection",
        ],
      },
      null,
      2
    )
  );
} finally {
  if (envSnapshot.NODE_ENV === undefined) {
    delete process.env.NODE_ENV;
  } else {
    process.env.NODE_ENV = envSnapshot.NODE_ENV;
  }
}
