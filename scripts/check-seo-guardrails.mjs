import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const projectRoot = process.cwd();
const publicDir = path.join(projectRoot, "dist", "public");
const ssrEntry = path.join(projectRoot, "dist", "ssr", "entry-server.js");
const freshnessToleranceMs = 2000;

function fail(message) {
  throw new Error(message);
}

function routeOutputPath(routePath) {
  if (routePath === "/") return path.join(publicDir, "index.html");
  return path.join(publicDir, routePath.replace(/^\//, ""), "index.html");
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

function wordCount(text) {
  return text.match(/[A-Za-z0-9]+(?:'[A-Za-z0-9]+)?/g)?.length ?? 0;
}

function extractFirst(html, pattern) {
  return html.match(pattern)?.[1] ?? "";
}

function extractHrefs(html, siteDomain) {
  return new Set(
    [...html.matchAll(/\shref="([^"]+)"/gi)]
      .map(match => match[1])
      .map(href => {
        if (href.startsWith(siteDomain)) return new URL(href).pathname;
        return href.split("#")[0].split("?")[0] || "/";
      })
      .filter(href => href.startsWith("/"))
  );
}

function metaContent(html, attribute, value) {
  const pattern = new RegExp(
    `<meta\\s+${attribute}="${value}"\\s+content="([^"]+)"`,
    "i"
  );
  return html.match(pattern)?.[1] ?? "";
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

function isEditorialTrainingRoute(route) {
  return (
    route.path.startsWith("/resources/") ||
    route.path === "/build-in-public" ||
    route.path.startsWith("/build-in-public/")
  );
}

function compareSets(label, expected, actual, issues) {
  const expectedSet = new Set(expected);
  const actualSet = new Set(actual);

  for (const value of expectedSet) {
    if (!actualSet.has(value)) issues.push(`${label}: missing ${value}`);
  }

  for (const value of actualSet) {
    if (!expectedSet.has(value)) issues.push(`${label}: unexpected ${value}`);
  }
}

async function walkFiles(rootDir, extensions) {
  const entries = await fs.readdir(rootDir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(rootDir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkFiles(entryPath, extensions)));
      continue;
    }

    if (extensions.some(extension => entry.name.endsWith(extension))) {
      files.push(entryPath);
    }
  }

  return files;
}

async function assertFreshGeneratedOutput(issues) {
  const sourceFiles = [
    path.join(projectRoot, "client", "index.html"),
    path.join(projectRoot, "client", "src", "prerender-routes.ts"),
    path.join(projectRoot, "scripts", "prerender.mjs"),
    ...(await walkFiles(path.join(projectRoot, "client", "src"), [
      ".ts",
      ".tsx",
      ".css",
    ])),
  ];
  const outputFiles = [
    path.join(publicDir, "index.html"),
    path.join(publicDir, "sitemap.xml"),
    path.join(publicDir, "llms.txt"),
    ssrEntry,
  ];

  const newestSource = Math.max(
    ...(await Promise.all(sourceFiles.map(file => fs.stat(file)))).map(
      stat => stat.mtimeMs
    )
  );
  const oldestOutput = Math.min(
    ...(await Promise.all(outputFiles.map(file => fs.stat(file)))).map(
      stat => stat.mtimeMs
    )
  );

  if (newestSource > oldestOutput + freshnessToleranceMs) {
    issues.push(
      "generated output is stale; run pnpm run build before SEO audits"
    );
  }
}

const {
  buildCanonicalUrl,
  industries,
  prerenderRoutes,
  seoConfig,
  topicalPages,
} = await import(pathToFileURL(ssrEntry));

const issues = [];
const routeByPath = new Map(prerenderRoutes.map(route => [route.path, route]));
const topicalByPath = new Map(topicalPages.map(page => [page.path, page]));
const industryByPath = new Map(
  industries.map(industry => [`/industries/${industry.slug}`, industry])
);
const siteDomain = seoConfig.canonicalDomain;
const sitemap = await fs.readFile(path.join(publicDir, "sitemap.xml"), "utf8");
const robotsTxt = await fs.readFile(path.join(publicDir, "robots.txt"), "utf8");
const llmsTxt = await fs.readFile(path.join(publicDir, "llms.txt"), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
  match => match[1]
);
const expectedSitemapUrls = prerenderRoutes
  .filter(route => !route.robots?.toLowerCase().includes("noindex"))
  .map(route => buildCanonicalUrl(route.path));
const expectedSocialProfileUrls = seoConfig.socialLinks.map(link => link.href);
const expectedRobotsTxt = [
  "User-agent: *",
  "Allow: /",
  "",
  "User-agent: Googlebot",
  "Allow: /",
  "",
  "User-agent: Bingbot",
  "Allow: /",
  "",
  "User-agent: Applebot",
  "Allow: /",
  "",
  "User-agent: OAI-SearchBot",
  "Allow: /",
  "",
  "User-agent: ChatGPT-User",
  "Allow: /",
  "",
  "User-agent: GPTBot",
  "Allow: /",
  "",
  "User-agent: PerplexityBot",
  "Allow: /",
  "",
  "User-agent: ClaudeBot",
  "Allow: /",
  "",
  "User-agent: Claude-SearchBot",
  "Allow: /",
  "",
  `Sitemap: ${siteDomain}/sitemap.xml`,
  "",
].join("\n");

await assertFreshGeneratedOutput(issues);
compareSets("sitemap route set", expectedSitemapUrls, sitemapUrls, issues);

if (robotsTxt.replace(/\r\n/g, "\n") !== expectedRobotsTxt) {
  issues.push("robots.txt does not match the approved crawler policy");
}

if (!expectedSocialProfileUrls.length) {
  issues.push("seoConfig.socialLinks is empty");
}

compareSets(
  "seoConfig socialProfiles",
  expectedSocialProfileUrls,
  seoConfig.socialProfiles,
  issues
);

for (const link of seoConfig.socialLinks) {
  if (!llmsTxt.includes(`${link.label}: ${link.href}`)) {
    issues.push(`llms.txt missing public profile ${link.label}`);
  }
}

if (new Set(sitemapUrls).size !== sitemapUrls.length) {
  issues.push("sitemap contains duplicate URLs");
}

for (const sitemapUrl of sitemapUrls) {
  let parsed;
  try {
    parsed = new URL(sitemapUrl);
  } catch {
    issues.push(`sitemap URL is invalid XML URL text: ${sitemapUrl}`);
    continue;
  }

  if (parsed.protocol !== "https:" || parsed.origin !== siteDomain) {
    issues.push(`sitemap URL is not canonical production URL: ${sitemapUrl}`);
  }

  if (/localhost|vercel\.app/i.test(sitemapUrl)) {
    issues.push(`sitemap URL contains non-production host: ${sitemapUrl}`);
  }
}

const minimumWordsByPageType = {
  homepage: 900,
  pillar: 800,
  subpillar: 1300,
  commercial: 700,
  proof: 450,
  support: 650,
  conversion: 400,
};

for (const route of prerenderRoutes) {
  const html = await fs.readFile(routeOutputPath(route.path), "utf8");
  const pageText = visibleText(html);
  const canonical = extractFirst(
    html,
    /<link\s+rel="canonical"\s+href="([^"]+)"/i
  );
  const schemaText = extractFirst(
    html,
    /<script\s+type="application\/ld\+json"[^>]*data-prerender-schema[^>]*>(.*?)<\/script>/is
  );
  const graph = schemaText ? (JSON.parse(schemaText)["@graph"] ?? []) : [];
  const webPageNode = graphNodeOfType(graph, "WebPage");
  const articleNode = graph.find(
    node =>
      (nodeHasType(node, "Article") ||
        nodeHasType(node, "TechArticle") ||
        nodeHasType(node, "HowTo")) &&
      node["@id"] === `${buildCanonicalUrl(route.path)}#article`
  );
  const hrefs = extractHrefs(html, siteDomain);
  const topicalPage = topicalByPath.get(route.path);
  const industry = industryByPath.get(route.path);

  if (industry) {
    if (route.schemaKind !== "service") {
      issues.push(`${route.path}: industry route schemaKind must be service`);
    }

    const expectedServiceName = `${industry.name} AI Search Visibility`;
    if (route.serviceName !== expectedServiceName) {
      issues.push(
        `${route.path}: industry Service name should be ${expectedServiceName}`
      );
    }

    if (!route.faqItems?.length) {
      issues.push(`${route.path}: industry route is missing FAQ items`);
    } else {
      const faqQuestions = new Set(route.faqItems.map(faq => faq.question));
      for (const requiredQuestion of [
        `How do buyers compare ${industry.shortName} providers?`,
        `What objections should ${industry.shortName} pages answer?`,
      ]) {
        if (!faqQuestions.has(requiredQuestion)) {
          issues.push(
            `${route.path}: industry FAQ items missing ${requiredQuestion}`
          );
        }
      }
    }
  }

  for (const link of seoConfig.socialLinks) {
    if (!html.includes(`href="${link.href}"`)) {
      issues.push(`${route.path}: missing footer social href ${link.label}`);
    }
  }

  for (const entityType of ["Organization", "ProfessionalService"]) {
    const entityNode = graphNodeOfType(graph, entityType);
    if (!entityNode?.sameAs) {
      issues.push(`${route.path}: schema ${entityType} missing sameAs`);
      continue;
    }

    compareSets(
      `${route.path}: schema ${entityType} sameAs`,
      expectedSocialProfileUrls,
      entityNode.sameAs,
      issues
    );
  }

  if (canonical !== buildCanonicalUrl(route.path)) {
    issues.push(`${route.path}: canonical does not match final URL`);
  }

  const robots = metaContent(html, "name", "robots");
  if (!route.robots?.includes("noindex") && /noindex/i.test(robots)) {
    issues.push(`${route.path}: accidental noindex`);
  }

  for (const [label, value] of [
    ["og:url", metaContent(html, "property", "og:url")],
    ["og:image", metaContent(html, "property", "og:image")],
    ["twitter:image", metaContent(html, "name", "twitter:image")],
  ]) {
    if (!value.startsWith(siteDomain)) {
      issues.push(`${route.path}: ${label} is not on canonical domain`);
    }
  }

  if (route.type === "article") {
    if (!articleNode) {
      issues.push(`${route.path}: schema missing route article node`);
    } else if (isEditorialTrainingRoute(route)) {
      if (!nodeHasType(articleNode, "TechArticle")) {
        issues.push(`${route.path}: schema missing TechArticle type`);
      }
      if (!nodeHasType(articleNode, "HowTo")) {
        issues.push(`${route.path}: schema missing HowTo type`);
      }
      for (const dependency of [
        "Schema JSON-LD",
        "Vercel Analytics",
        "LLM Scraping Engines",
      ]) {
        if (!(articleNode.dependencies ?? []).includes(dependency)) {
          issues.push(
            `${route.path}: editorial schema missing dependency ${dependency}`
          );
        }
      }
      for (const proficiency of [
        "Generative Engine Optimization",
        "AI Search Engine Optimization",
      ]) {
        if (!(articleNode.proficiencies ?? []).includes(proficiency)) {
          issues.push(
            `${route.path}: editorial schema missing proficiency ${proficiency}`
          );
        }
      }
      if (!Array.isArray(articleNode.step) || !articleNode.step.length) {
        issues.push(`${route.path}: editorial schema missing HowTo steps`);
      }
    } else if (!nodeHasType(articleNode, "Article")) {
      issues.push(`${route.path}: schema missing Article`);
    }
  }

  if (topicalPage) {
    const minWords = minimumWordsByPageType[topicalPage.pageType] ?? 0;
    const words = wordCount(pageText);
    if (words < minWords) {
      issues.push(
        `${route.path}: ${topicalPage.pageType} page is thin (${words} words, expected at least ${minWords})`
      );
    }

    for (const relatedPath of topicalPage.relatedPaths) {
      if (!routeByPath.has(relatedPath)) continue;
      if (!hrefs.has(relatedPath)) {
        issues.push(
          `${route.path}: missing topical related href ${relatedPath}`
        );
      }
    }

    if (topicalPage.parentPath && !hrefs.has(topicalPage.parentPath)) {
      issues.push(
        `${route.path}: missing topical parent href ${topicalPage.parentPath}`
      );
    }
  }

  if (route.faqItems?.length) {
    const schemaQuestions = Array.isArray(webPageNode?.mainEntity)
      ? webPageNode.mainEntity.filter(item => item["@type"] === "Question")
      : [];
    const schemaQuestionByName = new Map(
      schemaQuestions.map(question => [question.name, question])
    );

    for (const faq of route.faqItems) {
      if (!pageText.includes(faq.question)) {
        issues.push(`${route.path}: FAQ question missing from visible text`);
      }
      if (!pageText.includes(faq.answer)) {
        issues.push(
          `${route.path}: FAQ answer missing from visible text for ${faq.question}`
        );
      }

      const schemaQuestion = schemaQuestionByName.get(faq.question);
      const schemaAnswer = schemaQuestion?.acceptedAnswer?.text;
      if (schemaAnswer !== faq.answer) {
        issues.push(
          `${route.path}: FAQ schema answer mismatch for ${faq.question}`
        );
      }
    }
  }
}

if (issues.length) {
  console.error("SEO guardrail check failed:");
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log(
  `SEO guardrail check passed for ${prerenderRoutes.length} routes and ${topicalPages.length} topical pages.`
);
