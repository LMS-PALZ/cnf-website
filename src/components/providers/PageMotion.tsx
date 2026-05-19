"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Staggered slide-in for top-level page sections on route change. */
export function PageMotion() {
    const pathname = usePathname();

    useEffect(() => {
        const main = document.getElementById("main-content");
        if (!main) return;

        const sections = main.querySelectorAll<HTMLElement>(":scope > section");

        sections.forEach((section, i) => {
            if (section.dataset.cnfSkipEnter === "true") return;

            const delayMs = Math.min(i * 70, 420) + 900;

            section.classList.remove("cnf-section-enter", "cnf-section-enter-active");
            section.style.removeProperty("pointer-events");
            section.style.setProperty("--cnf-enter-delay", `${Math.min(i * 0.07, 0.42)}s`);

            requestAnimationFrame(() => {
                section.classList.add("cnf-section-enter");
                requestAnimationFrame(() => {
                    section.classList.add("cnf-section-enter-active");
                });
            });

            // Ensure sections stay clickable if animation does not run (e.g. reduced motion edge cases).
            window.setTimeout(() => {
                section.classList.add("cnf-section-enter-active");
                section.style.pointerEvents = "auto";
            }, delayMs);
        });
    }, [pathname]);

    return null;
}
