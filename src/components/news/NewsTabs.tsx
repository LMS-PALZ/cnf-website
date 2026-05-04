"use client";

import { newsFilterOptions, type NewsFilterId } from "@/data/news";
import { cn } from "@/lib/cn";

type Props = {
  value: NewsFilterId;
  onChange: (id: NewsFilterId) => void;
};

/**
 * Filter tab strip used by the news listing. Active filter renders as a
 * filled green pill; inactive filters render as muted text-only buttons
 * with a subtle bottom-border on hover for tab affordance.
 */
export function NewsTabs({ value, onChange }: Props) {
  return (
    <div
      className="flex flex-wrap gap-2 border-b border-cnf-border"
      role="tablist"
      aria-label="Filter news by programme area"
    >
      {newsFilterOptions.map((opt) => {
        const active = value === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(opt.id)}
            className={cn(
              "relative -mb-px rounded-t-lg px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary",
              active
                ? "bg-cnf-primary text-white"
                : "text-cnf-muted hover:text-cnf-ink"
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
