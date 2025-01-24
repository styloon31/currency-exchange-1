"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#", isActive: true },
    { name: "ABOUT", href: "about" },
    { name: "SERVICES", href: "#" },
    { name: "BLOG", href: "#" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-4 lg:px-8 h-20">
          {/* Logo Section */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Image src={"/Images/logo.jpg"} height={200} width={200} alt="logo" className="drop-shadow-xl w-12 h-12" />
            <h1 className={`text-lg font-bold font-Helvetica ${isScrolled? "text-white":"text-black"}`}>7Janpath Forex</h1>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex">
            <motion.div
              className={`flex space-x-1  rounded-full py-2 px-3 backdrop-blur-sm ${isScrolled? "bg-lightOrange":"bg-lightOrange/80"} `}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1 rounded-full text-sm transition-colors ${
                    link.isActive
                      ? "text-white"
                      : "text-black hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-black/20"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </motion.button>
          </div>

          {/* Contact Button */}
          <motion.a
            href="#"
            className="hidden lg:flex items-center bg-gradient-to-r from-[#FC8E06] to-[#FEBC3E] text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-blue-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
            <motion.svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </motion.svg>
          </motion.a>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 bg-black/90 backdrop-blur-sm space-y-2">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`block px-4 py-2 rounded-lg ${
                  link.isActive ? "text-green-400" : "text-white"
                }`}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#"
              className="block px-4 py-2 bg-darkBlue text-black rounded-lg text-center mt-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;