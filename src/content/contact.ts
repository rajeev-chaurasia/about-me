export type ContactLink = {
  label: string;
  href: string;
};

export type ContactContent = {
  heading: string;
  blurb: string;
  links: ContactLink[];
};

export const contact: ContactContent = {
  heading: "Contact",
  blurb: "[Placeholder — how and why to get in touch.]",
  links: [
    { label: "[Placeholder email]", href: "mailto:placeholder@example.com" },
    { label: "[Placeholder profile]", href: "https://example.com" },
  ],
};
