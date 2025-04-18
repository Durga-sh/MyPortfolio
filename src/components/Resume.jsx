import React, { useState } from 'react';

function Resume() {
  const [activeTab, setActiveTab] = useState('education');
  
  const education = [

    {
      degree: "Bachelor's in Computer Science",
      institution: "Centurion University Of Technology And Management",
      duration: "2022 - 2026",
      CGPA:"9.1",
      description: "Graduated with honors. Participated in various coding competitions and hackathons.",
    },
  ];

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
  ];

  const certifications = [
    {
      name: "AWS Cloud Foundation",
      issuer: "Amazon Web Services",
      year: "2024",
    }

  ];

  return (
    <section id="resume" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate">
          My <span className="text-indigo-500">Resume</span>
        </h2>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm animate">
            <button
              onClick={() => setActiveTab('education')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                activeTab === 'education' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  
              }`}
            >
              Education
            </button>
       
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeTab === 'certifications' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Certifications
            </button>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {activeTab === 'education' && (
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className={`bg-gray-700 rounded-lg p-6 shadow-lg animate delay-${index + 1}`}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                    <span className="inline-block px-3 py-1 bg-indigo-900 text-indigo-300 rounded-full text-sm mt-2 md:mt-0">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-2">{item.institution}</p>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'experience' && (
            <div className="space-y-8">
              {experience.map((item, index) => (
                <div key={index} className={`bg-gray-700 rounded-lg p-6 shadow-lg animate delay-${index + 1}`}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{item.position}</h3>
                    <span className="inline-block px-3 py-1 bg-indigo-900 text-indigo-300 rounded-full text-sm mt-2 md:mt-0">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-2">{item.company}</p>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'certifications' && (
            <div className="space-y-8">
              {certifications.map((item, index) => (
                <div key={index} className={`bg-gray-700 rounded-lg p-6 shadow-lg animate delay-${index + 1}`}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                    <span className="inline-block px-3 py-1 bg-indigo-900 text-indigo-300 rounded-full text-sm mt-2 md:mt-0">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-gray-400">{item.issuer}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="assets/Durga Resume.pdf" 
            download="YourName_Resume.pdf"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 inline-flex items-center animate"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;