// One place that turns an accent name ('violet', 'cyan'…) into colours,
// so data files only say *which* accent and components decide *how* it looks.

export const ACCENTS = {
  violet: { solid: '#7C5CFF', light: '#A78BFA', gradient: 'linear-gradient(135deg,#7C5CFF,#A78BFA)', glow: 'rgba(124,92,255,.6)', tint: 'rgba(124,92,255,.22)' },
  cyan: { solid: '#22D3EE', light: '#67E8F9', gradient: 'linear-gradient(135deg,#22D3EE,#67E8F9)', glow: 'rgba(34,211,238,.55)', tint: 'rgba(34,211,238,.18)' },
  pink: { solid: '#F472B6', light: '#F9A8D4', gradient: 'linear-gradient(135deg,#F472B6,#FBCFE8)', glow: 'rgba(244,114,182,.55)', tint: 'rgba(244,114,182,.18)' },
  amber: { solid: '#FBBF24', light: '#FCD34D', gradient: 'linear-gradient(135deg,#FBBF24,#FDE68A)', glow: 'rgba(251,191,36,.5)', tint: 'rgba(251,191,36,.16)' },
  mint: { solid: '#34D399', light: '#6EE7B7', gradient: 'linear-gradient(135deg,#34D399,#A7F3D0)', glow: 'rgba(52,211,153,.5)', tint: 'rgba(52,211,153,.16)' },
  rainbow: { solid: '#7C5CFF', light: '#C4B5FD', gradient: 'conic-gradient(#7C5CFF,#22D3EE,#F472B6,#FBBF24,#7C5CFF)', glow: 'rgba(124,92,255,.6)', tint: 'rgba(124,92,255,.22)' },
};

export const accent = (name) => ACCENTS[name] ?? { solid: '#A7ADC9', light: '#C6CBE4', gradient: 'linear-gradient(135deg,#1A1F45,#0C1029)', glow: 'rgba(167,173,201,.3)', tint: 'rgba(255,255,255,.04)' };
