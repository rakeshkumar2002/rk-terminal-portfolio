
import React from 'react';

interface TerminalBodyProps {
  history: string[];
  input: string;
  setInput: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  terminalRef: React.RefObject<HTMLDivElement>;
  inputRef: React.RefObject<HTMLInputElement>;
}

const TerminalBody = ({ 
  history, 
  input, 
  setInput, 
  onSubmit, 
  terminalRef, 
  inputRef 
}: TerminalBodyProps) => {
  return (
    <div 
      ref={terminalRef}
      className="h-96 p-4 overflow-y-auto font-mono text-sm bg-black scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-gray-800"
    >
      {history.map((line, index) => (
        <div key={index} className="text-green-400 whitespace-pre-wrap animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
          {line}
        </div>
      ))}
      
      {/* Current Input Line */}
      <form onSubmit={onSubmit} className="flex items-center">
        <span className="text-green-400 mr-2">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent text-green-400 outline-none caret-green-400"
          placeholder="Type a command..."
          autoComplete="off"
        />
      </form>
    </div>
  );
};

export default TerminalBody;
