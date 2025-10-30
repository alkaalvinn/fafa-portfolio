import { useState } from 'react';
import { projects } from '../../data/portfolioData';
import { ExternalLink, Camera, Video, Palette, Type } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'photography' | 'videography' | 'design' | 'copywriting'>('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const categoryIcons = {
    photography: Camera,
    videography: Video,
    design: Palette,
    copywriting: Type
  };

  const categoryColors = {
    photography: 'bg-blue-500',
    videography: 'bg-green-500',
    design: 'bg-purple-500',
    copywriting: 'bg-orange-500'
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my creative work across different mediums
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'photography', 'videography', 'design', 'copywriting'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category as any)}
              className={`px-6 py-2 rounded-full capitalize transition-all duration-200 ${
                filter === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const IconComponent = categoryIcons[project.category];

            return (
              <div
                key={project.id}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Project image placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent className="text-gray-400" size={48} />
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-gray-900 px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors duration-200">
                      <ExternalLink size={20} />
                      View Project
                    </button>
                  </div>

                  {/* Category badge */}
                  <div className={`absolute top-4 right-4 ${categoryColors[project.category]} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {project.category}
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {project.category}
                    </span>
                    <button className="text-orange-500 hover:text-orange-600 transition-colors duration-200 font-medium text-sm">
                      Learn more →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load more button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200 font-medium">
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;