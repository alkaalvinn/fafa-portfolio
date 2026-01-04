import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/common/Footer';

interface ImageData {
  id: number;
  src: string;
  alt: string;
  orientation: string;
}

const PhotographyDetailPage = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    const imageFiles = Array.from({ length: 24 }, (_, i) => i + 1);
    const imageData = imageFiles.map(num => ({
      id: num,
      src: `/images/visualworld/${num}.webp`,
      alt: `Photography ${num}`,
      orientation: num % 3 === 0 ? 'portrait' : 'landscape'
    }));
    setImages(imageData);
  }, []);

  const handleBackToProjects = () => {
    navigate('/#projects');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="p-6 sm:p-8 md:p-20 pb-4">
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
      <div className="px-6 sm:px-8 md:px-20 pb-20">
        <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 auto-rows-[140px] sm:auto-rows-[160px] md:auto-rows-[180px]">
          {images.map((image, index) => {
            // Repeating pattern that perfectly fills 4-column grid without gaps
            const pos = index % 6; // Pattern repeats every 6 items
            let cols = 1, rows = 1;

            if (pos === 0) { cols = 2; rows = 1; } // Wide photo spanning 2 cols
            else if (pos === 2 || pos === 3) { cols = 1; rows = 2; } // Tall photos
            else if (pos === 4) { cols = 2; rows = 1; } // Another wide photo
            // pos 1 and 5 remain as single squares

            return (
              <div
                key={image.id}
                className={`
                  relative overflow-hidden rounded-lg cursor-pointer group
                  ${cols === 2 ? 'col-span-2' : 'col-span-1'}
                  ${rows === 2 ? 'row-span-2' : 'row-span-1'}
                `}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            );
          })}
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
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PhotographyDetailPage;