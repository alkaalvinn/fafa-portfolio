import { useState, useRef, useEffect } from 'react';

interface UseLazyImageProps {
  src: string;
  threshold?: number;
}

interface UseLazyImageReturn {
  imgSrc: string | null;
  isLoading: boolean;
  imgRef: React.RefObject<HTMLImageElement | null>;
}

export const useLazyImage = ({
  src,
  threshold = 0.1
}: UseLazyImageProps): UseLazyImageReturn => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start loading the image
            const img = new Image();

            img.onload = () => {
              setImgSrc(src);
              setIsLoading(false);
            };

            img.onerror = () => {
              // Fallback: show original image even if error
              setImgSrc(src);
              setIsLoading(false);
            };

            img.src = src;

            // Stop observing once loaded
            if (imgRef.current) {
              observer.unobserve(imgRef.current);
            }
          }
        });
      },
      {
        threshold,
        rootMargin: '50px' // Start loading 50px before element enters viewport
      }
    );

    const currentElement = imgRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [src, threshold]);

  return { imgSrc, isLoading, imgRef };
};
