import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './features/layout/components/Hero';
import { QuestionForm } from './features/forms/components/QuestionForm';
import { TrustIndicators } from './shared/components/TrustIndicators';
import { Footer } from './features/layout/components/Footer';
import { AdminLogin } from './features/dashboard/components/admin/auth/AdminLogin';
import { Dashboard } from './shared/components/layout/Dashboard';
import { ReviewQueue } from './features/dashboard/components/admin/questions/ReviewQueue';
import { KnowledgeBase } from './features/dashboard/components/admin/knowledge/KnowledgeBase';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/review" element={<ReviewQueue />} />
        <Route path="/admin/knowledge-base" element={<KnowledgeBase />} />
        <Route path="/" element={
          <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white flex flex-col">
            <main className="flex-1 container mx-auto px-4 py-12 space-y-12">
              <Hero />
              <QuestionForm />
              <TrustIndicators />
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}