// src/hooks/useTheme.js

import { useState, useEffect } from 'react';

const useTheme = () => {
  // State to keep track of theme
  const [darkMode, setDarkMode] = useState(false);

  // Effect to check localStorage for theme preference on page load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Function to toggle the theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return [darkMode, toggleTheme];
};

export default useTheme;
