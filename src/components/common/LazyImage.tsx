import { useEffect } from 'react';
import { useLazyImage } from '../../hooks/useLazyImage';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
  threshold?: number;
  onLoad?: () => void;
  style?: React.CSSProperties;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  skeletonClassName = '',
  threshold = 0.1,
  onLoad,
  style
}) => {
  const { imgSrc, isLoading, imgRef } = useLazyImage({ src, threshold });

  useEffect(() => {
    if (imgSrc && !isLoading && onLoad) {
      onLoad();
    }
  }, [imgSrc, isLoading, onLoad]);

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
        loading="lazy"
        style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s ease-in-out', ...style }}
      />
    </>
  );
};
