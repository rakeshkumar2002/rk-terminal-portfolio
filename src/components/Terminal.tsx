import React, { useState, useEffect, useRef } from 'react';
import TerminalHeader from './terminal/TerminalHeader';
import TerminalBody from './terminal/TerminalBody';
import QuickCommands from './terminal/QuickCommands';
import InitialLogo from './InitialLogo';
import { createTerminalCommands } from './terminal/TerminalCommands';

interface TerminalProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
  setTerminalMode: (mode: boolean) => void;
}

const TerminalQuote = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const rotatingTexts = [
    "With Precision. 🎯",
    "You can trust. 🤝",
    "that scales. 🚀"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        setIsAnimating(false);
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mb-8 animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-2 welcome-text-glow">
        Building Softwares
      </h1>
      <div className="text-xl md:text-2xl text-green-300 h-8 flex items-center justify-center relative overflow-hidden">
        <span className={`transition-all duration-500 ${isAnimating ? 'animate-text-slide-out' : 'animate-text-slide-in'}`}>
          {rotatingTexts[currentTextIndex]}
        </span>
      </div>
    </div>
  );
};

const Terminal = ({ currentSection, setCurrentSection, setTerminalMode }: TerminalProps) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    '╭─ Welcome to Rakesh\'s Portfolio Terminal',
    '├─ Type "help" to see available commands',
    '╰─ Use "ls" to list all sections',
    ''
  ]);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const handleNavigation = (section: string) => {
    setIsNavigating(true);
    setTimeout(() => {
      setCurrentSection(section);
      setTerminalMode(false);
    }, 1000);
  };

  const commands = createTerminalCommands(handleNavigation, setHistory);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    setHistory(prev => [...prev, `$ ${cmd}`]);
    
    if (commands[trimmedCmd]) {
      const output = commands[trimmedCmd].action();
      setHistory(prev => [...prev, ...output]);
    } else if (trimmedCmd === '') {
      setHistory(prev => [...prev, '']);
    } else {
      setHistory(prev => [...prev, `Command not found: ${cmd}`, 'Type "help" for available commands', '']);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setIsEntering(true);
  }, []);

  return (
    <div className={`min-h-screen p-4 flex flex-col items-center justify-center transition-all duration-1000 ${
      isNavigating 
        ? 'opacity-0 scale-95' 
        : isEntering 
          ? 'opacity-100 scale-100 animate-terminal-enter' 
          : 'opacity-100 scale-100'
    }`}>
      {/* Initial Logo */}
      <InitialLogo />
      
      {/* Quote Section */}
      <TerminalQuote />
      
      {/* Terminal */}
      <div className="w-full max-w-4xl bg-gray-900 border border-green-400 rounded-lg shadow-2xl shadow-green-400/20 animate-fade-in">
        <TerminalHeader onViewPortfolio={() => handleNavigation('portfolio')} />
        
        <TerminalBody
          history={history}
          input={input}
          setInput={setInput}
          onSubmit={handleSubmit}
          terminalRef={terminalRef}
          inputRef={inputRef}
        />

        <QuickCommands 
          commands={commands}
          onCommandClick={handleCommand}
        />
      </div>
    </div>
  );
};

export default Terminal;
