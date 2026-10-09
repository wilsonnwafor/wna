import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Wilson Nwafor Accounting Services, home"
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      <svg width="36" height="36" viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="12" fill={light ? "#FFFFFF" : "#0F172A"} />
        <path
          d="M14 20l8 24 10-24 10 24 8-24"
          fill="none"
          stroke={light ? "#0F172A" : "#FFFFFF"}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12 50h40" stroke="#D97706" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <span className="leading-tight">
        <span className={cn("block text-[15px] font-bold", light ? "text-white" : "text-navy")}>
          Wilson Nwafor
        </span>
        <span className={cn("block text-xs font-medium", light ? "text-slate-300" : "text-muted")}>
          Accounting Services
        </span>
      </span>
    </Link>
  );
}
