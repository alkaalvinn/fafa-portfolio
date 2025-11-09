import { ArrowDown, Download } from 'lucide-react';
import { socialLinks } from '../../data/portfolioData';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      {/* Simple abstract background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Minimal greeting */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
              Hello, I'm <span className="font-medium text-white/90">Muhammad Fatih Abrar</span>
            </h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-8"></div>
          </div>

          {/* Clear value proposition */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light text-white/70 mb-6 leading-relaxed">
              I craft meaningful stories through design and communication
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              Transforming complex ideas into clear, compelling narratives that connect brands with their audience.
            </p>
          </div>

          {/* Simple CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('#projects')}
              className="group px-8 py-4 bg-white text-slate-900 rounded-full hover:bg-white/90 transition-all duration-300 font-medium tracking-wide"
            >
              View My Work
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
            <a
              href="/CV_Muhammad Fatih Abrar.pdf"
              download
              className="group px-8 py-4 border border-white/30 text-white/70 rounded-full hover:border-white/60 hover:text-white transition-all duration-300 font-medium tracking-wide inline-flex items-center gap-3"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          {/* Minimal social links */}
          <div className="flex gap-8 justify-center items-center">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/70 transition-colors duration-300 text-sm tracking-wide"
            >
              LinkedIn
            </a>
            <span className="text-white/20">•</span>
            <a
              href={socialLinks.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/70 transition-colors duration-300 text-sm tracking-wide"
            >
              Portfolio
            </a>
            <span className="text-white/20">•</span>
            <a
              href={socialLinks.portfolioVideo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/70 transition-colors duration-300 text-sm tracking-wide"
            >
              Video
            </a>
          </div>
        </div>

        {/* Simple scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('#experience')}
            className="text-white/30 hover:text-white/60 transition-all duration-300 flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;