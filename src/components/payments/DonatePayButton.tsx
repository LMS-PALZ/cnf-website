"use client";

import type { ReactNode } from "react";
import { usePayment } from "@/components/payments/PaymentProvider";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import {
    buttonBase,
    buttonSizes,
    buttonVariants,
    type ButtonSize,
    type ButtonVariant,
} from "@/components/ui/buttonStyles";
import type { PaymentIntent } from "@/lib/payments/payment-types";

type Props = {
    children: ReactNode;
    amountNaira?: number;
    lockAmount?: boolean;
    purpose?: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
    disabled?: boolean;
    fullWidth?: boolean;
};

function buildIntent(
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
    const { openPayment } = usePayment();

    return (
        <Button
            type="button"
            variant={variant}
            size={size}
            disabled={disabled}
            className={cn(fullWidth && "w-full", className)}
            onClick={() => openPayment(buildIntent(amountNaira, lockAmount, purpose))}
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
    const { openPayment } = usePayment();

    return (
        <button
            type="button"
            className={cn(
                buttonBase,
                buttonVariants["dark-outline"],
                buttonSizes[size],
                className,
            )}
            onClick={() => openPayment(buildIntent(amountNaira, lockAmount, purpose))}
        >
            {children}
        </button>
    );
}
