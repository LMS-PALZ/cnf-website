"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useId } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { submitFormWithToast } from "@/lib/forms/submit-with-toast";
import { type NewsletterInput, newsletterSchema } from "@/lib/forms/schemas";
const inputClass = "w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/55 focus:border-cnf-accent focus:outline-none focus:ring-2 focus:ring-cnf-accent/30";
export function NewsletterForm() {
    const idPrefix = useId();
    const { register, handleSubmit, setError, reset, formState: { errors, isSubmitting }, } = useForm<NewsletterInput>({
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
    return (<form noValidate onSubmit={onSubmit} className="space-y-3">
      
      <div>
        <label htmlFor={`${idPrefix}-name`} className="sr-only">
          Full name
        </label>
        <input id={`${idPrefix}-name`} type="text" autoComplete="name" placeholder="Your full name" aria-invalid={errors.name ? true : undefined} className={inputClass} {...register("name")}/>
        {errors.name?.message ? (<p className="mt-1 text-xs font-medium text-cnf-accent" role="alert">
            {errors.name.message}
          </p>) : null}
      </div>

      
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="flex-1">
          <label htmlFor={`${idPrefix}-email`} className="sr-only">
            Email address
          </label>
          <input id={`${idPrefix}-email`} type="email" autoComplete="email" placeholder="Your email address" aria-invalid={errors.email ? true : undefined} className={inputClass} {...register("email")}/>
          {errors.email?.message ? (<p className="mt-1 text-xs font-medium text-cnf-accent" role="alert">
              {errors.email.message}
            </p>) : null}
        </div>

        <Button type="submit" variant="accent" size="lg" className="sm:w-auto sm:shrink-0 sm:self-stretch" disabled={isSubmitting}>
          {isSubmitting ? "Subscribing\u2026" : "Subscribe to Updates"}
        </Button>
      </div>

      <p className="text-xs text-white/70">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>);
}
