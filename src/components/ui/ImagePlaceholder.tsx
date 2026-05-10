import { cn } from "@/lib/cn";
type Tone = "dark-on-primary" | "light" | "muted";
type Props = {
    label?: string;
    aspect?: string;
    tone?: Tone;
    className?: string;
};
const toneStyles: Record<Tone, string> = {
    "dark-on-primary": "text-white/70",
    light: "text-cnf-muted",
    muted: "text-cnf-muted/80",
};
export function ImagePlaceholder({ label = "Image placeholder", aspect, tone = "dark-on-primary", className, }: Props) {
    return (<div className={cn("flex w-full flex-col items-center justify-center gap-3 px-6 text-center", aspect, toneStyles[tone], className)} role="img" aria-label={label}>
      <svg aria-hidden viewBox="0 0 64 64" className="h-14 w-14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="16" width="52" height="38" rx="4" stroke="currentColor" strokeWidth="2.5" opacity="0.6"/>
        <path d="M22 16l4-6h12l4 6" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" opacity="0.6"/>
        <circle cx="32" cy="35" r="9" stroke="currentColor" strokeWidth="2.5" opacity="0.6"/>
        <circle cx="32" cy="35" r="3.5" fill="currentColor" opacity="0.5"/>
        <path d="M48 22l3-3M52 17l3-6M50 14l5 1" className="text-cnf-accent-light" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
      <p className="text-sm font-medium">{label}</p>
    </div>);
}
