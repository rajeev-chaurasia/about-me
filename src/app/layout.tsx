import type { Metadata } from "next";
import "./globals.css";

const title = "Rajeev Ranjan Chaurasia · Software Engineer";
const description =
  "Software engineer building AI agent systems with guardrails that hold up in production.";

export const metadata: Metadata = {
  metadataBase: new URL("https://rajeevchaurasia.vercel.app"),
  title,
  description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Rajeev Ranjan Chaurasia",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:border focus:border-border focus:bg-background focus:px-3 focus:py-2 focus:text-sm"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
