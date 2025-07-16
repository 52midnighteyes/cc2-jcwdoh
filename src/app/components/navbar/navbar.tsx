"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icon hamburger & close

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white px-6 py-4 fixed top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="#hero">
          <h1 className="text-yellow-400 font-bold text-lg">
            Jimmy <span className="text-white">"Code"</span> McGill
          </h1>
        </Link>

        <div className="space-x-6 text-sm font-medium hidden md:flex">
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

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-yellow-400" />
          ) : (
            <Menu className="w-6 h-6 text-yellow-400" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-sm font-medium text-center">
          <Link
            href="#aboutme"
            className="block hover:text-yellow-400 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </Link>
          <Link
            href="#portfolio"
            className="block hover:text-yellow-400 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="#contact"
            className="block hover:text-yellow-400 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
