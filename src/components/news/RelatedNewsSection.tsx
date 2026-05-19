import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NewsCard } from "@/components/news/NewsCard";
import { getRelatedNews } from "@/data/news";
import { fontDisplay } from "@/lib/fonts";

type Props = {
    currentSlug: string;
};

export function RelatedNewsSection({ currentSlug }: Props) {
    const related = getRelatedNews(currentSlug, 3);

    if (related.length === 0) {
        return null;
    }

    return (
        <section
            className="py-16 md:py-24"
            aria-labelledby="related-news-title"
        >
            <Container>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cnf-primary">
                            Keep reading
                        </p>
                        <h2
                            id="related-news-title"
                            className={`${fontDisplay.className} mt-2 text-2xl font-semibold text-cnf-ink md:text-3xl`}
                        >
                            Related stories
                        </h2>
                    </div>
                    <Link
                        href="/news"
                        className="text-sm font-semibold text-cnf-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary"
                    >
                        View all news
                    </Link>
                </div>

                <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {related.map((item) => (
                        <li key={item.slug} className="flex">
                            <NewsCard item={item} />
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
