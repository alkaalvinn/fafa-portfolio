import React, { useEffect, useRef } from 'react';

const CreativeBanner = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const phrases = [
    "Live in Visual World",
    "Thoughts, ideas, and digital craft",
    "Purpose-driven digital work",
    "Design with intention",
    "Innovation through imagination",
    "Where art meets technology",
    "Crafting digital experiences",
    "Building tomorrow's vision today",
    "Transforming pixels into emotions"
  ];

  // Duplicate phrases for continuous scrolling
  const allPhrases = [...phrases, ...phrases, ...phrases];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Adjust speed as needed

    const scroll = () => {
      scrollPosition += scrollSpeed;

      // Reset when we've scrolled through one set of phrases
      if (scrollPosition >= scrollContainer.scrollWidth / 3) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 16); // ~60fps

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full bg-black overflow-hidden relative -mt-8 sm:-mt-14 z-50">
      {/* Subtle shadow for depth */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-gray-900 to-transparent opacity-30"></div>

      <div className="relative py-3 sm:py-4">
        {/* Gradient fade edges for smooth appearance */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-r from-black via-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-l from-black via-black to-transparent z-10"></div>

        {/* Scrolling container */}
        <div
          ref={scrollRef}
          className="overflow-x-hidden whitespace-nowrap"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="inline-flex items-center space-x-6 sm:space-x-8 md:space-x-10">
            {allPhrases.map((phrase, index) => (
              <React.Fragment key={index}>
                <span
                  className="text-white inline-block font-light tracking-wide text-xs sm:text-sm opacity-80"
                  style={{
                    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    letterSpacing: '0.08em',
                    fontVariant: 'all-small-caps'
                  }}
                >
                  {phrase}
                </span>
                {/* Simple separator */}
                <span className="text-white opacity-40 text-sm sm:text-base">•</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle shadow for depth at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-black to-transparent opacity-30"></div>
    </div>
  );
};

export default CreativeBanner;