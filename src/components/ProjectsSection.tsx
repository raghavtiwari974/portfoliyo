import React, { useState } from 'react';
import { ExternalLink, BarChart3, Target, X, ChevronRight } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Dmart — Sales Dashboard',
      duration: '6 months',
      description: 'Comprehensive sales dashboard built from raw data & statistics converted to interactive visual dashboard',
      details: [
        'Processed and analyzed 6 months of raw sales data',
        'Created interactive KPI dashboards with real-time metrics',
        'Implemented trend analysis and forecasting models',
        'Built automated reporting system for stakeholders',
        'Achieved 40% reduction in report generation time'
      ],
      technologies: ['Tableau', 'Excel', 'Data Analysis'],
      metrics: ['15+ KPIs tracked', '92% accuracy', '40% time saved'],
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Forever Living — Meta Ads Campaign',
      duration: '6 months',
      description: 'Planned & executed Meta ad campaigns on Facebook & Instagram with measurable results',
      details: [
        'Developed comprehensive social media advertising strategy',
        'Created and managed campaigns across Facebook & Instagram',
        'Optimized ad performance through A/B testing',
        'Implemented audience segmentation and targeting',
        'Delivered consistent ROI improvement over 6-month period'
      ],
      technologies: ['Meta Ads Manager', 'Facebook Analytics', 'Instagram Insights'],
      metrics: ['25% increase in ROI', '150K+ reach', '3.2% CTR'],
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="parallax-bg absolute inset-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-300">Featured work and case studies</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-gray-800 rounded-xl overflow-hidden neon-border hover:scale-[1.02] transition-all duration-300 cursor-pointer card-3d animate-slide-in-bottom"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setSelectedProject(index)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center neon-border group-hover:animate-pulse-glow">
                  {index === 0 ? <BarChart3 className="text-blue-400" size={20} /> : <Target className="text-purple-400" size={20} />}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-teal-400 transition-all duration-300">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full">
                    {project.duration}
                  </span>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metric} className="text-center">
                      <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                        {metric.split(' ')[0]}
                      </div>
                      <div className="text-xs text-gray-400">
                        {metric.split(' ').slice(1).join(' ')}
                      </div>
                    </div>
                  ))}
                </div>

                {/* View Details Button */}
                <button className="w-full flex items-center justify-center gap-2 mt-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 group-hover:animate-pulse-glow">
                  <span>View Details</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto neon-border" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                  {projects[selectedProject].title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-300"
                >
                  <X className="text-white" size={20} />
                </button>
              </div>

              <img
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Project Details</h4>
                  <ul className="space-y-3">
                    {projects[selectedProject].details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mt-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Key Metrics</h4>
                  <div className="space-y-4">
                    {projects[selectedProject].metrics.map((metric, index) => (
                      <div key={index} className="bg-gray-700 rounded-lg p-4">
                        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                          {metric}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <h5 className="text-lg font-bold text-white mb-3">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedProject].technologies.map((tech, index) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;