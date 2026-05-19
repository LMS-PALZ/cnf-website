"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { buttonBase, buttonSizes, buttonVariants, type ButtonSize, type ButtonVariant } from "@/components/ui/buttonStyles";
import { useKoraPayment, type PaymentIntent } from "./KoraPaymentContext";

type Props = {
    children: ReactNode;
    amountNaira?: number;
    /** Prefill and lock amount — only for fixed-tier buttons (e.g. Give ₦150,000) */
    lockAmount?: boolean;
    /** Context label passed to Korapay metadata and modal subtitle */
    purpose?: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
    disabled?: boolean;
    /** Use full width like tier card CTAs */
    fullWidth?: boolean;
};

function buildPaymentIntent(
    amountNaira: number | undefined,
    lockAmount: boolean | undefined,
    purpose: string | undefined,
): PaymentIntent | undefined {
    const intent: PaymentIntent = {};
    if (purpose) {
        intent.label = purpose;
    }
    if (lockAmount && amountNaira != null) {
        intent.amountNaira = amountNaira;
        intent.lockAmount = true;
    }
    return Object.keys(intent).length > 0 ? intent : undefined;
}

export function DonatePayButton({
    children,
    amountNaira,
    lockAmount,
    purpose,
    variant = "primary",
    size = "md",
    className,
    disabled,
    fullWidth,
}: Props) {
    const { openPayment } = useKoraPayment();
    const intent = buildPaymentIntent(amountNaira, lockAmount, purpose);

    return (
        <Button
            type="button"
            variant={variant}
            size={size}
            disabled={disabled}
            className={cn(fullWidth && "w-full", className)}
            onClick={() => openPayment(intent)}
        >
            {children}
        </Button>
    );
}

/** Outline-style pay trigger for dark CTA bands (matches ButtonLink dark-outline). */
export function DonatePayLinkButton({
    children,
    amountNaira,
    lockAmount,
    purpose,
    className,
    size = "md",
}: Pick<Props, "children" | "amountNaira" | "lockAmount" | "purpose" | "className" | "size">) {
    const { openPayment } = useKoraPayment();

    return (
        <button
            type="button"
            className={cn(
                buttonBase,
                buttonVariants["dark-outline"],
                buttonSizes[size],
                className,
            )}
            onClick={() => openPayment(buildPaymentIntent(amountNaira, lockAmount, purpose))}
        >
            {children}
        </button>
    );
}
