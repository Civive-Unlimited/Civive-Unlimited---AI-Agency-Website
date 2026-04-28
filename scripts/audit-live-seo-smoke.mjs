const canonicalDomain = "https://www.civiveunlimited.com";
const apexDomain = "https://civiveunlimited.com";

function fail(message) {
  throw new Error(message);
}

async function fetchText(url, options) {
  const response = await fetch(url, options);
  const text = await response.text();
  return { response, text };
}

function extractFirst(html, pattern) {
  return html.match(pattern)?.[1] ?? "";
}

function parseSchema(html) {
  const schemaText = extractFirst(
    html,
    /<script\s+type="application\/ld\+json"[^>]*data-prerender-schema[^>]*>(.*?)<\/script>/is
  );
  return schemaText ? JSON.parse(schemaText) : { "@graph": [] };
}

function nodeHasType(node, typeName) {
  const nodeType = node["@type"];
  return Array.isArray(nodeType)
    ? nodeType.includes(typeName)
    : nodeType === typeName;
}

const issues = [];

const pageChecks = [
  { path: "/", requireFaq: true },
  { path: "/industries", requireFaq: true, requireItemList: true },
  {
    path: "/industries/hvac",
    requireFaq: true,
    requireService: true,
    requiredText: ["How buyers choose", "Objection handling"],
  },
  {
    path: "/industries/med-spas",
    requireFaq: true,
    requireService: true,
    requiredText: ["How buyers choose", "Objection handling"],
  },
];

for (const check of pageChecks) {
  const url = `${canonicalDomain}${check.path === "/" ? "" : check.path}`;
  const { response, text } = await fetchText(url);
  if (response.status !== 200) {
    issues.push(`${url}: expected 200, got ${response.status}`);
    continue;
  }

  const canonical = extractFirst(
    text,
    /<link\s+rel="canonical"\s+href="([^"]+)"/i
  );
  if (canonical !== url) {
    issues.push(`${url}: canonical mismatch (${canonical})`);
  }

  const h1Count = text.match(/<h1\b/gi)?.length ?? 0;
  if (h1Count !== 1) {
    issues.push(`${url}: expected one H1, got ${h1Count}`);
  }

  const schema = parseSchema(text);
  const graph = schema["@graph"] ?? [];
  if (check.requireFaq && !graph.some(node => nodeHasType(node, "FAQPage"))) {
    issues.push(`${url}: missing FAQPage schema`);
  }
  if (
    check.requireItemList &&
    !graph.some(node => nodeHasType(node, "ItemList"))
  ) {
    issues.push(`${url}: missing ItemList schema`);
  }
  if (
    check.requireService &&
    !graph.some(node => nodeHasType(node, "Service"))
  ) {
    issues.push(`${url}: missing Service schema`);
  }

  for (const requiredText of check.requiredText ?? []) {
    if (!text.includes(requiredText)) {
      issues.push(`${url}: missing visible text ${requiredText}`);
    }
  }
}

for (const assetPath of ["/sitemap.xml", "/robots.txt", "/llms.txt"]) {
  const { response, text } = await fetchText(`${canonicalDomain}${assetPath}`);
  if (response.status !== 200) {
    issues.push(`${assetPath}: expected 200, got ${response.status}`);
  }
  if (assetPath === "/robots.txt") {
    for (const required of [
      "User-agent: OAI-SearchBot",
      "User-agent: ChatGPT-User",
      `Sitemap: ${canonicalDomain}/sitemap.xml`,
    ]) {
      if (!text.includes(required))
        issues.push(`/robots.txt: missing ${required}`);
    }
  }
  if (assetPath === "/sitemap.xml") {
    for (const required of [
      `${canonicalDomain}/industries`,
      `${canonicalDomain}/industries/hvac`,
    ]) {
      if (!text.includes(required))
        issues.push(`/sitemap.xml: missing ${required}`);
    }
  }
  if (
    assetPath === "/llms.txt" &&
    !text.includes(`${canonicalDomain}/industries/hvac`)
  ) {
    issues.push("/llms.txt: missing industry child URL");
  }
}

const apex = await fetch(`${apexDomain}/industries`, { redirect: "manual" });
if (
  apex.status !== 308 ||
  apex.headers.get("location") !== `${canonicalDomain}/industries`
) {
  issues.push(
    `apex redirect mismatch: ${apex.status} ${apex.headers.get("location")}`
  );
}

const htmlDuplicate = await fetch(`${canonicalDomain}/industries/hvac.html`, {
  redirect: "manual",
});
if (htmlDuplicate.status !== 404) {
  issues.push(
    `/industries/hvac.html expected 404, got ${htmlDuplicate.status}`
  );
}

if (issues.length) {
  console.error("Live SEO smoke failed:");
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log(
  "Live SEO smoke passed for canonical domain, crawl files, and sample industry pages."
);
