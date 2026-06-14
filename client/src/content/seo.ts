export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/scottberryciviveunlimited/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/civiveunlimited/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/scottberry702",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@ScottBerry702",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@civive_unlimited",
  },
  {
    label: "Reddit",
    href: "https://www.reddit.com/user/civive-unltd/",
  },
  {
    label: "X",
    href: "https://x.com/civiveunltd",
  },
  {
    label: "GitHub",
    href: "https://github.com/CIVIVEUNLTD",
  },
] as const;

export const seoConfig = {
  brandName: "Civive Unlimited",
  legalName: "Civive Unlimited",
  canonicalDomain: "https://www.civiveunlimited.com",
  website: "https://www.civiveunlimited.com",
  phone: "(417) 952-6435",
  phoneE164: "+14179526435",
  phoneHref: "tel:+14179526435",
  email: "ceo@civiveunlimited.com",
  founder: "Scott Berry",
  address: {
    streetAddress: "1214 N Robberson Ave",
    addressLocality: "Springfield",
    addressRegion: "MO",
    postalCode: "65802",
    addressCountry: "US",
    lines: ["1214 N Robberson Ave", "Springfield, MO 65802"],
    display: "1214 N Robberson Ave, Springfield, MO 65802",
  },
  location: {
    label: "Springfield, MO",
    locality: "Springfield",
    region: "MO",
    postalCode: "65802",
    country: "US",
  },
  defaultDescription:
    "Civive Unlimited helps local service businesses improve AI search visibility, Google Business Profile clarity, websites, CRM automation, missed-call recovery, AI receptionist setup, reviews, and lead follow-up.",
  businessDescription:
    "Civive Unlimited helps local service businesses improve AI Search Visibility, Generative Engine Optimization (GEO), Lead Recovery Systems, entity and NAP cleanup, schema, Google Business Profile clarity, service-area signal cleanup, websites, CRM automation, missed-call recovery, AI receptionist setup, review automation, and lead follow-up systems.",
  defaultOgImagePath: "/og-image.jpg",
  defaultLogoPath: "/favicon.png",
  defaultRobots: "index, follow, max-image-preview:large",
  defaultLastModified: "2026-04-29",
  areaServed: "Springfield, MO and Missouri service businesses",
  areaServedPlaces: ["Springfield, MO", "Missouri", "Local service businesses"],
  priceRange: "$$",
  socialLinks,
  socialProfiles: socialLinks.map(link => link.href),
  knowsAbout: [
    "AI Search Visibility",
    "Generative Engine Optimization",
    "AI search optimization",
    "Lead Recovery Systems",
    "answer engine optimization",
    "Google Business Profile optimization",
    "local SEO cleanup",
    "AI receptionist systems",
    "missed-call recovery",
    "lead capture automation",
    "CRM automation",
    "review automation",
    "schema markup",
    "local service business growth systems",
  ],
};

export function buildCanonicalUrl(routePath = "/") {
  if (/^https?:\/\//i.test(routePath)) {
    return routePath.replace(
      /^https:\/\/civiveunlimited\.com/i,
      seoConfig.canonicalDomain
    );
  }

  const normalizedPath =
    routePath === "/"
      ? ""
      : routePath.startsWith("/")
        ? routePath
        : `/${routePath}`;
  return `${seoConfig.canonicalDomain}${normalizedPath}`;
}

export function buildAssetUrl(assetPath: string) {
  if (/^https?:\/\//i.test(assetPath)) {
    return assetPath.replace(
      /^https:\/\/civiveunlimited\.com/i,
      seoConfig.canonicalDomain
    );
  }

  return buildCanonicalUrl(
    assetPath.startsWith("/") ? assetPath : `/${assetPath}`
  );
}
