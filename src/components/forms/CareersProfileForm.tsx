"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useId } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/Button";
import { postJson } from "@/lib/api/post-json";
import {
  type CareersProfileInput,
  careersProfileSchema,
} from "@/lib/forms/schemas";
import { FormInput } from "./FormInput";
import { FormSelect } from "./FormSelect";
import { FormTextarea } from "./FormTextarea";

const expertiseOptions = [
  { value: "programme-management", label: "Programme Management" },
  { value: "operations", label: "Operations" },
  { value: "finance", label: "Finance & Administration" },
  { value: "communications", label: "Communications & Storytelling" },
  { value: "design", label: "Design / Creative" },
  { value: "engineering", label: "Engineering / Software" },
  { value: "data", label: "Data & Research" },
  { value: "fundraising", label: "Fundraising & Partnerships" },
  { value: "other", label: "Other" },
];

export function CareersProfileForm() {
  const idPrefix = useId();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CareersProfileInput>({
    resolver: zodResolver(careersProfileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      areaOfExpertise: undefined,
      briefIntroduction: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    const res = await postJson("/api/forms/careers-profile", data);
    if (!res.ok) {
      if (res.fieldErrors) {
        for (const [key, messages] of Object.entries(res.fieldErrors)) {
          const msg = messages?.[0];
          if (msg)
            setError(key as keyof CareersProfileInput, { message: msg });
        }
      }
      toast.error(res.error);
      return;
    }
    toast.success(
      "Thanks — we'll keep your profile on file for the right role.",
    );
    reset();
  });

  return (
    <form className="space-y-5" noValidate onSubmit={onSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormInput
          id={`${idPrefix}-firstName`}
          label="First Name"
          required
          placeholder="First name"
          autoComplete="given-name"
          error={errors.firstName?.message}
          {...register("firstName")}
        />
        <FormInput
          id={`${idPrefix}-lastName`}
          label="Last Name"
          required
          placeholder="Last name"
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
        placeholder="your@email.com"
        autoComplete="email"
        error={errors.email?.message}
        {...register("email")}
      />

      <FormSelect
        id={`${idPrefix}-expertise`}
        label="Area of Expertise"
        required
        placeholder="Select"
        options={expertiseOptions}
        error={errors.areaOfExpertise?.message}
        {...register("areaOfExpertise")}
      />

      <FormTextarea
        id={`${idPrefix}-intro`}
        label="Brief Introduction"
        required
        rows={4}
        placeholder="Tell us a bit about yourself, what you do, and why CNF interests you."
        error={errors.briefIntroduction?.message}
        {...register("briefIntroduction")}
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending…" : "Submit Your Profile"}
      </Button>
    </form>
  );
}
