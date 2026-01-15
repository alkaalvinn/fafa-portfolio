import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import CreativeBanner from './components/sections/CreativeBanner';
import Experience from './components/sections/Experience';
import VisualWorld from './components/sections/VisualWorld';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';
import LoadingScreen from './components/common/LoadingScreen';
import './App.css';

// Code splitting untuk ProjectPage - mengurangi initial bundle size
const ProjectPage = lazy(() => import('./pages/ProjectPage'));

// Loading component untuk Suspense fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
      </div>
      <div className="text-center space-y-2">
        <p className="text-lg font-semibold text-gray-800">Loading Project...</p>
        <p className="text-sm text-gray-500">Please wait while we prepare your content</p>
      </div>
    </div>
  </div>
);

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <CreativeBanner />
        <Experience />
        {/* <VisualWorld /> */}
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>
      {!isLoading && (
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/project/:projectId"
              element={
                <Suspense fallback={<PageLoader />}>
                  <ProjectPage />
                </Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

// Component to handle scroll to top on route change
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when navigating to project pages
    if (location.pathname.startsWith('/project/')) {
      window.scrollTo(0, 0);
      return;
    }
    
    // Handle scroll to projects section when coming back from project page
    if (location.pathname === '/' && location.state?.scrollToProjects) {
      setTimeout(() => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          const isMobile = window.innerWidth < 768;
          const offset = isMobile ? 32 : 8;
          const elementPosition = projectsSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);

  return null;
}

export default App;
