import { siteConfig } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          © {year} <span className="font-semibold text-gray-700 dark:text-gray-300">{siteConfig.name}</span>
        </div>
        <div className="flex items-center gap-4">
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-sm transition-colors">GitHub</a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-sm transition-colors">LinkedIn</a>
          <a href={`mailto:${siteConfig.email}`} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-sm transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
