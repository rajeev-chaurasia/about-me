export type ContactLink = {
  label: string;
  href: string;
  /** Opens in a new tab with rel="noopener noreferrer". */
  external: boolean;
  /** Which icon the row shows. */
  icon: "mail" | "linkedin" | "github" | "devpost";
};

export type ContactContent = {
  eyebrow: string;
  heading: string;
  blurb: string;
  links: ContactLink[];
};

export const contact: ContactContent = {
  eyebrow: "04 · CONTACT",
  heading: "Get in touch",
  blurb:
    "I'm looking for forward deployed and agent infrastructure roles starting January 2027, remote or in the Bay Area. Email is the fastest way to reach me.",
  links: [
    {
      label: "rajeevchaurasia.dev@gmail.com",
      href: "mailto:rajeevchaurasia.dev@gmail.com",
      external: false,
      icon: "mail",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/rajeev-ranjan-chaurasia",
      external: true,
      icon: "linkedin",
    },
    {
      label: "GitHub",
      href: "https://github.com/rajeev-chaurasia",
      external: true,
      icon: "github",
    },
    {
      label: "Devpost",
      href: "https://devpost.com/rajeevranjan-chaurasia",
      external: true,
      icon: "devpost",
    },
  ],
};
