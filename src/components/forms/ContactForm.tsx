"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useId } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/Button";
import { postJson } from "@/lib/api/post-json";
import { type ContactInput, contactSchema } from "@/lib/forms/schemas";
import { FormInput } from "./FormInput";
import { FormTextarea } from "./FormTextarea";

export function ContactForm() {
    const idPrefix = useId();
    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactInput>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        },
    });

    const onSubmit = handleSubmit(async (data) => {
        const res = await postJson("/api/forms/contact", data);
        if (!res.ok) {
            if (res.fieldErrors) {
                for (const [key, messages] of Object.entries(res.fieldErrors)) {
                    const msg = messages?.[0];
                    if (msg) setError(key as keyof ContactInput, { message: msg });
                }
            }
            toast.error(res.error);
            return;
        }
        toast.success("Thank you. Your message has been sent.");
        reset();
    });

    return (
        <form className="space-y-5" noValidate onSubmit={onSubmit} aria-busy={isSubmitting}>
            <div className="grid gap-5 sm:grid-cols-2">
                <FormInput
                    id={`${idPrefix}-name`}
                    label="Name"
                    required
                    placeholder="Your name"
                    autoComplete="name"
                    error={errors.name?.message}
                    {...register("name")}
                />
                <FormInput
                    id={`${idPrefix}-email`}
                    label="Email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    autoComplete="email"
                    error={errors.email?.message}
                    {...register("email")}
                />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                <FormInput
                    id={`${idPrefix}-phone`}
                    label="Phone"
                    type="tel"
                    required
                    placeholder="+234 ..."
                    autoComplete="tel"
                    error={errors.phone?.message}
                    {...register("phone")}
                />
                <FormInput
                    id={`${idPrefix}-subject`}
                    label="Subject"
                    required
                    placeholder="How can we help?"
                    error={errors.subject?.message}
                    {...register("subject")}
                />
            </div>

            <FormTextarea
                id={`${idPrefix}-message`}
                label="Your message"
                required
                rows={6}
                placeholder="Write your message here..."
                className="border-cnf-accent/60 focus:border-cnf-accent focus:ring-cnf-accent/25"
                error={errors.message?.message}
                {...register("message")}
            />

            <Button
                type="submit"
                variant="primary"
                size="lg"
                className="rounded-full px-10 uppercase tracking-wide"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Sending…" : "Send message"}
            </Button>
        </form>
    );
}
