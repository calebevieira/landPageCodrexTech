// @ts-nocheck
/* Style reminder: clonagem fiel da landing page Codrex com estética neo-tech comercial luminosa, branco dominante, preto pesado, gradientes ciano/azul e CTAs verdes. Preserve proporções, sombras suaves, badges flutuantes e ritmo comercial do original. */
import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import LogoCircular from './LogoCircular';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <LogoCircular size="md" showGlow={false} />
              <span className="text-2xl font-black text-white">CODREX</span>
            </div>
            <p className="text-gray-400 leading-relaxed font-medium">
              Soluções profissionais em tecnologia. Do computador lento ao site que vende.
            </p>
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500" />
              <button
                onClick={() =>
                  window.open(
                    'https://wa.me/5531982734705?text=Ol%C3%A1%2C%20vim%20pela%20landing%20page%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os.',
                    '_blank'
                  )
                }
                className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3.5 rounded-full font-bold transition-all hover:scale-105 shadow-xl shadow-green-500/30 inline-flex items-center space-x-2"
              >
                <span>Falar Agora</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-black mb-6 text-white">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('servicos')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors font-medium hover:translate-x-1 inline-block"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('beneficios')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors font-medium hover:translate-x-1 inline-block"
                >
                  Benefícios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors font-medium hover:translate-x-1 inline-block"
                >
                  Sobre
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-black mb-6 text-white">Serviços</h3>
            <ul className="space-y-3 text-gray-400 font-medium">
              <li className="hover:text-cyan-400 transition-colors cursor-default">Formatação de Computadores</li>
              <li className="hover:text-cyan-400 transition-colors cursor-default">Instalação de Programas</li>
              <li className="hover:text-cyan-400 transition-colors cursor-default">Upgrade de Hardware</li>
              <li className="hover:text-cyan-400 transition-colors cursor-default">Sites Institucionais</li>
              <li className="hover:text-cyan-400 transition-colors cursor-default">Landing Pages</li>
              <li className="hover:text-cyan-400 transition-colors cursor-default">Lojas Virtuais</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-black mb-6 text-white">Contato</h3>
            <ul className="space-y-5">
              <li className="group">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                    <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-gray-300 font-bold text-sm mb-1">WhatsApp</div>
                    <a
                      href="https://wa.me/5531982734705"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors font-medium"
                    >
                      +55 31 98273-4705
                    </a>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                    <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-gray-300 font-bold text-sm mb-1">E-mail</div>
                    <a
                      href="mailto:codrexservicos@gmail.com"
                      className="text-gray-400 hover:text-cyan-400 transition-colors font-medium break-all"
                    >
                      codrexservicos@gmail.com
                    </a>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                    <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-gray-300 font-bold text-sm mb-1">Atendimento</div>
                    <div className="text-gray-400 font-medium">Remoto e Local</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm font-medium">
              © {currentYear} Codrex Serviços. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-sm font-bold">
              Tecnologia profissional para quem quer resultado
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
