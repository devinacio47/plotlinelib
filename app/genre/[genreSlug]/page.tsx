import { prisma } from "@/app/lib/prisma";
import Link from "next/link";
import Navbar from "@/app/comp/navbar";
import Footer from "@/app/comp/footer";

interface GenrePageProps {
  params: { genreSlug: string };
}

interface Book {
  id: number;
  title: string;
  slug: string;
  author: string;
  description: string;
  coverUrl: string;
  genreId: number;
  published: number | null;
  uploadedAt: Date;
  country: string | null;
  status: string | null;
}

export async function generateMetadata({ params }: GenrePageProps) {
  const { genreSlug } = await params;
  const genre = await prisma.genre.findUnique({
    where: { name: genreSlug },
  });

  return {
    title: genre
      ? `${genre.name}  novels from the public domain`
      : "Genre - Plotliner",
    description: genre
      ? `Browse classic literature in the ${genre.name} genre.`
      : "Browse genres in Plotliner.",
  };
}

export default async function GenrePage({ params }: GenrePageProps) {
  const { genreSlug } = await params;

  // Fetch genre by slug
  const genre = await prisma.genre.findUnique({
    where: { name: genreSlug },
    include: {
      books: true,
    },
  });

  if (!genre) {
    return <div>Genre not found.</div>;
  }

  return (
    <main className="min-h-screen pt-[12vh] bg-black text-white flex flex-col gap-2">
      <Navbar></Navbar>
      <link rel="icon" type="image/svg+xml" href="/favi.svg" />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[32px]">{genre.name} Novels</h1>
        <div className="grid grid-cols-3 grid-rows-2 sm:grid-cols-8 bg-white text-black w-[90%] min-h-125 rounded-2xl">
          {genre.books.map((book: Book) => (
            <div key={book.id} className="h-auto w-full m-2">
              <Link href={`/genre/${genreSlug}/books/${book.slug}`}>
                <div className=" md:h-auto w-full h-auto overflow-hidden rounded-sm">
                  <img
                    src={book.coverUrl}
                    alt="/Pl.svg"
                    className=" h-full w-full object-cover "
                  ></img>
                </div>
                <h3 className="line-clamp-2 mt-2">{book.title}</h3>
              </Link>
              <h1 className="text-neutral-500 mt-0.5 line-clamp-2">
                {book.published}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
}
