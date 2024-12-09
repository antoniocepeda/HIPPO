import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function AdminLogin() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual authentication
    if (credentials.email && credentials.password) {
      navigate('/admin/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-primary-50 dark:bg-primary-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-100">Admin Login</h2>
          <p className="mt-2 text-primary-600 dark:text-primary-400">Sign in to access the admin dashboard</p>
        </div>
        
        <div className="bg-white dark:bg-primary-800/30 border border-primary-200/50 dark:border-primary-700/20 rounded-lg shadow-sm backdrop-blur-sm">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={credentials.email}
                  onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white dark:bg-primary-900/30 border border-primary-200 dark:border-primary-700/50 text-primary-900 dark:text-primary-100 rounded-md focus:ring-2 focus:ring-primary-400 dark:focus:ring-primary-500 focus:border-transparent placeholder-primary-400 dark:placeholder-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white dark:bg-primary-900/30 border border-primary-200 dark:border-primary-700/50 text-primary-900 dark:text-primary-100 rounded-md focus:ring-2 focus:ring-primary-400 dark:focus:ring-primary-500 focus:border-transparent placeholder-primary-400 dark:placeholder-primary-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-500 dark:to-primary-400 text-white py-2.5 px-4 rounded-md hover:from-primary-700 hover:to-primary-600 dark:hover:from-primary-600 dark:hover:to-primary-500 transition-all font-medium"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}