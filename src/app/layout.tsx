import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const siteName = "Portfolio – Your Name";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Giga Jundan Al Huda",
    template: "%s | Portfolio – Your Name",
  },
  description:
    "I craft calm, useful digital experiences across web, mobile, AR, and machine learning.",
  keywords: [
    "portfolio",
    "next.js",
    "frontend",
    "flutter",
    "laravel",
    "unity",
    "augmented reality",
    "machine learning",
  ],
  authors: [{ name: "Your Name" }],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Giga Jundan Al Huda",
    siteName,
    description:
      "I craft calm, useful digital experiences across web, mobile, AR, and machine learning.",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Portfolio – Your Name" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio – Your Name",
    description:
      "I craft calm, useful digital experiences across web, mobile, AR, and machine learning.",
    images: ["/assets/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Your Name",
    url: siteUrl,
    sameAs: [
      // Fill your social links if any
      // "https://github.com/username",
      // "https://www.linkedin.com/in/username"
    ],
    jobTitle: "Software Developer / Product Engineer",
    knowsAbout: [
      "Next.js",
      "TypeScript",
      "Flutter",
      "Laravel",
      "Unity AR",
      "TensorFlow",
      "XGBoost",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <main className="container page-stack py-10">{children}</main>
        <Footer />
        <Script
          id="ld-json-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
