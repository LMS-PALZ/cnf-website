import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";
type Tone = "dark" | "light" | "primary" | "accent-on-dark" | "white";
type Size = "sm" | "md" | "lg";
type Props = {
    value: string;
    label: string;
    tone?: Tone;
    size?: Size;
    className?: string;
};
const valueTone: Record<Tone, string> = {
    dark: "text-cnf-accent",
    light: "text-cnf-primary",
    primary: "text-white",
    "accent-on-dark": "text-cnf-accent",
    white: "text-white",
};
const labelTone: Record<Tone, string> = {
    dark: "text-white/55",
    light: "text-cnf-muted",
    primary: "text-white/70",
    "accent-on-dark": "text-white/70",
    white: "text-white",
};
const sizeStyles: Record<Size, string> = {
    sm: "text-3xl md:text-4xl",
    md: "text-4xl md:text-5xl",
    lg: "text-5xl md:text-6xl",
};
export function Stat({ value, label, tone = "light", size = "md", className }: Props) {
    return (<div className={cn("flex flex-col gap-2", className)}>
      <span className={cn(fontDisplay.className, "font-semibold leading-none", sizeStyles[size], valueTone[tone])}>
        {value}
      </span>
      <span className={cn("text-[11px] font-semibold uppercase tracking-[0.18em]", labelTone[tone])}>
        {label}
      </span>
    </div>);
}
