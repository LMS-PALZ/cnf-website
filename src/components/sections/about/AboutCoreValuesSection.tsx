import { primaryEyebrowClassName } from "@/components/sections/home/homeEyebrow";
import { Container } from "@/components/ui/Container";
import { fontDisplay } from "@/lib/fonts";

const values = [
    {
        title: "Excellence",
        description:
            "We hold ourselves to the highest standard in everything we deliver, because the people we serve deserve nothing less.",
    },
    {
        title: "Possibility",
        description:
            "We believe no circumstance is permanent. We bring creative, forward-thinking solutions to challenges others have accepted as fixed.",
    },
    {
        title: "People First",
        description:
            "We are stronger together, our team, our communities, our beneficiaries. No one is left behind; no one works alone.",
    },
    {
        title: "Growth",
        description:
            "We don't just serve, we build. Every programme is designed to leave people more capable, more confident, and more independent than we found them.",
    },
    {
        title: "Impact",
        description:
            "Every program we run must change something real. We measure ourselves not by completed activities but by lives transformed.",
    },
    {
        title: "Integrity",
        description:
            "We do the right thing, always, with our resources, our people, and our beneficiaries.",
    },
] as const;

const rowOne = values.slice(0, 3);
const rowTwo = values.slice(3);

function ValueCard({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <article className="flex h-full flex-col rounded-2xl border border-cnf-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cnf-primary/25 hover:shadow-lg">
            <h3 className={`${fontDisplay.className} text-xl font-semibold text-cnf-ink`}>
                {title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-cnf-muted">{description}</p>
        </article>
    );
}

export function AboutCoreValuesSection() {
    return (
        <section className="overflow-hidden bg-cnf-primary-soft py-20 md:py-28">
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <p className={primaryEyebrowClassName}>What We Stand For</p>
                    <h2
                        className={`${fontDisplay.className} mt-6 text-4xl font-semibold text-cnf-ink md:text-5xl`}
                    >
                        Our Core Values
                    </h2>
                    <p className="mt-4 text-base leading-8 text-cnf-muted md:text-lg">
                        Six values that define how we work, who we are, and what every
                        beneficiary, partner, and team member can always expect from CNF.
                    </p>
                </div>

                <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                    {rowOne.map((value) => (
                        <li key={value.title}>
                            <ValueCard title={value.title} description={value.description} />
                        </li>
                    ))}
                </ul>

                <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:mt-5 lg:grid-cols-3 lg:gap-5">
                    {rowTwo.map((value) => (
                        <li key={value.title}>
                            <ValueCard title={value.title} description={value.description} />
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
