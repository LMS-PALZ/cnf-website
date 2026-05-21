import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";

type Props = {
    title: string;
    subtitle?: string;
    className?: string;
    titleClassName?: string;
    action?: ReactNode;
};

export function SsuSectionHeading({
    title,
    subtitle,
    className,
    titleClassName,
    action,
}: Props) {
    return (
        <div
            className={cn(
                "flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between",
                className,
            )}
        >
            <div className="border-l-4 border-cnf-accent pl-5">
                <h2
                    className={cn(
                        fontDisplay.className,
                        "text-2xl font-bold leading-tight text-cnf-ink md:text-3xl",
                        titleClassName,
                    )}
                >
                    {title}
                </h2>
                {subtitle ? (
                    <p className="mt-2 text-sm text-cnf-muted md:text-base">{subtitle}</p>
                ) : null}
            </div>
            {action ? <div className="shrink-0 sm:pt-1">{action}</div> : null}
        </div>
    );
}
