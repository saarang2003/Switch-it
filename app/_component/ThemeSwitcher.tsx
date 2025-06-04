'use client';

import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const themes = ['light', 'dark'];

  const toggleTheme = () => {
    const nextIndex = (themes.indexOf(theme) + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <button
      onClick={toggleTheme}
      className="mb-4 px-4 py-2 rounded bg-primary text-primary-content hover:bg-primary/80 transition-all"
    >
      Toggle to {themes[(themes.indexOf(theme) + 1) % themes.length]} Theme
    </button>
  );
};

export default ThemeSwitcher;