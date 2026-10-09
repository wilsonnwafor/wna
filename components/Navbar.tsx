"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { buttonVariants } from "@/components/ui/button";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container flex h-16 items-center justify-between md:h-[72px]">
        <Logo />

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={cn(
                    "relative rounded-md px-3.5 py-2 text-[15px] font-medium text-muted transition-colors hover:text-navy",
                    isActive(l.href) &&
                      "text-navy after:absolute after:inset-x-3.5 after:-bottom-[1px] after:h-0.5 after:rounded-full after:bg-growth"
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact" className={cn(buttonVariants({ size: "sm" }), "hidden md:inline-flex")}>
            Get Started
          </Link>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-navy hover:bg-paper md:hidden"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-navy/50 data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in" />
              <Dialog.Content
                aria-describedby={undefined}
                className="fixed inset-y-0 right-0 z-50 flex w-[min(88vw,22rem)] flex-col bg-white p-6 shadow-xl data-[state=closed]:animate-slide-out-right data-[state=open]:animate-slide-in-right"
              >
                <div className="flex items-center justify-between">
                  <Dialog.Title className="text-base font-bold">Menu</Dialog.Title>
                  <Dialog.Close
                    aria-label="Close menu"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line hover:bg-paper"
                  >
                    <X className="h-5 w-5" aria-hidden="true" />
                  </Dialog.Close>
                </div>
                <nav aria-label="Mobile" className="mt-6">
                  <ul className="space-y-1">
                    {navLinks.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          onClick={() => setOpen(false)}
                          aria-current={isActive(l.href) ? "page" : undefined}
                          className={cn(
                            "block rounded-md px-3 py-3 text-lg font-semibold text-navy hover:bg-paper",
                            isActive(l.href) && "bg-growth-tint text-growth-ink"
                          )}
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className={cn(buttonVariants({ size: "lg" }), "mt-auto w-full")}
                >
                  Get Started
                </Link>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
