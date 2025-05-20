import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vamsidhar Reddy - Full Stack Developer",
  description: "Full Stack Developer specializing in Java, Spring Boot, React.js, and Cloud Technologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              function getThemePreference() {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme) {
                  return savedTheme;
                }
                return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              }

              const theme = getThemePreference();
              if (theme === 'dark') {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            })();
          `}
        </Script>
      </head>
      <body className={`${inter.className} min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100`}>
        {children}
      </body>
    </html>
  );
}

