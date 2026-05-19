import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { buttonBase, buttonSizes, buttonVariants, type ButtonSize, type ButtonVariant, } from "./buttonStyles";
type Base = {
    children: ReactNode;
    className?: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
};
type LinkProps = Base & {
    href: string;
    external?: boolean;
    ariaLabel?: string;
    onClick?: () => void;
};
export function ButtonLink({ href, children, className, variant = "primary", size = "md", external, ariaLabel, onClick, }: LinkProps) {
    const cls = cn(buttonBase, buttonVariants[variant], buttonSizes[size], className);
    if (external) {
        return (<a aria-label={ariaLabel} className={cls} href={href} rel="noopener noreferrer" target="_blank">
        {children}
      </a>);
    }
    return (<Link aria-label={ariaLabel} className={cls} href={href} onClick={onClick}>
      {children}
    </Link>);
}
