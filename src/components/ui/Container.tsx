import type { ReactNode } from "react";
type Props = {
    children: ReactNode;
    className?: string;
    as?: "div" | "section" | "article";
};
export function Container({ children, className = "", as: Tag = "div" }: Props) {
    return (<Tag className={`mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 xl:px-12 ${className}`}>
      {children}
    </Tag>);
}
