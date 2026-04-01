// @ts-nocheck
import React from 'react';
import { Gauge, BadgeCheck, MessagesSquare, TrendingUp, Orbit } from 'lucide-react';

const WhyChoose = () => {
  const reasons = [
    {
      icon: Gauge,
      title: 'Agilidade Real',
      description: 'Não enrolamos. Você entra em contato, entendemos o problema e resolvemos rápido. Sem complicação.',
    },
    {
      icon: BadgeCheck,
      title: 'Qualidade Profissional',
      description: 'Cada trabalho é feito com padrão de excelência. Seu equipamento ou site com acabamento premium.',
    },
    {
      icon: MessagesSquare,
      title: 'Comunicação Direta',
      description: 'Falamos a sua língua. Sem termos técnicos complicados. Você entende o que fazemos e como funciona.',
    },
    {
      icon: TrendingUp,
      title: 'Foco em Resultado',
      description: 'Computador rápido. Site que gera contato. Não vendemos apenas serviço, entregamos transformação.',
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-[#030303] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/[0.03] to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-white/[0.02] to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/[0.04] px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
                <Orbit className="w-4 h-4 text-white" strokeWidth={1.9} />
                <span className="text-sm font-semibold text-white/80">Por Que a CodraxTech</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Menos improviso. Mais <span className="text-white/70">velocidade, presença e confiança.</span>
              </h2>
              <p className="text-xl text-white/60 leading-relaxed">
                A proposta da CodraxTech é simples: resolver seu problema técnico e melhorar a forma como sua tecnologia se apresenta, com um visual mais forte e uma experiência mais confiável.
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
              <img
                src="/imagens/hero-bg.jfif"
                alt="Serviços profissionais de tecnologia"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
          </div>

          <div className="space-y-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-white/20 rounded-3xl p-6 hover:shadow-[0_16px_50px_rgba(255,255,255,0.04)] transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 bg-gradient-to-b from-white/8 to-white/[0.03] group-hover:scale-105 transition-transform duration-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                      <Icon className="w-6 h-6 text-white" strokeWidth={1.9} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white transition-colors">{reason.title}</h3>
                      <p className="text-white/60 leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.03] rounded-3xl p-8 text-white border border-white/10 shadow-xl shadow-black/30">
              <h3 className="text-2xl font-bold mb-4">Seu problema não precisa virar dor de cabeça</h3>
              <p className="text-white/65 mb-6">
                Você fala direto, entende rápido e resolve mais rápido ainda. Sem burocracia.
              </p>
              <button
                onClick={() =>
                  window.open(
                    'https://wa.me/5531982734705?text=Ol%C3%A1%2C%20vim%20pela%20landing%20page%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os.',
                    '_blank'
                  )
                }
                className="bg-white text-black hover:bg-white/90 px-8 py-3 rounded-full font-bold transition-all hover:scale-105 shadow-lg"
              >
                Chamar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
