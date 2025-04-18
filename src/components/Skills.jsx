import React from 'react';

function Skills() {
  const skills = [
    { name: "JAVA", percentage: 90 },
    { name: "JavaScript", percentage: 95 },
    { name: "React.js", percentage: 90 },
    { name: "Node.js", percentage: 95 },
    { name: "TypeScript", percentage: 70 },
    { name: "Spring Boot", percentage: 90},
    { name: "MongoDB", percentage: 90 },
    { name: "Database Management", percentage: 75 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate">
          My <span className="text-indigo-500">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className={`animate delay-${index % 4 + 1}`}>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-white">{skill.name}</span>
                <span className="text-indigo-400">{skill.percentage}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-indigo-600 rounded-full origin-left transform transition-all duration-1000"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 animate">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {["Java","JavaScript","React", "Next.js", "Node.js", "Express","Spring Boot", "MongoDB", "MySQL", "Tailwind CSS", "Material UI"].map((tech, index) => (
              <div 
                key={index} 
                className={`bg-gray-800 rounded-lg px-5 py-3 text-gray-200 shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1 transition-all duration-300 animate delay-${index % 4 + 1}`}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
