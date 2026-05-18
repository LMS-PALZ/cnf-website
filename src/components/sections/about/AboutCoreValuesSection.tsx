import type { IconType } from "react-icons";
import {
    HiArrowTrendingUp,
    HiLightBulb,
    HiShieldCheck,
    HiSparkles,
    HiUserGroup,
} from "react-icons/hi2";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";

const values: {
    title: string;
    description: string;
    Icon: IconType;
    accent: string;
}[] = [
    {
        title: "Integrity",
        description:
            "We do the right thing, always — with our resources, our people, and our beneficiaries.",
        Icon: HiShieldCheck,
        accent: "bg-cnf-primary/10 text-cnf-primary ring-cnf-primary/20",
    },
    {
        title: "Excellence",
        description:
            "We hold ourselves to the highest standard in everything we deliver, because the people we serve deserve nothing less.",
        Icon: HiSparkles,
        accent: "bg-cnf-accent/15 text-cnf-accent-hover ring-cnf-accent/25",
    },
    {
        title: "Possibility",
        description:
            "We believe no circumstance is permanent. We bring creative, forward-thinking solutions to challenges others have accepted as fixed.",
        Icon: HiLightBulb,
        accent: "bg-cnf-pillar-skills-soft text-cnf-pillar-skills ring-cnf-pillar-skills/25",
    },
    {
        title: "People First",
        description:
            "We are stronger together — our team, our communities, our beneficiaries. No one is left behind; no one works alone.",
        Icon: HiUserGroup,
        accent: "bg-cnf-pillar-education-soft text-cnf-pillar-education ring-cnf-pillar-education/20",
    },
    {
        title: "Growth",
        description:
            "We don't just serve, we build. Every programme is designed to leave people more capable, more confident, and more independent than we found them.",
        Icon: HiArrowTrendingUp,
        accent: "bg-cnf-pillar-humanitarian-soft text-cnf-pillar-humanitarian ring-cnf-pillar-humanitarian/25",
    },
];

export function AboutCoreValuesSection() {
    const [featured, ...rest] = values;

    return (
        <section className="overflow-hidden bg-cnf-cream py-20 md:py-28">
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cnf-primary">
                        What We Stand For
                    </p>
                    <h2
                        className={`${fontDisplay.className} mt-6 text-4xl font-semibold text-cnf-ink md:text-5xl`}
                    >
                        Our Core Values
                    </h2>
                    <p className="mt-4 text-base leading-8 text-cnf-muted md:text-lg">
                        Five values that define how we work, who we are, and what every
                        beneficiary, partner, and team member can always expect from CNF.
                    </p>
                </div>

                {featured ? (
                    <article className="mt-14 overflow-hidden rounded-3xl border border-cnf-border bg-white shadow-md lg:mt-16">
                        <div className="grid lg:grid-cols-[1fr_1.15fr] lg:items-stretch">
                            <div className="flex flex-col justify-center gap-6 border-b border-cnf-border p-8 md:p-10 lg:border-b-0 lg:border-r">
                                <span
                                    className={cn(
                                        "inline-flex h-14 w-14 items-center justify-center rounded-2xl ring-1",
                                        featured.accent,
                                    )}
                                >
                                    <featured.Icon className="h-7 w-7" aria-hidden />
                                </span>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cnf-muted">
                                        Value 01
                                    </p>
                                    <h3
                                        className={`${fontDisplay.className} mt-2 text-3xl font-semibold text-cnf-ink`}
                                    >
                                        {featured.title}
                                    </h3>
                                </div>
                            </div>
                            <p className="flex items-center p-8 text-lg leading-relaxed text-cnf-muted md:p-10">
                                {featured.description}
                            </p>
                        </div>
                    </article>
                ) : null}

                <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:mt-8 lg:grid-cols-4 lg:gap-5">
                    {rest.map((value, index) => {
                        const Icon = value.Icon;
                        return (
                            <li key={value.title}>
                                <article className="group flex h-full flex-col rounded-2xl border border-cnf-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cnf-primary/25 hover:shadow-lg">
                                    <span
                                        className={cn(
                                            "inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1 transition-transform duration-300 group-hover:scale-105",
                                            value.accent,
                                        )}
                                    >
                                        <Icon className="h-6 w-6" aria-hidden />
                                    </span>
                                    <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-cnf-muted">
                                        Value 0{index + 2}
                                    </p>
                                    <h3 className="mt-2 text-xl font-semibold text-cnf-ink">
                                        {value.title}
                                    </h3>
                                    <p className="mt-3 flex-1 text-sm leading-7 text-cnf-muted">
                                        {value.description}
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
