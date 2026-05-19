"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useId } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/Button";
import { postJson } from "@/lib/api/post-json";
import { type PartnershipInput, partnershipSchema, } from "@/lib/forms/schemas";
import { FormCheckboxGroup } from "./FormCheckboxGroup";
import { FormInput } from "./FormInput";
import { FormTextarea } from "./FormTextarea";
const pillarOptions = [
    { value: "skills", label: "Skill Development" },
    { value: "education", label: "Education" },
    { value: "humanitarian", label: "Humanitarian Aid & Healthcare" },
    { value: "all", label: "All Pillars" },
];
export function PartnershipForm() {
    const idPrefix = useId();
    const { register, handleSubmit, setError, reset, formState: { errors, isSubmitting }, } = useForm<PartnershipInput>({
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
        const res = await postJson("/api/forms/partnership", data);
        if (!res.ok) {
            if (res.fieldErrors) {
                for (const [key, messages] of Object.entries(res.fieldErrors)) {
                    const msg = messages?.[0];
                    if (msg)
                        setError(key as keyof PartnershipInput, { message: msg });
                }
            }
            toast.error(res.error);
            return;
        }
        toast.success("Thank you, our partnerships team will be in touch within 3 working days.");
        reset();
    });
    return (<form className="space-y-5" noValidate onSubmit={onSubmit} aria-busy={isSubmitting}>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormInput id={`${idPrefix}-firstName`} label="First Name" required placeholder="Your first name" autoComplete="given-name" error={errors.firstName?.message} {...register("firstName")}/>
        <FormInput id={`${idPrefix}-lastName`} label="Last Name" required placeholder="Your last name" autoComplete="family-name" error={errors.lastName?.message} {...register("lastName")}/>
      </div>

      <FormInput id={`${idPrefix}-email`} label="Email Address" type="email" required placeholder="you@organisation.com" autoComplete="email" error={errors.email?.message} {...register("email")}/>

      <FormInput id={`${idPrefix}-phone`} label="Phone Number" type="tel" placeholder="+234 ..." autoComplete="tel" error={errors.phone?.message} {...register("phone")}/>

      <FormInput id={`${idPrefix}-organisation`} label="Organisation" required placeholder="Your organisation or company name" autoComplete="organization" error={errors.organisation?.message} {...register("organisation")}/>

      <FormInput id={`${idPrefix}-country`} label="Country" required placeholder="Country" autoComplete="country-name" error={errors.country?.message} {...register("country")}/>

      <FormCheckboxGroup label="Which pillar(s) would you like to partner on?" required options={pillarOptions} error={errors.pillars?.message as string | undefined} inputProps={register("pillars")}/>

      <FormTextarea id={`${idPrefix}-message`} label="How would you like to partner with us?" required rows={5} placeholder="Tell us about the partnership you have in mind, what you bring, what you hope to achieve, and any specific programmes you are interested in." error={errors.message?.message} {...register("message")}/>

      <Button type="submit" variant="accent" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Submit Partnership Enquiry"}
      </Button>
    </form>);
}
