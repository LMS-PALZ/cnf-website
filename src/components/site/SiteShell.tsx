import type { ReactNode } from "react";
import { PageMotion } from "@/components/providers/PageMotion";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export function SiteShell({ children }: { children: ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main id="main-content" className="flex-1">
                {children}
            </main>
            <SiteFooter />
            <PageMotion />
        </div>
    );
}
