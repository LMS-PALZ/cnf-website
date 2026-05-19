import { cn } from "@/lib/cn";

export type SkeletonVariant =
    | "text"
    | "title"
    | "paragraph"
    | "card"
    | "avatar"
    | "image"
    | "stat"
    | "input"
    | "textarea"
    | "select"
    | "button"
    | "badge"
    | "eyebrow"
    | "banner";

type Props = {
    count?: number;
    variant?: SkeletonVariant;
    className?: string;
    itemClassName?: string;
    /** When false, omit the live region (use on nested skeleton blocks). */
    announce?: boolean;
};

const baseItem = "cnf-skeleton block";

const variantStyles: Record<SkeletonVariant, string> = {
    text: "h-3 w-full",
    title: "h-7 w-2/3",
    paragraph: "h-3 w-full",
    card: "h-44 w-full rounded-xl",
    avatar: "h-10 w-10 rounded-full",
    image: "aspect-[16/10] w-full rounded-xl",
    stat: "h-20 w-full rounded-xl",
    input: "h-11 w-full rounded-md",
    textarea: "h-24 w-full rounded-md",
    select: "h-11 w-full rounded-md",
    button: "h-11 w-32 rounded-md",
    badge: "h-6 w-20 rounded-full",
    eyebrow: "h-3 w-24",
    banner:
        "min-h-[22rem] w-full rounded-none sm:min-h-[24rem] lg:min-h-[26rem]",
};

export function Skeleton({
    count = 1,
    variant = "text",
    className,
    itemClassName,
    announce = true,
}: Props) {
    const items = Array.from({ length: Math.max(1, count) });

    return (
        <div
            role={announce ? "status" : undefined}
            aria-busy={announce ? true : undefined}
            aria-live={announce ? "polite" : undefined}
            aria-hidden={announce ? undefined : true}
            className={cn("flex flex-col gap-3", className)}
        >
            {announce ? <span className="sr-only">Loading…</span> : null}
            {items.map((_, i) => (
                <span
                    key={i}
                    aria-hidden
                    className={cn(baseItem, variantStyles[variant], itemClassName)}
                />
            ))}
        </div>
    );
}
