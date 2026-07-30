import Link from "next/link";
import { prisma } from "../lib/prisma";
import Navbar from "../comp/navbar";
import Footer from "../comp/footer";

interface Genre {
  id: number;
  name: string;
}

export const metadata = {
  title: "Plotline Lib - Classic Literature Library",
  description:
    "The place for stories that predate the internet. Browse classic literature by genre and start reading instantly.",
};

export default async function HomePage() {
  const genres = await prisma.genre.findMany();

  return (
    <>
      <main className="bg-black min-h-screen pt-[10vh] sm:pt-[12vh]">
        <Navbar></Navbar>
        <link rel="icon" type="image/svg+xml" href="/favi.svg" />

        <div className="min-h-12.5">
          <div className="text-white m-2 bg-gradi-hero rounded-2xl h-[20vh] flex justify-between ">
            <div className="flex flex-col m-2">
              <h1 className="text-[16px] sm:text-[32px] p-4 text-white ">
                {" "}
                Browse our collection by genre below and begin reading!
              </h1>
            </div>

            <div className="flex flex-col justify-end">
              <h1 className="text-[14px] sm:text-[24px] text-white "></h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-[36px] font-sans border-b border-neutral-500 m-4">
            Genres
          </h1>

          <div className="h-[68vh] w-[95%] bg-black md:p-8 text-white grid grid-rows-3 grid-cols-3 gap-2">
            {genres.map((genre: Genre) => (
              <div
                key={genre.id}
                className="rounded-2xl text-black text-[20px] border-[1.93px] border-neutral-500 "
              >
                <Link
                  href={`/genre/${genre.name}`}
                  className=" rounded-2xl p-4 h-full w-full flex justify-center items-center bg-white active:bg-neutral-500"
                >
                  {genre.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <div className="h-1.5 bg-black"></div>
      <Footer></Footer>
    </>
  );
}
