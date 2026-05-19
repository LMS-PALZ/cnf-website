"use client";

import { CnfImage } from "@/components/ui/CnfImage";

type Props = {
    src: string;
    alt: string;
};

export function PageBannerBackground({ src, alt }: Props) {
    return (
        <div className="absolute inset-0 bg-cnf-surface" aria-hidden>
            <CnfImage
                src={src}
                alt={alt}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
            />

            <div
                className="absolute inset-0 z-[2] bg-gradient-to-br from-cnf-primary/80 via-cnf-primary/65 to-cnf-ink/50"
                aria-hidden
            />
            <div
                className="cnf-dot-pattern absolute inset-0 z-[2] opacity-[0.14]"
                aria-hidden
            />
        </div>
    );
}
