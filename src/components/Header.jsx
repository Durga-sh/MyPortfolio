import React, { useState, useEffect } from 'react';

function Header() {
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#home" className="text-xl font-bold text-white">
          Durga<span className="text-indigo-500">shankar</span>
        </a>
        
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        <nav className={`absolute md:relative top-full left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible'}`}>
          <ul className="flex flex-col md:flex-row md:items-center p-4 md:p-0">
            <li className="my-2 md:my-0 md:mx-4">
              <a href="#home" className="text-white hover:text-indigo-400 transition-colors duration-300">Home</a>
            </li>
            <li className="my-2 md:my-0 md:mx-4">
              <a href="#about" className="text-white hover:text-indigo-400 transition-colors duration-300">About</a>
            </li>
            <li className="my-2 md:my-0 md:mx-4">
              <a href="#skills" className="text-white hover:text-indigo-400 transition-colors duration-300">Skills</a>
            </li>
            <li className="my-2 md:my-0 md:mx-4">
              <a href="#resume" className="text-white hover:text-indigo-400 transition-colors duration-300">Resume</a>
            </li>
            <li className="my-2 md:my-0 md:mx-4">
              <a href="#projects" className="text-white hover:text-indigo-400 transition-colors duration-300">Projects</a>
            </li>
            <li className="my-2 md:my-0 md:mx-4">
              <a href="#contact" className="text-white hover:text-indigo-400 transition-colors duration-300">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;