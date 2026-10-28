export type ShippedItem = {
  title: string;
  description: string;
  href?: string;
};

export type ShippedContent = {
  heading: string;
  items: ShippedItem[];
};

export const shipped: ShippedContent = {
  heading: "What I've Shipped",
  items: [
    {
      title: "[Placeholder project one]",
      description: "[Placeholder — what it is and what you did.]",
    },
    {
      title: "[Placeholder project two]",
      description: "[Placeholder — what it is and what you did.]",
    },
    {
      title: "[Placeholder project three]",
      description: "[Placeholder — what it is and what you did.]",
    },
  ],
};
