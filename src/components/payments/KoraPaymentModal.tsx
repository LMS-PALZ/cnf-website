"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Script from "next/script";
import { useEffect, useId, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FormField } from "@/components/forms/FormField";
import { Button } from "@/components/ui/Button";
import { KORAPAY_COLLECTIONS_SCRIPT_URL, korapayConfig } from "@/lib/payments/korapay-config";
import {
    formatAmountWithSeparators,
    formatNairaAmount,
    parseNairaDisplayAmount,
    startKorapayPayment,
} from "@/lib/payments/korapay";
import {
    koraPaymentFormSchema,
    type KoraPaymentFormValues,
} from "@/lib/payments/payment-form-schema";
import type { PaymentIntent } from "@/lib/payments/payment-types";

const inputClass =
    "w-full rounded-md border border-cnf-primary/20 bg-white px-3 py-2.5 text-base text-cnf-ink shadow-sm focus:border-cnf-primary focus:outline-none focus:ring-2 focus:ring-cnf-primary/20";

type Props = {
    open: boolean;
    onClose: () => void;
    intent?: PaymentIntent;
};

export function KoraPaymentScript() {
    return <Script src={KORAPAY_COLLECTIONS_SCRIPT_URL} strategy="afterInteractive" />;
}

export function KoraPaymentModal({ open, onClose, intent }: Props) {
    const titleId = useId();
    const [isPaying, setIsPaying] = useState(false);
    const lockedAmount =
        intent?.lockAmount === true && intent.amountNaira != null ? intent.amountNaira : undefined;

    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<KoraPaymentFormValues>({
        resolver: zodResolver(koraPaymentFormSchema),
        defaultValues: {
            name: "",
            email: "",
        },
    });

    useEffect(() => {
        if (!open) {
            return;
        }
        reset({
            name: "",
            email: "",
            ...(lockedAmount != null ? { amountNaira: lockedAmount } : {}),
        });
    }, [open, lockedAmount, reset]);

    useEffect(() => {
        if (!open) {
            return;
        }
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    useEffect(() => {
        if (!open) {
            return;
        }
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [onClose, open]);

    if (!open) {
        return null;
    }

    const onSubmit = handleSubmit((data) => {
        if (!korapayConfig.publicKey) {
            toast.error("Online payments are not configured yet. Please contact us to donate.");
            return;
        }

        setIsPaying(true);
        try {
            startKorapayPayment({
                amountNaira: data.amountNaira,
                name: data.name,
                email: data.email,
                metadata: intent?.label ? { purpose: intent.label } : undefined,
            });
            onClose();
        } catch (error) {
            const message =
                error instanceof Error ? error.message : "Could not start payment. Please try again.";
            toast.error(message);
        } finally {
            setIsPaying(false);
        }
    });

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            role="presentation"
        >
            <button
                type="button"
                className="absolute inset-0 bg-cnf-ink/70 backdrop-blur-[2px]"
                aria-label="Close payment form"
                onClick={onClose}
            />

            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                className="relative z-10 w-full max-w-lg rounded-2xl border border-cnf-border bg-white p-6 shadow-2xl sm:p-8"
            >
                <div className="relative px-10 text-center sm:px-12">
                    <button
                        type="button"
                        onClick={onClose}
                        className="absolute right-0 top-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-cnf-border text-cnf-muted transition-colors hover:bg-cnf-surface hover:text-cnf-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary"
                        aria-label="Close"
                    >
                        <span aria-hidden>✕</span>
                    </button>
                    <h2
                        id={titleId}
                        className="text-xs font-semibold uppercase tracking-[0.28em] text-cnf-primary"
                    >
                        Secure payment
                    </h2>
                </div>

                <form
                    key={lockedAmount != null ? `locked-${lockedAmount}` : "custom-amount"}
                    className="mt-8 space-y-5"
                    noValidate
                    onSubmit={onSubmit}
                >
                    <FormField id="kora-pay-name" label="Full name" required error={errors.name?.message}>
                        <input
                            id="kora-pay-name"
                            className={inputClass}
                            autoComplete="name"
                            {...register("name")}
                        />
                    </FormField>

                    <FormField id="kora-pay-email" label="Email" required error={errors.email?.message}>
                        <input
                            id="kora-pay-email"
                            type="email"
                            className={inputClass}
                            autoComplete="email"
                            {...register("email")}
                        />
                    </FormField>

                    {lockedAmount != null ? (
                        <FormField id="kora-pay-amount-display" label="Amount (NGN)" required>
                            <input
                                id="kora-pay-amount-display"
                                className={`${inputClass} bg-cnf-surface text-cnf-ink`}
                                readOnly
                                disabled
                                value={formatNairaAmount(lockedAmount)}
                            />
                            <input type="hidden" {...register("amountNaira", { value: lockedAmount })} />
                        </FormField>
                    ) : (
                        <FormField
                            id="kora-pay-amount"
                            label="Amount (NGN)"
                            required
                            error={errors.amountNaira?.message}
                        >
                            <Controller
                                name="amountNaira"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        id="kora-pay-amount"
                                        type="text"
                                        className={inputClass}
                                        inputMode="numeric"
                                        autoComplete="off"
                                        placeholder="e.g. 10,000"
                                        value={
                                            field.value != null &&
                                            !Number.isNaN(field.value) &&
                                            field.value > 0
                                                ? formatAmountWithSeparators(field.value)
                                                : ""
                                        }
                                        onChange={(e) => {
                                            const parsed = parseNairaDisplayAmount(e.target.value);
                                            field.onChange(parsed);
                                        }}
                                        onBlur={field.onBlur}
                                        ref={field.ref}
                                    />
                                )}
                            />
                        </FormField>
                    )}

                    <p className="text-xs leading-relaxed text-cnf-muted">
                        You will complete payment securely via Korapay (card, bank transfer, or USSD).
                    </p>

                    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-end">
                        <Button type="button" variant="secondary" onClick={onClose} disabled={isPaying}>
                            Cancel
                        </Button>
                        <Button type="submit" variant="accent" disabled={isPaying}>
                            {isPaying ? "Opening Korapay…" : "Pay with Korapay"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
