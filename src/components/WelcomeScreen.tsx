
import React, { useState, useEffect } from 'react';
import { Terminal, Code } from 'lucide-react';

interface WelcomeScreenProps {
  onComplete: () => void;
}

const WelcomeScreen = ({ onComplete }: WelcomeScreenProps) => {
  const [showText, setShowText] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowText(true), 500);
    const timer2 = setTimeout(() => setShowSubtext(true), 1500);
    const timer3 = setTimeout(() => {
      setLoading(true);
      // Simulate loading progress
      const progressInterval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setTimeout(() => onComplete(), 500);
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none" />
      
      <div className="text-center space-y-8 welcome-animation">
        {showText && (
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-4">
              <Terminal className="w-16 h-16 text-green-400 animate-pulse" />
              <Code className="w-16 h-16 text-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-green-400 welcome-text-glow">
              Welcome
            </h1>
            
            <p className="text-2xl text-gray-300 font-mono">
              to Rakesh's Portfolio
            </p>
          </div>
        )}
        
        {showSubtext && !loading && (
          <div className="space-y-6 animate-fade-in">
            <p className="text-xl text-gray-300 font-mono">
              Initializing portfolio terminal...
            </p>
            <div className="flex justify-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}

        {loading && (
          <div className="space-y-6 animate-fade-in">
            <p className="text-xl text-gray-300 font-mono">
              Loading terminal environment...
            </p>
            <div className="w-80 mx-auto">
              <div className="bg-gray-800 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-green-400 to-blue-400 h-full transition-all duration-200 ease-out"
                  style={{ width: `${loadingProgress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-400 mt-2 font-mono">{loadingProgress}% complete</p>
            </div>
            <div className="text-green-400 font-mono text-sm">
              $ rakesh@portfolio:~ initializing...
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WelcomeScreen;
