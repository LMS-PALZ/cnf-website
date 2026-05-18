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

            section.classList.remove("cnf-section-enter", "cnf-section-enter-active");
            section.style.setProperty("--cnf-enter-delay", `${Math.min(i * 0.07, 0.42)}s`);

            requestAnimationFrame(() => {
                section.classList.add("cnf-section-enter");
                requestAnimationFrame(() => {
                    section.classList.add("cnf-section-enter-active");
                });
            });
        });
    }, [pathname]);

    return null;
}
