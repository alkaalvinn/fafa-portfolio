import React, { useState, useEffect } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { experiences } from '../../data/portfolioData';
import arrow from '../../../public/images/arrow.png';

const Experience = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const getExperienceImages = (companyId) => {
    return [
      `https://picsum.photos/seed/experience-${companyId}-1/300/300.jpg`,
      `https://picsum.photos/seed/experience-${companyId}-2/300/300.jpg`,
      arrow,
      `https://picsum.photos/seed/experience-${companyId}-4/300/300.jpg`,
    ];
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

  // Header position (appears after title animation)
  const headerOpacity = scrollProgress > 0.8 ? 1 : 0;
  const headerY = scrollProgress > 0.8 ? 0 : 20;

  return (
    <section id="experience" className="relative bg-white" style={{ minHeight: `${200 + experiences.length * 100}vh` }}>
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
          <h2 className="text-8xl md:text-9xl font-bold text-gray-900">
            Experience
          </h2>
        </div>

        {/* Content Container */}
        <div className="w-full h-full flex flex-col">
          {/* Header Section - Fixed at top */}
          <div 
            className="flex-shrink-0 py-8 px-6"
            style={{
              opacity: headerOpacity,
              transform: `translateY(${headerY}px)`,
              transition: 'all 0.5s ease-out'
            }}
          >
            <div className="container mx-auto max-w-7xl">
              <div className="text-left">
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 mt-24">
                  Experience
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                  My professional journey through various industries and roles
                </p>
              </div>
            </div>
          </div>

          {/* Experience Cards Container - Takes remaining space */}
          <div className="flex-1 relative px-6 py-8">
            <div className="container mx-auto max-w-7xl h-full flex items-center pt-8 pb-20">
              {experiences.map((exp, index) => {
                const isVisible = visibleExpIndex === index;
                const opacity = isVisible ? 1 : 0;
                const translateY = isVisible ? 0 : 20;

                return (
                  <div
                    key={exp.id}
                    className="absolute inset-0 flex items-center px-6"
                    style={{
                      opacity: opacity,
                      transform: `translateY(${translateY}px)`,
                      transition: 'all 0.8s ease-in-out',
                      pointerEvents: isVisible ? 'auto' : 'none'
                    }}
                  >
                    <div className="container mx-auto max-w-7xl">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center -mt-10">
                        {/* Left Side - Text Content */}
                        <div className="text-left space-y-5">
                          {/* Period */}
                          <div className="flex items-center gap-2">
                            <Calendar className="text-gray-600" size={20} />
                            <span className="text-base text-gray-600 font-medium">{exp.period}</span>
                          </div>

                          {/* Position */}
                          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            {exp.position}
                          </h3>

                          {/* Company */}
                          <div className="flex items-center gap-2">
                            <MapPin className="text-gray-500" size={18} />
                            <span className="text-xl md:text-2xl font-semibold text-gray-700">
                              {exp.company}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-base md:text-lg text-gray-600 leading-relaxed pt-2">
                            {exp.description}
                          </p>

                          {/* Responsibilities */}
                          <div className="pt-3">
                            <ul className="space-y-2.5 text-sm md:text-base text-gray-600">
                              {exp.responsibilities.map((resp, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                  <span className="text-gray-700 mt-1">•</span>
                                  <span className="leading-relaxed">{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Right Side - Images */}
                        <div className="relative">
                          <div className="grid grid-cols-2 gap-4">
                            {getExperienceImages(exp.id).map((image, imgIndex) => (
                              <div
                                key={imgIndex}
                                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                              >
                                <img
                                  src={image}
                                  alt={`${exp.company} ${imgIndex + 1}`}
                                  className="w-full aspect-[4/3] object-cover"
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