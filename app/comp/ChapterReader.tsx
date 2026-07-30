"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import ReaderControls from "./ReaderControls";

interface ChapterReaderProps {
  content: string;
  chapter: { title?: string; number: number };
}

export default function ChapterReader({
  content,
  chapter,
}: ChapterReaderProps) {
  const [fontSize, setFontSize] = useState(20);

  return (
    <div
      className="w-full min-h-screen  rounded-md p-6
                 bg-white dark:bg-black 
                 text-[#1a1a1a] dark:text-[#f5f5f5] 
                 shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:border-[0.046px] dark:border-gray-900"
    >
      <ReaderControls onFontChange={setFontSize} />

      <h1 className="mb-6 font-semibold text-2xl ml-2 mt-4">
        {chapter.title ?? `Chapter ${chapter.number}`}
      </h1>

      {/* Story content */}
      <div className="leading-[1.7] px-2 md:px-4" style={{ fontSize }}>
        <ReactMarkdown
          components={{
            p: ({ node, ...props }) => <p className="mb-8" {...props} />,
            li: ({ node, ...props }) => <li className="mb-1" {...props} />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
