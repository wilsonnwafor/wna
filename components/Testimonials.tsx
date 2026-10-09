import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  return (
    <ul className="grid gap-5 md:grid-cols-3">
      {testimonials.map((t, i) => (
        <li key={t.name}>
          <Reveal delay={i * 0.08} className="h-full">
            <figure className="flex h-full flex-col rounded-lg border border-line bg-white p-6">
              <div role="img" aria-label={`${t.rating} out of 5 stars`} className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, n) => (
                  <Star
                    key={n}
                    aria-hidden="true"
                    className={`h-4 w-4 ${n < t.rating ? "fill-gold text-gold" : "text-line"}`}
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <span className="block text-sm font-bold">{t.name}</span>
                <span className="block text-sm text-muted">{t.role}</span>
              </figcaption>
            </figure>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
