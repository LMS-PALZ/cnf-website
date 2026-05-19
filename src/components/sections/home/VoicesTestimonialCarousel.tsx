"use client";

import type { CSSProperties } from "react";
import { TestimonialCard } from "@/components/sections/home/TestimonialCard";
import type { Testimonial } from "@/data/home/testimonials";
import { cn } from "@/lib/cn";

const CARD_WIDTH =
    "w-[min(88vw,20rem)] sm:w-72 lg:w-[calc((min(80rem,100vw)-4.5rem)/3.2)]";

type Props = {
    testimonials: Testimonial[];
};

export function VoicesTestimonialCarousel({ testimonials }: Props) {
    const count = testimonials.length;

    if (count === 0) return null;

    const loopItems = count > 1 ? [...testimonials, ...testimonials] : testimonials;
    const marqueeDuration = `${Math.max(count * 8, 35)}s`;

    return (
        <div
            className="mt-10"
            aria-roledescription="marquee"
            aria-label="Voices and testimonials"
        >
            <div
                className={cn(
                    "overflow-hidden",
                    "motion-reduce:overflow-x-auto motion-reduce:overscroll-x-contain",
                )}
            >
                <div
                    className={cn(
                        "flex w-max items-stretch gap-6",
                        count > 1 && "cnf-voices-marquee-track",
                        "motion-reduce:w-auto motion-reduce:flex-nowrap",
                    )}
                    style={
                        count > 1
                            ? ({
                                  "--cnf-voices-marquee-duration": marqueeDuration,
                              } as CSSProperties)
                            : undefined
                    }
                >
                    {loopItems.map((testimonial, index) => (
                        <div
                            key={`${testimonial.id}-${index}`}
                            className={cn("flex shrink-0", CARD_WIDTH)}
                        >
                            <TestimonialCard testimonial={testimonial} />
                        </div>
                    ))}
                </div>
            </div>

            {count > 1 ? (
                <p className="sr-only">
                    Testimonials scroll slowly from right to left. Hover to pause
                    and read.
                </p>
            ) : null}
        </div>
    );
}
