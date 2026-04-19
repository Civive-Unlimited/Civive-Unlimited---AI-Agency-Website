import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";
import { prerenderRoutes } from "./prerender-routes";

export { prerenderRoutes };

export function render(path: string) {
  return renderToString(
    <Router ssrPath={path}>
      <App />
    </Router>,
  );
}
