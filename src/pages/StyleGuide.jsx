// Design-system reference page (not in the navbar): open /styleguide.
// Shows the tokens from Step 1 and every building block from Step 3.

import Button from '../components/ui/Button.jsx';
import CountUp from '../components/ui/CountUp.jsx';
import GlassCard, { cardHover } from '../components/ui/GlassCard.jsx';
import Icon, { ICON_NAMES } from '../components/ui/Icon.jsx';
import Marquee from '../components/ui/Marquee.jsx';
import { Reveal, RevealGroup, RevealItem } from '../components/ui/Reveal.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import usePageMeta from '../components/usePageMeta.js';
import { accent } from '../data/accents.js';
import { HOME_STATS, RANKS } from '../data/achievements.js';
import { CERTIFICATES } from '../data/certificates.js';
import { EXPERTISE } from '../data/profile.js';
import { PROJECTS } from '../data/projects.js';
import { MARQUEE_TECH, MARQUEE_THEMES, SKILL_GROUPS } from '../data/skills.js';
import { TIMELINE } from '../data/timeline.js';

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

const DATA_SUMMARY = [
  { label: 'projects', count: PROJECTS.length },
  { label: 'timeline entries', count: TIMELINE.length },
  { label: 'national ranks', count: RANKS.length },
  { label: 'skill groups', count: SKILL_GROUPS.length },
  { label: 'certificates', count: CERTIFICATES.length },
];

export default function StyleGuide() {
  usePageMeta({ title: 'Design system', noindex: true });
  return (
    <div className="wrap flex flex-col gap-28 py-20">
      <header className="flex flex-col items-start gap-6">
        <span className="glass chip">Design system · Steps 1 – 3</span>
        <h1 className="font-display text-[clamp(48px,7vw,96px)] leading-[0.95] font-extrabold tracking-[-0.05em]">
          Aurora <span className="gradient-text">Glass</span>
        </h1>
        <p className="max-w-xl text-lg text-muted">
          Scroll down slowly: every block below the colours fades in as it reaches the screen, and the numbers count up.
        </p>
      </header>

      {/* ───────── Step 1: tokens ───────── */}
      <section className="flex flex-col gap-6">
        <h2 className="font-display text-3xl font-bold">Colours</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
          {SWATCHES.map((swatch) => (
            <div key={swatch.token} className="glass flex flex-col gap-3 rounded-2xl p-4">
              <span className="h-16 rounded-xl border border-white/10" style={{ background: `var(--color-${swatch.token})` }} />
              <span className="font-semibold">{swatch.name}</span>
              <span className="font-mono text-xs text-muted">{swatch.hex}</span>
            </div>
          ))}
        </div>
      </section>

      <Reveal as="section" className="flex flex-col gap-6">
        <h2 className="font-display text-3xl font-bold">Typography</h2>
        <div className="glass flex flex-col gap-8 rounded-3xl p-8">
          {FONTS.map((font) => (
            <div key={font.label} className="flex flex-col gap-2">
              <span className="font-mono text-xs text-muted">{font.label}</span>
              <span className={font.className}>{font.sample}</span>
            </div>
          ))}
        </div>
      </Reveal>

      {/* ───────── Step 3: building blocks ───────── */}
      <section className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="SectionHeading"
          title="Three disciplines,"
          accent="one toolkit."
          description="Section title with a gradient word. It reveals itself on scroll too."
        />
        <RevealGroup className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5">
          {EXPERTISE.map((item) => {
            const colors = accent(item.accent);
            return (
              <RevealItem key={item.title} className={`glass flex min-h-[300px] flex-col gap-4 rounded-[26px] p-8 ${cardHover}`}>
                <span
                  className="grid size-14 place-items-center rounded-2xl text-on-accent"
                  style={{ background: colors.gradient, boxShadow: `0 10px 30px -8px ${colors.solid}` }}
                >
                  <Icon name={item.icon} size={26} strokeWidth={2} />
                </span>
                <h3 className="mt-auto font-display text-2xl font-bold">{item.title}</h3>
                <p className="text-muted">{item.description}</p>
                <p className="font-mono text-xs text-soft">{item.stack.join(' · ')}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>
        <p className="font-mono text-xs text-muted">RevealGroup + RevealItem · cards appear one after another · data: EXPERTISE</p>
      </section>

      <section className="flex flex-col gap-10">
        <SectionHeading eyebrow="CountUp" title="Ranked among India's" accent="best." />
        <RevealGroup className="grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-4">
          {HOME_STATS.map((stat) => (
            <RevealItem
              key={stat.id}
              className={`${stat.featured ? 'gradient-border' : 'glass'} relative flex min-h-[200px] flex-col justify-between gap-5 overflow-hidden rounded-[26px] p-7 ${cardHover}`}
            >
              <span
                aria-hidden="true"
                className="absolute -top-10 -right-10 size-40 rounded-full"
                style={{ background: `radial-gradient(circle, ${accent(stat.accent).glow}, transparent 70%)` }}
              />
              <span className="relative font-mono text-xs tracking-[0.08em] text-soft uppercase">{stat.eyebrow}</span>
              <div className="relative flex flex-col gap-1">
                <CountUp
                  to={stat.value}
                  prefix={stat.prefix}
                  decimals={stat.decimals}
                  className={`${stat.featured ? '' : 'gradient-text'} font-display text-7xl leading-[0.9] font-extrabold tracking-[-0.05em]`}
                />
                <span className="text-sm font-semibold text-muted">{stat.label}</span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
        <p className="font-mono text-xs text-muted">CountUp starts when the tile reaches the screen · data: HOME_STATS</p>
      </section>

      <section className="flex flex-col gap-6">
        <SectionHeading eyebrow="Marquee" title="Endless" accent="strips." description="Hover a strip to pause it." />
        <div className="-mx-[clamp(16px,4vw,48px)] flex flex-col gap-3.5">
          <Marquee duration={30}>
            {MARQUEE_TECH.map((tech) => (
              <span key={tech} className="glass chip px-5 py-3 text-base">{tech}</span>
            ))}
          </Marquee>
          <Marquee reverse duration={36} gap={28}>
            {MARQUEE_THEMES.map((theme, index) => (
              <span key={theme} className="flex items-center gap-7 font-display text-[clamp(28px,3.6vw,44px)] font-extrabold tracking-[-0.03em]">
                <span className={index % 2 ? 'outline-text' : 'gradient-text'}>{theme}</span>
                <Icon name="sparkle" size={22} className="text-violet-light" />
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      <Reveal as="section" className="flex flex-col gap-6">
        <h2 className="font-display text-3xl font-bold">Buttons &amp; cards</h2>
        <div className="flex flex-wrap gap-3">
          <Button to="/projects" icon="arrowRight">Explore my work</Button>
          <Button href="#" variant="glass" icon="download">Download résumé</Button>
          <Button href="#" variant="glass" size="sm" icon="github" iconPosition="left">GitHub</Button>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-5">
          <GlassCard className="flex flex-col gap-3 p-7">
            <span className="outline-text font-display text-6xl leading-none font-extrabold">01</span>
            <h3 className="font-display text-xl font-bold">GlassCard</h3>
            <p className="text-muted">Hover me: lifts with a violet glow.</p>
          </GlassCard>
          <GlassCard variant="gradient" className="flex flex-col gap-3 p-7">
            <span className="gold-text font-display text-6xl leading-none font-extrabold">#36</span>
            <h3 className="font-display text-xl font-bold">GlassCard · gradient</h3>
            <p className="text-muted">Dark panel with the aurora border.</p>
          </GlassCard>
        </div>
      </Reveal>

      <Reveal as="section" className="flex flex-col gap-6">
        <h2 className="font-display text-3xl font-bold">Icons</h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(110px,1fr))] gap-3">
          {ICON_NAMES.map((name) => (
            <div key={name} className="glass flex flex-col items-center gap-2 rounded-2xl p-4 text-soft">
              <Icon name={name} size={24} />
              <span className="font-mono text-[11px] text-muted">{name}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="gradient-border flex flex-col gap-5 rounded-[32px] p-8">
        <h2 className="font-display text-3xl font-bold">Content files loaded</h2>
        <div className="flex flex-wrap gap-3">
          {DATA_SUMMARY.map((item) => (
            <span key={item.label} className="glass chip text-sm">
              <span className="gradient-text font-display text-lg font-extrabold">{item.count}</span> {item.label}
            </span>
          ))}
        </div>
        <p className="text-muted">
          Projects: {PROJECTS.map((project) => project.title).join(' · ')}
        </p>
      </Reveal>
    </div>
  );
}
