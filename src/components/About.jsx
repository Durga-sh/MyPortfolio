"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

function About() {
  const sectionRef = useRef(null)

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-700 rounded-full filter blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-700 rounded-full filter blur-[120px] translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About <span className="text-violet-500">Me</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-lg overflow-hidden max-w-md mx-auto md:mx-0 group">
              <img
                src="assets/images/project1.jpg"
                alt="Your Name"
                className="w-full object-cover rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-900/80 to-transparent"></div>

              {/* Glowing border effect on hover */}
              <div className="absolute inset-0 border border-violet-500/0 rounded-lg transition-all duration-500 group-hover:border-violet-500/50 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"></div>
            </div>
          </motion.div>

          <div className="md:w-1/2">
            <motion.h3
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Professional <span className="text-violet-500">Developer</span>
            </motion.h3>

            <motion.p
              className="text-gray-300 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              I'm a passionate developer with extensive experience in creating innovative digital solutions. With a
              strong foundation in both front-end and back-end technologies, I bring ideas to life through clean,
              efficient code and intuitive user experiences.
            </motion.p>

            <motion.p
              className="text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              My goal is to build applications that not only meet but exceed client expectations, focusing on
              performance, accessibility, and cutting-edge design principles.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800/50 p-3 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:border-violet-500/50 transition-all duration-300">
                <p className="text-gray-300">
                  <span className="font-bold text-violet-400">Name:</span> Durgashankar Puhan
                </p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:border-violet-500/50 transition-all duration-300">
                <p className="text-gray-300">
                  <span className="font-bold text-violet-400">Email:</span> puhandurgsankarp@gmail.com
                </p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:border-violet-500/50 transition-all duration-300">
                <p className="text-gray-300">
                  <span className="font-bold text-violet-400">Location:</span> Bhubaneswar, Odisha
                </p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:border-violet-500/50 transition-all duration-300">
                <p className="text-gray-300">
                  <span className="font-bold text-violet-400">Experience:</span> 21 Years
                </p>
              </div>
            </motion.div>

            <motion.a
              href="#contact"
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 inline-block relative overflow-hidden shadow-[0_5px_15px_rgba(139,92,246,0.4)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(139,92,246,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Let's Work Together</span>
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
