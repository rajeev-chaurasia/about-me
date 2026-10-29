import { Mail } from "lucide-react";
import { GitHub, LinkedIn } from "@/components/icons/Brand";
import { hero } from "@/content/hero";

const iconButton =
  "inline-flex size-10 items-center justify-center rounded-full border border-border text-muted hover:border-foreground hover:text-foreground motion-safe:transition-colors";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate mx-auto max-w-3xl px-4 py-20 sm:px-6"
    >
      {/* Decorative backdrop glow. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-radial-[ellipse_at_30%_20%] from-accent/5 via-border/20 via-35% to-transparent to-70%"
      />
      <h1 className="text-4xl font-bold tracking-tight break-words sm:text-6xl sm:tracking-tighter">
        {hero.name}
      </h1>
      <p className="mt-6 text-lg leading-8">{hero.line}</p>
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
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={hero.email.href}
          className="inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background hover:bg-muted motion-safe:transition-colors"
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
      <p className="mt-6 text-sm text-muted">{hero.school}</p>
    </section>
  );
}
