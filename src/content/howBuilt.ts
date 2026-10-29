export type HowBuiltLink = {
  label: string;
  href: string;
  /** "repo" shows the GitHub mark, "prs" a pull request icon. */
  kind: "repo" | "prs";
};

export type BuildStep = {
  title: string;
  body: string;
};

export type FieldNote = {
  title: string;
  whatHappened: string;
  whyItMatters: string;
  whatIdShip: string;
};

export type HowBuiltContent = {
  eyebrow: string;
  heading: string;
  intro: string;
  steps: BuildStep[];
  links: HowBuiltLink[];
  fieldNotes: {
    heading: string;
    intro: string;
    labels: {
      whatHappened: string;
      whyItMatters: string;
      whatIdShip: string;
    };
    notes: FieldNote[];
  };
  tags: string[];
};

export const howBuilt: HowBuiltContent = {
  eyebrow: "03 · BUILT WITH FREDRIN",
  heading: "How I built this page",
  intro:
    "I treated this repo the way I'd treat a customer deployment: make it agent-ready first, split the work so parallel Workers can't collide, and review every diff against checks written up front.",
  steps: [
    {
      title: "Made the repo agent-ready first",
      body: "The first ticket only set up the scaffold and AGENTS.md: run commands, a file map, conventions, and the traps of a static export. The Worker also wrote a verify script that loads the page in headless Chrome at 320px and 1280px, so every later ticket could prove its own result.",
    },
    {
      title: "Designed the work so agents couldn't collide",
      body: "Every section is one component and one content file, and every ticket was fenced to its own files. A shared design-token ticket ran first, then four Workers built Hero, Shipped, Contact and this section in parallel. Every branch merged cleanly.",
    },
    {
      title: "Wrote tickets as checkable briefs",
      body: "Each ticket stated the outcome, the files it could touch, and acceptance checks a reviewer can verify in seconds: lint, typecheck and build clean, no horizontal scroll at 320px, every number matching its source.",
    },
    {
      title: "Reviewed the diffs and sent work back",
      body: "Review caught a documentation rule that would have gone stale, a tagline written in all lowercase, and a Worker that added project labels the ticket never gave it. I checked each label against its source before keeping or replacing it. Each fix went back as a one-line comment and returned as its own pull request.",
    },
  ],
  links: [
    { label: "Repo", href: "https://github.com/rajeev-chaurasia/about-me", kind: "repo" },
    {
      label: "PR history",
      href: "https://github.com/rajeev-chaurasia/about-me/pulls?q=is%3Apr+is%3Aclosed",
      kind: "prs",
    },
  ],
  fieldNotes: {
    heading: "Field notes",
    intro:
      "Where Fredrin got in my way, written up the way I'd hand it to the team from a customer site: what happened, who it would hurt, and what I'd ship.",
    labels: {
      whatHappened: "WHAT HAPPENED",
      whyItMatters: "WHY IT MATTERS",
      whatIdShip: "WHAT I'D SHIP",
    },
    notes: [
      {
        title: "First run failed on a stale agent CLI",
        whatHappened:
          "Preflight passed, but my Claude Code (2.1.241) was older than the model required (2.1.280+), so the first ticket failed with API 400s. The update installed, but the running session kept the old process, and typing \"claude update\" into the session was sent to the model as a prompt.",
        whyItMatters:
          "It's a new user's very first ticket. At a customer, every engineer with an older CLI hits a dead end on day one and concludes the product is broken.",
        whatIdShip:
          "Preflight checks the minimum CLI version for the selected model, and the card shows a \"Restart session\" button when an update is pending.",
      },
      {
        title: "Workers can add content nobody asked for",
        whatHappened:
          "A Worker filling in project cards added two labels the ticket never mentioned. One was accurate and one I replaced, but the review view gave no hint that they were new.",
        whyItMatters:
          "Teams adopting agents need to trust that a diff contains only what was asked for. Unrequested user-facing text is the easiest thing to miss in review.",
        whatIdShip:
          "Highlight new user-facing strings in the diff that don't appear in the ticket or the repo, so the reviewer checks those first.",
      },
      {
        title: "Switching to GitHub strands in-flight tickets",
        whatHappened:
          "A ticket already in Review when I switched from local git mode to GitHub stayed a local diff with no pull request.",
        whyItMatters:
          "Teams that trial Fredrin locally hit this at exactly the moment they connect GitHub to adopt it.",
        whatIdShip: "After publishing, offer \"Open PR for this branch\" on tickets still in Review.",
      },
      {
        title: "Local squash-merge loses the commit history",
        whatHappened:
          "Shipping in local git mode named the squash commit after the branch (\"Merge fredrin-cmvsj6c5-…\") and dropped the Worker's descriptive commit messages.",
        whyItMatters:
          "A customer's git log is a shared record. Commits named after branch IDs make it harder to audit what agents changed.",
        whatIdShip: "Use the ticket title as the commit subject and the ticket summary as the body.",
      },
    ],
  },
  tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Fredrin"],
};
