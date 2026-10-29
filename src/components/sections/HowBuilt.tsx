import { GitPullRequest } from "lucide-react";
import Reveal from "@/components/Reveal";
import { GitHub } from "@/components/icons/Brand";
import { howBuilt } from "@/content/howBuilt";

const number = (index: number) => String(index + 1).padStart(2, "0");

const label = "font-mono text-[11px] leading-4 tracking-[0.08em] text-muted";

export default function HowBuilt() {
  const { fieldNotes } = howBuilt;
  const { labels } = fieldNotes;

  return (
    <section id="how-built" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="eyebrow">{howBuilt.eyebrow}</p>
      <h2 className="mt-2 text-2xl leading-8 font-semibold tracking-[-0.02em] sm:text-[32px] sm:leading-10">
        {howBuilt.heading}
      </h2>
      <p className="mt-3 text-base leading-[26px] text-muted sm:text-lg sm:leading-[30px]">
        {howBuilt.intro}
      </p>

      <ol className="mt-10 space-y-8">
        {howBuilt.steps.map((step, index) => (
          <li key={step.title}>
            <Reveal delay={index * 60} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-4">
              <span className="pt-1 font-mono text-[13px] text-muted">{number(index)}</span>
              <div>
                <h3 className="text-[17px] leading-[26px] font-semibold break-words sm:text-lg sm:leading-7">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-[22px] text-muted break-words sm:text-[15px] sm:leading-6">
                  {step.body}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <ul className="mt-8 flex flex-wrap gap-2">
        {howBuilt.links.map((link) => {
          const Icon = link.kind === "repo" ? GitHub : GitPullRequest;
          return (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="chip hover:border-muted"
              >
                <Icon size={14} aria-hidden />
                {link.label} ↗
              </a>
            </li>
          );
        })}
      </ul>

      <div className="mt-14">
        <h3 className="text-[17px] leading-[26px] font-semibold sm:text-lg sm:leading-7">
          {fieldNotes.heading}
        </h3>
        <p className="mt-2 text-sm leading-[22px] text-muted sm:text-[15px] sm:leading-6">
          {fieldNotes.intro}
        </p>
        <ol className="mt-6 space-y-3">
          {fieldNotes.notes.map((note, index) => {
            const parts = [
              { label: labels.whatHappened, text: note.whatHappened, tone: "text-muted" },
              { label: labels.whyItMatters, text: note.whyItMatters, tone: "text-muted" },
              { label: labels.whatIdShip, text: note.whatIdShip, tone: "text-foreground" },
            ];
            return (
              <li key={note.title}>
                <Reveal>
                  <div className="card grid grid-cols-[1.5rem_minmax(0,1fr)] gap-3 transition duration-200 hover:border-muted motion-safe:hover:-translate-y-0.5 motion-reduce:transition-none sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-4">
                    <span className="pt-0.5 font-mono text-[13px] text-muted">{number(index)}</span>
                    <div>
                      <h4 className="text-base leading-6 font-semibold break-words">{note.title}</h4>
                      <dl className="mt-4 grid gap-4 md:grid-cols-3 md:gap-6">
                        {parts.map((part) => (
                          <div key={part.label}>
                            <dt className={label}>{part.label}</dt>
                            <dd
                              className={`mt-2 text-[13px] leading-5 break-words sm:text-sm sm:leading-[22px] ${part.tone}`}
                            >
                              {part.text}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>

      <ul className="mt-8 flex flex-wrap gap-2">
        {howBuilt.tags.map((tag) => (
          <li key={tag} className="tag font-mono">
            {tag}
          </li>
        ))}
      </ul>
    </section>
  );
}
