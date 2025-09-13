import React from 'react';
import { Download } from 'lucide-react';

const HeroSection: React.FC = () => {
  const handleDownloadResume = () => {
    // Create a link to download resume PDF
    const link = document.createElement('a');
    link.href = '/resume-neeraj-sharma.pdf'; // Place your resume PDF in public folder
    link.download = 'Neeraj_Sharma_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="parallax-bg absolute inset-0"></div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Profile Info */}
        <div className="text-center md:text-left animate-slide-in-left">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 mb-6">
            Neeraj Sharma
          </h1>
          

          <h2 className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 mb-6 font-semibold">
            Digital Marketing & Data Analytics
          </h2>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
            Analytics, Visualization, Marketing — I enjoy playing with numbers and organizing data into meaningful stories.
            <br /><br />
            My field of interest are building useful reports from large numbers & data and also in areas related to Marketing.
          </p>

          <button 
            onClick={handleDownloadResume}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg neon-glow hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
          >
            <Download size={20} />
            Download Resume
          </button>
        </div>

        {/* Right Side - Animated GIF */}
        <div className="flex justify-center animate-slide-in-bottom">
          <div className="relative">
            <img 
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGY3NXhrcm9pcmk2NGViZDcxNDNwbmIzbGlpMjFiOGk0Z3l0b2J5aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPEqDGUULpEU0aQ/giphy.gif"
              alt="Animated GIF"
              className="max-w-full h-auto rounded-lg shadow-2xl theme-filter"
              style={{ maxHeight: '500px' }}
            />
          </div>
        </div>
      </div>

      <style>{`
        .theme-filter {
          filter: hue-rotate(60deg) saturate(1.5) brightness(1.1) contrast(1.2);
          background: linear-gradient(45deg, rgba(142, 17, 226, 0.89), rgba(139, 7, 255, 0.87));
          background-blend-mode: overlay;
        }
        
        .theme-filter:hover {
          filter: hue-rotate(60deg) saturate(1.8) brightness(1.2) contrast(1.3);
          transition: filter 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;