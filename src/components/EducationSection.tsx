import React, { useState, useEffect } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const EducationSection: React.FC = () => {
  const [visibleNodes, setVisibleNodes] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleNodes(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const nodes = document.querySelectorAll('.timeline-node');
    nodes.forEach(node => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      degree: '12th — Commerce',
      institution: 'MasterMind Sr. Sec. School, Sarangpur',
      grade: '79%',
      period: 'Jul 2019 – Jun 2020',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      degree: 'B.Com (Computer Application)',
      institution: 'Vikram University, Ujjain',
      grade: '7.85 CGPA',
      period: 'Jul 2022 – May 2025',
      color: 'from-purple-500 to-pink-500'
    },
    {
      degree: 'MBA (Data Analytics & Marketing)',
      institution: 'Acropolis Institute of Management & Research, Indore',
      grade: 'Pursuing',
      period: 'Aug 2025 – Jun 2027',
      color: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <section id="education" className="py-20 px-6 relative">
      <div className="parallax-bg absolute inset-0"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-300">Academic journey and qualifications</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500 opacity-30"></div>

          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className={`timeline-node relative mb-16 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} animate-slide-in-bottom`}
              data-index={index}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Timeline Node */}
              <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${edu.color} border-4 border-gray-900 transition-all duration-500 ${visibleNodes[index] ? 'animate-pulse-glow scale-125' : 'scale-100'}`}>
                <div className="absolute inset-1 bg-white rounded-full"></div>
              </div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`}>
                <div className="bg-gray-800 rounded-xl p-6 neon-border hover:scale-105 transition-all duration-300 card-3d">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${edu.color} flex items-center justify-center`}>
                      <GraduationCap className="text-white" size={24} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-gray-300 mb-2">{edu.institution}</p>
                      
                      <div className="flex items-center gap-4 text-sm">
                        <span className={`px-3 py-1 bg-gradient-to-r ${edu.color} text-white rounded-full font-semibold`}>
                          {edu.grade}
                        </span>
                        
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar for Current Education */}
                  {edu.grade === 'Pursuing' && (
                    <div className="mt-4">
                      <div className="flex justify-between text-sm text-gray-400 mb-2">
                        <span>Progress</span>
                        <span>Starting Soon</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="h-2 bg-gradient-to-r from-teal-500 to-green-500 rounded-full w-0 animate-pulse"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;