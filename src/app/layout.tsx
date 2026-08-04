import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

export const metadata: Metadata = {
  title: "Vamsidhar Reddy — Full-Stack & AI Engineer",
  description:
    "Full-Stack and AI Engineer with 2 peer-reviewed publications (IEEE Xplore 2025, CRC Press 2026), Java/Spring Boot microservices expertise, and Kubernetes-deployed production systems. Open to full-time roles.",
  keywords: ["Full-Stack Developer", "Java Spring Boot", "React Developer", "Backend Engineer", "IEEE Researcher", "IoT", "NeuralLog", "Vamsidhar Reddy", "Chintha Vamsidhar Reddy"],
  openGraph: {
    title: "Vamsidhar Reddy — Full-Stack & AI Engineer",
    description: "2 published papers · 4 production systems · Infosys SWE Intern. Building scalable backend systems and full-stack products.",
    url: "https://vamsidharreddy.vercel.app",
    siteName: "Vamsidhar Reddy Portfolio",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Vamsidhar Reddy — Full-Stack & AI Engineer", description: "2 published papers · 4 production systems · Infosys intern." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://vamsidharreddy.vercel.app" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Chintha Vamsidhar Reddy",
          jobTitle: "Full-Stack & AI Engineer",
          url: "https://vamsidharreddy.vercel.app",
          sameAs: [
            "https://github.com/ChinthaVamsidharReddy",
            "https://linkedin.com/in/vamsidharreddy",
            "https://ieeexplore.ieee.org/abstract/document/11390093",
            "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003662808-52/automated-vending-machine-reward-mechanism-plastic-bottle-management-abhishek-tripathi-shilpi-gupta-abhinay-krishna-vamsidhar-reddy-dhanushya-lakshmi-dhanush-harsha-vardhini",
          ],
        })}} />
      </head>
      <body className="font-sans bg-white dark:bg-gray-950 text-gray-900 dark:text-white antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
