import React, { useState, useEffect } from 'react';

const WorkWithMe = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Abstract image URLs with different aspect ratios
  const abstractImages = [
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&sat=2', // Landscape
    'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=400&h=600&fit=crop&sat=2', // Portrait
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&h=500&fit=crop&sat=2', // Square
    'https://images.unsplash.com/photo-1541185933-bef49de6a354?w=700&h=400&fit=crop&sat=2', // Wide landscape
    'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=400&h=700&fit=crop&sat=2', // Tall portrait
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=350&fit=crop&sat=2', // Wide landscape
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('work-with-me');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate progress from 0 to 1 based on scroll position
      const progress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (sectionHeight * 0.6)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate scale based on scroll (start very small, end large)
  const getScale = (baseScale = 0.1) => {
    return baseScale + (scrollProgress * (1.2 - baseScale)); // From 0.1 to 1.2
  };

  // Calculate opacity and position based on scroll
  const titleOpacity = scrollProgress > 0.15 ? 1 : scrollProgress * 6.67; // Fade in after 15% scroll
  const titleY = scrollProgress > 0.15 ? 0 : 30 - (scrollProgress * 200); // Move up and settle

  return (
    <section id="work-with-me" className="relative bg-neutral-50" style={{ minHeight: '100vh' }}>

      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">

        {/* Main Content Container */}
        <div className="relative w-full h-full flex items-center justify-center px-6 py-8">

          {/* Abstract Images Grid - Mixed rectangles */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Top Row - Mixed formats */}
            {/* Landscape rectangle */}
            <div
              className="absolute top-10 left-10 md:top-20 md:left-20 w-32 h-20 md:w-48 md:h-32 overflow-hidden shadow-lg"
              style={{
                transform: `scale(${getScale(0.15)})`,
                transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              <img
                src={abstractImages[0]}
                alt="Abstract 1"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Portrait rectangle */}
            <div
              className="absolute top-20 right-10 md:top-16 md:right-32 w-20 h-32 md:w-28 md:h-48 overflow-hidden shadow-xl"
              style={{
                transform: `scale(${getScale(0.2)})`,
                transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              <img
                src={abstractImages[1]}
                alt="Abstract 2"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Wide landscape */}
            <div
              className="absolute top-32 left-1/3 md:top-40 md:left-1/4 w-36 h-18 md:w-56 md:h-28 overflow-hidden shadow-md"
              style={{
                transform: `scale(${getScale(0.12)})`,
                transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              <img
                src={abstractImages[3]}
                alt="Abstract 3"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Middle Row - Mixed formats */}
            {/* Tall portrait */}
            <div
              className="absolute top-1/2 left-8 md:top-1/3 md:left-16 w-24 h-36 md:w-32 md:h-56 overflow-hidden shadow-2xl"
              style={{
                transform: `scale(${getScale(0.25)})`,
                transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              <img
                src={abstractImages[4]}
                alt="Abstract 4"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Square */}
            <div
              className="absolute top-1/2 right-8 md:top-2/3 md:right-24 w-28 h-28 md:w-40 md:h-40 overflow-hidden shadow-lg"
              style={{
                transform: `scale(${getScale(0.18)})`,
                transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              <img
                src={abstractImages[2]}
                alt="Abstract 5"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Row - Mixed formats */}
            {/* Wide landscape */}
            <div
              className="absolute bottom-20 left-20 md:bottom-32 md:left-32 w-40 h-20 md:w-64 md:h-32 overflow-hidden shadow-lg"
              style={{
                transform: `scale(${getScale(0.16)})`,
                transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              <img
                src={abstractImages[5]}
                alt="Abstract 6"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Portrait rectangle */}
            <div
              className="absolute bottom-10 right-20 md:bottom-20 md:right-40 w-24 h-36 md:w-36 md:h-52 overflow-hidden shadow-xl"
              style={{
                transform: `scale(${getScale(0.22)})`,
                transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              <img
                src={abstractImages[1]}
                alt="Abstract 7"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Square */}
            <div
              className="absolute bottom-1/3 left-1/2 md:bottom-1/4 md:left-2/3 w-24 h-24 md:w-36 md:h-36 overflow-hidden shadow-md"
              style={{
                transform: `scale(${getScale(0.1)})`,
                transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              <img
                src={abstractImages[2]}
                alt="Abstract 8"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Additional scattered elements */}
            {/* Tall portrait */}
            <div
              className="absolute top-1/4 right-1/4 w-20 h-32 md:w-28 md:h-44 overflow-hidden shadow-md"
              style={{
                transform: `scale(${getScale(0.08)})`,
                transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              <img
                src={abstractImages[4]}
                alt="Abstract 9"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Wide landscape */}
            <div
              className="absolute bottom-1/4 left-1/4 w-36 h-18 md:w-52 md:h-26 overflow-hidden shadow-sm"
              style={{
                transform: `scale(${getScale(0.06)})`,
                transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              <img
                src={abstractImages[0]}
                alt="Abstract 10"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Extra elements for more visual interest */}
            {/* Square */}
            <div
              className="absolute top-1/6 left-1/6 w-24 h-24 md:w-36 md:h-36 overflow-hidden shadow-lg"
              style={{
                transform: `scale(${getScale(0.12)})`,
                transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              <img
                src={abstractImages[2]}
                alt="Abstract 11"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Portrait rectangle */}
            <div
              className="absolute top-3/4 right-1/6 w-20 h-30 md:w-28 md:h-42 overflow-hidden shadow-xl"
              style={{
                transform: `scale(${getScale(0.14)})`,
                transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              <img
                src={abstractImages[1]}
                alt="Abstract 12"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Small landscape */}
            <div
              className="absolute top-2/3 left-1/3 w-28 h-14 md:w-40 md:h-20 overflow-hidden shadow-md"
              style={{
                transform: `scale(${getScale(0.1)})`,
                transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              <img
                src={abstractImages[5]}
                alt="Abstract 13"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center Content - Title */}
          <div
            className="relative z-10 text-center"
            style={{
              opacity: titleOpacity,
              transform: `translateY(${titleY}px)`,
              transition: 'all 0.6s ease-out'
            }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              <span className="block sm:inline">Wanna Work</span>{' '}
              <span className="block sm:inline">With Me?</span>
            </h1>
          </div>

          {/* Scroll Indicator */}
          {scrollProgress < 0.8 && (
            <div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
              style={{
                opacity: 1 - (scrollProgress * 1.25),
                transition: 'opacity 0.3s ease-out'
              }}
            >
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
              </div>
              <p className="text-xs text-gray-500 mt-2 tracking-wider">SCROLL TO CONTINUE</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkWithMe;