"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react";
import {
    CNF_OPEN_PAYMENT_EVENT,
    registerPaymentOpener,
} from "@/lib/payments/payment-opener";
import type { PaymentIntent } from "@/lib/payments/payment-types";

export type { PaymentIntent } from "@/lib/payments/payment-types";

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

    useEffect(() => {
        const handleOpen = (nextIntent: PaymentIntent | null) => {
            setIntent(nextIntent);
            setIsOpen(true);
        };

        registerPaymentOpener(handleOpen);

        const onWindowEvent = (event: Event) => {
            const detail = (event as CustomEvent<PaymentIntent | null>).detail ?? null;
            handleOpen(detail);
        };

        window.addEventListener(CNF_OPEN_PAYMENT_EVENT, onWindowEvent);

        return () => {
            registerPaymentOpener(null);
            window.removeEventListener(CNF_OPEN_PAYMENT_EVENT, onWindowEvent);
        };
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
