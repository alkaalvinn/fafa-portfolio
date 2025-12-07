import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import VisualWorld from './components/sections/VisualWorld';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import WorkWithMe from './components/sections/WorkWithMe';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';
import ProjectPage from './pages/ProjectPage';
import { useEffect } from 'react';
import './App.css';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <VisualWorld />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:projectId" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
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
          const offset = 80;
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
