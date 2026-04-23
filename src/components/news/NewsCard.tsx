import Link from "next/link";
import { newsCategoryCardArt } from "@/constants/news-card-styles";
import type { NewsItem } from "@/data/news";
import { NewsArtIcon } from "@/components/news/NewsArtIcon";

type Props = { item: NewsItem };

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-NG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso));
}

export function NewsCard({ item }: Props) {
  const art = newsCategoryCardArt[item.category];

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-cnf-border bg-white shadow-sm">
      <div className={`relative flex h-44 flex-col justify-between p-4 md:h-48 ${art.gradient}`}>
        <span className="inline-flex w-fit rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
          {item.ribbon}
        </span>
        <div className="flex flex-1 items-center justify-center pb-2">
          <NewsArtIcon name={art.icon} className="scale-90 text-white/25" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-lg font-bold leading-snug text-cnf-ink">
          <Link
            className="hover:text-cnf-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary"
            href={`/news/${item.slug}`}
          >
            {item.title}
          </Link>
        </h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-cnf-muted">{item.excerpt}</p>
        <div className="mt-5 flex items-center justify-between border-t border-cnf-border pt-4 text-sm">
          <time className="text-cnf-muted" dateTime={item.date}>
            {formatDate(item.date)}
          </time>
          <Link
            className="font-semibold text-cnf-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary"
            href={`/news/${item.slug}`}
          >
            Read →
          </Link>
        </div>
      </div>
    </article>
  );
}
