import React from 'react';

interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
  isListItem?: boolean;
}

// Light mode styles
const lightModeClasses = `
  bg-white
  border border-slate-200/30
  shadow-sm
  hover:border-slate-300/40 hover:shadow
`;

// Dark mode styles
const darkModeClasses = `
  dark:bg-primary-800/30
  dark:border-primary-700/50
  dark:hover:border-primary-600/50
`;

// Shared styles that don't change between modes
const sharedClasses = `
  rounded-lg
  transition-all duration-200
`;

export function BaseCard({ children, className = '', isListItem = false }: BaseCardProps) {
  return (
    <div
      className={`
        ${lightModeClasses}
        ${darkModeClasses}
        ${sharedClasses}
        ${isListItem ? 'p-4' : 'p-6'}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
