// @ts-nocheck
import React from 'react';
import { MessageSquareMore, ShieldCheck, Rocket, Cpu, Target, Handshake, ScanLine } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const benefits = [
  {
    icon: MessageSquareMore,
    title: 'Atendimento Direto e Rápido',
    description: 'Sem burocracia. Você fala direto com quem resolve. Resposta ágil e solução prática.',
  },
  {
    icon: ShieldCheck,
    title: 'Soluções Profissionais',
    description: 'Trabalho com padrão de qualidade. Seu equipamento e presença digital com acabamento premium.',
  },
  {
    icon: Rocket,
    title: 'Velocidade na Entrega',
    description: 'Computador pronto para uso. Site no ar. Tudo funcionando sem complicação e sem demora.',
  },
  {
    icon: Cpu,
    title: 'Tecnologia Moderna',
    description: 'Aplicamos as melhores práticas e ferramentas atuais. Seu negócio com visual e performance de ponta.',
  },
  {
    icon: Target,
    title: 'Foco em Resultado',
    description: 'Não vendemos serviço, vendemos transformação. Computador rápido. Site que gera contato.',
  },
  {
    icon: Handshake,
    title: 'Atendimento Humano',
    description: 'Comunicação clara e direta. Entendemos seu problema e explicamos a solução de forma simples.',
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-white/[0.04] rounded-full blur-3xl animate-pulse-slow animation-delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-5 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/[0.04] px-5 py-2.5 rounded-full border border-white/10 shadow-lg backdrop-blur-md">
            <ScanLine className="w-4 h-4 text-white" strokeWidth={1.9} />
            <span className="text-sm font-semibold tracking-wide text-white/80">Por Que Escolher a Codrax</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Tecnologia que <span className="text-white/70">funciona de verdade</span>
          </h2>
          <p className="text-xl text-white/60 font-medium">
            Resolvemos seu problema com agilidade, profissionalismo e resultado prático.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="group relative bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(255,255,255,0.05)] overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_45%)] opacity-60" />
                <CardContent className="p-8 space-y-4 relative">
                  <div className="relative w-14 h-14">
                    <div className="absolute inset-0 rounded-2xl bg-white/10 blur-md opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center border border-white/12 bg-gradient-to-b from-white/8 to-white/[0.03] group-hover:scale-105 transition-all duration-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                      <Icon className="w-6 h-6 text-white" strokeWidth={1.9} />
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-white group-hover:text-white transition-colors">{benefit.title}</h3>
                  <p className="text-white/60 leading-relaxed font-medium">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center animate-fade-in-up animation-delay-600">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500 animate-pulse-glow" />
            <button
              onClick={() =>
                window.open(
                  'https://wa.me/5531982734705?text=Ol%C3%A1%2C%20vim%20pela%20landing%20page%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os.',
                  '_blank'
                )
              }
              className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-5 text-lg rounded-full font-bold shadow-2xl transition-all hover:scale-105"
            >
              Quero resolver isso agora
            </button>
          </div>
          <p className="mt-4 text-sm text-white/45 font-medium">Atendimento rápido pelo WhatsApp</p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
