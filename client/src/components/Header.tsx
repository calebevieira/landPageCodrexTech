// @ts-nocheck
/* Style reminder: clonagem fiel da landing page Codrex com estética neo-tech comercial luminosa, branco dominante, preto pesado, gradientes ciano/azul e CTAs verdes. Preserve proporções, sombras suaves, badges flutuantes e ritmo comercial do original. */
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import LogoCircular from './LogoCircular';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-2xl shadow-2xl shadow-cyan-500/10'
          : 'bg-white/60 backdrop-blur-xl'
      }`}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-3 group"
          >
            <LogoCircular size="md" showGlow={!isScrolled} />
            <span className="text-xl font-bold text-gray-900 hidden sm:block group-hover:text-cyan-600 transition-colors">
              CODREX
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-gray-700 hover:text-cyan-600 font-medium transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('beneficios')}
              className="text-gray-700 hover:text-cyan-600 font-medium transition-colors"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-cyan-600 font-medium transition-colors"
            >
              Sobre
            </button>
            <Button
              onClick={() =>
                window.open(
                  'https://wa.me/5531982734705?text=Ol%C3%A1%2C%20vim%20pela%20landing%20page%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os.',
                  '_blank'
                )
              }
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg shadow-green-500/30 transition-all hover:shadow-xl hover:shadow-green-500/40 hover:scale-105"
            >
              Chamar no WhatsApp
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-cyan-600 transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-6 pb-4 flex flex-col space-y-4 border-t border-gray-200 pt-4">
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-gray-700 hover:text-cyan-600 font-medium transition-colors text-left"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('beneficios')}
              className="text-gray-700 hover:text-cyan-600 font-medium transition-colors text-left"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-cyan-600 font-medium transition-colors text-left"
            >
              Sobre
            </button>
            <Button
              onClick={() =>
                window.open(
                  'https://wa.me/5531982734705?text=Ol%C3%A1%2C%20vim%20pela%20landing%20page%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os.',
                  '_blank'
                )
              }
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-green-500/30 w-full"
            >
              Chamar no WhatsApp
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
