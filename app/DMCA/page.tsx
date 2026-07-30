// app/dmca/page.tsx
import Navbar from "../comp/navbar";
import Footer from "../comp/footer";

export const metadata = {
  title: "DMCA Policy - Plotline Lib",
  description:
    "The Digital Millennium Copyright Act (DMCA) notice procedure for plotlinelib.com.",
};

export default function DMCAPage() {
  return (
    <main className="bg-black min-h-screen text-white flex flex-col">
      <Navbar />
      <link rel="icon" type="image/svg+xml" href="/favi.svg" />
      <div className="max-w-5xl mx-auto p-6 mt-[12vh] flex-1">
        <h1 className="text-4xl font-bold mb-4">DMCA Copyright Policy</h1>

        <p className="mb-4 text-sm text-gray-400">
          <strong>Last Updated:</strong> July 15, 2026
        </p>

        <p className="mb-4 text-lg">
          At plotlinelib.com, we operate as a digital library providing free
          access to public domain novels. We respect the intellectual property
          rights of authors, creators, and publishers, and we make every effort
          to ensure all hosted text is legally in the public domain.
        </p>
        <p className="mb-4 text-lg">
          However, copyright laws vary across different regions. If you are a
          copyright owner or an authorized representative and believe that any
          text, material, or book hosted on our Site infringes upon your
          copyright, you may submit a formal notification pursuant to the
          Digital Millennium Copyright Act (DMCA).
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Notice Requirements
        </h2>
        <p className="mb-2 text-lg text-gray-300">
          To file a valid copyright infringement notice, you must provide a
          written communication that includes:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 text-lg text-gray-300">
          <li>
            A physical or electronic signature of the copyright owner or an
            authorized agent.
          </li>
          <li>
            Identification of the copyrighted work claimed to have been
            infringed (e.g., book title and author).
          </li>
          <li>
            Identification of the infringing material on our website, including
            specific URL links so we can locate the file.
          </li>
          <li>
            Your direct contact information, including your full legal name,
            mailing address, telephone number, and email.
          </li>
          <li>
            A statement that you have a good-faith belief that use of the
            material is not authorized by the copyright owner, its agent, or the
            law.
          </li>
          <li>
            A statement that the information in your notice is accurate, and
            under penalty of perjury, that you are authorized to act on behalf
            of the copyright owner.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Submissions</h2>
        <p className="mb-4 text-lg">
          Please review your notice to ensure all information is complete, and
          email it directly to our designated copyright agent at:{" "}
          <a
            href="mailto:plotlinelibrary@gmail.com"
            className="underline text-blue-400"
          >
            plotlinelibrary@gmail.com
          </a>
          . Upon receipt of a valid notice, we will immediately remove or
          disable access to the disputed content.
        </p>
      </div>
      <Footer />
    </main>
  );
}
