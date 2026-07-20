import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";
import {
    ssuProgramsSection,
    type SsuProgramGroup,
    type SsuProgramItem,
} from "@/data/programmes/skill-scale-up";
import {
    CateringProgramIcon,
    HairStylingProgramIcon,
    MakeupArtistryProgramIcon,
    PhotographyProgramIcon,
} from "./SsuProgramIcons";
import { SsuSectionHeading } from "./SsuSectionHeading";

const programIcons = {
    catering: CateringProgramIcon,
    photography: PhotographyProgramIcon,
    hair: HairStylingProgramIcon,
    makeup: MakeupArtistryProgramIcon,
} as const;

const groupPanelClassName: Record<SsuProgramGroup["id"], string> = {
    tech: "border-cnf-primary/15 bg-cnf-primary-soft/60",
    vocational: "border-sky-200 bg-sky-50/80",
};

const groupAccentClassName: Record<SsuProgramGroup["id"], string> = {
    tech: "bg-cnf-primary",
    vocational: "bg-sky-500",
};

function ProgramCard({ program }: { program: SsuProgramItem }) {
    const Icon = program.icon ? programIcons[program.icon] : null;

    return (
        <article
            className={`flex h-full flex-col rounded-xl p-3 sm:p-4 ${program.cardClassName}`}
        >
            <div className="relative mb-3 aspect-[262/216] w-full">
                {Icon ? (
                    <Icon className="h-full w-full" />
                ) : program.imageSrc ? (
                    <Image
                        src={program.imageSrc}
                        alt={program.imageAlt}
                        fill
                        className="object-contain object-center"
                        sizes="(max-width: 1024px) 45vw, 22vw"
                    />
                ) : null}
            </div>
            <h3
                className={`${fontDisplay.className} text-base font-bold leading-snug text-cnf-ink sm:text-lg`}
            >
                {program.title}
            </h3>
            <p className="mt-1.5 flex-1 text-xs leading-relaxed text-cnf-muted sm:text-sm">
                {program.description}
            </p>
        </article>
    );
}

export function SsuProgramsSection() {
    return (
        <section
            aria-labelledby="ssu-programs-title"
            className="border-b border-cnf-border bg-white py-14 md:py-20"
        >
            <Container>
                <SsuSectionHeading
                    title={ssuProgramsSection.title}
                    subtitle={ssuProgramsSection.subtitle}
                />

                <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6 xl:gap-8">
                    {ssuProgramsSection.groups.map((group) => (
                        <div
                            key={group.id}
                            className={cn(
                                "rounded-2xl border p-4 sm:p-5 md:p-6",
                                groupPanelClassName[group.id],
                            )}
                        >
                            <div className="mb-4 flex items-center gap-3">
                                <span
                                    className={cn(
                                        "h-8 w-1.5 shrink-0 rounded-full",
                                        groupAccentClassName[group.id],
                                    )}
                                    aria-hidden
                                />
                                <h3
                                    className={`${fontDisplay.className} text-xl font-bold text-cnf-ink md:text-2xl`}
                                >
                                    {group.title}
                                </h3>
                            </div>
                            <ul className="grid grid-cols-2 gap-3 sm:gap-4">
                                {group.items.map((program) => (
                                    <li key={program.title}>
                                        <ProgramCard program={program} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
