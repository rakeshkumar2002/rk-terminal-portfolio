
import React from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface TerminalHeaderProps {
  onViewPortfolio: () => void;
}

const TerminalHeader = ({ onViewPortfolio }: TerminalHeaderProps) => {
  return (
    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-t-lg border-b border-green-400">
      <div className="flex items-center space-x-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <TerminalIcon className="w-4 h-4 text-green-400" />
        <span className="text-green-400 text-sm font-mono">rakesh@portfolio:~</span>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={onViewPortfolio}
          className="bg-green-600 border border-green-400 text-black px-3 py-1 rounded text-xs hover:bg-green-500 transition-colors font-semibold"
        >
          View Portfolio
        </button>
        <div className="text-xs text-gray-400 font-mono">Terminal v1.0</div>
      </div>
    </div>
  );
};

export default TerminalHeader;
