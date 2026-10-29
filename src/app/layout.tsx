import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rajeev Ranjan Chaurasia · Software Engineer",
  description:
    "Software engineer building AI agent systems with guardrails that hold up in production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
