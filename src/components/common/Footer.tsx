import { Mail, Linkedin, Instagram, ExternalLink } from 'lucide-react';
import { socialLinks } from '../../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = sectionId === '#home' ? 0 : 8;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-black text-white">
      {/* Top border line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1: Brand & About */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight">Muhammad Fatih Abrar</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting meaningful stories through design and communication.
              Transforming complex ideas into clear, compelling narratives.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('#home')}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#visual-world')}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Visual World
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#experience')}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Portfolio Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Portfolio</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={socialLinks.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-flex items-center gap-2"
                >
                  <ExternalLink size={14} />
                  View Portfolio
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.portfolioVideo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-flex items-center gap-2"
                >
                  <ExternalLink size={14} />
                  Video Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/CV_Muhammad Fatih Abrar.pdf"
                  download
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-flex items-center gap-2"
                >
                  <ExternalLink size={14} />
                  Download CV
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social & Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Connect</h4>
            <div className="flex flex-wrap gap-4">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
            <a
              href={`mailto:${socialLinks.email}`}
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
            >
              {socialLinks.email}
            </a>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Muhammad Fatih Abrar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
