import { howBuilt } from "@/content/howBuilt";

export default function HowBuilt() {
  const { build, fieldNotes } = howBuilt;

  return (
    <section id="how-built" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="eyebrow">{howBuilt.eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold">{howBuilt.heading}</h2>

      <div className="mt-8">
        <h3 className="text-lg font-medium">{build.heading}</h3>
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-7">
          {build.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <ul className="mt-4 flex flex-wrap gap-2">
          {build.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="chip hover:border-muted"
              >
                {link.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-lg font-medium">{fieldNotes.heading}</h3>
        <p className="mt-1 text-muted">{fieldNotes.intro}</p>
        <ol className="mt-6 space-y-4">
          {fieldNotes.notes.map((note, index) => (
            <li key={note.title} className="card">
              <h4 className="font-medium break-words">
                {index + 1}. {note.title}
              </h4>
              <dl className="mt-3 space-y-3 leading-7">
                <div>
                  <dt className="eyebrow">What happened</dt>
                  <dd className="mt-1 break-words">{note.whatHappened}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Fix</dt>
                  <dd className="mt-1 break-words">{note.fix}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>
      </div>

      <ul className="mt-8 flex flex-wrap gap-2">
        {howBuilt.tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
    </section>
  );
}
