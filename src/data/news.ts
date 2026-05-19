import newsData from "./news.json";

export type NewsCategory =
    | "skill-development"
    | "education"
    | "humanitarian-aid"
    | "healthcare";

export type NewsFilterId = "all" | NewsCategory;

export type NewsItem = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    tag: string;
    category: NewsCategory;
    ribbon: string;
    detailSubtitle?: string;
    featured?: boolean;
    photoLabel?: string;
    imageSrc?: string;
    imageAlt?: string;
    body: string;
};

export const newsItems = newsData.items as NewsItem[];

export const newsFilterOptions: {
    id: NewsFilterId;
    label: string;
}[] = [
    { id: "all", label: "All" },
    { id: "skill-development", label: "Skill Development" },
    { id: "education", label: "Education" },
    { id: "humanitarian-aid", label: "Humanitarian Aid" },
    { id: "healthcare", label: "Healthcare" },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
    return newsItems.find((n) => n.slug === slug);
}

/** Related stories: same category first, then most recent others. */
export function getRelatedNews(slug: string, limit = 3): NewsItem[] {
    const current = getNewsBySlug(slug);
    if (!current) {
        return [];
    }

    const others = newsItems.filter((n) => n.slug !== slug);
    const sameCategory = others
        .filter((n) => n.category === current.category)
        .sort((a, b) => b.date.localeCompare(a.date));
    const rest = others
        .filter((n) => n.category !== current.category)
        .sort((a, b) => b.date.localeCompare(a.date));

    return [...sameCategory, ...rest].slice(0, limit);
}

export function parseNewsBody(body: string): string[] {
    return body.split("\n\n").map((p) => p.trim()).filter(Boolean);
}
