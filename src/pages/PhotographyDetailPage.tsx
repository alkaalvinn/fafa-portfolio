import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/common/Footer';
import { portfolioImages, experiences } from '../data/portfolioData';

interface ImageData {
  id: string | number;
  src: string;
  alt: string;
  orientation: string;
  company?: string;
}

// Shuffle array helper untuk random urutan
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const PhotographyDetailPage = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  // Get images from portfolioData.ts - GMF, Hangry, dan visualWorld (random order)
  const images = useMemo(() => {
    const gmfImages = portfolioImages.experience[4] || [];
    const hangryImages = portfolioImages.experience[5] || [];
    const visualWorldImages = portfolioImages.visualWorld || [];

    const gmfCompany = experiences.find(e => e.id === 4)?.company || 'GMF AeroAsia';
    const hangryCompany = experiences.find(e => e.id === 5)?.company || 'Hangry';

    // Combine all images with their metadata
    const combined = [
      // GMF images
      ...gmfImages.map((src, index) => ({
        id: `gmf-${index}`,
        src,
        alt: `${gmfCompany} Photography ${index + 1}`,
        orientation: index % 2 === 0 ? 'landscape' : 'portrait',
        company: gmfCompany
      })),
      // Hangry images
      ...hangryImages.map((src, index) => ({
        id: `hangry-${index}`,
        src,
        alt: `${hangryCompany} Photography ${index + 1}`,
        orientation: index % 2 === 0 ? 'landscape' : 'portrait',
        company: hangryCompany
      })),
      // Visual World images
      ...visualWorldImages.map((src, index) => ({
        id: `visual-${index}`,
        src,
        alt: `Visual World ${index + 1}`,
        orientation: index % 3 === 0 ? 'portrait' : 'landscape',
        company: 'Visual World'
      }))
    ];

    // Shuffle array untuk random urutan
    return shuffleArray(combined);
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
                {/* Company label overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs sm:text-sm font-medium">{image.company}</p>
                </div>
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