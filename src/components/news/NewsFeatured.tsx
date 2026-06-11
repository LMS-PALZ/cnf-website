import Link from "next/link";
import { NewsCardMedia } from "@/components/news/NewsCardMedia";
import type { NewsItem } from "@/data/news";
import { fontDisplay } from "@/lib/fonts";
import { formatNewsDate } from "@/lib/news-utils";

type Props = {
    item: NewsItem;
};

export function NewsFeatured({ item }: Props) {
    return (
        <article className="overflow-hidden rounded-2xl border border-cnf-border bg-white shadow-sm">
            <div className="grid md:grid-cols-2">
                <div className="relative min-h-[260px] md:min-h-[320px]">
                    <span className="absolute left-4 top-4 z-[3] inline-flex w-fit items-center rounded-md bg-cnf-accent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-cnf-accent-ink">
                        Latest
                    </span>
                    <NewsCardMedia
                        item={item}
                        mediaClassName="h-full min-h-[260px] md:min-h-[320px]"
                        className="md:absolute md:inset-0"
                        imageClassName="md:rounded-none"
                        priority
                        showRibbon={false}
                    />
                </div>

                <div className="flex flex-col p-6 md:p-10">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cnf-primary">
                        {item.detailSubtitle ??
                            `${item.ribbon}${item.tag ? ` • ${item.tag}` : ""}`}
                    </p>
                    <h2
                        className={`${fontDisplay.className} mt-3 text-2xl font-semibold leading-snug text-cnf-ink md:text-3xl`}
                    >
                        <Link
                            className="text-cnf-ink underline-offset-4 hover:text-cnf-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary"
                            href={`/news/${item.slug}`}
                        >
                            {item.title}
                        </Link>
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-cnf-muted">
                        {item.excerpt}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-8 text-sm">
                        <time className="text-cnf-muted" dateTime={item.date}>
                            {formatNewsDate(item.date)}
                        </time>
                        <Link
                            className="inline-flex items-center gap-1 font-semibold text-cnf-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary"
                            href={`/news/${item.slug}`}
                        >
                            Read Full Story <span aria-hidden>&rarr;</span>
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}
