import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";

type Tone = "light" | "dark";
type AccentColor = "primary" | "accent";
type Align = "left" | "center";

type Props = {
  /** Small uppercase label above the headline (e.g. "OUR WORK"). */
  eyebrow?: string;
  /** Main heading text. Will be rendered as the supplied `as` tag. */
  title: ReactNode;
  /** Secondary heading line shown below `title` and emphasised in the accent color. */
  titleAccent?: ReactNode;
  /** Optional intro paragraph below the heading. */
  description?: ReactNode;
  /** Where the heading lives in the document outline. Defaults to `h2`. */
  as?: "h1" | "h2" | "h3";
  tone?: Tone;
  align?: Align;
  /** Accent colour for `titleAccent` and the eyebrow. */
  accent?: AccentColor;
  className?: string;
  id?: string;
  /** Optional max-width override for the description (defaults to ~prose width). */
  descriptionClassName?: string;
};

const eyebrowToneByAccent: Record<Tone, Record<AccentColor, string>> = {
  light: {
    primary: "text-cnf-primary",
    accent: "text-cnf-accent-hover",
  },
  dark: {
    primary: "text-cnf-accent",
    accent: "text-cnf-accent",
  },
};

const titleToneStyles: Record<Tone, string> = {
  light: "text-cnf-ink",
  dark: "text-white",
};

const descriptionToneStyles: Record<Tone, string> = {
  light: "text-cnf-muted",
  dark: "text-white/70",
};

const accentColor: Record<AccentColor, string> = {
  primary: "text-cnf-primary",
  accent: "text-cnf-accent",
};

/**
 * The "eyebrow → headline → accent line → description" pattern that repeats
 * across the home page. Consolidates spacing and brand colours so each
 * section composes the same shape.
 */
export function SectionHeader({
  eyebrow,
  title,
  titleAccent,
  description,
  as: Tag = "h2",
  tone = "light",
  align = "left",
  accent = "primary",
  className,
  id,
  descriptionClassName,
}: Props) {
  return (
    <header
      className={cn(
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.2em]",
            eyebrowToneByAccent[tone][accent]
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        id={id}
        className={cn(
          fontDisplay.className,
          "mt-3 text-3xl font-semibold leading-[1.1] md:text-5xl",
          titleToneStyles[tone]
        )}
      >
        {title}
        {titleAccent ? (
          <>
            <br />
            <span className={accentColor[accent]}>{titleAccent}</span>
          </>
        ) : null}
      </Tag>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-lg",
            descriptionToneStyles[tone],
            descriptionClassName
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
