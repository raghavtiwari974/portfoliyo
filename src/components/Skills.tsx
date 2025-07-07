import React, { useState, useEffect } from 'react';
import { Code, Database, Server, Globe, Zap, Cpu } from 'lucide-react';

const Skills = () => {
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

    const element = document.getElementById('skills-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Python', percentage: 90, icon: Code, color: 'from-green-400 to-blue-500', delay: 0 },
    { name: 'JavaScript', percentage: 85, icon: Globe, color: 'from-yellow-400 to-orange-500', delay: 200 },
    { name: 'React', percentage: 88, icon: Zap, color: 'from-cyan-400 to-blue-500', delay: 400 },
    { name: 'Node.js', percentage: 82, icon: Server, color: 'from-green-400 to-emerald-500', delay: 600 },
    { name: 'Database', percentage: 78, icon: Database, color: 'from-purple-400 to-pink-500', delay: 800 },
    { name: 'DevOps', percentage: 75, icon: Cpu, color: 'from-red-400 to-pink-500', delay: 1000 },
  ];

  const CircularProgress = ({ percentage, isVisible, delay, color }) => {
    const [currentPercentage, setCurrentPercentage] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          const interval = setInterval(() => {
            setCurrentPercentage(prev => {
              if (prev >= percentage) {
                clearInterval(interval);
                return percentage;
              }
              return prev + 1;
            });
          }, 20);
        }, delay);

        return () => clearTimeout(timer);
      }
    }, [isVisible, percentage, delay]);

    const strokeDasharray = 2 * Math.PI * 45;
    const strokeDashoffset = strokeDasharray - (strokeDasharray * currentPercentage) / 100;

    return (
      <div className="relative w-32 h-32">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-gray-700"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" className={`stop-color-${color.split(' ')[0].split('-')[1]}-400`} />
              <stop offset="100%" className={`stop-color-${color.split(' ')[1].split('-')[1]}-500`} />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">{currentPercentage}%</span>
        </div>
      </div>
    );
  };

  return (
    <section id="skills-section" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-50"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            🧠 Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Mastering the art of code with cutting-edge technologies and frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`group relative bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-all duration-500 transform hover:scale-105 hover:rotate-1 ${
                  isVisible ? 'animate-slide-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${skill.delay}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${skill.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <CircularProgress 
                    percentage={skill.percentage} 
                    isVisible={isVisible} 
                    delay={skill.delay}
                    color={skill.color}
                  />
                  
                  <h3 className="text-xl font-semibold text-white mt-4 mb-2">{skill.name}</h3>
                  <p className="text-gray-400 text-center text-sm">
                    {skill.percentage >= 85 ? 'Expert' : skill.percentage >= 75 ? 'Advanced' : 'Intermediate'}
                  </p>
                </div>

                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 p-1 rounded-full animate-pulse">
            <div className="bg-gray-900 px-8 py-4 rounded-full">
              <span className="text-white font-semibold">Always Learning, Always Growing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;