"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useNavigationLoading } from "@/components/providers/NavigationLoadingProvider";
import { NavSkeleton } from "@/components/skeletons/NavSkeleton";
import { NavMenuItem } from "@/components/site/NavMenuItem";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { mainNav, site } from "@/lib/site";

export function SiteHeader() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const { isNavigating, startNavigation } = useNavigationLoading();

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <header className="sticky top-0 z-40 w-full border-b border-cnf-border bg-white">
            <Container width="full" className="flex items-center justify-between gap-4 py-3">
                <Link
                    href="/"
                    className="flex min-w-0 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary"
                    onClick={() => {
                        if (pathname !== "/") {
                            startNavigation();
                        }
                    }}
                >
                    <span className="sr-only">{site.name}, home</span>
                    <Image
                        src="/assets/logo/logo-color.png"
                        alt={site.name}
                        width={340}
                        height={260}
                        className="h-[4.5rem] w-auto min-w-[13rem] max-w-[17rem] object-contain object-left sm:h-20 sm:min-w-[15rem] sm:max-w-[20rem]"
                        priority
                    />
                </Link>

                <nav
                    aria-label="Primary"
                    className="hidden flex-1 flex-wrap items-center justify-center gap-6 lg:flex"
                    aria-busy={isNavigating}
                >
                    {isNavigating ? (
                        <NavSkeleton count={mainNav.length} />
                    ) : (
                        mainNav.map((item) => (
                            <NavMenuItem
                                key={item.href}
                                item={item}
                                onNavigate={startNavigation}
                            />
                        ))
                    )}
                </nav>

                <div className="hidden shrink-0 items-center lg:flex">
                    <ButtonLink
                        href="/donate"
                        variant="accent"
                        onClick={() => {
                            if (pathname !== "/donate") {
                                startNavigation();
                            }
                        }}
                    >
                        Donate
                    </ButtonLink>
                </div>

                <div className="flex items-center gap-2 lg:hidden">
                    <ButtonLink
                        href="/donate"
                        variant="accent"
                        size="sm"
                        onClick={() => {
                            if (pathname !== "/donate") {
                                startNavigation();
                            }
                        }}
                    >
                        Donate
                    </ButtonLink>
                    <button
                        type="button"
                        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-cnf-border text-cnf-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary"
                        aria-expanded={open}
                        aria-controls="mobile-nav"
                        onClick={() => setOpen((v) => !v)}
                    >
                        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
                        <span aria-hidden className="text-lg">
                            {open ? "✕" : "☰"}
                        </span>
                    </button>
                </div>
            </Container>

            {open ? (
                <div className="border-t border-cnf-border bg-white lg:hidden" id="mobile-nav">
                    <Container width="full" as="div" className="py-3">
                        <nav aria-label="Mobile primary" className="flex flex-col" aria-busy={isNavigating}>
                            {isNavigating ? (
                                <NavSkeleton count={mainNav.length} stacked />
                            ) : (
                                mainNav.map((item) => (
                                    <NavMenuItem
                                        key={item.href}
                                        item={item}
                                        onNavigate={startNavigation}
                                        stacked
                                    />
                                ))
                            )}
                        </nav>
                    </Container>
                </div>
            ) : null}
        </header>
    );
}
