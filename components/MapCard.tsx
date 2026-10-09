import { ExternalLink, MapPin } from "lucide-react";
import { site } from "@/lib/data";

/**
 * Visual map placeholder: a stylised street grid with a pin. Swap for a real
 * Google Maps / Mapbox embed by replacing the <svg> block with an <iframe>.
 */
export function MapCard() {
  const q = encodeURIComponent(`${site.street}, ${site.city}`);
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-white">
      <div className="relative h-56 bg-slate-100 md:h-64">
        <svg
          viewBox="0 0 400 260"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-label="Illustrative map showing the office on Maddison Street"
        >
          <rect width="400" height="260" fill="#E2E8F0" />
          <rect x="250" y="20" width="120" height="70" rx="6" fill="#BBF7D0" />
          <path d="M0 190 C90 170 160 215 260 195 S360 170 400 180 V260 H0Z" fill="#BFDBFE" />
          <g stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" fill="none">
            <path d="M0 70 H400" />
            <path d="M0 140 H400" />
            <path d="M110 0 V260" />
            <path d="M250 0 V260" />
          </g>
          <g stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" fill="none">
            <path d="M0 105 H400" />
            <path d="M180 0 V260" />
            <path d="M330 0 V260" />
            <path d="M40 0 L110 140" />
          </g>
          <g transform="translate(180 105)">
            <circle r="24" fill="#059669" opacity="0.18" />
            <circle r="9" fill="#0F172A" stroke="#FFFFFF" strokeWidth="3" />
          </g>
        </svg>
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow">
          <MapPin className="h-4 w-4 text-growth-ink" aria-hidden="true" />
          {site.street}
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 p-5">
        <p className="text-sm text-muted">
          {site.street}, {site.city}
        </p>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${q}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-growth-ink hover:underline"
        >
          Get directions
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </div>
  );
}
