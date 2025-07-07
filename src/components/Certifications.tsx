import React, { useState, useEffect } from 'react';
import { Award, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('certifications-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      category: 'Cloud',
      description: 'Comprehensive certification covering AWS cloud architecture and services',
      color: 'from-orange-400 to-red-500'
    },
    {
      id: 2,
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2023',
      category: 'Cloud',
      description: 'Advanced certification in Google Cloud Platform development',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 3,
      title: 'Python for Data Science',
      issuer: 'IBM',
      date: '2022',
      category: 'Python',
      description: 'Specialized certification in Python programming for data science',
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 4,
      title: 'React Advanced Patterns',
      issuer: 'Meta',
      date: '2023',
      category: 'Web Dev',
      description: 'Advanced React development patterns and best practices',
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 5,
      title: 'Docker & Kubernetes',
      issuer: 'Linux Foundation',
      date: '2023',
      category: 'DevOps',
      description: 'Container orchestration and deployment certification',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      id: 6,
      title: 'Machine Learning Engineer',
      issuer: 'Coursera',
      date: '2022',
      category: 'AI/ML',
      description: 'Comprehensive machine learning and AI certification',
      color: 'from-violet-400 to-indigo-500'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % certifications.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [certifications.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % certifications.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  const currentCert = certifications[currentSlide];

  return (
    <section id="certifications-section" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            🏅 Certifications
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Validated expertise through industry-recognized certifications
          </p>
        </div>

        {/* Slideshow */}
        <div className={`relative bg-gray-800 rounded-2xl overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="relative h-80 md:h-96">
            <div className={`absolute inset-0 bg-gradient-to-r ${currentCert.color} opacity-20 transition-all duration-500`}></div>
            
            <div className="relative z-10 h-full flex items-center justify-center p-8">
              <div className="text-center">
                <div className={`inline-block p-6 rounded-full bg-gradient-to-r ${currentCert.color} mb-6 animate-pulse`}>
                  <Award className="w-12 h-12 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">{currentCert.title}</h3>
                <p className="text-xl text-gray-300 mb-2">{currentCert.issuer}</p>
                <p className="text-lg text-gray-400 mb-4">{currentCert.date}</p>
                
                <div className="inline-block bg-gray-700 px-4 py-2 rounded-full mb-4">
                  <span className="text-cyan-400 font-medium">{currentCert.category}</span>
                </div>
                
                <p className="text-gray-400 max-w-2xl mx-auto">{currentCert.description}</p>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Slide indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-cyan-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowModal(true)}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Eye className="w-5 h-5" />
              View All Certifications
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-700 flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white">All Certifications</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-gray-700 rounded-full transition-colors duration-300"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
              
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="group bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className={`p-4 rounded-full bg-gradient-to-r ${cert.color} mb-4 inline-block`}>
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    
                    <h4 className="text-lg font-bold text-white mb-2">{cert.title}</h4>
                    <p className="text-gray-300 mb-1">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm mb-3">{cert.date}</p>
                    
                    <div className="inline-block bg-gray-600 px-3 py-1 rounded-full mb-3">
                      <span className="text-cyan-400 text-sm font-medium">{cert.category}</span>
                    </div>
                    
                    <p className="text-gray-400 text-sm">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;