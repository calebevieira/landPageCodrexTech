// @ts-nocheck
/* Style reminder: clonagem fiel da landing page Codrex com estética neo-tech comercial luminosa, branco dominante, preto pesado, gradientes ciano/azul e CTAs verdes. Preserve proporções, sombras suaves, badges flutuantes e ritmo comercial do original. */
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Hide tooltip after 5 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleClick = () => {
    window.open(
      'https://wa.me/5531982734705?text=Ol%C3%A1%2C%20vim%20pela%20landing%20page%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os.',
      '_blank'
    );
  };

  return (
    <>
      {/* Floating Button - Enhanced */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        {/* Outer glow ring */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full blur-xl opacity-60 animate-pulse-glow" />
        
        {/* Button */}
        <button
          onClick={handleClick}
          className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-5 rounded-full shadow-2xl shadow-green-500/50 transition-all duration-300 hover:scale-110 group"
          aria-label="Contact via WhatsApp"
        >
          <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" strokeWidth={2} />
          
          {/* Pulse Ring */}
          <span className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping" />
        </button>
      </div>

      {/* Tooltip - Premium */}
      {showTooltip && isVisible && (
        <div
          className={`fixed bottom-24 right-6 z-50 transition-all duration-500 ${
            showTooltip ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-green-500/30 p-5 max-w-xs border-2 border-green-200/50 relative">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-3 -right-3 bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 rounded-full p-1.5 transition-all hover:scale-110 shadow-lg"
            >
              <X className="w-4 h-4 text-gray-600" strokeWidth={2.5} />
            </button>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-xl">
                <MessageCircle className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="space-y-2">
                <div className="font-black text-gray-900 text-lg">Precisa de ajuda?</div>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">
                  Fale conosco agora pelo WhatsApp. <span className="font-bold text-green-600">Atendimento rápido!</span>
                </p>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r-2 border-b-2 border-green-200/50 transform rotate-45" />
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingWhatsApp;
