import { cn } from "@/lib/cn";

type Tone = "skills" | "education" | "humanitarian" | "primary" | "neutral";
type Size = "sm" | "md" | "lg";

type Props = {
  name: string;
  /** Optional initials override. Defaults to first letter of each word in `name`. */
  initials?: string;
  tone?: Tone;
  size?: Size;
  className?: string;
};

const toneStyles: Record<Tone, string> = {
  skills: "bg-cnf-pillar-skills text-white",
  education: "bg-cnf-pillar-education text-white",
  humanitarian: "bg-cnf-pillar-humanitarian text-white",
  primary: "bg-cnf-primary text-white",
  neutral: "bg-cnf-surface text-cnf-ink",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
};

/** Small circular avatar showing initials. Use until real photos exist. */
export function Avatar({ name, initials, tone = "primary", size = "md", className }: Props) {
  const computed =
    initials ??
    name
      .split(/\s+/)
      .map((part) => part[0])
      .filter(Boolean)
      .slice(0, 2)
      .join("")
      .toUpperCase();

  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full font-semibold tracking-tight",
        toneStyles[tone],
        sizeStyles[size],
        className
      )}
    >
      {computed}
    </span>
  );
}
