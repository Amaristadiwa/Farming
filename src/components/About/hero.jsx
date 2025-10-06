import React from 'react';
export const Hero = ({ title, subtitle, backgroundImage }) => {
  return (
    <div
      className="relative h-64 bg-cover bg-center rounded-2xl overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      <div className="relative h-full flex flex-col justify-center px-12">
        <h1 className="text-5xl font-bold text-white mb-2">{title}</h1>
        {subtitle && <p className="text-white/90">{subtitle}</p>}
      </div>
    </div>
  );
};
