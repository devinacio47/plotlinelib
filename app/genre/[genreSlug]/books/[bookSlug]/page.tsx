import { prisma } from "@/app/lib/prisma";
import Link from "next/link";
import Navbar from "@/app/comp/navbar";
import Footer from "@/app/comp/footer";

interface BookPageProps {
  params: {
    genreSlug: string;
    bookSlug: string;
  };
}

interface Chapter {
  number: number;
  id: number;
  title: string | null;
  uploadedAt: Date;
  contentUrl: string;
  bookId: number;
}

export async function generateMetadata({ params }: BookPageProps) {
  const { bookSlug } = await params;

  const book = await prisma.book.findUnique({
    where: { slug: bookSlug },
    include: {
      genre: true,
    },
  });

  if (!book) {
    return {
      title: "Book not found - Plotliner",
      description: "The requested book could not be found on Plotliner.",
    };
  }

  return {
    title: `${book.title} by ${book.author} | Plotliner`,
    description: book.description
      ? book.description.slice(0, 160)
      : `Read ${book.title} by ${book.author}, a public domain novel in the ${book.genre.name} genre.`,
    openGraph: {
      title: `${book.title} by ${book.author}`,
      description: book.description,
      images: [
        {
          url: book.coverUrl,
        },
      ],
      type: "book",
    },
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const { genreSlug, bookSlug } = await params;

  const book = await prisma.book.findUnique({
    where: { slug: bookSlug },
    include: {
      genre: true,
      chapters: {
        orderBy: {
          number: "asc",
        },
      },
    },
  });

  if (!book) {
    return <div>Book not found.</div>;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[12vh] bg-black flex flex-col items-center justify-center gap-1">
        <link rel="icon" type="image/svg+xml" href="/favi.svg" />

        <div className="w-[95vw] h-[24vh] md:h-[44vh] rounded-2xl flex flex-row items-center bg-radial-dark">
          <div className="w-[30%] md:w-auto h-[85%] bg-black m-2 rounded-2xl border-[0.5px] border-neutral-700">
            <img
              src={book.coverUrl}
              alt={`${book.title} cover`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="flex flex-col w-[60%] h-[85%] m-2 justify-center">
            <h1 className="text-white font-bold mt-2 text-2xl md:mt-4 md:text-4xl">
              {book.title}
            </h1>
            <h2 className="text-white mt-2 md:mt-4 md:text-2xl">
              by {book.author}
            </h2>
            <Link href={`/genre/${book.genre.name}`}>
              <h3 className="text-white font-semibold mt-2 md:mt-4 md:text-[20px]">
                {book.genre.name}
              </h3>
            </Link>
          </div>
        </div>

        <div className="w-[95vw] h-[10vh] bg-white rounded-3xl flex flex-row justify-center gap-8 sm:justify-between">
          <div className="flex flex-col m-2 sm:ml-28">
            <h1 className="text-neutral-500 text-[20px]">Published</h1>
            <h2 className="text-center font-bold">{book.published}</h2>
          </div>
          <div className="flex flex-col m-2 ">
            <h1 className="text-neutral-500 text-[20px]">Status</h1>
            <h2 className="text-center font-bold">{book.status}</h2>
          </div>
          <div className="flex flex-col items-center m-2 sm:mr-28">
            <h1 className="text-neutral-500 text-[20px]">Country</h1>
            <h2 className="text-center font-bold">{book.country}</h2>
          </div>
        </div>

        <div className="w-[95vw] min-h-[25vh] bg-white rounded-2xl flex flex-col">
          <h1 className="m-1 font-semibold text-neutral-500">Synopsis</h1>
          <p className="md:text-[20px] text-[14px] m-2">{book.description}</p>
        </div>

        <div className="w-[95vw] min-h-[60vh] bg-white rounded-2xl">
          <h3 className="m-1 font-semibold text-neutral-500 text-[24px]">
            Chapters
          </h3>

          <div className="m-2 flex flex-col gap-2">
            {book.chapters.map((chapter: Chapter) => (
              <Link
                key={chapter.id}
                href={`/genre/${genreSlug}/books/${bookSlug}/chapters/${chapter.number}`}
                className="h-12.5 bg-neutral-200 flex flex-col items-center rounded-2xl justify-center font-bold border-[0.5px] border-black active:bg-white"
              >
                Chapter {chapter.number}
                <span className="text-neutral-400">
                  {new Date(chapter.uploadedAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <div className="h-1.5"></div>
      <Footer />
    </>
  );
}
