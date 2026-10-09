import type { Metadata } from "next";
import { Compass, Eye } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { timeline, values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Wilson Nwafor, CPA and lead financial consultant, and learn how the firm helps New York businesses grow with accurate, transparent accounting.",
};

export default function AboutPage() {
  return (
    <>
      {/* INTRO */}
      <section aria-labelledby="about-title" className="section-y bg-paper">
        <div className="container grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16">
          <div>
            <h1
              id="about-title"
              className="max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tightest md:text-5xl"
            >
              An accountant who treats your numbers like his own
            </h1>
            <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
              <p>
                Wilson Nwafor, CPA, leads the firm as its principal and lead financial consultant. He
                built the practice after years of watching small business owners get buried in
                paperwork, then blindsided by tax bills they never saw coming.
              </p>
              <p>
                Today the firm works with more than 200 New York businesses, from solo professionals to
                growing teams. Every client gets the same standard: accurate books, honest advice, and
                a person who picks up the phone.
              </p>
            </div>
          </div>

          <aside
            aria-label="Wilson Nwafor, profile summary"
            className="rounded-xl border border-line bg-white p-7"
          >
            <div className="flex items-center gap-4">
              <div
                aria-hidden="true"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-navy text-xl font-bold text-white"
              >
                WN
              </div>
              <div>
                <p className="text-lg font-bold">Wilson Nwafor, CPA</p>
                <p className="text-sm text-muted">Principal &amp; Lead Financial Consultant</p>
              </div>
            </div>
            <dl className="mt-6 space-y-4 border-t border-line pt-6 text-[15px]">
              <div>
                <dt className="font-semibold">Focus</dt>
                <dd className="text-muted">Tax strategy, fractional CFO work, small business growth</dd>
              </div>
              <div>
                <dt className="font-semibold">Works with</dt>
                <dd className="text-muted">Founders, professional practices, and family-owned firms</dd>
              </div>
              <div>
                <dt className="font-semibold">Based in</dt>
                <dd className="text-muted">New York, NY</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section aria-label="Mission and vision" className="section-y">
        <div className="container grid gap-5 md:grid-cols-2">
          {[
            {
              Icon: Compass,
              title: "Our mission",
              text: "To give every business owner transparent, accurate financial information, and the guidance to turn it into profit. We explain what the numbers mean, not just what they are.",
            },
            {
              Icon: Eye,
              title: "Our vision",
              text: "A New York where small and growing businesses make confident decisions because their finances are clear, compliant, and always up to date.",
            },
          ].map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.08} className="h-full">
              <section className="h-full rounded-xl bg-navy p-8 text-white md:p-10">
                <Icon className="h-8 w-8 text-gold" aria-hidden="true" />
                <h2 className="mt-5 text-2xl text-white">{title}</h2>
                <p className="mt-3 text-[17px] leading-relaxed text-slate-300">{text}</p>
              </section>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section aria-labelledby="values-title" className="section-y bg-paper">
        <div className="container">
          <Reveal>
            <SectionHeading
              id="values-title"
              title="What we hold ourselves to"
              description="Four principles shape every engagement, from a single tax return to a full-time advisory relationship."
            />
          </Reveal>
          <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <li key={v.title}>
                <Reveal delay={i * 0.06}>
                  <v.icon className="h-7 w-7 text-growth-ink" aria-hidden="true" />
                  <h3 className="mt-4 text-lg">{v.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{v.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TIMELINE */}
      <section aria-labelledby="journey-title" className="section-y">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              id="journey-title"
              title="Our journey in New York"
              description="From a one-person practice to a trusted partner for over 200 local businesses."
            />
          </Reveal>
          <ol className="relative border-l-2 border-line pl-8">
            {timeline.map((t, i) => (
              <li key={t.year} className="relative pb-10 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-growth ring-1 ring-growth"
                />
                <Reveal delay={i * 0.04}>
                  <p className="text-sm font-bold text-growth-ink">{t.year}</p>
                  <h3 className="mt-1 text-lg">{t.title}</h3>
                  <p className="mt-1.5 max-w-lg text-[15px] leading-relaxed text-muted">{t.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
