import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Setup in-memory theme preference (modern dark-mode-first by default)
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={darkMode ? 'dark bg-dark-bg' : 'light bg-light-bg'}>
      <div className="min-h-screen font-sans transition-colors duration-300 antialiased overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-300">
        {/* Animated Preloader */}
        <Preloader />

        {/* Floating Glassmorphic Header / Navbar */}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <main>
          {/* Hero Section */}
          <Hero />

          {/* About Me Section with animated Counters */}
          <About />

          {/* Skills / Platforms grid with dynamic disclosure details */}
          <Skills />

          {/* Services offered with bento layout and dynamic bullets */}
          <Services />

          {/* Filterable Portfolio and interactive modal case study details */}
          <Portfolio />

          {/* Process Timeline horizontal/vertical steps */}
          <Process />

          {/* Auto-rotating testimonials carousel */}
          <Testimonials />

          {/* Contact form validation with in-memory feedback */}
          <Contact />
        </main>

        {/* Brand Footer */}
        <Footer />
      </div>
    </div>
  );
}
