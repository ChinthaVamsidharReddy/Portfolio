// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Script from "next/script";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Vamsidhar Reddy - Full Stack Developer",
//   description: "Full Stack Developer specializing in Java, Spring Boot, React.js, and Cloud Technologies",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <head>
//         <Script id="theme-script" strategy="beforeInteractive">
//           {`
//             (function() {
//               function getThemePreference() {
//                 const savedTheme = localStorage.getItem('theme');
//                 if (savedTheme) {
//                   return savedTheme;
//                 }
//                 return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//               }

//               const theme = getThemePreference();
//               if (theme === 'dark') {
//                 document.documentElement.classList.add('dark');
//               } else {
//                 document.documentElement.classList.remove('dark');
//               }
//             })();
//           `}
//         </Script>
//       </head>
//       <body className={`${inter.className} min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100`}>
//         {children}
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Image from "next/image"; // Import Image component

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

        {/* Start of TP section (image beside server) */}
        <div className="tp flex items-center gap-4 p-4 border-b border-gray-200 dark:border-gray-700">
          <Image
            src="/portfolio_281089" // Make sure this image is in your /public folder
            alt="portfolio"
            width={32}
            height={32}
          />
          <span className="text-lg font-semibold">Server Status: Online</span>
        </div>
        {/* End of TP section */}

        {children}
      </body>
    </html>
  );
}
