import { useState, useRef, useEffect } from 'react';
import { getGridImageUrl, getFullImageUrl } from '../../utils/imageOptimizer';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
  threshold?: number;
  onLoad?: () => void;
  style?: React.CSSProperties;
  useFullQuality?: boolean; // For modal view
  priority?: boolean; // For preloading above-the-fold images
}

/**
 * Optimized Image Component dengan:
 * 1. Cloudinary URL optimization (compression, WebP format)
 * 2. Intersection Observer untuk lazy loading
 * 3. Skeleton loading animation
 * 4. Optional preload untuk critical images
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  skeletonClassName = '',
  threshold = 0.01,
  onLoad,
  style,
  useFullQuality = false,
  priority = false,
}) => {
  const [imgSrc, setImgSrc] = useState<string | null>(priority ? src : null);
  const [isLoading, setIsLoading] = useState(!priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Gunakan URL yang sudah dioptimize
  const optimizedSrc = useFullQuality ? getFullImageUrl(src) : getGridImageUrl(src);

  useEffect(() => {
    if (priority) {
      // Untuk priority images, langsung load tanpa observer
      const img = new Image();
      img.onload = () => {
        setImgSrc(optimizedSrc);
        setIsLoading(false);
        onLoad?.();
      };
      img.onerror = () => {
        setImgSrc(src); // Fallback ke original
        setIsLoading(false);
        onLoad?.();
      };
      img.src = optimizedSrc;
      return;
    }

    // Lazy loading dengan Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Mulai loading gambar
            const img = new Image();

            img.onload = () => {
              setImgSrc(optimizedSrc);
              setIsLoading(false);
              onLoad?.();
            };

            img.onerror = () => {
              // Fallback ke original image
              setImgSrc(src);
              setIsLoading(false);
              onLoad?.();
            };

            img.src = optimizedSrc;

            // Stop observing setelah loaded
            if (imgRef.current) {
              observer.unobserve(imgRef.current);
            }
          }
        });
      },
      {
        threshold,
        rootMargin: '200px', // Mulai loading 200px sebelum masuk viewport
      }
    );

    observerRef.current = observer;

    const currentElement = imgRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [optimizedSrc, src, threshold, priority, onLoad]);

  return (
    <>
      {isLoading && (
        <div
          className={`absolute inset-0 bg-gray-200 animate-pulse ${skeletonClassName}`}
          aria-hidden="true"
        />
      )}
      <img
        ref={imgRef}
        src={imgSrc || ''}
        alt={alt}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        style={{
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out',
          ...style
        }}
      />
    </>
  );
};
