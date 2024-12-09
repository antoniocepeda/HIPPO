import React from 'react';
import { Header } from '../../../features/layout/components/Header';
import { Footer } from '../../../features/layout/components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function MainLayout({ children, className = '' }: MainLayoutProps) {
  return (
    <div className={`min-h-screen bg-gradient-to-b from-primary-50 to-white dark:from-primary-900 dark:to-primary-800 flex flex-col ${className}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
