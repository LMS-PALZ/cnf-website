"use client";

import type { ElementType, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type Direction = "up" | "left" | "right" | "none";

type Props = {
    children: ReactNode;
    className?: string;
    delay?: 0 | 1 | 2 | 3 | 4 | 5;
    direction?: Direction;
    as?: ElementType;
};

const directionClass: Record<Direction, string> = {
    up: "cnf-reveal-up",
    left: "cnf-reveal-left",
    right: "cnf-reveal-right",
    none: "cnf-reveal-fade",
};

function isInViewport(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
}

export function Reveal({
    children,
    className,
    delay = 0,
    direction = "up",
    as: Tag = "div",
}: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const show = () => setVisible(true);

        if (isInViewport(el)) {
            const id = requestAnimationFrame(show);
            return () => cancelAnimationFrame(id);
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    show();
                    observer.disconnect();
                }
            },
            { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <Tag
            ref={ref}
            className={cn(
                "cnf-reveal",
                directionClass[direction],
                delay > 0 && `cnf-reveal-delay-${delay}`,
                visible && "cnf-reveal-visible",
                className,
            )}
        >
            {children}
        </Tag>
    );
}
