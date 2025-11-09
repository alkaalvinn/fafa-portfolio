import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import VisualWorld from './components/sections/VisualWorld';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
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
    // Only scroll to top when navigating to project pages
    // Don't scroll when going back to home with hash
    if (location.pathname.startsWith('/project/')) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
}

export default App;
