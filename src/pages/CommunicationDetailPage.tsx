import React, { useState } from 'react';
import { Calendar, User, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/common/Footer';

// Core viewer
import { Viewer } from '@react-pdf-viewer/core';

// Configure PDF.js worker
import { GlobalWorkerOptions } from 'pdfjs-dist';
GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';

const CommunicationDetailPage = () => {
  const navigate = useNavigate();
  const [currentPdfIndex, setCurrentPdfIndex] = useState(0);

  // List of PDF files
  const pdfFiles = [
    { name: 'Backgrounders', path: '/pdf/210310210069_Muhammad Fatih Abrar_Backgrounders.pdf' },
    { name: 'Konferensi Pers', path: '/pdf/210310210069_Muhammad Fatih Abrar_Konferensi Pers_Press Realese_Backgrounders.pdf' },
    { name: 'Logo Guidelines', path: '/pdf/210310210069_Muhammad Fatih Abrar_Logo Guidelines.pdf' },
    { name: 'Media Kit', path: '/pdf/210310210069_Muhammad Fatih Abrar_Media Kit.pdf' },
    { name: 'Portfolio', path: '/pdf/210310210069_Muhammad Fatih Abrar.pdf' },
    { name: 'Charity Event', path: '/pdf/Charity Event Pana Visual.pdf' },
    { name: 'Radio Talkshow', path: '/pdf/210310210069_Muhammad Fatih Abrar_Radio Talkshow.pdf' },
    { name: 'UTS', path: '/pdf/210310210069_Muhamamd Fatih Abrar_UTS.pdf' },
    { name: 'Campaign Proposal', path: '/pdf/210310210069_MUHAMMAD FATIH ABRAR_CAMPAIGN PROPOSAL.pdf' },
    { name: 'UAS', path: '/pdf/UAS_210310210069_Muhammad Fatih Abrar.pdf' },
    { name: 'Miscellaneous Publicity', path: '/pdf/Micellaneous Publicity.pdf' },
    { name: 'Press Conference', path: '/pdf/Press Conference.pdf' },
    { name: 'Connected Campaign Deck', path: '/pdf/Connected to be Distracted - Campaign Deck.pdf' },
    { name: 'Senyum Manis Campaign Deck', path: '/pdf/Senyum Manis dibalik Haus - Campaign Deck.pdf' },
    { name: 'CV', path: '/pdf/CV.pdf' }
  ];

  const handleBackToProjects = () => {
    navigate('/#projects');
  };

  function changePdf(direction: 'next' | 'prev') {
    if (direction === 'next' && currentPdfIndex < pdfFiles.length - 1) {
      setCurrentPdfIndex(currentPdfIndex + 1);
    } else if (direction === 'prev' && currentPdfIndex > 0) {
      setCurrentPdfIndex(currentPdfIndex - 1);
    }
  }

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
          Communication
        </h1>
      </div>

      {/* PDF Viewer Section */}
      <div className="px-6 sm:px-8 md:px-20 pb-12">
        <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
          {/* PDF Navigation */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => changePdf('prev')}
                disabled={currentPdfIndex === 0}
                className={`p-2 rounded-lg ${currentPdfIndex === 0 ? 'bg-gray-200 text-gray-400' : 'bg-white text-gray-700 hover:bg-gray-100'} transition-colors`}
              >
                <ChevronLeft size={20} />
              </button>
              <h3 className="text-lg font-semibold text-gray-900">
                {pdfFiles[currentPdfIndex].name}
              </h3>
              <button
                onClick={() => changePdf('next')}
                disabled={currentPdfIndex === pdfFiles.length - 1}
                className={`p-2 rounded-lg ${currentPdfIndex === pdfFiles.length - 1 ? 'bg-gray-200 text-gray-400' : 'bg-white text-gray-700 hover:bg-gray-100'} transition-colors`}
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              {currentPdfIndex + 1} / {pdfFiles.length}
            </div>
          </div>

          {/* PDF Display */}
          <div className="bg-white rounded-lg shadow-sm overflow-auto" style={{ height: '750px' }}>
            <Viewer
              fileUrl={pdfFiles[currentPdfIndex].path}
            />
          </div>

                  </div>
      </div>

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
              <span className="text-xs sm:text-sm">Communication Strategist</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600">
              <Tag size={16}  />
              <span className="text-xs sm:text-sm">Communication</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Overview</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
              Strategic communication solutions that connect brands with their audiences through compelling narratives and targeted messaging.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Developing comprehensive communication strategies that include public relations, content creation, social media management, and brand storytelling to drive engagement and build lasting relationships.
            </p>
          </div>

          {/* Project Details */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Communication Strategy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Brand Voice</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Crafting unique brand voices that resonate with target audiences while maintaining consistency across all communication channels and touchpoints.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Multi-channel Approach</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Integrating various communication channels - digital, traditional, and emerging platforms - to create cohesive and impactful brand experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Communication Tools</h2>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {['Google Analytics', 'Hootsuite', 'Mailchimp', 'Canva', 'Slack', 'Asana', 'Buffer', 'Medium'].map((tool) => (
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Communication Success</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
                <div className="text-sm text-gray-600">Message Reach</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-gray-900 mb-2">3.5M</div>
                <div className="text-sm text-gray-600">Audience Engagement</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-sm text-gray-600">Campaigns Launched</div>
              </div>
            </div>
            <p className="text-gray-600">
              Building strong brand-consumer relationships through strategic communication initiatives that drive awareness, engagement, and conversion across diverse markets.
            </p>
          </div>

                  </div>
      </div>

      <Footer />
    </div>
  );
};

export default CommunicationDetailPage;
