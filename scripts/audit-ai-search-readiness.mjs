import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const projectRoot = process.cwd();
const publicDir = path.join(projectRoot, "dist", "public");
const ssrEntry = path.join(projectRoot, "dist", "ssr", "entry-server.js");
const siteDomain = "https://www.civiveunlimited.com";

function routeOutputPath(routePath) {
  if (routePath === "/") {
    return path.join(publicDir, "index.html");
  }

  return path.join(publicDir, routePath.replace(/^\//, ""), "index.html");
}

function absoluteUrl(routePath) {
  return `${siteDomain}${routePath === "/" ? "" : routePath}`;
}

function extractFirst(html, pattern) {
  return html.match(pattern)?.[1] ?? "";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function hasGraphType(graph, typeName) {
  return graph.some((node) => {
    const nodeType = node["@type"];
    return Array.isArray(nodeType) ? nodeType.includes(typeName) : nodeType === typeName;
  });
}

function fail(message) {
  throw new Error(message);
}

const { prerenderRoutes } = await import(pathToFileURL(ssrEntry));
const sitemap = await fs.readFile(path.join(publicDir, "sitemap.xml"), "utf8");
const robots = await fs.readFile(path.join(publicDir, "robots.txt"), "utf8");

if (!robots.includes(`${siteDomain}/sitemap.xml`)) {
  fail("robots.txt does not point to the canonical sitemap.");
}

await fs.access(path.join(publicDir, "og-image.jpg"));

const issues = [];

for (const route of prerenderRoutes) {
  const outputPath = routeOutputPath(route.path);
  let html = "";

  try {
    html = await fs.readFile(outputPath, "utf8");
  } catch {
    issues.push(`${route.path}: missing prerendered index.html`);
    continue;
  }

  const canonical = extractFirst(html, /<link\s+rel="canonical"\s+href="([^"]+)"/i);
  const description = extractFirst(html, /<meta\s+name="description"\s+content="([^"]+)"/i);
  const schemaText = extractFirst(
    html,
    /<script\s+type="application\/ld\+json"[^>]*data-prerender-schema[^>]*>(.*?)<\/script>/is,
  );

  if (!html.includes(`<title>${escapeHtml(route.title)}</title>`)) issues.push(`${route.path}: missing route title`);
  if (!description) issues.push(`${route.path}: missing meta description`);
  if (canonical !== absoluteUrl(route.path)) issues.push(`${route.path}: canonical mismatch`);
  if (!sitemap.includes(`<loc>${absoluteUrl(route.path)}</loc>`)) issues.push(`${route.path}: missing from sitemap`);
  if (!schemaText) issues.push(`${route.path}: missing JSON-LD schema`);

  if (schemaText) {
    try {
      const schema = JSON.parse(schemaText);
      const graph = schema["@graph"] ?? [];

      if (!hasGraphType(graph, "Organization")) issues.push(`${route.path}: schema missing Organization`);
      if (!hasGraphType(graph, "ProfessionalService")) issues.push(`${route.path}: schema missing ProfessionalService`);
      if (!hasGraphType(graph, "WebSite")) issues.push(`${route.path}: schema missing WebSite`);
      if (!hasGraphType(graph, route.schemaKind === "faq" ? "FAQPage" : "WebPage")) {
        issues.push(`${route.path}: schema missing page node`);
      }
      if (route.path !== "/" && !hasGraphType(graph, "BreadcrumbList")) {
        issues.push(`${route.path}: schema missing BreadcrumbList`);
      }
      if ((route.schemaKind === "service" || route.schemaKind === "industry") && !hasGraphType(graph, "Service")) {
        issues.push(`${route.path}: schema missing Service`);
      }
      if (route.type === "article" && !hasGraphType(graph, "Article")) {
        issues.push(`${route.path}: schema missing Article`);
      }
      if (route.faqItems?.length) {
        const questionCount = JSON.stringify(graph).match(/"@type":"Question"/g)?.length ?? 0;
        if (questionCount < route.faqItems.length) {
          issues.push(`${route.path}: schema missing FAQ questions`);
        }
      }
    } catch (error) {
      issues.push(`${route.path}: invalid JSON-LD schema (${error.message})`);
    }
  }
}

if (issues.length) {
  console.error("AI search readiness audit failed:");
  for (const issue of issues) {
    console.error(`- ${issue}`);
  }
  process.exit(1);
}

console.log(`AI search readiness audit passed for ${prerenderRoutes.length} prerendered routes.`);
