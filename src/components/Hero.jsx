import React from 'react';
import { ArrowDown } from 'lucide-react';

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gray-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/30 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate">
            Hi, I'm <span className="text-indigo-500">Durga</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl animate delay-1">
            I'm a professional developer specializing in building exceptional digital experiences
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate delay-2">
            <a href="#projects" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:-translate-y-1">
              View My Work
            </a>
            <a href="#contact" className="bg-transparent border-2 border-indigo-500 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:-translate-y-1">
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}

export default Hero;