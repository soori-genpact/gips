/* ═══════════════════════════════════════════════
   Reusable SVG illustrations for the briefing
   ═══════════════════════════════════════════════ */

export function EmailIntakeIcon() {
  return (
    <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
      <rect x="12" y="22" width="56" height="38" rx="4" stroke="var(--accent)" strokeWidth="1.5" opacity="0.7" />
      <path d="M12 26l28 18 28-18" stroke="var(--accent)" strokeWidth="1.5" opacity="0.5" />
      <rect x="48" y="8" width="22" height="28" rx="2" fill="var(--surface2)" stroke="var(--accent2)" strokeWidth="1" opacity="0.6" />
      <line x1="52" y1="15" x2="66" y2="15" stroke="var(--accent2)" strokeWidth="0.8" opacity="0.4" />
      <line x1="52" y1="19" x2="63" y2="19" stroke="var(--accent2)" strokeWidth="0.8" opacity="0.4" />
      <line x1="52" y1="23" x2="66" y2="23" stroke="var(--accent2)" strokeWidth="0.8" opacity="0.4" />
      <line x1="52" y1="27" x2="60" y2="27" stroke="var(--accent2)" strokeWidth="0.8" opacity="0.4" />
    </svg>
  )
}

export function AIBrainIcon() {
  return (
    <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
      <circle cx="40" cy="40" r="24" stroke="var(--accent2)" strokeWidth="1.5" opacity="0.5" />
      <circle cx="40" cy="40" r="16" stroke="var(--accent2)" strokeWidth="1" opacity="0.3" />
      <circle cx="40" cy="40" r="5" fill="var(--accent2)" opacity="0.6" />
      {/* Neural connections */}
      <line x1="40" y1="16" x2="40" y2="28" stroke="var(--accent2)" strokeWidth="0.8" opacity="0.5" />
      <line x1="40" y1="52" x2="40" y2="64" stroke="var(--accent2)" strokeWidth="0.8" opacity="0.5" />
      <line x1="16" y1="40" x2="28" y2="40" stroke="var(--accent2)" strokeWidth="0.8" opacity="0.5" />
      <line x1="52" y1="40" x2="64" y2="40" stroke="var(--accent2)" strokeWidth="0.8" opacity="0.5" />
      <line x1="23" y1="23" x2="31" y2="31" stroke="var(--accent2)" strokeWidth="0.8" opacity="0.4" />
      <line x1="49" y1="49" x2="57" y2="57" stroke="var(--accent2)" strokeWidth="0.8" opacity="0.4" />
      <line x1="57" y1="23" x2="49" y2="31" stroke="var(--accent2)" strokeWidth="0.8" opacity="0.4" />
      <line x1="31" y1="49" x2="23" y2="57" stroke="var(--accent2)" strokeWidth="0.8" opacity="0.4" />
      {/* Nodes */}
      <circle cx="40" cy="16" r="2.5" fill="var(--accent2)" opacity="0.5" />
      <circle cx="40" cy="64" r="2.5" fill="var(--accent2)" opacity="0.5" />
      <circle cx="16" cy="40" r="2.5" fill="var(--accent2)" opacity="0.5" />
      <circle cx="64" cy="40" r="2.5" fill="var(--accent2)" opacity="0.5" />
    </svg>
  )
}

export function RoutingIcon() {
  return (
    <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
      {/* Center node */}
      <rect x="30" y="30" width="20" height="20" rx="4" fill="var(--accent)" opacity="0.2" stroke="var(--accent)" strokeWidth="1.5" />
      {/* Branches */}
      <path d="M50 35 L68 20" stroke="var(--success)" strokeWidth="1.5" opacity="0.6" />
      <path d="M50 45 L68 60" stroke="var(--warning)" strokeWidth="1.5" opacity="0.6" strokeDasharray="3 2" />
      <path d="M30 40 L12 40" stroke="var(--accent2)" strokeWidth="1.5" opacity="0.5" />
      {/* End nodes */}
      <rect x="62" y="14" width="14" height="12" rx="3" fill="var(--success)" opacity="0.2" stroke="var(--success)" strokeWidth="1" />
      <text x="69" y="23" textAnchor="middle" fontSize="6" fill="var(--success)" opacity="0.8">A</text>
      <rect x="62" y="54" width="14" height="12" rx="3" fill="var(--warning)" opacity="0.2" stroke="var(--warning)" strokeWidth="1" />
      <text x="69" y="63" textAnchor="middle" fontSize="6" fill="var(--warning)" opacity="0.8">B</text>
      <circle cx="12" cy="40" r="5" fill="var(--accent2)" opacity="0.2" stroke="var(--accent2)" strokeWidth="1" />
    </svg>
  )
}

export function WorkflowIcon() {
  return (
    <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
      {/* Chevron arrows */}
      <path d="M8 25 L22 40 L8 55 L18 55 L32 40 L18 25 Z" fill="var(--accent)" opacity="0.15" stroke="var(--accent)" strokeWidth="1" />
      <path d="M28 25 L42 40 L28 55 L38 55 L52 40 L38 25 Z" fill="var(--accent)" opacity="0.25" stroke="var(--accent)" strokeWidth="1" />
      <path d="M48 25 L62 40 L48 55 L58 55 L72 40 L58 25 Z" fill="var(--accent)" opacity="0.4" stroke="var(--accent)" strokeWidth="1" />
    </svg>
  )
}

export function PolicyIcon() {
  return (
    <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
      <rect x="18" y="10" width="44" height="56" rx="4" fill="var(--surface2)" stroke="var(--text-muted)" strokeWidth="1.2" opacity="0.6" />
      <line x1="26" y1="22" x2="54" y2="22" stroke="var(--text-muted)" strokeWidth="0.8" opacity="0.4" />
      <line x1="26" y1="28" x2="50" y2="28" stroke="var(--text-muted)" strokeWidth="0.8" opacity="0.4" />
      <line x1="26" y1="34" x2="54" y2="34" stroke="var(--text-muted)" strokeWidth="0.8" opacity="0.4" />
      <line x1="26" y1="40" x2="45" y2="40" stroke="var(--text-muted)" strokeWidth="0.8" opacity="0.4" />
      {/* Checkmark */}
      <circle cx="56" cy="56" r="14" fill="var(--success)" opacity="0.15" stroke="var(--success)" strokeWidth="1.5" />
      <path d="M49 56 L54 61 L63 51" stroke="var(--success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
    </svg>
  )
}

export function ShieldIcon() {
  return (
    <svg viewBox="0 0 60 60" width="48" height="48" fill="none">
      <path d="M30 6 L50 16 V34 C50 44 40 52 30 56 C20 52 10 44 10 34 V16 Z"
        fill="var(--accent-glow)" stroke="var(--accent)" strokeWidth="1.5" opacity="0.6" />
      <path d="M23 30 L28 35 L37 25" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
    </svg>
  )
}

export function GearIcon() {
  return (
    <svg viewBox="0 0 60 60" width="48" height="48" fill="none">
      <circle cx="30" cy="30" r="10" stroke="var(--accent2)" strokeWidth="1.5" opacity="0.6" />
      <circle cx="30" cy="30" r="4" fill="var(--accent2)" opacity="0.4" />
      {/* Gear teeth */}
      {[0,45,90,135,180,225,270,315].map(angle => {
        const rad = (angle * Math.PI) / 180
        const x1 = 30 + 13 * Math.cos(rad), y1 = 30 + 13 * Math.sin(rad)
        const x2 = 30 + 18 * Math.cos(rad), y2 = 30 + 18 * Math.sin(rad)
        return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--accent2)" strokeWidth="2.5" strokeLinecap="round" opacity="0.45" />
      })}
    </svg>
  )
}

export function ChartIcon() {
  return (
    <svg viewBox="0 0 60 60" width="48" height="48" fill="none">
      <rect x="8" y="38" width="8" height="16" rx="1" fill="var(--accent)" opacity="0.3" />
      <rect x="20" y="28" width="8" height="26" rx="1" fill="var(--accent)" opacity="0.4" />
      <rect x="32" y="18" width="8" height="36" rx="1" fill="var(--accent)" opacity="0.5" />
      <rect x="44" y="8" width="8" height="46" rx="1" fill="var(--accent)" opacity="0.65" />
      <line x1="6" y1="54" x2="54" y2="54" stroke="var(--text-muted)" strokeWidth="1" opacity="0.4" />
      {/* Trend line */}
      <path d="M12 42 L24 34 L36 24 L48 14" stroke="var(--accent)" strokeWidth="1.5" opacity="0.7" strokeLinecap="round" />
    </svg>
  )
}

export function CloudIcon() {
  return (
    <svg viewBox="0 0 80 60" width="70" height="52" fill="none">
      <path d="M20 44 C8 44 2 36 8 28 C10 18 22 14 30 18 C34 8 48 6 54 14 C64 12 74 20 70 30 C78 32 78 44 66 44 Z"
        fill="var(--accent2)" opacity="0.08" stroke="var(--accent2)" strokeWidth="1.2" />
      {/* Upload arrow */}
      <path d="M40 24 V38" stroke="var(--accent2)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M35 29 L40 24 L45 29" stroke="var(--accent2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </svg>
  )
}

/* ── AI Capability Icons (48×48) ── */

export function InterpretIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
      {/* Envelope */}
      <rect x="4" y="12" width="28" height="20" rx="2" stroke="var(--accent)" strokeWidth="1.2" opacity="0.6" />
      <path d="M4 14 L18 24 L32 14" stroke="var(--accent)" strokeWidth="1.2" opacity="0.4" />
      {/* Scanning lines */}
      <line x1="36" y1="14" x2="44" y2="14" stroke="var(--accent2)" strokeWidth="1" opacity="0.5" />
      <line x1="36" y1="19" x2="44" y2="19" stroke="var(--accent2)" strokeWidth="1" opacity="0.4" />
      <line x1="36" y1="24" x2="42" y2="24" stroke="var(--accent2)" strokeWidth="1" opacity="0.3" />
      {/* Sparkle */}
      <circle cx="40" cy="34" r="1.5" fill="var(--accent)" opacity="0.6" />
      <line x1="40" y1="30" x2="40" y2="38" stroke="var(--accent)" strokeWidth="0.6" opacity="0.4" />
      <line x1="36" y1="34" x2="44" y2="34" stroke="var(--accent)" strokeWidth="0.6" opacity="0.4" />
    </svg>
  )
}

export function ClassifyIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
      {/* Tag shapes */}
      <rect x="4" y="8" width="18" height="12" rx="2" fill="var(--accent)" opacity="0.1" stroke="var(--accent)" strokeWidth="1" />
      <rect x="26" y="8" width="18" height="12" rx="2" fill="var(--accent2)" opacity="0.1" stroke="var(--accent2)" strokeWidth="1" />
      <rect x="10" y="26" width="18" height="12" rx="2" fill="var(--success)" opacity="0.1" stroke="var(--success)" strokeWidth="1" />
      {/* Connecting lines */}
      <line x1="13" y1="20" x2="19" y2="26" stroke="var(--text-muted)" strokeWidth="0.8" opacity="0.3" />
      <line x1="35" y1="20" x2="28" y2="26" stroke="var(--text-muted)" strokeWidth="0.8" opacity="0.3" />
      {/* Dots inside tags */}
      <circle cx="9" cy="14" r="1.5" fill="var(--accent)" opacity="0.5" />
      <circle cx="31" cy="14" r="1.5" fill="var(--accent2)" opacity="0.5" />
      <circle cx="15" cy="32" r="1.5" fill="var(--success)" opacity="0.5" />
      {/* Score bar */}
      <rect x="32" y="30" width="12" height="3" rx="1.5" fill="var(--border)" opacity="0.4" />
      <rect x="32" y="30" width="9" height="3" rx="1.5" fill="var(--accent)" opacity="0.5" />
    </svg>
  )
}

export function ExtractIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
      {/* Document */}
      <rect x="6" y="4" width="22" height="30" rx="2" stroke="var(--text-muted)" strokeWidth="1" opacity="0.5" />
      <line x1="11" y1="11" x2="23" y2="11" stroke="var(--text-muted)" strokeWidth="0.7" opacity="0.3" />
      <line x1="11" y1="15" x2="21" y2="15" stroke="var(--text-muted)" strokeWidth="0.7" opacity="0.3" />
      <line x1="11" y1="19" x2="23" y2="19" stroke="var(--text-muted)" strokeWidth="0.7" opacity="0.3" />
      <line x1="11" y1="23" x2="18" y2="23" stroke="var(--text-muted)" strokeWidth="0.7" opacity="0.3" />
      {/* Arrow pointing to JSON */}
      <path d="M28 20 L33 20" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M31 17 L34 20 L31 23" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      {/* JSON bracket */}
      <path d="M36 12 C34 12 34 14 34 16 L34 18 C34 20 33 20 33 20 C33 20 34 20 34 22 L34 24 C34 26 34 28 36 28" stroke="var(--accent2)" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M40 12 C42 12 42 14 42 16 L42 18 C42 20 43 20 43 20 C43 20 42 20 42 22 L42 24 C42 26 42 28 40 28" stroke="var(--accent2)" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6" />
      <circle cx="38" cy="17" r="1" fill="var(--accent2)" opacity="0.5" />
      <circle cx="38" cy="20" r="1" fill="var(--accent2)" opacity="0.5" />
      <circle cx="38" cy="23" r="1" fill="var(--accent2)" opacity="0.5" />
    </svg>
  )
}

export function TriggerIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
      {/* Lightning bolt */}
      <path d="M22 4 L14 22 L22 22 L18 40 L34 18 L24 18 L30 4 Z" fill="var(--accent)" opacity="0.15" stroke="var(--accent)" strokeWidth="1.2" strokeLinejoin="round" />
      {/* Radiating lines */}
      <line x1="8" y1="22" x2="4" y2="22" stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <line x1="10" y1="12" x2="7" y2="9" stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <line x1="10" y1="32" x2="7" y2="35" stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <line x1="38" y1="12" x2="41" y2="9" stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <line x1="40" y1="22" x2="44" y2="22" stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    </svg>
  )
}

/* ── Matrix Card Icons (56×56) ── */

export function AIAgentIcon() {
  return (
    <svg viewBox="0 0 56 56" width="56" height="56" fill="none">
      {/* Brain circuit */}
      <circle cx="28" cy="28" r="18" stroke="var(--accent2)" strokeWidth="1.2" opacity="0.4" />
      <circle cx="28" cy="28" r="6" fill="var(--accent2)" opacity="0.2" stroke="var(--accent2)" strokeWidth="1" />
      {/* Nodes */}
      <circle cx="28" cy="10" r="3" fill="var(--accent2)" opacity="0.4" />
      <circle cx="28" cy="46" r="3" fill="var(--accent2)" opacity="0.4" />
      <circle cx="10" cy="28" r="3" fill="var(--accent2)" opacity="0.4" />
      <circle cx="46" cy="28" r="3" fill="var(--accent2)" opacity="0.4" />
      {/* Connections */}
      <line x1="28" y1="13" x2="28" y2="22" stroke="var(--accent2)" strokeWidth="0.8" opacity="0.5" />
      <line x1="28" y1="34" x2="28" y2="43" stroke="var(--accent2)" strokeWidth="0.8" opacity="0.5" />
      <line x1="13" y1="28" x2="22" y2="28" stroke="var(--accent2)" strokeWidth="0.8" opacity="0.5" />
      <line x1="34" y1="28" x2="43" y2="28" stroke="var(--accent2)" strokeWidth="0.8" opacity="0.5" />
      {/* Pulse */}
      <circle cx="28" cy="28" r="3" fill="var(--accent2)" opacity="0.6" />
    </svg>
  )
}

export function HumanExpertsIcon() {
  return (
    <svg viewBox="0 0 56 56" width="56" height="56" fill="none">
      {/* Person 1 */}
      <circle cx="18" cy="18" r="6" stroke="var(--accent)" strokeWidth="1.2" opacity="0.5" />
      <path d="M8 36 C8 30 12 26 18 26 C24 26 28 30 28 36" stroke="var(--accent)" strokeWidth="1.2" opacity="0.4" fill="none" />
      {/* Person 2 */}
      <circle cx="38" cy="18" r="6" stroke="var(--accent)" strokeWidth="1.2" opacity="0.5" />
      <path d="M28 36 C28 30 32 26 38 26 C44 26 48 30 48 36" stroke="var(--accent)" strokeWidth="1.2" opacity="0.4" fill="none" />
      {/* Handshake line */}
      <path d="M22 32 L28 28 L34 32" stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      {/* Expertise sparkle */}
      <circle cx="28" cy="44" r="2" fill="var(--accent)" opacity="0.3" />
      <line x1="28" y1="40" x2="28" y2="48" stroke="var(--accent)" strokeWidth="0.6" opacity="0.3" />
      <line x1="24" y1="44" x2="32" y2="44" stroke="var(--accent)" strokeWidth="0.6" opacity="0.3" />
    </svg>
  )
}

export function PlatformEngineIcon() {
  return (
    <svg viewBox="0 0 56 56" width="56" height="56" fill="none">
      {/* Server stack */}
      <rect x="10" y="8" width="36" height="10" rx="2" stroke="var(--success)" strokeWidth="1.2" opacity="0.5" />
      <rect x="10" y="22" width="36" height="10" rx="2" stroke="var(--success)" strokeWidth="1.2" opacity="0.4" />
      <rect x="10" y="36" width="36" height="10" rx="2" stroke="var(--success)" strokeWidth="1.2" opacity="0.3" />
      {/* Status dots */}
      <circle cx="16" cy="13" r="1.5" fill="var(--success)" opacity="0.6" />
      <circle cx="22" cy="13" r="1.5" fill="var(--success)" opacity="0.4" />
      <circle cx="16" cy="27" r="1.5" fill="var(--success)" opacity="0.5" />
      <circle cx="22" cy="27" r="1.5" fill="var(--success)" opacity="0.3" />
      <circle cx="16" cy="41" r="1.5" fill="var(--success)" opacity="0.4" />
      {/* Lines */}
      <line x1="30" y1="13" x2="40" y2="13" stroke="var(--success)" strokeWidth="0.7" opacity="0.3" />
      <line x1="30" y1="27" x2="38" y2="27" stroke="var(--success)" strokeWidth="0.7" opacity="0.3" />
      <line x1="30" y1="41" x2="36" y2="41" stroke="var(--success)" strokeWidth="0.7" opacity="0.3" />
    </svg>
  )
}

/* ── Trend Icons (44×44) ── */

export function NLPIcon() {
  return (
    <svg viewBox="0 0 44 44" width="44" height="44" fill="none">
      {/* Text lines */}
      <line x1="6" y1="10" x2="28" y2="10" stroke="var(--text-muted)" strokeWidth="1" opacity="0.4" />
      <line x1="6" y1="16" x2="24" y2="16" stroke="var(--text-muted)" strokeWidth="1" opacity="0.35" />
      <line x1="6" y1="22" x2="30" y2="22" stroke="var(--text-muted)" strokeWidth="1" opacity="0.3" />
      {/* Highlight bracket */}
      <rect x="4" y="8" width="28" height="16" rx="2" stroke="var(--accent2)" strokeWidth="1" opacity="0.3" fill="none" />
      {/* Arrow to label */}
      <path d="M32 16 L36 16" stroke="var(--accent2)" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <rect x="36" y="12" width="6" height="8" rx="1" fill="var(--accent2)" opacity="0.2" stroke="var(--accent2)" strokeWidth="0.8" />
      {/* Category dot */}
      <circle cx="39" cy="16" r="1.5" fill="var(--accent2)" opacity="0.5" />
      {/* Second classification */}
      <rect x="10" y="30" width="20" height="8" rx="2" fill="var(--accent)" opacity="0.1" stroke="var(--accent)" strokeWidth="0.8" />
      <line x1="14" y1="34" x2="26" y2="34" stroke="var(--accent)" strokeWidth="0.7" opacity="0.4" />
    </svg>
  )
}

export function PredictiveIcon() {
  return (
    <svg viewBox="0 0 44 44" width="44" height="44" fill="none">
      {/* Chart */}
      <line x1="6" y1="36" x2="38" y2="36" stroke="var(--text-muted)" strokeWidth="0.8" opacity="0.4" />
      <line x1="6" y1="6" x2="6" y2="36" stroke="var(--text-muted)" strokeWidth="0.8" opacity="0.4" />
      {/* Data line */}
      <polyline points="10,30 16,26 22,28 28,18 34,14" stroke="var(--accent2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" fill="none" />
      {/* Prediction dashed line */}
      <line x1="34" y1="14" x2="40" y2="8" stroke="var(--accent)" strokeWidth="1.2" strokeDasharray="2 2" strokeLinecap="round" opacity="0.5" />
      {/* Confidence band */}
      <path d="M28 16 L34 12 L40 6 L40 10 L34 16 L28 20 Z" fill="var(--accent)" opacity="0.06" />
      {/* Dots */}
      <circle cx="10" cy="30" r="2" fill="var(--accent2)" opacity="0.4" />
      <circle cx="22" cy="28" r="2" fill="var(--accent2)" opacity="0.4" />
      <circle cx="34" cy="14" r="2" fill="var(--accent2)" opacity="0.5" />
    </svg>
  )
}

export function GenAIIcon() {
  return (
    <svg viewBox="0 0 44 44" width="44" height="44" fill="none">
      {/* Document */}
      <rect x="4" y="6" width="20" height="28" rx="2" stroke="var(--text-muted)" strokeWidth="1" opacity="0.4" />
      <line x1="8" y1="13" x2="20" y2="13" stroke="var(--text-muted)" strokeWidth="0.6" opacity="0.3" />
      <line x1="8" y1="17" x2="18" y2="17" stroke="var(--text-muted)" strokeWidth="0.6" opacity="0.3" />
      <line x1="8" y1="21" x2="20" y2="21" stroke="var(--text-muted)" strokeWidth="0.6" opacity="0.3" />
      {/* Sparkle / AI magic */}
      <circle cx="32" cy="16" r="6" stroke="var(--accent)" strokeWidth="1.2" opacity="0.5" />
      <line x1="32" y1="10" x2="32" y2="22" stroke="var(--accent)" strokeWidth="0.8" opacity="0.4" />
      <line x1="26" y1="16" x2="38" y2="16" stroke="var(--accent)" strokeWidth="0.8" opacity="0.4" />
      <line x1="28" y1="12" x2="36" y2="20" stroke="var(--accent)" strokeWidth="0.6" opacity="0.3" />
      <line x1="36" y1="12" x2="28" y2="20" stroke="var(--accent)" strokeWidth="0.6" opacity="0.3" />
      {/* Arrow down to structured output */}
      <path d="M26 26 L30 30 L34 26" stroke="var(--accent2)" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <rect x="26" y="32" width="14" height="6" rx="1" fill="var(--accent2)" opacity="0.15" stroke="var(--accent2)" strokeWidth="0.8" />
    </svg>
  )
}

export function ComputerVisionIcon() {
  return (
    <svg viewBox="0 0 44 44" width="44" height="44" fill="none">
      {/* Camera/eye frame */}
      <rect x="6" y="10" width="32" height="24" rx="3" stroke="var(--accent2)" strokeWidth="1.2" opacity="0.5" />
      {/* Lens */}
      <circle cx="22" cy="22" r="8" stroke="var(--accent2)" strokeWidth="1" opacity="0.4" />
      <circle cx="22" cy="22" r="4" fill="var(--accent2)" opacity="0.2" />
      <circle cx="22" cy="22" r="1.5" fill="var(--accent2)" opacity="0.5" />
      {/* Scan crosshairs */}
      <line x1="22" y1="10" x2="22" y2="14" stroke="var(--accent)" strokeWidth="0.8" opacity="0.4" />
      <line x1="22" y1="30" x2="22" y2="34" stroke="var(--accent)" strokeWidth="0.8" opacity="0.4" />
      <line x1="6" y1="22" x2="14" y2="22" stroke="var(--accent)" strokeWidth="0.8" opacity="0.4" />
      <line x1="30" y1="22" x2="38" y2="22" stroke="var(--accent)" strokeWidth="0.8" opacity="0.4" />
      {/* Detection box */}
      <rect x="16" y="17" width="12" height="10" rx="1" stroke="var(--success)" strokeWidth="0.8" opacity="0.4" strokeDasharray="2 1" />
    </svg>
  )
}

export function RAGIcon() {
  return (
    <svg viewBox="0 0 44 44" width="44" height="44" fill="none">
      {/* Database cylinder */}
      <ellipse cx="14" cy="12" rx="8" ry="3" stroke="var(--text-muted)" strokeWidth="1" opacity="0.4" />
      <line x1="6" y1="12" x2="6" y2="28" stroke="var(--text-muted)" strokeWidth="1" opacity="0.4" />
      <line x1="22" y1="12" x2="22" y2="28" stroke="var(--text-muted)" strokeWidth="1" opacity="0.4" />
      <ellipse cx="14" cy="28" rx="8" ry="3" stroke="var(--text-muted)" strokeWidth="1" opacity="0.4" />
      {/* Arrow */}
      <path d="M22 20 L28 20" stroke="var(--accent2)" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M26 17 L29 20 L26 23" stroke="var(--accent2)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      {/* AI brain */}
      <circle cx="35" cy="20" r="7" stroke="var(--accent)" strokeWidth="1.2" opacity="0.5" />
      <circle cx="35" cy="20" r="3" fill="var(--accent)" opacity="0.2" />
      {/* Output */}
      <path d="M35 27 L35 34" stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <rect x="30" y="34" width="10" height="4" rx="1" fill="var(--accent)" opacity="0.15" stroke="var(--accent)" strokeWidth="0.6" />
    </svg>
  )
}

export function AgenticIcon() {
  return (
    <svg viewBox="0 0 44 44" width="44" height="44" fill="none">
      {/* Central agent */}
      <circle cx="22" cy="22" r="8" fill="var(--accent2)" opacity="0.1" stroke="var(--accent2)" strokeWidth="1.2" />
      <circle cx="22" cy="22" r="3" fill="var(--accent2)" opacity="0.4" />
      {/* Orbiting tasks */}
      <circle cx="22" cy="22" r="16" stroke="var(--accent2)" strokeWidth="0.6" opacity="0.2" strokeDasharray="3 3" />
      <circle cx="22" cy="6" r="3" fill="var(--accent)" opacity="0.3" stroke="var(--accent)" strokeWidth="0.8" />
      <circle cx="6" cy="28" r="3" fill="var(--success)" opacity="0.3" stroke="var(--success)" strokeWidth="0.8" />
      <circle cx="38" cy="28" r="3" fill="var(--accent2)" opacity="0.3" stroke="var(--accent2)" strokeWidth="0.8" />
      {/* Decision arrows */}
      <path d="M19 15 L22 9" stroke="var(--accent)" strokeWidth="0.8" opacity="0.4" />
      <path d="M16 25 L9 27" stroke="var(--success)" strokeWidth="0.8" opacity="0.4" />
      <path d="M28 25 L35 27" stroke="var(--accent2)" strokeWidth="0.8" opacity="0.4" />
    </svg>
  )
}
