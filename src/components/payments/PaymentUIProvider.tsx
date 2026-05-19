"use client";

import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
    type ReactNode,
} from "react";
import { KoraPaymentModal, KoraPaymentScript } from "@/components/payments/KoraPaymentModal";
import type { PaymentIntent } from "@/lib/payments/payment-types";

type PaymentUIContextValue = {
    openPayment: (intent?: PaymentIntent) => void;
};

const PaymentUIContext = createContext<PaymentUIContextValue | null>(null);

/** Wrap the app in root layout so pay buttons work on Vercel (outside Suspense). */
export function PaymentUIProvider({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState(false);
    const [intent, setIntent] = useState<PaymentIntent | undefined>();

    const openPayment = useCallback((nextIntent?: PaymentIntent) => {
        setIntent(nextIntent);
        setOpen(true);
    }, []);

    const closePayment = useCallback(() => {
        setOpen(false);
        setIntent(undefined);
    }, []);

    const value = useMemo(() => ({ openPayment }), [openPayment]);

    return (
        <PaymentUIContext.Provider value={value}>
            {children}
            <KoraPaymentScript />
            <KoraPaymentModal open={open} onClose={closePayment} intent={intent} />
        </PaymentUIContext.Provider>
    );
}

export function useOpenPayment(): PaymentUIContextValue {
    const ctx = useContext(PaymentUIContext);
    if (!ctx) {
        throw new Error("useOpenPayment must be used within PaymentUIProvider (root layout).");
    }
    return ctx;
}
