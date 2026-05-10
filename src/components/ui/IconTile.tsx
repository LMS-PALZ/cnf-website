import { iconRegistry, type IconRegistryKey } from "./iconRegistry";
import { cn } from "@/lib/cn";
export type IconTileTone = "accent" | "primary" | "skills" | "education" | "humanitarian" | "muted";
const toneStyles: Record<IconTileTone, string> = {
    accent: "bg-cnf-accent/15 text-cnf-accent-hover",
    primary: "bg-cnf-primary/10 text-cnf-primary",
    skills: "bg-cnf-pillar-skills-soft text-cnf-pillar-skills",
    education: "bg-cnf-pillar-education-soft text-cnf-pillar-education",
    humanitarian: "bg-cnf-pillar-humanitarian-soft text-cnf-pillar-humanitarian",
    muted: "bg-cnf-surface text-cnf-muted",
};
const sizeStyles = {
    sm: "h-9 w-9 [&_svg]:h-4 [&_svg]:w-4",
    md: "h-11 w-11 [&_svg]:h-5 [&_svg]:w-5",
    lg: "h-12 w-12 [&_svg]:h-6 [&_svg]:w-6",
} as const;
type Props = {
    iconKey: IconRegistryKey;
    tone?: IconTileTone;
    size?: keyof typeof sizeStyles;
    circle?: boolean;
    className?: string;
};
export function IconTile({ iconKey, tone = "accent", size = "md", circle = false, className, }: Props) {
    const Icon = iconRegistry[iconKey];
    return (<span className={cn("inline-flex shrink-0 items-center justify-center", circle ? "rounded-full" : "rounded-lg", toneStyles[tone], sizeStyles[size], className)} aria-hidden>
      <Icon />
    </span>);
}
