// app/not-found.tsx
import Link from "next/link";
import Navbar from "./comp/navbar";
import Footer from "./comp/footer";

export const metadata = {
  title: "404 - Story Not Found | Plotline Lib",
  description: "The page or classic novel you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <main className="bg-black min-h-screen text-white flex flex-col">
      <Navbar />
      <link rel="icon" type="image/svg+xml" href="/favi.svg" />

      <div className="max-w-5xl mx-auto p-6 mt-[25vh] flex-1 flex flex-col items-center justify-center text-center">
        {/* Large, stylistic error number */}
        <h1 className="text-8xl font-extrabold text-neutral-800 tracking-widest mb-4 animate-pulse">
          404
        </h1>

        {/* Thematic messaging matching your classic literature theme */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          This Story Has Not Been Written Yet
        </h2>

        <p className="max-w-md text-neutral-400 text-lg mb-8">
          The page or novel you are looking for doesn't exist, or it hasn't
          survived the passage of time.
        </p>

        {/* Call to action to send them back home */}
        <Link
          href="/"
          className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-neutral-200 transition-colors duration-200 text-sm uppercase tracking-wider"
        >
          Return to Library
        </Link>
      </div>

      <Footer />
    </main>
  );
}
