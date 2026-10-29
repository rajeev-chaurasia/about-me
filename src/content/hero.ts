export type HeroChip = {
  label: string;
  /** Shows a pulsing success dot before the label (the availability chip). */
  status?: boolean;
};

export type HeroAction = {
  label: string;
  href: string;
};

export type HeroContent = {
  name: string;
  line: string;
  chips: HeroChip[];
  /** Primary button under the chips. */
  email: HeroAction;
  /** Icon-only buttons; `label` is the aria-label. Same URLs as Contact. */
  github: HeroAction;
  linkedin: HeroAction;
  school: string;
};

export const hero: HeroContent = {
  name: "Rajeev Ranjan Chaurasia",
  line: "Software engineer building AI agent systems with guardrails that hold up in production. Most recently at NVIDIA, making Omniverse CI smarter about what it can safely skip.",
  chips: [
    { label: "Available Jan 2027", status: true },
    { label: "SF Bay Area, remote ok" },
    { label: "TypeScript / Python / Go / Java" },
  ],
  email: {
    label: "Email me",
    href: "mailto:rajeevchaurasia.dev@gmail.com",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/rajeev-chaurasia",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://linkedin.com/in/rajeev-ranjan-chaurasia",
  },
  school: "M.S. Software Engineering @ SJSU, Dec 2026",
};
