import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-16 bg-purple-700 flex justify-between items-center px-4 md:px-16 text-white sticky top-0 z-50 shadow-md">
      {/* Logo */}
      <div className="logo font-extrabold text-2xl tracking-tighter">
        <Link href="/">BitLinks</Link>
      </div>

      {/* Desktop Links - Hidden on Mobile */}
      <ul className="hidden md:flex justify-center gap-6 items-center font-medium">
        <Link href="/" className="hover:text-purple-200 transition-colors">Home</Link>
        <Link href="/about" className="hover:text-purple-200 transition-colors">About</Link>
        <Link href="/contact" className="hover:text-purple-200 transition-colors">Contact</Link>
        <Link href="/shorten" className="hover:text-purple-200 transition-colors">Shorten</Link>
      </ul>

      {/* Buttons - Adjusted for Mobile */}
      <div className="flex gap-2 items-center">
        <Link href="/shorten">
          <button className="bg-white text-purple-700 px-4 py-1.5 rounded-full shadow-lg hover:bg-purple-50 font-bold text-sm md:text-base transition-all">
            Try Now
          </button>
        </Link>
        {/* GitHub Button - Hidden on small mobile to save space */}
        <Link href="/github" className="hidden sm:block">
          <button className="bg-purple-800 text-white border border-purple-400 px-4 py-1.5 rounded-full shadow-lg hover:bg-purple-900 font-bold text-sm md:text-base transition-all">
            GitHub
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;