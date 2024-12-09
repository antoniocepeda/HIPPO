import React from 'react';
import { Header } from '../../../features/layout/components/Header';
import { Footer } from '../../../features/layout/components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function MainLayout({ children, className = '' }: MainLayoutProps) {
  return (
    <div className={`h-screen bg-primary-50 dark:bg-primary-900 flex flex-col ${className}`}>
      <Header />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
}
