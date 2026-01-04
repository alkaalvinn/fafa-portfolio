import { useState, useEffect } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { experiences, portfolioImages } from '../../data/portfolioData';

const Experience = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Fungsi untuk mendapatkan gambar experience
  const getExperienceImages = (companyId: number): string[] | undefined => {
    // Cek apakah ada gambar di portfolioImages untuk companyId ini
    const images = portfolioImages.experience[companyId as keyof typeof portfolioImages.experience];

    // Jika ada, gunakan gambar tersebut
    if (images && images.length > 0) {
      return images;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('experience');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Calculate progress from 0 to 1 based on scroll position
      const progress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (sectionHeight * 0.3)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate which experience should be visible
  const getVisibleExperience = () => {
    const section = document.getElementById('experience');
    if (!section) return 0;

    const rect = section.getBoundingClientRect();
    const sectionHeight = section.offsetHeight;
    const progress = Math.max(0, (window.innerHeight - rect.top) / sectionHeight);
    
    // After header animation (30%), show experiences
    if (progress < 0.3) return -1;
    
    // Divide remaining scroll into equal parts for each experience
    const experienceProgress = (progress - 0.3) / 0.7;
    const index = Math.floor(experienceProgress * experiences.length);
    return Math.min(index, experiences.length - 1);
  };

  const [visibleExpIndex, setVisibleExpIndex] = useState(-1);

  useEffect(() => {
    const handleExpScroll = () => {
      setVisibleExpIndex(getVisibleExperience());
    };

    window.addEventListener('scroll', handleExpScroll);
    handleExpScroll();
    
    return () => window.removeEventListener('scroll', handleExpScroll);
  }, []);

  // Calculate title position and size based on scroll
  const titleScale = 1 - (scrollProgress * 0.7); // From 1 to 0.3
  const titleY = scrollProgress * -40; // Move up
  const titleOpacity = scrollProgress < 0.5 ? 1 : 1 - ((scrollProgress - 0.5) * 2);

  return (
    <section id="experience" className="relative bg-white" style={{ minHeight: `${200 + experiences.length * 120}vh` }}>
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        
        {/* Animated Title - Center to Top */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            opacity: titleOpacity,
            transform: `translateY(${titleY}vh) scale(${titleScale})`,
            transition: 'opacity 0.3s ease-out'
          }}
        >
          <h2
            className="font-bold text-gray-900"
            style={{
              fontSize: 'clamp(3rem, 10vw, 6rem)'
            }}
          >
            Experience
          </h2>
        </div>

        {/* Content Container */}
        <div className="w-full h-full flex flex-col">
          {/* Experience Cards Container - Takes remaining space */}
          <div className="flex-1 relative px-4 sm:px-6 py-6 sm:py-8">
            <div className="container mx-auto max-w-7xl h-full flex items-center pt-6 sm:pt-8 pb-16 sm:pb-20">
              {experiences.map((exp, index) => {
                const isVisible = visibleExpIndex === index;
                const opacity = isVisible ? 1 : 0;
                const translateY = isVisible ? 0 : 20;

                return (
                  <div
                    key={exp.id}
                    className="absolute inset-0 flex items-center px-4 sm:px-6"
                    style={{
                      opacity: opacity,
                      transform: `translateY(${translateY}px)`,
                      transition: 'all 0.8s ease-in-out',
                      pointerEvents: isVisible ? 'auto' : 'none'
                    }}
                  >
                    <div className="container mx-auto max-w-7xl">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-center -mt-6 sm:-mt-10">
                        {/* Left Side - Text Content */}
                        <div className="text-left space-y-3 sm:space-y-5">
                          {/* Period */}
                          <div className="flex items-center gap-2">
                            <Calendar className="text-gray-600" size={16} />
                            <span
                              className="text-gray-600 font-medium"
                              style={{
                                fontSize: 'clamp(0.875rem, 2.5vw, 1rem)'
                              }}
                            >
                              {exp.period}
                            </span>
                          </div>

                          {/* Position */}
                          <h3
                            className="font-bold text-gray-900 leading-tight"
                            style={{
                              fontSize: 'clamp(1.5rem, 5vw, 3rem)'
                            }}
                          >
                            {exp.position}
                          </h3>

                          {/* Company */}
                          <div className="flex items-center gap-2">
                            <MapPin className="text-gray-500" size={14} />
                            <span
                              className="font-semibold text-gray-700"
                              style={{
                                fontSize: 'clamp(1rem, 3vw, 1.5rem)'
                              }}
                            >
                              {exp.company}
                            </span>
                          </div>

                          {/* Responsibilities */}
                          <div className="pt-0 sm:pt-2">
                            <ul
                              className="space-y-0 sm:space-y-2 text-gray-600"
                              style={{
                                fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
                              }}
                            >
                              {exp.responsibilities.map((resp, idx) => (
                                <li key={idx} className="flex items-start gap-2 sm:gap-3">
                                  <span className="text-gray-700 mt-0.5 sm:mt-1">•</span>
                                  <span className="leading-relaxed">{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Right Side - Images */}
                        <div className="relative">
                          <div className="grid grid-cols-2 gap-2 sm:gap-4 -pt-8 sm:pt-2">
                            {getExperienceImages(exp.id)?.map((image: string, imgIndex: number) => (
                              <div
                                key={imgIndex}
                                className="relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                                style={{
                                  borderRadius: 'clamp(0.5rem, 2vw, 0.75rem)'
                                }}
                              >
                                <img
                                  src={image}
                                  alt={`${exp.company} ${imgIndex + 1}`}
                                  className="w-full aspect-[16/9] sm:aspect-[4/3] object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
