import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";
import { pageContentWidthClass } from "@/lib/layout";

type Tone = "dark" | "primary";

type Props = {
    tone?: Tone;
    title: ReactNode;
    description: ReactNode;
    actions: ReactNode;
    as?: "h2" | "h3";
    id?: string;
    /** Inset band at page content width (80%), not the default card-in-container layout. */
    fullWidth?: boolean;
};

const toneShell: Record<Tone, string> = {
    dark: "bg-cnf-night",
    primary: "bg-cnf-primary-soft",
};

const toneText: Record<Tone, { heading: string; body: string }> = {
    dark: {
        heading: "text-white",
        body: "text-white/80",
    },
    primary: {
        heading: "text-cnf-ink",
        body: "text-cnf-muted",
    },
};

function CtaBandContent({
    tone,
    title,
    description,
    actions,
    as: Tag,
    id,
}: Required<Pick<Props, "tone" | "title" | "description" | "actions" | "as" | "id">>) {
    const text = toneText[tone];

    return (
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
                <Tag
                    id={id}
                    className={cn(
                        fontDisplay.className,
                        "text-3xl font-semibold leading-tight md:text-4xl",
                        text.heading,
                    )}
                >
                    {title}
                </Tag>
                <p className={cn("mt-4 text-base leading-relaxed", text.body)}>{description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-end lg:flex-row">{actions}</div>
        </div>
    );
}

export function CtaBand({
    tone = "dark",
    title,
    description,
    actions,
    as: Tag = "h2",
    id,
    fullWidth = false,
}: Props) {
    if (fullWidth) {
        return (
            <section aria-labelledby={id} className="w-full bg-white py-12 md:py-14">
                <div
                    className={cn(
                        pageContentWidthClass,
                        "rounded-2xl px-6 py-10 sm:px-10 md:px-14 md:py-12",
                        toneShell[tone],
                    )}
                >
                    <CtaBandContent
                        tone={tone}
                        title={title}
                        description={description}
                        actions={actions}
                        as={Tag}
                        id={id ?? "cta-band-title"}
                    />
                </div>
            </section>
        );
    }

    return (
        <section aria-labelledby={id} className="bg-white px-4 py-12 sm:px-6 lg:px-8">
            <Container>
                <div className={cn("rounded-2xl px-6 py-10 sm:px-10 md:px-14 md:py-12", toneShell[tone])}>
                    <CtaBandContent
                        tone={tone}
                        title={title}
                        description={description}
                        actions={actions}
                        as={Tag}
                        id={id ?? "cta-band-title"}
                    />
                </div>
            </Container>
        </section>
    );
}
