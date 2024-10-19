'use client'

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  );
}