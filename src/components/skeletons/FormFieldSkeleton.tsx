import { cn } from "@/lib/cn";
import { Skeleton, type SkeletonVariant } from "@/components/ui/Skeleton";

type FieldType = "input" | "textarea" | "select";

type Props = {
    type?: FieldType;
    className?: string;
};

const fieldVariant: Record<FieldType, SkeletonVariant> = {
    input: "input",
    textarea: "textarea",
    select: "select",
};

export function FormFieldSkeleton({ type = "input", className }: Props) {
    return (
        <div className={cn("space-y-2", className)} aria-hidden>
            <Skeleton variant="text" announce={false} itemClassName="h-3.5 w-28" />
            <Skeleton variant={fieldVariant[type]} announce={false} />
        </div>
    );
}
