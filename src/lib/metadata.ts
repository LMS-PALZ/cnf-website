import type { Metadata } from "next";
import { site } from "@/lib/site";

/** Page title only — root layout template appends `| ${site.name}`. */
export function pageMetadata(title: string, description: string): Metadata {
    return {
        title,
        description,
        openGraph: {
            title: `${title} | ${site.name}`,
            description,
            siteName: site.name,
            locale: "en_NG",
            type: "website",
        },
    };
}
