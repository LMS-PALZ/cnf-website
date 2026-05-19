import type { PaymentIntent } from "@/lib/payments/payment-types";

export type PaymentStoreState = {
    open: boolean;
    intent?: PaymentIntent;
};

const closedState: PaymentStoreState = { open: false };

let state: PaymentStoreState = closedState;
const listeners = new Set<() => void>();

function emit() {
    for (const listener of listeners) {
        listener();
    }
}

export function getPaymentState(): PaymentStoreState {
    return state;
}

export function subscribePayment(listener: () => void): () => void {
    listeners.add(listener);
    return () => listeners.delete(listener);
}

export function openPaymentModal(intent?: PaymentIntent): void {
    state = { open: true, intent };
    emit();
}

export function closePaymentModal(): void {
    state = closedState;
    emit();
}
