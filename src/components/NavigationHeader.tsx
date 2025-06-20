
import React from 'react';
import { Home, User, GraduationCap, Briefcase, Award, Code, FolderOpen, Mail, Terminal } from 'lucide-react';

interface NavigationHeaderProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
  onTerminalMode: () => void;
}

const NavigationHeader = ({ currentSection, onSectionChange, onTerminalMode }: NavigationHeaderProps) => {
  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-sm border-b border-green-400/30 animate-slide-in-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">R</span>
            </div>
            <span className="text-green-400 font-mono font-semibold">Rakesh Kumar Jani</span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-300 hover:text-green-400 transition-all duration-200 hover:bg-gray-800 rounded-lg group"
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={onTerminalMode}
            className="flex items-center space-x-2 bg-gray-800 border border-green-400 text-green-400 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Terminal className="w-4 h-4" />
            <span className="hidden sm:block">Terminal</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationHeader;
