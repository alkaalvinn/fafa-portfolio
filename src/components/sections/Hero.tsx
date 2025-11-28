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
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Kolom Kiri - Minimal greeting + Clear Value Proposition */}
            <div className="order-1 lg:order-1">
              {/* Minimal greeting */}
              <div className="mb-12">
                <h1 className="text-4xl md:text-6xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
                  Hello, I'm <span className="font-medium text-gray-800">Muhammad Fatih Abrar</span>
                </h1>
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-8"></div>
              </div>

              {/* Clear value proposition */}
              <div className="mb-12">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-600 mb-6 leading-relaxed">
                  I craft meaningful stories through design and communication
                </h2>
                <p className="text-base md:text-lg text-gray-500 max-w-2xl leading-relaxed">
                  Transforming complex ideas into clear, compelling narratives that connect brands with their audience.
                </p>
              </div>
            </div>

            {/* Kolom Kanan - Gambar fafa.png */}
            <div className="order-2 lg:order-2 flex justify-center items-center">
              <img
                src="/images/fafa.png"
                alt="Muhammad Fatih Abrar"
                className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-2xl lg:rounded-3xl shadow-lg"
              />
            </div>
          </div>

          {/* Simple CTA - Bawah tetap sama */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16 lg:mt-12">
            <button
              onClick={() => scrollToSection('#projects')}
              className="group px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 font-medium tracking-wide transform hover:scale-105 shadow-lg"
            >
              View My Work
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
            <a
              href="/CV_Muhammad Fatih Abrar.pdf"
              download
              className="group px-8 py-4 border-2 border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 font-medium tracking-wide inline-flex items-center gap-3"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          {/* Minimal social links - Bawah tetap sama */}
          <div className="flex gap-6 justify-center items-center mt-12">
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