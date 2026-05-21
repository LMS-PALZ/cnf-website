"use client";

import { useCallback, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { CnfImage } from "@/components/ui/CnfImage";
import { cn } from "@/lib/cn";
import type { ProjectImage } from "@/data/projects/project-image-catalog";
import { MAX_PROJECT_CARD_IMAGES } from "@/data/projects/project-image-catalog";

type Props = {
    images: ProjectImage[];
    title: string;
    mediaLabel?: string;
    photoStripeClassName?: string;
};

export function ProjectCardCarousel({
    images,
    title,
    mediaLabel,
    photoStripeClassName,
}: Props) {
    const slides = images.slice(0, MAX_PROJECT_CARD_IMAGES);
    const count = slides.length;
    const [index, setIndex] = useState(0);

    const goTo = useCallback(
        (next: number) => {
            if (count === 0) return;
            setIndex(((next % count) + count) % count);
        },
        [count],
    );

    const goNext = useCallback(
        (event: React.MouseEvent) => {
            event.preventDefault();
            event.stopPropagation();
            goTo(index + 1);
        },
        [goTo, index],
    );

    const goPrev = useCallback(
        (event: React.MouseEvent) => {
            event.preventDefault();
            event.stopPropagation();
            goTo(index - 1);
        },
        [goTo, index],
    );

    if (count === 0) {
        return (
            <div className="flex h-full flex-col justify-end bg-cnf-surface">
                <div
                    className={cn(
                        "flex items-center gap-2 px-4 py-2.5 text-[11px] font-medium text-white/85",
                        photoStripeClassName,
                    )}
                >
                    <span aria-hidden className="text-base leading-none">
                        +
                    </span>
                    <span>{mediaLabel ?? "Add photos"}</span>
                </div>
            </div>
        );
    }

    const active = slides[index];
    const stackBehind =
        count > 1
            ? [
                  slides[(index + 1) % count],
                  slides[(index + 2) % count],
              ]
            : [];

    return (
        <div
            className="relative h-full w-full"
            aria-roledescription="carousel"
            aria-label={`${title} photos`}
        >
            <div className="absolute inset-0">
                {stackBehind.map((slide, layer) => (
                    <div
                        key={`stack-${layer}-${slide.src}`}
                        className={cn(
                            "absolute inset-0 overflow-hidden rounded-t-xl bg-cnf-surface",
                            layer === 0
                                ? "z-0 scale-[0.94] translate-x-1.5 translate-y-1.5 opacity-50"
                                : "z-[1] scale-[0.97] translate-x-0.5 translate-y-0.5 opacity-70",
                        )}
                        aria-hidden
                    >
                        <CnfImage
                            src={slide.src}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                ))}

                <div className="absolute inset-0 z-[2] overflow-hidden rounded-t-xl bg-cnf-surface shadow-sm">
                    <CnfImage
                        src={active.src}
                        alt={active.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                    />
                </div>
            </div>

            {count > 1 ? (
                <>
                    <button
                        type="button"
                        onClick={goPrev}
                        className="absolute left-2 top-1/2 z-[10] flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-cnf-primary shadow-md transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent"
                        aria-label="Previous photo"
                    >
                        <HiChevronLeft className="h-4 w-4" aria-hidden />
                    </button>
                    <button
                        type="button"
                        onClick={goNext}
                        className="absolute right-2 top-1/2 z-[10] flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-cnf-primary shadow-md transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent"
                        aria-label="Next photo"
                    >
                        <HiChevronRight className="h-4 w-4" aria-hidden />
                    </button>

                    <div className="absolute bottom-2 left-0 right-0 z-[10] flex items-center justify-center gap-1">
                        {slides.map((slide, i) => (
                            <button
                                key={`${slide.src}-${i}`}
                                type="button"
                                onClick={(event) => {
                                    event.preventDefault();
                                    event.stopPropagation();
                                    goTo(i);
                                }}
                                className={cn(
                                    "h-1 rounded-full transition-all duration-200",
                                    i === index
                                        ? "w-4 bg-white"
                                        : "w-1 bg-white/60 hover:bg-white/90",
                                )}
                                aria-label={`Photo ${i + 1} of ${count}`}
                            />
                        ))}
                    </div>
                </>
            ) : null}

            <p className="sr-only" aria-live="polite">
                {active.alt}. Photo {index + 1} of {count}.
            </p>
        </div>
    );
}
