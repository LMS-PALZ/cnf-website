import type { MetadataRoute } from "next";
import { newsItems } from "@/data/news";
import { site } from "@/lib/site";
const staticRoutes = [
    "/",
    "/about",
    "/our-work",
    "/projects",
    "/programmes/skill-scale-up",
    "/news",
    "/donate",
    "/contact",
    "/get-involved/partnership",
    "/get-involved/volunteer",
    "/get-involved/careers",
    "/privacy",
];
export default function sitemap(): MetadataRoute.Sitemap {
    const base = site.url.replace(/\/$/, "");
    const entries: MetadataRoute.Sitemap = [
        ...staticRoutes.map((path) => ({
            url: `${base}${path}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: path === "/" ? 1 : 0.7,
        })),
        ...newsItems.map((item) => ({
            url: `${base}/news/${item.slug}`,
            lastModified: new Date(item.date),
            changeFrequency: "monthly" as const,
            priority: 0.5,
        })),
    ];
    return entries;
}
