import React, { useState } from 'react';
import { Calendar, User, Tag, ChevronLeft, ChevronRight, Play, Pause, Volume2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/common/Footer';

const VideographyDetailPage = () => {
  const navigate = useNavigate();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  // List of video files
  const videoFiles = [
    { name: 'Project Showcase 1', path: '/videos/video.mp4' },
    { name: 'Project Showcase 2', path: '/videos/video2.mp4' },
    { name: 'Project Showcase 3', path: '/videos/video3.mp4' },
    { name: 'Project Showcase 4', path: '/videos/video4.mp4' }
  ];

  const handleBackToProjects = () => {
    navigate('/#projects');
  };

  const changeVideo = (direction) => {
    if (direction === 'next' && currentVideoIndex < videoFiles.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
      // Video akan otomatis dimainkan karena autoPlay
    } else if (direction === 'prev' && currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
      // Video akan otomatis dimainkan karena autoPlay
    }
  };

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
          Videography
        </h1>
      </div>

      {/* Video Viewer Section */}
      <div className="px-6 sm:px-8 md:px-20 pb-4">
        <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
          {/* Video Navigation */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => changeVideo('prev')}
                disabled={currentVideoIndex === 0}
                className={`p-2 rounded-lg ${currentVideoIndex === 0 ? 'bg-gray-200 text-gray-400' : 'bg-white text-gray-700 hover:bg-gray-100'} transition-colors`}
              >
                <ChevronLeft size={20} />
              </button>
              <h3 className="text-lg font-semibold text-gray-900">
                {videoFiles[currentVideoIndex].name}
              </h3>
              <button
                onClick={() => changeVideo('next')}
                disabled={currentVideoIndex === videoFiles.length - 1}
                className={`p-2 rounded-lg ${currentVideoIndex === videoFiles.length - 1 ? 'bg-gray-200 text-gray-400' : 'bg-white text-gray-700 hover:bg-gray-100'} transition-colors`}
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              {currentVideoIndex + 1} / {videoFiles.length}
            </div>
          </div>

          {/* Video Player */}
          <div className="bg-black rounded-lg overflow-hidden relative">
            <video
              key={currentVideoIndex} // Reset video when changing
              className="w-full aspect-video"
              autoPlay
              muted
              controls
              playsInline
              loop
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src={videoFiles[currentVideoIndex].path} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Video Thumbnails */}
          <div className="grid grid-cols-4 gap-2 mt-4">
            {videoFiles.map((video, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentVideoIndex(index);
                  // Video akan otomatis dimainkan karena autoPlay
                }}
                className={`relative aspect-video rounded overflow-hidden transition-all ${
                  index === currentVideoIndex
                    ? 'ring-2 ring-black ring-offset-2'
                    : 'hover:opacity-80'
                }`}
              >
                <video
                  src={video.path}
                  className="w-full h-full object-cover"
                  muted
                  onMouseEnter={(e) => {
                    e.currentTarget.play();
                    setTimeout(() => e.currentTarget.pause(), 2000); // Play 2 seconds then pause
                  }}
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Play size={20} className="text-white" />
                </div>
                <span className="absolute bottom-1 right-1 text-xs bg-black/70 text-white px-1 rounded">
                  {index + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-2 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Project Meta */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-gray-200">
            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600">
              <Calendar size={16} sm:size={18} />
              <span className="text-xs sm:text-sm">2024</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600">
              <User size={16} sm:size={18} />
              <span className="text-xs sm:text-sm">Video Producer</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600">
              <Tag size={16} sm:size={18} />
              <span className="text-xs sm:text-sm">Videography</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Overview</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
              Professional videography services capturing moments and telling stories through the lens.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Specializing in corporate videos, event coverage, documentary filmmaking, and creative visual storytelling that brings your vision to life.
            </p>
          </div>

          {/* Project Details */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Production</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Full-scale video production from concept development to final delivery, including scriptwriting, storyboarding, and post-production.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Post-Production</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Professional editing, color grading, sound design, and visual effects to enhance your footage and create compelling narratives.
                </p>
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Equipment & Software</h2>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Final Cut Pro', 'Sony A7S III', 'DJI Ronin'].map((tool) => (
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Achievements</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-gray-900 mb-2">10M+</div>
                <div className="text-sm text-gray-600">Total Views</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-gray-900 mb-2">15</div>
                <div className="text-sm text-gray-600">Awards Won</div>
              </div>
            </div>
            <p className="text-gray-600">
              Delivering high-quality video content that engages audiences and drives results for clients across various industries.
            </p>
          </div>

                  </div>
      </div>

      <Footer />
    </div>
  );
};

export default VideographyDetailPage;