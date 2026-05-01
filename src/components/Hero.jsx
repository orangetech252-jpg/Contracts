export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-white to-orange-50 overflow-hidden">
      {/* Orange glow in top-right corner */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-orange to-orange-glow opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-orange-glow opacity-10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text content */}
        <div>
          <p className="section-label">Web Development Agency · Zambia</p>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-dark leading-tight mb-6">
            Orange Core:<br />
            <span className="text-orange">Bright Ideas,</span><br />
            Solid Solutions.
          </h1>
          <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg">
            Empowering local Zambian businesses with world-class web development.
            From striking landing pages to full e-commerce stores — we build digital presence that converts.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#services" className="btn-primary text-base">
              View Our Services
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </a>
            <a href="#contract" className="btn-secondary text-base">
              Get Started
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-full max-w-md md:max-w-full">
            <img
              src="/hero-orange-core.png"
              alt="Orange Core Web Development"
              className="w-full rounded-2xl shadow-2xl"
              style={{ boxShadow: '0 32px 80px rgba(255, 107, 0, 0.2)' }}
            />
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 glass-card px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-orange rounded-full flex items-center justify-center">
                <span className="text-white text-lg">⚡</span>
              </div>
              <div>
                <div className="text-sm font-bold text-dark">Live in 5 Days</div>
                <div className="text-xs text-muted">Fast turnaround</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-xs text-muted tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-muted rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}