const canonicalDomain = "https://www.civiveunlimited.com";
const canonicalHost = "www.civiveunlimited.com";
const defaultEndpoint = "https://api.indexnow.org/indexnow";
const defaultKey = "aa675002bb374af9242f70534de8a0ce";

const args = new Set(process.argv.slice(2));

function getArg(name, fallback) {
  const prefix = `${name}=`;
  const match = process.argv.slice(2).find(arg => arg.startsWith(prefix));
  return match ? match.slice(prefix.length) : fallback;
}

function getRepeatedArg(name) {
  const prefix = `${name}=`;
  return process.argv
    .slice(2)
    .filter(arg => arg.startsWith(prefix))
    .map(arg => arg.slice(prefix.length))
    .filter(Boolean);
}

function fail(message) {
  throw new Error(message);
}

function parseSitemapUrls(xml) {
  return Array.from(xml.matchAll(/<loc>(.*?)<\/loc>/g), ([, rawUrl]) =>
    rawUrl.trim()
  );
}

function normalizeUrl(url) {
  const parsed = new URL(url);
  parsed.hash = "";
  return parsed.toString();
}

function uniqueUrls(urls) {
  return Array.from(new Set(urls.map(normalizeUrl))).sort();
}

async function fetchText(url) {
  const response = await fetch(url);
  const text = await response.text();
  return { response, text };
}

async function main() {
  const endpoint = getArg("--endpoint", defaultEndpoint);
  const key = process.env.INDEXNOW_KEY ?? getArg("--key", defaultKey);
  const keyLocation = getArg("--key-location", `${canonicalDomain}/${key}.txt`);
  const sitemapUrl = getArg("--sitemap", `${canonicalDomain}/sitemap.xml`);
  const dryRun = args.has("--dry-run");
  const skipKeyCheck = args.has("--skip-key-check");
  const extraUrls = getRepeatedArg("--url");

  if (!/^[A-Za-z0-9-]{8,128}$/.test(key)) {
    fail("IndexNow key must be 8-128 characters: letters, numbers, or dashes.");
  }

  if (!skipKeyCheck) {
    const keyResponse = await fetch(keyLocation);
    const keyText = (await keyResponse.text()).trim();
    if (keyResponse.status !== 200 || keyText !== key) {
      fail(
        `IndexNow key file is not live or does not match. Checked ${keyLocation} and received status ${keyResponse.status}.`
      );
    }
  }

  const { response: sitemapResponse, text: sitemapXml } =
    await fetchText(sitemapUrl);
  if (sitemapResponse.status !== 200) {
    fail(`Sitemap fetch failed for ${sitemapUrl}: ${sitemapResponse.status}`);
  }

  const urls = uniqueUrls([...parseSitemapUrls(sitemapXml), ...extraUrls]);
  const invalidUrls = urls.filter(url => {
    const parsed = new URL(url);
    return parsed.protocol !== "https:" || parsed.hostname !== canonicalHost;
  });

  if (invalidUrls.length > 0) {
    fail(
      `Refusing to submit non-canonical URLs: ${invalidUrls.slice(0, 5).join(", ")}`
    );
  }

  if (urls.length === 0) {
    fail("No URLs found to submit.");
  }

  if (urls.length > 10000) {
    fail(
      `IndexNow accepts up to 10,000 URLs per request; found ${urls.length}.`
    );
  }

  const payload = {
    host: canonicalHost,
    key,
    keyLocation,
    urlList: urls,
  };

  if (dryRun) {
    console.log(
      JSON.stringify(
        {
          ok: true,
          dryRun: true,
          endpoint,
          keyLocation,
          keyChecked: !skipKeyCheck,
          urlCount: urls.length,
          sampleUrls: urls.slice(0, 10),
        },
        null,
        2
      )
    );
    return;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
  });

  const body = await response.text();
  const accepted = response.status === 200 || response.status === 202;

  console.log(
    JSON.stringify(
      {
        ok: accepted,
        endpoint,
        status: response.status,
        statusText: response.statusText,
        urlCount: urls.length,
        keyLocation,
        responseBody: body.trim(),
      },
      null,
      2
    )
  );

  if (!accepted) {
    process.exitCode = 1;
  }
}

main().catch(error => {
  console.error(error.message);
  process.exitCode = 1;
});
