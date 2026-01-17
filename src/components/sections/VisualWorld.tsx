import { useMemo, useEffect, useState, useRef } from 'react';
import { portfolioImages } from '../../data/portfolioData';

// ============================================
// PHOTO TILE COMPONENT
// ============================================
interface PhotoTileProps {
  id: number;
  imageUrl: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
}

const PhotoTile = ({ id, imageUrl, x, y, width, height, rotation }: PhotoTileProps) => {
  return (
    <div
      className="photo-tile"
      style={{
        left: '50%',
        top: '50%',
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${rotation}deg)`,
      }}
    >
      <img src={imageUrl} alt={`Photo ${id}`} loading="lazy" className="photo-tile-img" />
    </div>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================
const VisualWorld = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const heroImage = '/images/visual.webp';

  // 11 gambar untuk arc
  const visualImages = useMemo(() => {
    const images = portfolioImages.visualWorld.slice(0, 11);
    return images.map((imageUrl, index) => ({
      id: index + 1,
      imageUrl: imageUrl,
    }));
  }, []);

  // Responsive values - rasio 5:4 portrait (tinggi > lebar)
  const [responsiveValues, setResponsiveValues] = useState(() => {
    if (typeof window !== 'undefined') {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        return {
          arcRadius: 130,
          tileWidth: 36,
          tileHeight: 45,
          yOffset: 10,
        };
      }
      if (screenWidth < 1024) {
        return {
          arcRadius: 200,
          tileWidth: 48,
          tileHeight: 60,
          yOffset: 15,
        };
      }
      return {
        arcRadius: 320,
        tileWidth: 64,
        tileHeight: 80,
        yOffset: 80, // Ditambah lagi agar lebih ke bawah
      };
    }
    return {
      arcRadius: 320,
      tileWidth: 64,
      tileHeight: 80,
      yOffset: 80,
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
            arcRadius: 130,
            tileWidth: 36,
            tileHeight: 45,
            yOffset: 10,
          });
        } else if (screenWidth < 1024) {
          setResponsiveValues({
            arcRadius: 200,
            tileWidth: 48,
            tileHeight: 60,
            yOffset: 15,
          });
        } else {
          setResponsiveValues({
            arcRadius: 320,
            tileWidth: 64,
            tileHeight: 80,
            yOffset: 80,
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

  // Pre-calculate posisi untuk SETENGAH LINGKARAN yang RAPI dan SIMETRIS
  const tilePositions = useMemo(() => {
    return visualImages.map((image, index) => {
      // Setengah lingkaran dari kiri (180°) ke kanan (0°/360°) melalui atas
      // Sudut mulai dari 175° (kiri atas) ke 5° (kanan atas)
      const totalPhotos = visualImages.length;
      const startAngle = 175; // derajat
      const endAngle = 5;     // derajat (melewati 180/0)

      // Hitung sudut untuk setiap foto dengan spacing SERAGAM
      const angleStep = (endAngle + (360 - startAngle)) / (totalPhotos - 1);
      let angle = startAngle + (index * angleStep);

      // Handle wrap-around di 180°
      if (angle >= 180) {
        angle = angle - 360;
      }

      const angleInRadians = (angle * Math.PI) / 180;

      // Posisi pada lingkaran
      const x = responsiveValues.arcRadius * Math.cos(angleInRadians);
      const y = responsiveValues.arcRadius * Math.sin(angleInRadians) + responsiveValues.yOffset;

      // Rotasi sesuai posisi pada lingkaran:
      // -90° di ujung kiri, 0° di tengah, +90° di ujung kanan
      // Rumus: angle = sudut posisi foto, rotasi = angle + 90 (karena 0° di tengah atas = menghadap ke bawah)
      const rotation = angle + 90;

      return {
        ...image,
        x,
        y,
        rotation,
      };
    });
  }, [visualImages, responsiveValues.arcRadius, responsiveValues.yOffset]);

  // ============================================
  // SCROLL HANDLER - Direct DOM manipulation
  // ============================================
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const section = document.getElementById('visual-world');
          const bgImage = bgImageRef.current;
          const overlay = overlayRef.current;
          const content = contentRef.current;

          if (!section || !bgImage || !overlay || !content) return;

          const rect = section.getBoundingClientRect();
          const sectionHeight = section.offsetHeight;
          const viewportHeight = window.innerHeight;
          const rawProgress = (viewportHeight - rect.top) / sectionHeight;
          const progress = Math.max(0, Math.min(1, rawProgress));

          // Hitung values
          let imageSize: number;
          if (progress < 0.3) {
            imageSize = 20 + (progress / 0.3) * 20;
          } else if (progress < 0.7) {
            imageSize = 40 + ((progress - 0.3) / 0.4) * 60;
          } else {
            imageSize = 100;
          }

          const borderRadius = progress < 0.7 ? `${16 - progress * 22}px` : '0px';
          const overlayOpacity = progress > 0.7 ? (progress - 0.7) / 0.3 : 0;
          const contentOpacity = progress > 0.75 ? (progress - 0.75) / 0.25 : 0;

          // Direct DOM manipulation
          bgImage.style.width = `${imageSize}%`;
          bgImage.style.height = `${imageSize}%`;
          bgImage.style.borderRadius = borderRadius;
          overlay.style.opacity = `${overlayOpacity * 0.6}`;
          content.style.opacity = `${contentOpacity}`;
          content.style.transform = `translateY(${(1 - contentOpacity) * 100}px)`;

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
    <>
      <style>{`
        .photo-tile {
          position: absolute;
          z-index: 10;
          /* Bayangan lembut untuk kesan melayang */
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          /* Transisi halus */
          transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
        }

        .photo-tile:hover {
          z-index: 20;
          transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) scale(1.08) !important;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
        }

        .photo-tile-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          /* Sudut membulat sedang */
          border-radius: 10px;
          /* Sedikit memperjelas kontras */
          filter: brightness(0.95) contrast(1.05);
          transition: filter 0.3s ease-out;
        }

        .photo-tile:hover .photo-tile-img {
          filter: brightness(1.02) contrast(1.08);
        }

        /* Vignette overlay di ujung kiri dan kanan */
        .arc-vignette-left {
          position: absolute;
          left: 0;
          top: 0;
          width: 15%;
          height: 50%;
          background: linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 100%);
          pointer-events: none;
          z-index: 15;
        }

        .arc-vignette-right {
          position: absolute;
          right: 0;
          top: 0;
          width: 15%;
          height: 50%;
          background: linear-gradient(to left, rgba(0,0,0,0.5) 0%, transparent 100%);
          pointer-events: none;
          z-index: 15;
        }

        /* Text styling - Simple, Elegan, dan Kecil */
        .visual-world-title {
          font-size: clamp(0.625rem, 1.8vw, 1.25rem); /* Mobile lebih kecil */
          font-weight: 300; /* Light untuk kesan elegant */
          color: #ffffff;
          letter-spacing: 0.15em; /* Letter spacing luas untuk modern look */
          line-height: 1.2;
          text-align: center;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.6);
          text-transform: uppercase; /* Uppercase untuk modern */
        }

        /* Mobile specific: font lebih kecil */
        @media (max-width: 640px) {
          .visual-world-title {
            font-size: 0.65rem; /* Extra kecil untuk mobile */
            letter-spacing: 0.1em;
          }
        }
      `}</style>

      <section
        id="visual-world"
        className="relative w-full bg-white"
        style={{ minHeight: '400vh' }}
      >
        <div className="sticky top-0 h-screen overflow-hidden" ref={containerRef}>
          {/* Growing Background Image - TIDAK DIUBAH */}
          <div className="absolute inset-0 flex items-center justify-center bg-white">
            <div
              ref={bgImageRef}
              className="relative overflow-hidden will-change-transform"
              style={{
                width: '20%',
                height: '20%',
                borderRadius: '16px',
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
              ref={overlayRef}
              className="absolute inset-0 bg-black transition-opacity duration-500"
              style={{ opacity: 0 }}
            />
          </div>

          {/* Photo Tiles Arc di ATAS */}
          <div
            ref={contentRef}
            className="absolute inset-0"
            style={{
              opacity: 0,
              transform: 'translateY(100px)',
              pointerEvents: 'none',
              transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
            }}
          >
            {/* Photo Tiles - Setengah lingkaran di tengah */}
            <div className="relative w-full h-full flex items-center justify-center">
              {tilePositions.map((tile) => (
                <PhotoTile
                  key={tile.id}
                  id={tile.id}
                  imageUrl={tile.imageUrl}
                  x={tile.x}
                  y={tile.y}
                  width={responsiveValues.tileWidth}
                  height={responsiveValues.tileHeight}
                  rotation={tile.rotation}
                />
              ))}
            </div>

            {/* Text di TENGAH - Sejajar dengan foto */}
            <div className="absolute inset-0 flex items-center justify-center z-30 px-6">
              <h1 className="visual-world-title">Live in Visual World</h1>
            </div>

            {/* Vignette overlays di ujung */}
            <div className="arc-vignette-left" />
            <div className="arc-vignette-right" />
          </div>
        </div>
      </section>
    </>
  );
};

export default VisualWorld;
