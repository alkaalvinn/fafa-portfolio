import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
      scrolled
        ? 'w-[90%] md:w-[80%] max-w-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full mt-4'
        : 'w-full bg-transparent mt-0'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-10">
              {navItems.map((item) => {
                const isActive = item.href === `#${activeSection}`;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative text-sm font-medium tracking-wide transition-all duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-white/60 hover:text-white/90'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-[-8px] left-0 w-full h-px bg-white transition-all duration-300 ${
                      isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`}></span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right side - Resume button (desktop) */}
          <div className="hidden md:flex flex-shrink-0">
            <a
              href="/CV_Muhammad Fatih Abrar.pdf"
              download
              className="px-4 py-2 text-xs text-white/70 border border-white/20 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300 tracking-wide"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white/80 hover:text-white transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-white/10">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => {
                const isActive = item.href === `#${activeSection}`;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-lg font-medium tracking-wide transition-all duration-300 text-left ${
                      isActive
                        ? 'text-white'
                        : 'text-white/60 hover:text-white/90'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
              <a
                href="/CV_Muhammad Fatih Abrar.pdf"
                download
                className="inline-block mt-4 px-6 py-3 text-sm text-white border border-white/30 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 tracking-wide text-center"
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;