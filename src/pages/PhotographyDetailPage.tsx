import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/common/Footer';
import { portfolioImages } from '../data/portfolioData';

interface ImageData {
  id: string | number;
  src: string;
  alt: string;
  orientation: string;
  company?: string;
}

const PhotographyDetailPage = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  // Get images dari portfolioData.ts - urutan MANUAL sesuai setting di data file
  const images = useMemo(() => {
    const photographyData = portfolioImages.photography || [];

    return photographyData.map((item, index) => ({
      id: item.id,
      src: item.src,
      alt: `${item.company} Photography ${index + 1}`,
      orientation: item.orientation || 'landscape',
      company: item.company || 'Unknown'
    }));
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
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 auto-rows-[140px] sm:auto-rows-[160px] md:auto-rows-[180px]">
          {images.map((image, index) => {
            // Pattern dinamis untuk 32 gambar dengan variasi ukuran
            const pos = index % 12; // Pattern repeats every 12 items
            let cols = 1, rows = 1;

            // Grid pattern untuk variasi visual yang menarik
            if (pos === 0 || pos === 6) { cols = 2; rows = 1; } // Wide photos
            else if (pos === 2 || pos === 4 || pos === 8 || pos === 10) { cols = 1; rows = 2; } // Tall photos
            // pos 1, 3, 5, 7, 9, 11 remain as single squares

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
                  loading="lazy"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 sm:p-6 md:p-8">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          />
          <div className="relative max-w-4xl w-full">
            <div className="flex items-center justify-center">
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                {/* Button close di dalam area gambar - kanan atas */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200 z-10"
                >
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PhotographyDetailPage;