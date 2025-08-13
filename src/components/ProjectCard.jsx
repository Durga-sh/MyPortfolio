"use client";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      className="group bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-500 border border-gray-700/50 hover:border-violet-500/40"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <div className="relative overflow-hidden h-56">
        <img
          src={
            project.image ||
            "/placeholder.svg?height=300&width=400&query=modern project preview"
          }
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

        {/* Enhanced overlay with better positioning */}
        <div className="absolute inset-0 bg-gradient-to-t from-violet-900/90 via-violet-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center">
          <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
            <motion.a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-violet-900 px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
              <span>Live Demo</span>
            </motion.a>
            <motion.a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                ></path>
              </svg>
              <span>Code</span>
            </motion.a>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors duration-300">
            {project.title}
          </h3>
          <span className="text-xs font-semibold bg-gradient-to-r from-violet-500 to-purple-500 text-white py-1.5 px-3 rounded-full shadow-lg">
            {project.category}
          </span>
        </div>

        <p className="text-gray-300 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-gray-700/60 text-gray-200 px-3 py-1.5 rounded-full border border-gray-600/50 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-300 transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-700/50">
          <motion.a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-400 hover:text-violet-300 transition-colors duration-300 text-sm font-semibold flex items-center space-x-1 group/link"
            whileHover={{ x: 3 }}
          >
            <span>Live Demo</span>
            <svg
              className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
            className="text-violet-400 hover:text-violet-300 transition-colors duration-300 text-sm font-semibold flex items-center space-x-1 group/link"
            whileHover={{ x: 3 }}
          >
            <span>View Code</span>
            <svg
              className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
  );
}

export default ProjectCard;
