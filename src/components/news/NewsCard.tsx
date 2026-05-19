import Link from "next/link";
import { NewsCardMedia } from "@/components/news/NewsCardMedia";
import type { NewsItem } from "@/data/news";
import { formatNewsDate } from "@/lib/news-utils";

type Props = {
    item: NewsItem;
};

export function NewsCard({ item }: Props) {
    return (
        <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-cnf-border bg-white shadow-sm transition-shadow hover:shadow-md">
            <NewsCardMedia item={item} />
            <div className="flex flex-1 flex-col p-5">
                <h2 className="text-base font-bold leading-snug text-cnf-ink">
                    <Link
                        className="hover:text-cnf-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary"
                        href={`/news/${item.slug}`}
                    >
                        {item.title}
                    </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-cnf-muted">
                    {item.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between pt-4 text-sm">
                    <time className="text-cnf-muted" dateTime={item.date}>
                        {formatNewsDate(item.date)}
                    </time>
                    <Link
                        className="inline-flex items-center gap-1 font-semibold text-cnf-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary"
                        href={`/news/${item.slug}`}
                    >
                        Read <span aria-hidden>&rarr;</span>
                    </Link>
                </div>
            </div>
        </article>
    );
}
