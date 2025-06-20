
import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Certifications from './Certifications';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import NavigationHeader from './NavigationHeader';
import InitialLogo from './InitialLogo';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface PortfolioProps {
  setCurrentSection: (section: string) => void;
  setTerminalMode: (mode: boolean) => void;
}

const AnimatedSection = ({ children, animationType = 'fade', delay = 0 }: { 
  children: React.ReactNode; 
  animationType?: 'fade' | 'slideLeft' | 'slideRight' | 'slideUp' | 'zoomIn';
  delay?: number;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.1, delay);
  
  const getAnimationClass = () => {
    const baseClass = 'transition-all duration-1000 ease-out';
    
    if (!isVisible) {
      switch (animationType) {
        case 'slideLeft':
          return `${baseClass} opacity-0 transform -translate-x-20 rotate-1`;
        case 'slideRight':
          return `${baseClass} opacity-0 transform translate-x-20 -rotate-1`;
        case 'slideUp':
          return `${baseClass} opacity-0 transform translate-y-20 scale-95`;
        case 'zoomIn':
          return `${baseClass} opacity-0 transform scale-90`;
        default:
          return `${baseClass} opacity-0 transform translate-y-10 scale-98`;
      }
    }
    
    return `${baseClass} opacity-100 transform translate-x-0 translate-y-0 rotate-0 scale-100`;
  };

  return (
    <div ref={ref} className={getAnimationClass()}>
      {children}
    </div>
  );
};

const Portfolio = ({ setCurrentSection, setTerminalMode }: PortfolioProps) => {
  const [showNavHeader, setShowNavHeader] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Set URL hash to indicate portfolio view
    if (window.location.hash !== '#portfolio') {
      window.history.replaceState(null, '', '#portfolio');
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Calculate scroll progress
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / documentHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
      
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        setShowNavHeader(rect.top <= 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full relative overflow-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-800/50 z-50">
        <div 
          className="h-full bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Enhanced Animated Background with Parallax */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(74,222,128,0.08),transparent_50%)]"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(139,92,246,0.06),transparent_50%)]"
          style={{ transform: `translateY(${scrollY * 0.7}px)` }}
        ></div>
      </div>
      
      {/* Enhanced Mask Effect */}
      <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 via-gray-900/80 to-transparent z-30 pointer-events-none" />
      
      {/* Initial Logo - only when nav header is not shown */}
      {!showNavHeader && <InitialLogo />}
      
      {/* Navigation Header - enhanced with scroll animation */}
      {showNavHeader && (
        <div className="animate-slide-down">
          <NavigationHeader 
            currentSection="portfolio"
            onSectionChange={setCurrentSection}
            onTerminalMode={() => setTerminalMode(true)}
          />
        </div>
      )}

      {/* Complete Portfolio Sections with Enhanced Animations */}
      <div className="space-y-0 relative z-10">
        <section id="hero" className="relative">
          <AnimatedSection animationType="fade">
            <Hero setCurrentSection={setCurrentSection} />
          </AnimatedSection>
        </section>
        
        <section id="about" className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent"></div>
          <AnimatedSection animationType="slideLeft" delay={200}>
            <About />
          </AnimatedSection>
        </section>
        
        <section id="education" className="relative">
          <AnimatedSection animationType="slideRight" delay={100}>
            <Education />
          </AnimatedSection>
        </section>
        
        <section id="experience" className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800/10 to-transparent"></div>
          <AnimatedSection animationType="slideUp" delay={150}>
            <Experience />
          </AnimatedSection>
        </section>
        
        <section id="certifications" className="relative">
          <AnimatedSection animationType="zoomIn" delay={100}>
            <Certifications />
          </AnimatedSection>
        </section>
        
        <section id="skills" className="relative">
          <AnimatedSection animationType="slideLeft" delay={200}>
            <Skills />
          </AnimatedSection>
        </section>
        
        <section id="projects" className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/15 to-transparent"></div>
          <AnimatedSection animationType="slideRight" delay={250}>
            <Projects />
          </AnimatedSection>
        </section>
        
        <section id="contact" className="relative">
          <AnimatedSection animationType="fade" delay={100}>
            <Contact />
          </AnimatedSection>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
