"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { PaymentIntent } from "@/lib/payments/payment-types";

export type OpenDonatePayment = (intent?: PaymentIntent) => void;

const DonatePaymentContext = createContext<OpenDonatePayment | null>(null);

export function DonatePaymentProvider({
    children,
    openPayment,
}: {
    children: ReactNode;
    openPayment: OpenDonatePayment;
}) {
    return (
        <DonatePaymentContext.Provider value={openPayment}>{children}</DonatePaymentContext.Provider>
    );
}

/** Set on /donate only — one shared modal for all pay buttons on that page. */
export function useDonatePaymentOpener(): OpenDonatePayment | null {
    return useContext(DonatePaymentContext);
}
