import Link from "next/link";
import { prisma } from "./lib/prisma";
import Navbar from "./comp/navbar";
import Footer from "./comp/footer";

interface Genre {
  id: number;
  name: string;
}

interface LatestChapterBook {
  id: number;
  title: string;
  coverUrl: string;
  slug: string;
  author: string;
  genreName: string;
}

export const metadata = {
  title: "Plotline Lib - Classic Literature Library",
  description:
    "The place for stories that predate the internet. Browse classic literature by genre and start reading instantly.",
};

export const dynamic = "force-dynamic";

export default async function HomePage() {
  // Lazy import Prisma at runtime

  const latestChapters = await prisma.$queryRaw<LatestChapterBook[]>`
  SELECT 
    "Book".id,
    "Book".title,
    "Book"."coverUrl",
    "Book".slug,
    "Book".author,
    "Genre".name AS "genreName"
  FROM "Book"
  JOIN "Chapter" ON "Book".id = "Chapter"."bookId"
  JOIN "Genre" ON "Book"."genreId" = "Genre".id
  GROUP BY "Book".id, "Book".title, "Book"."coverUrl", "Genre".name
  ORDER BY MAX("Chapter"."uploadedAt") DESC
  LIMIT 8;
`;

  const newAddedBooks = await prisma.book.findMany({
    orderBy: { uploadedAt: "desc" },
    take: 6,
    include: { genre: true },
  });

  const oldestByAge = await prisma.book.findMany({
    orderBy: { published: "asc" },
    take: 3,
    include: { genre: true },
  });

  return (
    <>
      <Navbar />
      <main className="bg-black min-h-screen md:pt-[14vh] pt-[10vh]">
        <link rel="icon" type="image/svg+xml" href="/favi.svg" />
        <div className=" min-h-full md:w-[80%] md:m-auto flex flex-col gap-2 bg-black mx-2">
          <div className="w-full h-auto flex flex-col p-4 gap-4 bg-white rounded-2xl">
            {/*Recent Updates */}
            <header className="md:text-4xl text-[20px] font-semibold">
              Recent Updates
            </header>
            <div className="h-full w-full">
              <div className="grid grid-cols-4 gap-2 grid-rows-2 sm:grid-cols-8 sm:grid-rows-1 text-black w-full h-full rounded-2xl">
                {latestChapters.map((book) => {
                  return (
                    <Link
                      key={book.id}
                      className=" w-full h-full"
                      href={`/genre/${book.genreName}/books/${book.slug}`}
                    >
                      <div className="h-auto bg-gray-200 rounded-lg overflow-hidden">
                        <img
                          src={book.coverUrl}
                          className="object-cover "
                        ></img>
                      </div>
                      <h2 className="line-clamp-2">{book.title}</h2>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          {/*new adds */}
          <div className="w-full h-auto flex flex-col p-4 gap-4 bg-white rounded-2xl">
            <header className="md:text-4xl text-[20px] font-semibold">
              New added books
            </header>
            <div className="h-full w-full">
              <div className="grid grid-cols-3 gap-2 grid-rows-2 sm:grid-cols-6 sm:grid-rows-1 text-black w-full h-full rounded-2xl">
                {newAddedBooks.map((book) => {
                  return (
                    <Link
                      key={book.id}
                      className=" w-full h-full"
                      href={`/genre/${book.genre.name}/books/${book.slug}`}
                    >
                      <div className="h-auto bg-gray-200 rounded-lg overflow-hidden">
                        <img
                          src={book.coverUrl}
                          className="object-cover "
                        ></img>
                      </div>
                      <h2 className="line-clamp-2">{book.title}</h2>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full h-auto flex flex-col p-4 gap-4 bg-white rounded-2xl">
            <header className="md:text-4xl text-[20px] font-semibold">
              Oldest{" "}
              <span className="md:text-2xl text-[16px] text-gray-500">
                (age)
              </span>
            </header>
            <div className="h-full w-full">
              <div className="grid grid-cols-3 gap-2 grid-rows-1 sm:grid-cols-3 sm:grid-rows-1 text-black w-full h-full rounded-2xl">
                {oldestByAge.map((book) => {
                  return (
                    <Link
                      key={book.id}
                      className=" w-full h-full"
                      href={`/genre/${book.genre.name}/books/${book.slug}`}
                    >
                      <div className="h-auto bg-gray-200 rounded-lg overflow-hidden">
                        <img
                          src={book.coverUrl}
                          className="object-cover "
                        ></img>
                      </div>
                      <h2 className="line-clamp-2">{book.published}</h2>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="bg-black h-1.5"></div>
      <Footer />
    </>
  );
}
