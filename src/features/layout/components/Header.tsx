import React from 'react';
import { MainMenu } from './MainMenu';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary-50/80 backdrop-blur-sm dark:bg-primary-900/80">
      <div className="flex">
        <MainMenu />
      </div>
    </header>
  );
}