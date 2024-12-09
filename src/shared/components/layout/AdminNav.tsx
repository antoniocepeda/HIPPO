import React from 'react';
import { LayoutDashboard, Book, LogOut, InboxIcon } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export function AdminNav() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleLogout = () => {
    // Add any logout logic here (clear tokens, state, etc.)
    navigate('/');
  };
  
  return (
    <nav className="bg-white border-b border-primary-100">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <button 
              className={`flex items-center gap-2 ${
                location.pathname === '/admin/dashboard'
                  ? 'text-primary-800 font-medium'
                  : 'text-primary-600 hover:text-primary-800'
              }`}
              onClick={() => navigate('/admin/dashboard')}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </button>
            <button 
              className={`flex items-center gap-2 ${
                location.pathname === '/admin/review'
                  ? 'text-primary-800 font-medium'
                  : 'text-primary-600 hover:text-primary-800'
              }`}
              onClick={() => navigate('/admin/review')}
            >
              <InboxIcon className="w-5 h-5" />
              <span>Review Queue</span>
            </button>
            <button 
              className={`flex items-center gap-2 ${
                location.pathname === '/admin/knowledge-base'
                  ? 'text-primary-800 font-medium'
                  : 'text-primary-600 hover:text-primary-800'
              }`}
              onClick={() => navigate('/admin/knowledge-base')}
            >
              <Book className="w-5 h-5" />
              <span>Q&A Knowledge Base</span>
            </button>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-primary-600 hover:text-primary-800"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
}