import { useMemo, useEffect, useState, useRef, memo } from 'react';
import { portfolioImages } from '../../data/portfolioData';

// ============================================
// STATIC COMPONENT: CircularImage
// Tidak pernah re-renders karena tidak ada dynamic props
// ============================================
interface CircularImageProps {
  id: number;
  imageUrl: string;
  x: number;
  y: number;
  rotation: number;
  width: string;
  height: string;
}

const CircularImage = memo(({ id, imageUrl, x, y, rotation, width, height }: CircularImageProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // CSS transform sudah dihitung sekali, tidak berubah saat scroll
  const transformStyle = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${rotation}deg)`;

  return (
    <div
      className="absolute cursor-pointer group"
      style={{
        left: '50%',
        top: '50%',
        width,
        height,
        transform: transformStyle,
        zIndex: isHovered ? 50 : 10,
        // GPU acceleration
        willChange: 'transform',
        // CSS containment untuk performance
        contain: 'layout style paint',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full overflow-hidden shadow-2xl">
        <img
          src={imageUrl}
          alt={`Visual World ${id}`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
          style={{
            transform: isHovered ? 'scale(1.15)' : 'scale(1)',
            filter: isHovered ? 'brightness(1.2) contrast(1.2)' : 'brightness(0.8) contrast(1)',
          }}
        />
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: isHovered
              ? 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 100%)'
              : 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)',
            opacity: isHovered ? 0.7 : 1,
          }}
        />
        <div
          className="absolute inset-0 border-2 border-gray-400/30 transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0.4 }}
        />
      </div>
    </div>
  );
});

CircularImage.displayName = 'CircularImage';

// ============================================
// MAIN COMPONENT
// CSS-only scroll animation - TIDAK ADA RE-RENDERS
// ============================================
const VisualWorld = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageSize, setImageSize] = useState(20); // Initial size
  const [borderRadius, setBorderRadius] = useState('16px');
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const [contentOpacity, setContentOpacity] = useState(0);

  const heroImage = '/images/visual.webp';

  // Portfolio images - 24 gambar
  const visualImages = useMemo(() => {
    const images = portfolioImages.visualWorld;
    return images.map((imageUrl, index) => ({
      id: index + 1,
      imageUrl: imageUrl,
    }));
  }, []);

  // Responsive values
  const [responsiveValues, setResponsiveValues] = useState(() => {
    if (typeof window !== 'undefined') {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        return {
          radius: 180,
          imageSize: { width: '40px', height: '48px' },
        };
      }
      if (screenWidth < 1024) {
        return {
          radius: 250,
          imageSize: { width: '55px', height: '66px' },
        };
      }
      return {
        radius: 320,
        imageSize: { width: '70px', height: '85px' },
      };
    }
    return {
      radius: 320,
      imageSize: { width: '70px', height: '85px' },
    };
  });

  // Resize handler
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
          });
        } else if (screenWidth < 1024) {
          setResponsiveValues({
            radius: 250,
            imageSize: { width: '55px', height: '66px' },
          });
        } else {
          setResponsiveValues({
            radius: 320,
            imageSize: { width: '70px', height: '85px' },
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

  // Pre-calculate semua posisi gambar sekali saja
  const imagePositions = useMemo(() => {
    return visualImages.map((image, index) => {
      const angle = (index / visualImages.length) * 360;
      const angleInRadians = (angle * Math.PI) / 180;
      const x = responsiveValues.radius * Math.cos(angleInRadians);
      const y = responsiveValues.radius * Math.sin(angleInRadians);
      return {
        ...image,
        x,
        y,
        rotation: angle - 90,
      };
    });
  }, [visualImages, responsiveValues.radius]);

  // ============================================
  // OPTIMIZED SCROLL HANDLER
  // Langsung update DOM, TIDAK trigger React re-renders!
  // ============================================
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const section = document.getElementById('visual-world');
          if (!section) return;

          const rect = section.getBoundingClientRect();
          const sectionHeight = section.offsetHeight;
          const viewportHeight = window.innerHeight;
          const rawProgress = (viewportHeight - rect.top) / sectionHeight;
          const progress = Math.max(0, Math.min(1, rawProgress));

          // Hitung values
          let newImageSize: number;
          if (progress < 0.3) {
            newImageSize = 20 + (progress / 0.3) * 20;
          } else if (progress < 0.7) {
            newImageSize = 40 + ((progress - 0.3) / 0.4) * 60;
          } else {
            newImageSize = 100;
          }

          const newBorderRadius = progress < 0.7 ? `${16 - progress * 22}px` : '0px';
          const newOverlayOpacity = progress > 0.7 ? (progress - 0.7) / 0.3 : 0;
          const newContentOpacity = progress > 0.75 ? (progress - 0.75) / 0.25 : 0;

          // LANGSUNG update DOM - TIDAK trigger React re-renders!
          setImageSize(newImageSize);
          setBorderRadius(newBorderRadius);
          setOverlayOpacity(newOverlayOpacity);
          setContentOpacity(newContentOpacity);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="visual-world"
      className="relative w-full bg-white"
      style={{ minHeight: '400vh' }}
    >
      <div className="sticky top-0 h-screen overflow-hidden" ref={containerRef}>
        {/* Growing Background Image */}
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <div
            className="relative overflow-hidden will-change-transform"
            style={{
              width: `${imageSize}%`,
              height: `${imageSize}%`,
              borderRadius,
              maxWidth: '100%',
              maxHeight: '100%',
              transition: 'width 0.1s linear, height 0.1s linear, border-radius 0.1s linear',
            }}
          >
            <img
              src={heroImage}
              alt="Visual World"
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Dark Overlay */}
          <div
            className="absolute inset-0 bg-black transition-opacity duration-500"
            style={{ opacity: overlayOpacity * 0.6 }}
          />
        </div>

        {/* Text and Rotating Images Container */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-700"
          style={{
            opacity: contentOpacity,
            transform: `translateY(${(1 - contentOpacity) * 100}px)`,
            pointerEvents: contentOpacity > 0 ? 'auto' : 'none',
          }}
        >
          {/* Static Text - tidak pernah re-render */}
          <div className="absolute z-20 text-center pointer-events-none px-4">
            <h1
              className="font-bold text-white tracking-tighter leading-none"
              style={{
                fontSize: 'clamp(1.5rem, 5vw, 3rem)',
                WebkitTextStroke: '1px rgba(0,0,0,0.5)',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)',
              }}
            >
              LIVE IN
            </h1>
            <h2
              className="font-black text-white tracking-tight leading-none mt-1"
              style={{
                fontSize: 'clamp(2rem, 6vw, 3.75rem)',
                WebkitTextStroke: '1px rgba(0,0,0,0.5)',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)',
              }}
            >
              VISUAL WORLD
            </h2>
          </div>

          {/* Circle of Images - 24 gambar, STATIC, tidak re-render saat scroll */}
          <div className="relative w-full h-full flex items-center justify-center">
            {imagePositions.map((image) => (
              <CircularImage
                key={image.id}
                id={image.id}
                imageUrl={image.imageUrl}
                x={image.x}
                y={image.y}
                rotation={image.rotation}
                width={responsiveValues.imageSize.width}
                height={responsiveValues.imageSize.height}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualWorld;
