"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { CnfImage } from "@/components/ui/CnfImage";
import { cn } from "@/lib/cn";
import type { CarouselSlide } from "@/data/home/carousel-images";
import { coverImageTopClass, coverImageTopPosition } from "@/lib/image-fit";

const AUTOPLAY_MS = 4500;
const SWIPE_THRESHOLD_PX = 48;

const CAROUSEL_HEIGHT = "h-[400px] sm:h-[520px] lg:h-[600px]";

type Props = {
    slides: CarouselSlide[];
};

export function ImpactGallery({ slides }: Props) {
    const [index, setIndex] = useState(0);
    const touchStartX = useRef<number | null>(null);
    const count = slides.length;

    const goTo = useCallback(
        (next: number) => {
            if (count === 0) return;
            setIndex(((next % count) + count) % count);
        },
        [count],
    );

    const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
    const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

    useEffect(() => {
        if (count <= 1) return;
        const id = window.setInterval(() => {
            setIndex((i) => (i + 1) % count);
        }, AUTOPLAY_MS);
        return () => window.clearInterval(id);
    }, [count]);

    const onTouchStart = (event: React.TouchEvent) => {
        touchStartX.current = event.touches[0]?.clientX ?? null;
    };

    const onTouchEnd = (event: React.TouchEvent) => {
        const start = touchStartX.current;
        touchStartX.current = null;
        if (start == null) return;
        const end = event.changedTouches[0]?.clientX;
        if (end == null) return;
        const delta = end - start;
        if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return;
        if (delta < 0) goNext();
        else goPrev();
    };

    if (count === 0) return null;

    const active = slides[index];

    return (
        <div
            className="relative"
            aria-roledescription="carousel"
            aria-label="Impact gallery"
        >
            <div
                className={cn("relative overflow-hidden", CAROUSEL_HEIGHT)}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                {slides.map((slide, i) => (
                    <div
                        key={slide.src}
                        className={cn(
                            "absolute inset-0 transition-opacity duration-500 ease-out",
                            i === index
                                ? "z-[1] opacity-100"
                                : "z-0 opacity-0 pointer-events-none",
                        )}
                        aria-hidden={i !== index}
                    >
                        {i === index ? (
                            <div className="relative h-full w-full overflow-hidden bg-cnf-surface">
                                <CnfImage
                                    src={slide.src}
                                    alt={slide.alt}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className={coverImageTopClass}
                                    style={{ objectPosition: coverImageTopPosition }}
                                />
                            </div>
                        ) : null}
                    </div>
                ))}

                {count > 1 ? (
                    <>
                        <button
                            type="button"
                            onClick={goPrev}
                            className="absolute left-3 top-1/2 z-[10] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-cnf-primary shadow-md transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent"
                            aria-label="Previous image"
                        >
                            <HiChevronLeft className="h-5 w-5" aria-hidden />
                        </button>
                        <button
                            type="button"
                            onClick={goNext}
                            className="absolute right-3 top-1/2 z-[10] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-cnf-primary shadow-md transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent"
                            aria-label="Next image"
                        >
                            <HiChevronRight className="h-5 w-5" aria-hidden />
                        </button>
                    </>
                ) : null}
            </div>

            {count > 1 ? (
                <div className="mt-4 flex items-center justify-center gap-2" aria-hidden>
                    {slides.map((slide, i) => (
                        <button
                            key={slide.src}
                            type="button"
                            onClick={() => goTo(i)}
                            className={cn(
                                "h-1.5 rounded-full transition-all duration-300 ease-out",
                                i === index
                                    ? "w-8 bg-cnf-primary"
                                    : "w-1.5 bg-cnf-border hover:bg-cnf-primary/50",
                            )}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            ) : null}

            <p className="sr-only" aria-live="polite">
                {active.alt}. Image {index + 1} of {count}.
            </p>
        </div>
    );
}
