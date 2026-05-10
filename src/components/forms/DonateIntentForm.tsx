"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FormField } from "@/components/forms/FormField";
import { postJson } from "@/lib/api/post-json";
import { type DonateIntentInput, donateIntentSchema } from "@/lib/forms/schemas";
const inputClass = "w-full rounded-md border border-cnf-primary/20 bg-white px-3 py-2.5 text-base text-cnf-ink shadow-sm focus:border-cnf-primary focus:outline-none focus:ring-2 focus:ring-cnf-primary/20";
export function DonateIntentForm() {
    const { register, control, handleSubmit, setError, reset, formState: { errors, isSubmitting }, } = useForm<DonateIntentInput>({
        resolver: zodResolver(donateIntentSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
            pledgeAmount: "",
            consent: false,
        },
    });
    const onSubmit = handleSubmit(async (data) => {
        const res = await postJson("/api/forms/donate-intent", data);
        if (!res.ok) {
            if (res.fieldErrors) {
                for (const [key, messages] of Object.entries(res.fieldErrors)) {
                    const msg = messages?.[0];
                    if (msg) {
                        setError(key as keyof DonateIntentInput, { message: msg });
                    }
                }
            }
            toast.error(res.error);
            return;
        }
        toast.success("Thank you. Our team will follow up shortly.");
        reset({ consent: false });
    });
    return (<form className="space-y-6" noValidate onSubmit={onSubmit}>
      <FormField id="donate-name" label="Full name" error={errors.name?.message}>
        <input id="donate-name" className={inputClass} autoComplete="name" {...register("name")}/>
      </FormField>
      <FormField id="donate-email" label="Email" error={errors.email?.message}>
        <input id="donate-email" className={inputClass} type="email" autoComplete="email" {...register("email")}/>
      </FormField>
      <FormField id="donate-phone" label="Phone (optional)" error={errors.phone?.message} hint="Include country code if outside Nigeria.">
        <input id="donate-phone" className={inputClass} type="tel" {...register("phone")}/>
      </FormField>
      <FormField id="donate-pledge" label="Pledge amount (optional)" error={errors.pledgeAmount?.message} hint="You can share an indicative amount; finance will confirm details.">
        <input id="donate-pledge" className={inputClass} {...register("pledgeAmount")}/>
      </FormField>
      <FormField id="donate-message" label="Message" error={errors.message?.message}>
        <textarea id="donate-message" className={`${inputClass} min-h-32`} {...register("message")}/>
      </FormField>
      <div className="flex items-start gap-3">
        <Controller control={control} name="consent" render={({ field }) => (<input id="donate-consent" type="checkbox" className="mt-1 h-4 w-4 rounded border-cnf-primary/30 text-cnf-primary focus:ring-cnf-primary/30" name={field.name} checked={field.value} onBlur={field.onBlur} ref={field.ref} onChange={(e) => field.onChange(e.target.checked)}/>)}/>
        <label htmlFor="donate-consent" className="text-sm leading-relaxed text-cnf-muted">
          I agree to the foundation contacting me about this enquiry and I have read the{" "}
          <a className="font-semibold text-cnf-primary underline-offset-2 hover:underline" href="/privacy">
            privacy policy
          </a>
          .
        </label>
      </div>
      {errors.consent?.message ? (<p className="text-sm font-medium text-red-700" role="alert">
          {errors.consent.message}
        </p>) : null}
      <button type="submit" disabled={isSubmitting} className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-cnf-primary-light px-5 py-2.5 text-base font-semibold text-white transition-colors hover:bg-cnf-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
        {isSubmitting ? "Sending…" : "Submit enquiry"}
      </button>
    </form>);
}
