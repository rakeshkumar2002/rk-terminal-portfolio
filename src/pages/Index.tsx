
import React, { useState, useEffect } from 'react';
import Terminal from '../components/Terminal';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import WelcomeScreen from '../components/WelcomeScreen';
import InitialLogo from '../components/InitialLogo';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('portfolio');
  const [terminalMode, setTerminalMode] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Check URL hash on load to determine initial state
    const hash = window.location.hash.substring(1);
    if (hash === 'portfolio') {
      setShowWelcome(false);
      setCurrentSection('portfolio');
      setTerminalMode(false);
    } else if (hash === 'terminal') {
      setShowWelcome(false);
      setTerminalMode(true);
    } else if (hash && ['about', 'education', 'experience', 'certifications', 'skills', 'projects', 'contact'].includes(hash)) {
      setShowWelcome(false);
      setCurrentSection(hash);
      setTerminalMode(false);
    }
  }, []);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    setTerminalMode(true);
    window.history.replaceState(null, '', '#terminal');
  };

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
    if (section === 'portfolio') {
      window.history.replaceState(null, '', '#portfolio');
    } else {
      window.history.replaceState(null, '', `#${section}`);
    }
  };

  const handleTerminalMode = (mode: boolean) => {
    setTerminalMode(mode);
    if (mode) {
      window.history.replaceState(null, '', '#terminal');
    }
  };

  const sections: Record<string, React.ReactElement> = {
    about: <About />,
    education: <Education />,
    experience: <Experience />,
    certifications: <Certifications />,
    skills: <Skills />,
    projects: <Projects />,
    contact: <Contact />,
    portfolio: <Portfolio setCurrentSection={handleSectionChange} setTerminalMode={handleTerminalMode} />
  };

  if (showWelcome) {
    return <WelcomeScreen onComplete={handleWelcomeComplete} />;
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background with Gradients */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(74,222,128,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]"></div>
      </div>
      
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-20" />
      
      <div className="relative z-10">
        {terminalMode && (
          <Terminal 
            currentSection={currentSection}
            setCurrentSection={handleSectionChange}
            setTerminalMode={handleTerminalMode}
          />
        )}
        
        {!terminalMode && (
          <div className="container mx-auto px-4 py-8 animate-fade-in">
            {currentSection !== 'portfolio' && <InitialLogo />}
            
            {currentSection !== 'portfolio' && (
              <nav className="fixed top-4 right-4 z-50 flex gap-2">
                <button
                  onClick={() => handleSectionChange('portfolio')}
                  className="backdrop-blur-xl bg-green-600/90 border border-green-400/50 text-black px-4 py-2 rounded-xl hover:bg-green-500/90 transition-all duration-300 hover:scale-105 font-semibold shadow-lg hover:shadow-green-400/30"
                >
                  View Complete Portfolio
                </button>
                <button
                  onClick={() => handleTerminalMode(true)}
                  className="backdrop-blur-xl bg-gray-800/90 border border-green-400/50 text-green-400 px-4 py-2 rounded-xl hover:bg-gray-700/90 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Terminal Mode
                </button>
              </nav>
            )}
            {sections[currentSection]}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
