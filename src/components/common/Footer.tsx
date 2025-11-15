import { Mail, Linkedin, ExternalLink, Heart } from 'lucide-react';
import { socialLinks } from '../../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6">
        {/* Bottom border line */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            Built with React + Vite + TypeScript + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;