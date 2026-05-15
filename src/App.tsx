import { useEffect, useState } from "react";

const CHECKOUT_URL = "https://chk.eduzz.com/801E4VKNW7";
const VIDEO_URL =
  "https://drive.google.com/file/d/1bvNl-cbUbT0nOAi-bXs8I7Qzx8rlBXXi/preview";

/* ================= CTA ================= */
function CTAButton({
  children,
  large = false,
}: {
  children: React.ReactNode;
  large?: boolean;
}) {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-premium inline-flex items-center justify-center gap-3 rounded-full font-semibold text-ink tracking-wide uppercase ${
        large
          ? "px-8 py-4 text-sm md:px-10 md:py-5 md:text-lg"
          : "px-6 py-3 text-xs md:px-8 md:py-4 md:text-base"
      }`}
    >
      {children}
      <span>→</span>
    </a>
  );
}

/* ================= STATS ================= */
function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="glass gold-border rounded-2xl px-5 py-5 md:px-6 md:py-6 text-center">
      <div className="font-display text-3xl md:text-5xl font-bold text-gradient-gold">
        {value}
      </div>
      <div className="mt-2 text-xs md:text-base text-white/70">
        {label}
      </div>
    </div>
  );
}

/* ================= PROBLEM ================= */
function ProblemItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 md:gap-4">
      <div className="mt-1 h-6 w-6 md:h-7 md:w-7 flex items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
        ✕
      </div>
      <p className="text-base md:text-xl text-white/85">
        {children}
      </p>
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all ${
          scrolled
            ? "bg-ink/80 backdrop-blur-xl border-b border-white/5 py-3"
            : "py-5 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <img
            src="/ascensao-logo.png"
            className="h-7 md:h-10 w-auto invert brightness-0"
          />

          <a
            href={CHECKOUT_URL}
            target="_blank"
            className="hidden md:flex text-sm text-gold"
          >
            Quero participar →
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-28 md:pt-40 pb-12 md:pb-24 px-4 md:px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold leading-tight mb-6 md:mb-8">
            Se você é psicóloga e quer{" "}
            <span className="text-gradient-gold italic">transformar</span> sua carreira
          </h1>

          <p className="text-sm md:text-xl text-white/65 max-w-3xl mx-auto">
            Construa uma carreira sólida com método e direção.
          </p>
        </div>
      </section>

      {/* VIDEO */}
      <section className="px-4 md:px-6 pb-12 md:pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden bg-black">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={VIDEO_URL}
                className="absolute inset-0 w-full h-full"
                style={{ border: "none" }}
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <CTAButton large>Quero destravar meu crescimento</CTAButton>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-4 md:px-6 py-12 md:py-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <Stat value="97,8%" label="Assertividade validada" />
          <Stat value="4" label="Pilares do método" />
          <Stat value="+100" label="Transformações" />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="px-4 md:px-6 py-12 md:py-28">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-5xl font-bold text-center mb-10 md:mb-16">
            Falta de método
          </h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
            <ProblemItem>Sobrecarga</ProblemItem>
            <ProblemItem>Sem posicionamento</ProblemItem>
            <ProblemItem>Sem estratégia</ProblemItem>
            <ProblemItem>Improviso</ProblemItem>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-4 md:px-6 py-10 md:py-12 border-t border-white/5 mt-10">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <img
            src="/ascensao-logo.png"
            className="h-7 md:h-10 w-auto mx-auto invert brightness-0"
          />

          <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} — Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}