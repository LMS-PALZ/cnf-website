import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { iconRegistry } from "@/components/ui/iconRegistry";
import { ArrowRightIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";
import type { ProjectItem } from "@/data/projects/projects";

type Props = {
  project: ProjectItem;
};

const badgeTone: Record<ProjectItem["theme"], string> = {
  skills: "bg-cnf-pillar-skills-soft text-cnf-pillar-skills",
  education: "bg-cnf-pillar-education-soft text-cnf-pillar-education",
  humanitarian:
    "bg-cnf-pillar-humanitarian-soft text-cnf-pillar-humanitarian",
};

const linkTone: Record<ProjectItem["theme"], string> = {
  skills: "text-cnf-pillar-skills hover:text-cnf-primary-dark",
  education: "text-cnf-pillar-education hover:text-cnf-pillar-education/80",
  humanitarian:
    "text-cnf-pillar-humanitarian hover:text-cnf-pillar-humanitarian/80",
};

const photoStripeTone: Record<ProjectItem["theme"], string> = {
  skills: "bg-cnf-pillar-skills/40",
  education: "bg-cnf-pillar-education/40",
  humanitarian: "bg-cnf-pillar-humanitarian/40",
};

const mediaSurface: Record<ProjectItem["theme"], string> = {
  skills: "bg-cnf-accent",
  education: "bg-cnf-pillar-education",
  humanitarian: "bg-cnf-pillar-humanitarian",
};

/**
 * Project card with a coloured "photo placeholder" header (icon centred,
 * darker bottom stripe with the photo hint) and a content block with badge,
 * title, description, and "Read more" link.
 */
export function ProjectCard({ project }: Props) {
  const Icon = iconRegistry[project.iconKey];

  return (
    <Card
      tone="elevated"
      padding="none"
      className="flex h-full flex-col"
      as="article"
    >
      <div
        className={cn(
          "relative flex aspect-[16/10] flex-col items-center justify-center overflow-hidden",
          mediaSurface[project.theme]
        )}
      >
        <Icon className="h-10 w-10 text-white/30" />

        <div
          className={cn(
            "absolute inset-x-0 bottom-0 flex items-center gap-2 px-4 py-2.5 text-[11px] font-medium text-white/85",
            photoStripeTone[project.theme]
          )}
        >
          <span aria-hidden className="text-base leading-none">+</span>
          <span>{project.mediaLabel}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <span
          className={cn(
            "inline-flex w-fit rounded px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]",
            badgeTone[project.theme]
          )}
        >
          {project.badge}
        </span>
        <h3
          className={cn(
            fontDisplay.className,
            "text-lg font-semibold leading-snug text-cnf-ink"
          )}
        >
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-cnf-muted">
          {project.description}
        </p>
        <div className="mt-auto pt-2">
          <Link
            href={project.href ?? "#"}
            className={cn(
              "inline-flex items-center gap-1.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary",
              linkTone[project.theme]
            )}
          >
            Read more
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </Card>
  );
}
