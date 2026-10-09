import type { Metadata } from "next";
import { Clock, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { MapCard } from "@/components/MapCard";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free consultation with Wilson Nwafor Accounting Services. Email, visit us at 123 Maddison Street, New York, or send a message.",
};

export default function ContactPage() {
  const info = [
    {
      Icon: Mail,
      title: "Email",
      body: (
        <a href={`mailto:${site.email}`} className="break-all font-medium text-growth-ink hover:underline">
          {site.email}
        </a>
      ),
    },
    {
      Icon: MapPin,
      title: "Office",
      body: (
        <address className="not-italic text-muted">
          {site.street}
          <br />
          {site.city}
        </address>
      ),
    },
    { Icon: Clock, title: "Hours", body: <p className="text-muted">{site.hours}</p> },
  ];

  return (
    <>
      <section aria-labelledby="contact-title" className="bg-paper py-14 md:py-20">
        <div className="container">
          <h1
            id="contact-title"
            className="max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tightest md:text-5xl"
          >
            Let&rsquo;s talk about your numbers
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Your first 30-minute consultation is free. Tell us what you need and we will reply within one
            business day.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <div>
            <h2 className="mb-6 text-2xl">Send us a message</h2>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="mb-6 text-2xl">Business information</h2>
              <ul className="space-y-5">
                {info.map(({ Icon, title, body }) => (
                  <li key={title} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-growth-tint text-growth-ink">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="text-[15px]">
                      <p className="font-bold">{title}</p>
                      {body}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <MapCard />
          </div>
        </div>
      </section>
    </>
  );
}
