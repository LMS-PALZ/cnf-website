import { cn } from "@/lib/cn";

type Props = {
    value?: number;
    outOf?: number;
    className?: string;
    ariaLabel?: string;
};

export function StarRating({ value = 5, outOf = 5, className, ariaLabel, }: Props) {
    return (<span role="img" aria-label={ariaLabel ?? `Rated ${value} out of ${outOf}`} className={cn("inline-block text-sm font-semibold tabular-nums text-cnf-star", className)}>
      {value}/{outOf}
    </span>);
}
