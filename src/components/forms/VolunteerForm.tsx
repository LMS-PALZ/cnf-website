"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FormField } from "@/components/forms/FormField";
import { postJson } from "@/lib/api/post-json";
import { type VolunteerInput, volunteerSchema } from "@/lib/forms/schemas";

const inputClass =
  "w-full rounded-md border border-cnf-primary/20 bg-white px-3 py-2.5 text-base text-cnf-ink shadow-sm focus:border-cnf-primary focus:outline-none focus:ring-2 focus:ring-cnf-primary/20";

export function VolunteerForm() {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<VolunteerInput>({
    resolver: zodResolver(volunteerSchema),
    defaultValues: {
      name: "",
      email: "",
      city: "",
      skills: "",
      availability: "",
      message: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    const res = await postJson("/api/forms/volunteer", data);
    if (!res.ok) {
      if (res.fieldErrors) {
        for (const [key, messages] of Object.entries(res.fieldErrors)) {
          const msg = messages?.[0];
          if (msg) {
            setError(key as keyof VolunteerInput, { message: msg });
          }
        }
      }
      toast.error(res.error);
      return;
    }
    toast.success("Thanks for offering your time — we will be in touch.");
    reset();
  });

  return (
    <form className="space-y-6" noValidate onSubmit={onSubmit}>
      <FormField id="vol-name" label="Full name" error={errors.name?.message}>
        <input id="vol-name" className={inputClass} autoComplete="name" {...register("name")} />
      </FormField>
      <FormField id="vol-email" label="Email" error={errors.email?.message}>
        <input
          id="vol-email"
          className={inputClass}
          type="email"
          autoComplete="email"
          {...register("email")}
        />
      </FormField>
      <FormField id="vol-city" label="City" error={errors.city?.message}>
        <input id="vol-city" className={inputClass} autoComplete="address-level2" {...register("city")} />
      </FormField>
      <FormField id="vol-skills" label="Skills & experience" error={errors.skills?.message}>
        <textarea id="vol-skills" className={`${inputClass} min-h-28`} {...register("skills")} />
      </FormField>
      <FormField id="vol-availability" label="Availability" error={errors.availability?.message}>
        <textarea
          id="vol-availability"
          className={`${inputClass} min-h-24`}
          {...register("availability")}
        />
      </FormField>
      <FormField id="vol-message" label="Message" error={errors.message?.message}>
        <textarea id="vol-message" className={`${inputClass} min-h-32`} {...register("message")} />
      </FormField>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-cnf-primary px-5 py-2.5 text-base font-semibold text-white transition-colors hover:bg-cnf-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? "Sending…" : "Submit volunteer enquiry"}
      </button>
    </form>
  );
}
