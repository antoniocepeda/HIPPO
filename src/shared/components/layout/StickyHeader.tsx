import React from 'react';

interface StickyHeaderProps {
  children: React.ReactNode;
}

export function StickyHeader({ children }: StickyHeaderProps) {
  return (
    <div className="bg-white/95 dark:bg-primary-800/95 backdrop-blur-sm border-b border-primary-100 dark:border-primary-700/50 sticky top-0 z-10 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {children}
      </div>
    </div>
  );
}
