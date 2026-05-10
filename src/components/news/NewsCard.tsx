import Link from "next/link";
import { newsCategoryCardArt } from "@/constants/news-card-styles";
import type { NewsItem } from "@/data/news";
import { NewsArtIcon } from "@/components/news/NewsArtIcon";
type Props = {
    item: NewsItem;
};
function formatDate(iso: string) {
    return new Intl.DateTimeFormat("en-NG", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(iso));
}
export function NewsCard({ item }: Props) {
    const art = newsCategoryCardArt[item.category];
    return (<article className="flex h-full flex-col overflow-hidden rounded-2xl border border-cnf-border bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className={`relative flex h-40 flex-col justify-between p-4 md:h-44 ${art.bg}`}>
        <span className={`inline-flex w-fit rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wide ${art.ribbonBg} ${art.ribbonText}`}>
          {item.ribbon}
        </span>
        <div className="flex flex-1 items-center justify-center">
          <NewsArtIcon emoji={item.emoji} className="text-5xl md:text-6xl"/>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-base font-bold leading-snug text-cnf-ink">
          <Link className="hover:text-cnf-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary" href={`/news/${item.slug}`}>
            {item.title}
          </Link>
        </h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-cnf-muted">
          {item.excerpt}
        </p>
        <div className="mt-5 flex items-center justify-between pt-4 text-sm">
          <time className="text-cnf-muted" dateTime={item.date}>
            {formatDate(item.date)}
          </time>
          <Link className="inline-flex items-center gap-1 font-semibold text-cnf-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary" href={`/news/${item.slug}`}>
            Read <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </div>
    </article>);
}
