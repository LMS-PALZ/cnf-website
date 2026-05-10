import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";
type Tone = "default" | "elevated" | "primary" | "outlined" | "dark" | "dark-soft" | "cream";
type Padding = "none" | "sm" | "md" | "lg";
type Props = {
    children: ReactNode;
    tone?: Tone;
    padding?: Padding;
    className?: string;
    as?: ElementType;
    square?: boolean;
};
const toneStyles: Record<Tone, string> = {
    default: "bg-white border border-cnf-border",
    elevated: "bg-white border border-cnf-border shadow-sm",
    primary: "bg-cnf-primary text-white border border-cnf-primary",
    outlined: "bg-white border border-cnf-border",
    dark: "bg-cnf-night text-white border border-cnf-night-border",
    "dark-soft": "bg-cnf-night-soft text-white border border-cnf-night-border",
    cream: "bg-cnf-cream border border-cnf-border",
};
const paddingStyles: Record<Padding, string> = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8 md:p-10",
};
export function Card({ children, tone = "default", padding = "md", className, as: Tag = "div", square = false, }: Props) {
    return (<Tag className={cn(square ? "" : "rounded-xl", "overflow-hidden", toneStyles[tone], paddingStyles[padding], className)}>
      {children}
    </Tag>);
}
