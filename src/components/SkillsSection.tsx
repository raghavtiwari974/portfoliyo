import React from 'react';
import { Target, BarChart, TrendingUp, FileSpreadsheet, PieChart, Activity } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skills = [
    {
      title: 'Digital Marketing & Meta Ads',
      description: 'Facebook & Instagram campaigns',
      icon: Target,
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-400'
    },
    {
      title: 'Analysis',
      description: 'Statistical data analysis',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      borderColor: 'border-green-400'
    },
    {
      title: 'Visualization',
      description: 'Interactive dashboards',
      icon: BarChart,
      color: 'from-purple-500 to-violet-500',
      borderColor: 'border-purple-400'
    },
    {
      title: 'Microsoft Office (Excel)',
      description: 'Advanced formulas & macros',
      icon: FileSpreadsheet,
      color: 'from-emerald-500 to-teal-500',
      borderColor: 'border-emerald-400'
    },
    {
      title: 'Tableau',
      description: 'Business intelligence',
      icon: Activity,
      color: 'from-orange-500 to-red-500',
      borderColor: 'border-orange-400'
    },
    {
      title: 'Power BI',
      description: 'Data modeling & reporting',
      icon: PieChart,
      color: 'from-yellow-500 to-orange-500',
      borderColor: 'border-yellow-400'
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="parallax-bg absolute inset-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 mb-4">
            Skills
          </h2>
          <p className="text-xl text-gray-300">Technical expertise and core competencies</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className={`group bg-gray-800 rounded-xl p-6 neon-border ${skill.borderColor} hover:scale-105 transition-all duration-300 cursor-pointer card-3d animate-slide-in-bottom`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:animate-pulse-glow`}>
                  <skill.icon className="text-white" size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-teal-400 transition-all duration-300">
                  {skill.title}
                </h3>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {skill.description}
                </p>
                
                {/* Skill level indicator */}
                <div className="mt-4 w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 group-hover:animate-pulse-glow`}
                    style={{ width: `${85 + Math.random() * 15}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;