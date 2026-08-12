import type { MetadataRoute } from "next";
import { readdirSync } from "node:fs";
import path from "node:path";
import { connection } from "next/server";

const SITE_URL = "https://openlake.in";
const APP_DIR = path.join(process.cwd(), "app");
const EXCLUDED_PAGE_ROUTES = new Set(["/programs/edit"]);

function collectStaticRoutes(dir = APP_DIR, routeSegments: string[] = []): string[] {
  const entries = readdirSync(dir, { withFileTypes: true });
  const routes: string[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (entry.name === "api" || entry.name.startsWith("[") || entry.name.startsWith("(")) {
        continue;
      }

      routes.push(
        ...collectStaticRoutes(path.join(dir, entry.name), [...routeSegments, entry.name]),
      );
      continue;
    }

    if (entry.name !== "page.tsx") {
      continue;
    }

    const route = `/${routeSegments.join("/")}`.replace(/\/+/g, "/");
    if (!EXCLUDED_PAGE_ROUTES.has(route)) {
      routes.push(route === "" ? "/" : route);
    }
  }

  return routes;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await connection();

  const staticRoutes = collectStaticRoutes();

  return staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
  }));
}
