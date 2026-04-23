"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FormField } from "@/components/forms/FormField";
import { postJson } from "@/lib/api/post-json";
import { careersInterestSchema, type CareersInterestInput } from "@/lib/forms/schemas";

const inputClass =
  "w-full rounded-md border border-cnf-primary/20 bg-white px-3 py-2.5 text-base text-cnf-ink shadow-sm focus:border-cnf-primary focus:outline-none focus:ring-2 focus:ring-cnf-primary/20";

export function CareersInterestForm() {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CareersInterestInput>({
    resolver: zodResolver(careersInterestSchema),
    defaultValues: {
      roleInterest: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    const res = await postJson("/api/forms/careers-interest", data);
    if (!res.ok) {
      if (res.fieldErrors) {
        for (const [key, messages] of Object.entries(res.fieldErrors)) {
          const msg = messages?.[0];
          if (msg) {
            setError(key as keyof CareersInterestInput, { message: msg });
          }
        }
      }
      toast.error(res.error);
      return;
    }
    toast.success("Thank you — we have received your interest.");
    reset();
  });

  return (
    <form className="space-y-6" noValidate onSubmit={onSubmit}>
      <FormField
        id="careers-role"
        label="Role or area of interest"
        error={errors.roleInterest?.message}
      >
        <input id="careers-role" className={inputClass} {...register("roleInterest")} />
      </FormField>
      <FormField id="careers-email" label="Email" error={errors.email?.message}>
        <input
          id="careers-email"
          className={inputClass}
          type="email"
          autoComplete="email"
          {...register("email")}
        />
      </FormField>
      <FormField
        id="careers-message"
        label="Message (optional)"
        error={errors.message?.message}
        hint="Share links to a portfolio or CV in plain text if helpful."
      >
        <textarea id="careers-message" className={`${inputClass} min-h-28`} {...register("message")} />
      </FormField>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-cnf-primary px-5 py-2.5 text-base font-semibold text-white transition-colors hover:bg-cnf-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? "Sending…" : "Submit careers interest"}
      </button>
    </form>
  );
}
