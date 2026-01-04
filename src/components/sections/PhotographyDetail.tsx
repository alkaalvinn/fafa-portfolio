import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ImageData {
  id: number;
  src: string;
  alt: string;
  orientation: string;
}

interface PhotographyDetailProps {
  isOpen: boolean;
  onClose?: () => void;
}

const PhotographyDetail = ({ isOpen }: PhotographyDetailProps) => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    if (isOpen) {
      const imageFiles = Array.from({ length: 24 }, (_, i) => i + 1);
      const imageData = imageFiles.map(num => ({
        id: num,
        src: `/images/visualworld/${num}.webp`,
        alt: `Photography ${num}`,
        orientation: num % 3 === 0 ? 'portrait' : 'landscape'
      }));
      setImages(imageData);
    }
  }, [isOpen]);

  const handleBackToProjects = () => {
    navigate('/', { state: { scrollToProjects: true } });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleBackToProjects}
      />

      {/* Modal Content */}
      <div className="relative min-h-screen flex items-center justify-center p-2 sm:p-4">
        <div className="relative bg-white rounded-xl sm:rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">

          {/* Close Button */}
          <button
            onClick={handleBackToProjects}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 bg-white/90 hover:bg-white text-gray-900 p-1.5 sm:p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <X size={20}  />
          </button>

          {/* Header Section */}
          <div className="p-6 sm:p-8 md:p-10 pb-4">
            <button
              onClick={handleBackToProjects}
              className="text-gray-600 hover:text-gray-900 text-sm sm:text-base mb-4 flex items-center gap-2 transition-colors"
            >
              ← Back to projects
            </button>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Photography
            </h1>
          </div>

          {/* Gallery Grid */}
          <div className="px-6 sm:px-8 md:px-10 pb-6 sm:pb-8 md:pb-10">
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 auto-rows-[200px] sm:auto-rows-[250px] md:auto-rows-[300px]">
              {images.map((image, index) => {
                // Create abstract layout
                const isPortrait = index % 5 === 0 || index % 7 === 0;
                const isLarge = index % 3 === 0;
                const spanCols = isLarge ? 2 : 1;
                const spanRows = isPortrait ? 2 : 1;

                return (
                  <div
                    key={image.id}
                    className={`
                      relative overflow-hidden rounded-lg cursor-pointer group
                      ${spanCols === 2 ? 'col-span-2' : 'col-span-1'}
                      ${spanRows === 2 ? 'row-span-2' : 'row-span-1'}
                    `}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          />
          <div className="relative max-w-5xl max-h-[90vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotographyDetail;
