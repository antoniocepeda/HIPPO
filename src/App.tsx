import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/layout/Hero';
import { QuestionForm } from './components/forms/QuestionForm';
import { TrustIndicators } from './components/common/TrustIndicators';
import { Footer } from './components/layout/Footer';
import { AdminLogin } from './components/dashboard/admin/auth/AdminLogin';
import { Dashboard } from './components/dashboard/shared/layout/Dashboard';
import { ReviewQueue } from './components/dashboard/admin/questions/ReviewQueue';
import { KnowledgeBase } from './components/dashboard/admin/knowledge/KnowledgeBase';

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