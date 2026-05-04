import { cn } from "@/lib/cn";

type Props = {
  /** Rating out of 5. Defaults to 5. */
  value?: number;
  /** Total number of stars rendered. */
  outOf?: number;
  className?: string;
  /** Accessible label override (defaults to "Rated X out of Y stars"). */
  ariaLabel?: string;
};

/**
 * Five-star rating (defaults to all gold) used in testimonial cards.
 * Pass a fractional `value` to render partially-filled stars.
 */
export function StarRating({
  value = 5,
  outOf = 5,
  className,
  ariaLabel,
}: Props) {
  const stars = Array.from({ length: outOf });

  return (
    <span
      role="img"
      aria-label={ariaLabel ?? `Rated ${value} out of ${outOf} stars`}
      className={cn("inline-flex items-center gap-0.5 text-cnf-star", className)}
    >
      {stars.map((_, i) => {
        const fill = Math.min(Math.max(value - i, 0), 1);
        return (
          <Star key={i} fill={fill} />
        );
      })}
    </span>
  );
}

function Star({ fill }: { fill: number }) {
  const id = `cnf-star-${Math.random().toString(36).slice(2, 9)}`;
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      className="h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
          <stop offset={`${fill * 100}%`} stopColor="currentColor" />
          <stop offset={`${fill * 100}%`} stopColor="rgba(0,0,0,0.12)" />
        </linearGradient>
      </defs>
      <path
        d="M10 1.5l2.6 5.27 5.82.84-4.21 4.1.99 5.79L10 14.77l-5.2 2.73.99-5.79-4.21-4.1 5.82-.84L10 1.5z"
        fill={`url(#${id})`}
      />
    </svg>
  );
}
