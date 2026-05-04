"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { NewsCard } from "@/components/news/NewsCard";
import { NewsFeatured } from "@/components/news/NewsFeatured";
import { NewsTabs } from "@/components/news/NewsTabs";
import type { NewsFilterId, NewsItem } from "@/data/news";

const PAGE_SIZE = 6; // 2 rows × 3 columns

type Props = { items: NewsItem[] };

/**
 * Filter tabs + featured-card + paginated grid. To keep DOM light on
 * first render the grid only shows the first `PAGE_SIZE` cards (2 rows
 * of 3) and reveals the rest in `PAGE_SIZE` chunks via the "Load More"
 * button. Switching filters resets the visible count.
 */
export function NewsListing({ items }: Props) {
  const [filter, setFilter] = useState<NewsFilterId>("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Reset pagination whenever the filter changes.
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [filter]);

  const featured = useMemo(
    () => (filter === "all" ? items.find((i) => i.featured) : undefined),
    [filter, items],
  );

  const filtered = useMemo(() => {
    const base =
      filter === "all" ? items : items.filter((i) => i.category === filter);
    return featured ? base.filter((i) => i.slug !== featured.slug) : base;
  }, [items, filter, featured]);

  const visible = filtered.slice(0, visibleCount);
  const remaining = Math.max(filtered.length - visibleCount, 0);

  return (
    <section
      id="news-listing"
      aria-label="News articles"
      className="border-t border-cnf-border bg-cnf-surface py-10 md:py-14"
    >
      <Container>
        <NewsTabs value={filter} onChange={setFilter} />

        {featured ? (
          <div className="mt-10">
            <NewsFeatured item={featured} />
          </div>
        ) : null}

        {visible.length > 0 ? (
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((item) => (
              <li key={item.slug} className="flex">
                <NewsCard item={item} />
              </li>
            ))}
          </ul>
        ) : null}

        {visible.length === 0 && !featured ? (
          <p className="mt-10 text-center text-cnf-muted">
            No stories in this category yet.
          </p>
        ) : null}

        {remaining > 0 ? (
          <div className="mt-12 flex justify-center">
            <Button
              type="button"
              variant="secondary"
              size="lg"
              onClick={() =>
                setVisibleCount((c) => Math.min(c + PAGE_SIZE, filtered.length))
              }
            >
              Load more <span className="text-cnf-muted">({remaining})</span>
            </Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
