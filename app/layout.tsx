import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/ui/Providers";
import { siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Full-Stack & AI Engineer`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Full-Stack Engineer",
    "AI Engineer",
    "Spring Boot",
    "React",
    "Next.js",
    "LLM",
    "NeuralLog",
    "Portfolio",
    "Vamsidhar Reddy",
    "KARE",
    "IEEE",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.name} — Full-Stack & AI Engineer`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Full-Stack & AI Engineer`,
    description: siteConfig.description,
  },
  metadataBase: new URL(siteConfig.url),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  jobTitle: "Full-Stack & AI Engineer",
  alumniOf: "Kalasalingam Academy of Research and Education",
  sameAs: [siteConfig.github, siteConfig.linkedin, "https://ieeexplore.ieee.org/"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning style={{ background: "#030712" }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#030712] text-slate-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
