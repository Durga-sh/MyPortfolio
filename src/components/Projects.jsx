import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "FINTRACK",
      description: "A fully responsive e-commerce website with user authentication, product filtering, and shopping cart functionality.",
      image: "assets/images/project1.jpg",
      category: "Web Development",
      technologies: ["Angular", "Spring Boot", "MySQL", "Stripe"],
      demoLink: "#",
      codeLink: "#",
    },
   
    {
      id: 2,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing skills, projects, and professional experience.",
      image: "/assets/images/project3.jpg",
      category: "Web Development",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 4,
      title: "Travel Blog",
      description: "A blog platform for travel enthusiasts to share their experiences and travel tips.",
      image: "/assets/images/project3.jpg",
      category: "Web Development",
      technologies: ["Next.js", "GraphQL", "Tailwind CSS"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "An application that helps users track workouts, nutrition, and overall fitness progress.",
      image: "/assets/images/project2.jpg",
      category: "Mobile App",
      technologies: ["Flutter", "Firebase", "Material UI"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description: "A weather application that provides real-time weather updates and forecasts.",
      image: "/assets/images/project1.jpg",
      category: "Data Visualization",
      technologies: ["React", "Chart.js", "Weather API"],
      demoLink: "#",
      codeLink: "#",
    },
  ];

  const categories = ['all', ...new Set(projects.map(project => project.category))];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate">
          My <span className="text-indigo-500">Projects</span>
        </h2>
        
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 animate">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  filter === category 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/Durga-sh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-indigo-500 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 inline-flex items-center animate"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;