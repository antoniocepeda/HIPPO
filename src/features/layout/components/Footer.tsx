import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-primary-100 dark:border-primary-700 mt-auto bg-white dark:bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-primary-600 dark:text-primary-400">
            2024 HIPPO Lab. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-6 text-sm">
              <Link to="/research" className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200 transition-colors">
                Research
              </Link>
              <Link to="/team" className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200 transition-colors">
                Team
              </Link>
              <Link to="/publications" className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200 transition-colors">
                Publications
              </Link>
              <Link to="/privacy" className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}