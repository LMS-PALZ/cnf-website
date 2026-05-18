"use client";

import { useEffect, useId, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { filterTabs, projects, type ProjectFilter } from "@/data/projects/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectsFilterTabs } from "./ProjectsFilterTabs";

const INITIAL_VISIBLE = 6;

export function WhatWeveDoneSection() {
    const [active, setActive] = useState<ProjectFilter>("all");
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
    const gridId = useId();

    const filtered = useMemo(
        () => (active === "all" ? projects : projects.filter((p) => p.pillar === active)),
        [active],
    );

    const displayed = filtered.slice(0, visibleCount);
    const hasMore = visibleCount < filtered.length;

    useEffect(() => {
        setVisibleCount(INITIAL_VISIBLE);
    }, [active]);

    function handleChange(next: ProjectFilter) {
        if (next === active) {
            return;
        }
        setActive(next);
        const label = filterTabs.find((t) => t.id === next)?.label ?? next;
        toast.success(`Showing ${label}`, { id: "projects-filter" });
    }

    function handleLoadMore() {
        setVisibleCount((count) => Math.min(count + INITIAL_VISIBLE, filtered.length));
    }

    return (
        <Section tone="cream" padding="lg" ariaLabelledBy="projects-grid-title">
            <SectionHeader
                id="projects-grid-title"
                eyebrow="Our projects"
                title="What We've Done"
                titleAccent="On the Ground"
                description="Every project below represents a real community, a real intervention, and a real outcome. Filter by pillar to explore."
            />

            <div className="mt-8">
                <ProjectsFilterTabs active={active} onChange={handleChange} controlsId={gridId} />
            </div>

            <div
                id={gridId}
                role="tabpanel"
                aria-live="polite"
                className="mt-8 grid gap-6 md:grid-cols-2 md:gap-8"
            >
                {displayed.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            {filtered.length === 0 ? (
                <p className="mt-12 text-center text-sm text-cnf-muted">
                    No projects in this pillar yet, check back soon.
                </p>
            ) : null}

            {hasMore ? (
                <div className="mt-10 flex justify-center">
                    <Button type="button" variant="secondary" size="md" onClick={handleLoadMore}>
                        Load more
                    </Button>
                </div>
            ) : null}
        </Section>
    );
}
