"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { buttonBase, buttonSizes, buttonVariants, type ButtonSize, type ButtonVariant } from "@/components/ui/buttonStyles";
import { openPaymentModal } from "@/lib/payments/payment-opener";
import type { PaymentIntent } from "@/lib/payments/payment-types";

type Props = {
    children: ReactNode;
    amountNaira?: number;
    /** Prefill and lock amount — only for fixed-tier buttons (e.g. Give ₦150,000) */
    lockAmount?: boolean;
    purpose?: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
    disabled?: boolean;
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
    return (
        <Button
            type="button"
            variant={variant}
            size={size}
            disabled={disabled}
            className={cn(fullWidth && "w-full", className)}
            onClick={() => openPaymentModal(buildPaymentIntent(amountNaira, lockAmount, purpose))}
        >
            {children}
        </Button>
    );
}

export function DonatePayLinkButton({
    children,
    amountNaira,
    lockAmount,
    purpose,
    className,
    size = "md",
}: Pick<Props, "children" | "amountNaira" | "lockAmount" | "purpose" | "className" | "size">) {
    return (
        <button
            type="button"
            className={cn(
                buttonBase,
                buttonVariants["dark-outline"],
                buttonSizes[size],
                className,
            )}
            onClick={() => openPaymentModal(buildPaymentIntent(amountNaira, lockAmount, purpose))}
        >
            {children}
        </button>
    );
}
