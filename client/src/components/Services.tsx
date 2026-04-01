// @ts-nocheck
/* Style reminder: clonagem fiel da landing page Codrex com estética neo-tech comercial luminosa, branco dominante, preto pesado, gradientes ciano/azul e CTAs verdes. Preserve proporções, sombras suaves, badges flutuantes e ritmo comercial do original. */
import React from 'react';
import { Monitor, Download, Settings, Cpu, Globe, ShoppingCart, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const services = [
  {
    icon: Monitor,
    title: 'Formatação Completa',
    description: 'Seu computador ou notebook rápido, limpo e pronto para uso. Sistema otimizado e programas essenciais instalados.',
    features: ['Limpeza total do sistema', 'Otimização de desempenho', 'Backup de dados importantes'],
    image: 'https://images.pexels.com/photos/6754846/pexels-photo-6754846.jpeg',
  },
  {
    icon: Download,
    title: 'Instalação de Programas',
    description: 'Deixamos tudo configurado e funcionando. Programas profissionais, ferramentas essenciais, tudo pronto.',
    features: ['Programas originais', 'Configuração completa', 'Suporte pós-instalação'],
    image: 'https://images.pexels.com/photos/8296980/pexels-photo-8296980.jpeg',
  },
  {
    icon: Settings,
    title: 'Sistemas Operacionais',
    description: 'Windows, Linux ou dual boot. Instalação profissional com drivers, atualizações e segurança configurada.',
    features: ['Instalação limpa', 'Drivers atualizados', 'Sistema otimizado'],
    image: 'https://images.unsplash.com/photo-1559310451-19481b3c7ec8',
  },
  {
    icon: Cpu,
    title: 'Upgrade de Máquina',
    description: 'SSD, memória RAM, otimização. Transforme seu computador lento em uma máquina rápida e eficiente.',
    features: ['Instalação de SSD', 'Expansão de RAM', 'Análise de hardware'],
    image: 'https://images.pexels.com/photos/6754846/pexels-photo-6754846.jpeg',
  },
  {
    icon: Globe,
    title: 'Sites Institucionais',
    description: 'Presença digital profissional para seu negócio. Site moderno, responsivo e que transmite autoridade.',
    features: ['Design moderno', 'Responsivo', 'SEO básico'],
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec',
  },
  {
    icon: ShoppingCart,
    title: 'Landing Pages e Lojas',
    description: 'Landing pages que convertem e lojas virtuais prontas para vender. Visual profissional que gera resultado.',
    features: ['Design que converte', 'Integração WhatsApp', 'Pronto para vender'],
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec',
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-gradient-to-br from-gray-50 via-white to-cyan-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-5 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-50 to-blue-50 px-5 py-2.5 rounded-full border border-cyan-200/50 shadow-lg">
            <Settings className="w-4 h-4 text-cyan-600" strokeWidth={2.5} />
            <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
              Nossos Serviços
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Soluções completas em{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
              tecnologia
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Do computador travado ao site profissional. Resolvemos tudo com qualidade e rapidez.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            const colors = isEven 
              ? { 
                  gradient: 'from-cyan-500 to-cyan-600',
                  iconBg: 'from-cyan-400 to-cyan-600',
                  border: 'border-cyan-200/50',
                  glow: 'hover:shadow-cyan-500/30'
                }
              : {
                  gradient: 'from-blue-500 to-blue-600',
                  iconBg: 'from-blue-400 to-blue-600',
                  border: 'border-blue-200/50',
                  glow: 'hover:shadow-blue-500/30'
                };

            return (
              <Card
                key={index}
                className={`group relative bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-500 hover:-translate-y-3 border-2 ${colors.border} ${colors.glow} hover:shadow-2xl overflow-hidden animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
                </div>

                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`} />
                
                <CardContent className="p-8 space-y-5 relative z-10 -mt-20">
                  <div className="relative w-16 h-16">
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.iconBg} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 group-hover:shadow-2xl transition-all duration-500`} />
                    <div className={`relative bg-gradient-to-br ${colors.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 group-hover:text-cyan-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed font-medium">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5 text-sm text-gray-700 font-medium">
                        <div className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${colors.gradient} shadow-lg`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() =>
                      window.open(
                        'https://wa.me/5531982734705?text=Ol%C3%A1%2C%20vim%20pela%20landing%20page%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os.',
                        '_blank'
                      )
                    }
                    className="flex items-center space-x-2 text-cyan-600 hover:text-cyan-700 font-bold group/btn transition-colors pt-2"
                  >
                    <span>Solicitar serviço</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" strokeWidth={2.5} />
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="relative bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-12 text-white text-center shadow-2xl shadow-cyan-500/40 overflow-hidden animate-fade-in-up animation-delay-800">
          <div className="absolute inset-0 bg-grid-white opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
          
          <div className="relative z-10 space-y-6">
            <h3 className="text-3xl md:text-4xl font-black">
              Não encontrou o que precisa?
            </h3>
            <p className="text-xl text-cyan-50 max-w-2xl mx-auto font-medium">
              Fale direto com a gente. Atendemos demandas personalizadas e criamos soluções sob medida.
            </p>
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-white rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500" />
              <button
                onClick={() =>
                  window.open(
                    'https://wa.me/5531982734705?text=Ol%C3%A1%2C%20vim%20pela%20landing%20page%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os.',
                    '_blank'
                  )
                }
                className="relative bg-white text-cyan-700 hover:bg-gray-50 px-10 py-5 rounded-full font-black text-lg shadow-2xl transition-all hover:scale-105 inline-flex items-center space-x-2"
              >
                <span>Falar com a Codrex</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
              </button>
            </div>
            <p className="text-sm text-cyan-100 font-medium">
              Atendimento rápido pelo WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
