import React, { useEffect, useState } from 'react';

const IntroSection: React.FC = () => {
  const [showInitials, setShowInitials] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowInitials(true), 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="parallax-bg fixed inset-0"></div>
      
      <div className="text-center relative z-10">
        {/* NS Initials with Circular Border */}
        <div className={`transition-all duration-800 ${showInitials ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
          <div className="relative w-32 h-32 rounded-full border-4 border-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 p-1 animate-pulse-glow">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400">
                NS
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default IntroSection;