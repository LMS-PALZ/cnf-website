import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
    children: ReactNode;
    className?: string;
    as?: "div" | "section" | "article";
    /** `full` = edge-to-edge shell (header/footer); `content` = capped page column */
    width?: "content" | "full";
};

const widthStyles = {
    content: "mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16",
    full: "w-full px-6 sm:px-8 lg:px-12 xl:px-16",
} as const;

export function Container({
    children,
    className = "",
    as: Tag = "div",
    width = "content",
}: Props) {
    return (
        <Tag className={cn(widthStyles[width], className)}>{children}</Tag>
    );
}
