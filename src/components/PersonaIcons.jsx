/* SVG avatar/silhouette illustrations for each persona */

const base = { width: 48, height: 48 }

export function UnderwriterSvg() {
  return (
    <svg {...base} viewBox="0 0 48 48" fill="none">
      {/* Chart/analysis visual */}
      <rect x="6" y="10" width="36" height="28" rx="3" stroke="var(--accent)" strokeWidth="1.2" opacity="0.5" />
      <polyline points="12,30 18,24 24,28 30,18 36,22" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      <circle cx="30" cy="18" r="2" fill="var(--accent)" opacity="0.6" />
      <line x1="10" y1="34" x2="38" y2="34" stroke="var(--accent)" strokeWidth="0.8" opacity="0.3" />
    </svg>
  )
}

export function OperationsSvg() {
  return (
    <svg {...base} viewBox="0 0 48 48" fill="none">
      {/* Gear + checklist */}
      <circle cx="20" cy="24" r="8" stroke="var(--accent2)" strokeWidth="1.2" opacity="0.5" />
      <circle cx="20" cy="24" r="3" fill="var(--accent2)" opacity="0.3" />
      {[0,60,120,180,240,300].map(a => {
        const r = (a * Math.PI) / 180
        return <line key={a} x1={20+10*Math.cos(r)} y1={24+10*Math.sin(r)} x2={20+13*Math.cos(r)} y2={24+13*Math.sin(r)} stroke="var(--accent2)" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      })}
      {/* Checklist */}
      <rect x="32" y="14" width="10" height="20" rx="1.5" stroke="var(--text-muted)" strokeWidth="0.8" opacity="0.4" />
      <line x1="34" y1="19" x2="40" y2="19" stroke="var(--text-muted)" strokeWidth="0.6" opacity="0.3" />
      <line x1="34" y1="23" x2="40" y2="23" stroke="var(--text-muted)" strokeWidth="0.6" opacity="0.3" />
      <line x1="34" y1="27" x2="40" y2="27" stroke="var(--text-muted)" strokeWidth="0.6" opacity="0.3" />
    </svg>
  )
}

export function ClaimsSvg() {
  return (
    <svg {...base} viewBox="0 0 48 48" fill="none">
      {/* Magnifying glass over document */}
      <rect x="8" y="8" width="22" height="30" rx="2" stroke="var(--text-muted)" strokeWidth="1" opacity="0.4" />
      <line x1="13" y1="15" x2="25" y2="15" stroke="var(--text-muted)" strokeWidth="0.7" opacity="0.3" />
      <line x1="13" y1="19" x2="23" y2="19" stroke="var(--text-muted)" strokeWidth="0.7" opacity="0.3" />
      <line x1="13" y1="23" x2="25" y2="23" stroke="var(--text-muted)" strokeWidth="0.7" opacity="0.3" />
      <circle cx="32" cy="26" r="8" stroke="var(--accent)" strokeWidth="1.5" opacity="0.6" />
      <line x1="38" y1="32" x2="42" y2="36" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}

export function BrokerSvg() {
  return (
    <svg {...base} viewBox="0 0 48 48" fill="none">
      {/* Handshake */}
      <path d="M8 28 C8 28 14 22 20 24 C22 25 24 24 24 24" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M40 28 C40 28 34 22 28 24 C26 25 24 24 24 24" stroke="var(--accent2)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <circle cx="24" cy="24" r="3" fill="var(--accent)" opacity="0.3" />
      {/* Connection lines */}
      <circle cx="8" cy="28" r="3" fill="var(--accent)" opacity="0.2" stroke="var(--accent)" strokeWidth="1" />
      <circle cx="40" cy="28" r="3" fill="var(--accent2)" opacity="0.2" stroke="var(--accent2)" strokeWidth="1" />
      <path d="M12 16 L20 16 L20 20" stroke="var(--text-muted)" strokeWidth="0.8" opacity="0.3" />
      <path d="M36 16 L28 16 L28 20" stroke="var(--text-muted)" strokeWidth="0.8" opacity="0.3" />
    </svg>
  )
}

export function ComplianceSvg() {
  return (
    <svg {...base} viewBox="0 0 48 48" fill="none">
      {/* Shield with checkmark */}
      <path d="M24 6 L40 14 V28 C40 36 32 42 24 46 C16 42 8 36 8 28 V14 Z"
        fill="var(--success)" stroke="var(--success)" strokeWidth="1.3" opacity="0.5" />
      <path d="M18 24 L22 28 L30 19" stroke="var(--success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    </svg>
  )
}

export function ITAdminSvg() {
  return (
    <svg {...base} viewBox="0 0 48 48" fill="none">
      {/* Server/monitor */}
      <rect x="10" y="8" width="28" height="20" rx="2" stroke="var(--accent2)" strokeWidth="1.2" opacity="0.5" />
      <line x1="24" y1="28" x2="24" y2="34" stroke="var(--accent2)" strokeWidth="1" opacity="0.4" />
      <line x1="18" y1="34" x2="30" y2="34" stroke="var(--accent2)" strokeWidth="1" opacity="0.4" />
      {/* Screen content */}
      <rect x="14" y="12" width="8" height="4" rx="0.5" fill="var(--accent2)" opacity="0.15" />
      <rect x="14" y="18" width="12" height="4" rx="0.5" fill="var(--accent2)" opacity="0.1" />
      <rect x="28" y="12" width="6" height="10" rx="0.5" fill="var(--success)" opacity="0.1" />
      {/* Status dot */}
      <circle cx="37" cy="40" r="3" fill="var(--success)" opacity="0.4" />
    </svg>
  )
}

const personaSvgs = {
  'Underwriter': UnderwriterSvg,
  'Operations User': OperationsSvg,
  'Claims Adjuster': ClaimsSvg,
  'Broker / Agent': BrokerSvg,
  'Compliance Officer': ComplianceSvg,
  'IT Administrator': ITAdminSvg,
}

export default personaSvgs
