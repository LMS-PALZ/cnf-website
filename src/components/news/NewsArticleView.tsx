import Link from "next/link";
import { CnfImage } from "@/components/ui/CnfImage";
import { Container } from "@/components/ui/Container";
import { RelatedNewsSection } from "@/components/news/RelatedNewsSection";
import { NewsArticleBody } from "@/components/news/NewsArticleBody";
import type { NewsItem } from "@/data/news";
import { fontDisplay } from "@/lib/fonts";
import { formatNewsDate } from "@/lib/news-utils";

type Props = {
    item: NewsItem;
};

export function NewsArticleView({ item }: Props) {
    return (
        <>
            <article className="py-16 md:py-24">
                <Container className="max-w-3xl">
                    <p className="text-xs font-semibold uppercase tracking-wider text-cnf-primary">
                        {item.ribbon}
                    </p>
                    {item.detailSubtitle ? (
                        <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-cnf-muted">
                            {item.detailSubtitle}
                        </p>
                    ) : (
                        <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-cnf-muted">
                            {item.tag}
                        </p>
                    )}

                    <h1
                        className={`${fontDisplay.className} mt-3 text-4xl font-bold text-cnf-ink md:text-5xl`}
                    >
                        {item.title}
                    </h1>
                    <p className="mt-3 text-sm font-medium text-cnf-muted">
                        {formatNewsDate(item.date)}
                    </p>

                    {item.imageSrc ? (
                        <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl bg-cnf-surface ring-1 ring-cnf-border">
                            <CnfImage
                                src={item.imageSrc}
                                alt={item.imageAlt ?? item.title}
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 768px"
                                className="object-cover"
                            />
                        </div>
                    ) : null}

                    <NewsArticleBody body={item.body} />
                </Container>
            </article>

            <RelatedNewsSection currentSlug={item.slug} />

            <div className="border-t border-cnf-border bg-white py-10 md:py-12">
                <Container className="max-w-3xl">
                    <Link
                        className="inline-flex min-h-11 items-center text-base font-semibold text-cnf-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary"
                        href="/news"
                    >
                        ← Back to all news and impact stories
                    </Link>
                </Container>
            </div>
        </>
    );
}
