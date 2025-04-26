import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0a192f]/95 shadow-lg' : 'bg-[#0a192f]/70'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-[#64ffda] hover:text-[#64ffda]/80 transition-colors">
            Vamsidhar
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors cursor-pointer"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors cursor-pointer"
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="experience"
              smooth={true}
              duration={500}
              className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors cursor-pointer"
            >
              Experience
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors cursor-pointer"
            >
              Contact
            </ScrollLink>
            <a
              href="/Vamsidhar Reddy Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border-2 border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-6 flex flex-col justify-between ${isMenuOpen ? 'transform rotate-45' : ''}`}>
              <span className={`block w-full h-0.5 bg-[#64ffda] transition-transform ${isMenuOpen ? 'transform translate-y-2.5 rotate-0' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-[#64ffda] transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-[#64ffda] transition-transform ${isMenuOpen ? 'transform -translate-y-2.5 -rotate-90' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden mobile-menu transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-4 py-2 space-y-4 bg-[#0a192f]/95">
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="block text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            className="block text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="experience"
            smooth={true}
            duration={500}
            className="block text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Experience
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="block text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </ScrollLink>
          <a
            href="https://drive.google.com/file/d/1ybHDN2nKNIdA-xhB8uVOkD3ekBHn7Hb2/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 border-2 border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors text-center"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
} 