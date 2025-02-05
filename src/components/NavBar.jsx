"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import vbLogo from "/public/images/logo.png";

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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`noise fixed top-0 left-0 shadow-lg w-full uppercase p-3 transition-all duration-300 z-50 ${
          isScrolled
            ? "backdrop-blur-md bg-white/10 border border-white/20 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src={vbLogo} alt="logo, brings to home page" width={40} style={{ height: "auto" }} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className={`font-semibold pt-2 tracking-wider hover:font-extrabold ${
                pathname === "/" ? "font-extrabold" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-semibold pt-2 tracking-wider hover:font-extrabold ${
                pathname === "/about" ? "font-extrabold" : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={`font-semibold pt-2 tracking-wider hover:font-extrabold ${
                pathname === "/projects" ? "font-extrabold" : ""
              }`}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="btnCard rounded-lg shadow-lg font-semibold px-3 py-2"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Navigation (Burger Icon) */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-xl focus:outline-none"
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
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="flex flex-col items-center w-full p-6 space-y-4">
            <Link
              href="/"
              className="block font-semibold tracking-wider hover:font-extrabold"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block font-semibold tracking-wider hover:font-extrabold"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link
              href="/projects"
              className="block font-semibold tracking-wider hover:font-extrabold"
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
        </div>
      </nav>

      {/* Push Content Down When Menu Opens */}
      <div
        className={`transition-all duration-300 ${
          isMobileMenuOpen ? "mt-40" : "mt-0"
        }`}
      ></div>
    </>
  );
}
