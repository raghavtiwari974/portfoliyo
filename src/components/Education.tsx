import React, { useState, useEffect } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('education-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Technology',
      field: 'Computer Science Engineering',
      institution: 'Tech University',
      location: 'Delhi, India',
      duration: '2019 - 2023',
      grade: 'CGPA: 8.5/10',
      achievements: [
        'Dean\'s List for Academic Excellence',
        'Winner of National Coding Competition',
        'President of Programming Club'
      ],
      delay: 0
    },
    {
      id: 2,
      degree: 'Higher Secondary',
      field: 'Science (PCM)',
      institution: 'St. Xavier\'s School',
      location: 'Mumbai, India',
      duration: '2017 - 2019',
      grade: 'Percentage: 92%',
      achievements: [
        'Science Olympiad Gold Medal',
        'Mathematics Excellence Award',
        'School Topper in Computer Science'
      ],
      delay: 300
    }
  ];

  return (
    <section id="education-section" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyan-500 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            🎓 Education Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building a strong foundation through continuous learning and academic excellence
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`group relative bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-all duration-500 transform hover:scale-105 ${
                isVisible ? 'animate-slide-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${edu.delay}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <p className="text-xl text-gray-300 mb-2">{edu.field}</p>
                      <p className="text-lg text-gray-400">{edu.institution}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:text-right">
                      <div className="flex items-center gap-2 text-cyan-400 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-400">
                        <Award className="w-4 h-4" />
                        <span className="font-medium">{edu.grade}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-4">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 p-1 rounded-full animate-pulse">
            <div className="bg-gray-900 px-6 py-3 rounded-full">
              <span className="text-white font-semibold">Continuous Learning & Growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;