"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import type { NavItem } from "@/lib/site";

function isNavItemActive(pathname: string, item: NavItem) {
    if (item.children?.length) {
        return pathname === item.href || pathname.startsWith(`${item.href}/`);
    }
    return pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
}

type Props = {
    item: NavItem;
    onNavigate: () => void;
    stacked?: boolean;
};

const navLinkClass =
    "rounded-md px-2.5 py-2 text-base font-medium tracking-tight transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary lg:text-lg";

export function NavMenuItem({ item, onNavigate, stacked = false }: Props) {
    const pathname = usePathname();
    const active = isNavItemActive(pathname, item);

    const linkClass = cn(
        navLinkClass,
        active ? "text-cnf-primary" : "text-cnf-muted hover:text-cnf-primary",
        stacked && "block w-full text-left",
    );

    if (!item.children?.length) {
        return (
            <Link
                className={linkClass}
                href={item.href}
                onClick={() => {
                    if (item.href !== pathname) {
                        onNavigate();
                    }
                }}
            >
                {item.label}
            </Link>
        );
    }

    if (stacked) {
        return (
            <div className="border-b border-cnf-border/80 py-1 last:border-b-0">
                <span
                    className={cn(
                        "block px-2.5 py-2 text-xs font-bold uppercase tracking-[0.18em]",
                        active ? "text-cnf-primary" : "text-cnf-muted",
                    )}
                >
                    {item.label}
                </span>
                <ul className="pb-2 pl-2">
                    {item.children.map((child) => {
                        const childActive =
                            pathname === child.href ||
                            pathname.startsWith(`${child.href}/`);
                        return (
                            <li key={child.href}>
                                <Link
                                    href={child.href}
                                    className={cn(
                                        navLinkClass,
                                        "block",
                                        childActive
                                            ? "text-cnf-primary"
                                            : "text-cnf-muted hover:text-cnf-primary",
                                    )}
                                    onClick={() => {
                                        if (child.href !== pathname) {
                                            onNavigate();
                                        }
                                    }}
                                >
                                    {child.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }

    return (
        <div className="group relative">
            <span
                className={cn(
                    "inline-block cursor-default",
                    linkClass,
                )}
            >
                {item.label}
            </span>

            <ul
                className={cn(
                    "pointer-events-none absolute left-0 top-full z-50 min-w-[11rem] rounded-lg border border-cnf-border bg-white py-1 shadow-lg",
                    "opacity-0 transition-opacity duration-150",
                    "group-hover:pointer-events-auto group-hover:opacity-100",
                    "group-focus-within:pointer-events-auto group-focus-within:opacity-100",
                )}
            >
                {item.children.map((child) => {
                    const childActive = pathname === child.href;
                    return (
                        <li key={child.href}>
                            <Link
                                href={child.href}
                                className={cn(
                                    "block px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-cnf-primary",
                                    childActive
                                        ? "bg-cnf-primary-soft text-cnf-primary"
                                        : "text-cnf-ink hover:bg-cnf-surface",
                                )}
                                onClick={() => {
                                    if (child.href !== pathname) {
                                        onNavigate();
                                    }
                                }}
                            >
                                {child.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
