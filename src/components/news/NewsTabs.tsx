"use client";
import { newsFilterOptions, type NewsFilterId } from "@/data/news";
import { cn } from "@/lib/cn";
type Props = {
    value: NewsFilterId;
    onChange: (id: NewsFilterId) => void;
};
export function NewsTabs({ value, onChange }: Props) {
    return (<div className="flex flex-wrap gap-1 border-b border-cnf-border" role="tablist" aria-label="Filter news by programme area">
      {newsFilterOptions.map((opt) => {
            const active = value === opt.id;
            return (<button key={opt.id} type="button" role="tab" aria-selected={active} onClick={() => onChange(opt.id)} className={cn("relative -mb-px rounded-t-2xl px-5 py-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary", active
                    ? "bg-cnf-primary font-semibold text-white"
                    : "border border-b-0 border-cnf-border bg-white text-cnf-muted hover:text-cnf-ink")}>
            {opt.label}
          </button>);
        })}
    </div>);
}
