import { ArrowDown, Download } from 'lucide-react';
import { socialLinks } from '../../data/portfolioData';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-12 sm:pt-16 bg-white">
      {/* Subtle abstract background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-100/50 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-gray-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-gray-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

            {/* Kolom Kiri - Minimal greeting + Clear Value Proposition */}
            <div className="order-1 lg:order-1">
              {/* Minimal greeting */}
              <div className="mb-8 sm:mb-10 md:mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 sm:mb-6 tracking-tight">
                  Hello, I'm <span className="font-medium text-gray-800">Muhammad Fatih Abrar</span>
                </h1>
                <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-6 sm:mb-8"></div>
              </div>

              {/* Clear value proposition */}
              <div className="mb-0 sm:mb-10 md:mb-12">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  I craft meaningful stories through design and communication
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl leading-relaxed">
                  Transforming complex ideas into clear, compelling narratives that connect brands with their audience.
                </p>
              </div>
            </div>

            {/* Kolom Kanan - Gambar fafa.png */}
            <div className="order-2 lg:order-2 flex justify-center items-center">
              <img
                src="/images/fafa.png"
                alt="Muhammad Fatih Abrar"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 object-cover rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg"
              />
            </div>
          </div>

          {/* Simple CTA - Bawah tetap sama */}
          <div className="flex flex-row gap-4 justify-center items-center mt-12 sm:mt-16 lg:mt-12 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection('#projects')}
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 font-medium tracking-wide transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              View My Work
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
            <a
              href="/CV_Muhammad Fatih Abrar.pdf"
              download
              className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 font-medium tracking-wide inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
            >
              <Download size={16} sm:size={18} />
              Download CV
            </a>
          </div>

          {/* Minimal social links - Bawah tetap sama */}
          <div className="flex gap-4 sm:gap-6 justify-center items-center mt-8 sm:mt-12">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors duration-300 text-sm tracking-medium underline-offset-4 hover:underline"
            >
              LinkedIn
            </a>
            <span className="text-gray-400">•</span>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors duration-300 text-sm tracking-medium underline-offset-4 hover:underline"
            >
              Instagram
            </a>
            <span className="text-gray-400">•</span>
            <a
              href={socialLinks.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors duration-300 text-sm tracking-medium underline-offset-4 hover:underline"
            >
              Portfolio
            </a>
            <span className="text-gray-400">•</span>
            <a
              href={socialLinks.portfolioVideo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors duration-300 text-sm tracking-medium underline-offset-4 hover:underline"
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