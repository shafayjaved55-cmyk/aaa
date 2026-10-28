import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

/**
 * Fonts are loaded with plain @font-face rules in globals.css, served from
 * /public/fonts. We intentionally avoid next/font here: it resolves font files
 * at build time, which meant a missing .woff2 file failed the entire Netlify
 * deploy. With CSS @font-face a missing file degrades gracefully to a system
 * font instead of breaking the build.
 */

export const metadata: Metadata = {
  title: {
    default: "Nova Solution — Digital Product Agency | Web, Mobile, Design & Growth",
    template: "%s — Nova Solution",
  },
  description:
    "Nova Solution is a full-service digital agency building high-converting websites, mobile apps, brands and growth systems for ambitious companies. 320+ projects shipped across 12 countries.",
  keywords: ["digital agency", "web development", "mobile app development", "UI UX design", "digital marketing", "ecommerce", "Nova Solution"],
  openGraph: {
    title: "Nova Solution — Digital Product Agency",
    description: "We design and build digital products that move business forward.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bone font-body text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
