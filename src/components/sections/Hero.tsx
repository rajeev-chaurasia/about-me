import { Mail } from "lucide-react";
import { GitHub, LinkedIn } from "@/components/icons/Brand";
import { hero } from "@/content/hero";

const iconButton =
  "inline-flex size-10 items-center justify-center rounded-lg border border-border text-muted hover:border-foreground hover:text-foreground motion-safe:transition-colors";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate mx-auto max-w-3xl px-5 py-20 sm:px-6"
    >
      {/* Decorative backdrop glow. `closest-side` ends the gradient at the
          section's edges, so it is fully transparent before any edge. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-radial-[closest-side_at_40%_40%] from-accent/5 via-border/20 via-40% to-transparent"
      />
      <h1 className="text-[32px]/[38px] font-semibold tracking-[-0.025em] break-words sm:text-[48px]/[56px]">
        {hero.name}
      </h1>
      <p className="mt-6 text-[16px]/[26px] text-muted sm:text-[18px]/[30px]">
        {hero.line}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {hero.chips.map((chip) => (
          <li key={chip.label} className="chip">
            {chip.status && (
              <span aria-hidden="true" className="pulse-dot bg-success" />
            )}
            {chip.label}
          </li>
        ))}
      </ul>
      <p className="mt-6 font-mono text-[12px]/[20px] text-muted sm:text-[13px]/[20px]">
        {hero.school}
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={hero.email.href}
          className="inline-flex h-10 items-center gap-2 rounded-lg bg-foreground px-5 text-sm font-medium text-background hover:bg-muted motion-safe:transition-colors"
        >
          <Mail size={16} aria-hidden="true" />
          {hero.email.label}
        </a>
        <a
          href={hero.github.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={hero.github.label}
          className={iconButton}
        >
          <GitHub size={18} />
        </a>
        <a
          href={hero.linkedin.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={hero.linkedin.label}
          className={iconButton}
        >
          <LinkedIn size={18} />
        </a>
      </div>
    </section>
  );
}
