import React from 'react';

interface AdSpaceProps {
  className?: string;
}

export default function AdSpace({ className = '' }: AdSpaceProps) {
  return (
    <div className={`bg-gray-100 border border-gray-200 rounded-lg p-4 ${className}`}>
      <div className="flex items-center justify-center h-full min-h-[120px]">
        <span className="text-gray-500 text-sm">Advertisement Space</span>
      </div>
    </div>
  );
}