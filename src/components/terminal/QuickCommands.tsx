
import React from 'react';

interface QuickCommandsProps {
  commands: Record<string, any>;
  onCommandClick: (command: string) => void;
}

const QuickCommands = ({ commands, onCommandClick }: QuickCommandsProps) => {
  return (
    <div className="bg-gray-800 px-4 py-2 rounded-b-lg border-t border-green-400">
      <div className="flex flex-wrap gap-2 text-xs">
        {Object.keys(commands).slice(0, 7).map((cmd) => (
          <button
            key={cmd}
            onClick={() => onCommandClick(cmd)}
            className="bg-gray-700 text-green-400 px-2 py-1 rounded hover:bg-gray-600 transition-all duration-200 hover:scale-105"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickCommands;
