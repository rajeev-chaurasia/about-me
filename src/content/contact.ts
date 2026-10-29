export type ContactLink = {
  label: string;
  href: string;
  /** Opens in a new tab with rel="noopener noreferrer". */
  external: boolean;
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
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/rajeev-ranjan-chaurasia",
      external: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/rajeev-chaurasia",
      external: true,
    },
    {
      label: "Devpost",
      href: "https://devpost.com/rajeevranjan-chaurasia",
      external: true,
    },
  ],
};
