import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { socialLinks, portfolioImages } from '../../data/portfolioData';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="h-screen flex items-center justify-center relative bg-[#ffffff] overflow-hidden overflow-x-hidden">

      <div className="relative z-10 w-full h-full flex flex-col justify-center px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-0 lg:pt-0">

          {/* Mobile Layout */}
          <div className="lg:hidden w-full flex flex-col items-center text-center space-y-4">
            {/* Profile Image - Top on mobile */}
            <div>
              <img
                src={portfolioImages.hero}
                alt="Muhammad Fatih Abrar"
                className="object-cover shadow-lg"
                style={{
                  width: 'clamp(8rem, 30vw, 12rem)',
                  height: 'clamp(8rem, 30vw, 12rem)',
                  borderRadius: 'clamp(0.75rem, 2vw, 1.5rem)'
                }}
              />
            </div>

            {/* Greeting and Value Proposition */}
            <div className="space-y-3 max-w-lg">
              <h1
                className="text-gray-900 tracking-tight"
                style={{
                  fontSize: 'clamp(1.5rem, 6vw, 2.75rem)',
                  lineHeight: 'clamp(2rem, 7vw, 3.5rem)'
                }}
              >
                Hello, I'm <br />
                <span className="font-medium">Muhammad Fatih Abrar</span>
              </h1>

              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto"></div>

              <h2
                className="text-gray-600 leading-relaxed"
                style={{
                  fontSize: 'clamp(1rem, 4vw, 1.25rem)'
                }}
              >
                I craft meaningful stories through design and communication
              </h2>

              <p
                className="text-gray-500 leading-relaxed"
                style={{
                  fontSize: 'clamp(0.75rem, 3vw, 1rem)'
                }}
              >
                Transforming complex ideas into clear, compelling narratives.
              </p>
            </div>

            {/* CTA Buttons - Stacked on mobile */}
            <div className="flex flex-col gap-3 w-full">
              <button
                onClick={() => scrollToSection('#projects')}
                className="group w-full px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 font-medium tracking-wide transform hover:scale-105 shadow-lg text-sm"
                style={{
                  minWidth: 'clamp(10rem, 80vw, 14rem)'
                }}
              >
                View My Work
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
              <a
                href="/CV_Muhammad Fatih Abrar.pdf"
                download
                className="group w-full px-6 py-3 border-2 border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 font-medium tracking-wide inline-flex items-center justify-center gap-2 text-sm"
                style={{
                  minWidth: 'clamp(10rem, 80vw, 14rem)'
                }}
              >
                <Download size={16} />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { href: socialLinks.linkedin, label: 'LinkedIn' },
                { href: socialLinks.instagram, label: 'Instagram' },
                { href: socialLinks.portfolio, label: 'Portfolio' },
                { href: socialLinks.portfolioVideo, label: 'Video' }
              ].map((link, index) => (
                <React.Fragment key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors duration-300 underline-offset-4 hover:underline"
                    style={{
                      fontSize: 'clamp(0.625rem, 2.5vw, 0.75rem)'
                    }}
                  >
                    {link.label}
                  </a>
                  {index < 3 && (
                    <span
                      className="text-gray-400"
                      style={{
                        fontSize: 'clamp(0.625rem, 2.5vw, 0.75rem)'
                      }}
                    >
                      •
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Desktop Layout: Professional - 2 Columns (Left & Right) */}
          <div className="hidden lg:flex w-full h-full">

            {/* Left Column: Text, Buttons, Social Links */}
            <div className="flex-1 flex flex-col justify-center pl-10 pr-8">
              <h1
                className="text-gray-900 font-medium tracking-tight mb-6"
                style={{
                  fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                  lineHeight: '1.2'
                }}
              >
                Hello, I'm <br />
                <span className="font-normal">Muhammad Fatih Abrar</span>
              </h1>

              <div className="w-24 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 mb-6"></div>

              <h2
                className="text-gray-600 font-normal mb-4"
                style={{
                  fontSize: '1.25rem'
                }}
              >
                I craft meaningful stories through design and communication
              </h2>

              <p
                className="text-gray-500 leading-relaxed mb-8"
                style={{
                  fontSize: '1rem'
                }}
              >
                Transforming complex ideas into clear, compelling narratives.
              </p>

              {/* CTA Buttons */}
              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={() => scrollToSection('#projects')}
                  className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition-all duration-200 font-medium text-sm hover:scale-105"
                >
                  View My Work
                  <span className="inline-block ml-2">→</span>
                </button>
                <a
                  href="/CV_Muhammad Fatih Abrar.pdf"
                  download
                  className="px-6 py-3 border border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-200 font-medium text-sm inline-flex items-center gap-2"
                >
                  <Download size={16} />
                  Download CV
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6">
                {[
                  { href: socialLinks.linkedin, label: 'LinkedIn' },
                  { href: socialLinks.instagram, label: 'Instagram' },
                  { href: socialLinks.portfolio, label: 'Portfolio' },
                ].map((link, index) => (
                  <React.Fragment key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                    {index < 2 && (
                      <span className="text-gray-400 mx-2">•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Right Column: Full Photo */}
            <div className="flex-1 h-full overflow-hidden">
              <img
                src={portfolioImages.hero}
                alt="Muhammad Fatih Abrar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;