import Button from '../../components/ui/Button.jsx';
import { Reveal } from '../../components/ui/Reveal.jsx';
import airyRings from '../../assets/airy-rings.webp';

export default function ProjectsCta() {
  return (
    <section className="wrap relative pt-8">
      <Reveal className="gradient-border relative flex flex-wrap items-center justify-between gap-7 overflow-hidden rounded-[36px] p-[clamp(32px,6vw,72px)]">
        <img
          src={airyRings}
          alt=""
          className="pointer-events-none absolute top-1/2 -right-[120px] size-[440px] -translate-y-1/2 animate-[spin_60s_linear_infinite] rounded-full object-cover opacity-60"
        />
        <h2 className="relative max-w-[640px] font-display text-[clamp(34px,4.6vw,60px)] leading-[1.02] font-extrabold tracking-[-0.045em]">
          Have an idea worth <span className="gradient-text">building?</span>
        </h2>
        <Button to="/#contact" icon="arrowRight" className="relative min-h-[60px] px-[30px] text-[17px]">
          Start a conversation
        </Button>
      </Reveal>
    </section>
  );
}
