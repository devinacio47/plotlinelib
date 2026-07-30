// app/privacy/page.tsx
import Navbar from "../comp/navbar";
import Footer from "../comp/footer";

export const metadata = {
  title: "Privacy Policy - Plotline Lib",
  description:
    "Learn how plotlinelib.com handles visitor privacy and data collection.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-black min-h-screen text-white flex flex-col">
      <Navbar />
      <link rel="icon" type="image/svg+xml" href="/favi.svg" />
      <div className="max-w-5xl mx-auto p-6 mt-[12vh] flex-1">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>

        <p className="mb-4 text-sm text-gray-400">
          <strong>Last Updated:</strong> July 15, 2026
        </p>

        <p className="mb-4 text-lg">
          At plotlinelib.com, we protect your privacy. Because our website is a
          static library, you can browse and read all public domain novels
          anonymously without needing to create an account.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          1. Website Analytics (Umami)
        </h2>
        <p className="mb-4 text-lg text-gray-300">
          We use Umami Analytics to understand how visitors interact with our
          Site (e.g., tracking page views, popular books, and referral sources).
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 text-lg text-gray-300">
          <li>
            <span className="font-semibold text-white">Privacy-First:</span>{" "}
            Umami is a privacy-focused platform that does not use tracking
            cookies and does not collect any Personally Identifiable Information
            (PII).
          </li>
          <li>
            <span className="font-semibold text-white">Anonymized Data:</span>{" "}
            Your IP address is immediately anonymized, and we cannot track your
            individual browsing habits across other websites or link your
            session data to your real identity.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. Ko-fi Donations</h2>
        <p className="mb-4 text-lg text-gray-300">
          If you choose to support plotlinelib.com through voluntary donations
          via Ko-fi, the transaction is processed entirely by Ko-fi and its
          secure third-party payment processors. plotlinelib.com never views,
          collects, or stores your credit card numbers, banking details, or
          personal billing information.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          3. Contact Information
        </h2>
        <p className="mb-4 text-lg">
          If you have any questions about this Privacy Policy, reach out via{" "}
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
