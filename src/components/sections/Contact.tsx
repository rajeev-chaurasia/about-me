import { contact } from "@/content/contact";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="eyebrow">{contact.eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold">{contact.heading}</h2>
      <p className="mt-4 text-muted">{contact.blurb}</p>
      <ul className="mt-6 space-y-2">
        {contact.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="break-all underline decoration-border underline-offset-4 hover:decoration-foreground"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
