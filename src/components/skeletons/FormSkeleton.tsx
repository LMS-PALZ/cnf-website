import { cn } from "@/lib/cn";
import { Skeleton } from "@/components/ui/Skeleton";
import { FormFieldSkeleton } from "./FormFieldSkeleton";

type FieldType = "input" | "textarea" | "select";

type Props = {
    fields: FieldType[];
    className?: string;
    showSubmit?: boolean;
    submitFullWidth?: boolean;
};

export function FormSkeleton({
    fields,
    className,
    showSubmit = true,
    submitFullWidth = true,
}: Props) {
    return (
        <div className={cn("space-y-5", className)} aria-hidden>
            {fields.map((type, i) => (
                <FormFieldSkeleton key={i} type={type} />
            ))}
            {showSubmit ? (
                <Skeleton
                    variant="button"
                    announce={false}
                    itemClassName={submitFullWidth ? "h-11 w-full" : undefined}
                />
            ) : null}
        </div>
    );
}
