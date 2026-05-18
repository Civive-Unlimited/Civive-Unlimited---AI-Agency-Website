export const seoConfig = {
  brandName: "Civive Unlimited",
  legalName: "Civive Unlimited",
  canonicalDomain: "https://www.civiveunlimited.com",
  website: "https://www.civiveunlimited.com",
  phone: "(417) 386-2441",
  phoneE164: "+14173862441",
  phoneHref: "tel:+14173862441",
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
    "Civive Unlimited helps local service businesses improve AI search visibility, Google Business Profile clarity, websites, CRM automation, missed-call recovery, AI receptionist setup, review automation, and lead follow-up systems.",
  defaultOgImagePath: "/og-image.jpg",
  defaultLogoPath: "/favicon.png",
  defaultRobots: "index, follow, max-image-preview:large",
  defaultLastModified: "2026-04-29",
  areaServed: "Springfield, MO and Missouri service businesses",
  areaServedPlaces: ["Springfield, MO", "Missouri", "Local service businesses"],
  priceRange: "$$",
  socialProfiles: [] as string[],
  knowsAbout: [
    "AI search visibility",
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
