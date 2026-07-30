// components/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Wait until mounted on client to render UI safely
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a invisible placeholder to prevent layout shifts
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? "☀️Light Mode" : "🌙Dark Mode"}
    </button>
  );
}
