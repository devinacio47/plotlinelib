import Link from "next/link";

interface ChapterNavProps {
  genreSlug: string;
  bookSlug: string;
  chapterNum: number;
  totalChapters: number;
}

export default function ChapterNav({
  genreSlug,
  bookSlug,
  chapterNum,
  totalChapters,
}: ChapterNavProps) {
  return (
    <div className="flex justify-between mt-5 mb-5">
      {chapterNum > 1 ? (
        <Link
          href={`/genre/${genreSlug}/books/${bookSlug}/chapters/${
            chapterNum - 1
          }`}
          className="px-4 py-2 ml-1.5 bg-neutral-300 dark:text-black  rounded active:bg-neutral-500"
        >
          Previous
        </Link>
      ) : (
        <div />
      )}

      {chapterNum < totalChapters ? (
        <Link
          href={`/genre/${genreSlug}/books/${bookSlug}/chapters/${
            chapterNum + 1
          }`}
          className="px-4 py-2 mr-1.5 bg-neutral-300 dark:text-black rounded active:bg-neutral-500"
        >
          Next
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
