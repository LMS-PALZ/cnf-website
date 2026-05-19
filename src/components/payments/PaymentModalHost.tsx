"use client";

import { useSyncExternalStore } from "react";
import { KoraPaymentModal, KoraPaymentScript } from "@/components/payments/KoraPaymentModal";
import {
    closePaymentModal,
    getPaymentState,
    subscribePayment,
} from "@/lib/payments/payment-store";

const serverSnapshot = { open: false as const, intent: undefined };

export function PaymentModalHost() {
    const { open, intent } = useSyncExternalStore(
        subscribePayment,
        getPaymentState,
        () => serverSnapshot,
    );

    return (
        <>
            <KoraPaymentScript />
            <KoraPaymentModal open={open} onClose={closePaymentModal} intent={intent} />
        </>
    );
}
