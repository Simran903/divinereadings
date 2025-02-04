"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.jpg"

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm border-b z-50">
      <div className="flex items-center justify-between md:justify-around px-8 py-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image src={logo} alt="logo" className="h-8 w-8 lg:h-12 lg:w-12" />
          <span className="text-xl font-bold text-gray-800">DivineReadings</span>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row md:space-x-8 text-gray-800 absolute md:static top-16 left-0 right-0 bg-white shadow-md md:shadow-none p-4 md:p-0`}
        >
          <Link href="#home" className="block font-semibold py-2 md:py-0 hover:text-teal-500">
            Home
          </Link>
          <Link href="#about" className="block font-semibold py-2 md:py-0 hover:text-teal-500">
            About Me
          </Link>
          <Link href="#services" className="block font-semibold py-2 md:py-0 hover:text-teal-500">
            Services
          </Link>
          <Link href="#testimonials" className="block font-semibold py-2 md:py-0 hover:text-teal-500">
            Testimonials
          </Link>
          <Link href="#contact" className="block font-semibold py-2 md:py-0 hover:text-teal-500">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;