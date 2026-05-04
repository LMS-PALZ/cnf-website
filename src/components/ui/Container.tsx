import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
};

/**
 * Single source of truth for page-level horizontal layout. Caps content at
 * ~80% of a typical widescreen viewport (1500px) and adds responsive
 * gutters. Updating these values here flows through to every section,
 * the site header, the footer, and the dark page heroes.
 */
export function Container({ children, className = "", as: Tag = "div" }: Props) {
  return (
    <Tag
      className={`mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 xl:px-12 ${className}`}
    >
      {children}
    </Tag>
  );
}
