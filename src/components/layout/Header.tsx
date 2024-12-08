import React from 'react';
import { Microscope, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="border-b border-primary-100">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 text-primary-700">
            <Microscope className="w-6 h-6" />
            <span className="text-lg font-semibold">DHH Lab</span>
          </div>
          <button
            onClick={() => navigate('/admin/login')}
            className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800 transition-colors"
          >
            <LogIn className="w-4 h-4" />
            <span>Admin</span>
          </button>
        </div>
      </div>
    </header>
  );
}