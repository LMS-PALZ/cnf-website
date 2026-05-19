import { notFound } from "next/navigation";
import { NewsArticleView } from "@/components/news/NewsArticleView";
import { getNewsBySlug, newsItems } from "@/data/news";
import { pageMetadata } from "@/lib/metadata";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return newsItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const item = getNewsBySlug(slug);
    if (!item) {
        return {};
    }
    return pageMetadata(item.title, item.excerpt);
}

export default async function NewsArticlePage({ params }: Props) {
    const { slug } = await params;
    const item = getNewsBySlug(slug);
    if (!item) {
        notFound();
    }

    return <NewsArticleView item={item} />;
}
