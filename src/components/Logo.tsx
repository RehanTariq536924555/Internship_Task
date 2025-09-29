import { useState, useEffect } from 'react';

const Logo = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <div className="flex items-center space-x-4">
      <div 
        className={`relative w-16 h-16 transform transition-all duration-1000 ${
          isAnimated ? 'rotate-0 scale-100' : 'rotate-180 scale-0'
        }`}
      >
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-1">
          <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
            {/* Inner content */}
            <div className="relative">
              <span className="text-white font-black text-2xl">D</span>
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
        
        {/* Rotating ring */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-cyan-400 to-purple-600 animate-spin" style={{animationDuration: '3s'}}></div>
      </div>
      
      <div 
        className={`transition-all duration-1000 delay-300 ${
          isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}
      >
        <span className="text-4xl font-black">
          <span className="text-gradient neon-glow">Dev</span>
          <span className="text-white">Connect</span>
        </span>
        <div className="text-xs text-gray-400 font-medium tracking-widest uppercase">
          Elite Network
        </div>
      </div>
    </div>
  );
};

export default Logo;