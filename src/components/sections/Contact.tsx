import { contact } from "@/content/contact";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h2 className="text-2xl font-semibold">{contact.heading}</h2>
      <p className="mt-4 opacity-80">{contact.blurb}</p>
      <ul className="mt-6 space-y-2">
        {contact.links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="break-all underline underline-offset-4">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
