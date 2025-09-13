import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const responsibilities = [
    'Technical support and troubleshooting for ASUS devices',
    'Device configuration and software installation guidance', 
    'Service concern handling and resolution management',
    'Customer escalation management and satisfaction tracking',
    'Product knowledge maintenance for latest ASUS products'
  ];

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="parallax-bg absolute inset-0"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-300">Professional work history</p>
        </div>

        {/* Experience Card */}
        <div className="animate-slide-in-bottom">
          <div className="bg-gray-800 rounded-xl p-8 neon-border hover:scale-[1.02] transition-all duration-300 card-3d">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Briefcase className="text-white" size={28} />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Customer Executive</h3>
                  <p className="text-gray-300">for ASUS Pvt. Ltd.</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-400">
                <Calendar size={20} />
                <span className="font-medium">Apr 2025 – Sep 2025</span>
              </div>
            </div>

            {/* Company Info */}
            <div className="flex items-center gap-6 mb-6 p-4 bg-gray-700 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TP</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Teleperformance</p>
                  <p className="text-gray-400 text-sm">Global Leader in Digital Services</p>
                </div>
              </div>

              <div className="hidden md:block w-px h-12 bg-gray-600"></div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ASUS</span>
                </div>
                <div>
                  <p className="text-white font-semibold">ASUS Pvt. Ltd.</p>
                  <p className="text-gray-400 text-sm">Technology & Innovation</p>
                </div>
              </div>
            </div>

            {/* Responsibilities */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <CheckCircle className="text-teal-400" size={24} />
                Key Responsibilities
              </h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                {responsibilities.map((responsibility, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gray-700 rounded-lg hover:bg-gray-650 transition-colors duration-300 animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mt-2 animate-pulse-glow"></div>
                    <p className="text-gray-300 leading-relaxed">{responsibility}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement Metrics */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-1">
                  6 months
                </div>
                <div className="text-gray-400 text-sm">Duration</div>
              </div>
              
              <div className="text-center p-4 bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-1">
                  95%+
                </div>
                <div className="text-gray-400 text-sm">Customer Satisfaction</div>
              </div>
              
              <div className="text-center p-4 bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-400 mb-1">
                  500+
                </div>
                <div className="text-gray-400 text-sm">Issues Resolved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;