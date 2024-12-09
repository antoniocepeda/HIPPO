import React from 'react';
import { MainLayout } from '../../../../../shared/components/layout/MainLayout';
import { AdminNav } from '../../../../../shared/components/layout/AdminNav';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <MainLayout>
      <AdminNav />
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        {children}
      </div>
    </MainLayout>
  );
}
