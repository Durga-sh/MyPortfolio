import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate">
          About <span className="text-indigo-500">Me</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate">
            <div className="relative rounded-lg overflow-hidden max-w-md mx-auto md:mx-0">
              <img 
                src="assets/images/project1.jpg" 
                alt="Your Name" 
                className="w-full object-cover rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent"></div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 animate delay-1">
              Professional <span className="text-indigo-500">Developer</span>
            </h3>
            <p className="text-gray-300 mb-4 animate delay-2">
              I'm a passionate developer with extensive experience in creating innovative digital solutions. 
              With a strong foundation in both front-end and back-end technologies, I bring ideas to life through 
              clean, efficient code and intuitive user experiences.
            </p>
            <p className="text-gray-300 mb-6 animate delay-3">
              My goal is to build applications that not only meet but exceed client expectations, 
              focusing on performance, accessibility, and cutting-edge design principles.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 animate delay-4">
              <div>
                <p className="text-gray-300"><span className="font-bold text-indigo-400">Name:</span>Durgashankar Puhan</p>
              </div>
              <div>
                <p className="text-gray-300"><span className="font-bold text-indigo-400">Email:</span> puhandurgsankarp@gmail.com</p>
              </div>
              <div>
                <p className="text-gray-300"><span className="font-bold text-indigo-400">Location:</span>Bhubaneswar,Odisha</p>
              </div>
              <div>
                <p className="text-gray-300"><span className="font-bold text-indigo-400">Experience:</span> 21 Years</p>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 animate delay-4"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;