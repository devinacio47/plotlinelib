import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-neutral-200 py-8 px-6 text-neutral-400 text-sm">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center justify-center">
          <img
            src="/Plib.svg"
            alt="Plotline Lib Logo"
            width={400}
            height={400}
            className="opacity-80 w-lg h-lg"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-wider font-medium">
          <Link
            href="/terms-of-use"
            className="hover:text-white transition-colors duration-200"
          >
            Terms of Use
          </Link>
          <span className="text-neutral-500 hidden sm:inline">|</span>
          <Link
            href="/privacy"
            className="hover:text-white transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <span className="text-neutral-700 hidden sm:inline">|</span>
          <Link
            href="/DMCA"
            className="hover:text-white transition-colors duration-200"
          >
            DMCA Policy
          </Link>
        </div>

        <div className="text-center pt-2 text-xs text-neutral-600">
          <p>&copy; 2026 Plotline Library. All rights reserved.</p>
          <p className="mt-1 text-[10px] text-neutral-700">
            The tales before the internet
          </p>
        </div>
      </div>
    </footer>
  );
}
