import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className=" fixed top-0 w-full bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        {/* Navbar Links */}
        <nav className="flex gap-4">
          <Link
            href="/"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            Home
          </Link>
          {/* <Link
            href="/gallery-main"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            Gallery
          </Link> */}
          {/* <Link
            href="/gallery-main/add-image"
            target="_blank"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            Add Image
          </Link> */}
          <Link
            href="/gallery-main/flipbook"
            target="_blank"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            Flipbook
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
