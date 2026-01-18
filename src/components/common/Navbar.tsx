import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkSection, setIsDarkSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'experience', 'visual-world', 'projects', 'skills', 'contact', 'footer'];
      const scrollPosition = window.scrollY + 100;
      let currentSection = 'home';
      let shouldBeDark = false;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            currentSection = section;

            // Special logic for visual-world section
            if (section === 'visual-world') {
              const visualSection = document.getElementById('visual-world');
              if (visualSection) {
                const rect = visualSection.getBoundingClientRect();
                const sectionHeight = visualSection.offsetHeight;
                const viewportHeight = window.innerHeight;

                // Calculate progress within visual-world section
                const rawProgress = (viewportHeight - rect.top) / sectionHeight;
                const progress = Math.max(0, Math.min(1, rawProgress));

                // Make navbar dark when content appears (progress > 0.75)
                shouldBeDark = progress > 0.9;
              }
            } else {
              // For other sections, check if they're dark sections
              shouldBeDark = ['projects', 'skills', 'contact', 'footer'].includes(section);
            }
            break;
          }
        }
      }

      setIsDarkSection(shouldBeDark);
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
    if (element) {
      const isMobile = window.innerWidth < 768;
      const offset = href === '#home' ? 0 : (isMobile ? 32 : 8);
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? isDarkSection
          ? 'bg-black/90 shadow-lg backdrop-blur-sm'
          : 'bg-white shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="w-full px-4 py-2 pt-2 sm:px-6 sm:py-4">
        <div className="w-full flex flex-col items-center justify-center gap-1">
          {/* Mobile Navigation - 2 Rows */}
          <div className="md:hidden w-full flex flex-col items-center justify-center gap-1">
            {/* First Row */}
            <div className="flex items-center justify-center gap-4">
              {navItems.slice(0, 3).map((item) => {
                const isActive = item.href === `#${activeSection}`;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative text-sm font-medium tracking-wide transition-all duration-300 whitespace-nowrap ${
                      isActive
                        ? isDarkSection
                          ? 'text-lime-400'
                          : 'text-black'
                        : isDarkSection
                          ? 'text-gray-400 hover:text-white'
                          : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-[-4px] left-0 w-full h-px transition-all duration-300 ${
                      isActive
                        ? isDarkSection
                          ? 'bg-lime-400'
                          : 'bg-black'
                        : ''
                    } ${isActive ? 'opacity-100' : 'opacity-0'}`}></span>
                  </button>
                );
              })}
            </div>

            {/* Second Row - Center the 2 items */}
            <div className="flex items-center justify-center gap-6">
              {navItems.slice(3).map((item) => {
                const isActive = item.href === `#${activeSection}`;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative text-sm font-medium tracking-wide transition-all duration-300 whitespace-nowrap ${
                      isActive
                        ? isDarkSection
                          ? 'text-lime-400'
                          : 'text-black'
                        : isDarkSection
                          ? 'text-gray-400 hover:text-white'
                          : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-[-4px] left-0 w-full h-px transition-all duration-300 ${
                      isActive
                        ? isDarkSection
                          ? 'bg-lime-400'
                          : 'bg-black'
                        : ''
                    } ${isActive ? 'opacity-100' : 'opacity-0'}`}></span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Desktop/Tablet - Single Row */}
          <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8">
            {navItems.map((item) => {
              const isActive = item.href === `#${activeSection}`;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative text-sm font-medium tracking-wide transition-all duration-300 ${
                    isActive
                      ? isDarkSection
                        ? 'text-lime-400'
                        : 'text-black'
                      : isDarkSection
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-[-4px] left-0 w-full h-px transition-all duration-300 ${
                    isActive
                      ? isDarkSection
                        ? 'bg-lime-400'
                        : 'bg-black'
                      : ''
                  } ${isActive ? 'opacity-100' : 'opacity-0'}`}></span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;