import { hero } from "@/content/hero";

export default function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight break-words sm:text-5xl">
        {hero.name}
      </h1>
      <p className="mt-4 text-xl opacity-80">{hero.tagline}</p>
      <p className="mt-6 text-base leading-7">{hero.intro}</p>
    </section>
  );
}
