import { Fragment } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { GitHub } from "@/components/icons/Brand";
import { shipped } from "@/content/shipped";

const linkClass = "underline underline-offset-4 hover:text-foreground";

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag} className="tag">
          {tag}
        </li>
      ))}
    </ul>
  );
}

function Bullets({ bullets }: { bullets: string[] }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 break-words">
      {bullets.map((bullet) => (
        <li key={bullet}>{bullet}</li>
      ))}
    </ul>
  );
}

export default function Shipped() {
  const { experience, projects, credits } = shipped;

  return (
    <section id="shipped" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="eyebrow">{shipped.eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold">{shipped.heading}</h2>

      <div className="mt-8">
        <h3 className="text-lg font-medium">{experience.heading}</h3>
        <Reveal className="mt-6">
          <ol>
            {experience.roles.map(
              ({ company, role, dates, location, icon: Icon, stat, bullets, tags }) => (
                // Mobile: the line runs down the whole <li>, dates sit above the
                // role. sm+: dates move to a left column and the line runs down
                // the body only.
                <li key={company} className="group relative pb-10 pl-8 last:pb-0 sm:flex sm:gap-6 sm:pb-0 sm:pl-0">
                  <p className="text-sm text-muted sm:w-36 sm:shrink-0 sm:pt-1 sm:text-right">
                    <span className="sm:block">{dates}</span>
                    <span className="sm:hidden"> · </span>
                    <span className="sm:block">{location}</span>
                  </p>
                  <div className="min-w-0 sm:relative sm:flex-1 sm:pb-10 sm:pl-8 sm:group-last:pb-0">
                    <span
                      aria-hidden
                      className="absolute top-0 bottom-0 left-2 w-px -translate-x-1/2 bg-border"
                    />
                    <span
                      aria-hidden
                      className="absolute top-1.5 left-2 size-3 -translate-x-1/2 rounded-full border-2 border-foreground bg-background"
                    />
                    <h4 className="mt-1 flex items-center gap-2 font-medium sm:mt-0">
                      <Icon size={16} className="shrink-0 text-muted" aria-hidden />
                      {company}
                    </h4>
                    <p className="mt-1 text-sm text-muted break-words">{role}</p>
                    <p className="mt-3 text-2xl font-semibold tracking-tight">{stat}</p>
                    <Bullets bullets={bullets} />
                    <Tags tags={tags} />
                  </div>
                </li>
              ),
            )}
          </ol>
        </Reveal>
      </div>

      <div className="mt-12">
        <h3 className="text-lg font-medium">{projects.heading}</h3>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2">
          {projects.items.map(
            ({ title, context, icon: Icon, stat, bullets, tags, links }, index) => (
              <li key={title}>
                <Reveal className="h-full" delay={(index % 2) * 100}>
                  <article className="card h-full transition duration-200 hover:border-muted motion-safe:hover:-translate-y-0.5 motion-reduce:transition-none">
                    <Icon size={20} className="text-muted" aria-hidden />
                    <h4 className="mt-3 font-medium break-words">{title}</h4>
                    <p className="mt-1 text-sm text-muted">{context}</p>
                    <p className="mt-3 text-2xl font-semibold tracking-tight">{stat}</p>
                    <Bullets bullets={bullets} />
                    <Tags tags={tags} />
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {links.map((link) => {
                        const LinkIcon = link.kind === "repo" ? GitHub : ArrowUpRight;
                        return (
                          <li key={link.href}>
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="chip hover:border-muted"
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
            ),
          )}
        </ul>
      </div>

      <div className="mt-8 space-y-1 text-sm text-muted break-words">
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
