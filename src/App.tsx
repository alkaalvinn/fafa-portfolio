import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import VisualWorld from './components/sections/VisualWorld';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';
import './App.css';

function App() {
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

export default App;
