import type { Metadata } from "next";
import { site } from "@/lib/site";
export function pageMetadata(title: string, description: string): Metadata {
    return {
        title: `${title} | ${site.name}`,
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
