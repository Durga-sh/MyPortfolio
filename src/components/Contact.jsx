import React, { useState, useRef} from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Replace these with your actual EmailJS credentials
    const serviceId = 'service_hpgftzo';
    const templateId = 'template_g2ph7tm';
    const publicKey = 'RStAxwmiIL01zHFHu';
    
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setIsSubmitting(false);
        setSubmitMessage({
          type: 'success',
          text: 'Your message has been sent successfully!'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Clear message after 5 seconds
        setTimeout(() => {
          setSubmitMessage(null);
        }, 5000);
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        setIsSubmitting(false);
        setSubmitMessage({
          type: 'error',
          text: 'Failed to send message. Please try again later.'
        });
        
        // Clear error message after 5 seconds
        setTimeout(() => {
          setSubmitMessage(null);
        }, 5000);
      });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-700 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-violet-700 rounded-full filter blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact <span className="text-violet-500">Me</span>
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <motion.div 
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)] h-full border border-gray-800 hover:border-violet-500/30 transition-all duration-500">
              <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                I'm currently available for freelance work or full-time positions. 
                Feel free to reach out if you have a project in mind or just want to say hello!
              </p>
              
              <div className="space-y-5">
                <motion.div 
                  className="flex items-start group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-violet-900/30 p-3 rounded-lg mr-4 flex-shrink-0 group-hover:bg-violet-900/50 transition-all duration-300 border border-violet-500/30 group-hover:border-violet-500/70">
                    <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <a href="mailto:puhandurgsankarp@gmail.com" className="text-gray-300 hover:text-violet-400 transition-colors duration-300 break-words">
                      puhandurgsankarp@gmail.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-violet-900/30 p-3 rounded-lg mr-4 flex-shrink-0 group-hover:bg-violet-900/50 transition-all duration-300 border border-violet-500/30 group-hover:border-violet-500/70">
                    <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold text-white">Phone</h4>
                    <a href="tel:+917205882737" className="text-gray-300 hover:text-violet-400 transition-colors duration-300">
                      +91 7205882737
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-violet-900/30 p-3 rounded-lg mr-4 flex-shrink-0 group-hover:bg-violet-900/50 transition-all duration-300 border border-violet-500/30 group-hover:border-violet-500/70">
                    <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold text-white">Location</h4>
                    <p className="text-gray-300">Bhubaneswar, ODISHA</p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="mt-8 flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <a href="https://www.instagram.com/puhandurgasankar/" className="bg-gray-800/80 hover:bg-violet-900/30 p-3 rounded-full transition-all duration-300 border border-gray-700 hover:border-violet-500/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                  <svg className="w-5 h-5 text-violet-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/durgashankar-puhan-a01a3424b/" className="bg-gray-800/80 hover:bg-violet-900/30 p-3 rounded-full transition-all duration-300 border border-gray-700 hover:border-violet-500/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                  <svg className="w-5 h-5 text-violet-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://github.com/Durga-sh" className="bg-gray-800/80 hover:bg-violet-900/30 p-3 rounded-full transition-all duration-300 border border-gray-700 hover:border-violet-500/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                  <svg className="w-5 h-5 text-violet-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-gray-800 hover:border-violet-500/30 transition-all duration-500">
              <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>
              
              <form ref={form} onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                      placeholder="John Doe"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>
                
                <motion.div 
                  className="mb-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                    placeholder="Project Inquiry"
                  />
                </motion.div>
                
                <motion.div 
                  className="mb-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                </motion.div>
                
                {submitMessage && (
                  <motion.div 
                    className={`mb-5 p-3 rounded-lg ${
                      submitMessage.type === 'success' ? 'bg-green-900/30 text-green-400 border border-green-500/30' : 'bg-red-900/30 text-red-400 border border-red-500/30'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {submitMessage.text}
                  </motion.div>
                )}
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex justify-center shadow-[0_5px_15px_rgba(139,92,246,0.4)] ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 20px rgba(139,92,246,0.5)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
