
import { useState, useEffect } from 'react';

export const useTypingAnimation = (text: string, speed: number = 50, startDelay: number = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const startTyping = () => {
      let i = 0;
      const typeNextChar = () => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
          timeoutId = setTimeout(typeNextChar, speed);
        } else {
          setIsComplete(true);
        }
      };
      typeNextChar();
    };

    timeoutId = setTimeout(startTyping, startDelay);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [text, speed, startDelay]);

  return { displayText, isComplete };
};
