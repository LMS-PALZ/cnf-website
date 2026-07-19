import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { fontDisplay } from "@/lib/fonts";
import { ssuProgramsSection } from "@/data/programmes/skill-scale-up";
import {
    CateringProgramIcon,
    PhotographyProgramIcon,
} from "./SsuProgramIcons";
import { SsuSectionHeading } from "./SsuSectionHeading";

const programIcons = {
    catering: CateringProgramIcon,
    photography: PhotographyProgramIcon,
} as const;

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

                <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {ssuProgramsSection.items.map((program) => {
                        const Icon = program.icon
                            ? programIcons[program.icon]
                            : null;

                        return (
                            <li key={program.title}>
                                <article
                                    className={`flex h-full flex-col rounded-xl p-5 md:p-6 ${program.cardClassName}`}
                                >
                                    <div className="relative mb-5 aspect-[262/216] w-full">
                                        {Icon ? (
                                            <Icon className="h-full w-full" />
                                        ) : program.imageSrc ? (
                                            <Image
                                                src={program.imageSrc}
                                                alt={program.imageAlt}
                                                fill
                                                className="object-contain object-center"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                                            />
                                        ) : null}
                                    </div>
                                    <h3
                                        className={`${fontDisplay.className} text-lg font-bold text-cnf-ink`}
                                    >
                                        {program.title}
                                    </h3>
                                    <p className="mt-2 flex-1 text-sm leading-relaxed text-cnf-muted">
                                        {program.description}
                                    </p>
                                </article>
                            </li>
                        );
                    })}
                </ul>
            </Container>
        </section>
    );
}
