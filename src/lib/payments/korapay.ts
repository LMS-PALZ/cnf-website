import type { KorapayInitializeOptions } from "@/types/korapay";
import { korapayConfig } from "./korapay-config";

export function generateKorapayReference(prefix = "cnf"): string {
    const stamp = Date.now().toString(36);
    const rand = Math.random().toString(36).slice(2, 10);
    return `${prefix}-${stamp}-${rand}`;
}

/** Parse display amounts like "₦10,000" or "NGN 50000" into whole naira. */
export function parseNairaDisplayAmount(value: string): number | undefined {
    const digits = value.replace(/[^\d]/g, "");
    if (!digits) {
        return undefined;
    }
    const amount = Number.parseInt(digits, 10);
    return Number.isFinite(amount) && amount > 0 ? amount : undefined;
}

export function formatNairaAmount(amount: number): string {
    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}

/** Comma-separated whole naira for amount inputs (no currency symbol). */
export function formatAmountWithSeparators(amount: number): string {
    return amount.toLocaleString("en-NG", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
}

export type StartKorapayPaymentInput = {
    amountNaira: number;
    name: string;
    email: string;
    reference?: string;
    metadata?: Record<string, string>;
};

export function startKorapayPayment(input: StartKorapayPaymentInput): void {
    const key = korapayConfig.publicKey.trim();
    if (!key) {
        throw new Error("Korapay public key is not configured.");
    }

    if (!window.Korapay?.initialize) {
        throw new Error("Korapay is still loading. Please try again in a moment.");
    }

    const reference = input.reference ?? generateKorapayReference();
    const options: KorapayInitializeOptions = {
        key,
        reference,
        amount: input.amountNaira,
        currency: korapayConfig.currency,
        customer: {
            name: input.name.trim(),
            email: input.email.trim(),
        },
        metadata: input.metadata,
    };

    if (korapayConfig.notificationUrl) {
        options.notification_url = korapayConfig.notificationUrl;
    }

    window.Korapay.initialize(options);
}
