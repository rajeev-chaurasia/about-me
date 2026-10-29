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
    "Open to FDE + agent infra roles, starting Jan 2027. Fastest way to reach me is email.",
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
