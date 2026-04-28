import { useEffect } from "react";
import { buildAssetUrl, buildCanonicalUrl, seoConfig } from "@/content/seo";

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
  imagePath?: string;
  robots?: string;
};

function upsertMeta(
  selector: string,
  create: () => HTMLMetaElement,
  value: string
) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = create();
    document.head.appendChild(element);
  }

  element.setAttribute("content", value);
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(
    `link[rel="${rel}"]`
  );

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

export default function Seo({
  title = `${seoConfig.brandName} | AI Search Visibility`,
  description = seoConfig.defaultDescription,
  path = "/",
  type = "website",
  imagePath = seoConfig.defaultOgImagePath,
  robots = seoConfig.defaultRobots,
}: SeoProps) {
  useEffect(() => {
    const canonicalUrl = buildCanonicalUrl(path);
    const imageUrl = buildAssetUrl(imagePath);

    document.title = title;
    upsertMeta(
      'meta[name="description"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        return meta;
      },
      description
    );
    upsertMeta(
      'meta[property="og:title"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:title");
        return meta;
      },
      title
    );
    upsertMeta(
      'meta[property="og:description"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:description");
        return meta;
      },
      description
    );
    upsertMeta(
      'meta[property="og:type"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:type");
        return meta;
      },
      type
    );
    upsertMeta(
      'meta[property="og:site_name"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:site_name");
        return meta;
      },
      seoConfig.brandName
    );
    upsertMeta(
      'meta[property="og:url"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:url");
        return meta;
      },
      canonicalUrl
    );
    upsertMeta(
      'meta[property="og:image"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:image");
        return meta;
      },
      imageUrl
    );
    upsertMeta(
      'meta[name="twitter:card"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("name", "twitter:card");
        return meta;
      },
      "summary_large_image"
    );
    upsertMeta(
      'meta[name="twitter:title"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("name", "twitter:title");
        return meta;
      },
      title
    );
    upsertMeta(
      'meta[name="twitter:description"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("name", "twitter:description");
        return meta;
      },
      description
    );
    upsertMeta(
      'meta[name="twitter:image"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("name", "twitter:image");
        return meta;
      },
      imageUrl
    );
    upsertMeta(
      'meta[name="robots"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("name", "robots");
        return meta;
      },
      robots
    );
    upsertLink("canonical", canonicalUrl);
  }, [description, imagePath, path, robots, title, type]);

  return null;
}
