import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "accent";

const variants: Record<Variant, string> = {
  primary:
    "bg-cnf-primary text-white hover:bg-cnf-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent",
  accent:
    "bg-cnf-accent text-cnf-accent-ink hover:bg-cnf-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
  secondary:
    "border border-cnf-primary/25 bg-white text-cnf-primary hover:border-cnf-primary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary",
  ghost:
    "text-cnf-primary hover:bg-cnf-primary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary",
};

type Base = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

type LinkProps = Base & {
  href: string;
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  className = "",
  variant = "primary",
  external,
}: LinkProps) {
  const cls = `inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-base font-semibold transition-colors ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a className={cls} href={href} rel="noopener noreferrer" target="_blank">
        {children}
      </a>
    );
  }

  return (
    <Link className={cls} href={href}>
      {children}
    </Link>
  );
}
