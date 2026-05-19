"use client";

import { CnfImage } from "@/components/ui/CnfImage";
import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type Props = {
    src: string;
    alt: string;
    className?: string;
    /** Zoom level when exploring (2.5 = 250%). */
    zoom?: number;
    onExploreChange?: (exploring: boolean) => void;
};

function clampPercent(value: number) {
    return Math.min(100, Math.max(0, value));
}

export function ImageMagnifier({
    src,
    alt,
    className,
    zoom = 2.5,
    onExploreChange,
}: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [exploring, setExploring] = useState(false);
    const [origin, setOrigin] = useState({ x: 50, y: 50 });

    const setExploringState = useCallback(
        (value: boolean) => {
            setExploring(value);
            onExploreChange?.(value);
        },
        [onExploreChange],
    );

    const updateFromPoint = useCallback((clientX: number, clientY: number) => {
        const el = containerRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = clampPercent(((clientX - rect.left) / rect.width) * 100);
        const y = clampPercent(((clientY - rect.top) / rect.height) * 100);
        setOrigin({ x, y });
    }, []);

    const onMouseMove = (event: React.MouseEvent) => {
        updateFromPoint(event.clientX, event.clientY);
    };

    const onTouchMove = (event: React.TouchEvent) => {
        const touch = event.touches[0];
        if (!touch) return;
        updateFromPoint(touch.clientX, touch.clientY);
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative h-full w-full overflow-hidden rounded-xl shadow-lg ring-1 ring-cnf-border",
                exploring ? "cursor-crosshair" : "cursor-zoom-in",
                className,
            )}
            onMouseEnter={() => setExploringState(true)}
            onMouseLeave={() => setExploringState(false)}
            onMouseMove={onMouseMove}
            onTouchStart={(e) => {
                setExploringState(true);
                const touch = e.touches[0];
                if (touch) updateFromPoint(touch.clientX, touch.clientY);
            }}
            onTouchEnd={() => setExploringState(false)}
            onTouchMove={onTouchMove}
        >
            <CnfImage
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-100 ease-out will-change-transform"
                style={
                    exploring
                        ? {
                              transformOrigin: `${origin.x}% ${origin.y}%`,
                              transform: `scale(${zoom})`,
                          }
                        : undefined
                }
                draggable={false}
            />

            <span
                className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] flex justify-center bg-gradient-to-t from-cnf-ink/45 to-transparent py-2.5 text-[11px] font-medium tracking-wide text-white/90"
                aria-hidden
            >
                {exploring ? "Move to explore" : "Hover to explore"}
            </span>
        </div>
    );
}
