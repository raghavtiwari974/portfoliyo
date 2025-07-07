import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Code, Zap } from 'lucide-react';
import profileImg from '../profile.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const toRotate = [
    "Full Stack Developer",
    "Python Enthusiast", 
    "Automation Expert",
    "Web Developer"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      setText(
        isDeleting 
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, toRotate]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full p-1 animate-spin-slow">
              <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                <div className="w-40 h-40 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-36 h-36 object-cover rounded-full border-4 border-cyan-400 shadow-lg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900 animate-ping"></div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
          Raghav Tiwari
        </h1>
        
        <div className="text-2xl md:text-3xl text-gray-300 mb-6 h-12">
          <span className="border-r-2 border-cyan-400 pr-2 animate-pulse">
            {text}
          </span>
        </div>

        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
          Passionate developer crafting digital experiences with Python, web technologies, and automation. 
          Building the future, one line of code at a time.
        </p>

        <div className="flex items-center justify-center gap-2 mb-8 text-gray-400 animate-fade-in-up animation-delay-1000">
          <MapPin className="w-5 h-5" />
          <span>Available for Remote Work</span>
        </div>

        <div className="flex justify-center gap-6 mb-12 animate-fade-in-up animation-delay-2000">
          <a href="#" className="group relative p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110">
            <Github className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>
          <a href="#" className="group relative p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110">
            <Linkedin className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>
          <a href="#contact" className="group relative p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110">
            <Mail className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>
        </div>

        <div className="flex justify-center gap-4 animate-fade-in-up animation-delay-3000">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              View My Work
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
          </button>
          <button className="group relative px-8 py-4 border-2 border-cyan-500 rounded-full font-semibold text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105">
            <span className="relative z-10">Download Resume</span>
            <div className="absolute inset-0 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full p-1">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;