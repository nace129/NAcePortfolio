"use client";

import { useState } from "react";
import { navLinks } from "@/data/content";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-10">
        <a
          href="#top"
          className="font-mono text-lg font-semibold tracking-tight text-text"
          aria-label="Back to top"
        >
          NS<span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          <ol className="flex items-center gap-8 font-mono text-sm text-text-secondary">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="link-underline transition-colors hover:text-accent"
                >
                  <span className="text-accent">0{i + 1}.</span> {link.label}
                </a>
              </li>
            ))}
          </ol>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded border border-border"
          >
            <span
              className={`h-px w-5 bg-text transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-5 bg-text transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-border bg-bg px-6 py-4 md:hidden"
        >
          <ol className="flex flex-col gap-4 font-mono text-sm text-text-secondary">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-accent"
                >
                  <span className="text-accent">0{i + 1}.</span> {link.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}
    </header>
  );
}
