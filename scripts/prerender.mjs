import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const projectRoot = process.cwd();
const publicDir = path.join(projectRoot, "dist", "public");
const ssrEntry = path.join(projectRoot, "dist", "ssr", "entry-server.js");
const templatePath = path.join(publicDir, "index.html");
const siteDomain = "https://www.civiveunlimited.com";

const managedHeadPatterns = [
  /<title>.*?<\/title>\s*/is,
  /<meta\s+name="description"[^>]*>\s*/gi,
  /<meta\s+name="keywords"[^>]*>\s*/gi,
  /<meta\s+property="og:title"[^>]*>\s*/gi,
  /<meta\s+property="og:description"[^>]*>\s*/gi,
  /<meta\s+property="og:type"[^>]*>\s*/gi,
  /<meta\s+property="og:url"[^>]*>\s*/gi,
  /<meta\s+property="og:image"[^>]*>\s*/gi,
  /<meta\s+name="twitter:card"[^>]*>\s*/gi,
  /<meta\s+name="twitter:title"[^>]*>\s*/gi,
  /<meta\s+name="twitter:description"[^>]*>\s*/gi,
  /<meta\s+name="twitter:image"[^>]*>\s*/gi,
  /<link\s+rel="canonical"[^>]*>\s*/gi,
  /<script\s+type="application\/ld\+json"[^>]*data-prerender-schema[^>]*>.*?<\/script>\s*/gis,
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function absoluteUrl(routePath) {
  return `${siteDomain}${routePath === "/" ? "" : routePath}`;
}

function routeOutputPaths(routePath) {
  if (routePath === "/") {
    return [path.join(publicDir, "index.html")];
  }

  const cleanPath = routePath.replace(/^\//, "");
  return [
    path.join(publicDir, cleanPath, "index.html"),
    path.join(publicDir, `${cleanPath}.html`),
  ];
}

function buildSchema(route) {
  const url = absoluteUrl(route.path);
  const organizationId = `${siteDomain}/#organization`;
  const websiteId = `${siteDomain}/#website`;
  const webpageId = `${url}#webpage`;

  const graph = [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "Civive Unlimited",
      url: siteDomain,
      email: "ceo@civiveunlimited.com",
      telephone: "+14177385126",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Springfield",
        addressRegion: "MO",
        addressCountry: "US",
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteDomain,
      name: "Civive Unlimited",
      publisher: { "@id": organizationId },
      inLanguage: "en-US",
    },
    {
      "@type": route.schemaKind === "faq" ? "FAQPage" : "WebPage",
      "@id": webpageId,
      url,
      name: route.title,
      description: route.description,
      isPartOf: { "@id": websiteId },
      publisher: { "@id": organizationId },
      inLanguage: "en-US",
    },
  ];

  if (route.schemaKind === "faq" && route.faqItems?.length) {
    graph[2].mainEntity = route.faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    }));
  }

  if ((route.schemaKind === "service" || route.schemaKind === "industry") && route.serviceName) {
    graph.push({
      "@type": "Service",
      "@id": `${url}#service`,
      name: route.serviceName,
      description: route.description,
      provider: { "@id": organizationId },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "United States",
      },
      serviceType: route.serviceName,
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

function buildManagedHead(route) {
  const url = absoluteUrl(route.path);
  const schema = JSON.stringify(buildSchema(route)).replaceAll("</script", "<\\/script");

  return [
    `    <title>${escapeHtml(route.title)}</title>`,
    `    <meta name="description" content="${escapeHtml(route.description)}" />`,
    '    <meta name="keywords" content="AI search visibility, AI Search Readiness Audit, ChatGPT business recommendations, answer engine optimization, Google Business Profile alignment, FAQ schema, LocalBusiness schema, service business marketing" />',
    `    <link rel="canonical" href="${escapeHtml(url)}" />`,
    `    <meta property="og:title" content="${escapeHtml(route.title)}" />`,
    `    <meta property="og:description" content="${escapeHtml(route.description)}" />`,
    `    <meta property="og:type" content="${route.type === "article" ? "article" : "website"}" />`,
    `    <meta property="og:url" content="${escapeHtml(url)}" />`,
    '    <meta property="og:image" content="/og-image.jpg" />',
    '    <meta name="twitter:card" content="summary_large_image" />',
    `    <meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
    `    <meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
    '    <meta name="twitter:image" content="/og-image.jpg" />',
    `    <script type="application/ld+json" data-prerender-schema>${schema}</script>`,
  ].join("\n");
}

function injectHead(template, route) {
  const cleaned = managedHeadPatterns.reduce((html, pattern) => html.replace(pattern, ""), template);
  return cleaned.replace("</head>", `${buildManagedHead(route)}\n  </head>`);
}

function injectApp(template, appHtml) {
  return template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
}

const { render, prerenderRoutes } = await import(pathToFileURL(ssrEntry));
const template = await fs.readFile(templatePath, "utf8");

for (const route of prerenderRoutes) {
  const html = injectApp(injectHead(template, route), render(route.path));

  for (const outputPath of routeOutputPaths(route.path)) {
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, html);
  }

  console.log(`prerendered ${route.path}`);
}
