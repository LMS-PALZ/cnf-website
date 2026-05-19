import type { PaymentIntent } from "@/lib/payments/payment-types";

export const CNF_OPEN_PAYMENT_EVENT = "cnf:open-payment";

type OpenPaymentFn = (intent: PaymentIntent | null) => void;

let openPaymentFn: OpenPaymentFn | null = null;
const pendingIntents: Array<PaymentIntent | null> = [];

export function registerPaymentOpener(fn: OpenPaymentFn | null): void {
    openPaymentFn = fn;

    if (!fn) {
        return;
    }

    while (pendingIntents.length > 0) {
        const intent = pendingIntents.shift();
        fn(intent ?? null);
    }
}

/** Open the payment modal from any client component (works across server/client boundaries). */
export function openPaymentModal(intent?: PaymentIntent): void {
    const payload = intent ?? null;

    if (openPaymentFn) {
        openPaymentFn(payload);
        return;
    }

    pendingIntents.push(payload);

    if (typeof window !== "undefined") {
        window.dispatchEvent(
            new CustomEvent<PaymentIntent | null>(CNF_OPEN_PAYMENT_EVENT, { detail: payload }),
        );
    }
}
