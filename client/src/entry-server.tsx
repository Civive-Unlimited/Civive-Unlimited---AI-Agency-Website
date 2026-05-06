import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";
import { prerenderRoutes } from "./prerender-routes";

export { prerenderRoutes };

export function render(path: string) {
  return new Promise<string>((resolve, reject) => {
    let html = "";
    const stream = new PassThrough();

    stream.on("data", (chunk) => {
      html += chunk.toString();
    });
    stream.on("end", () => resolve(html));
    stream.on("error", reject);

    const { pipe } = renderToPipeableStream(
      <Router ssrPath={path}>
        <App />
      </Router>,
      {
        onAllReady() {
          pipe(stream);
        },
        onError(error) {
          reject(error);
        },
      },
    );
  });
}
