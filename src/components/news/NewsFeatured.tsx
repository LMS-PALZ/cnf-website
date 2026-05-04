import Link from "next/link";
import { newsCategoryCardArt } from "@/constants/news-card-styles";
import type { NewsItem } from "@/data/news";
import { NewsArtIcon } from "@/components/news/NewsArtIcon";
import { fontDisplay } from "@/lib/fonts";

type Props = { item: NewsItem };

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-NG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso));
}

/**
 * Two-column "Latest" hero card. Coloured left half with a placeholder
 * photo + LATEST badge; white right half with the detail subtitle,
 * headline, excerpt, and date / Read row at the bottom.
 */
export function NewsFeatured({ item }: Props) {
  const art = newsCategoryCardArt[item.category];

  return (
    <article className="overflow-hidden rounded-2xl border border-cnf-border bg-white shadow-sm">
      <div className="grid md:grid-cols-2">
        {/* Left — coloured photo placeholder */}
        <div
          className={`relative flex min-h-[260px] flex-col p-6 md:min-h-[320px] md:p-8 ${art.gradient}`}
        >
          <span className="inline-flex w-fit items-center rounded-full bg-cnf-accent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-cnf-accent-ink">
            Latest
          </span>
          <div className="flex flex-1 flex-col items-center justify-center gap-3">
            <NewsArtIcon name={art.icon} className="text-white/30" />
            <p className="text-center text-xs font-medium text-white/55">
              Add programme photo here
            </p>
          </div>
        </div>

        {/* Right — copy column */}
        <div className="flex flex-col p-6 md:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cnf-primary">
            {item.detailSubtitle ??
              `${item.ribbon}${item.tag ? ` \u2022 ${item.tag}` : ""}`}
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
              {formatDate(item.date)}
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
