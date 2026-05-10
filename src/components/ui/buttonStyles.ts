export type ButtonVariant = "primary" | "secondary" | "ghost" | "accent" | "dark-outline" | "dark-solid";
export type ButtonSize = "sm" | "md" | "lg";
export const buttonBase = "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
export const buttonVariants: Record<ButtonVariant, string> = {
    primary: "bg-cnf-primary-light text-white hover:bg-cnf-primary focus-visible:outline-cnf-accent",
    accent: "bg-cnf-accent text-cnf-accent-ink hover:bg-cnf-accent-hover focus-visible:outline-white",
    secondary: "border border-cnf-primary/25 bg-white text-cnf-primary hover:border-cnf-primary/50 focus-visible:outline-cnf-primary",
    ghost: "text-cnf-primary hover:bg-cnf-primary/5 focus-visible:outline-cnf-primary",
    "dark-outline": "border border-white/25 bg-transparent text-white hover:bg-white/10 focus-visible:outline-cnf-accent",
    "dark-solid": "bg-cnf-primary-light text-white hover:bg-cnf-primary focus-visible:outline-cnf-accent",
};
export const buttonSizes: Record<ButtonSize, string> = {
    sm: "min-h-9 px-3.5 py-2 text-sm",
    md: "min-h-11 px-5 py-2.5 text-base",
    lg: "min-h-12 px-6 py-3 text-base md:text-lg",
};
