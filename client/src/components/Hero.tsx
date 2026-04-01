// @ts-nocheck
/* Style reminder: clonagem fiel da landing page Codrex com estética neo-tech comercial luminosa, branco dominante, preto pesado, gradientes ciano/azul e CTAs verdes. Preserve proporções, sombras suaves, badges flutuantes e ritmo comercial do original. */
import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Zap, Shield } from 'lucide-react';
import LogoCircular from './LogoCircular';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.5 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.6 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(6, 182, 212, ${this.opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(6, 182, 212, 0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-cyan-50/20 to-blue-50/30">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-tr from-blue-400/15 to-cyan-400/15 rounded-full blur-3xl animate-pulse-slow" />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="flex items-center space-x-4">
              <LogoCircular size="lg" showGlow={true} />
              <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full border border-cyan-200/50 shadow-xl shadow-cyan-500/20">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                  Tecnologia Profissional
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="text-gray-900">Seu computador</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 drop-shadow-lg">
                pronto e rápido.
              </span>
              <br />
              <span className="text-gray-900">Sua presença digital</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 drop-shadow-lg">
                profissional.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-xl font-medium">
              Resolvemos problemas de tecnologia com{' '}
              <span className="font-bold text-cyan-700">agilidade</span> e{' '}
              <span className="font-bold text-cyan-700">profissionalismo</span>.
              Do computador travado ao site que vende.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="group flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="p-2.5 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-sm font-bold text-gray-800">Atendimento Rápido</span>
              </div>
              <div className="group flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="p-2.5 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl group-hover:scale-110 transition-transform">
                  <Shield className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-sm font-bold text-gray-800">Solução Profissional</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse-glow" />
                <Button
                  onClick={() =>
                    window.open(
                      'https://wa.me/5531982734705?text=Ol%C3%A1%2C%20vim%20pela%20landing%20page%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os.',
                      '_blank'
                    )
                  }
                  className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-7 text-lg rounded-full font-bold shadow-2xl transition-all hover:scale-105"
                >
                  Falar com a Codrex
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <Button
                onClick={() => {
                  const element = document.getElementById('servicos');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                variant="outline"
                className="border-2 border-cyan-600 text-cyan-700 hover:bg-cyan-50 bg-white/80 backdrop-blur-sm px-10 py-7 text-lg rounded-full font-bold transition-all hover:shadow-xl hover:scale-105"
              >
                Ver Serviços
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 font-medium">
              ✓ Atendimento rápido pelo WhatsApp • Sem compromisso
            </p>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative animate-fade-in-up animation-delay-300">
              <div className="relative bg-white/70 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl shadow-cyan-500/30 border border-white/60">
                <img
                  src="https://images.unsplash.com/photo-1618477388954-7852f32655ec"
                  alt="Desenvolvedor profissional trabalhando"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                
                <div className="absolute -top-6 -left-6 bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-5 rounded-2xl shadow-2xl animate-float border-4 border-white/30">
                  <div className="text-3xl font-black">100%</div>
                  <div className="text-xs font-bold">Profissional</div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border-2 border-cyan-200 animate-float animation-delay-500">
                  <div className="text-3xl font-black text-cyan-600">Rápido</div>
                  <div className="text-xs font-bold text-gray-700">Atendimento Direto</div>
                </div>
              </div>

              <div className="absolute -z-10 top-10 -right-10 w-80 h-80 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-gradient-to-tr from-blue-400/25 to-cyan-400/25 rounded-full blur-3xl animate-pulse-slow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
