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
    <section id="contact" className="mx-auto max-w-3xl px-5 py-16 sm:px-6">
      <Reveal>
        <p className="eyebrow font-mono text-[11px]/[16px] tracking-[0.08em] sm:text-[12px]/[16px]">
          {contact.eyebrow}
        </p>
        <h2 className="mt-3 text-[24px]/[32px] font-semibold tracking-[-0.02em] sm:text-[32px]/[40px]">
          {contact.heading}
        </h2>
        <p className="mt-4 text-[14px]/[22px] text-muted sm:text-[15px]/[24px]">{contact.blurb}</p>
        <ul className="mt-6 divide-y divide-border border-y border-border">
          {contact.links.map((link) => {
            const Icon = icons[link.icon];
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center gap-3 px-3 py-4 text-[14px]/[22px] hover:bg-foreground/4 motion-safe:transition-colors sm:text-[15px]/[24px]"
                >
                  <Icon
                    size={18}
                    aria-hidden="true"
                    className="shrink-0 text-muted group-hover:text-foreground motion-safe:transition-colors"
                  />
                  <span className="min-w-0 flex-1 break-all">{link.label}</span>
                  {/* Trailing arrow nudges 2px up-right on hover; no nudge under reduced motion. */}
                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="shrink-0 text-muted duration-150 group-hover:text-foreground motion-safe:transition motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
