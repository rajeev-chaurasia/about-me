import { ArrowUpRight, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import { GitHub, LinkedIn } from "@/components/icons/Brand";
import { contact, type ContactLink } from "@/content/contact";

const icons: Record<ContactLink["icon"], typeof Mail | typeof GitHub> = {
  mail: Mail,
  linkedin: LinkedIn,
  github: GitHub,
  devpost: ArrowUpRight,
};

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Reveal>
        <p className="eyebrow">{contact.eyebrow}</p>
        <h2 className="mt-3 text-2xl font-semibold">{contact.heading}</h2>
        <p className="mt-4 text-muted">{contact.blurb}</p>
        <ul className="mt-6 divide-y divide-border overflow-hidden rounded-xl border border-border">
          {contact.links.map((link) => {
            const Icon = icons[link.icon];
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center gap-3 px-4 py-3 hover:bg-border/40 motion-safe:transition-colors"
                >
                  <Icon
                    size={18}
                    aria-hidden="true"
                    className="shrink-0 text-muted group-hover:text-foreground motion-safe:transition-colors"
                  />
                  <span className="min-w-0 break-all">{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
