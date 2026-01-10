import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'rectangular' | 'circular' | 'text';
  width?: string | number;
  height?: string | number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'rectangular',
  width,
  height
}) => {
  const baseClasses = 'animate-pulse bg-gray-200';

  const variantClasses = {
    rectangular: 'rounded-md',
    circular: 'rounded-full',
    text: 'rounded h-4'
  };

  const style = {
    width: width || '100%',
    height: height || (variant === 'text' ? '1rem' : '100%')
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
};

// Skeleton component khusus untuk image cards
export const ImageCardSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <Skeleton variant="rectangular" width="100%" height="100%" className="!h-full !w-full" />
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
  </div>
);

// Skeleton component untuk Experience section
export const ExperienceImageSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative ${className}`}>
    <Skeleton variant="rectangular" className="!w-full !aspect-[16/9] sm:!aspect-[4/3]" />
  </div>
);

// Skeleton component untuk Visual World circular images
export const CircularImageSkeleton: React.FC<{
  size: string;
  className?: string;
}> = ({ size, className = '' }) => (
  <div className={className} style={{ width: size, height: size }}>
    <Skeleton variant="rectangular" className="!w-full !h-full rounded-md" />
  </div>
);

// Loading overlay component untuk section transitions
export const SectionLoadingOverlay: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-sm text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  );
};
