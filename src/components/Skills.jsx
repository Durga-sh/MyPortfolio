"use client";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiOpenjdk,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiRedis,
  SiSocketdotio,
  SiWebrtc,
  SiAmazonwebservices,
  SiGit,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "JAVA", icon: SiOpenjdk, color: "#f89820" },
    { name: "JavaScript", icon: SiJavascript, color: "#f0db4f" },
    { name: "React.js", icon: SiReact, color: "#61dafb" },
    { name: "Node.js", icon: SiNodedotjs, color: "#68a063" },
    { name: "TypeScript", icon: SiTypescript, color: "#007acc" },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6db33f" },
    { name: "MongoDB", icon: SiMongodb, color: "#4db33d" },
    { name: "MySQL", icon: SiMysql, color: "#00758f" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "Docker", icon: SiDocker, color: "#2496ed" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326ce5" },
    { name: "Redis", icon: SiRedis, color: "#dc382d" },
    { name: "WebSocket", icon: SiSocketdotio, color: "#000000" },
    { name: "WebRTC", icon: SiWebrtc, color: "#00FF00" },
    { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
    { name: "Git", icon: SiGit, color: "#F05032" },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden"
    >
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-violet-500/50 transition-all duration-300 shadow-lg hover:shadow-violet-500/20 group"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-violet-500/10 rounded-full group-hover:bg-violet-500/20 transition-colors duration-300">
                    <IconComponent
                      className="w-8 h-8"
                      style={{ color: skill.color }}
                    />
                  </div>
                  <span className="font-medium text-white text-lg">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
