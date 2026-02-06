import { useState, useMemo, useEffect } from 'react';
import { Calendar, User, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/common/Footer';
import { OptimizedImage } from '../components/common/OptimizedImage';
import { portfolioImages } from '../data/portfolioData';
import { preloadImages, getVisibleImageCount, getGridImageUrl } from '../utils/imageOptimizer';

interface ImageData {
  id: number;
  src: string;
  alt: string;
  title: string;
  orientation: 'landscape' | 'square';
}

const DesignDetailPage = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  // Get images dari portfolioData.ts
  const images = useMemo(() => {
    const designData = portfolioImages.design || [];
    return designData;
  }, []);

  // Preload gambar-gambar yang terlihat pertama (above-the-fold)
  useEffect(() => {
    const visibleCount = getVisibleImageCount(images.length, 4);
    const imagesToPreload = images.slice(0, visibleCount).map(img => getGridImageUrl(img.src));
    preloadImages(imagesToPreload, 'high');
  }, [images]);

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
          Design Project
        </h1>
      </div>

      {/* Gallery Grid */}
      <div className="px-6 sm:px-8 md:px-20 pb-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 auto-rows-[200px] sm:auto-rows-[220px] md:auto-rows-[240px]">
          {images.map((image, index) => {
            // Gunakan orientasi asli dari data untuk menentukan ukuran grid
            // landscape = wide (col-span-2), square = kotak (1x1)
            const isLandscape = image.orientation === 'landscape';

            const cols: number = isLandscape ? 2 : 1;
            const rows: number = 1;

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
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={index < 8} // Preload 8 gambar pertama (above the fold)
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
                <OptimizedImage
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                  useFullQuality={true}
                  priority={true}
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

      {/* Content */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Project Meta */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-gray-200">
            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600">
              <Calendar size={16}  />
              <span className="text-xs sm:text-sm">2024</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600">
              <User size={16}  />
              <span className="text-xs sm:text-sm">Creative Director</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600">
              <Tag size={16}  />
              <span className="text-xs sm:text-sm">Design</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Overview</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Delivering strategic design solutions that merge aesthetics with functionality. I specialize in transforming abstract concepts into tangible assets from comprehensive brand identities to digital experiences that not only captivate audiences but also communicate business value effectively
            </p>
          </div>

          {/* Project Details */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Design Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">User-Centric Approach</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Design with empathy. I ground every creative decision in user behavior analysis to ensure visual communication that resonates and converts.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Functional Creativity</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Pushing visual boundaries without compromising utility. I balance trend-forward aesthetics with strict usability standards to deliver designs that are as practical as they are striking.
                </p>
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Design Tools</h2>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {['Adobe Photoshop', 'Adobe Illustrator', 'Adobe Lightroom', 'Canva'].map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 sm:px-3 sm:py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Design Impact</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
                <div className="text-sm text-gray-600">Design Projects</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-gray-900 mb-2">85%</div>
                <div className="text-sm text-gray-600">Client Retention</div>
              </div>
            </div>
            <p className="text-gray-600">
              Turning complex ideas into clear, compelling visual narratives that drive brand growth.
            </p>
          </div>

          </div>
      </div>

      <Footer />
    </div>
  );
};

export default DesignDetailPage;
