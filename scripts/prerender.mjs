import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const projectRoot = process.cwd();
const publicDir = path.join(projectRoot, "dist", "public");
const ssrEntry = path.join(projectRoot, "dist", "ssr", "entry-server.js");
const templatePath = path.join(publicDir, "index.html");
const siteDomain = "https://www.civiveunlimited.com";
const sitePhoneE164 = "+14173862441";
const defaultImageUrl = `${siteDomain}/og-image.jpg`;
const defaultLastModified = "2026-04-20";

const managedHeadPatterns = [
  /<title>.*?<\/title>\s*/is,
  /<meta\s+name="description"[^>]*>\s*/gi,
  /<meta\s+name="keywords"[^>]*>\s*/gi,
  /<meta\s+name="robots"[^>]*>\s*/gi,
  /<meta\s+property="og:title"[^>]*>\s*/gi,
  /<meta\s+property="og:description"[^>]*>\s*/gi,
  /<meta\s+property="og:type"[^>]*>\s*/gi,
  /<meta\s+property="og:url"[^>]*>\s*/gi,
  /<meta\s+property="og:image"[^>]*>\s*/gi,
  /<meta\s+property="og:site_name"[^>]*>\s*/gi,
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

function stripBrand(title) {
  return title.replace(/\s*\|\s*Civive Unlimited\s*$/i, "").trim();
}

function readableSegment(segment) {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function buildBreadcrumbItems(route) {
  if (route.path === "/") {
    return [];
  }

  const segments = route.path.replace(/^\//, "").split("/");
  const items = [{ name: "Home", item: siteDomain }];
  let currentPath = "";

  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    items.push({
      name: index === segments.length - 1 ? stripBrand(route.title) : readableSegment(segment),
      item: absoluteUrl(currentPath),
    });
  });

  return items;
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
  const breadcrumbId = `${url}#breadcrumb`;
  const serviceId = `${url}#service`;
  const articleId = `${url}#article`;
  const breadcrumbItems = buildBreadcrumbItems(route);
  const faqMainEntity = route.faqItems?.length
    ? route.faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      }))
    : undefined;

  const webPage = {
    "@type": route.schemaKind === "faq" ? "FAQPage" : "WebPage",
    "@id": webpageId,
    url,
    name: route.title,
    description: route.description,
    isPartOf: { "@id": websiteId },
    publisher: { "@id": organizationId },
    inLanguage: "en-US",
    dateModified: defaultLastModified,
    primaryImageOfPage: defaultImageUrl,
  };

  if (breadcrumbItems.length) {
    webPage.breadcrumb = { "@id": breadcrumbId };
  }

  if (faqMainEntity) {
    webPage.mainEntity = faqMainEntity;
  }

  const graph = [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": organizationId,
      name: "Civive Unlimited",
      url: siteDomain,
      email: "ceo@civiveunlimited.com",
      telephone: sitePhoneE164,
      image: defaultImageUrl,
      logo: defaultImageUrl,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Springfield",
        addressRegion: "MO",
        addressCountry: "US",
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+14173862441",
        email: "ceo@civiveunlimited.com",
        contactType: "sales",
        areaServed: "US",
        availableLanguage: "English",
      },
      knowsAbout: [
        "AI search visibility",
        "answer engine optimization",
        "AI receptionist systems",
        "lead capture automation",
        "schema markup",
        "local service business growth systems",
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteDomain,
      name: "Civive Unlimited",
      publisher: { "@id": organizationId },
      inLanguage: "en-US",
    },
    webPage,
  ];

  if (breadcrumbItems.length) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.item,
      })),
    });
  }

  if ((route.schemaKind === "service" || route.schemaKind === "industry") && route.serviceName) {
    graph.push({
      "@type": "Service",
      "@id": serviceId,
      name: route.serviceName,
      description: route.description,
      provider: { "@id": organizationId },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "United States",
      },
      serviceType: route.serviceName,
      audience: {
        "@type": "BusinessAudience",
        audienceType: "local service businesses",
      },
      mainEntityOfPage: { "@id": webpageId },
    });
  }

  if (route.type === "article") {
    webPage.mainEntity = { "@id": articleId };
    graph.push({
      "@type": "Article",
      "@id": articleId,
      headline: stripBrand(route.title),
      description: route.description,
      image: defaultImageUrl,
      author: { "@id": organizationId },
      publisher: { "@id": organizationId },
      mainEntityOfPage: { "@id": webpageId },
      datePublished: "2026-04-17",
      dateModified: defaultLastModified,
      inLanguage: "en-US",
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
    '    <meta name="robots" content="index, follow, max-image-preview:large" />',
    `    <link rel="canonical" href="${escapeHtml(url)}" />`,
    `    <meta property="og:title" content="${escapeHtml(route.title)}" />`,
    `    <meta property="og:description" content="${escapeHtml(route.description)}" />`,
    `    <meta property="og:type" content="${route.type === "article" ? "article" : "website"}" />`,
    `    <meta property="og:url" content="${escapeHtml(url)}" />`,
    '    <meta property="og:site_name" content="Civive Unlimited" />',
    `    <meta property="og:image" content="${defaultImageUrl}" />`,
    '    <meta name="twitter:card" content="summary_large_image" />',
    `    <meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
    `    <meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
    `    <meta name="twitter:image" content="${defaultImageUrl}" />`,
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

function sitemapPriority(route) {
  if (route.path === "/") return "1.0";
  if (route.path === "/ai-search-audit") return "0.9";
  if (["/visibility-system", "/civive-os", "/civive-os-offer", "/industries"].includes(route.path)) return "0.85";
  if (route.path.startsWith("/industries/")) return "0.7";
  if (["/privacy", "/terms"].includes(route.path)) return "0.3";
  return "0.75";
}

function sitemapChangefreq(route) {
  if (route.path.startsWith("/industries/") || ["/contact", "/ai-receptionist"].includes(route.path)) {
    return "monthly";
  }
  if (["/privacy", "/terms"].includes(route.path)) {
    return "yearly";
  }
  return "weekly";
}

async function writeCrawlFiles(routes) {
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...routes.map((route) =>
      [
        "  <url>",
        `    <loc>${escapeHtml(absoluteUrl(route.path))}</loc>`,
        `    <lastmod>${defaultLastModified}</lastmod>`,
        `    <changefreq>${sitemapChangefreq(route)}</changefreq>`,
        `    <priority>${sitemapPriority(route)}</priority>`,
        "  </url>",
      ].join("\n"),
    ),
    "</urlset>",
    "",
  ].join("\n");

  const robots = ["User-agent: *", "Allow: /", "", `Sitemap: ${siteDomain}/sitemap.xml`, ""].join("\n");

  await fs.writeFile(path.join(publicDir, "sitemap.xml"), sitemap);
  await fs.writeFile(path.join(publicDir, "robots.txt"), robots);
}

const { render, prerenderRoutes } = await import(pathToFileURL(ssrEntry));
const template = await fs.readFile(templatePath, "utf8");

for (const route of prerenderRoutes) {
  const html = injectApp(injectHead(template, route), await render(route.path));

  for (const outputPath of routeOutputPaths(route.path)) {
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, html);
  }

  console.log(`prerendered ${route.path}`);
}

await writeCrawlFiles(prerenderRoutes);
