import { prisma } from "@/app/lib/prisma";
import ChapterPageClient from "@/app/comp/ChapterPageClient";

interface ChapterPageProps {
  params: { genreSlug: string; bookSlug: string; chapterNumber: string };
}

// Generate SEO metadata for the chapter
export async function generateMetadata({ params }: ChapterPageProps) {
  const { bookSlug, chapterNumber } = await params;

  const chapterNum = parseInt(chapterNumber, 10);
  if (isNaN(chapterNum)) {
    return {
      title: "Invalid chapter - Plotliner",
      description: "The requested chapter number is invalid.",
    };
  }

  const book = await prisma.book.findUnique({
    where: { slug: bookSlug },
    include: {
      genre: true,
    },
  });

  if (!book) {
    return {
      title: "Book not found - Plotliner",
      description: "The requested book could not be found.",
    };
  }

  const chapter = await prisma.chapter.findFirst({
    where: { number: chapterNum, bookId: book.id },
  });

  if (!chapter) {
    return {
      title: "Chapter not found - Plotliner",
      description: `Chapter ${chapterNum} of ${book.title} could not be found.`,
    };
  }

  return {
    title: `${book.title} - Chapter ${chapter.number}`,
    description: chapter.title
      ? `${chapter.title} | Read chapter ${chapter.number} of ${book.title}, a public domain novel in the ${book.genre.name} genre.`
      : `Read chapter ${chapter.number} of ${book.title}, a public domain novel in the ${book.genre.name} genre.`,
    openGraph: {
      title: `${book.title} - Chapter ${chapter.number}`,
      description: chapter.title
        ? chapter.title
        : `Chapter ${chapter.number} of ${book.title}`,
      type: "article",
    },
  };
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { genreSlug, bookSlug, chapterNumber } = await params;

  const chapterNum = parseInt(chapterNumber, 10);
  if (isNaN(chapterNum)) return <p>Invalid chapter number</p>;

  const book = await prisma.book.findUnique({ where: { slug: bookSlug } });
  if (!book) return <p>Book not found</p>;

  const chapter = await prisma.chapter.findFirst({
    where: { number: chapterNum, bookId: book.id },
  });
  if (!chapter) return <p>Chapter not found</p>;

  const content = await fetch(chapter.contentUrl).then((res) => res.text());

  const totalChapters = await prisma.chapter.count({
    where: { bookId: book.id },
  });

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/favi.svg" />

      <ChapterPageClient
        genreSlug={genreSlug}
        bookSlug={bookSlug}
        bookTitle={book.title}
        chapter={{
          number: chapter.number,
          title: chapter.title ?? undefined,
          content,
        }}
        totalChapters={totalChapters}
      />
    </>
  );
}
