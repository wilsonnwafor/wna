import Link from "next/link";
import { Clock, Facebook, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import { Logo } from "@/components/Logo";
import { navLinks, services, site } from "@/lib/data";

const socials = [
  { href: site.social.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: site.social.twitter, label: "X (Twitter)", Icon: Twitter },
  { href: site.social.facebook, label: "Facebook", Icon: Facebook },
];

export function Footer() {
  return (
    <footer className="on-dark bg-navy text-slate-300">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1.2fr_1.4fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Precision accounting and strategic financial guidance for growing New York businesses.
          </p>
          <ul className="mt-5 flex gap-2">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white transition-colors hover:bg-white/10"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold text-white">Sitemap</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold text-white">Services</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Contact</h2>
          <address className="mt-4 space-y-3 text-sm not-italic">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span>
                {site.street}
                <br />
                {site.city}
              </span>
            </p>
            <p className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-white">
                {site.email}
              </a>
            </p>
            <p className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span>{site.hours}</span>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Information on this site is general in nature and is not tax or legal advice.</p>
        </div>
      </div>
    </footer>
  );
}
