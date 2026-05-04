import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type Tone = "light" | "surface" | "cream" | "dark" | "primary";
type Padding = "none" | "sm" | "md" | "lg";

type Props = {
  children: ReactNode;
  /** Visual tone — drives background + default text color. */
  tone?: Tone;
  /** Vertical padding scale. `lg` matches the artifact section spacing. */
  padding?: Padding;
  /** Override container width (defaults to max-w-6xl). */
  containerClassName?: string;
  /** Disable the inner Container if you need a full-bleed child layout. */
  bleed?: boolean;
  /** Optional id for in-page anchors. */
  id?: string;
  ariaLabelledBy?: string;
  ariaLabel?: string;
  className?: string;
  as?: ElementType;
};

const toneStyles: Record<Tone, string> = {
  light: "bg-white text-cnf-ink",
  surface: "bg-cnf-surface text-cnf-ink",
  cream: "bg-cnf-cream text-cnf-ink",
  dark: "bg-cnf-night text-white",
  primary: "bg-cnf-primary text-white",
};

const paddingStyles: Record<Padding, string> = {
  none: "",
  sm: "py-10 md:py-12",
  md: "py-14 md:py-20",
  lg: "py-16 md:py-24",
};

/**
 * Page section wrapper. Provides consistent vertical rhythm and a tone-aware
 * background. Wraps children in a `Container` unless `bleed` is set.
 */
export function Section({
  children,
  tone = "light",
  padding = "lg",
  containerClassName,
  bleed = false,
  id,
  ariaLabelledBy,
  ariaLabel,
  className,
  as: Tag = "section",
}: Props) {
  return (
    <Tag
      id={id}
      aria-labelledby={ariaLabelledBy}
      aria-label={ariaLabel}
      className={cn(toneStyles[tone], paddingStyles[padding], className)}
    >
      {bleed ? children : <Container className={containerClassName}>{children}</Container>}
    </Tag>
  );
}
