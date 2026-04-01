// @ts-nocheck
/* Style reminder: clonagem fiel da landing page Codrex com estética neo-tech comercial luminosa, branco dominante, preto pesado, gradientes ciano/azul e CTAs verdes. Preserve proporções, sombras suaves, badges flutuantes e ritmo comercial do original. */
import React from 'react';

const LogoCircular = ({ size = 'md', showGlow = true, className = '' }) => {
  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28',
  };

  return (
    <div className={`relative ${className}`}>
      {/* Glow effect */}
      {showGlow && (
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-40 animate-pulse" />
      )}
      
      {/* Logo container */}
      <div className={`relative ${sizes[size]} rounded-full bg-white p-2 shadow-xl border-2 border-transparent bg-clip-padding`}>
        {/* Gradient border effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 opacity-60 blur-sm" />
        
        {/* Logo image */}
        <div className="relative bg-white rounded-full p-1 h-full flex items-center justify-center overflow-hidden">
          <img
            src="https://customer-assets.emergentagent.com/job_ac07bcbd-0324-47e7-9203-4c5ef8567410/artifacts/t8ananwo_CodraxTechLogo.png"
            alt="Codrex Tech"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoCircular;
