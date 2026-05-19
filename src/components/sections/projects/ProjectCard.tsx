import { Card } from "@/components/ui/Card";
import { CnfImage } from "@/components/ui/CnfImage";
import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";
import type { ProjectItem } from "@/data/projects/projects";

type Props = {
    project: ProjectItem;
};

const badgeTone: Record<ProjectItem["theme"], string> = {
    skills: "bg-cnf-pillar-skills-soft text-cnf-pillar-skills",
    education: "bg-cnf-pillar-education-soft text-cnf-pillar-education",
    humanitarian: "bg-cnf-pillar-humanitarian-soft text-cnf-pillar-humanitarian",
};
const photoStripeTone: Record<ProjectItem["theme"], string> = {
    skills: "bg-cnf-pillar-skills/40",
    education: "bg-cnf-pillar-education/40",
    humanitarian: "bg-cnf-pillar-humanitarian/40",
};

export function ProjectCard({ project }: Props) {
    return (
        <Card tone="elevated" padding="none" className="flex h-full flex-col" as="article">
            <div className="relative aspect-[16/10] overflow-hidden bg-cnf-surface">
                {project.imageSrc ? (
                    <CnfImage
                        src={project.imageSrc}
                        alt={project.imageAlt ?? project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                ) : (
                    <div className="flex h-full flex-col justify-end">
                        <div
                            className={cn(
                                "flex items-center gap-2 px-4 py-2.5 text-[11px] font-medium text-white/85",
                                photoStripeTone[project.theme],
                            )}
                        >
                            <span aria-hidden className="text-base leading-none">
                                +
                            </span>
                            <span>{project.mediaLabel}</span>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex flex-1 flex-col gap-3 p-5">
                <span
                    className={cn(
                        "inline-flex w-fit rounded px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]",
                        badgeTone[project.theme],
                    )}
                >
                    {project.badge}
                </span>
                <h3 className={cn(fontDisplay.className, "text-lg font-semibold leading-snug text-cnf-ink")}>
                    {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-cnf-muted">{project.description}</p>
            </div>
        </Card>
    );
}
