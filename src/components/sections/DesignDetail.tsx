import React from 'react';
import { X, Calendar, User, ExternalLink, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface DesignDetailProps {
  isOpen: boolean;
  onClose?: () => void;
}

const DesignDetail = ({ isOpen }: DesignDetailProps) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleBackToProjects = () => {
    navigate('/', { state: { scrollToProjects: true } });
  };

  const categoryColor = 'bg-gray-800';
  const categoryIcon = '🎨';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleBackToProjects}
      />

      {/* Modal Content */}
      <div className="relative min-h-screen flex items-center justify-center p-2 sm:p-4">
        <div className="relative bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">

          {/* Close Button */}
          <button
            onClick={handleBackToProjects}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 bg-white/90 hover:bg-white text-gray-900 p-1.5 sm:p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <X size={20}  />
          </button>

          {/* Hero Image */}
          <div className="relative h-48 sm:h-56 md:h-80 lg:h-96 overflow-hidden">
            <img
              src="https://picsum.photos/seed/design-detail/1200/600.jpg"
              alt="Design"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            {/* Project Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <span className={`${categoryColor} text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2`}>
                  <span>{categoryIcon}</span>
                  Design
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-2 sm:mb-3">
                Design
              </h1>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 md:p-8 max-h-[50vh] overflow-y-auto">
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

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
              <button className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 inline-flex items-center justify-center gap-2">
                <ExternalLink size={18} />
                View Design Portfolio
              </button>
              <button
                onClick={handleBackToProjects}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                Back to Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignDetail;
