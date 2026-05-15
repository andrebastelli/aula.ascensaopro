import { useEffect, useState } from "react";

const CHECKOUT_URL = "https://chk.eduzz.com/801E4VKNW7";
const VIDEO_URL = 
  "https://drive.google.com/file/d/1bvNl-cbUbT0nOAi-bXs8I7Qzx8rlBXXi/preview";

function CTAButton({ children, large = false }: { children: React.ReactNode; large?: boolean }) {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-premium inline-flex items-center justify-center gap-3 rounded-full font-semibold text-ink tracking-wide uppercase ${
        large ? "px-10 py-5 text-base md:text-lg" : "px-8 py-4 text-sm md:text-base"
      }`}
    >
      {children}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </a>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass gold-border rounded-2xl px-6 py-6 text-center">
      <div className="font-display text-4xl md:text-5xl font-bold text-gradient-gold">
        {value}
      </div>
      <div className="mt-2 text-sm md:text-base text-white/70 leading-snug">
        {label}
      </div>
    </div>
  );
}

function ProblemItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold transition-all group-hover:scale-110 group-hover:bg-gold/20">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </div>
      <p className="text-lg md:text-xl text-white/85 leading-relaxed">{children}</p>
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* NAV */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-ink/80 backdrop-blur-xl border-b border-white/5 py-3" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center justify-center">
  <img
    src="/ascensao-logo.png"
    alt="Ascensão Pro"
    className="h-8 md:h-10 w-auto invert brightness-0"
  />
</div>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light transition-colors"
          >
            Quero participar
            <span>→</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/80">
              Aula gratuita disponível
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 animate-fade-up">
            Se você é psicóloga e quer{" "}
            <span className="text-gradient-gold italic">transformar</span> sua
            vocação em uma carreira estruturada e valorizada,{" "}
            <span className="text-white/90">assista a aula abaixo.</span>
          </h1>

          <p
            className="text-base md:text-xl text-white/65 max-w-3xl mx-auto leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Descubra como sair do improviso e construir uma carreira sólida com
            método, direção e crescimento consistente.
          </p>
        </div>
      </section>

      {/* VIDEO */}
      <section id="aula" className="px-4 md:px-6 pb-16 md:pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="relative animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="absolute -inset-4 bg-gradient-to-r from-gold/30 via-gold-light/20 to-gold/30 rounded-3xl blur-2xl opacity-60" />
            <div className="relative gold-border rounded-2xl overflow-hidden shadow-glow bg-black">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src={VIDEO_URL}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: "none" }}
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  title="Aula Ascensão Pro"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 md:mt-12 text-center animate-fade-up" style={{ animationDelay: "0.45s" }}>
            <CTAButton large>Quero destravar meu crescimento</CTAButton>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          <Stat value="97,8%" label="Assertividade validada pela USP" />
          <Stat value="4" label="Pilares do método" />
          <Stat value="+100" label="Profissionais transformados" />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="px-6 py-16 md:py-28 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 md:mb-20">
            <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-gold mb-4 block">
              O diagnóstico
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              O Problema Não É Esforço —
              <br />
              <span className="text-gradient-gold italic">É Falta de Método</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-8 max-w-3xl mx-auto">
            <ProblemItem>Sobrecarga e falta de tempo para crescer</ProblemItem>
            <ProblemItem>Falta de clareza de posicionamento</ProblemItem>
            <ProblemItem>Sem plano estratégico claro</ProblemItem>
            <ProblemItem>Crescimento no improviso</ProblemItem>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="px-6 py-16 md:py-28 relative">
        <div className="max-w-5xl mx-auto">
          <div className="glass gold-border rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-gold mb-5 block">
                A Jornada do Potencial
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-8">
                O acompanhamento para quem busca{" "}
                <span className="text-gradient-gold italic">profundidade</span> e{" "}
                <span className="text-gradient-gold italic">resultados.</span>
              </h2>
              <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-3xl">
                A <strong className="text-white">Jornada do Potencial — Ascensão Pro</strong> foi
                desenhada para psicólogas que já entenderam que não basta saber a
                técnica clínica; é preciso ter um método para sustentar o próprio
                crescimento. Através do diagnóstico{" "}
                <strong className="text-gold">MAP ID</strong> e encontros
                individuais, vamos desenhar o seu roadmap de atuação para os
                próximos meses.
              </p>

              <div className="mt-10">
                <CTAButton large>Quero destravar meu crescimento</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-12 border-t border-white/5 mt-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="font-display text-lg font-bold mb-2">
            ASCENSÃO <span className="text-gradient-gold">PRO</span>
          </div>
          <p className="text-xs text-white/40 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} — Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
