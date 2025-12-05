import React, { useState, useEffect } from 'react';

const VisualWorld = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    isTouchDevice: false
  });

  // Portfolio images - 24 gambar lengkap
  const visualImages = [
    { id: 1, imageUrl: "https://images.unsplash.com/photo-1542038784456-1b839f078944?w=200&h=250&fit=crop&q=80", angle: 0 },
    { id: 2, imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=200&h=250&fit=crop&q=80", angle: 15 },
    { id: 3, imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=250&fit=crop&q=80", angle: 30 },
    { id: 4, imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=250&fit=crop&q=80", angle: 45 },
    { id: 5, imageUrl: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=200&h=250&fit=crop&q=80", angle: 60 },
    { id: 6, imageUrl: "https://images.unsplash.com/photo-1599421498721-88ba9224cd2f?w=200&h=250&fit=crop&q=80", angle: 75 },
    { id: 7, imageUrl: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=200&h=250&fit=crop&q=80", angle: 90 },
    { id: 8, imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=250&fit=crop&q=80", angle: 105 },
    { id: 9, imageUrl: "https://images.unsplash.com/photo-1561708321-e45b04e8cfee?w=200&h=250&fit=crop&q=80", angle: 120 },
    { id: 10, imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=200&h=250&fit=crop&q=80", angle: 135 },
    { id: 11, imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=200&h=250&fit=crop&q=80", angle: 150 },
    { id: 12, imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=200&h=250&fit=crop&q=80", angle: 165 },
    { id: 13, imageUrl: "https://images.unsplash.com/photo-1522542550221-4fd1c5af2cc1?w=200&h=250&fit=crop&q=80", angle: 180 },
    { id: 14, imageUrl: "https://images.unsplash.com/photo-1559028006-4a637a3a5ca3?w=200&h=250&fit=crop&q=80", angle: 195 },
    { id: 15, imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=200&h=250&fit=crop&q=80", angle: 210 },
    { id: 16, imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=200&h=250&fit=crop&q=80", angle: 225 },
    { id: 17, imageUrl: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?w=200&h=250&fit=crop&q=80", angle: 240 },
    { id: 18, imageUrl: "https://images.unsplash.com/photo-1626785774596-26b83b5765b5?w=200&h=250&fit=crop&q=80", angle: 255 },
    { id: 19, imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=250&fit=crop&q=80", angle: 270 },
    { id: 20, imageUrl: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=200&h=250&fit=crop&q=80", angle: 285 },
    { id: 21, imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=200&h=250&fit=crop&q=80", angle: 300 },
    { id: 22, imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=250&fit=crop&q=80", angle: 315 },
    { id: 23, imageUrl: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=200&h=250&fit=crop&q=80", angle: 330 },
    { id: 24, imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=250&fit=crop&q=80", angle: 345 }
  ];

  // Background hero image
  const heroImage = "/images/visual.png";

  // Continuous rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.08) % 360);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  // Calculate responsive values based on screen size
  const getRadius = () => {
    if (screenSize.width < 380) return 100; // Very small mobile
    if (screenSize.width < 640) return 130; // Mobile
    if (screenSize.width < 768) return 180; // Large mobile/small tablet
    if (screenSize.width < 1024) return 220; // Tablet
    return 280; // Desktop
  };

  const getImageDimensions = () => {
    if (screenSize.width < 380) return { width: '30px', height: '38px' };
    if (screenSize.width < 640) return { width: '35px', height: '44px' };
    if (screenSize.width < 768) return { width: '45px', height: '56px' };
    if (screenSize.width < 1024) return { width: '55px', height: '69px' };
    return { width: '70px', height: '87px' };
  };

  // For mobile, reduce the number of visible images to avoid crowding
  const getVisibleImages = () => {
    if (screenSize.width < 380) return visualImages.slice(0, 8);
    if (screenSize.width < 640) return visualImages.slice(0, 12);
    return visualImages; // Show all 24 images on larger screens
  };

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

    // Handle resize
    const handleResize = () => {
      setScreenSize(prev => ({
        ...prev,
        width: window.innerWidth,
        isTouchDevice: 'ontouchstart' in window || navigator.maxTouchPoints > 0
      }));
    };

    // Detect touch device on mount
    setScreenSize(prev => ({
      ...prev,
      isTouchDevice: 'ontouchstart' in window || navigator.maxTouchPoints > 0
    }));

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const calculateCircularPosition = (index, total, radius, baseRotation) => {
    const angle = (index / total) * 360 + baseRotation;
    const angleInRadians = (angle * Math.PI) / 180;
    const x = radius * Math.cos(angleInRadians);
    const y = radius * Math.sin(angleInRadians);
    return { x, y, angle };
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
      className="relative w-full bg-white overflow-hidden"
      style={{ minHeight: '250vh' }}
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
          <div className="absolute z-20 text-center pointer-events-none px-2 sm:px-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white tracking-tighter leading-none drop-shadow-lg">
              I LIVE IN
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-none mt-1 drop-shadow-lg">
              VISUAL WORLD
            </h2>
          </div>

          {/* Rotating Circle of Images - Responsive number of images */}
          <div className="relative w-full h-full flex items-center justify-center">
            {getVisibleImages().map((image, index) => {
              const isHovered = !screenSize.isTouchDevice && hoveredImage === image.id;
              const radius = getRadius();
              const position = calculateCircularPosition(index, getVisibleImages().length, radius, rotation);
              const imageRotation = position.angle - 90;
              const imageDimensions = getImageDimensions();

              return (
                <div
                  key={image.id}
                  className="absolute transition-all duration-300"
                  style={{
                    left: '50%',
                    top: '50%',
                    width: imageDimensions.width,
                    height: imageDimensions.height,
                    transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px)) rotate(${imageRotation}deg) scale(${isHovered ? 1.2 : 1})`,
                    zIndex: isHovered ? 50 : 10,
                  }}
                  onMouseEnter={() => !screenSize.isTouchDevice && setHoveredImage(image.id)}
                  onMouseLeave={() => !screenSize.isTouchDevice && setHoveredImage(null)}
                >
                  <div className="relative w-full h-full overflow-hidden rounded-sm sm:rounded-lg shadow-xl sm:shadow-2xl">
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500"
                      style={{
                        backgroundImage: `url(${image.imageUrl})`,
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                        filter: 'brightness(0.9) contrast(1.1)',
                      }}
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                      style={{
                        opacity: isHovered ? 0.5 : 0.3
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