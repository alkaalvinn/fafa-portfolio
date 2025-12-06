import { ArrowDown, Download } from 'lucide-react';
import { socialLinks } from '../../data/portfolioData';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 bg-white">
      {/* Subtle abstract background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-100/50 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-gray-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-gray-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">

            {/* Kolom Kiri - Minimal greeting + Clear Value Proposition */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              {/* Minimal greeting */}
              <div className="mb-8 lg:mb-12">
                <h1
                  className="text-gray-900 mb-4 lg:mb-6 tracking-tight"
                  style={{
                    fontSize: 'clamp(1.75rem, 5vw, 3.5rem)',
                    lineHeight: 'clamp(2.25rem, 6vw, 4rem)'
                  }}
                >
                  Hello, I'm <span className="font-medium">Muhammad Fatih Abrar</span>
                </h1>
                <div className="w-16 lg:w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto lg:mx-0 mb-6 lg:mb-8"></div>
              </div>

              {/* Clear value proposition */}
              <div className="mb-8 lg:mb-12">
                <h2
                  className="text-gray-600 mb-4 lg:mb-6 leading-relaxed"
                  style={{
                    fontSize: 'clamp(1.125rem, 3vw, 1.5rem)'
                  }}
                >
                  I craft meaningful stories through design and communication
                </h2>
                <p
                  className="text-gray-500 leading-relaxed"
                  style={{
                    fontSize: 'clamp(0.875rem, 2vw, 1.125rem)'
                  }}
                >
                  Transforming complex ideas into clear, compelling narratives that connect brands with their audience.
                </p>
              </div>
            </div>

            {/* Kolom Kanan - Gambar fafa.png */}
            <div className="order-1 lg:order-2 flex justify-center items-center mb-8 lg:mb-0">
              <img
                src="/images/fafa.png"
                alt="Muhammad Fatih Abrar"
                className="object-cover shadow-lg"
                style={{
                  width: 'clamp(12rem, 40vw, 20rem)',
                  height: 'clamp(12rem, 40vw, 20rem)',
                  borderRadius: 'clamp(0.75rem, 2vw, 1.5rem)'
                }}
              />
            </div>
          </div>

          {/* Simple CTA - Responsive buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-12 lg:mt-16">
            <button
              onClick={() => scrollToSection('#projects')}
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 font-medium tracking-wide transform hover:scale-105 shadow-lg text-sm sm:text-base"
              style={{ minWidth: 'clamp(8rem, 90vw, 12rem)' }}
            >
              View My Work
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
            <a
              href="/CV_Muhammad Fatih Abrar.pdf"
              download
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 font-medium tracking-wide inline-flex items-center justify-center gap-3 text-sm sm:text-base"
              style={{ minWidth: 'clamp(8rem, 90vw, 12rem)' }}
            >
              <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
              Download CV
            </a>
          </div>

          {/* Minimal social links - Responsive layout */}
          <div className="flex flex-wrap gap-3 sm:gap-6 justify-center items-center mt-8 lg:mt-12">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors duration-300 text-xs sm:text-sm underline-offset-4 hover:underline"
              style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}
            >
              LinkedIn
            </a>
            <span className="text-gray-400 text-xs sm:text-sm">•</span>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors duration-300 text-xs sm:text-sm underline-offset-4 hover:underline"
              style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}
            >
              Instagram
            </a>
            <span className="text-gray-400 text-xs sm:text-sm">•</span>
            <a
              href={socialLinks.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors duration-300 text-xs sm:text-sm underline-offset-4 hover:underline"
              style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}
            >
              Portfolio
            </a>
            <span className="text-gray-400 text-xs sm:text-sm">•</span>
            <a
              href={socialLinks.portfolioVideo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors duration-300 text-xs sm:text-sm underline-offset-4 hover:underline"
              style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}
            >
              Video
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;