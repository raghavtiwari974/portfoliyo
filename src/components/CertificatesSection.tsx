import React, { useState, useEffect } from 'react';
import { Award, Eye, X, Grid3X3 } from 'lucide-react';

const CertificatesSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'floating' | 'grid'>('floating');
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const certificates = [
    {
      title: 'Microsoft Office Specialist',
      issuer: 'Microsoft',
      date: '2024',
      color: 'from-orange-500 to-red-500',
      description: 'Advanced proficiency in Microsoft Office applications including Excel, Word, and PowerPoint.',
      skills: ['Excel', 'Data Analysis', 'Formulas', 'Macros']
    },
    {
      title: 'Tableau Desktop Specialist',
      issuer: 'Tableau',
      date: '2024',
      color: 'from-blue-500 to-indigo-600',
      description: 'Professional certification in data visualization and business intelligence using Tableau.',
      skills: ['Data Visualization', 'Dashboard Design', 'Business Intelligence']
    },
    {
      title: 'Microsoft Power BI Data Analyst',
      issuer: 'Microsoft',
      date: '2024',
      color: 'from-yellow-500 to-orange-500',
      description: 'Certification in data modeling, visualization, and reporting with Power BI.',
      skills: ['Power BI', 'Data Modeling', 'DAX', 'Power Query']
    },
    {
      title: 'Google Ads Certified',
      issuer: 'Google',
      date: '2023',
      color: 'from-green-500 to-teal-500',
      description: 'Professional certification in Google Ads campaign management and optimization.',
      skills: ['Google Ads', 'Campaign Management', 'PPC', 'ROI Optimization']
    },
    {
      title: 'Meta Social Media Marketing',
      issuer: 'Meta',
      date: '2023',
      color: 'from-purple-500 to-pink-500',
      description: 'Certification in Facebook and Instagram advertising and social media marketing.',
      skills: ['Facebook Ads', 'Instagram Marketing', 'Social Media Strategy']
    },
    {
      title: 'Data Analytics Certificate',
      issuer: 'Coursera',
      date: '2023',
      color: 'from-teal-500 to-cyan-500',
      description: 'Comprehensive certification in data analytics, statistics, and data-driven decision making.',
      skills: ['Data Analysis', 'Statistics', 'Data Cleaning', 'Insights']
    }
  ];

  // Floating animation positions
  const [floatingPositions, setFloatingPositions] = useState<Array<{x: number, y: number, rotation: number}>>([]);

  useEffect(() => {
    // Initialize random positions for floating mode
    const positions = certificates.map(() => ({
      x: Math.random() * 200 - 100,
      y: Math.random() * 100 - 50,
      rotation: Math.random() * 20 - 10
    }));
    setFloatingPositions(positions);

    // Update positions periodically for floating effect
    const interval = setInterval(() => {
      setFloatingPositions(prev => 
        prev.map(pos => ({
          x: pos.x + (Math.random() - 0.5) * 20,
          y: pos.y + (Math.random() - 0.5) * 20,
          rotation: pos.rotation + (Math.random() - 0.5) * 5
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="certificates" className="py-20 px-6 relative min-h-screen">
      <div className="parallax-bg absolute inset-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 mb-4">
            Certificates
          </h2>
          <p className="text-xl text-gray-300 mb-8">Professional certifications and achievements</p>
          
          {/* View Mode Toggle */}
          <div className="inline-flex bg-gray-800 rounded-lg p-1 neon-border">
            <button
              onClick={() => setViewMode('floating')}
              className={`px-6 py-3 rounded-md transition-all duration-300 flex items-center gap-2 ${
                viewMode === 'floating'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Award size={20} />
              Floating View
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-6 py-3 rounded-md transition-all duration-300 flex items-center gap-2 ${
                viewMode === 'grid'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Grid3X3 size={20} />
              Grid View
            </button>
          </div>
        </div>

        {/* Floating Mode */}
        {viewMode === 'floating' && (
          <div className="relative h-96 overflow-hidden">
            {certificates.map((cert, index) => (
              <div
                key={cert.title}
                className="absolute cursor-pointer animate-float card-3d"
                style={{
                  transform: `translate(${floatingPositions[index]?.x || 0}px, ${floatingPositions[index]?.y || 0}px) rotate(${floatingPositions[index]?.rotation || 0}deg)`,
                  transition: 'transform 3s ease-in-out',
                  left: `${20 + (index % 3) * 30}%`,
                  top: `${20 + Math.floor(index / 3) * 40}%`,
                  animationDelay: `${index * 0.5}s`
                }}
                onClick={() => setSelectedCert(index)}
              >
                <div className={`w-48 h-32 bg-gray-800 rounded-xl p-4 neon-border hover:scale-110 transition-all duration-300 bg-gradient-to-br ${cert.color} opacity-90 hover:opacity-100`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="text-white" size={20} />
                    <span className="text-white font-semibold text-sm">{cert.issuer}</span>
                  </div>
                  <h3 className="text-white font-bold text-sm mb-1 line-clamp-2">{cert.title}</h3>
                  <p className="text-gray-200 text-xs">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Grid Mode */}
        {viewMode === 'grid' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={cert.title}
                className="group bg-gray-800 rounded-xl p-6 neon-border hover:scale-105 transition-all duration-300 cursor-pointer card-3d animate-slide-in-bottom"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedCert(index)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center`}>
                    <Award className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-teal-400 transition-all duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{cert.issuer} • {cert.date}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span key={skill} className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded">
                      {skill}
                    </span>
                  ))}
                </div>

                <button className="w-full flex items-center justify-center gap-2 py-2 text-blue-400 hover:text-blue-300 transition-colors duration-300">
                  <Eye size={16} />
                  View Certificate
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Certificate Modal */}
      {selectedCert !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedCert(null)}>
          <div className="bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto neon-border" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${certificates[selectedCert].color} flex items-center justify-center`}>
                    <Award className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                      {certificates[selectedCert].title}
                    </h3>
                    <p className="text-gray-300">{certificates[selectedCert].issuer} • {certificates[selectedCert].date}</p>
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-300"
                >
                  <X className="text-white" size={20} />
                </button>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {certificates[selectedCert].description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-bold text-white mb-3">Skills Covered</h4>
                <div className="flex flex-wrap gap-3">
                  {certificates[selectedCert].skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mock certificate preview */}
              <div className={`w-full h-64 bg-gradient-to-br ${certificates[selectedCert].color} rounded-lg flex items-center justify-center mb-4 neon-border`}>
                <div className="text-center text-white">
                  <Award size={48} className="mx-auto mb-4" />
                  <div className="text-2xl font-bold mb-2">{certificates[selectedCert].title}</div>
                  <div className="text-lg">Neeraj Sharma</div>
                  <div className="text-sm mt-2">Issued by {certificates[selectedCert].issuer}</div>
                </div>
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300">
                View Full Certificate
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;