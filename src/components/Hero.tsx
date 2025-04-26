import { useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center py-16 px-4 bg-[#0a192f]">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-6">
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-6 relative">
              {!imageError ? (
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#64ffda]">
                  <img
                    src="/Portfolio/vamsi.jpg"
                    alt="Vamsidhar Reddy - Full Stack Developer"
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                </div>
              ) : (
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#64ffda] flex items-center justify-center text-[#0a192f] text-4xl font-bold">
                  V
                </div>
              )}
            </div>

            <div className="text-center md:text-left">
              <p className="text-[#64ffda] font-mono mb-4">Hi, my name is</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#ccd6f6] mb-4">
                Vamsidhar Reddy.
              </h1>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#8892b0] mb-6">
                I build things for the web.
              </h2>
              <p className="text-[#8892b0] max-w-xl text-lg mb-8 leading-relaxed">
                I'm a software engineer specializing in building exceptional digital experiences. 
                Currently, I'm focused on building accessible, human-centered products using Java and React.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <Link 
                href="#projects"
                className="px-8 py-4 border-2 border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors text-sm"
                style={{ fontFamily: 'Press Start 2P, monospace' }}
              >
                Check out my work!
              </Link>
              <a 
                href="/Portfolio/Vamsidhar Reddy Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#64ffda] text-[#0a192f] rounded hover:bg-[#64ffda]/90 transition-colors text-sm"
                style={{ fontFamily: 'Press Start 2P, monospace' }}
              >
                Resume
              </a>
            </div>

            <div className="mt-12 flex flex-col md:flex-row items-center gap-6 text-[#8892b0] font-bold text-sm">
              <a 
                href="mailto:vamsidharreddy831@gmail.com"
                className="hover:text-[#64ffda] transition-colors"
              >
                vamsidharreddy831@gmail.com
              </a>
              <span className="hidden md:block">|</span>
              <a 
                href="tel:+91 8317655125"
                className="hover:text-[#64ffda] transition-colors"
              >
                +91 8317655125
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}