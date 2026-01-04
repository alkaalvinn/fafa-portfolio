import { useState, useEffect } from 'react';
import { Calendar, User, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/common/Footer';
import { portfolioImages } from '../data/portfolioData';

interface ImageData {
  id: number;
  src: string;
  alt: string;
}

const DesignDetailPage = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    // Combine Kraft Heinz and PT Dua Puluh Tiga images only
    const kraftHeinzImages = portfolioImages.experience[3] || []; // Kraft Heinz
    const ptDuaPuluhTigaImages = portfolioImages.experience[2] || []; // PT Dua Puluh Tiga
    const allImages = [...kraftHeinzImages, ...ptDuaPuluhTigaImages];

    const imageData = allImages.map((src, index) => ({
      id: index,
      src: src,
      alt: `Design Project ${index + 1}`
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
          Design Project
        </h1>
      </div>

      {/* Gallery Grid */}
      <div className="px-6 sm:px-8 md:px-20 pb-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg cursor-pointer group aspect-square"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
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
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
              Innovative design solutions that blend creativity with functionality to deliver exceptional visual experiences.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              From brand identity and digital experiences to print design and environmental graphics, creating impactful designs that communicate your message effectively.
            </p>
          </div>

          {/* Project Details */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Design Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">User-Centered</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Every design decision starts with understanding the user's needs, behaviors, and emotions to create meaningful connections.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Innovation</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Pushing creative boundaries while maintaining usability and accessibility to deliver fresh, engaging design solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Design Tools</h2>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {['Adobe Photoshop', 'Illustrator', 'Figma', 'Sketch', 'Adobe XD', 'After Effects', 'InDesign'].map((tool) => (
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
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
                <div className="text-sm text-gray-600">Design Projects</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-gray-900 mb-2">85%</div>
                <div className="text-sm text-gray-600">Client Retention</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-gray-900 mb-2">12</div>
                <div className="text-sm text-gray-600">Design Awards</div>
              </div>
            </div>
            <p className="text-gray-600">
              Transforming ideas into visually stunning designs that elevate brands and create lasting impressions on target audiences.
            </p>
          </div>

          </div>
      </div>

      <Footer />
    </div>
  );
};

export default DesignDetailPage;
