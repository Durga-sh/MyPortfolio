"use client"
import { motion } from "framer-motion"

function Skills() {
  const skills = [
    { name: "JAVA", percentage: 90 },
    { name: "JavaScript", percentage: 95 },
    { name: "React.js", percentage: 90 },
    { name: "Node.js", percentage: 95 },
    { name: "TypeScript", percentage: 70 },
    { name: "Spring Boot", percentage: 90 },
    { name: "MongoDB", percentage: 90 },
    { name: "Database Management", percentage: 75 },
  ]

  const technologies = [
    "Java",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Spring Boot",
    "MongoDB",
    "MySQL",
    "Tailwind CSS",
    "Material UI",
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-700 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-violet-700 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My <span className="text-violet-500">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:border-violet-500/50 transition-all duration-300 shadow-lg hover:shadow-violet-500/10"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-white">{skill.name}</span>
                <span className="text-violet-400">{skill.percentage}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 rounded-lg px-5 py-3 text-gray-200 shadow-lg border border-gray-700/50 hover:border-violet-500/50 hover:shadow-violet-500/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(139, 92, 246, 0.2)",
                  color: "#d8b4fe",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
