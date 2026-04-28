export const seoConfig = {
  brandName: "Civive Unlimited",
  canonicalDomain: "https://www.civiveunlimited.com",
  phone: "(417) 386-2441",
  phoneE164: "+14173862441",
  phoneHref: "tel:+14173862441",
  email: "ceo@civiveunlimited.com",
  location: {
    label: "Springfield, MO",
    locality: "Springfield",
    region: "MO",
    country: "US",
  },
  defaultDescription:
    "AI search visibility systems for local service businesses",
  defaultOgImagePath: "/og-image.jpg",
  defaultLogoPath: "/favicon.png",
  defaultRobots: "index, follow, max-image-preview:large",
  defaultLastModified: "2026-04-28",
  areaServed: "United States",
  socialProfiles: [] as string[],
  knowsAbout: [
    "AI search visibility",
    "answer engine optimization",
    "AI receptionist systems",
    "lead capture automation",
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
