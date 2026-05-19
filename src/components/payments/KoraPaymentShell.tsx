"use client";

import Script from "next/script";
import type { ReactNode } from "react";
import { KORAPAY_COLLECTIONS_SCRIPT_URL } from "@/lib/payments/korapay-config";
import { KoraPaymentProvider } from "./KoraPaymentContext";
import { KoraPaymentModal } from "./KoraPaymentModal";

export function KoraPaymentShell({ children }: { children: ReactNode }) {
    return (
        <KoraPaymentProvider>
            {children}
            <KoraPaymentModal />
            <Script src={KORAPAY_COLLECTIONS_SCRIPT_URL} strategy="afterInteractive" />
        </KoraPaymentProvider>
    );
}
