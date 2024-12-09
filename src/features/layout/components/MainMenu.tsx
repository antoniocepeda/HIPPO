import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ThemeToggle } from '../../../features/theme/components/ThemeToggle';
import { useLocation, Link } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Dashboard', href: '/admin/dashboard' },
  { name: 'Review Queue', href: '/admin/review' },
  { name: 'Knowledge Base', href: '/admin/knowledge-base' },
  { name: 'Admin Login', href: '/admin/login' },
];

export function MainMenu() {
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <Menu as="div" className="relative">
      {({ open }) => (
        <>
          <Menu.Button
            className="inline-flex items-center justify-center p-2 rounded-md text-primary-600 hover:text-primary-800 hover:bg-primary-100 dark:text-primary-400 dark:hover:text-primary-200 dark:hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors"
          >
            {open ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </Menu.Button>

          <Menu.Items className="absolute left-4 mt-2 w-56 origin-top-left bg-white dark:bg-primary-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <div className="px-4 py-2 border-b border-primary-100 dark:border-primary-700">
                <ThemeToggle />
              </div>
              {navigation.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <Link
                      to={item.href}
                      className={`
                        block px-4 py-2 text-sm
                        ${isActive(item.href)
                          ? 'bg-primary-100 text-primary-900 dark:bg-primary-700 dark:text-white'
                          : active
                          ? 'bg-primary-50 text-primary-900 dark:bg-primary-700 dark:text-white'
                          : 'text-primary-700 dark:text-primary-200'
                        }
                      `}
                    >
                      {item.name}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}
