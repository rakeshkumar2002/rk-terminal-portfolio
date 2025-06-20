
import React from 'react';
import { Terminal, Code, Download, Mail, Github, Linkedin } from 'lucide-react';

interface HeroProps {
  setCurrentSection: (section: string) => void;
}

const Hero = ({ setCurrentSection }: HeroProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        {/* Header Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
            <Terminal className="w-8 h-8 text-black" />
          </div>
          <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '0.5s' }}>
            <Code className="w-8 h-8 text-black" />
          </div>
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white">
            <span className="text-green-400">Rakesh</span>
            <br />
            <span className="text-white">Kumar Jani</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-300 font-mono">
            <span className="text-green-400">$</span> echo "Full Stack Developer"
          </div>
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-gray-300 leading-relaxed">
            Enthusiastic Software Engineer specializing in <span className="text-green-400">React.js</span>, 
            <span className="text-blue-400"> .NET</span>, and <span className="text-purple-400">C#</span>. 
            Currently building energy dashboards at Johnson Controls, passionate about creating 
            efficient solutions and solving complex problems.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">1+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">5+</div>
            <div className="text-gray-400 text-sm">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">100+</div>
            <div className="text-gray-400 text-sm">DSA Problems</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">7.75</div>
            <div className="text-gray-400 text-sm">CGPA</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center space-x-2 bg-green-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-green-300 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>Get In Touch</span>
          </button>
          
          <button
            onClick={() => scrollToSection('projects')}
            className="flex items-center space-x-2 border border-green-400 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-black transition-colors"
          >
            <Code className="w-5 h-5" />
            <span>View Projects</span>
          </button>

          <a
            href="#"
            className="flex items-center space-x-2 border border-gray-400 text-gray-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-400 hover:text-black transition-colors"
          >
            <Download className="w-5 h-5" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/rakeshkumar2002"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center hover:border-green-400 hover:bg-gray-700 transition-colors"
          >
            <Github className="w-6 h-6 text-gray-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/rakesh-kumar-jani-01b209191"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center hover:border-green-400 hover:bg-gray-700 transition-colors"
          >
            <Linkedin className="w-6 h-6 text-gray-300" />
          </a>
          <a
            href="mailto:janirakeshkumar2002@gmail.com"
            className="w-12 h-12 bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center hover:border-green-400 hover:bg-gray-700 transition-colors"
          >
            <Mail className="w-6 h-6 text-gray-300" />
          </a>
        </div>

        {/* Terminal Prompt */}
        <div className="bg-gray-800 border border-green-400/30 rounded-lg p-4 max-w-md mx-auto font-mono text-left">
          <div className="text-green-400 text-sm">
            <span className="text-gray-400">rakesh@portfolio:~$</span> <span className="animate-pulse">|</span>
          </div>
          <div className="text-gray-400 text-xs mt-1">
            // Ready to build amazing things together
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
