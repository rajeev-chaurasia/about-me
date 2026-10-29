import { hero } from "@/content/hero";

export default function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight break-words sm:text-5xl">
        {hero.name}
      </h1>
      <p className="mt-6 text-lg leading-8">{hero.line}</p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {hero.chips.map((chip) => (
          <li key={chip} className="chip">
            {chip}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-muted">{hero.school}</p>
    </section>
  );
}
