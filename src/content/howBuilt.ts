export type HowBuiltLink = {
  label: string;
  href: string;
};

export type FieldNote = {
  title: string;
  whatHappened: string;
  fix: string;
};

export type HowBuiltContent = {
  eyebrow: string;
  heading: string;
  build: {
    heading: string;
    points: string[];
    links: HowBuiltLink[];
  };
  fieldNotes: {
    heading: string;
    intro: string;
    notes: FieldNote[];
  };
  tags: string[];
};

export const howBuilt: HowBuiltContent = {
  eyebrow: "03 · HOW THIS PAGE WAS BUILT",
  heading: "How This Page Was Built",
  build: {
    heading: "The build",
    points: [
      "I built this page entirely with Fredrin, one ticket at a time, each in its own branch and worktree.",
      "The first ticket scaffolded the site and wrote AGENTS.md, so every later Worker knew the commands, file map and traps before writing any code.",
      "A design ticket set shared tokens, so the parallel Workers didn't invent their own styling.",
      "Hero, Shipped and Contact ran as 3 Workers in parallel, each fenced to its own files, so they merged without conflicts.",
      "I reviewed every diff before merging.",
    ],
    links: [
      { label: "Repo", href: "https://github.com/rajeev-chaurasia/about-me" },
      {
        label: "PR history",
        href: "https://github.com/rajeev-chaurasia/about-me/pulls?q=is%3Apr+is%3Aclosed",
      },
    ],
  },
  fieldNotes: {
    heading: "Field notes",
    intro: "What I hit onboarding to Fredrin, and what I'd change.",
    notes: [
      {
        title: "Stale agent CLI",
        whatHappened:
          "Preflight passed, but my Claude Code (2.1.241) was older than the model needed (2.1.280+), so the first run failed with API 400s. The update installed, but the live session kept the old process, and typing \"claude update\" in the session just went to the model as a message.",
        fix: "Preflight should check the minimum CLI version for the selected model, and the card should show a \"restart session\" button when an update is pending.",
      },
      {
        title: "Commit message on local ship",
        whatHappened:
          "The local squash-merge named the commit after the branch (\"Merge fredrin-...\") and dropped the Worker's good commit messages.",
        fix: "Use the ticket title and summary as the squash commit message.",
      },
      {
        title: "Switching local → GitHub mid-ticket",
        whatHappened:
          "A ticket already in Review when I turned on GitHub stays a local diff with no PR.",
        fix: "After publish, offer an \"open PR for this branch\" action on tickets still in Review.",
      },
    ],
  },
  tags: ["Next.js", "TypeScript", "Tailwind", "Fredrin"],
};
