"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useId } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/Button";
import { postJson } from "@/lib/api/post-json";
import { type VolunteerInput, volunteerSchema } from "@/lib/forms/schemas";
import { FormInput } from "./FormInput";
import { FormSelect } from "./FormSelect";

const volunteerAreaOptions = [
  { value: "joint-trainer", label: "Joint Trainer / Facilitator" },
  { value: "mentor", label: "Mentor" },
  { value: "communications", label: "Communications & Media" },
  { value: "medical-outreach", label: "Medical / Health Outreach" },
  { value: "fieldwork-ssu", label: "Fieldwork for SSU" },
  { value: "administrative", label: "Administrative & Logistics" },
];

const yesNoOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const leadershipOptions = [
  { value: "yes", label: "Yes — I would love that" },
  { value: "maybe", label: "Maybe, depending on the role" },
  { value: "no", label: "Not at this time" },
];

const idTypeOptions = [
  { value: "nin", label: "National ID (NIN)" },
  { value: "passport", label: "International Passport" },
  { value: "drivers-license", label: "Driver's License" },
  { value: "voters-card", label: "Voter's Card" },
];

export function VolunteerForm() {
  const idPrefix = useId();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<VolunteerInput>({
    resolver: zodResolver(volunteerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      country: "",
      volunteerArea: undefined,
      priorExperience: undefined,
      priorOrganisation: "",
      leadershipOpenness: undefined,
      idType: undefined,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    const res = await postJson("/api/forms/volunteer", data);
    if (!res.ok) {
      if (res.fieldErrors) {
        for (const [key, messages] of Object.entries(res.fieldErrors)) {
          const msg = messages?.[0];
          if (msg) setError(key as keyof VolunteerInput, { message: msg });
        }
      }
      toast.error(res.error);
      return;
    }
    toast.success("Thank you — we'll review your application and get back to you.");
    reset();
  });

  return (
    <form className="space-y-5" noValidate onSubmit={onSubmit}>
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
        placeholder="your@email.com"
        autoComplete="email"
        error={errors.email?.message}
        {...register("email")}
      />

      <FormInput
        id={`${idPrefix}-phone`}
        label="Phone Number"
        type="tel"
        placeholder="+234 ..."
        autoComplete="tel"
        error={errors.phone?.message}
        {...register("phone")}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <FormInput
          id={`${idPrefix}-city`}
          label="City"
          required
          placeholder="Your city"
          autoComplete="address-level2"
          error={errors.city?.message}
          {...register("city")}
        />
        <FormInput
          id={`${idPrefix}-country`}
          label="Country"
          required
          placeholder="Country"
          autoComplete="country-name"
          error={errors.country?.message}
          {...register("country")}
        />
      </div>

      <FormSelect
        id={`${idPrefix}-area`}
        label="Which area would you like to volunteer in?"
        required
        placeholder="Select an area"
        options={volunteerAreaOptions}
        error={errors.volunteerArea?.message}
        {...register("volunteerArea")}
      />

      <FormSelect
        id={`${idPrefix}-prior`}
        label="Do you have prior volunteering experience?"
        required
        placeholder="Select"
        options={yesNoOptions}
        error={errors.priorExperience?.message}
        {...register("priorExperience")}
      />

      <FormInput
        id={`${idPrefix}-priorOrg`}
        label="If yes, which organisation?"
        placeholder="Organisation name"
        error={errors.priorOrganisation?.message}
        {...register("priorOrganisation")}
      />

      <FormSelect
        id={`${idPrefix}-leadership`}
        label="Are you open to teaching or leadership roles?"
        required
        placeholder="Select"
        options={leadershipOptions}
        error={errors.leadershipOpenness?.message}
        {...register("leadershipOpenness")}
      />

      <FormSelect
        id={`${idPrefix}-idType`}
        label="Type of ID"
        required
        placeholder="Select ID type"
        options={idTypeOptions}
        error={errors.idType?.message}
        {...register("idType")}
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending…" : "Submit Volunteer Application"}
      </Button>
    </form>
  );
}
