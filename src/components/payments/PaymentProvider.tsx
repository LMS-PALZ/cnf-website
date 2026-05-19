"use client";

import {
    createContext,
    useCallback,
    useContext,
    useState,
    type ReactNode,
} from "react";
import { KoraPaymentModal, KoraPaymentScript } from "@/components/payments/KoraPaymentModal";
import type { PaymentIntent } from "@/lib/payments/payment-types";

type PaymentContextValue = {
    openPayment: (intent?: PaymentIntent) => void;
};

const PaymentContext = createContext<PaymentContextValue | null>(null);

export function usePayment(): PaymentContextValue {
    const ctx = useContext(PaymentContext);
    if (!ctx) {
        throw new Error("usePayment must be used within PaymentProvider");
    }
    return ctx;
}

export function PaymentProvider({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState(false);
    const [intent, setIntent] = useState<PaymentIntent | undefined>();

    const openPayment = useCallback((next?: PaymentIntent) => {
        setIntent(next);
        setOpen(true);
    }, []);

    const closePayment = useCallback(() => {
        setOpen(false);
        setIntent(undefined);
    }, []);

    return (
        <PaymentContext.Provider value={{ openPayment }}>
            <KoraPaymentScript />
            {children}
            <KoraPaymentModal open={open} onClose={closePayment} intent={intent} />
        </PaymentContext.Provider>
    );
}
