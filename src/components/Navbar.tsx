"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/nav";
import { Logo } from "./Logo";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-[var(--navy)] text-white shadow-[0_2px_12px_rgba(10,38,71,0.25)]">
      <nav className="container-page flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5 font-extrabold tracking-tight">
          <Logo size={34} light />
          <span className="leading-tight">
            <span className="block text-[15px] sm:text-base">Frankel Jaguars</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sky)]">
              Boys Tennis
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-semibold">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                data-active={isActive(item.href)}
                className="navlink text-white/90 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/10 transition-colors"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[var(--navy-700)]">
          <ul className="container-page py-3 grid grid-cols-2 gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  data-active={isActive(item.href)}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                    isActive(item.href) ? "bg-white/15 text-white" : "text-white/85 hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
