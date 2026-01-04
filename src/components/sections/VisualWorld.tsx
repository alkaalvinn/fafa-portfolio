import React, { useState, useEffect } from 'react';
import { portfolioImages, placeholderImages } from '../../data/portfolioData';

const VisualWorld = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Portfolio images dari portfolioData
  // Jika ada gambar di portfolioImages, gunakan itu
  // Jika tidak, gunakan placeholder
  const getVisualImages = () => {
    const images = portfolioImages.visualWorld;

    // Cek apakah semua gambar adalah placeholder
    const hasOnlyPlaceholders = images.every(img =>
      img.includes('placeholder-visual')
    );


    // Jika ada gambar asli, gunakan gambar tersebut
    return images.map((imageUrl, index) => ({
      id: index + 1,
      imageUrl: imageUrl,
      angle: index * 15
    }));
  };

  const visualImages = getVisualImages();

  // Background hero image
  const heroImage = "/images/visual.webp";

  // Scroll progress dengan tracking lebih detail
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('visual-world');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Progress dari 0 sampai 1 berdasarkan scroll position
      const rawProgress = (viewportHeight - rect.top) / sectionHeight;
      const progress = Math.max(0, Math.min(1, rawProgress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateCircularPosition = (index, total, radius, baseRotation) => {
    const angle = (index / total) * 360 + baseRotation;
    const angleInRadians = (angle * Math.PI) / 180;
    const x = radius * Math.cos(angleInRadians);
    const y = radius * Math.sin(angleInRadians);
    return { x, y, angle };
  };

  // Calculate radius and image size based on screen size
  const getResponsiveValues = () => {
    if (typeof window !== 'undefined') {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        return {
          radius: 180,
          imageSize: { width: '40px', height: '48px' }, // Mobile
          isMobile: true
        };
      }
      if (screenWidth < 1024) {
        return {
          radius: 250,
          imageSize: { width: '55px', height: '66px' }, // Tablet
          isMobile: false
        };
      }
      return {
        radius: 320,
        imageSize: { width: '70px', height: '85px' }, // Desktop
        isMobile: false
      };
    }
    return {
      radius: 320,
      imageSize: { width: '70px', height: '85px' },
      isMobile: false
    };
  };

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
            className="relative overflow-hidden transition-all duration-100 ease-out"
            style={{
              width: `${imageSize}%`,
              height: `${imageSize}%`,
              borderRadius: borderRadius,
              maxWidth: '100%',
              maxHeight: '100%'
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

          {/* Circle of Images - 24 gambar (tanpa rotasi) */}
          <div className="relative w-full h-full flex items-center justify-center">
            {visualImages.map((image, index) => {
              const isHovered = hoveredImage === image.id;
              const { radius, imageSize, isMobile } = getResponsiveValues();
              const position = calculateCircularPosition(index, visualImages.length, radius, 0);
              const imageRotation = position.angle - 90;

              return (
                <div
                  key={image.id}
                  className="absolute cursor-pointer transition-all duration-300"
                  style={{
                    left: '50%',
                    top: '50%',
                    width: imageSize.width,
                    height: imageSize.height,
                    transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px)) rotate(${imageRotation}deg) scale(${isHovered ? 1.3 : 1})`,
                    zIndex: isHovered ? 50 : 10,
                  }}
                  onMouseEnter={() => setHoveredImage(image.id)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <div className="relative w-full h-full overflow-hidden shadow-2xl">
                    <img
                      src={image.imageUrl}
                      alt={`Visual World ${image.id}`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                      style={{
                        transform: isHovered ? 'scale(1.15)' : 'scale(1)',
                        filter: isHovered ? 'brightness(1.2) contrast(1.2)' : 'brightness(0.8) contrast(1)'
                      }}
                    />
                    <div
                      className="absolute inset-0 transition-opacity duration-300"
                      style={{
                        background: isHovered
                          ? 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 100%)'
                          : 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)',
                        opacity: isHovered ? 0.7 : 1
                      }}
                    />
                    <div
                      className="absolute inset-0  border-2 border-gray-400/30 transition-opacity duration-300"
                      style={{ opacity: isHovered ? 1 : 0.4 }}
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