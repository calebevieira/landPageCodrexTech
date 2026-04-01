// @ts-nocheck
/* Style reminder: clonagem fiel da landing page Codrex com estética neo-tech comercial luminosa, branco dominante, preto pesado, gradientes ciano/azul e CTAs verdes. Preserve proporções, sombras suaves, badges flutuantes e ritmo comercial do original. */
import React from 'react';
import { MessageCircle, Zap, Shield, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-cyan-50/30 to-blue-50/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main CTA Card */}
        <div className="max-w-5xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-xl border-2 border-cyan-200 shadow-2xl shadow-cyan-500/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Left - Content */}
                <div className="p-12 space-y-8">
                  <div className="space-y-4">
                    <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
                      <MessageCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-semibold text-green-700">
                        Fale Agora
                      </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                      Pronto para{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                        resolver
                      </span>{' '}
                      seu problema?
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      Atendimento rápido, orçamento direto e solução personalizada.
                      Sem burocracia, sem enrolação.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mt-1">
                        <Zap className="w-4 h-4 text-cyan-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Resposta Imediata</div>
                        <div className="text-gray-600">Falamos direto pelo WhatsApp</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                        <Shield className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Orçamento Transparente</div>
                        <div className="text-gray-600">Sem surpresas, tudo combinado antes</div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      window.open(
                        'https://wa.me/5531982734705?text=Ol%C3%A1%2C%20vim%20pela%20landing%20page%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os.',
                        '_blank'
                      )
                    }
                    className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 text-xl rounded-full font-bold shadow-2xl shadow-green-500/40 transition-all hover:shadow-green-500/60 hover:scale-105 inline-flex items-center space-x-3"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <span>Chamar no WhatsApp Agora</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-sm text-gray-500">
                    Atendimento direto • Sem compromisso • Resposta rápida
                  </p>
                </div>

                {/* Right - Visual */}
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-12 flex items-center justify-center relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                  <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                  
                  <div className="relative z-10 text-white text-center space-y-6">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mx-auto flex items-center justify-center border-4 border-white/30">
                      <MessageCircle className="w-12 h-12" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-5xl font-bold">+55 31</div>
                      <div className="text-3xl font-bold">98273-4705</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                      <div className="text-lg font-semibold mb-2">Horário de Atendimento</div>
                      <div className="text-cyan-50">Segunda a Sábado</div>
                      <div className="text-cyan-50">Resposta rápida garantida</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Badges */}
        <div className="max-w-3xl mx-auto mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: 'Atendimento', value: 'Rápido' },
              { label: 'Orçamento', value: 'Direto' },
              { label: 'Qualidade', value: '100%' },
              { label: 'Resultado', value: 'Garantido' },
            ].map((item, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                <div className="text-2xl font-bold text-cyan-600">{item.value}</div>
                <div className="text-sm text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
