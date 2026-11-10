import AuroraBackground from './components/AuroraBackground.jsx';

// Step 1 — temporary design-system preview.
// Step 2 replaces this with the real router, navbar and pages.

const SWATCHES = [
  { name: 'Night', token: 'night', hex: '#070A1A' },
  { name: 'Panel', token: 'panel', hex: '#0C1029' },
  { name: 'Ink', token: 'ink', hex: '#F1F3FF' },
  { name: 'Muted', token: 'muted', hex: '#A7ADC9' },
  { name: 'Violet', token: 'violet', hex: '#7C5CFF' },
  { name: 'Cyan', token: 'cyan', hex: '#22D3EE' },
  { name: 'Pink', token: 'pink', hex: '#F472B6' },
  { name: 'Amber', token: 'amber', hex: '#FBBF24' },
];

const FONTS = [
  { label: 'Display · Sora 800', className: 'font-display text-4xl font-extrabold tracking-[-0.04em]', sample: 'Full-Stack · GenAI · Deep Learning' },
  { label: 'Body · Manrope', className: 'font-sans text-lg text-muted', sample: 'I design and ship full-stack products, build Generative AI tools and train deep-learning models.' },
  { label: 'Labels · JetBrains Mono', className: 'font-mono text-sm uppercase tracking-[0.08em] text-soft', sample: 'GATE 2025 · AIR 36' },
];

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AuroraBackground />

      <main className="wrap relative flex flex-col gap-20 py-20">
        <header className="flex flex-col items-start gap-6">
          <span className="glass chip">
            <span className="size-2.5 animate-ping-soft rounded-full bg-mint" />
            Step 1 · Design system preview
          </span>
          <h1 className="font-display text-[clamp(52px,8vw,108px)] font-extrabold leading-[0.95] tracking-[-0.05em]">
            I build <span className="gradient-text">intelligent</span>
            <br />
            products.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            If the background drifts, the word "intelligent" shimmers and the fonts look like the design,
            Step 1 is working.
          </p>
          <div className="flex flex-wrap gap-3">
            <a className="btn btn-grad" href="#colours">Gradient button →</a>
            <a className="btn btn-glass" href="#cards">Glass button</a>
          </div>
        </header>

        <section id="colours" className="flex flex-col gap-6">
          <h2 className="font-display text-3xl font-bold">Colours</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
            {SWATCHES.map((swatch) => (
              <div key={swatch.token} className="glass flex flex-col gap-3 rounded-2xl p-4">
                <span
                  className="h-16 rounded-xl border border-white/10"
                  style={{ background: `var(--color-${swatch.token})` }}
                />
                <span className="font-semibold">{swatch.name}</span>
                <span className="font-mono text-xs text-muted">{swatch.hex}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="font-display text-3xl font-bold">Typography</h2>
          <div className="glass flex flex-col gap-8 rounded-3xl p-8">
            {FONTS.map((font) => (
              <div key={font.label} className="flex flex-col gap-2">
                <span className="font-mono text-xs text-muted">{font.label}</span>
                <span className={font.className}>{font.sample}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="cards" className="flex flex-col gap-6">
          <h2 className="font-display text-3xl font-bold">Surfaces</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5">
            <article className="glass flex flex-col gap-4 rounded-[26px] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_-30px_rgba(124,92,255,.65)]">
              <span className="font-display text-7xl font-extrabold leading-none outline-text">01</span>
              <h3 className="font-display text-2xl font-bold">Glass card</h3>
              <p className="text-muted">Frosted background, thin light border, lifts with a violet glow on hover.</p>
            </article>
            <article className="gradient-border flex flex-col gap-4 rounded-[26px] p-7">
              <span className="font-mono text-xs uppercase tracking-[0.08em] text-soft">GATE 2025</span>
              <span className="gold-text font-display text-7xl font-extrabold leading-none tracking-[-0.05em]">#36</span>
              <p className="text-muted">Gradient-border panel with gold shimmer text, used for ranks.</p>
            </article>
            <article className="glass flex flex-col justify-between gap-4 rounded-[26px] p-7">
              <h3 className="font-display text-2xl font-bold">Chips &amp; tags</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'LangGraph', 'TensorFlow', 'Node.js', 'MongoDB'].map((tag) => (
                  <span key={tag} className="glass chip">{tag}</span>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
