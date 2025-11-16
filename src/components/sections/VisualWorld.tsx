import React, { useState, useEffect } from 'react';

const VisualWorld = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Portfolio images - 24 gambar lengkap
  const visualImages = [
    { id: 1, imageUrl: "https://images.unsplash.com/photo-1542038784456-1b839f078944?w=400&h=500&fit=crop", angle: 0 },
    { id: 2, imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=500&fit=crop", angle: 15 },
    { id: 3, imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=500&fit=crop", angle: 30 },
    { id: 4, imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop", angle: 45 },
    { id: 5, imageUrl: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=400&h=500&fit=crop", angle: 60 },
    { id: 6, imageUrl: "https://images.unsplash.com/photo-1599421498721-88ba9224cd2f?w=400&h=500&fit=crop", angle: 75 },
    { id: 7, imageUrl: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=500&fit=crop", angle: 90 },
    { id: 8, imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=500&fit=crop", angle: 105 },
    { id: 9, imageUrl: "https://images.unsplash.com/photo-1561708321-e45b04e8cfee?w=400&h=500&fit=crop", angle: 120 },
    { id: 10, imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=500&fit=crop", angle: 135 },
    { id: 11, imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=500&fit=crop", angle: 150 },
    { id: 12, imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=500&fit=crop", angle: 165 },
    { id: 13, imageUrl: "https://images.unsplash.com/photo-1522542550221-4fd1c5af2cc1?w=400&h=500&fit=crop", angle: 180 },
    { id: 14, imageUrl: "https://images.unsplash.com/photo-1559028006-4a637a3a5ca3?w=400&h=500&fit=crop", angle: 195 },
    { id: 15, imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=500&fit=crop", angle: 210 },
    { id: 16, imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=500&fit=crop", angle: 225 },
    { id: 17, imageUrl: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?w=400&h=500&fit=crop", angle: 240 },
    { id: 18, imageUrl: "https://images.unsplash.com/photo-1626785774596-26b83b5765b5?w=400&h=500&fit=crop", angle: 255 },
    { id: 19, imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=500&fit=crop", angle: 270 },
    { id: 20, imageUrl: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=500&fit=crop", angle: 285 },
    { id: 21, imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=500&fit=crop", angle: 300 },
    { id: 22, imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=500&fit=crop", angle: 315 },
    { id: 23, imageUrl: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=500&fit=crop", angle: 330 },
    { id: 24, imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=500&fit=crop", angle: 345 }
  ];

  // Background hero image
  const heroImage = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&h=1080&fit=crop";

  // Continuous rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.08) % 360);
    }, 16);
    return () => clearInterval(interval);
  }, []);

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
          <div className="absolute z-20 text-center pointer-events-none">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tighter leading-none">
              I LIVE IN
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none mt-1">
              VISUAL WORLD
            </h2>
          </div>

          {/* Rotating Circle of Images - 24 gambar */}
          <div className="relative w-full h-full flex items-center justify-center">
            {visualImages.map((image, index) => {
              const isHovered = hoveredImage === image.id;
              const radius = 320;
              const position = calculateCircularPosition(index, visualImages.length, radius, rotation);
              const imageRotation = position.angle - 90;

              return (
                <div
                  key={image.id}
                  className="absolute cursor-pointer transition-all duration-300"
                  style={{
                    left: '50%',
                    top: '50%',
                    width: '70px',
                    height: '85px',
                    transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px)) rotate(${imageRotation}deg) scale(${isHovered ? 1.3 : 1})`,
                    zIndex: isHovered ? 50 : 10,
                  }}
                  onMouseEnter={() => setHoveredImage(image.id)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <div className="relative w-full h-full overflow-hidden rounded-lg shadow-2xl">
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
                      style={{
                        backgroundImage: `url(${image.imageUrl})`,
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
                      className="absolute inset-0 rounded-lg border-2 border-gray-400/30 transition-opacity duration-300"
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