"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

const rows = [
  { label: "Client receipts", amount: "+ $18,400.00", tone: "in" },
  { label: "Payroll run, 14 staff", amount: "− $9,150.00", tone: "out" },
  { label: "Sales tax set aside", amount: "− $1,312.50", tone: "out" },
  { label: "Q2 estimate reserved", amount: "− $2,480.00", tone: "out" },
] as const;

/**
 * The hero's single orchestrated moment: a month-end ledger whose rows post in
 * sequence and end with a "Reconciled" stamp. Static for reduced-motion users.
 */
export function LedgerHero() {
  const reduce = useReducedMotion();
  const step = 0.35;

  return (
    <figure
      className="relative mx-auto w-full max-w-md"
      aria-label="Sample month-end ledger showing four postings and a reconciled net position of $5,457.50"
    >
      <div className="rounded-xl bg-white p-6 text-navy shadow-2xl shadow-black/30 md:p-7">
        <div className="flex items-baseline justify-between border-b-2 border-navy pb-3">
          <p className="text-base font-bold">Month-end close</p>
          <p className="text-sm text-muted">Sample client, March</p>
        </div>

        <ul className="divide-y divide-line">
          {rows.map((r, i) => (
            <motion.li
              key={r.label}
              className="flex items-center justify-between py-3.5 text-[15px]"
              initial={reduce ? false : { opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * step, duration: 0.4, ease: "easeOut" }}
            >
              <span className="text-muted">{r.label}</span>
              <span
                className={`font-semibold tabular-nums ${
                  r.tone === "in" ? "text-growth-ink" : "text-navy"
                }`}
              >
                {r.amount}
              </span>
            </motion.li>
          ))}
        </ul>

        <motion.div
          className="flex items-center justify-between border-t-2 border-navy pt-4"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 + rows.length * step, duration: 0.4 }}
        >
          <span className="text-base font-bold">Net position</span>
          <span className="text-2xl font-bold tabular-nums tracking-tight">$5,457.50</span>
        </motion.div>
      </div>

      <motion.div
        className="absolute -bottom-5 -right-2 flex rotate-[-6deg] items-center gap-2 rounded-lg border-2 border-gold bg-gold-tint px-4 py-2 text-sm font-bold text-navy shadow-lg md:-right-6"
        initial={reduce ? false : { opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.9 + rows.length * step,
          type: "spring",
          stiffness: 320,
          damping: 18,
        }}
      >
        <Check className="h-4 w-4 text-growth-ink" strokeWidth={3} aria-hidden="true" />
        Reconciled
      </motion.div>
    </figure>
  );
}
