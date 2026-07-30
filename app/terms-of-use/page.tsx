// app/terms/page.tsx
import Navbar from "../comp/navbar";
import Footer from "../comp/footer";

export const metadata = {
  title: "Terms of Use - Plotline Lib",
  description:
    "The terms, rules, and conditions for reading on plotlinelib.com.",
};

export default function TermsPage() {
  return (
    <main className="bg-black min-h-screen text-white flex flex-col">
      <Navbar />
      <link rel="icon" type="image/svg+xml" href="/favi.svg" />
      <div className="max-w-5xl mx-auto p-6 mt-[12vh] flex-1">
        <h1 className="text-4xl font-bold mb-4">Terms of Use</h1>

        <p className="mb-4 text-sm text-gray-400">
          <strong>Last Updated:</strong> July 15, 2026
        </p>

        <p className="mb-4 text-lg">
          Welcome to plotlinelib.com (the "Site"). By accessing, browsing, or
          using this Site, you agree to be bound by these Terms of Use. If you
          do not agree, please do not use this Site.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          1. Description of Service
        </h2>
        <p className="mb-4 text-lg text-gray-300">
          plotlinelib.com is a static digital library providing free access to
          public domain novels. There is no user registration, profile creation,
          or account tracking on this Site. To help support hosting and
          maintenance costs, the Site accepts voluntary financial donations.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          2. Intellectual Property and Content
        </h2>
        <ul className="list-disc list-inside space-y-2 mb-4 text-lg text-gray-300">
          <li>
            <span className="font-semibold text-white">
              Public Domain Novels:
            </span>{" "}
            The text of the literary works provided on this Site is in the
            public domain. Users are free to read and access these texts in
            accordance with applicable copyright laws.
          </li>
          <li>
            <span className="font-semibold text-white">Website Design:</span>{" "}
            The visual layout and structure of this Site are inspired by digital
            reading interfaces and optimized for public presentation. We do not
            claim exclusive proprietary ownership or trademarks over the general
            layout formats or structural design templates utilized on this Site.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Acceptable Use</h2>
        <p className="mb-4 text-lg text-gray-300">
          You agree to use this Site only for lawful, personal reading. You
          agree not to use automated scrapers, bots, or data-mining tools to
          mass-extract texts from the Site, or attempt to disrupt the static
          architecture of the platform.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Ko-fi Donations</h2>
        <p className="mb-4 text-lg text-gray-300">
          Voluntary financial support is processed through our official Ko-fi
          page. These transactions are treated strictly as non-refundable tips
          to support website upkeep. Making a donation is entirely optional and
          does not grant any special access, account creation, or ad-free
          privileges on the Site.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          5. Disclaimer of Warranties
        </h2>
        <p className="mb-4 text-lg text-gray-300">
          This Site and its content are provided "as is" without warranties of
          any kind. plotlinelib.com does not warrant that the texts are entirely
          error-free or that the Site will remain permanently uninterrupted. To
          the fullest extent permitted by law, the Site operators shall not be
          liable for any damages arising from your use of this Site.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          6. Contact Information
        </h2>
        <p className="mb-4 text-lg">
          If you have questions regarding these Terms, please contact us via{" "}
          <a
            href="plotlinelibrary@gmail.com"
            className="underline text-blue-400"
          >
            email
          </a>
          .
        </p>
      </div>
      <Footer />
    </main>
  );
}
