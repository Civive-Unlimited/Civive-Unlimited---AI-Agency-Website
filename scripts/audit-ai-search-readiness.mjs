import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const projectRoot = process.cwd();
const publicDir = path.join(projectRoot, "dist", "public");
const ssrEntry = path.join(projectRoot, "dist", "ssr", "entry-server.js");

function routeOutputPath(routePath) {
  if (routePath === "/") {
    return path.join(publicDir, "index.html");
  }

  return path.join(publicDir, routePath.replace(/^\//, ""), "index.html");
}

function absoluteUrl(routePath) {
  return buildCanonicalUrl(routePath);
}

function extractFirst(html, pattern) {
  return html.match(pattern)?.[1] ?? "";
}

function stripTags(html) {
  return html.replace(/<[^>]*>/g, " ");
}

function decodeHtml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function visibleText(html) {
  return decodeHtml(
    stripTags(html.replace(/<script\b[^>]*>.*?<\/script>/gis, " "))
  ).replace(/\s+/g, " ");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function hasGraphType(graph, typeName) {
  return graph.some(node => nodeHasType(node, typeName));
}

function nodeHasType(node, typeName) {
  const nodeType = node["@type"];
  return Array.isArray(nodeType)
    ? nodeType.includes(typeName)
    : nodeType === typeName;
}

function graphNodeOfType(graph, typeName) {
  return graph.find(node => nodeHasType(node, typeName));
}

function stripBrand(title) {
  return title
    .replace(new RegExp(`\\s*\\|\\s*${seoConfig.brandName}\\s*$`, "i"), "")
    .trim();
}

function readableSegment(segment) {
  return segment
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function expectedBreadcrumbNames(route) {
  if (route.path === "/") return [];

  const segments = route.path.replace(/^\//, "").split("/");
  return [
    "Home",
    ...segments.map((segment, index) =>
      index === segments.length - 1
        ? stripBrand(route.title)
        : readableSegment(segment)
    ),
  ];
}

function compareSets(label, expected, actual, issues) {
  const expectedSet = new Set(expected);
  const actualSet = new Set(actual);

  for (const value of expectedSet) {
    if (!actualSet.has(value)) {
      issues.push(`${label}: missing ${value}`);
    }
  }

  for (const value of actualSet) {
    if (!expectedSet.has(value)) {
      issues.push(`${label}: unexpected ${value}`);
    }
  }
}

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function generatedIndustryRoutePaths() {
  const industriesDir = path.join(publicDir, "industries");
  let entries = [];

  try {
    entries = await fs.readdir(industriesDir, { withFileTypes: true });
  } catch {
    return [];
  }

  const paths = [];
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const indexPath = path.join(industriesDir, entry.name, "index.html");
    if (await pathExists(indexPath)) {
      paths.push(`/industries/${entry.name}`);
    }
  }

  return paths.sort();
}

function fail(message) {
  throw new Error(message);
}

const {
  buildCanonicalUrl,
  industries,
  prerenderRoutes,
  relatedIndustrySlugsBySlug,
  seoConfig,
  topicalPages,
} = await import(pathToFileURL(ssrEntry));
const siteDomain = seoConfig.canonicalDomain;
const sitemap = await fs.readFile(path.join(publicDir, "sitemap.xml"), "utf8");
const robots = await fs.readFile(path.join(publicDir, "robots.txt"), "utf8");
const llms = await fs.readFile(path.join(publicDir, "llms.txt"), "utf8");

if (!robots.includes(`${siteDomain}/sitemap.xml`)) {
  fail("robots.txt does not point to the canonical sitemap.");
}

if (
  !llms.includes(siteDomain) ||
  !llms.includes(seoConfig.defaultDescription)
) {
  fail("llms.txt is missing canonical brand context.");
}

for (const page of topicalPages.filter(page => page.includeInLlms !== false)) {
  if (!llms.includes(absoluteUrl(page.path))) {
    fail(`llms.txt is missing ${page.path}.`);
  }
}

await fs.access(path.join(publicDir, "og-image.jpg"));

const issues = [];
const seenTitles = new Map();
const seenDescriptions = new Map();
const seenCanonicals = new Map();
const routePaths = new Set(prerenderRoutes.map(route => route.path));
const industryChildPaths = topicalPages
  .filter(page => page.parentPath === "/industries")
  .map(page => page.path);
const industryContentPaths = industries.map(
  industry => `/industries/${industry.slug}`
);
const industryRoutePaths = prerenderRoutes
  .filter(route => route.schemaKind === "industry")
  .map(route => route.path);
const industrySupportHrefs = [
  "/ai-search-audit",
  "/visibility-system",
  "/resources/ai-search-implementation-plan-service-businesses",
  "/ai-receptionist",
  "/civive-os",
  "/contact",
];

compareSets(
  "industry content-to-route parity",
  industryContentPaths,
  industryRoutePaths,
  issues
);
compareSets(
  "industry content-to-topical parity",
  industryContentPaths,
  industryChildPaths,
  issues
);

for (const route of prerenderRoutes) {
  const outputPath = routeOutputPath(route.path);
  let html = "";

  try {
    html = await fs.readFile(outputPath, "utf8");
  } catch {
    issues.push(`${route.path}: missing prerendered index.html`);
    continue;
  }

  const routeHtmlPath =
    route.path === "/"
      ? path.join(publicDir, "index.html")
      : path.join(publicDir, `${route.path.replace(/^\//, "")}.html`);
  if (route.path !== "/") {
    try {
      await fs.access(routeHtmlPath);
      issues.push(`${route.path}: duplicate .html output exists`);
    } catch {
      // Expected: canonical index.html routes only.
    }
  }

  const canonical = extractFirst(
    html,
    /<link\s+rel="canonical"\s+href="([^"]+)"/i
  );
  const title = extractFirst(html, /<title>(.*?)<\/title>/is);
  const description = extractFirst(
    html,
    /<meta\s+name="description"\s+content="([^"]+)"/i
  );
  const schemaText = extractFirst(
    html,
    /<script\s+type="application\/ld\+json"[^>]*data-prerender-schema[^>]*>(.*?)<\/script>/is
  );

  if (!html.includes(`<title>${escapeHtml(route.title)}</title>`))
    issues.push(`${route.path}: missing route title`);
  if (!description) issues.push(`${route.path}: missing meta description`);
  if ((html.match(/<h1\b/gi) ?? []).length !== 1) {
    issues.push(`${route.path}: expected exactly one H1`);
  }
  if (canonical !== absoluteUrl(route.path))
    issues.push(`${route.path}: canonical mismatch`);
  if (!sitemap.includes(`<loc>${absoluteUrl(route.path)}</loc>`))
    issues.push(`${route.path}: missing from sitemap`);
  if (!schemaText) issues.push(`${route.path}: missing JSON-LD schema`);
  if (title) {
    const existingRoute = seenTitles.get(title);
    if (existingRoute) {
      issues.push(`${route.path}: duplicate title with ${existingRoute}`);
    }
    seenTitles.set(title, route.path);
  }
  if (description) {
    const existingRoute = seenDescriptions.get(description);
    if (existingRoute) {
      issues.push(
        `${route.path}: duplicate meta description with ${existingRoute}`
      );
    }
    seenDescriptions.set(description, route.path);
  }
  if (canonical) {
    const existingRoute = seenCanonicals.get(canonical);
    if (existingRoute) {
      issues.push(`${route.path}: duplicate canonical with ${existingRoute}`);
    }
    seenCanonicals.set(canonical, route.path);
  }

  const pageText = visibleText(html);
  if (route.faqItems?.length) {
    for (const faq of route.faqItems) {
      if (!pageText.includes(faq.question)) {
        issues.push(
          `${route.path}: FAQ question is not visible: ${faq.question}`
        );
      }
    }
  }

  const hrefs = [...html.matchAll(/\shref="([^"]+)"/gi)].map(match => match[1]);

  if (route.path === "/industries") {
    for (const childPath of industryChildPaths) {
      if (!hrefs.includes(childPath)) {
        issues.push(`/industries: missing industry child href ${childPath}`);
      }
    }
    for (const requiredHref of industrySupportHrefs) {
      if (!hrefs.includes(requiredHref)) {
        issues.push(`/industries: missing support href ${requiredHref}`);
      }
    }
    for (const requiredText of ["Direct answer", "Industry FAQ"]) {
      if (!pageText.includes(requiredText)) {
        issues.push(`/industries: missing visible ${requiredText} section`);
      }
    }
  }

  if (route.path.startsWith("/industries/")) {
    const industrySlug = route.path.replace("/industries/", "");
    for (const requiredHref of [...industrySupportHrefs, "/industries"]) {
      if (!hrefs.includes(requiredHref)) {
        issues.push(
          `${route.path}: missing industry support href ${requiredHref}`
        );
      }
    }
    for (const relatedSlug of relatedIndustrySlugsBySlug[industrySlug] ?? []) {
      const relatedHref = `/industries/${relatedSlug}`;
      if (!hrefs.includes(relatedHref)) {
        issues.push(
          `${route.path}: missing related industry href ${relatedHref}`
        );
      }
    }
    for (const requiredText of [
      "Buyer questions",
      "Direct answer",
      "How buyers choose",
      "Objection handling",
      "Connected implementation path",
      "Related industry patterns",
    ]) {
      if (!pageText.includes(requiredText)) {
        issues.push(`${route.path}: missing visible ${requiredText} section`);
      }
    }
  }

  for (const href of hrefs) {
    if (
      href.startsWith("#") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("https://buy.stripe.com") ||
      href.startsWith("https://app.") ||
      href.startsWith("https://calendly.")
    ) {
      continue;
    }

    if (href.startsWith("http://")) {
      issues.push(`${route.path}: non-HTTPS href ${href}`);
      continue;
    }

    if (href.startsWith("https://civiveunlimited.com")) {
      issues.push(`${route.path}: non-canonical apex href ${href}`);
      continue;
    }

    let pathname = href;
    if (href.startsWith(siteDomain)) {
      pathname = new URL(href).pathname;
    } else if (href.startsWith("https://")) {
      continue;
    }

    pathname = pathname.split("#")[0].split("?")[0] || "/";
    if (!pathname.startsWith("/")) continue;
    if (
      pathname.startsWith("/assets/") ||
      /\.(?:css|js|mjs|png|jpg|jpeg|svg|webp|ico|txt|xml|json|woff2?)$/i.test(
        pathname
      )
    ) {
      const assetPath = path.join(publicDir, pathname.replace(/^\//, ""));
      if (!(await pathExists(assetPath))) {
        issues.push(`${route.path}: missing linked asset ${href}`);
      }
      continue;
    }

    if (!routePaths.has(pathname) && pathname !== "/og-image.jpg") {
      issues.push(`${route.path}: broken internal href ${href}`);
    }
  }

  if (schemaText) {
    try {
      const schema = JSON.parse(schemaText);
      const graph = schema["@graph"] ?? [];
      const routeUrl = absoluteUrl(route.path);
      const webPageNode = graphNodeOfType(graph, "WebPage");
      const breadcrumbNode = graphNodeOfType(graph, "BreadcrumbList");
      const serviceNode = graph.find(
        node =>
          nodeHasType(node, "Service") && node["@id"] === `${routeUrl}#service`
      );

      if (!hasGraphType(graph, "Organization"))
        issues.push(`${route.path}: schema missing Organization`);
      if (!hasGraphType(graph, "ProfessionalService"))
        issues.push(`${route.path}: schema missing ProfessionalService`);
      if (!hasGraphType(graph, "WebSite"))
        issues.push(`${route.path}: schema missing WebSite`);
      if (
        !hasGraphType(graph, route.schemaKind === "faq" ? "FAQPage" : "WebPage")
      ) {
        issues.push(`${route.path}: schema missing page node`);
      }
      if (!webPageNode) {
        issues.push(`${route.path}: schema missing WebPage node`);
      } else {
        if (webPageNode.url !== routeUrl) {
          issues.push(`${route.path}: schema WebPage URL mismatch`);
        }
        if (webPageNode["@id"] !== `${routeUrl}#webpage`) {
          issues.push(`${route.path}: schema WebPage @id mismatch`);
        }
      }
      if (route.path !== "/" && !hasGraphType(graph, "BreadcrumbList")) {
        issues.push(`${route.path}: schema missing BreadcrumbList`);
      }
      if (route.path !== "/" && breadcrumbNode) {
        const expectedNames = expectedBreadcrumbNames(route);
        const actualNames = (breadcrumbNode.itemListElement ?? []).map(
          item => item.name
        );
        if (actualNames.join(" > ") !== expectedNames.join(" > ")) {
          issues.push(
            `${route.path}: schema BreadcrumbList order mismatch (${actualNames.join(" > ")})`
          );
        }
      }
      if (
        (route.schemaKind === "service" || route.schemaKind === "industry") &&
        !hasGraphType(graph, "Service")
      ) {
        issues.push(`${route.path}: schema missing Service`);
      }
      if (route.schemaKind === "service" || route.schemaKind === "industry") {
        if (!serviceNode) {
          issues.push(`${route.path}: schema missing route Service node`);
        } else {
          if (serviceNode.name !== route.serviceName) {
            issues.push(`${route.path}: schema Service name mismatch`);
          }
          if (
            serviceNode.serviceType !== (route.serviceType ?? route.serviceName)
          ) {
            issues.push(`${route.path}: schema Service serviceType mismatch`);
          }
          if (serviceNode.mainEntityOfPage?.["@id"] !== `${routeUrl}#webpage`) {
            issues.push(
              `${route.path}: schema Service mainEntityOfPage mismatch`
            );
          }
        }
      }
      if (route.type === "article" && !hasGraphType(graph, "Article")) {
        issues.push(`${route.path}: schema missing Article`);
      }
      if (route.path === "/industries") {
        const itemListNode = graphNodeOfType(graph, "ItemList");
        if (!itemListNode) {
          issues.push("/industries: schema missing ItemList");
        } else {
          const listedUrls = new Set(
            (itemListNode.itemListElement ?? []).map(item => item.url)
          );
          for (const childPath of industryChildPaths) {
            if (!listedUrls.has(absoluteUrl(childPath))) {
              issues.push(`/industries: schema ItemList missing ${childPath}`);
            }
          }
        }
      }
      if (route.faqItems?.length) {
        if (route.schemaKind === "industry" && route.faqItems.length < 8) {
          issues.push(`${route.path}: expected at least 8 industry FAQs`);
        }
        if (!hasGraphType(graph, "FAQPage")) {
          issues.push(`${route.path}: schema missing FAQPage type`);
        }
        const questionCount =
          JSON.stringify(graph).match(/"@type":"Question"/g)?.length ?? 0;
        if (questionCount < route.faqItems.length) {
          issues.push(`${route.path}: schema missing FAQ questions`);
        }
        const schemaFaqNames = new Set(
          (Array.isArray(webPageNode?.mainEntity) ? webPageNode.mainEntity : [])
            .filter(item => item["@type"] === "Question")
            .map(item => item.name)
        );
        for (const faq of route.faqItems) {
          if (!schemaFaqNames.has(faq.question)) {
            issues.push(
              `${route.path}: schema missing FAQ question name: ${faq.question}`
            );
          }
        }
      }
      if (route.offerCatalog?.length) {
        const schemaText = JSON.stringify(graph);
        const offerCount = schemaText.match(/"@type":"Offer"/g)?.length ?? 0;
        if (offerCount < route.offerCatalog.length) {
          issues.push(`${route.path}: schema missing offer catalog entries`);
        }
      }
    } catch (error) {
      issues.push(`${route.path}: invalid JSON-LD schema (${error.message})`);
    }
  }
}

const homeHtml = await fs.readFile(routeOutputPath("/"), "utf8");
for (const requiredHref of [
  "/ai-search-audit",
  "/visibility-system",
  "/civive-os",
  "/civive-os-offer",
  "/ai-receptionist",
  "/contact",
]) {
  if (!homeHtml.includes(`href="${requiredHref}"`)) {
    issues.push(`/: missing required money-path href ${requiredHref}`);
  }
}

compareSets(
  "generated industry output parity",
  industryRoutePaths,
  await generatedIndustryRoutePaths(),
  issues
);

if (issues.length) {
  console.error("AI search readiness audit failed:");
  for (const issue of issues) {
    console.error(`- ${issue}`);
  }
  process.exit(1);
}

console.log(
  `AI search readiness audit passed for ${prerenderRoutes.length} prerendered routes.`
);
