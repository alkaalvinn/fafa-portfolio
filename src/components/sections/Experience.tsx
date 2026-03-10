import { useMemo, useState, useEffect } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { experiences, portfolioImages } from '../../data/portfolioData';
import { useOptimizedScroll, useScrollIndexFixed } from '../../hooks/useOptimizedScroll';
import { ExperienceImageSkeleton } from '../common/Skeleton';
import { LazyImage } from '../common/LazyImage';

// Photo positions for the scattered intro collage - no rotation, abstract layout
// Desktop positions + mobile overrides (m prefix) to keep photos away from center title
// Mobile: title is ~40-60% vertical center, so photos go in top 30% and bottom 25%
const scatteredPhotos = [
  // === TOP ROW (4 photos above title) ===
  // top-left
  { src: '/images/banner-1.png', top: '5%', left: '3%', w: 280, h: 180, mTop: '5%', mLeft: '2%', mw: 140, mh: 90, parallaxY: -120, parallaxX: -40, mParallaxY: -30, mParallaxX: -10 },
  // top-right
  { src: '/images/banner-3.png', top: '2%', right: '4%', w: 320, h: 200, mTop: '4%', mRight: '2%', mw: 150, mh: 95, parallaxY: -150, parallaxX: 50, mParallaxY: -35, mParallaxX: 15 },
  // mid-top-left
  { src: '/images/visual.webp', top: '38%', left: '0%', w: 300, h: 200, mTop: '18%', mLeft: '5%', mw: 120, mh: 80, parallaxY: -40, parallaxX: -100, mParallaxY: -15, mParallaxX: -15 },
  // mid-top-right
  { src: '/images/co-1.webp', top: '33%', right: '0%', w: 270, h: 190, mTop: '20%', mRight: '3%', mw: 110, mh: 75, parallaxY: -30, parallaxX: 100, mParallaxY: -10, mParallaxX: 15 },
  // === BOTTOM ROW (4 photos below title) ===
  // bottom-left
  { src: '/images/banner-4.png', bottom: '12%', left: '1%', w: 260, h: 180, mBottom: '40%', mLeft: '3%', mw: 135, mh: 85, parallaxY: 100, parallaxX: -60, mParallaxY: 25, mParallaxX: -12 },
  // bottom-right
  { src: '/images/fafa.webp', bottom: '8%', right: '3%', w: 240, h: 300, mBottom: '35%', mRight: '2%', mw: 100, mh: 130, parallaxY: 130, parallaxX: 70, mParallaxY: 30, mParallaxX: 15 },
  // bottom-center-left (new)
  { src: '/images/co-2.webp', bottom: '18%', left: '30%', w: 250, h: 170, mBottom: '20%', mLeft: '5%', mw: 120, mh: 75, parallaxY: 80, parallaxX: -30, mParallaxY: 20, mParallaxX: -10 },
  // bottom-center-right (new)
  { src: '/images/experience/23-1.webp', bottom: '5%', right: '28%', w: 260, h: 180, mBottom: '15%', mRight: '4%', mw: 115, mh: 75, parallaxY: 110, parallaxX: 40, mParallaxY: 25, mParallaxX: 12 },
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
};

const Experience = () => {
  const isMobile = useIsMobile();
  // Slower scroll multiplier (0.2 instead of 0.3) for longer transitions
  const scrollProgress = useOptimizedScroll('experience', 0.2);
  const visibleExpIndex = useScrollIndexFixed('experience', experiences.length, 0.35);

  const getExperienceImages = useMemo(() => {
    return (companyId: number): string[] | undefined => {
      const images = portfolioImages.experience[companyId as keyof typeof portfolioImages.experience];
      if (images && images.length > 0) {
        return images;
      }
    };
  }, []);

  // Slower title fade - stays visible longer
  const titleScale = 1 - (scrollProgress * 0.5);
  const titleY = scrollProgress * -30;
  const titleOpacity = scrollProgress < 0.65 ? 1 : 1 - ((scrollProgress - 0.65) / 0.35);

  // Photo collage opacity - fades out as experience cards appear
  const photoCollageOpacity = scrollProgress < 0.55 ? 1 : 1 - ((scrollProgress - 0.55) / 0.25);

  const renderRange = [
    visibleExpIndex - 1,
    visibleExpIndex,
    visibleExpIndex + 1
  ].filter(index => index >= 0 && index < experiences.length);

  return (
    <section id="experience" className="relative bg-white" style={{ minHeight: `${250 + experiences.length * 140}vh`, paddingTop: isMobile ? '8vh' : '15vh' }}>
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">

        {/* Scattered Photo Collage - parallax on scroll */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: photoCollageOpacity,
            transition: 'opacity 0.4s ease-out',
          }}
        >
          {scatteredPhotos.map((photo, i) => {
            const pY = isMobile ? photo.mParallaxY : photo.parallaxY;
            const pX = isMobile ? photo.mParallaxX : photo.parallaxX;
            const translateY = scrollProgress * pY;
            const translateX = scrollProgress * pX;
            const scale = 1 + scrollProgress * (isMobile ? 0.04 : 0.08);
            const w = isMobile ? photo.mw : photo.w;
            const h = isMobile ? photo.mh : photo.h;

            // Use mobile-specific positions when available
            const posTop = isMobile ? (photo.mTop ?? photo.top) : photo.top;
            const posBottom = isMobile ? (photo.mBottom ?? photo.bottom) : photo.bottom;
            const posLeft = isMobile ? (photo.mLeft ?? photo.left) : photo.left;
            const posRight = isMobile ? (photo.mRight ?? photo.right) : photo.right;

            return (
              <img
                key={i}
                src={photo.src}
                alt=""
                className="absolute object-cover shadow-2xl"
                style={{
                  width: w,
                  height: h,
                  top: posTop,
                  bottom: posBottom,
                  left: posLeft,
                  right: posRight,
                  transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
                  transition: 'transform 0.15s linear',
                  opacity: isMobile ? 0.7 : 0.85,
                  filter: 'grayscale(20%)',
                }}
              />
            );
          })}
        </div>

        {/* Title - centered, above photos via z-index */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
          style={{
            opacity: titleOpacity,
            transform: `translateY(${titleY}vh) scale(${titleScale})`,
            transition: 'opacity 0.4s ease-out',
          }}
        >
          <h2
            className="font-bold text-gray-900"
            style={{
              fontSize: 'clamp(3.5rem, 12vw, 8rem)',
              textShadow: '0 2px 40px rgba(255,255,255,0.9)',
              letterSpacing: '-0.02em',
            }}
          >
            Experience
          </h2>
        </div>

        {/* Content Container */}
        <div className="w-full h-full flex flex-col">
          <div className="flex-1 relative px-4 sm:px-6 py-6 sm:py-8">
            <div className="container mx-auto max-w-7xl h-full flex items-center pt-6 sm:pt-8 pb-16 sm:pb-20">
              {renderRange.map((index) => {
                const exp = experiences[index];
                const isVisible = visibleExpIndex === index;
                const opacity = isVisible ? 1 : 0;
                const translateY = isVisible ? 0 : 20;

                return (
                  <div
                    key={index}
                    className="absolute inset-0 flex items-center px-3 sm:px-6 overflow-y-auto"
                    style={{
                      opacity: opacity,
                      transform: `translateY(${translateY}px)`,
                      transition: 'all 0.8s ease-in-out',
                      pointerEvents: isVisible ? 'auto' : 'none'
                    }}
                  >
                    <div className="container mx-auto max-w-7xl">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-16 items-center">
                        {/* Left Side - Text Content */}
                        <div className="text-left space-y-2 sm:space-y-5">
                          <div className="flex items-center gap-2">
                            <Calendar className="text-gray-600" size={isMobile ? 14 : 16} />
                            <span
                              className="text-gray-600 font-medium"
                              style={{ fontSize: 'clamp(0.75rem, 2.5vw, 1rem)' }}
                            >
                              {exp.period}
                            </span>
                          </div>

                          <h3
                            className="font-bold text-gray-900 leading-tight"
                            style={{ fontSize: 'clamp(1.25rem, 5vw, 3rem)' }}
                          >
                            {exp.position}
                          </h3>

                          <div className="flex items-center gap-2">
                            <MapPin className="text-gray-500" size={isMobile ? 12 : 14} />
                            <span
                              className="font-semibold text-gray-700"
                              style={{ fontSize: 'clamp(0.875rem, 3vw, 1.5rem)' }}
                            >
                              {exp.company}
                            </span>
                          </div>

                          <div className="pt-0 sm:pt-2">
                            <ul
                              className="space-y-0.5 sm:space-y-2 text-gray-600"
                              style={{ fontSize: 'clamp(0.7rem, 2vw, 0.875rem)' }}
                            >
                              {exp.responsibilities.map((resp, idx) => (
                                <li key={idx} className="flex items-start gap-1.5 sm:gap-3">
                                  <span className="text-gray-700 mt-0.5">•</span>
                                  <span className="leading-snug sm:leading-relaxed">{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Right Side - Images */}
                        <div className="relative mt-2 sm:mt-0">
                          <div className="grid grid-cols-2 gap-1.5 sm:gap-4">
                            {getExperienceImages(exp.id)?.map((image: string, imgIndex: number) => (
                              <div
                                key={imgIndex}
                                className="relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                              >
                                <LazyImage
                                  src={image}
                                  alt={`${exp.company} ${imgIndex + 1}`}
                                  className="w-full aspect-[16/10] sm:aspect-[4/3] object-cover"
                                  threshold={0.1}
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
