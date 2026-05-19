"use client";

import type { ReactNode } from "react";
import { KoraPaymentScript } from "@/components/payments/KoraPaymentModal";

/** Loads Korapay script once for the whole site. */
export function KoraPaymentShell({ children }: { children: ReactNode }) {
    return (
        <>
            {children}
            <KoraPaymentScript />
        </>
    );
}
