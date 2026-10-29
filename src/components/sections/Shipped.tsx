import { Fragment } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { GitHub } from "@/components/icons/Brand";
import { shipped, type ShippedStat } from "@/content/shipped";

const linkClass = "underline underline-offset-4 hover:text-foreground";

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag} className="tag font-mono text-[11px]/[20px] sm:text-[12px]/[20px]">
          {tag}
        </li>
      ))}
    </ul>
  );
}

// `className` sets the type size: body in the timeline, small in cards.
function Bullets({ bullets, className }: { bullets: string[]; className: string }) {
  return (
    <ul
      className={`mt-4 list-['–__'] space-y-2 pl-5 text-muted break-words ${className}`}
    >
      {bullets.map((bullet) => (
        <li key={bullet}>{bullet}</li>
      ))}
    </ul>
  );
}

// Big tabular value plus a small muted label on the same baseline.
// `valueClass` sets the value size: 32px in roles, 28px in cards (26px mobile).
function Stat({ stat, valueClass }: { stat: ShippedStat; valueClass: string }) {
  return (
    <p className="mt-4 flex flex-wrap items-baseline gap-x-2">
      <span className={`font-semibold tracking-[-0.02em] tabular-nums ${valueClass}`}>
        {stat.value}
      </span>{" "}
      <span className="text-[13px]/[20px] text-muted sm:text-[14px]/[22px]">{stat.label}</span>
    </p>
  );
}

// Renders "Name · description" with the name emphasised; text is unchanged.
function Title({ title }: { title: string }) {
  const split = title.indexOf(" · ");
  if (split === -1) return <>{title}</>;
  return (
    <>
      <span className="font-semibold">{title.slice(0, split)}</span>
      <span className="text-muted">{title.slice(split)}</span>
    </>
  );
}

export default function Shipped() {
  const { experience, projects, credits } = shipped;

  return (
    <section id="shipped" className="mx-auto max-w-3xl px-5 py-16 sm:px-6">
      <p className="eyebrow font-mono text-[11px]/[16px] tracking-[0.08em] sm:text-[12px]/[16px]">
        {shipped.eyebrow}
      </p>
      <h2 className="mt-2 text-[24px]/[32px] font-semibold tracking-[-0.02em] sm:text-[32px]/[40px]">
        {shipped.heading}
      </h2>

      <div className="mt-10">
        <h3 className="text-[17px]/[26px] font-semibold sm:text-[18px]/[28px]">
          {experience.heading}
        </h3>
        <Reveal className="mt-6">
          <ol>
            {experience.roles.map(
              ({ company, role, dates, location, icon: Icon, stat, bullets, tags }) => (
                // Mobile: the line runs down the whole <li>, dates sit above the
                // role. sm+: dates move to a left column and the line runs down
                // the body only.
                <li key={company} className="group relative pb-10 pl-8 last:pb-0 sm:flex sm:gap-6 sm:pb-0 sm:pl-0">
                  <p className="font-mono text-[12px]/[20px] text-muted sm:w-44 sm:shrink-0 sm:pt-1">
                    <span className="whitespace-nowrap sm:block">{dates}</span>
                    <span className="sm:hidden"> · </span>
                    <span className="whitespace-nowrap sm:block">{location}</span>
                  </p>
                  <div className="min-w-0 sm:relative sm:flex-1 sm:pb-12 sm:pl-8 sm:group-last:pb-0">
                    <span
                      aria-hidden
                      className="absolute top-0 bottom-0 left-2 w-px -translate-x-1/2 bg-border"
                    />
                    <span
                      aria-hidden
                      className="absolute top-1.5 left-2 size-3 -translate-x-1/2 rounded-full border-2 border-foreground bg-background"
                    />
                    <h4 className="mt-1 flex items-center gap-2 text-[17px]/[26px] font-semibold sm:mt-0 sm:text-[18px]/[28px]">
                      <Icon size={16} className="shrink-0 text-muted" aria-hidden />
                      {company}
                    </h4>
                    <p className="mt-1 text-[13px]/[20px] text-muted break-words sm:text-[14px]/[22px]">
                      {role}
                    </p>
                    <Stat stat={stat} valueClass="text-[26px]/[32px] sm:text-[32px]/[40px]" />
                    <Bullets bullets={bullets} className="text-[14px]/[22px] sm:text-[15px]/[24px]" />
                    <Tags tags={tags} />
                  </div>
                </li>
              ),
            )}
          </ol>
        </Reveal>
      </div>

      <div className="mt-14">
        <h3 className="text-[17px]/[26px] font-semibold sm:text-[18px]/[28px]">
          {projects.heading}
        </h3>
        <ul className="mt-6 space-y-6">
          {projects.items.map(({ title, context, icon: Icon, stat, bullets, tags, links }) => (
            <li key={title}>
              <Reveal>
                <article className="card transition duration-200 hover:border-muted motion-safe:hover:-translate-y-0.5 motion-reduce:transition-none">
                  <span className="inline-flex size-9 items-center justify-center rounded-lg border border-border">
                    <Icon size={18} className="text-muted" aria-hidden />
                  </span>
                  <h4 className="mt-4 text-[17px]/[26px] break-words sm:text-[18px]/[28px]">
                    <Title title={title} />
                  </h4>
                  <p className="mt-1 font-mono text-[12px]/[20px] text-muted">{context}</p>
                  <Stat stat={stat} valueClass="text-[26px]/[32px] sm:text-[28px]/[36px]" />
                  <Bullets bullets={bullets} className="text-[13px]/[20px] sm:text-[14px]/[22px]" />
                  <Tags tags={tags} />
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {links.map((link) => {
                      const LinkIcon = link.kind === "repo" ? GitHub : ArrowUpRight;
                      return (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="chip rounded-md hover:border-muted"
                          >
                            <LinkIcon size={14} aria-hidden />
                            {link.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 space-y-1 text-[13px]/[20px] text-muted break-words sm:text-[14px]/[22px]">
        <p>
          <a
            href={credits.hackathons.href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {credits.hackathons.text}
          </a>
        </p>
        <p>
          {credits.certifications.label}:{" "}
          {credits.certifications.links.map((link, index) => (
            <Fragment key={link.href}>
              {index > 0 && " · "}
              <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {link.label}
              </a>
            </Fragment>
          ))}
        </p>
      </div>
    </section>
  );
}
