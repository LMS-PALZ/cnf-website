import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";
type Tone = "light" | "dark";
type AccentColor = "primary" | "accent";
type Align = "left" | "center";
type Props = {
    eyebrow?: string;
    title: ReactNode;
    titleAccent?: ReactNode;
    description?: ReactNode;
    as?: "h1" | "h2" | "h3";
    tone?: Tone;
    align?: Align;
    accent?: AccentColor;
    className?: string;
    id?: string;
    descriptionClassName?: string;
    eyebrowClassName?: string;
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
export function SectionHeader({ eyebrow, title, titleAccent, description, as: Tag = "h2", tone = "light", align = "left", accent = "primary", className, id, descriptionClassName, eyebrowClassName, }: Props) {
    return (<header className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.2em]",
            eyebrowToneByAccent[tone][accent],
            eyebrowClassName,
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag id={id} className={cn(fontDisplay.className, "mt-3 text-3xl font-semibold leading-[1.1] md:text-5xl", titleToneStyles[tone])}>
        {title}
        {titleAccent ? (<>
            <br />
            <span className={accentColor[accent]}>{titleAccent}</span>
          </>) : null}
      </Tag>
      {description ? (<p className={cn("mt-5 text-base leading-relaxed md:text-lg", descriptionToneStyles[tone], descriptionClassName)}>
          {description}
        </p>) : null}
    </header>);
}
