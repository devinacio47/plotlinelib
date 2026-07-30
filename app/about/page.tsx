// app/about/page.tsx
import Navbar from "../comp/navbar";
import Footer from "../comp/footer";

export const metadata = {
  title: "Plotline Lib - Classic Literature Library",
  description:
    "The place for stories that predate the internet. Browse classic literature by genre and start reading instantly.",
};

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen text-white flex flex-col">
      <Navbar />
      <link rel="icon" type="image/svg+xml" href="/favi.svg" />
      <div className="max-w-5xl mx-auto p-6 mt-[12vh] flex-1">
        <h1 className="text-4xl font-bold mb-4">About Plotline Library</h1>

        <p className="mb-4 text-lg">
          Welcome to <span className="font-semibold">Plotline Lib</span>, a home
          for classic literature and public-domain stories. Our mission is to
          create a library of timeless novels and tales.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">What You Can Do</h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Browse stories by genre</li>
          <li>Read novels instantly online</li>
          <li>Explore chapters in sequential order</li>
          <li>Discover classic literature</li>
          <li>New books are added on weekends </li>
          <li>
            Every book on the site gets two chapter updates per week till its
            completed{" "}
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">How to Navigate</h2>
        <p className="mb-4 text-lg">
          Start by selecting the genres tab on the navigation bar, then pick a
          novel from the library genres and begin reading. Each chapter is
          organized sequentially for a smooth reading experience.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact & Feedback</h2>
        <p className="mb-4 text-lg">
          Have suggestions or questions? Reach out via{" "}
          <a
            href="mailto:plotlinelibrary@gmail.com"
            className="underline text-blue-400"
          >
            email
          </a>
          . We appreciate your feedback!
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Fun Fact</h2>
        <p className="mb-4 text-lg">
          Many of these novels predate the internet, but their stories continue
          to inspire readers and authors of today.
        </p>
      </div>

      <Footer />
    </main>
  );
}
