"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

export type PaymentIntent = {
    amountNaira?: number;
    /** When true, amount is prefilled and cannot be changed (tier card CTAs only) */
    lockAmount?: boolean;
    /** Shown in the modal subtitle, e.g. tier or campaign name */
    label?: string;
};

type KoraPaymentContextValue = {
    isOpen: boolean;
    intent: PaymentIntent | null;
    openPayment: (intent?: PaymentIntent) => void;
    closePayment: () => void;
};

const KoraPaymentContext = createContext<KoraPaymentContextValue | null>(null);

export function KoraPaymentProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [intent, setIntent] = useState<PaymentIntent | null>(null);

    const openPayment = useCallback((nextIntent?: PaymentIntent) => {
        setIntent(nextIntent ?? null);
        setIsOpen(true);
    }, []);

    const closePayment = useCallback(() => {
        setIsOpen(false);
        setIntent(null);
    }, []);

    const value = useMemo(
        () => ({
            isOpen,
            intent,
            openPayment,
            closePayment,
        }),
        [closePayment, intent, isOpen, openPayment],
    );

    return <KoraPaymentContext.Provider value={value}>{children}</KoraPaymentContext.Provider>;
}

export function useKoraPayment(): KoraPaymentContextValue {
    const ctx = useContext(KoraPaymentContext);
    if (!ctx) {
        throw new Error("useKoraPayment must be used within KoraPaymentProvider");
    }
    return ctx;
}
