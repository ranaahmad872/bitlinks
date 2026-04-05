import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="h-16 bg-purple-700 flex justify-between items-center px-3 text-white">
      <div className="logo font-bold text-2xl">BitLinks</div>
      <ul className="flex justify-center gap-4 items-center">
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/contact"><li>Contact</li></Link>
        <Link href="/shorten"><li>Shorten</li></Link>
        <li>
          <Link href="/shorten">
            {" "}
            <button className="bg-white text-purple-700 px-3 py-1 rounded-md shadow-lg hover:bg-gray-200 font-bold">
              Try Now
            </button>
          </Link>
          <Link href="/github">
            {" "}
            <button className="bg-white text-purple-700 px-3 py-1 rounded-md shadow-lg hover:bg-gray-200 font-bold">
              Github
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
