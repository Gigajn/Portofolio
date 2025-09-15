import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const base: MetadataRoute.Sitemap = [
    { url: `${site}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${site}/#projects`, lastModified: new Date() },
    { url: `${site}/#focus`, lastModified: new Date() },
    { url: `${site}/#about`, lastModified: new Date() },
    { url: `${site}/#contact`, lastModified: new Date() },
  ];

  const proj = projects.map((p) => ({
    url: `${site}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...base, ...proj];
}
