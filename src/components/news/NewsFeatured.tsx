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

export function NewsFeatured({ item }: Props) {
  const art = newsCategoryCardArt[item.category];

  return (
    <article className="overflow-hidden rounded-2xl border border-cnf-border bg-white shadow-sm">
      <div className="grid md:grid-cols-2">
        <div
          className={`relative flex min-h-[220px] flex-col justify-between p-6 md:min-h-[280px] ${art.gradient}`}
        >
          <span className="inline-flex w-fit rounded-md bg-cnf-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-cnf-accent-ink">
            Latest
          </span>
          <div className="flex flex-1 flex-col items-center justify-center gap-2 pb-4 pt-6">
            <NewsArtIcon name={art.icon} className="text-white/30" />
            <p className="text-center text-xs font-medium text-white/50">Photo coming soon</p>
          </div>
        </div>
        <div className="flex flex-col justify-center p-6 md:p-10">
          {item.detailSubtitle ? (
            <p className="text-xs font-semibold uppercase tracking-wider text-cnf-primary">
              {item.detailSubtitle}
            </p>
          ) : (
            <p className="text-xs font-semibold uppercase tracking-wider text-cnf-primary">
              {item.ribbon}
              {item.tag ? ` • ${item.tag}` : ""}
            </p>
          )}
          <h2 className={`${fontDisplay.className} mt-3 text-2xl font-semibold leading-snug text-cnf-ink md:text-3xl`}>
            <Link
              className="text-cnf-ink underline-offset-4 hover:text-cnf-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary"
              href={`/news/${item.slug}`}
            >
              {item.title}
            </Link>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cnf-muted">{item.excerpt}</p>
          <p className="mt-6 text-sm text-cnf-muted">{formatDate(item.date)}</p>
          <Link
            className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-semibold text-cnf-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary"
            href={`/news/${item.slug}`}
          >
            Read more
          </Link>
        </div>
      </div>
    </article>
  );
}
