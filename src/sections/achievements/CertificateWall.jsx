import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from '../../components/ui/Icon.jsx';
import { Reveal } from '../../components/ui/Reveal.jsx';
import SectionHeading from '../../components/ui/SectionHeading.jsx';
import { accent } from '../../data/accents.js';

const TILTS = [-2, 1.5, -1, 2, -1.5, 1];
const EASE = [0.2, 0.8, 0.2, 1];

// The certificate itself: a framed "paper", or the scanned image once provided.
function Paper({ cert, large = false }) {
  if (cert.image) {
    // Scans are portrait pages: the wall card shows the top of the page,
    // the viewer shows the whole page.
    return large ? (
      <img src={cert.image} alt={cert.title} className="mx-auto max-h-[64vh] w-auto rounded-lg object-contain" />
    ) : (
      <img src={cert.image} alt="" className="size-full rounded-lg object-cover object-top" />
    );
  }
  return (
    <div
      className={`relative flex size-full flex-col items-center justify-center text-center text-panel ${large ? 'gap-3 p-5' : 'gap-2 p-3.5'}`}
      style={{
        borderRadius: 8,
        background: '#F7F5EE',
        border: '2px solid rgba(12,16,41,.8)',
        boxShadow: `inset 0 0 0 ${large ? 8 : 5}px #F7F5EE, inset 0 0 0 ${large ? 9 : 6}px rgba(12,16,41,.3)`,
      }}
    >
      <span className={`font-mono tracking-[0.22em] text-[#5E6370] uppercase ${large ? 'text-xs' : 'text-[9px]'}`}>Certificate</span>
      <span className={`font-display leading-[1.05] font-extrabold ${large ? 'text-[clamp(26px,3.6vw,42px)]' : 'text-lg'}`}>
        {large ? cert.title : cert.short}
      </span>
      {large ? (
        <span className="text-sm text-[#5E6370]">Add the scanned image in data/certificates.js</span>
      ) : (
        <>
          <span className="h-0.5 w-1/2 bg-[#E2DED3]" />
          <span className="h-0.5 w-1/3 bg-[#E2DED3]" />
          <span
            aria-hidden="true"
            className="absolute right-3.5 bottom-3 size-[34px] rounded-full"
            style={{ background: accent(cert.accent).solid, boxShadow: '0 0 0 3px #F7F5EE, 0 0 0 4px rgba(12,16,41,.35)' }}
          />
        </>
      )}
    </div>
  );
}

function Lightbox({ cert, onClose, returnFocusTo }) {
  const closeRef = useRef(null);

  // Focus the close button, lock page scroll, close on Esc, keep Tab inside, restore focus after.
  useEffect(() => {
    closeRef.current?.focus();
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'Tab') {
        event.preventDefault();
        closeRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    const trigger = returnFocusTo;
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', onKey);
      trigger?.focus();
    };
  }, [onClose, returnFocusTo]);

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#05070F]/75 p-4 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        layoutId={`certificate-${cert.id}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificate-title"
        className="gradient-border w-full max-w-[900px] overflow-hidden rounded-[28px] shadow-[0_60px_120px_-40px_rgba(124,92,255,.7)]"
        transition={{ duration: 0.5, ease: EASE }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 py-[18px] pr-[18px] pl-7">
          <div className="flex min-w-0 flex-col gap-0.5">
            <span id="certificate-title" className="font-display text-[22px] font-extrabold">{cert.title}</span>
            <span className="text-sm text-muted">{cert.meta}</span>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close certificate"
            className="grid size-12 flex-none place-items-center rounded-full bg-white/12 transition-[rotate,background-color] duration-200 hover:rotate-90 hover:bg-white/20"
          >
            <Icon name="close" size={18} strokeWidth={2.4} />
          </button>
        </div>
        <div className="px-7 pb-7">
          <div
            className={`rounded-[14px] p-[clamp(12px,2.5vw,28px)] ${cert.image ? 'flex justify-center' : 'aspect-[1.414/1]'}`}
            style={{ background: accent(cert.accent).gradient }}
          >
            <Paper cert={cert} large />
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  );
}

export default function CertificateWall({ certificates }) {
  const [openId, setOpenId] = useState(null);
  const [trigger, setTrigger] = useState(null);
  const open = certificates.find((c) => c.id === openId);
  const close = useCallback(() => setOpenId(null), []);

  return (
    <section className="wrap relative flex flex-col gap-10 pt-36 pb-[72px]">
      <SectionHeading title="Certificates," accent="framed." description="Click any certificate to open it full size." />
      <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(min(270px,100%),1fr))] gap-x-[22px] gap-y-7 px-1.5 py-3">
        {certificates.map((cert, i) => (
          <motion.button
            key={cert.id}
            type="button"
            layoutId={`certificate-${cert.id}`}
            onClick={(event) => {
              setTrigger(event.currentTarget);
              setOpenId(cert.id);
            }}
            aria-label={`View ${cert.title}`}
            className="glass flex flex-col overflow-hidden rounded-3xl text-left"
            style={{ rotate: TILTS[i % TILTS.length] }}
            whileHover={{ rotate: 0, y: -10, scale: 1.02, boxShadow: '0 40px 80px -30px rgba(124,92,255,.7)' }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <div className="aspect-[1.414/1] overflow-hidden p-[18px]" style={{ background: accent(cert.accent).gradient }}>
              <Paper cert={cert} />
            </div>
            <div className="flex items-center justify-between gap-3 px-5 py-[18px]">
              <span className="flex min-w-0 flex-col gap-0.5">
                <span className="font-display text-[17px] font-bold">{cert.title}</span>
                <span className="text-sm text-muted">{cert.meta}</span>
              </span>
              <span aria-hidden="true" className="grid size-10 flex-none place-items-center rounded-full bg-linear-to-br from-violet to-cyan text-on-accent">
                <Icon name="expand" size={16} strokeWidth={2.2} />
              </span>
            </div>
          </motion.button>
        ))}
      </Reveal>

      <AnimatePresence>
        {open && <Lightbox cert={open} onClose={close} returnFocusTo={trigger} />}
      </AnimatePresence>
    </section>
  );
}
