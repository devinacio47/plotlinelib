import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="fixed px-2 top-0 left-0 w-full z-50 flex h-[8vh] md:h-[12vh] justify-between items-end border-b-[0.46px] border-white bg-black text-white text-[16px] md:text-[20px]">
        <Link href="/" className="m-2">
          <div>
            {" "}
            <img src="/Pl.svg" className=" h-10 sm:h-20 "></img>
          </div>
        </Link>

        <div className="flex flex-row m-2 gap-6">
          <Link href="/genre">Genres</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
