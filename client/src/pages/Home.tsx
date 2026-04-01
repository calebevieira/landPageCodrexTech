// @ts-nocheck
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  ChevronRight,
  Cpu,
  Globe,
  HardDrive,
  LayoutTemplate,
  Menu,
  MessageCircle,
  Settings2,
  Sparkles,
  Terminal,
  ChevronDown,
  Workflow,
  Wrench,
  X,
  MonitorSmartphone,
} from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/5531982734705?text=Ol%C3%A1%2C%20vim%20pela%20landing%20da%20CodraxTech%20e%20quero%20mais%20informa%C3%A7%C3%B5es.";

const services = [
  {
    icon: Cpu,
    title: "Formatação e sistemas",
    text: "Seu computador volta limpo, rápido e pronto para uso, com sistema organizado e sem travamentos.",
  },
  {
    icon: HardDrive,
    title: "Upgrade de máquina",
    text: "SSD, memória e otimização para melhorar o desempenho real do seu notebook ou desktop.",
  },
  {
    icon: Wrench,
    title: "Instalação de programas",
    text: "Tudo configurado e funcionando da forma certa, para você usar sem dor de cabeça.",
  },
  {
    icon: LayoutTemplate,
    title: "Sites e landing pages",
    text: "Páginas modernas, rápidas e profissionais para transformar visita em contato.",
  },
  {
    icon: Workflow,
    title: "Automações de processos",
    text: "Organização de fluxos, tarefas repetitivas e etapas manuais para ganhar velocidade no dia a dia.",
  },
  {
    icon: Bot,
    title: "Automações de mensagens",
    text: "Mensagens automáticas, respostas e comunicação mais inteligente para atendimento e operação.",
  },
];

const differentials = [
  "Atendimento direto pelo WhatsApp, sem burocracia.",
  "Visual mais profissional, limpo e coerente com a marca.",
  "Serviços técnicos, digitais e automações no mesmo lugar.",
  "Experiência mobile forte para quem vem do Instagram.",
];

const processSteps = [
  {
    number: "01",
    title: "Entendimento rápido",
    text: "Você explica o que precisa e eu direciono a melhor solução sem enrolação.",
  },
  {
    number: "02",
    title: "Execução com clareza",
    text: "Arrumo, configuro, automatizo ou desenvolvo com foco em funcionamento, estética e resultado.",
  },
  {
    number: "03",
    title: "Entrega e suporte inicial",
    text: "Você recebe tudo funcionando e com orientação inicial para seguir com segurança.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function LogoMark({ small = false }: { small?: boolean }) {
  return (
    <div
      className={`relative ${small ? "h-11 w-11" : "h-20 w-20 sm:h-24 sm:w-24"} overflow-hidden rounded-full border border-white/16 bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_10px_34px_rgba(255,255,255,0.1),0_0_36px_rgba(255,255,255,0.08)]`}
    >
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.85),rgba(255,255,255,1))]" />
      <img
        src="/imagens/logo-codrax.png"
        alt="Logo CodraxTech"
        className="relative z-10 h-full w-full rounded-full object-cover"
      />
    </div>
  );
}

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [widgetVisible, setWidgetVisible] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onMove = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("mousemove", onMove);
    const timer = window.setTimeout(() => setWidgetVisible(true), 700);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
      window.clearTimeout(timer);
    };
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] text-white selection:bg-white/20 selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-30 bg-[linear-gradient(180deg,#050505_0%,#0b0b0b_55%,#050505_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-20 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:52px_52px] animate-grid-drift" />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-white/6 blur-3xl animate-float-soft" />
        <div className="absolute bottom-[12%] right-[-8%] h-80 w-80 rounded-full bg-white/5 blur-3xl animate-float-soft" />
        <motion.div
          className="hidden md:block absolute h-64 w-64 rounded-full bg-white/8 blur-3xl"
          animate={{ x: cursor.x - 128, y: cursor.y - 128 }}
          transition={{ type: "spring", stiffness: 55, damping: 18, mass: 0.4 }}
        />
      </div>

      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled ? "border-b border-white/10 bg-black/70 shadow-[0_18px_80px_rgba(0,0,0,0.42)] backdrop-blur-2xl" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          <button onClick={() => scrollTo("top")} className="flex items-center gap-3 text-left">
            <LogoMark small />
            <div>
              <div className="text-base font-black tracking-tight text-white sm:text-lg">CodraxTech</div>
              <div className="text-[10px] uppercase tracking-[0.26em] text-white/45 sm:text-[11px]">Tecnologia, sites e automações</div>
            </div>
          </button>

          <nav className="hidden items-center gap-8 text-sm text-white/72 lg:flex">
            <button onClick={() => scrollTo("servicos")} className="transition hover:text-white">Serviços</button>
            <button onClick={() => scrollTo("diferenciais")} className="transition hover:text-white">Diferenciais</button>
            <button onClick={() => scrollTo("processo")} className="transition hover:text-white">Processo</button>
            <button onClick={() => scrollTo("contato")} className="transition hover:text-white">Contato</button>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full border border-white/12 bg-white text-black px-5 py-3 text-sm font-semibold shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_0_24px_rgba(255,255,255,0.12)] transition hover:-translate-y-0.5 hover:bg-[#25D366] sm:inline-flex"
            >
              <MessageCircle className="h-4 w-4" />
              Chamar no WhatsApp
            </a>
            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white/88 backdrop-blur-xl lg:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Abrir menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="border-t border-white/8 bg-black/94 backdrop-blur-2xl lg:hidden">
            <div className="container flex flex-col gap-2 py-4 text-sm text-white/70">
              {[
                ["Serviços", "servicos"],
                ["Diferenciais", "diferenciais"],
                ["Processo", "processo"],
                ["Contato", "contato"],
              ].map(([label, id]) => (
                <button key={id} onClick={() => scrollTo(id)} className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-left transition hover:bg-white/8">
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="top" className="relative isolate pt-28 md:pt-32">
          <div className="container">
            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#090909] shadow-[0_34px_120px_rgba(0,0,0,0.45)]">
              <div className="absolute inset-0 overflow-hidden">
                <img src="/imagens/hero-bg.jfif" alt="Background tecnológico da CodraxTech" className="h-full w-full object-cover object-center opacity-30 scale-105 animate-slow-pan" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.95)_0%,rgba(5,5,5,0.88)_34%,rgba(5,5,5,0.55)_64%,rgba(5,5,5,0.82)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.12),transparent_18%),radial-gradient(circle_at_76%_30%,rgba(255,255,255,0.08),transparent_14%),radial-gradient(circle_at_75%_82%,rgba(255,255,255,0.06),transparent_18%)]" />
              </div>

              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-[-10%] top-16 h-px w-[60%] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-line-slide" />
                <div className="absolute right-[-20%] top-[35%] h-px w-[50%] bg-gradient-to-r from-transparent via-white/12 to-transparent animate-line-slide [animation-delay:1.4s]" />
                <div className="absolute left-[10%] bottom-[20%] h-px w-[42%] bg-gradient-to-r from-transparent via-white/16 to-transparent animate-line-slide [animation-delay:2.8s]" />
              </div>

              <div className="relative grid min-h-[680px] items-center gap-10 px-5 py-8 sm:px-8 sm:py-10 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-12">
                <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-[660px] pt-6 sm:pt-8 lg:pt-10">
                  <div className="mb-5 flex items-center gap-4">
                    <LogoMark />
                    <div className="min-w-0">
                      <div className="text-xl font-black tracking-tight text-white sm:text-2xl">CodraxTech</div>
                      <div className="text-xs uppercase tracking-[0.28em] text-white/60 sm:text-[11px]">Instagram @codraxtech</div>
                    </div>
                  </div>

                  <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-medium text-white/78 shadow-[0_10px_36px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:text-sm">
                    <Terminal className="h-4 w-4 text-white" />
                    Tecnologia, sites e automações com estética premium
                  </div>

                  <h1 className="max-w-[780px] text-[2.6rem] font-black leading-[0.94] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-[84px]">
                    Sua máquina
                    <span className="block text-white/85">rápida e</span>
                    <span className="block text-white">Sua operação mais inteligente.</span>
                  </h1>

                  <p className="mt-6 max-w-[620px] text-base leading-7 text-white/72 sm:text-lg sm:leading-8 md:text-xl md:leading-9">
                    Formatação, programas, upgrades, sites, landing pages e automações de processos e mensagens com entrega rápida e resultado real.
                  </p>

                  <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex justify-center items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.14),0_12px_40px_rgba(255,255,255,0.18)] transition hover:-translate-y-0.5 hover:bg-[#25D366]"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Chamar no WhatsApp
                      <ArrowRight className="h-4 w-4 transition group-hover:bg-[#25D366] translate-x-1" />
                    </a>
                    <button
                      onClick={() => scrollTo("servicos")}
                      className="inline-flex justify-center items-center gap-3 rounded-full border border-white/12 bg-white/6 px-7 py-4 text-sm font-semibold text-white/90 backdrop-blur-xl transition hover:bg-white/10"
                    >
                      Ver serviços
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>

                  <p className="mt-3 pl-2 text-sm text-white/70">Atendimento rápido direto no WhatsApp</p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {["Atendimento direto", "Entrega profissional", "Experiência mobile forte"].map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/74 backdrop-blur-xl">
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, ease: "easeOut", delay: 0.1 }}
                  className="relative flex min-h-[320px] items-end justify-center lg:min-h-[560px]"
                >
                  <div className="absolute left-1/2 top-2 z-20 hidden w-full max-w-[300px] -translate-x-1/2 rounded-[24px] border border-white/12 bg-black/58 px-4 py-4 text-sm text-white/72 shadow-[0_18px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl md:block animate-float-soft lg:left-6 lg:top-6 lg:max-w-[250px] lg:translate-x-0">
                    Automações, atendimento, performance e presença digital no mesmo lugar.
                  </div>
                  <div className="relative z-10 mt-16 w-full max-w-[560px] rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl md:mt-18 md:p-4 lg:translate-y-6">
                    <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black/30">
                      <img src="/imagens/hero-bg.jfif" alt="Notebook com interface tecnológica" className="h-[300px] w-full object-cover object-center sm:h-[360px] lg:h-[470px]" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="relative pt-20 md:pt-24">
          <div className="container">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="mb-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/70 backdrop-blur-xl">
                <Settings2 className="h-4 w-4 text-white" />
                Serviços principais
              </div>
              <h2 className="mt-5 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl md:text-5xl">
                Tecnologia para resolver rápido, automatizar rotinas e apresentar seu negócio com mais força.
              </h2>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {services.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className="group rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,20,20,0.94),rgba(10,10,10,0.86))] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20"
                  >
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-[18px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.05))] text-white shadow-[0_12px_36px_rgba(255,255,255,0.06)] transition duration-300 group-hover:scale-105 group-hover:shadow-[0_18px_44px_rgba(255,255,255,0.1)]">
                      <div className="absolute inset-0 rounded-[18px] bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.18),transparent_30%)]" />
                      <Icon className="relative h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold tracking-[-0.03em] text-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/62">{item.text}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="diferenciais" className="relative pt-20 md:pt-24">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(18,18,18,0.96),rgba(8,8,8,0.92))] p-7 shadow-[0_32px_120px_rgba(0,0,0,0.28)] md:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/70">
                  <MonitorSmartphone className="h-4 w-4 text-white" />
                  Por que a CodraxTech
                </div>
                <h2 className="mt-5 text-3xl font-black tracking-[-0.05em] sm:text-4xl md:text-5xl">
                  Menos improviso. Mais velocidade, automação e confiança.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/62 md:text-lg">
                  A proposta da CodraxTech é simples: resolver seu problema técnico, melhorar sua presença digital e automatizar o que faz você perder tempo.
                </p>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-2">
                {differentials.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
                  >
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-white">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                    <p className="text-sm leading-7 text-white/70">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="processo" className="relative pt-20 md:pt-24">
          <div className="container">
            <div className="grid gap-5 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl"
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.26em] text-white/35">{step.number}</div>
                  <h3 className="mt-5 text-2xl font-black tracking-[-0.03em] text-white">{step.title}</h3>
                  <p className="mt-4 text-base leading-8 text-white/60">{step.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="relative pb-24 pt-20 md:pb-28 md:pt-24">
          <div className="container">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(13,13,13,0.96),rgba(6,6,6,0.98))] px-6 py-8 shadow-[0_40px_140px_rgba(0,0,0,0.42)] md:px-10 md:py-12">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/6 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-white/5 blur-3xl" />
              <div className="relative grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/70">
                    <MessageCircle className="h-4 w-4 text-white" />
                    Canal principal de atendimento
                  </div>
                  <h2 className="mt-5 max-w-2xl text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl md:text-5xl">
                    Fale comigo e descubra o que dá para resolver hoje.
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-8 text-white/62 md:text-lg">
                    Seja para arrumar o computador, instalar programas, automatizar mensagens, melhorar processos ou criar uma landing page, o caminho mais rápido começa no WhatsApp.
                  </p>
                </div>

                <div className="rounded-[30px] border border-white/10 bg-white/6 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl md:p-7">
                  <div className="text-sm uppercase tracking-[0.24em] text-white/42">WhatsApp direto</div>
                  <div className="mt-3 text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">Resposta rápida e sem burocracia</div>
                  <div className="mt-3 text-base leading-8 text-white/62">Explique o que você precisa e eu te mostro o melhor próximo passo.</div>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-sm font-bold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.14),0_14px_44px_rgba(255,255,255,0.16)] transition hover:-translate-y-0.5 sm:w-auto"
                  >
                    Iniciar conversa agora
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 py-8">
        <div className="container flex flex-col gap-4 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <LogoMark small />
            <span><span className="font-semibold text-white/76">CodraxTech</span> — tecnologia, automações e presença digital.</span>
          </div>
          <div>@codraxtech</div>
        </div>
      </footer>

      <div className={`fixed bottom-5 right-5 z-50 transition-all duration-500 ${widgetVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-[0_0_0_10px_rgba(255,255,255,0.06),0_18px_52px_rgba(255,255,255,0.14)] transition hover:scale-105"
          aria-label="Abrir WhatsApp da CodraxTech"
        >
          <div className="absolute inset-0 rounded-full animate-whatsapp-pulse bg-[#25D366]" />
          <MessageCircle className="relative h-7 w-7" />
        </a>
      </div>
    </div>
  );
}

export default Home;
