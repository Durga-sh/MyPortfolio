"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function Resume() {
  const [activeTab, setActiveTab] = useState("education")

  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "Centurion University Of Technology And Management",
      duration: "2022 - 2026",
      CGPA: "9.1",
      description: "Graduated with honors. Participated in various coding competitions and hackathons.",
    },
  ]

  const experience = [
    {
      position: "Senior Software Developer",
      company: "Tech Company",
      duration: "2021 - Present",
      description: "Lead developer for client projects, mentoring junior developers, and implementing best practices.",
    },
    {
      position: "Full Stack Developer",
      company: "Digital Agency",
      duration: "2019 - 2021",
      description: "Developed and maintained web applications using React.js, Node.js, and MongoDB.",
    },
    {
      position: "Junior Web Developer",
      company: "Startup Name",
      duration: "2017 - 2019",
      description: "Created responsive websites and assisted in developing the company's core product.",
    },
  ]

  const certifications = [
    {
      name: "AWS Cloud Foundation",
      issuer: "Amazon Web Services",
      year: "2024",
    },
  ]

  const tabVariants = {
    inactive: {
      opacity: 0.7,
      scale: 0.95,
      transition: { duration: 0.3 },
    },
    active: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  }

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.3 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-700 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/2 right-1/3 w-96 h-96 bg-violet-700 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My <span className="text-violet-500">Resume</span>
        </motion.h2>

        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex rounded-md shadow-lg p-1 bg-gray-800/50 backdrop-blur-sm">
            {["education", "experience", "certifications"].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-md relative overflow-hidden`}
                variants={tabVariants}
                initial="inactive"
                animate={activeTab === tab ? "active" : "inactive"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-md -z-10"
                    layoutId="activeTab"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === "education" && (
              <motion.div
                className="space-y-8"
                key="education"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800/50 rounded-lg p-6 shadow-lg backdrop-blur-sm border border-gray-700/50 hover:border-violet-500/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{
                      boxShadow: "0 10px 30px rgba(139,92,246,0.2)",
                      y: -5,
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                      <span className="inline-block px-3 py-1 bg-violet-900/30 text-violet-300 rounded-full text-sm mt-2 md:mt-0 border border-violet-500/30">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-2">{item.institution}</p>
                    <p className="text-gray-300">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "experience" && (
              <motion.div
                className="space-y-8"
                key="experience"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {experience.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800/50 rounded-lg p-6 shadow-lg backdrop-blur-sm border border-gray-700/50 hover:border-violet-500/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{
                      boxShadow: "0 10px 30px rgba(139,92,246,0.2)",
                      y: -5,
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <h3 className="text-xl font-bold text-white">{item.position}</h3>
                      <span className="inline-block px-3 py-1 bg-violet-900/30 text-violet-300 rounded-full text-sm mt-2 md:mt-0 border border-violet-500/30">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-2">{item.company}</p>
                    <p className="text-gray-300">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "certifications" && (
              <motion.div
                className="space-y-8"
                key="certifications"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {certifications.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800/50 rounded-lg p-6 shadow-lg backdrop-blur-sm border border-gray-700/50 hover:border-violet-500/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{
                      boxShadow: "0 10px 30px rgba(139,92,246,0.2)",
                      y: -5,
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <h3 className="text-xl font-bold text-white">{item.name}</h3>
                      <span className="inline-block px-3 py-1 bg-violet-900/30 text-violet-300 rounded-full text-sm mt-2 md:mt-0 border border-violet-500/30">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-gray-400">{item.issuer}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
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
            href="assets/Durga Resume.pdf"
            download="Durgashankar_Resume.pdf"
            className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 inline-flex items-center shadow-[0_5px_15px_rgba(139,92,246,0.4)]"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(139,92,246,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume
