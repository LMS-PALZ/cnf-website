import { cn } from "@/lib/cn";

type Variant = "text" | "title" | "paragraph" | "card" | "avatar" | "image" | "stat";

type Props = {
  /** How many placeholder rows/items to render. Defaults to 1. */
  count?: number;
  /** Visual shape of each placeholder item. */
  variant?: Variant;
  /** Optional override for the wrapper. */
  className?: string;
  /** Optional override for each item. */
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

/**
 * Modular loading placeholder. Pass `count` to render N items of the same
 * shape (handy for lists or stat grids while data is fetching).
 *
 * @example
 *   <Skeleton variant="paragraph" count={4} />
 *   <Skeleton variant="card" count={3} className="grid gap-6 md:grid-cols-3" />
 */
export function Skeleton({ count = 1, variant = "text", className, itemClassName }: Props) {
  const items = Array.from({ length: Math.max(1, count) });

  return (
    <div
      role="status"
      aria-busy="true"
      aria-live="polite"
      className={cn("flex flex-col gap-3", className)}
    >
      <span className="sr-only">Loading…</span>
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
