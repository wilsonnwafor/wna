import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { buttonVariants } from "@/components/ui/button";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Bookkeeping and financial reporting, tax preparation and planning, fractional CFO advisory, and payroll services for New York businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <section aria-labelledby="services-title" className="section-y bg-paper">
        <div className="container">
          <SectionHeading
            as="h1"
            id="services-title"
            title="Accounting services built around how you run your business"
            description="Choose one service or combine them. Each comes with a named contact, a clear scope, and a written quote after your free consultation."
          />
          <nav aria-label="Services on this page" className="mt-8">
            <ul className="flex flex-wrap gap-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`#${s.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold hover:border-growth hover:text-growth-ink"
                  >
                    <s.icon className="h-4 w-4" aria-hidden="true" />
                    {s.title.split(" & ")[0]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <div className="container">
        {services.map((s, i) => (
          <section
            key={s.slug}
            id={s.slug}
            aria-labelledby={`${s.slug}-title`}
            className="grid scroll-mt-24 gap-8 border-b border-line py-14 last:border-b-0 md:py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-16"
          >
            <Reveal>
              <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-growth-tint text-growth-ink">
                <s.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h2 id={`${s.slug}-title`} className="mt-5 text-2xl leading-tight md:text-3xl">
                {s.title}
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">{s.summary}</p>
              <Link
                href="/contact"
                className={`${buttonVariants({ variant: i % 2 === 0 ? "primary" : "navy" })} mt-7`}
              >
                Ask about this service
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
            <Reveal delay={0.08}>
              <ul className="rounded-xl border border-line bg-white p-2">
                {s.benefits.map((b) => (
                  <li key={b} className="flex gap-3 rounded-lg p-4 text-[16px] leading-snug">
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-growth-ink"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>
        ))}
      </div>

      <section aria-labelledby="faq-title" className="section-y bg-paper">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              id="faq-title"
              title="Questions we hear most"
              description="Cannot find your answer? Send us a message and we will reply within one business day."
            />
            <Link href="/contact" className={`${buttonVariants({ variant: "outline" })} mt-6`}>
              Contact us
            </Link>
          </Reveal>
          <FaqAccordion />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
