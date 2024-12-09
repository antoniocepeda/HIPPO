import React from 'react';
import { MainLayout } from '../../../../../shared/components/layout/MainLayout';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        {children}
      </div>
    </MainLayout>
  );
}
