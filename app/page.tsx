import Link from "next/link";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { LedgerHero } from "@/components/LedgerHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Testimonials } from "@/components/Testimonials";
import { CtaBanner } from "@/components/CtaBanner";
import { services, stats } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section aria-labelledby="hero-title" className="on-dark relative overflow-hidden bg-navy text-white">
        <div className="ledger-rules absolute inset-0" aria-hidden="true" />
        <div className="container relative grid gap-14 py-16 md:py-24 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-10">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-slate-200">
              <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
              Serving 200+ New York Businesses
            </p>
            <h1
              id="hero-title"
              className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tightest text-white sm:text-5xl lg:text-[3.5rem]"
            >
              Precision Accounting &amp; Strategic Financial Guidance for Growing Businesses
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Wilson Nwafor and a small team handle your books, taxes, and financial planning, so you
              can make decisions from numbers you trust.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className={buttonVariants({ variant: "gold", size: "lg" })}>
                Schedule a Consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/services" className={buttonVariants({ variant: "outline-light", size: "lg" })}>
                Explore Services
              </Link>
            </div>
          </div>
          <LedgerHero />
        </div>
      </section>

      {/* STATS */}
      <section aria-label="Firm highlights" className="border-b border-line bg-white">
        <div className="container">
          <dl className="grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col-reverse gap-1 py-6 sm:px-8 sm:py-9 sm:first:pl-0"
              >
                <dt className="text-[15px] text-muted">{s.label}</dt>
                <dd className="text-3xl font-extrabold tracking-tightest text-navy md:text-4xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section aria-labelledby="services-title" className="section-y bg-paper">
        <div className="container">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <SectionHeading
                  id="services-title"
                  title="Everything your finances need, under one roof"
                  description="Four core services, delivered by the same people who know your business."
                />
              </div>
              <Link href="/services" className={buttonVariants({ variant: "outline" })}>
                View all services
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((s, i) => (
              <li key={s.slug}>
                <Reveal delay={(i % 2) * 0.08} className="h-full">
                  <Link
                    href={`/services#${s.slug}`}
                    className="group flex h-full gap-5 rounded-lg border border-line border-l-4 border-l-growth bg-white p-6 transition-shadow hover:shadow-md"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-growth-tint text-growth-ink">
                      <s.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-lg font-bold leading-snug">{s.title}</span>
                      <span className="mt-2 block text-[15px] leading-relaxed text-muted">{s.short}</span>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-growth-ink">
                        Learn more
                        <ArrowRight
                          className="h-4 w-4 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ABOUT / TRUST */}
      <section aria-labelledby="trust-title" className="section-y">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <div>
              <h2 id="trust-title" className="text-3xl leading-[1.15] tracking-tightest md:text-4xl">
                Accuracy is personal here
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Wilson Nwafor started this practice on one belief: a business owner should never have
                to wonder whether the numbers are right. Every report that leaves the firm has been
                reconciled, reviewed, and signed off by Wilson himself.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                You get one accountable point of contact, plain-English explanations, and advice
                shaped by where your business is headed.
              </p>
              <Link href="/about" className={`${buttonVariants({ variant: "navy" })} mt-8`}>
                Meet Wilson
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-3">
              {[
                ["Every report reviewed by Wilson", "No hand-offs to anonymous staff, no surprises at filing time."],
                ["Reconciled monthly, not annually", "Errors get caught while they are still small and cheap to fix."],
                ["Reachable when you need us", "Clear answers within one business day, by email or phone."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-4 rounded-lg border border-line bg-white p-5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-growth-ink text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-bold">{t}</span>
                    <span className="mt-1 block text-[15px] text-muted">{d}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section aria-labelledby="testimonials-title" className="section-y bg-paper">
        <div className="container">
          <Reveal>
            <SectionHeading
              id="testimonials-title"
              title="What clients say after their first close"
              description="Owners across New York trust us with their books, their taxes, and their plans."
            />
          </Reveal>
          <div className="mt-12">
            <Testimonials />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
