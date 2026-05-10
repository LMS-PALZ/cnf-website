import { cn } from "@/lib/cn";
type Variant = "text" | "title" | "paragraph" | "card" | "avatar" | "image" | "stat";
type Props = {
    count?: number;
    variant?: Variant;
    className?: string;
    itemClassName?: string;
};
const baseItem = "cnf-skeleton rounded-md";
const variantStyles: Record<Variant, string> = {
    text: "h-3 w-full",
    title: "h-7 w-2/3",
    paragraph: "h-3 w-full",
    card: "h-44 w-full rounded-xl",
    avatar: "h-10 w-10 rounded-full",
    image: "aspect-[16/10] w-full rounded-xl",
    stat: "h-20 w-full rounded-xl",
};
export function Skeleton({ count = 1, variant = "text", className, itemClassName }: Props) {
    const items = Array.from({ length: Math.max(1, count) });
    return (<div role="status" aria-busy="true" aria-live="polite" className={cn("flex flex-col gap-3", className)}>
      <span className="sr-only">Loading…</span>
      {items.map((_, i) => (<span key={i} aria-hidden className={cn(baseItem, variantStyles[variant], itemClassName)}/>))}
    </div>);
}
