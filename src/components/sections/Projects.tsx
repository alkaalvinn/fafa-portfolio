import React, { useState } from 'react';
import { projects } from '../../data/portfolioData';
import { ExternalLink, Camera, Video, Palette, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState<'photography' | 'videography' | 'design' | 'communication'>('design');
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Generate banner images for projects
  const getProjectBanner = (projectId: number) => {
    return `https://picsum.photos/seed/project-${projectId}/1200/600.jpg`;
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my creative work across different mediums
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {['photography', 'videography', 'design', 'communication'].map((category) => (
            <button
              key={category}
              onClick={() => {
                setFilter(category as any);
                setCurrentIndex(0); // Reset to first project when filter changes
              }}
              className={`px-6 py-2 rounded-full capitalize transition-all duration-200 ${
                filter === category
                  ? 'bg-gray-800 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
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
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
              {/* Banner Image */}
              <div className="relative h-96 md:h-[500px] overflow-hidden">
                <img
                  src={getProjectBanner(filteredProjects[currentIndex].id)}
                  alt={filteredProjects[currentIndex].title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Project Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-white">
                  {/* Category and Featured Badges */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`${categoryColors[filteredProjects[currentIndex].category]} px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2`}>
                      {React.createElement(categoryIcons[filteredProjects[currentIndex].category], { size: 16 })}
                      {filteredProjects[currentIndex].category}
                    </div>
                    {filteredProjects[currentIndex].featured && (
                      <div className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-3xl md:text-5xl font-bold mb-4">
                    {filteredProjects[currentIndex].title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl">
                    {filteredProjects[currentIndex].description}
                  </p>

                  {/* CTA Button */}
                  <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 inline-flex items-center gap-2">
                    <ExternalLink size={20} />
                    View Project
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            {filteredProjects.length > 1 && (
              <>
                {/* Previous Button */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  aria-label="Previous project"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  aria-label="Next project"
                >
                  <ChevronRight size={24} />
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