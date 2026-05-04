"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { filterTabs, type ProjectFilter } from "@/data/projects/projects";

type Props = {
  active: ProjectFilter;
  onChange: (id: ProjectFilter) => void;
  /** Optional id used for `aria-controls` on each tab. */
  controlsId?: string;
};

/**
 * Pill-style filter bar above the project grid. The active tab uses the
 * brand primary green; inactive tabs are subtle outline pills. Wired up
 * via the parent client component (`WhatWeveDoneSection`).
 */
export function ProjectsFilterTabs({ active, onChange, controlsId }: Props) {
  return (
    <div
      role="tablist"
      aria-label="Filter projects by pillar"
      className="flex flex-wrap items-center gap-2"
    >
      {filterTabs.map((tab) => {
        const isActive = active === tab.id;
        return (
          <Button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            aria-controls={controlsId}
            size="sm"
            variant={isActive ? "primary" : "secondary"}
            onClick={() => onChange(tab.id)}
            className={cn(
              "rounded-full",
              isActive
                ? "shadow-sm"
                : "border-cnf-border bg-white text-cnf-muted hover:text-cnf-ink"
            )}
          >
            {tab.label}
          </Button>
        );
      })}
    </div>
  );
}
