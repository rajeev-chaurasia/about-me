import { shipped } from "@/content/shipped";

export default function Shipped() {
  return (
    <section id="shipped" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="eyebrow">{shipped.eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold">{shipped.heading}</h2>
      <ul className="mt-8 space-y-6">
        {shipped.items.map((item) => (
          <li key={item.title} className="card">
            <h3 className="text-lg font-medium break-words">{item.title}</h3>
            <p className="mt-1 text-sm text-muted">{item.context}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 break-words">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
            {item.links && (
              <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                {item.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-muted"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </p>
            )}
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-muted break-words">
        <a
          href={shipped.also.href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-foreground"
        >
          {shipped.also.text}
        </a>
      </p>
    </section>
  );
}
