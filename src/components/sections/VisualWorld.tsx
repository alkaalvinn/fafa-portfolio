import { useState, useMemo, useEffect, useCallback } from 'react';
import { portfolioImages } from '../../data/portfolioData';
import { useOptimizedScroll } from '../../hooks/useOptimizedScroll';
import { LazyImage } from '../common/LazyImage';

const VisualWorld = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  // Optimized scroll dengan requestAnimationFrame - mengurangi scroll calls drastis
  const scrollProgress = useOptimizedScroll('visual-world', 1);

  // Portfolio images dari portfolioData - dimemoize untuk mencegah re-calculation
  const visualImages = useMemo(() => {
    const images = portfolioImages.visualWorld;
    return images.map((imageUrl, index) => ({
      id: index + 1,
      imageUrl: imageUrl,
      angle: index * 15
    }));
  }, []);

  // Background hero image
  const heroImage = "/images/visual.webp";

  // Calculate radius and image size based on screen size
  // DIMOVED: Sekali dihitung per resize, bukan 24x per render!
  const [responsiveValues, setResponsiveValues] = useState(() => {
    if (typeof window !== 'undefined') {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        return {
          radius: 180,
          imageSize: { width: '40px', height: '48px' },
          isMobile: true
        };
      }
      if (screenWidth < 1024) {
        return {
          radius: 250,
          imageSize: { width: '55px', height: '66px' },
          isMobile: false
        };
      }
      return {
        radius: 320,
        imageSize: { width: '70px', height: '85px' },
        isMobile: false
      };
    }
    return {
      radius: 320,
      imageSize: { width: '70px', height: '85px' },
      isMobile: false
    };
  });

  // Handle resize dengan debouncing
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 640) {
          setResponsiveValues({
            radius: 180,
            imageSize: { width: '40px', height: '48px' },
            isMobile: true
          });
        } else if (screenWidth < 1024) {
          setResponsiveValues({
            radius: 250,
            imageSize: { width: '55px', height: '66px' },
            isMobile: false
          });
        } else {
          setResponsiveValues({
            radius: 320,
            imageSize: { width: '70px', height: '85px' },
            isMobile: false
          });
        }
      }, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const calculateCircularPosition = useCallback((index: number, total: number, radius: number, baseRotation: number) => {
    const angle = (index / total) * 360 + baseRotation;
    const angleInRadians = (angle * Math.PI) / 180;
    const x = radius * Math.cos(angleInRadians);
    const y = radius * Math.sin(angleInRadians);
    return { x, y, angle };
  }, []);

  // PRE-CALCULATE semua posisi gambar sekali saja!
  // Ini drastis mengurangi re-calculation pada setiap scroll
  const imagePositions = useMemo(() => {
    return visualImages.map((image, index) => {
      const position = calculateCircularPosition(index, visualImages.length, responsiveValues.radius, 0);
      return {
        ...image,
        x: position.x,
        y: position.y,
        rotation: position.angle - 90
      };
    });
  }, [visualImages, responsiveValues.radius, calculateCircularPosition]);

  // Gradual scaling berdasarkan scroll
  // 0-0.3: Small image (20% - 40%)
  // 0.3-0.7: Growing to fullscreen (40% - 100%)
  // 0.7-1: Fullscreen + show content

  const getImageSize = () => {
    if (scrollProgress < 0.3) {
      // Fase 1: Mulai kecil dan bertambah pelan
      return 20 + (scrollProgress / 0.3) * 20; // 20% to 40%
    } else if (scrollProgress < 0.7) {
      // Fase 2: Bertambah sedang sampai fullscreen
      return 40 + ((scrollProgress - 0.3) / 0.4) * 60; // 40% to 100%
    } else {
      return 100; // Fase 3: Fullscreen
    }
  };

  const imageSize = getImageSize();
  const borderRadius = scrollProgress < 0.7 ? `${16 - (scrollProgress * 22)}px` : '0px';
  const overlayOpacity = scrollProgress > 0.7 ? (scrollProgress - 0.7) / 0.3 : 0;
  const contentOpacity = scrollProgress > 0.75 ? (scrollProgress - 0.75) / 0.25 : 0;

  return (
    <section
      id="visual-world"
      className="relative w-full bg-white"
      style={{ minHeight: '400vh' }}
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Growing Background Image - Gradual scaling */}
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <div
            className="relative overflow-hidden"
            style={{
              width: `${imageSize}%`,
              height: `${imageSize}%`,
              borderRadius: borderRadius,
              maxWidth: '100%',
              maxHeight: '100%',
              // OPTIMIZED: Hanya transition properti yang perlu, bukan semua
              transition: 'width 0.1s ease-out, height 0.1s ease-out, border-radius 0.1s ease-out'
            }}
          >
            <img
              src={heroImage}
              alt="Visual World"
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Dark Overlay - muncul pelan setelah fullscreen */}
          <div
            className="absolute inset-0 bg-black transition-opacity duration-500"
            style={{ opacity: overlayOpacity * 0.6 }}
          />
        </div>

        {/* Text and Rotating Images - slide up dari bawah */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-700"
          style={{
            opacity: contentOpacity,
            transform: `translateY(${(1 - contentOpacity) * 100}px)`,
            pointerEvents: contentOpacity > 0 ? 'auto' : 'none'
          }}
        >
          {/* Center Text */}
          <div className="absolute z-20 text-center pointer-events-none px-4">
            <h1
              className="font-bold text-white tracking-tighter leading-none"
              style={{
                fontSize: 'clamp(1.5rem, 5vw, 3rem)',
                WebkitTextStroke: '1px rgba(0,0,0,0.5)',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)'
              }}
            >
              LIVE IN
            </h1>
            <h2
              className="font-black text-white tracking-tight leading-none mt-1"
              style={{
                fontSize: 'clamp(2rem, 6vw, 3.75rem)',
                WebkitTextStroke: '1px rgba(0,0,0,0.5)',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)'
              }}
            >
              VISUAL WORLD
            </h2>
          </div>

          {/* Circle of Images - 24 gambar dengan lazy loading dan skeleton */}
          <div className="relative w-full h-full flex items-center justify-center">
            {imagePositions.map((image) => {
              const isHovered = hoveredImage === image.id;

              return (
                <div
                  key={image.id}
                  className="absolute cursor-pointer"
                  style={{
                    left: '50%',
                    top: '50%',
                    width: responsiveValues.imageSize.width,
                    height: responsiveValues.imageSize.height,
                    transform: `translate(calc(-50% + ${image.x}px), calc(-50% + ${image.y}px)) rotate(${image.rotation}deg) scale(${isHovered ? 1.3 : 1})`,
                    zIndex: isHovered ? 50 : 10,
                    // OPTIMIZED: Hanya transition transform
                    transition: 'transform 0.3s ease-out'
                  }}
                  onMouseEnter={() => setHoveredImage(image.id)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <div className="relative w-full h-full overflow-hidden shadow-2xl">
                    {/* LazyImage dengan skeleton fallback */}
                    <LazyImage
                      src={image.imageUrl}
                      alt={`Visual World ${image.id}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{
                        transform: isHovered ? 'scale(1.15)' : 'scale(1)',
                        filter: isHovered ? 'brightness(1.2) contrast(1.2)' : 'brightness(0.8) contrast(1)',
                        // OPTIMIZED: Hanya transition transform dan filter
                        transition: 'transform 0.7s ease-out, filter 0.3s ease-out'
                      }}
                      threshold={0.01}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: isHovered
                          ? 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 100%)'
                          : 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)',
                        opacity: isHovered ? 0.7 : 1,
                        // OPTIMIZED: Hanya transition opacity
                        transition: 'opacity 0.3s ease-out'
                      }}
                    />
                    <div
                      className="absolute inset-0  border-2 border-gray-400/30"
                      style={{
                        opacity: isHovered ? 1 : 0.4,
                        // OPTIMIZED: Hanya transition opacity
                        transition: 'opacity 0.3s ease-out'
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualWorld;