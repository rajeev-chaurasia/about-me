import { shipped } from "@/content/shipped";

export default function Shipped() {
  return (
    <section id="shipped" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h2 className="text-2xl font-semibold">{shipped.heading}</h2>
      <ul className="mt-6 space-y-6">
        {shipped.items.map((item) => (
          <li key={item.title}>
            <h3 className="text-lg font-medium">
              {item.href ? <a href={item.href}>{item.title}</a> : item.title}
            </h3>
            <p className="mt-1 opacity-80">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
