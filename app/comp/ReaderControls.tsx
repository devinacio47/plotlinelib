"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { ThemeToggle } from "./ThemeToggle";

export default function ReaderControls({
  onFontChange,
}: {
  onFontChange: (size: number) => void;
}) {
  const [fontSize, setFontSize] = useState(20);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch when rendering client-side theme states
  useEffect(() => {
    setMounted(true);
  }, []);

  // Notify parent of font size change
  useEffect(() => {
    onFontChange(fontSize);
  }, [fontSize, onFontChange]);

  const increaseFont = () => setFontSize((prev) => Math.min(prev + 2, 36));
  const decreaseFont = () => setFontSize((prev) => Math.max(prev - 2, 12));

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex justify-between items-center mb-6 md:p-4 p-2 border-b border-neutral-200 dark:border-neutral-800">
      {/* Font Controls */}
      <div>
        <button
          onClick={decreaseFont}
          className="ml-2 px-3 py-1 border border-neutral-300 dark:border-neutral-700 rounded hover:bg-neutral-100 dark:hover:bg-neutral-900 t"
        >
          A-
        </button>
        <span className="mx-3 text-sm font-medium">{fontSize}px</span>
        <button
          onClick={increaseFont}
          className="mr-2 px-3 py-1 border border-neutral-300 dark:border-neutral-700 rounded hover:bg-neutral-100 dark:hover:bg-neutral-900"
        >
          A+
        </button>
      </div>

      {/* Theme Toggles */}

      <ThemeToggle />
    </div>
  );
}
