import React, { useEffect, useState } from 'react';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    // Check if user prefers dark mode or stored theme
    if (typeof window !== 'undefined') {
      if (localStorage.theme === 'dark') return true;
      if (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        return true;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      aria-label="Toggle Dark Mode"
      className="p-2 rounded bg-gray-200 dark:bg-gray-800"
    >
      {isDark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}

export default ThemeToggle;
