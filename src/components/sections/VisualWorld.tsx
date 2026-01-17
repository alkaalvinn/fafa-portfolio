import { useState, useMemo, useEffect, useCallback, memo } from 'react';
import { portfolioImages } from '../../data/portfolioData';
import { useOptimizedScroll } from '../../hooks/useOptimizedScroll';
import { LazyImage } from '../common/LazyImage';

// ============================================
// MEMOIZED COMPONENT: CircularImage
// Hanya re-render jika props berubah
// ============================================
interface CircularImageProps {
  image: {
    id: number;
    imageUrl: string;
    x: number;
    y: number;
    rotation: number;
  };
  imageSize: { width: string; height: string };
  isHovered: boolean;
  onHover: (id: number) => void;
  onLeave: () => void;
}

const CircularImage = memo(({ image, imageSize, isHovered, onHover, onLeave }: CircularImageProps) => {
  // Callbacks untuk event handlers - stable references
  const handleMouseEnter = useCallback(() => onHover(image.id), [image.id, onHover]);
  const handleMouseLeave = useCallback(() => onLeave(), [onLeave]);

  // Pre-compute transform string
  const transformStyle = useMemo(
    () => `translate(calc(-50% + ${image.x}px), calc(-50% + ${image.y}px)) rotate(${image.rotation}deg) scale(${isHovered ? 1.3 : 1})`,
    [image.x, image.y, image.rotation, isHovered]
  );

  // Pre-compute image transform
  const imageTransformStyle = useMemo(
    () => (isHovered ? 'scale(1.15)' : 'scale(1)'),
    [isHovered]
  );

  // Pre-compute filter style
  const filterStyle = useMemo(
    () => (isHovered ? 'brightness(1.2) contrast(1.2)' : 'brightness(0.8) contrast(1)'),
    [isHovered]
  );

  // Pre-compute gradient style
  const gradientStyle = useMemo(
    () =>
      isHovered
        ? 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 100%)'
        : 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)',
    [isHovered]
  );

  return (
    <div
      className="absolute cursor-pointer"
      style={{
        left: '50%',
        top: '50%',
        width: imageSize.width,
        height: imageSize.height,
        transform: transformStyle,
        zIndex: isHovered ? 50 : 10,
        transition: 'transform 0.3s ease-out',
        // CSS containment untuk isolasi layout/paint
        contain: 'layout style paint',
        // Hint ke browser bahwa transform akan berubah
        willChange: 'transform',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative w-full h-full overflow-hidden shadow-2xl"
        style={{ contain: 'layout style paint' }}
      >
        <LazyImage
          src={image.imageUrl}
          alt={`Visual World ${image.id}`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            transform: imageTransformStyle,
            filter: filterStyle,
            transition: 'transform 0.7s ease-out, filter 0.3s ease-out',
            willChange: 'transform, filter',
          }}
          threshold={0.01}
        />
        <div
          className="absolute inset-0"
          style={{
            background: gradientStyle,
            opacity: isHovered ? 0.7 : 1,
            transition: 'opacity 0.3s ease-out',
          }}
        />
        <div
          className="absolute inset-0 border-2 border-gray-400/30"
          style={{
            opacity: isHovered ? 1 : 0.4,
            transition: 'opacity 0.3s ease-out',
          }}
        />
      </div>
    </div>
  );
});

CircularImage.displayName = 'CircularImage';

// ============================================
// MEMOIZED COMPONENT: StaticText
// Tidak pernah re-renders karena tidak ada props
// ============================================
const StaticText = memo(() => (
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
));

StaticText.displayName = 'StaticText';

// ============================================
// MAIN COMPONENT
// ============================================
const VisualWorld = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  // Optimized scroll dengan requestAnimationFrame
  const scrollProgress = useOptimizedScroll('visual-world', 1);

  // Portfolio images - dimemoize untuk mencegah re-calculation
  const visualImages = useMemo(() => {
    const images = portfolioImages.visualWorld;
    return images.map((imageUrl, index) => ({
      id: index + 1,
      imageUrl: imageUrl,
      angle: index * 15,
    }));
  }, []);

  const heroImage = '/images/visual.webp';

  // Responsive values - hanya update saat resize
  const [responsiveValues, setResponsiveValues] = useState(() => {
    if (typeof window !== 'undefined') {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        return {
          radius: 180,
          imageSize: { width: '40px', height: '48px' },
          isMobile: true,
        };
      }
      if (screenWidth < 1024) {
        return {
          radius: 250,
          imageSize: { width: '55px', height: '66px' },
          isMobile: false,
        };
      }
      return {
        radius: 320,
        imageSize: { width: '70px', height: '85px' },
        isMobile: false,
      };
    }
    return {
      radius: 320,
      imageSize: { width: '70px', height: '85px' },
      isMobile: false,
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
            isMobile: true,
          });
        } else if (screenWidth < 1024) {
          setResponsiveValues({
            radius: 250,
            imageSize: { width: '55px', height: '66px' },
            isMobile: false,
          });
        } else {
          setResponsiveValues({
            radius: 320,
            imageSize: { width: '70px', height: '85px' },
            isMobile: false,
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

  const calculateCircularPosition = useCallback(
    (index: number, total: number, radius: number, baseRotation: number) => {
      const angle = (index / total) * 360 + baseRotation;
      const angleInRadians = (angle * Math.PI) / 180;
      const x = radius * Math.cos(angleInRadians);
      const y = radius * Math.sin(angleInRadians);
      return { x, y, angle };
    },
    []
  );

  // PRE-CALCULATE semua posisi gambar sekali saja!
  const imagePositions = useMemo(() => {
    return visualImages.map((image, index) => {
      const position = calculateCircularPosition(
        index,
        visualImages.length,
        responsiveValues.radius,
        0
      );
      return {
        ...image,
        x: position.x,
        y: position.y,
        rotation: position.angle - 90,
      };
    });
  }, [visualImages, responsiveValues.radius, calculateCircularPosition]);

  // Hover handlers - stable references dengan useCallback
  const handleHover = useCallback((id: number) => setHoveredImage(id), []);
  const handleLeave = useCallback(() => setHoveredImage(null), []);

  // Pre-calculate scroll-based styles untuk mengurangi perhitungan saat render
  const scrollStyles = useMemo(() => {
    let imageSizeValue: number;
    if (scrollProgress < 0.3) {
      imageSizeValue = 20 + (scrollProgress / 0.3) * 20;
    } else if (scrollProgress < 0.7) {
      imageSizeValue = 40 + ((scrollProgress - 0.3) / 0.4) * 60;
    } else {
      imageSizeValue = 100;
    }

    const borderRadiusValue =
      scrollProgress < 0.7 ? `${16 - scrollProgress * 22}px` : '0px';
    const overlayOpacityValue = scrollProgress > 0.7 ? (scrollProgress - 0.7) / 0.3 : 0;
    const contentOpacityValue = scrollProgress > 0.75 ? (scrollProgress - 0.75) / 0.25 : 0;

    return {
      imageSize: imageSizeValue,
      borderRadius: borderRadiusValue,
      overlayOpacity: overlayOpacityValue,
      contentOpacity: contentOpacityValue,
    };
  }, [scrollProgress]);

  return (
    <section
      id="visual-world"
      className="relative w-full bg-white"
      style={{ minHeight: '400vh' }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Growing Background Image */}
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <div
            className="relative overflow-hidden"
            style={{
              width: `${scrollStyles.imageSize}%`,
              height: `${scrollStyles.imageSize}%`,
              borderRadius: scrollStyles.borderRadius,
              maxWidth: '100%',
              maxHeight: '100%',
              transition: 'width 0.1s ease-out, height 0.1s ease-out, border-radius 0.1s ease-out',
              // Hint untuk browser
              willChange: 'width, height, border-radius',
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
            style={{ opacity: scrollStyles.overlayOpacity * 0.6 }}
          />
        </div>

        {/* Text and Rotating Images Container */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-700"
          style={{
            opacity: scrollStyles.contentOpacity,
            transform: `translateY(${(1 - scrollStyles.contentOpacity) * 100}px)`,
            pointerEvents: scrollStyles.contentOpacity > 0 ? 'auto' : 'none',
          }}
        >
          {/* Static Text - tidak pernah re-render */}
          <StaticText />

          {/* Circle of Images */}
          <div className="relative w-full h-full flex items-center justify-center">
            {imagePositions.map((image) => (
              <CircularImage
                key={image.id}
                image={image}
                imageSize={responsiveValues.imageSize}
                isHovered={hoveredImage === image.id}
                onHover={handleHover}
                onLeave={handleLeave}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualWorld;
