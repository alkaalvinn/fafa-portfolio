import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, ExternalLink, Tag } from 'lucide-react';
import { projects } from '../data/portfolioData';
import Footer from '../components/common/Footer';
import { useEffect } from 'react';

const ProjectPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  // Find project by ID or return 404
  const project = projects.find(p => p.id === parseInt(projectId || ''));

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

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

  const getProjectSlug = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  };

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname === '/') {
      const element = document.querySelector(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Back Navigation */}
      <div className="container mx-auto px-6 py-4">
        <button
          onClick={() => navigate('/#projects')}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-200"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={`https://picsum.photos/seed/project-${project.id}-detail/1920/800.jpg`}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto">
            <div className="flex items-center gap-3 mb-4">
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Project Meta */}
          <div className="flex flex-wrap gap-6 mb-12 pb-8 border-b border-gray-200">
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

          {/* Overview */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                {project.description}
              </p>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>

          {/* Project Details */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Details</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">The Challenge</h3>
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The main challenge was to create a unique visual identity that would stand out in a competitive market while maintaining brand consistency and user engagement across all touchpoints.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Solution</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The solution involved comprehensive research, iterative design process, and close collaboration with stakeholders to ensure all requirements were met. We implemented a multi-phase approach that delivered measurable results.
                </p>
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tools & Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {['Adobe Photoshop', 'Illustrator', 'Figma', 'After Effects', 'Premiere Pro', 'Cinema 4D', 'Lightroom', 'Sketch', 'InDesign', 'Blender'].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Results & Impact */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-gray-900 mb-2">45%</div>
                <div className="text-gray-600">Increase in Engagement</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-gray-900 mb-2">2.5M</div>
                <div className="text-gray-600">Reach</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
            <div className="prose max-w-none">
              <p className="text-gray-600 leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. The project exceeded client expectations and delivered measurable business results that impacted key performance indicators across multiple departments.
              </p>
            </div>
          </div>

          {/* Gallery */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index} className="group overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={`https://picsum.photos/seed/project-${project.id}-gallery-${index}/600/400.jpg`}
                    alt={`${project.title} Gallery ${index}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Testimonial</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The team delivered exceptional results beyond our expectations. Their attention to detail and creative approach made all the difference."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                <div>
                  <div className="text-lg font-semibold text-gray-900">John Doe</div>
                  <div className="text-gray-600">CEO, Company Name</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-gray-200">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 inline-flex items-center justify-center gap-2"
            >
              <ExternalLink size={20} />
              View Live Project
            </a>
            <Link
              to="/#projects"
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 inline-flex items-center justify-center"
            >
              Back to All Projects
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectPage;