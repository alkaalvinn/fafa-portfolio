import React, { useEffect } from 'react';
import { X, Calendar, User, ExternalLink, Tag } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const ProjectDetail = ({ project, isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  if (!project || !isOpen) return null;

  const categoryColors = {
    design: 'bg-gray-800',
    photography: 'bg-gray-700',
    videography: 'bg-gray-600',
    communication: 'bg-gray-900'
  };

  const categoryIcons = {
    design: '🎨',
    photography: '📷',
    videography: '🎥',
    communication: '💬'
  };

  // Function to navigate back to projects section
const handleBackToProjects = () => {
  navigate('/', { state: { scrollToProjects: true } });
};

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleBackToProjects}
      />

      {/* Modal Content */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">

          {/* Close Button */}
          <button
            onClick={handleBackToProjects}
            className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <X size={24} />
          </button>

          {/* Hero Image */}
          <div className="relative h-64 md:h-96 overflow-hidden">
            <img
              src={`https://picsum.photos/seed/project-${project.id}-detail/1200/600.jpg`}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            {/* Project Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className={`${categoryColors[project.category]} text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2`}>
                  <span>{categoryIcons[project.category]}</span>
                  {project.category}
                </span>
                {project.featured && (
                  <div className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
                {project.title}
              </h1>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 max-h-[50vh] overflow-y-auto">
            {/* Project Meta */}
            <div className="flex flex-wrap gap-4 mb-8 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar size={18} />
                <span className="text-sm">2024</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <User size={18} />
                <span className="text-sm">Lead Designer</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Tag size={18} />
                <span className="text-sm">{project.category}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {project.description}
              </p>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* Project Details */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Details</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Challenge</h3>
                  <p className="text-gray-600">
                    The main challenge was to create a unique visual identity that would stand out in a competitive market while maintaining brand consistency.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Solution</h3>
                  <p className="text-gray-600">
                    The solution involved comprehensive research, iterative design process, and close collaboration with stakeholders to ensure all requirements were met.
                  </p>
                </div>
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tools & Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {['Adobe Photoshop', 'Illustrator', 'Figma', 'After Effects', 'Premiere Pro', 'Cinema 4D'].map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Results & Impact</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-2">45%</div>
                  <div className="text-sm text-gray-600">Increase in Engagement</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-2">2.5M</div>
                  <div className="text-sm text-gray-600">Reach</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
              <p className="text-gray-600">
                The project exceeded client expectations and delivered measurable business results with significant impact on brand awareness and user engagement.
              </p>
            </div>

            {/* Gallery Preview */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div key={index} className="relative overflow-hidden rounded-lg">
                    <img
                      src={`https://picsum.photos/seed/project-${project.id}-gallery-${index}/400/300.jpg`}
                      alt={`${project.title} Gallery ${index}`}
                      className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Testimonial</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 italic mb-4">
                  "The team delivered exceptional results beyond our expectations. Their creativity and attention to detail made this project a huge success."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-gray-900">John Doe</div>
                    <div className="text-sm text-gray-600">CEO, Company Name</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
              <button className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 inline-flex items-center justify-center gap-2">
                <ExternalLink size={18} />
                View Live Project
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

export default ProjectDetail;