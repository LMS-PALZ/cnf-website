"use client";

import { useMemo, useState } from "react";
import type { NewsFilterId, NewsItem } from "@/data/news";
import { newsFilterOptions } from "@/data/news";
import { NewsCard } from "@/components/news/NewsCard";
import { NewsFeatured } from "@/components/news/NewsFeatured";
import { Container } from "@/components/ui/Container";

type Props = { items: NewsItem[] };

export function NewsListing({ items }: Props) {
  const [filter, setFilter] = useState<NewsFilterId>("all");

  const featured = useMemo(
    () => (filter === "all" ? items.find((i) => i.featured) : undefined),
    [filter, items],
  );

  const list = useMemo(() => {
    const base = filter === "all" ? items : items.filter((i) => i.category === filter);
    if (!featured) return base;
    return base.filter((i) => i.slug !== featured.slug);
  }, [items, filter, featured]);

  return (
    <section className="border-t border-cnf-border bg-cnf-surface py-14 md:py-20">
      <Container>
        <div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter news by programme area"
        >
          {newsFilterOptions.map((opt) => {
            const active = filter === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                role="tab"
                aria-selected={active}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary ${
                  active
                    ? "border-cnf-primary bg-cnf-primary text-white"
                    : "border-cnf-border bg-white text-cnf-muted hover:border-cnf-primary/30 hover:text-cnf-ink"
                }`}
                onClick={() => setFilter(opt.id)}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        {featured ? (
          <div className="mt-10">
            <NewsFeatured item={featured} />
          </div>
        ) : null}

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((item) => (
            <li key={item.slug}>
              <NewsCard item={item} />
            </li>
          ))}
        </ul>

        {list.length === 0 && !featured ? (
          <p className="mt-10 text-center text-cnf-muted">No stories in this category yet.</p>
        ) : null}
      </Container>
    </section>
  );
}
