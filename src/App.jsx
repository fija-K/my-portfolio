import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { HeaderNav } from './components/HeaderNav';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';
import { Achievements } from './pages/Achievements';
import { Contact } from './pages/Contact';

function MainLayout() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="app-container">
      {/* CRT Scanline Effect (Active in Dark Cyber Mode) */}
      <div className="crt-overlay" />

      {/* Main Header Bar */}
      <HeaderNav 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Page Area */}
      <main className="main-content">
        {activeTab === 'home' && (
          <Home 
            setActiveTab={setActiveTab}
            onSelectProject={setSelectedProject}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        )}

        {activeTab === 'about' && (
          <About 
            onOpenResume={() => setIsResumeOpen(true)}
          />
        )}

        {activeTab === 'projects' && (
          <Projects 
            onSelectProject={setSelectedProject}
          />
        )}

        {activeTab === 'skills' && (
          <Skills />
        )}

        {activeTab === 'achievements' && (
          <Achievements />
        )}

        {activeTab === 'contact' && (
          <Contact 
            onOpenResume={() => setIsResumeOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer 
        onOpenResume={() => setIsResumeOpen(true)}
        setActiveTab={setActiveTab}
      />

      {/* Global Modals */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}
