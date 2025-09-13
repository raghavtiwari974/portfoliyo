import React from 'react';
import { BarChart, TrendingUp, Target, PieChart, Activity } from 'lucide-react';

const WhatIDoSection: React.FC = () => {
  const tools = [
    { name: 'Tableau', icon: BarChart, color: 'from-blue-500 to-cyan-500' },
    { name: 'Power BI', icon: PieChart, color: 'from-yellow-500 to-orange-500' },
    { name: 'Excel', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    { name: 'Google Ads', icon: Target, color: 'from-red-500 to-pink-500' },
    { name: 'Meta Ads', icon: Activity, color: 'from-purple-500 to-violet-500' }
  ];

  const services = [
    "Transform raw data into actionable business insights through advanced analytics and visualization",
    "Create compelling marketing campaigns across digital platforms with data-driven strategies",
    "Build interactive dashboards and reports that drive decision-making for stakeholders"
  ];

  return (
    <section id="what-i-do" className="py-20 px-6 relative">
      <div className="parallax-bg absolute inset-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 mb-4">
            What I Do?
          </h2>
          <p className="text-2xl text-gray-300 mt-8">Data Analytics & Marketing</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="/analytics-image.png"
                alt="Data Analytics and Marketing"
                className="w-full max-w-md h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Right Side - Tools and Services */}
          <div className="space-y-12 animate-slide-in-bottom">
            {/* Tools */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Tools & Platforms</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {tools.map((tool, index) => (
                  <div
                    key={tool.name}
                    className="group bg-gray-800 rounded-lg p-4 neon-border hover:scale-105 transition-all duration-300 cursor-pointer animate-slide-in-bottom"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center mb-3 group-hover:animate-pulse-glow`}>
                      <tool.icon className="text-white" size={24} />
                    </div>
                    <h4 className="text-white font-semibold">{tool.name}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Key Strengths</h3>
              <div className="space-y-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mt-2 animate-pulse-glow"></div>
                    <p className="text-gray-300 leading-relaxed">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;