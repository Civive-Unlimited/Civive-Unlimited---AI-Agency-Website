import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";
import { prerenderRoutes } from "./prerender-routes";

export { buildAssetUrl, buildCanonicalUrl, seoConfig } from "./content/seo";
export {
  coreServices,
  industries,
  relatedIndustrySlugsBySlug,
  servicePages,
} from "./content/site";
export { topicalPages } from "./content/topical-map";
export { prerenderRoutes };

export function render(path: string) {
  return renderToString(
    <Router ssrPath={path}>
      <App />
    </Router>
  );
}
