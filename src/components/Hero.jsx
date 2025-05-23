"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

function Hero() {
  // For particle animation
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let particlesArray = []

    // Create particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.color = `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.3 + 0.1})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.size > 0.2) this.size -= 0.01

        // Boundary check
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    function init() {
      particlesArray = []
      const numberOfParticles = Math.min(window.innerWidth * 0.05, 100)
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle())
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }

      // Connect particles with lines if they're close enough
      connectParticles()

      requestAnimationFrame(animate)
    }

    // Connect particles with lines
    function connectParticles() {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.strokeStyle = `rgba(150, 120, 255, ${0.2 - distance / 500})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    // Handle resize
    function handleResize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    window.addEventListener("resize", handleResize)

    init()
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gray-950 overflow-hidden">
      {/* Particle animation canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-40"></canvas>

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 to-gray-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.15),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-40 h-40 rounded-full border-4 border-violet-500 overflow-hidden mx-auto relative group">
              {/* Replace with your actual photo URL or add to your assets folder */}
              <img
                src="assets/images/Durga5.png"
                alt="Durgashankar Puhan"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Glowing effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-70 blur-md transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gray-950 rounded-full z-[-1]"></div>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500">
              Durgashankar
            </span>
          </motion.h1>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="bg-violet-500/20 text-violet-300 px-4 py-1 rounded-full text-sm font-medium border border-violet-500/30">
              Web Developer
            </span>
            <span className="bg-violet-500/20 text-violet-300 px-4 py-1 rounded-full text-sm font-medium border border-violet-500/30">
              UI/UX Designer
            </span>
            <span className="bg-violet-500/20 text-violet-300 px-4 py-1 rounded-full text-sm font-medium border border-violet-500/30">
              Problem Solver
            </span>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Creating elegant, responsive, and user-friendly web applications that solve real-world problems.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-[0_5px_15px_rgba(139,92,246,0.4)] relative overflow-hidden group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(139,92,246,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Explore My Projects</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </motion.a>

            <motion.a
              href="#contact"
              className="bg-transparent border-2 border-violet-500 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 relative overflow-hidden group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(139,92,246,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Get In Touch</span>
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-8 flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.a
              href="https://github.com/Durga-sh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.2, color: "#9333ea" }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/durgashankar-puhan-a01a3424b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.2, color: "#9333ea" }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/puhandurgasankar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.2, color: "#9333ea" }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 1.2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
      >
        <a href="#about" className="text-violet-400 hover:text-white transition-colors duration-300">
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
