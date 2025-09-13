import React, { useState, useEffect } from 'react';
import IntroSection from './components/IntroSection';
import HeroSection from './components/HeroSection';
import WhatIDoSection from './components/WhatIDoSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import CertificatesSection from './components/CertificatesSection';
import ContactSection from './components/ContactSection';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4000); // Show intro for 4 seconds

    return () => clearTimeout(timer);
  }, []);

  if (showIntro) {
    return <IntroSection />;
  }

  return (
    <div className={`min-h-screen transition-all duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Navigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      <main>
        <HeroSection />
        <WhatIDoSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ExperienceSection />
        <CertificatesSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;