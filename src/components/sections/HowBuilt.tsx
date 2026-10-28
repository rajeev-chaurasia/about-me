import { howBuilt } from "@/content/howBuilt";

export default function HowBuilt() {
  return (
    <section id="how-built" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h2 className="text-2xl font-semibold">{howBuilt.heading}</h2>
      <div className="mt-6 space-y-4 leading-7">
        {howBuilt.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
