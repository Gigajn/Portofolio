import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { personal } from "@/data/personal";
import { skillGroups } from "@/data/skills";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const title = `${personal.name} – ${personal.role}`;
const description = personal.summary;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s | ${personal.name}` },
  description,
  keywords: [
    personal.name,
    "portofolio",
    "web developer",
    "backend developer",
    "machine learning",
    "Laravel",
    "Next.js",
    "Yogyakarta",
    "Universitas Ahmad Dahlan",
  ],
  authors: [{ name: personal.name, url: siteUrl }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    title,
    siteName: `Portofolio ${personal.name}`,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    url: siteUrl,
    email: `mailto:${personal.email}`,
    jobTitle: personal.role,
    address: { "@type": "PostalAddress", addressLocality: "Yogyakarta", addressCountry: "ID" },
    alumniOf: personal.education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.institution })),
    sameAs: [personal.github, personal.linkedin],
    knowsAbout: skillGroups.flatMap((g) => g.items),
  };

  return (
    <html lang="id" className={jakarta.variable}>
      <body>
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow"
        >
          Langsung ke konten
        </a>
        <Navbar />
        <main id="konten" className="container py-10">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
