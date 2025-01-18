"use client";

import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ScrollProgressBar from "./ScrollProgressBar";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
 
 

  const NavLinks = ({ mobile = false }) => {
    const linkClass = mobile
      ? "text-2xl text-gray-100 pt-10 font-bold hover:text-gray-400 hover:scale-105 transition-all active:text-gray-500"
      : "text-gray-800  shadow-2xl drop-shadow-xl font-medium hover:text-blue-500 hover:scale-110 transition-all cursor-pointer pt-1 font-Helvetica";

    return (
      <>
       <Link
          href="/"
          className={linkClass}
          onClick={() => mobile && setIsOpen(false)}
        >
          Services
        </Link>
        <Link
          href="/Blog"
          className={linkClass}
          onClick={() => mobile && setIsOpen(false)}
        >
          About Us
        </Link>
        <Link
          href="/contact"
          className={linkClass}
          onClick={() => mobile && setIsOpen(false)}
        >
          Contact
        </Link>
      </>
    );
  };

  return (
    <div className="relative z-50">
      {/* Fixed Navigation Bar */}
      <div className="fixed top-0 w-full h-20 bg-gray-50/60 backdrop-blur-md px-4 lg:px-20 pt-4">
        <div className="flex flex-row justify-between items-center">
          {/* Logo Section */}
          <section className="flex items-center justify-center gap-3 pt-1">
            <Link href="/">
              <img
                src="/Images/logo.jpg"
                alt="Logo"
                className="w-auto h-10 drop-shadow-lg cursor-pointer "
              />
            </Link>
            <h1 className="text-2xl font-allround-bold font-bold">7Janpath Forex</h1>
          </section>

          {/* Desktop Navigation Links */}
          <section className="hidden md:flex gap-10 text-gray-300 pt-2">
            <NavLinks />
          </section>

          {/* Mobile Hamburger Icon */}
          <section
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </section>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-gray-900 bg-opacity-95 z-50 md:hidden animate-fade-in"
          >
            <div className="relative h-full">
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors "
              >
                <FiX size={32} />
              </button>

              {/* Navigation links */}
              <div className="flex flex-col items-center justify-center h-full ">
                <NavLinks mobile />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
