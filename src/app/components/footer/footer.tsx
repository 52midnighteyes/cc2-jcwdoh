import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Jimmy{" "}
          <span className="text-yellow-400">"Code"</span> McGill. All rights
          reserved.
        </p>

        <div className="space-x-4">
          <Link
            href="#aboutme"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            About Me
          </Link>
          <Link
            href="#portfolio"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Portfolio
          </Link>
          <Link
            href="#contact"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
