"use client"
import { motion } from "framer-motion"

function ProjectCard({ project }) {
  return (
    <motion.div
      className="group bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-violet-500/20 transition-all duration-500 border border-gray-800 hover:border-violet-500/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>

        {/* Overlay with links that appear on hover */}
        <div className="absolute inset-0 bg-violet-900/70 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-4">
          <motion.a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-violet-900 px-4 py-2 rounded-md font-medium transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Live Demo
          </motion.a>
          <motion.a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-white text-white px-4 py-2 rounded-md font-medium transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View Code
          </motion.a>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <span className="text-xs font-medium bg-violet-900/40 text-violet-300 py-1 px-2 rounded-full border border-violet-500/30">
            {project.category}
          </span>
        </div>

        <p className="text-gray-300 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-gray-800/80 text-gray-300 px-2 py-1 rounded-md border border-gray-700 hover:border-violet-500/30 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between">
          <motion.a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-400 hover:text-violet-300 transition-colors duration-300 text-sm font-medium flex items-center"
            whileHover={{ x: 3 }}
          >
            Live Demo
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </motion.a>
          <motion.a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-400 hover:text-violet-300 transition-colors duration-300 text-sm font-medium flex items-center"
            whileHover={{ x: 3 }}
          >
            View Code
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              ></path>
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
