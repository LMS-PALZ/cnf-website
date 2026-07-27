"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useId } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { submitFormWithToast } from "@/lib/forms/submit-with-toast";
import { type NewsletterInput, newsletterSchema } from "@/lib/forms/schemas";

type Props = {
    /** `dark` for dark green panels; `light` for pale Join Us backgrounds. */
    tone?: "dark" | "light";
};

const inputToneClass: Record<NonNullable<Props["tone"]>, string> = {
    dark: "border-white/15 bg-white/5 text-white placeholder:text-white/55 focus:border-cnf-accent focus:ring-cnf-accent/30",
    light:
        "border-cnf-border bg-white text-cnf-ink placeholder:text-cnf-muted focus:border-cnf-primary focus:ring-cnf-primary/25",
};

export function NewsletterForm({ tone = "dark" }: Props) {
    const idPrefix = useId();
    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<NewsletterInput>({
        resolver: zodResolver(newsletterSchema),
        defaultValues: { name: "", email: "" },
    });

    const onSubmit = handleSubmit(async (data) => {
        const ok = await submitFormWithToast({
            url: "/api/forms/newsletter",
            data,
            setError,
            successMessage: "Subscribed \u2014 thanks for joining the list.",
        });
        if (ok) reset();
    });

    const inputClass = cn(
        "w-full rounded-md border px-4 py-3 text-base focus:outline-none focus:ring-2",
        inputToneClass[tone],
    );

    return (
        <form noValidate onSubmit={onSubmit} className="space-y-3">
            <div>
                <label htmlFor={`${idPrefix}-name`} className="sr-only">
                    Full name
                </label>
                <input
                    id={`${idPrefix}-name`}
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    aria-invalid={errors.name ? true : undefined}
                    className={inputClass}
                    {...register("name")}
                />
                {errors.name?.message ? (
                    <p className="mt-1 text-xs font-medium text-cnf-accent" role="alert">
                        {errors.name.message}
                    </p>
                ) : null}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                <div className="flex-1">
                    <label htmlFor={`${idPrefix}-email`} className="sr-only">
                        Email address
                    </label>
                    <input
                        id={`${idPrefix}-email`}
                        type="email"
                        autoComplete="email"
                        placeholder="Your email address"
                        aria-invalid={errors.email ? true : undefined}
                        className={inputClass}
                        {...register("email")}
                    />
                    {errors.email?.message ? (
                        <p className="mt-1 text-xs font-medium text-cnf-accent" role="alert">
                            {errors.email.message}
                        </p>
                    ) : null}
                </div>

                <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="sm:w-auto sm:shrink-0 sm:self-stretch"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Subscribing\u2026" : "Subscribe to Updates"}
                </Button>
            </div>

            <p
                className={cn(
                    "text-xs",
                    tone === "dark" ? "text-white/70" : "text-cnf-muted",
                )}
            >
                We respect your privacy. Unsubscribe at any time.
            </p>
        </form>
    );
}
