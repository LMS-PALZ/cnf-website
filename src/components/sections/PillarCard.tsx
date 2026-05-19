"use client";

import { CnfImage } from "@/components/ui/CnfImage";
import Link from "next/link";
import { useKoraPayment } from "@/components/payments/KoraPaymentContext";
import type { Pillar } from "@/constants/pillars";
import { fontDisplay } from "@/lib/fonts";

const linkClass =
    "inline-flex min-h-11 items-center justify-center rounded-md border border-cnf-primary/20 px-4 py-2 text-base font-semibold text-cnf-primary transition-colors hover:border-cnf-primary/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary";

type Props = {
    pillar: Pillar;
    imagePriority?: boolean;
};

function isPaymentLink(href: string, label: string): boolean {
    return href === "/donate" && /support|donate|give/i.test(label);
}

export function PillarCard({ pillar, imagePriority }: Props) {
    const { openPayment } = useKoraPayment();

    return (
        <article className="flex flex-col overflow-hidden rounded-xl border border-cnf-primary/10 bg-white shadow-sm">
            <div className="relative aspect-[16/10] w-full">
                <CnfImage
                    src={pillar.imageSrc}
                    alt={pillar.imageAlt}
                    fill
                    priority={imagePriority}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            </div>
            <div className="flex flex-1 flex-col p-6">
                <h2 className={`${fontDisplay.className} text-2xl font-semibold text-cnf-ink`}>
                    {pillar.title}
                </h2>
                <p className="mt-2 text-sm font-medium text-cnf-primary">{pillar.shortLabel}</p>
                <p className="mt-3 text-base leading-relaxed text-cnf-muted">{pillar.summary}</p>
                <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                    {pillar.links.map((l) =>
                        isPaymentLink(l.href, l.label) ? (
                            <button
                                key={l.href + l.label}
                                type="button"
                                className={linkClass}
                                onClick={() => openPayment({ label: l.label })}
                            >
                                {l.label}
                            </button>
                        ) : (
                            <Link key={l.href + l.label} className={linkClass} href={l.href}>
                                {l.label}
                            </Link>
                        ),
                    )}
                </div>
            </div>
        </article>
    );
}
