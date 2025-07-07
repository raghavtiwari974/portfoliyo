import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Sparkles, Zap } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('projects-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-purple-400 via-pink-500 to-red-500',
      delay: 0
    },
    {
      id: 2,
      title: 'AI Task Automation',
      description: 'Python-based automation tool that uses machine learning to optimize workflow processes and reduce manual tasks by 80%.',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-green-400 via-blue-500 to-purple-600',
      delay: 200
    },
    {
      id: 3,
      title: 'Real-time Chat App',
      description: 'Modern chat application with real-time messaging, file sharing, and video calls. Built with React and Socket.io.',
      technologies: ['React', 'Socket.io', 'Node.js', 'WebRTC'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
      delay: 400
    },
    {
      id: 4,
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for data analytics with real-time charts, filters, and export functionality.',
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-orange-400 via-red-500 to-pink-500',
      delay: 600
    },
    {
      id: 5,
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.',
      technologies: ['React Native', 'OpenWeather API', 'Redux'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-blue-400 via-cyan-500 to-teal-500',
      delay: 800
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'This very portfolio website! Built with React, Tailwind CSS, and modern animations.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-violet-400 via-purple-500 to-indigo-600',
      delay: 1000
    }
  ];

  return (
    <section id="projects-section" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            📁 Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover my latest work and creative solutions to complex problems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-700 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 ${
                isVisible ? 'animate-slide-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${project.delay}ms` }}
            >
              {/* Animated disco effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10"></div>

              <div className="relative z-10 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${project.gradient} group-hover:scale-110 transition-transform duration-300`}>
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300 group-hover:scale-110"
                    >
                      <ExternalLink className="w-4 h-4 text-cyan-400" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300 group-hover:scale-110"
                    >
                      <Github className="w-4 h-4 text-cyan-400" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium hover:bg-gray-600 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Live Project
                  </button>
                  <button className="flex-1 border-2 border-cyan-500 text-cyan-500 px-4 py-2 rounded-full font-medium hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                    <Github className="w-4 h-4" />
                    View Code
                  </button>
                </div>
              </div>

              {/* Glowing border effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm`}></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              View All Projects
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;