"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProjectCard from "./ProjectCard"

function Projects() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "vehiql-AI",
      description:
        "An AI-powered Car MarketPalce built with Next.js, Prisma, PostgreSQL, and Tailwind CSS that enables users to search, compare, and reserve cars based on real-time preferences using intelligent recommendations",
      image: "assets/images/E.png",
      category: "Web Development",
      technologies: [
        "Next.js",
        "Prisma",
        "postgreSQL",
        "ShadcnUI",
        "TailwindCSS",
      ],
      demoLink: "https://vehiql-ai-theta.vercel.app",
      codeLink: "https://github.com/Durga-sh/vehiql-AI",
    },
    {
      id: 2,
      title: "Eventro",
      description:
        " A Dynamic platform for Event Management And ticket Booking System with Outh2 Authentication  ",
      image: "/assets/images/Eventro.png",
      category: "Web Development",
      technologies: [
        "React",
        "JavaScript",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Framer Motion",
      ],
      demoLink: "https://eventro-ivory.vercel.app",
      codeLink: "https://github.com/Durga-sh/Eventro",
    },
    {
      id: 3,
      title: "FINTRACK",
      description:
        "A user-centric personal finance tracking application with Authentication to monitor daily income and expenses. Also enable users to set financial goals, manage budgets .",
      image: "assets/images/C.png",
      category: "Web Development",
      technologies: ["Angular", "Spring Boot", "JAVA", "MySQL"],
      demoLink: "#",
      codeLink: "https://github.com/Durga-sh/FinTrack",
    },

    {
      id: 4,
      title: "StreamBox",
      description:
        "A video-sharing website allows users to upload, view, and interact with video content across various genres.",
      image: "/assets/images/project3.jpg",
      category: "Web Development",
      technologies: ["React", "Express", "MongoDB", "Tailwind CSS"],
      demoLink: "#",
      codeLink: "https://github.com/Durga-sh/StreamBox",
    },

    {
      id: 5,
      title: "BlogSphere",
      description:
        "A  dynamic content platform enabling users to publish, categorize, and manage posts systematically with Authentication.",
      image: "/assets/images/project3.png",
      category: "Web Development",
      technologies: ["React", "AppWrite", "Tailwind CSS"],
      demoLink: "https://blog-virid-eight-90.vercel.app",
      codeLink: "https://github.com/Durga-sh/BlogSphere",
    },
  ];

  const categories = ["all", ...new Set(projects.map((project) => project.category))]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-700 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-violet-700 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My <span className="text-violet-500">Projects</span>
        </motion.h2>

        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/20"
                    : "bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 border border-gray-700 hover:border-violet-500/30"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/Durga-sh"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 inline-flex items-center shadow-[0_5px_15px_rgba(139,92,246,0.4)]"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(139,92,246,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View More Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
