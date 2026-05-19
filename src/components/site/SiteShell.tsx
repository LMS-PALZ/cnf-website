"use client";

import type { ReactNode } from "react";
import { NavigationLoadingProvider } from "@/components/providers/NavigationLoadingProvider";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export function SiteShell({ children }: { children: ReactNode }) {
    return (
        <NavigationLoadingProvider>
            <div className="flex min-h-screen flex-col">
                <SiteHeader />
                <main id="main-content" className="flex-1">
                    {children}
                </main>
                <SiteFooter />
            </div>
        </NavigationLoadingProvider>
    );
}
