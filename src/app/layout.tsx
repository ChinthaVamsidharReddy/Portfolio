import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

export const metadata: Metadata = {
  title: "Vamsidhar Reddy — Full-Stack & AI Engineer",
  description:
    "Full-Stack and AI Engineer specializing in Java/Spring Boot microservices, React/Angular frontends, Kubernetes deployments, and LLM observability. IEEE-published researcher. Infosys SWE intern. Open to full-time roles.",
  keywords: [
    "Full-Stack Developer",
    "Java Spring Boot",
    "React Developer",
    "Backend Engineer",
    "Kubernetes",
    "LLM Observability",
    "NeuralLog",
    "IEEE Researcher",
    "Vamsidhar Reddy",
    "Chintha Vamsidhar Reddy",
  ],
  openGraph: {
    title: "Vamsidhar Reddy — Full-Stack & AI Engineer",
    description:
      "4 production systems · IEEE Xplore 2025 · Infosys SWE Intern. Building scalable backend systems and full-stack products.",
    url: "https://portfolio-umber-three-7x4ca651hy.vercel.app/",
    siteName: "Vamsidhar Reddy Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vamsidhar Reddy — Full-Stack & AI Engineer",
    description: "4 production systems · IEEE Xplore 2025 · Infosys intern. Backend + Full-Stack.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://portfolio-umber-three-7x4ca651hy.vercel.app/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Chintha Vamsidhar Reddy",
              jobTitle: "Full-Stack & AI Engineer",
              url: "https://portfolio-umber-three-7x4ca651hy.vercel.app/",
              sameAs: [
                "https://github.com/ChinthaVamsidharReddy",
                "https://linkedin.com/in/chinthavamsidharreddy",
                "https://ieeexplore.ieee.org/abstract/document/11390093",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans bg-white dark:bg-gray-950 text-gray-900 dark:text-white antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
