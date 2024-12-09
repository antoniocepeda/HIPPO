import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './features/layout/components/Hero';
import { QuestionForm } from './features/forms/components/QuestionForm';
import { TrustIndicators } from './shared/components/TrustIndicators';
import { AdminLogin } from './features/dashboard/components/admin/auth/AdminLogin';
import { Dashboard } from './shared/components/layout/Dashboard';
import { ReviewQueue } from './features/dashboard/components/admin/questions/ReviewQueue';
import { KnowledgeBase } from './features/dashboard/components/admin/knowledge/KnowledgeBase';
import { ThemeProvider } from './features/theme/context/ThemeContext';
import { MainLayout } from './shared/components/layout/MainLayout';
import { AdminLayout } from './features/dashboard/components/admin/layout/AdminLayout';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/admin/login" element={
            <MainLayout>
              <AdminLogin />
            </MainLayout>
          } />
          <Route path="/admin/dashboard" element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          } />
          <Route path="/admin/review" element={
            <AdminLayout>
              <ReviewQueue />
            </AdminLayout>
          } />
          <Route path="/admin/knowledge-base" element={
            <AdminLayout>
              <KnowledgeBase />
            </AdminLayout>
          } />
          <Route path="/" element={
            <MainLayout>
              <main className="flex-1 container mx-auto px-4 py-12 space-y-12">
                <Hero />
                <QuestionForm />
                <TrustIndicators />
              </main>
            </MainLayout>
          } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}