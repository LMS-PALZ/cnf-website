import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
export type BadgeTone =
    | "neutral"
    | "primary"
    | "skills"
    | "education"
    | "humanitarian"
    | "accent-on-dark";

type Tone = BadgeTone;
type Props = {
    children: ReactNode;
    tone?: Tone;
    className?: string;
};
const toneStyles: Record<Tone, string> = {
    neutral: "bg-cnf-surface text-cnf-ink",
    primary: "bg-cnf-primary text-white",
    skills: "bg-cnf-pillar-skills text-cnf-accent-ink",
    education: "bg-cnf-pillar-education text-white",
    humanitarian: "bg-cnf-pillar-humanitarian text-white",
    "accent-on-dark": "bg-cnf-accent/15 text-cnf-accent",
};
export function Badge({ children, tone = "neutral", className }: Props) {
    return (<span className={cn("inline-flex items-center rounded-md px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em]", toneStyles[tone], className)}>
      {children}
    </span>);
}
