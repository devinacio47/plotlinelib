"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "./navbar";
import ChapterNav from "./ChapterNav";
import ChapterReader from "./ChapterReader";
import Footer from "./footer";

interface ChapterPageClientProps {
  genreSlug: string;
  bookSlug: string;
  bookTitle: string;
  chapter: { number: number; title?: string; content: string };
  totalChapters: number;
}

export default function ChapterPageClient({
  genreSlug,
  bookSlug,
  bookTitle,
  chapter,
  totalChapters,
}: ChapterPageClientProps) {
  const [darkMode, setDarkMode] = useState(false);

  // Scroll to top whenever the chapter changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [chapter.number]);

  return (
    <main className=" bg-white dark:bg-black text-black dark:text-white min-h-screen">
      <Navbar />

      <div className="pt-[12vh] md:mx-auto md:max-w-3xl py-10">
        <Link
          href={`/genre/${genreSlug}/books/${bookSlug}`}
          className="bg-neutral-200  dark:text-black h-24 mx-4 md:mx-0 rounded-2xl flex justify-center items-center text-2xl border-[0.46px] border-gray-400 mt-1 active:bg-neutral-500"
        >
          {bookTitle}
        </Link>

        <ChapterNav
          genreSlug={genreSlug}
          bookSlug={bookSlug}
          chapterNum={chapter.number}
          totalChapters={totalChapters}
        />

        <ChapterReader
          content={chapter.content}
          chapter={{ number: chapter.number, title: chapter.title }}
        />
        <div className="flex justify-center items-center pt-4">
          <Link
            href="https://ko-fi.com/plotlinelibrary"
            className="flex items-center justify-center gap-2 w-auto min-w-37.5 px-3 py-1.5 bg-white rounded border-[0.46px] border-neutral-200 text-neutral-800 dark:text-white dark:bg-black dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900"
          >
            <img
              src="/kofi_symbol.png"
              alt="Ko-fi logo"
              className="w-5 h-5 object-contain shrink-0"
            />
            <span className=" font-medium">Support the site</span>
          </Link>
        </div>
        <ChapterNav
          genreSlug={genreSlug}
          bookSlug={bookSlug}
          chapterNum={chapter.number}
          totalChapters={totalChapters}
        />
      </div>
      <Footer />
    </main>
  );
}
