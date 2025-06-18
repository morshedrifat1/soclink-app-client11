import React from 'react';
import { Heart, Users, MapPin, HandHeart, Home, Calendar } from "lucide-react"

const LoadingSpiner = () => {
    const icons = [
    { Icon: Users, delay: 0 },
    { Icon: Heart, delay: 0.2 },
    { Icon: MapPin, delay: 0.4 },
    { Icon: HandHeart, delay: 0.6 },
    { Icon: Home, delay: 0.8 },
    { Icon: Calendar, delay: 1.0 },
  ]

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="relative w-16 h-16">
      {/* Central pulsing core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-5 h-5 bg-gradient-to-r from-primary to-secondary rounded-full opacity-80" />
        <div className="absolute w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full animate-ping opacity-20" />
      </div>

      {/* Orbiting community icons */}
      <div className="absolute inset-0 animate-spin-slow">
        {icons.map(({ Icon, delay }, index) => (
          <div
            key={index}
            className="absolute w-2 h-2 text-[#0ea2e6] bg-white shadow p-4 flex justify-center items-center rounded-full"
            style={{
              top: "50%",
              left: "50%",
              transform: `
                translate(-50%, -50%) 
                rotate(${index * 60}deg) 
                translateY(-45px) 
                rotate(-${index * 60}deg)
              `,
              animationDelay: `${delay}s`,
            }}
          >
            <div className="animate-bounce-gentle">
              <Icon size={17} className="drop-shadow-sm animate-pulse-gentle " style={{ animationDelay: `${delay}s` }} />
            </div>
          </div>
        ))}
      </div>

      {/* Connecting rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-gray-200 rounded-full animate-pulse opacity-30" />
        <div className="absolute w-14 h-14 border border-[#1b6fb9] rounded-full animate-ping opacity-10" />
      </div>
    </div>
    </div>
    );
};

export default LoadingSpiner;