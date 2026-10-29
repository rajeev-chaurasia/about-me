"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#shipped", label: "Work" },
  { href: "#how-built", label: "How it's built" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-background/75 backdrop-blur-md transition-colors ${
        scrolled ? "border-border" : "border-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 max-w-3xl items-center justify-between gap-3 px-4 sm:px-6"
      >
        <a href="#hero" className="shrink-0 text-sm font-semibold tracking-tight">
          <span aria-hidden="true" className="sm:hidden">
            RC
          </span>
          <span className="sr-only sm:not-sr-only">Rajeev Ranjan Chaurasia</span>
        </a>
        <ul className="flex items-center gap-3 text-sm text-muted sm:gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="whitespace-nowrap transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
