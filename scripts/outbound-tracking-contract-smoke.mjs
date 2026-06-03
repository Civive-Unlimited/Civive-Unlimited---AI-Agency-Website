import redirectHandler from "../api/r.js";
import openHandler from "../api/o.js";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function call(handler, { method = "GET", url = "/", headers = {} } = {}) {
  const req = {
    method,
    url,
    headers: {
      host: "www.civiveunlimited.com",
      "x-forwarded-proto": "https",
      "user-agent": "contract-smoke",
      ...headers,
    },
  };

  return new Promise((resolve, reject) => {
    const chunks = [];
    const res = {
      statusCode: 200,
      headers: {},
      setHeader(name, value) {
        this.headers[name.toLowerCase()] = value;
      },
      end(payload) {
        if (payload)
          chunks.push(
            Buffer.isBuffer(payload) ? payload : Buffer.from(String(payload))
          );
        resolve({
          statusCode: this.statusCode,
          headers: this.headers,
          body: Buffer.concat(chunks),
        });
      },
    };

    Promise.resolve(handler(req, res)).catch(reject);
  });
}

const envSnapshot = { NODE_ENV: process.env.NODE_ENV };

try {
  process.env.NODE_ENV = "test";

  const allowedTarget = "https://prod.analyzemy.business/#/share/report/abc123";
  const click = await call(redirectHandler, {
    url: `/api/r?u=${encodeURIComponent(allowedTarget)}&cid=abc12345&oid=opp12345&campaign=ai_visibility_report`,
  });
  assert(click.statusCode === 302, "Report click endpoint should redirect.");
  assert(
    click.headers.location === allowedTarget,
    "Report click endpoint should preserve allowed report target."
  );
  assert(
    /no-store/i.test(click.headers["cache-control"] || ""),
    "Report click endpoint should disable caching."
  );

  const disallowed = await call(redirectHandler, {
    url: `/api/r?u=${encodeURIComponent("https://evil.example/report")}&cid=abc12345`,
  });
  assert(
    disallowed.statusCode === 302,
    "Unsafe report target should still redirect safely."
  );
  assert(
    disallowed.headers.location ===
      "https://www.civiveunlimited.com/ai-search-report",
    "Unsafe report target should fall back to Civive report page."
  );

  const pixel = await call(openHandler, {
    url: "/api/o?cid=abc12345&campaign=ai_visibility_report",
  });
  assert(pixel.statusCode === 200, "Open pixel should return 200.");
  assert(
    pixel.headers["content-type"] === "image/gif",
    "Open pixel should return a gif."
  );
  assert(
    Number(pixel.headers["content-length"]) > 0,
    "Open pixel should return a non-empty image."
  );

  const badMethod = await call(openHandler, { method: "POST", url: "/api/o" });
  assert(badMethod.statusCode === 405, "Open pixel should reject POST.");

  console.log(
    JSON.stringify(
      {
        ok: true,
        checked: [
          "report click redirect",
          "unsafe redirect fallback",
          "open pixel gif",
          "method rejection",
        ],
      },
      null,
      2
    )
  );
} finally {
  if (envSnapshot.NODE_ENV === undefined) delete process.env.NODE_ENV;
  else process.env.NODE_ENV = envSnapshot.NODE_ENV;
}
