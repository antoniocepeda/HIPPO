import React from 'react';
import { LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-primary-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-primary-600">
            © 2024 DHH Lab. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-600 hover:text-primary-800 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-600 hover:text-primary-800 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-600 hover:text-primary-800 transition-colors">
                Contact
              </a>
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
      </div>
    </footer>
  );
}