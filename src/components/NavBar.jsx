"use client";

import { useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import { FaBars, FaTimes } from "react-icons/fa";
import vbLogo from '/public/images/logo.png'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="noise shadow-lg py-3">
      <div className="container mx-auto flex justify-between items-center my-2 p-2">
        {/* Logo and Name */}
        <Link href="/" className="flex items-center">
          <Image
          src={vbLogo}
          alt="logo"
          width={40}
          height={40}
          className="h-full w-full" />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="font-semibold pt-2">
            Home
          </Link>
          <Link href="/about" className="font-semibold px-2 pt-2">
            About
          </Link>
          <Link href="/projects" className="font-semibold pt-2">
            Projects
          </Link>
          <Link href="/experience" className="font-semibold px-2 pt-2">
            Experience
          </Link>
          <Link
            href="/contact"
            className="primaryBtn rounded-lg shadow-lg font-semibold px-3 py-2"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Navigation (Burger Menu) */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-xl focus:outline-none pt-3"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center px-4 py-3 space-y-4">
          <Link
            href="/"
            className="block font-semibold"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block font-semibold"
            onClick={toggleMobileMenu}
          >
            About
          </Link>
          <Link
            href="/projects"
            className="block font-semibold"
            onClick={toggleMobileMenu}
          >
            Projects
          </Link>
          <Link
            href="/experience"
            className="block font-semibold"
            onClick={toggleMobileMenu}
          >
            Experience
          </Link>
          <Link
            href="/contact"
            className="block font-semibold"
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
