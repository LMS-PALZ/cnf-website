"use client";

import { useCallback, useState, type ReactNode } from "react";
import { DonatePaymentProvider } from "@/components/payments/DonatePaymentContext";
import { KoraPaymentModal } from "@/components/payments/KoraPaymentModal";
import type { PaymentIntent } from "@/lib/payments/payment-types";

/**
 * Single client boundary for /donate — one modal instance, all pay buttons
 * call openPayment via context (reliable on Vercel static deploy).
 */
export function DonatePageClient({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState(false);
    const [intent, setIntent] = useState<PaymentIntent | undefined>();

    const openPayment = useCallback((next?: PaymentIntent) => {
        setIntent(next);
        setOpen(true);
    }, []);

    return (
        <DonatePaymentProvider openPayment={openPayment}>
            {children}
            <KoraPaymentModal
                key={
                    intent?.lockAmount && intent.amountNaira != null
                        ? `locked-${intent.amountNaira}`
                        : "custom-amount"
                }
                open={open}
                onClose={() => setOpen(false)}
                intent={intent}
            />
        </DonatePaymentProvider>
    );
}
