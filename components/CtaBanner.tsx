import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/data";

export function CtaBanner({
  title = "Ready for books you can trust?",
  text = "Book a free 30-minute consultation. We will review your numbers and tell you plainly where you can save time and tax.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="section-y">
      <div className="container">
        <Reveal>
          <div className="on-dark relative overflow-hidden rounded-2xl bg-navy px-6 py-12 text-white md:px-14 md:py-16">
            <div className="ledger-rules absolute inset-0" aria-hidden="true" />
            <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <h2 id="cta-title" className="text-3xl leading-tight text-white md:text-4xl">
                  {title}
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-300">{text}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-stretch">
                <Link href="/contact" className={buttonVariants({ variant: "gold", size: "lg" })}>
                  Schedule a consultation
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={`mailto:${site.email}`}
                  className={buttonVariants({ variant: "outline-light", size: "lg" })}
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
