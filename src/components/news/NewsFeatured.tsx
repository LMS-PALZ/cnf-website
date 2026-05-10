import Link from "next/link";
import type { NewsItem } from "@/data/news";
import { fontDisplay } from "@/lib/fonts";
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
function CameraPlaceholder() {
    return (<svg aria-hidden viewBox="0 0 96 80" className="h-20 w-24 text-white/30 md:h-24 md:w-28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 22h14l4-8h32l4 8h14a4 4 0 0 1 4 4v36a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V26a4 4 0 0 1 4-4Z"/>
      <circle cx="48" cy="44" r="14"/>
      <circle cx="48" cy="44" r="6" fill="currentColor" stroke="none"/>
      
      <g className="text-cnf-accent-light" stroke="currentColor" strokeWidth="2.5">
        <path d="M76 14v10"/>
        <path d="M71 19h10"/>
        <path d="M73 16l6 6"/>
        <path d="M73 22l6-6"/>
      </g>
    </svg>);
}
export function NewsFeatured({ item }: Props) {
    return (<article className="overflow-hidden rounded-2xl border border-cnf-border bg-white shadow-sm">
      <div className="grid md:grid-cols-2">
        
        <div className="relative flex min-h-[260px] flex-col bg-cnf-primary p-6 md:min-h-[320px] md:p-8">
          <span className="inline-flex w-fit items-center rounded-md bg-cnf-accent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-cnf-accent-ink">
            Latest
          </span>
          <div className="flex flex-1 flex-col items-center justify-center gap-3">
            <CameraPlaceholder />
            <p className="text-center text-xs font-medium text-white/65">
              {item.photoLabel ?? "Add programme photo here"}
            </p>
          </div>
        </div>

        
        <div className="flex flex-col p-6 md:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cnf-primary">
            {item.detailSubtitle ??
            `${item.ribbon}${item.tag ? ` \u2022 ${item.tag}` : ""}`}
          </p>
          <h2 className={`${fontDisplay.className} mt-3 text-2xl font-semibold leading-snug text-cnf-ink md:text-3xl`}>
            <Link className="text-cnf-ink underline-offset-4 hover:text-cnf-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary" href={`/news/${item.slug}`}>
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
            <Link className="inline-flex items-center gap-1 font-semibold text-cnf-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary" href={`/news/${item.slug}`}>
              Read Full Story <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </article>);
}
