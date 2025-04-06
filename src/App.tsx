import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ProjectSection } from './components/ProjectSection';
import { HeroSection } from './components/HeroSection';
import { SkillSection } from './components/SkillSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { EducationSection } from './components/EducationSection';
import ResumeSection from './components/ResumeSection';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      {/* Hero Section */}
      <HeroSection />
      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectSection />
      
      {/* Skills Section */}
      <SkillSection />

      <ResumeSection />

      {/* Education Section */}
      <EducationSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}

export default App;