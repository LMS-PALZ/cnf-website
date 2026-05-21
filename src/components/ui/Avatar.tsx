import Image from "next/image";
import { cn } from "@/lib/cn";

type Tone = "skills" | "education" | "humanitarian" | "primary" | "neutral";
type Size = "sm" | "md" | "lg";
type Props = {
    name: string;
    initials?: string;
    /** When set, shows a round photo instead of initials. */
    src?: string;
    alt?: string;
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
export function Avatar({
    name,
    initials,
    src,
    alt,
    tone = "primary",
    size = "md",
    className,
}: Props) {
    if (src) {
        return (
            <span
                className={cn(
                    "relative inline-block shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-sm",
                    sizeStyles[size],
                    className,
                )}
            >
                <Image
                    src={src}
                    alt={alt ?? name}
                    fill
                    sizes="80px"
                    className="object-cover object-center"
                />
            </span>
        );
    }

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
                className,
            )}
        >
            {computed}
        </span>
    );
}
