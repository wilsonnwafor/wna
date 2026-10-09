"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const serviceOptions = [
  "Bookkeeping & Financial Reporting",
  "Tax Preparation & Planning",
  "Fractional CFO & Financial Advisory",
  "Payroll & Business Advisory",
  "Not sure yet",
] as const;

const schema = z.object({
  name: z.string().trim().min(2, "Enter your full name."),
  email: z.string().trim().min(1, "Enter your email address.").email("Enter a valid email address, like name@company.com."),
  phone: z
    .string()
    .trim()
    .refine((v) => v === "" || /^[+()\-.\s\d]{7,20}$/.test(v), "Enter a valid phone number, like (212) 555-0123.")
    .optional(),
  service: z
    .string()
    .min(1, "Choose the service you need.")
    .refine((v) => (serviceOptions as readonly string[]).includes(v), "Choose a service from the list."),
  message: z
    .string()
    .trim()
    .min(20, "Tell us a little more. Please write at least 20 characters.")
    .max(1500, "Keep your message under 1,500 characters."),
});

type FormValues = z.infer<typeof schema>;

const field =
  "w-full rounded-md border bg-white px-3.5 py-2.5 text-[15px] text-navy placeholder:text-slate-400 focus:border-growth-ink focus:outline-none focus:ring-2 focus:ring-growth/30";

function Field({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">
        {label}
        {optional && <span className="ml-1.5 font-normal text-muted">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm font-medium text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", service: "", message: "" },
  });

  const onSubmit = async (data: FormValues) => {
    // TODO: wire this to your backend. Options:
    //  - a Next.js Route Handler (app/api/contact/route.ts) that sends email via Resend/SendGrid
    //  - a form service such as Formspree or Basin
    // For now the submission is simulated so the UI flow can be reviewed end to end.
    await new Promise((r) => setTimeout(r, 900));
    console.info("Contact form submission", data);
    setSent(true);
    reset();
  };

  if (sent) {
    return (
      <div role="status" className="rounded-xl border border-growth/40 bg-growth-tint p-8">
        <CheckCircle2 className="h-9 w-9 text-growth-ink" aria-hidden="true" />
        <h2 className="mt-4 text-2xl">Message sent</h2>
        <p className="mt-2 text-[16px] leading-relaxed text-muted">
          Thanks for reaching out. Wilson or a member of the team will reply within one business day.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setSent(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  const describedBy = (k: keyof FormValues) => (errors[k] ? `${k}-error` : undefined);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" error={errors.name?.message}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Smith"
            aria-invalid={!!errors.name}
            aria-describedby={describedBy("name")}
            className={cn(field, errors.name ? "border-red-600" : "border-line")}
            {...register("name")}
          />
        </Field>
        <Field id="email" label="Email" error={errors.email?.message}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={describedBy("email")}
            className={cn(field, errors.email ? "border-red-600" : "border-line")}
            {...register("email")}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="phone" label="Phone number" optional error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(212) 555-0123"
            aria-invalid={!!errors.phone}
            aria-describedby={describedBy("phone")}
            className={cn(field, errors.phone ? "border-red-600" : "border-line")}
            {...register("phone")}
          />
        </Field>
        <Field id="service" label="Service needed" error={errors.service?.message}>
          <select
            id="service"
            aria-invalid={!!errors.service}
            aria-describedby={describedBy("service")}
            className={cn(field, errors.service ? "border-red-600" : "border-line")}
            {...register("service")}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="message" label="How can we help?" error={errors.message?.message}>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your business and what you need help with."
          aria-invalid={!!errors.message}
          aria-describedby={describedBy("message")}
          className={cn(field, "resize-y", errors.message ? "border-red-600" : "border-line")}
          {...register("message")}
        />
      </Field>

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
}
