"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useId } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/Button";
import { postJson } from "@/lib/api/post-json";
import {
  type CareersNewsletterInput,
  careersNewsletterSchema,
} from "@/lib/forms/schemas";
import { FormField } from "./FormField";
import { inputCompact } from "./formStyles";

export function CareersNewsletterForm() {
  const id = useId();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CareersNewsletterInput>({
    resolver: zodResolver(careersNewsletterSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = handleSubmit(async (data) => {
    const res = await postJson("/api/forms/careers-newsletter", data);
    if (!res.ok) {
      if (res.fieldErrors?.email?.[0]) {
        setError("email", { message: res.fieldErrors.email[0] });
      }
      toast.error(res.error);
      return;
    }
    toast.success("You're on the list — we'll reach out when a role opens up.");
    reset();
  });

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-2">
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="flex-1">
          <FormField
            id={`${id}-email`}
            label="Email"
            hideLabel
            error={errors.email?.message}
          >
            <input
              id={`${id}-email`}
              type="email"
              autoComplete="email"
              placeholder="yourname@email.com"
              aria-invalid={errors.email ? true : undefined}
              className={inputCompact}
              {...register("email")}
            />
          </FormField>
        </div>
        <Button type="submit" variant="primary" size="md" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Register Interest"}
        </Button>
      </div>
    </form>
  );
}
