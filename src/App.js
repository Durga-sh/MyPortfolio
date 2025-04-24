"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Preload animation library
  useEffect(() => {
    // Add cursor effect
    const cursor = document.createElement("div");
    cursor.className =
      "fixed w-6 h-6 rounded-full pointer-events-none z-50 border-2 border-violet-500 transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference";
    cursor.style.transition =
      "transform 0.1s ease, width 0.2s ease, height 0.2s ease, border-color 0.2s ease";
    document.body.appendChild(cursor);

    const cursorDot = document.createElement("div");
    cursorDot.className =
      "fixed w-2 h-2 rounded-full bg-violet-500 pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference";
    cursorDot.style.transition = "transform 0.15s ease";
    document.body.appendChild(cursorDot);

    const updateCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;
    };

    const enlargeCursor = () => {
      cursor.style.width = "40px";
      cursor.style.height = "40px";
      cursor.style.borderColor = "#a78bfa";
    };

    const resetCursor = () => {
      cursor.style.width = "24px";
      cursor.style.height = "24px";
      cursor.style.borderColor = "#8b5cf6";
    };

    document.addEventListener("mousemove", updateCursor);

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", enlargeCursor);
      el.addEventListener("mouseleave", resetCursor);
    });

    // Update active section based on scroll position
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "resume",
        "projects",
        "contact",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            // Update URL when scrolling to different sections
            window.history.replaceState(null, null, `#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Handle initial hash if present
    const initialHash = window.location.hash.replace("#", "");
    if (initialHash) {
      const targetElement = document.getElementById(initialHash);
      if (targetElement) {
        setTimeout(() => {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
          setActiveSection(initialHash);
        }, 100);
      }
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").replace("#", "");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });

          // Update URL hash without adding to history
          window.history.replaceState(null, null, `#${targetId}`);

          // Update active section
          setActiveSection(targetId);
        }
      });
    });

    return () => {
      document.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("scroll", handleScroll);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", enlargeCursor);
        el.removeEventListener("mouseleave", resetCursor);
      });
      if (cursor.parentNode) cursor.parentNode.removeChild(cursor);
      if (cursorDot.parentNode) cursorDot.parentNode.removeChild(cursorDot);
    };
  }, []);

  return (
    <AnimatePresence>
      <div className="App bg-gray-950">
        <Header
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
