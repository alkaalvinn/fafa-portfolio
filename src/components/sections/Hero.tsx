import { ArrowDown, Download } from 'lucide-react';
import { socialLinks } from '../../data/portfolioData';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="text-orange-500">Muhammad Fatih Abrar</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
              Creative Communication Professional
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Passionate about visual storytelling, brand communication, and creating meaningful connections through design and content.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => scrollToSection('#projects')}
                className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200 font-medium"
              >
                View My Work
              </button>
              <a
                href="/CV_Muhammad Fatih Abrar.pdf"
                download
                className="px-8 py-3 border-2 border-gray-700 text-gray-700 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-200 font-medium inline-flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href={socialLinks.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
              >
                Portfolio
              </a>
              <a
                href={socialLinks.portfolioVideo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
              >
                Video Portfolio
              </a>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                <div className="text-white text-6xl font-bold">
                  FA
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gray-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-300 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('#experience')}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;