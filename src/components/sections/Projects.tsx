import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/portfolioData';
import { ExternalLink, Camera, Video, Palette, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState<'photography' | 'videography' | 'design' | 'communication'>('design');
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const filteredProjects = projects.filter(project => project.category === filter);

  const categoryIcons = {
    photography: Camera,
    videography: Video,
    design: Palette,
    communication: MessageSquare
  };

  const categoryColors = {
    photography: 'bg-gray-700',
    videography: 'bg-gray-600',
    design: 'bg-gray-800',
    communication: 'bg-gray-900'
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!bannerRef.current || !isHovering) return;

    const rect = bannerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = Math.min(Math.max((y - centerY) / 25, -10), 10);
    const rotateY = Math.min(Math.max((centerX - x) / 25, -10), 10);

    setMousePosition({ x: rotateY, y: rotateX });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  };

  // Generate banner images/videos for projects
  const getProjectBanner = (projectId: number, category?: string) => {
    // Bank Indonesia Anniversary Campaign (ID: 1) uses local image
    if (projectId === 1) {
      return '/images/banner-1.png';
    }
    // Kraft Heinz Brand Communication Strategy (ID: 3) uses local image
    else if (projectId === 3) {
      return '/images/banner-3.png';
    }

    // Corporate Video Documentary (ID: 2) uses video
    if (category === 'videography' || projectId === 2) {
      return '/videos/video.mp4';
    }

    // Other projects use placeholder
    return `https://picsum.photos/seed/project-${projectId}/1200/600.jpg`;
  };

  // Check if project should use video
  const isVideoProject = (category?: string) => {
    return category === 'videography';
  };

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of my creative work across different mediums
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
          {['photography', 'videography', 'design', 'communication'].map((category) => (
            <button
              key={category}
              onClick={() => {
                setFilter(category as any);
                setCurrentIndex(0); // Reset to first project when filter changes
              }}
              className={`px-4 sm:px-5 md:px-6 py-2 rounded-full capitalize transition-all duration-200 text-sm sm:text-base ${
                filter === category
                  ? 'bg-lime-400 text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Single Column Slider */}
        {filteredProjects.length > 0 && (
          <div className="relative max-w-full mx-auto">
            {/* Current Project Banner */}
            <div className="relative bg-black  overflow-hidden shadow-2xl">
              {/* Banner Image/Video */}
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
                <div
                  ref={bannerRef}
                  className="absolute inset-0 cursor-pointer"
                  style={{
                    transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) scale(${isHovering ? 1.02 : 1})`,
                    transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.3s ease-out',
                    transformStyle: 'preserve-3d',
                    willChange: 'transform'
                  }}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {isVideoProject(filteredProjects[currentIndex].category) ? (
                    <video
                      src={getProjectBanner(filteredProjects[currentIndex].id, filteredProjects[currentIndex].category)}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                      style={{
                        transform: `translateZ(${isHovering ? '50px' : '0px'})`,
                        transition: 'transform 0.3s ease-out'
                      }}
                    />
                  ) : (
                    <img
                      src={getProjectBanner(filteredProjects[currentIndex].id)}
                      alt={filteredProjects[currentIndex].title}
                      className="w-full h-full object-cover"
                      style={{
                        transform: `translateZ(${isHovering ? '50px' : '0px'})`,
                        transition: 'transform 0.3s ease-out'
                      }}
                    />
                  )}
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>

                {/* View Project Button - Top Right */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 z-50">
                  <Link
                    to={`/project/${filteredProjects[currentIndex].id}`}
                    className="bg-lime-400 text-gray-900 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
                  >
                    <ExternalLink size={16} sm:size={18} />
                    View Project
                  </Link>
                </div>

                {/* Project Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-12 text-white pointer-events-none">
                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-3 sm:mb-4">
                    {filteredProjects[currentIndex].title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl">
                    {filteredProjects[currentIndex].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            {filteredProjects.length > 1 && (
              <>
                {/* Previous Button */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  aria-label="Previous project"
                >
                  <ChevronLeft size={20} sm:size={24} />
                </button>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  aria-label="Next project"
                >
                  <ChevronRight size={20} sm:size={24} />
                </button>
              </>
            )}

            {/* Project Indicators */}
            {filteredProjects.length > 1 && (
              <div className="flex justify-center gap-2 mt-6">
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentIndex
                        ? 'bg-gray-800 w-8'
                        : 'bg-gray-400 hover:bg-gray-600'
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Project Counter */}
            {filteredProjects.length > 1 && (
              <div className="text-center mt-4 text-gray-600 font-medium">
                {currentIndex + 1} / {filteredProjects.length}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;