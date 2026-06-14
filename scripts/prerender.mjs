import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const projectRoot = process.cwd();
const publicDir = path.join(projectRoot, "dist", "public");
const sourcePublicDir = path.join(projectRoot, "client", "public");
const ssrEntry = path.join(projectRoot, "dist", "ssr", "entry-server.js");
const templatePath = path.join(publicDir, "index.html");
const {
  buildAssetUrl,
  buildCanonicalUrl,
  render,
  prerenderRoutes,
  seoConfig,
  topicalPages,
  coreServices,
} = await import(pathToFileURL(ssrEntry));

const siteDomain = seoConfig.canonicalDomain;
const defaultImageUrl = buildAssetUrl(seoConfig.defaultOgImagePath);
const defaultLogoUrl = buildAssetUrl(seoConfig.defaultLogoPath);
const defaultEditorialDependencies = [
  "Schema JSON-LD",
  "Vercel Analytics",
  "LLM Scraping Engines",
];
const defaultEditorialProficiencies = [
  "Generative Engine Optimization",
  "AI Search Engine Optimization",
];

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
  return buildCanonicalUrl(routePath);
}

function stripBrand(title) {
  return title
    .replace(new RegExp(`\\s*\\|\\s*${seoConfig.brandName}\\s*$`, "i"), "")
    .trim();
}

function schemaSlug(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function isEditorialTrainingRoute(route) {
  return (
    route.path.startsWith("/resources/") ||
    route.path === "/build-in-public" ||
    route.path.startsWith("/build-in-public/")
  );
}

function buildHowToSteps(route) {
  return (route.articleSections ?? [])
    .filter(section => section.title || section.copy)
    .map((section, index) => {
      const directions = (section.bullets ?? []).filter(Boolean);
      const step = {
        "@type": "HowToStep",
        position: index + 1,
        name: section.title,
        text: [section.copy, ...directions].filter(Boolean).join(" "),
      };

      if (section.eyebrow) {
        step.alternateName = section.eyebrow;
      }

      if (directions.length) {
        step.itemListElement = directions.map((direction, directionIndex) => ({
          "@type": "HowToDirection",
          position: directionIndex + 1,
          text: direction,
        }));
      }

      return step;
    });
}

function buildEditorialTrainingFields(route) {
  const dependencies = route.dependencies?.length
    ? route.dependencies
    : defaultEditorialDependencies;
  const proficiencies = route.proficiencies?.length
    ? route.proficiencies
    : defaultEditorialProficiencies;
  const step = buildHowToSteps(route);

  return {
    dependencies,
    proficiencies,
    tool: dependencies.map(name => ({
      "@type": "HowToTool",
      name,
    })),
    about: proficiencies.map(name => ({
      "@type": "DefinedTerm",
      name,
    })),
    ...(step.length ? { step } : {}),
  };
}

function buildCoreServiceOfferCatalog(providerId, offerCatalogId) {
  return {
    "@type": "OfferCatalog",
    "@id": offerCatalogId,
    name: "Core Civive Unlimited services",
    itemListElement: coreServices.map((service, index) => ({
      "@type": "Offer",
      position: index + 1,
      url: absoluteUrl(service.path),
      itemOffered: {
        "@type": "Service",
        "@id": `${absoluteUrl(service.path)}#service-${schemaSlug(service.name)}`,
        name: service.name,
        description: service.description,
        serviceType: service.serviceType,
        provider: { "@id": providerId },
        areaServed: buildAreaServed(),
        audience: {
          "@type": "BusinessAudience",
          audienceType: "local service businesses",
        },
      },
    })),
  };
}

function buildPostalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: seoConfig.address.streetAddress,
    addressLocality: seoConfig.address.addressLocality,
    addressRegion: seoConfig.address.addressRegion,
    postalCode: seoConfig.address.postalCode,
    addressCountry: seoConfig.address.addressCountry,
  };
}

function buildAreaServed() {
  return seoConfig.areaServedPlaces;
}

function readableSegment(segment) {
  return segment
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
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
      name:
        index === segments.length - 1
          ? stripBrand(route.title)
          : readableSegment(segment),
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
    path.join(publicDir, `${cleanPath}.html`),
    path.join(publicDir, cleanPath, "index.html"),
  ];
}

function buildSchema(route) {
  const url = absoluteUrl(route.path);
  const organizationId = `${siteDomain}/#organization`;
  const localBusinessId = `${siteDomain}/#localbusiness`;
  const websiteId = `${siteDomain}/#website`;
  const offerCatalogId = `${siteDomain}/#core-services`;
  const webpageId = `${url}#webpage`;
  const breadcrumbId = `${url}#breadcrumb`;
  const serviceId = `${url}#service`;
  const articleId = `${url}#article`;
  const itemListId = `${url}#itemlist`;
  const homepageOfferCatalogRef =
    route.path === "/" ? { "@id": offerCatalogId } : undefined;
  const breadcrumbItems = buildBreadcrumbItems(route);
  const faqMainEntity = route.faqItems?.length
    ? route.faqItems.map(faq => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      }))
    : undefined;

  const webPage = {
    "@type": route.faqItems?.length ? ["WebPage", "FAQPage"] : "WebPage",
    "@id": webpageId,
    url,
    name: route.title,
    description: route.description,
    isPartOf: { "@id": websiteId },
    publisher: { "@id": organizationId },
    inLanguage: "en-US",
    dateModified: route.lastModified ?? seoConfig.defaultLastModified,
    primaryImageOfPage: defaultImageUrl,
  };

  if (breadcrumbItems.length) {
    webPage.breadcrumb = { "@id": breadcrumbId };
  }

  if (faqMainEntity) {
    webPage.mainEntity = faqMainEntity;
  }

  if (route.itemList?.length) {
    webPage.hasPart = { "@id": itemListId };
  }

  const graph = [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: seoConfig.brandName,
      legalName: seoConfig.legalName,
      url: siteDomain,
      email: seoConfig.email,
      telephone: seoConfig.phoneE164,
      image: defaultImageUrl,
      logo: defaultLogoUrl,
      address: buildPostalAddress(),
      description: seoConfig.businessDescription,
      founder: {
        "@type": "Person",
        name: seoConfig.founder,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: seoConfig.phoneE164,
        email: seoConfig.email,
        contactType: "sales",
        areaServed: buildAreaServed(),
        availableLanguage: "English",
      },
      ...(homepageOfferCatalogRef
        ? { hasOfferCatalog: homepageOfferCatalogRef }
        : {}),
      knowsAbout: seoConfig.knowsAbout,
      ...(seoConfig.socialProfiles.length
        ? { sameAs: seoConfig.socialProfiles }
        : {}),
    },
    {
      "@type": "ProfessionalService",
      "@id": localBusinessId,
      name: seoConfig.brandName,
      image: defaultImageUrl,
      logo: defaultLogoUrl,
      url: siteDomain,
      telephone: seoConfig.phoneE164,
      email: seoConfig.email,
      address: buildPostalAddress(),
      areaServed: buildAreaServed(),
      priceRange: seoConfig.priceRange,
      description: seoConfig.businessDescription,
      parentOrganization: { "@id": organizationId },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: seoConfig.phoneE164,
        email: seoConfig.email,
        contactType: "sales",
        areaServed: buildAreaServed(),
        availableLanguage: "English",
      },
      ...(homepageOfferCatalogRef
        ? { hasOfferCatalog: homepageOfferCatalogRef }
        : {}),
      ...(seoConfig.socialProfiles.length
        ? { sameAs: seoConfig.socialProfiles }
        : {}),
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteDomain,
      name: seoConfig.brandName,
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

  if (route.itemList?.length) {
    graph.push({
      "@type": "ItemList",
      "@id": itemListId,
      name: `${stripBrand(route.title)} list`,
      numberOfItems: route.itemList.length,
      itemListOrder: "https://schema.org/ItemListUnordered",
      itemListElement: route.itemList.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        description: item.description,
        url: absoluteUrl(item.path),
      })),
    });
  }

  if (route.path === "/") {
    graph.push(buildCoreServiceOfferCatalog(localBusinessId, offerCatalogId));

    graph.push(
      ...coreServices.map(service => ({
        "@type": "Service",
        "@id": `${absoluteUrl(service.path)}#service-${schemaSlug(service.name)}`,
        name: service.name,
        description: service.description,
        provider: { "@id": localBusinessId },
        areaServed: buildAreaServed(),
        serviceType: service.serviceType,
        url: absoluteUrl(service.path),
        audience: {
          "@type": "BusinessAudience",
          audienceType: "local service businesses",
        },
      }))
    );
  }

  if (route.schemaKind === "service" && route.serviceName) {
    const serviceSchema = {
      "@type": "Service",
      "@id": serviceId,
      name: route.serviceName,
      description: route.description,
      provider: { "@id": localBusinessId },
      areaServed: buildAreaServed(),
      serviceType: route.serviceType ?? route.serviceName,
      audience: {
        "@type": "BusinessAudience",
        audienceType: "local service businesses",
      },
      mainEntityOfPage: { "@id": webpageId },
    };

    if (route.offerCatalog?.length) {
      serviceSchema.hasOfferCatalog = {
        "@type": "OfferCatalog",
        name: `${route.serviceName} offers`,
        itemListElement: route.offerCatalog.map((offer, index) => ({
          "@type": "Offer",
          position: index + 1,
          name: offer.name,
          price: offer.price,
          priceCurrency: offer.priceCurrency || "USD",
          url: offer.url,
          availability: "https://schema.org/InStock",
          itemOffered: {
            "@type": "Service",
            name: offer.name,
            description: offer.description,
            provider: { "@id": localBusinessId },
          },
        })),
      };
    }

    graph.push(serviceSchema);
  }

  if (route.schemaKind === "article") {
    if (faqMainEntity) {
      webPage.hasPart = { "@id": articleId };
    } else {
      webPage.mainEntity = { "@id": articleId };
    }

    const isEditorialTrainingArticle = isEditorialTrainingRoute(route);
    const articleSchema = {
      "@type": isEditorialTrainingArticle
        ? ["TechArticle", "HowTo"]
        : "Article",
      "@id": articleId,
      headline: stripBrand(route.title),
      description: route.description,
      image: defaultImageUrl,
      author: { "@id": organizationId },
      publisher: { "@id": organizationId },
      mainEntityOfPage: { "@id": webpageId },
      datePublished:
        route.datePublished ??
        route.lastModified ??
        seoConfig.defaultLastModified,
      dateModified: route.lastModified ?? seoConfig.defaultLastModified,
      inLanguage: "en-US",
    };

    if (isEditorialTrainingArticle) {
      Object.assign(articleSchema, buildEditorialTrainingFields(route));
    }

    graph.push(articleSchema);
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

function buildManagedHead(route) {
  const url = absoluteUrl(route.path);
  const imageUrl = buildAssetUrl(
    route.imagePath ?? seoConfig.defaultOgImagePath
  );
  const schema = JSON.stringify(buildSchema(route)).replaceAll(
    "</script",
    "<\\/script"
  );

  return [
    `    <title>${escapeHtml(route.title)}</title>`,
    `    <meta name="description" content="${escapeHtml(route.description)}" />`,
    `    <meta name="robots" content="${escapeHtml(route.robots ?? seoConfig.defaultRobots)}" />`,
    `    <link rel="canonical" href="${escapeHtml(url)}" />`,
    `    <meta property="og:title" content="${escapeHtml(route.title)}" />`,
    `    <meta property="og:description" content="${escapeHtml(route.description)}" />`,
    `    <meta property="og:type" content="${route.type === "article" ? "article" : "website"}" />`,
    `    <meta property="og:url" content="${escapeHtml(url)}" />`,
    `    <meta property="og:site_name" content="${escapeHtml(seoConfig.brandName)}" />`,
    `    <meta property="og:image" content="${imageUrl}" />`,
    '    <meta name="twitter:card" content="summary_large_image" />',
    `    <meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
    `    <meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
    `    <meta name="twitter:image" content="${imageUrl}" />`,
    `    <script type="application/ld+json" data-prerender-schema>${schema}</script>`,
  ].join("\n");
}

function injectHead(template, route) {
  const cleaned = managedHeadPatterns.reduce(
    (html, pattern) => html.replace(pattern, ""),
    template
  );
  return cleaned.replace("</head>", `${buildManagedHead(route)}\n  </head>`);
}

function extractReactResourceHints(appHtml) {
  const resourceHints = [];
  const cleanedHtml = appHtml.replace(
    /<link\s+rel="preload"\s+as="image"[^>]*>/gi,
    match => {
      resourceHints.push(match);
      return "";
    }
  );

  return {
    appHtml: cleanedHtml,
    resourceHints: [...new Set(resourceHints)],
  };
}

function injectApp(template, renderedHtml) {
  const { appHtml, resourceHints } = extractReactResourceHints(renderedHtml);
  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  if (!resourceHints.length) {
    return html;
  }

  return html.replace(
    "</head>",
    `${resourceHints.map(hint => `    ${hint}`).join("\n")}\n  </head>`
  );
}

function sitemapPriority(route) {
  if (route.path === "/") return "1.0";
  if (route.path === "/ai-search-report") return "0.9";
  if (route.path.startsWith("/services/")) return "0.82";
  if (route.path === "/service-areas/springfield-mo") return "0.86";
  if (
    [
      "/visibility-system",
      "/civive-os",
      "/civive-os-offer",
      "/industries",
    ].includes(route.path)
  )
    return "0.85";
  if (route.path.startsWith("/industries/")) return "0.7";
  if (["/privacy", "/terms"].includes(route.path)) return "0.3";
  return "0.75";
}

function sitemapChangefreq(route) {
  if (
    route.path.startsWith("/industries/") ||
    route.path.startsWith("/services/") ||
    ["/contact", "/ai-receptionist", "/service-areas/springfield-mo"].includes(
      route.path
    )
  ) {
    return "monthly";
  }
  if (["/privacy", "/terms"].includes(route.path)) {
    return "yearly";
  }
  return "weekly";
}

async function writeCrawlFiles(routes) {
  const indexableRoutes = routes.filter(
    route => !route.robots?.toLowerCase().includes("noindex")
  );
  const llmsPages = topicalPages.filter(page => page.includeInLlms !== false);
  const publicProfileLines = seoConfig.socialLinks?.length
    ? [
        "Public profiles:",
        ...seoConfig.socialLinks.map(link => `${link.label}: ${link.href}`),
        "",
      ]
    : [];
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...indexableRoutes.map(route =>
      [
        "  <url>",
        `    <loc>${escapeHtml(absoluteUrl(route.path))}</loc>`,
        `    <lastmod>${route.lastModified ?? seoConfig.defaultLastModified}</lastmod>`,
        `    <changefreq>${sitemapChangefreq(route)}</changefreq>`,
        `    <priority>${sitemapPriority(route)}</priority>`,
        "  </url>",
      ].join("\n")
    ),
    "</urlset>",
    "",
  ].join("\n");

  const robots = [
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

  const llms = [
    "# Civive Unlimited",
    "",
    `> ${seoConfig.defaultDescription.replace(/\.+$/, ".")}`,
    "",
    `Website: ${siteDomain}`,
    `Canonical domain: ${siteDomain}`,
    `Business: ${seoConfig.brandName}`,
    `Location: ${seoConfig.location.label}`,
    "",
    "NAP:",
    seoConfig.brandName,
    seoConfig.address.streetAddress,
    `${seoConfig.address.addressLocality}, ${seoConfig.address.addressRegion} ${seoConfig.address.postalCode}`,
    `Phone: ${seoConfig.phone}`,
    `Email: ${seoConfig.email}`,
    `Website: ${siteDomain}`,
    `Area served: ${seoConfig.areaServed}`,
    `Last updated: ${seoConfig.defaultLastModified}`,
    "",
    ...publicProfileLines,
    "## What Civive Does",
    "",
    "Civive Unlimited helps local service businesses become easier for Google, AI search engines, answer engines, and buyers to understand, trust, contact, and follow up with.",
    "",
    "Primary offer: Visibility Report.",
    "Secondary systems: AI search visibility cleanup, service and location signal cleanup, AI receptionist, lead capture, booking, CRM handoff, follow-up automation, and CiviveOS.",
    "Target audience: local service businesses, especially companies that need clearer public facts, stronger lead capture, faster follow-up, and cleaner booking paths.",
    "Core frameworks: AI Search Visibility, Generative Engine Optimization (GEO), Lead Recovery Systems, entity and NAP cleanup, schema, Google Business Profile clarity, service-area signal cleanup, and CiviveOS lead-response operations.",
    "",
    "## Best Pages To Understand The Offer",
    "",
    ...llmsPages.map(page =>
      [
        `- ${page.title}: ${absoluteUrl(page.path)}`,
        `  - Page type: ${page.pageType}`,
        `  - Search intent: ${page.searchIntent}`,
        `  - Topical role: ${page.topicalRole}`,
        `  - Conversion goal: ${page.conversionGoal}`,
      ].join("\n")
    ),
    "",
    "## Crawling And Citation Guidance",
    "",
    "- Prefer the canonical www URLs listed above.",
    "- Use the homepage for brand/entity context.",
    "- Use /ai-search-report for the primary commercial offer.",
    "- Use /visibility-system for the implementation framework.",
    "- Use /industries and industry subpages for vertical-specific AI search visibility context.",
    "- Use /resources and /build-in-public for educational and proof-of-work context.",
    "- Do not infer fake reviews, awards, clients, ratings, case studies, or locations that are not visible on the site.",
    "",
  ].join("\n");

  for (const targetDir of [publicDir, sourcePublicDir]) {
    await fs.writeFile(path.join(targetDir, "sitemap.xml"), sitemap);
    await fs.writeFile(path.join(targetDir, "robots.txt"), robots);
    await fs.writeFile(path.join(targetDir, "llms.txt"), llms);
  }
}

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
