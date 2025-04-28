"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Header({ activeSection, setActiveSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const handleNavClick = (section) => {
    // First close the mobile menu
    setIsMenuOpen(false);

    // Small delay to ensure menu closing animation starts before scrolling
    setTimeout(() => {
      const targetElement = document.getElementById(section);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });

        // Update URL hash without adding to history
        window.history.replaceState(null, null, `#${section}`);

        // Update active section in state
        setActiveSection(section);
      }
    }, 10);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <motion.a
          href="#home"
          className="text-xl font-bold text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
        >
          Durga
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500">
            shankar
          </span>
        </motion.a>

        <div className="md:hidden">
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
          </motion.button>
        </div>

        <nav className="hidden md:block">
          <motion.ul
            className="flex items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {["home",  "skills", "resume", "projects", "contact"].map(
              (item, index) => (
                <motion.li
                  key={item}
                  className="mx-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <a
                    href={`#${item}`}
                    className={`relative text-white hover:text-violet-400 transition-colors duration-300 py-2 px-1 ${
                      activeSection === item ? "text-violet-400" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item);
                    }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    {activeSection === item && (
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 to-purple-500"
                        layoutId="underline"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </a>
                </motion.li>
              )
            )}
          </motion.ul>
        </nav>
      </div>

      {/* Mobile Menu - Moved outside the container for better positioning */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md md:hidden z-50"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <ul className="flex flex-col p-4">
              {["home", "about", "skills", "resume", "projects", "contact"].map(
                (item, index) => (
                  <motion.li
                    key={item}
                    className="my-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                  >
                    <button
                      className={`block w-full text-left py-2 px-4 rounded-md transition-all duration-300 ${
                        activeSection === item
                          ? "bg-violet-900/30 text-violet-400 border-l-2 border-violet-500"
                          : "text-white hover:bg-gray-800 hover:text-violet-400"
                      }`}
                      onClick={() => handleNavClick(item)}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                  </motion.li>
                )
              )}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
