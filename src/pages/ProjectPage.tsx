import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/portfolioData';
import Footer from '../components/common/Footer';
import { useEffect } from 'react';
import PhotographyDetailPage from './PhotographyDetailPage';
import VideographyDetailPage from './VideographyDetailPage';
import DesignDetailPage from './DesignDetailPage';
import CommunicationDetailPage from './CommunicationDetailPage';

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

  // Render the appropriate detail component based on category
  const renderDetailComponent = () => {
    switch (project.category) {
      case 'photography':
        return <PhotographyDetailPage />;
      case 'videography':
        return <VideographyDetailPage />;
      case 'design':
        return <DesignDetailPage />;
      case 'communication':
        return <CommunicationDetailPage />;
      default:
        return null;
    }
  };

  return (
    <>
      {renderDetailComponent()}
    </>
  );
};

export default ProjectPage;