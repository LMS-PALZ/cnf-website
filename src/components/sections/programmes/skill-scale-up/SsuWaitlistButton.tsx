import { HiChevronRight } from "react-icons/hi2";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SSU_WAITLIST_HREF } from "@/data/programmes/skill-scale-up";
import { cn } from "@/lib/cn";

type Props = {
    className?: string;
    size?: "md" | "lg";
};

export function SsuWaitlistButton({ className, size = "lg" }: Props) {
    return (
        <ButtonLink
            href={SSU_WAITLIST_HREF}
            external
            variant="primary"
            size={size}
            className={cn("rounded-full px-8", className)}
            ariaLabel="Join the Skill Scale-Up Digital Cohort waitlist (opens Google Form in a new tab)"
        >
            Apply
            <HiChevronRight className="h-4 w-4" aria-hidden />
        </ButtonLink>
    );
}
