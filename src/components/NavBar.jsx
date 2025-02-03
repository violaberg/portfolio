"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { FaBars, FaTimes } from "react-icons/fa";
import vbLogo from '/public/images/logo.png'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`noise flex fixed top-0 left-0 shadow-lg w-full items-center uppercase p-3 transition-all duration-300 ${
  isScrolled ? 'backdrop-blur-md bg-white/10 border border-white/20 shadow-lg' : 'bg-transparent'
}`}
    >
      <div className="container mx-auto flex justify-between items-center my-2 p-2">
        {/* Logo and Name */}
        <Link href="/" className="flex items-center">
          <Image
            src={vbLogo}
            alt="logo"
            width={40}
            height={40}
            className="h-full w-full"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className={`font-semibold pt-2 tracking-wider hover:font-extrabold [&.active]:font-extrabold ${pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link href="/about" className={`font-semibold pt-2 tracking-wider hover:font-extrabold [&.active]:font-extrabold ${pathname === '/about' ? 'active' : ''}`}>
            About
          </Link>
          <Link href="/projects" className={`font-semibold pt-2 tracking-wider hover:font-extrabold [&.active]:font-extrabold ${pathname === '/projects' ? 'active' : ''}`}>
            Projects
          </Link>
          <Link
            href="/contact"
            className="btnCard rounded-lg shadow-lg font-semibold px-3 py-2"
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
              <FaTimes className="text-2xl absolute top-5 right-5" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center p-6 space-y-4">
          <Link
            href="/"
            className={`block font-semibold tracking-wider hover:font-extrabold [&.active]:font-extrabold ${pathname === '/' ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`block font-semibold tracking-wider hover:font-extrabold [&.active]:font-extrabold ${pathname === '/about' ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={`block font-semibold tracking-wider hover:font-extrabold [&.active]:font-extrabold ${pathname === '/projects' ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="block btnCard rounded-lg shadow-lg font-semibold px-3 py-2"
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
