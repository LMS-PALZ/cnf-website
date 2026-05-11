import { cn } from "@/lib/cn";

type Tone = "dark-on-primary" | "light" | "muted";

type Props = {
    label?: string;
    aspect?: string;
    tone?: Tone;
    className?: string;
};

const toneStyles: Record<Tone, string> = {
    "dark-on-primary": "border-white/25 text-white/70",
    light: "border-cnf-border text-cnf-muted",
    muted: "border-cnf-border/80 text-cnf-muted/80",
};

export function ImagePlaceholder({ label = "Image placeholder", aspect, tone = "dark-on-primary", className, }: Props) {
    return (<div className={cn("flex w-full flex-col items-center justify-center gap-3 px-6 py-8 text-center", aspect, className)} role="img" aria-label={label}>
      <div className={cn("h-14 w-20 rounded-lg border-2 border-dashed", toneStyles[tone])} aria-hidden/>
      <p className="text-sm font-medium">{label}</p>
    </div>);
}
