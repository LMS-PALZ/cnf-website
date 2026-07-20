"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useId } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { submitFormWithToast } from "@/lib/forms/submit-with-toast";
import { type PartnershipInput, partnershipSchema } from "@/lib/forms/schemas";
import { FormCheckboxGroup } from "./FormCheckboxGroup";
import { FormCountrySelect } from "./FormCountrySelect";
import { FormInput } from "./FormInput";
import { FormPhoneInput } from "./FormPhoneInput";
import { FormTextarea } from "./FormTextarea";

const pillarOptions = [
    { value: "skills", label: "Economic Empowerment" },
    { value: "education", label: "Education" },
    { value: "humanitarian", label: "Humanitarian Aid" },
    { value: "all", label: "All Pillars" },
];

export function PartnershipForm() {
    const idPrefix = useId();
    const {
        register,
        control,
        handleSubmit,
        setError,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<PartnershipInput>({
        resolver: zodResolver(partnershipSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            organisation: "",
            country: "",
            pillars: [],
            message: "",
        },
    });

    const onSubmit = handleSubmit(async (data) => {
        const ok = await submitFormWithToast({
            url: "/api/forms/partnership",
            data,
            setError,
            successMessage:
                "Thank you, our partnerships team will be in touch within 3 working days.",
        });
        if (ok) reset();
    });

    return (
        <form className="space-y-5" noValidate onSubmit={onSubmit} aria-busy={isSubmitting}>
            <div className="grid gap-5 sm:grid-cols-2">
                <FormInput
                    id={`${idPrefix}-firstName`}
                    label="First Name"
                    required
                    placeholder="Your first name"
                    autoComplete="given-name"
                    error={errors.firstName?.message}
                    {...register("firstName")}
                />
                <FormInput
                    id={`${idPrefix}-lastName`}
                    label="Last Name"
                    required
                    placeholder="Your last name"
                    autoComplete="family-name"
                    error={errors.lastName?.message}
                    {...register("lastName")}
                />
            </div>

            <FormInput
                id={`${idPrefix}-email`}
                label="Email Address"
                type="email"
                required
                placeholder="you@organisation.com"
                autoComplete="email"
                error={errors.email?.message}
                {...register("email")}
            />

            <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                    <FormPhoneInput
                        id={`${idPrefix}-phone`}
                        label="Phone Number"
                        value={field.value ?? ""}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        error={errors.phone?.message}
                        hint="Choose your country code, then enter your number without the leading zero."
                    />
                )}
            />

            <FormInput
                id={`${idPrefix}-organisation`}
                label="Organisation"
                required
                placeholder="Your organisation or company name"
                autoComplete="organization"
                error={errors.organisation?.message}
                {...register("organisation")}
            />

            <Controller
                name="country"
                control={control}
                render={({ field }) => (
                    <FormCountrySelect
                        id={`${idPrefix}-country`}
                        label="Country"
                        required
                        value={field.value ?? ""}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        error={errors.country?.message}
                    />
                )}
            />

            <FormCheckboxGroup
                label="Which pillar(s) would you like to partner on?"
                required
                options={pillarOptions}
                error={errors.pillars?.message as string | undefined}
                inputProps={register("pillars")}
            />

            <FormTextarea
                id={`${idPrefix}-message`}
                label="How would you like to partner with us?"
                required
                rows={5}
                placeholder="Tell us about the partnership you have in mind, what you bring, what you hope to achieve, and any specific programmes you are interested in."
                error={errors.message?.message}
                {...register("message")}
            />

            <Button type="submit" variant="accent" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending…" : "Submit Partnership Enquiry"}
            </Button>
        </form>
    );
}
