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
        <footer className="border-t border-border">
          <div className="mx-auto flex max-w-3xl flex-col gap-1 px-4 py-6 text-[13px] leading-5 text-muted sm:flex-row sm:justify-between sm:gap-4 sm:px-6 sm:text-sm sm:leading-[22px]">
            <p>Built with Fredrin · Next.js · Tailwind CSS</p>
            <p>© 2026 Rajeev Ranjan Chaurasia</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
