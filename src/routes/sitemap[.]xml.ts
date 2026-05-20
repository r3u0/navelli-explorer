import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { stops } from "@/data/stops";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = ["/", "/tour", "/stops", "/map", "/events", "/food", "/hospitality", "/getting-here"];
        const stopPaths = stops.map((s) => `/stop/${s.id}`);
        const all = [...staticPaths, ...stopPaths];
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...all.map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`),
          `</urlset>`,
        ].join("\n");
        return new Response(xml, { headers: { "Content-Type": "application/xml" } });
      },
    },
  },
});
