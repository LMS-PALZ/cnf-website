"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { cn } from "@/lib/cn";

export type LightboxSlide = {
    src: string;
    alt: string;
};

type Props = {
    slides: LightboxSlide[];
    index: number;
    open: boolean;
    onClose: () => void;
    onIndexChange?: (index: number) => void;
};

export function ImageLightbox({
    slides,
    index,
    open,
    onClose,
    onIndexChange,
}: Props) {
    const count = slides.length;
    const active = slides[index] ?? slides[0];
    const hasNav = count > 1 && onIndexChange;

    const goPrev = useCallback(() => {
        if (!onIndexChange || count === 0) return;
        onIndexChange((index - 1 + count) % count);
    }, [count, index, onIndexChange]);

    const goNext = useCallback(() => {
        if (!onIndexChange || count === 0) return;
        onIndexChange((index + 1) % count);
    }, [count, index, onIndexChange]);

    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
            if (event.key === "ArrowLeft") goPrev();
            if (event.key === "ArrowRight") goNext();
        },
        [onClose, goPrev, goNext],
    );

    useEffect(() => {
        if (!open) return;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [open, handleKeyDown]);

    if (!open || !active) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
        >
            <button
                type="button"
                className="absolute inset-0 bg-cnf-ink/92 backdrop-blur-md cnf-lightbox-backdrop"
                onClick={onClose}
                aria-label="Close image preview"
            />

            <button
                type="button"
                onClick={onClose}
                className={cn(
                    "absolute right-4 top-4 z-[3] flex h-12 w-12 items-center justify-center rounded-full",
                    "bg-white/12 text-white ring-1 ring-white/25 transition-colors",
                    "hover:bg-white/22 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent",
                    "sm:right-6 sm:top-6",
                )}
                aria-label="Close preview"
            >
                <IoClose className="h-7 w-7" aria-hidden />
            </button>

            {hasNav ? (
                <>
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            goPrev();
                        }}
                        className="absolute left-3 top-1/2 z-[3] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/12 text-white ring-1 ring-white/20 transition hover:bg-white/22 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent sm:left-6"
                        aria-label="Previous image"
                    >
                        <HiChevronLeft className="h-7 w-7" aria-hidden />
                    </button>
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            goNext();
                        }}
                        className="absolute right-3 top-1/2 z-[3] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/12 text-white ring-1 ring-white/20 transition hover:bg-white/22 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent sm:right-6"
                        aria-label="Next image"
                    >
                        <HiChevronRight className="h-7 w-7" aria-hidden />
                    </button>
                </>
            ) : null}

            <div
                className="relative z-[2] flex min-h-0 flex-1 items-center justify-center px-4 pb-6 pt-16 sm:px-10 sm:pb-10 sm:pt-20"
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    key={active.src}
                    className="relative h-[min(90dvh,1100px)] w-full max-w-[min(98vw,1600px)] cnf-lightbox-image"
                >
                    <Image
                        src={active.src}
                        alt={active.alt}
                        fill
                        sizes="96vw"
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            {count > 1 ? (
                <p className="relative z-[2] pb-5 text-center text-sm font-medium text-white/70">
                    {index + 1} / {count}
                </p>
            ) : null}
        </div>
    );
}
