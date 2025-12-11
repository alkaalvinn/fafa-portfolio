import React from 'react';
import PhotographyDetail from './PhotographyDetail';
import VideographyDetail from './VideographyDetail';
import DesignDetail from './DesignDetail';
import CommunicationDetail from './CommunicationDetail';

const ProjectDetail = ({ project, isOpen, onClose }) => {
  if (!project || !isOpen) return null;

  switch (project.category) {
    case 'photography':
      return <PhotographyDetail isOpen={isOpen} onClose={onClose} />;
    case 'videography':
      return <VideographyDetail isOpen={isOpen} onClose={onClose} />;
    case 'design':
      return <DesignDetail isOpen={isOpen} onClose={onClose} />;
    case 'communication':
      return <CommunicationDetail isOpen={isOpen} onClose={onClose} />;
    default:
      return null;
  }
};

export default ProjectDetail;