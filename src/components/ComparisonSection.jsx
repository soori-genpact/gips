import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { comparisonRows, pillars } from '../data/content'
import SectionHeader from './SectionHeader'
import './ComparisonSection.css'

/* ── SVG illustrations for the dilemma cards ── */
function SafeIllustration() {
  return (
    <svg viewBox="0 0 200 180" className="dilemma-svg" aria-hidden="true">
      {/* Safe body */}
      <rect x="40" y="30" width="120" height="120" rx="6" fill="var(--surface3)" stroke="var(--text-muted)" strokeWidth="1.5" opacity="0.7" />
      <rect x="48" y="38" width="104" height="104" rx="3" fill="var(--surface2)" stroke="var(--border)" strokeWidth="1" />
      {/* Lock */}
      <rect x="82" y="78" width="36" height="30" rx="4" fill="var(--text-muted)" opacity="0.5" />
      <path d="M92 78 V68 a8 8 0 0 1 16 0 V78" fill="none" stroke="var(--text-muted)" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      <circle cx="100" cy="90" r="3" fill="var(--bg)" />
      {/* Handle */}
      <rect x="160" y="70" width="8" height="40" rx="4" fill="var(--text-muted)" opacity="0.4" />
      {/* Hinges */}
      <rect x="32" y="55" width="8" height="14" rx="2" fill="var(--text-muted)" opacity="0.3" />
      <rect x="32" y="110" width="8" height="14" rx="2" fill="var(--text-muted)" opacity="0.3" />
    </svg>
  )
}

function ScaffoldIllustration() {
  return (
    <svg viewBox="0 0 200 180" className="dilemma-svg" aria-hidden="true">
      {/* Scaffolding poles */}
      <line x1="45" y1="25" x2="45" y2="160" stroke="var(--text-muted)" strokeWidth="1.5" opacity="0.5" />
      <line x1="85" y1="15" x2="85" y2="160" stroke="var(--text-muted)" strokeWidth="1.5" opacity="0.5" />
      <line x1="125" y1="20" x2="125" y2="160" stroke="var(--text-muted)" strokeWidth="1.5" opacity="0.5" />
      <line x1="160" y1="35" x2="160" y2="160" stroke="var(--text-muted)" strokeWidth="1.5" opacity="0.5" />
      {/* Crossbars */}
      <line x1="45" y1="50" x2="85" y2="50" stroke="var(--text-muted)" strokeWidth="1" opacity="0.4" />
      <line x1="85" y1="50" x2="125" y2="50" stroke="var(--text-muted)" strokeWidth="1" opacity="0.4" />
      <line x1="125" y1="55" x2="160" y2="55" stroke="var(--text-muted)" strokeWidth="1" opacity="0.4" />
      <line x1="45" y1="85" x2="85" y2="85" stroke="var(--text-muted)" strokeWidth="1" opacity="0.4" />
      <line x1="85" y1="85" x2="125" y2="85" stroke="var(--text-muted)" strokeWidth="1" opacity="0.4" />
      <line x1="45" y1="120" x2="85" y2="120" stroke="var(--text-muted)" strokeWidth="1" opacity="0.4" />
      <line x1="85" y1="120" x2="125" y2="120" stroke="var(--text-muted)" strokeWidth="1" opacity="0.4" />
      <line x1="125" y1="115" x2="160" y2="115" stroke="var(--text-muted)" strokeWidth="1" opacity="0.4" />
      {/* Diagonal braces */}
      <line x1="45" y1="50" x2="85" y2="85" stroke="var(--danger)" strokeWidth="0.8" opacity="0.3" />
      <line x1="85" y1="50" x2="125" y2="85" stroke="var(--danger)" strokeWidth="0.8" opacity="0.3" />
      <line x1="85" y1="85" x2="45" y2="120" stroke="var(--danger)" strokeWidth="0.8" opacity="0.3" />
      {/* Blocks scattered */}
      <rect x="55" y="38" width="18" height="12" rx="1" fill="var(--surface3)" stroke="var(--text-muted)" strokeWidth="0.8" opacity="0.5" />
      <rect x="95" y="68" width="20" height="16" rx="1" fill="var(--surface3)" stroke="var(--text-muted)" strokeWidth="0.8" opacity="0.5" />
      <rect x="130" y="80" width="16" height="20" rx="1" fill="var(--surface3)" stroke="var(--text-muted)" strokeWidth="0.8" opacity="0.45" />
      <rect x="60" y="100" width="14" height="18" rx="1" fill="var(--surface3)" stroke="var(--text-muted)" strokeWidth="0.8" opacity="0.45" />
      {/* Ladder */}
      <line x1="142" y1="40" x2="142" y2="140" stroke="var(--text-muted)" strokeWidth="1.2" opacity="0.45" />
      <line x1="152" y1="45" x2="152" y2="140" stroke="var(--text-muted)" strokeWidth="1.2" opacity="0.45" />
      <line x1="142" y1="60" x2="152" y2="60" stroke="var(--text-muted)" strokeWidth="0.8" opacity="0.4" />
      <line x1="142" y1="75" x2="152" y2="75" stroke="var(--text-muted)" strokeWidth="0.8" opacity="0.4" />
      <line x1="142" y1="90" x2="152" y2="90" stroke="var(--text-muted)" strokeWidth="0.8" opacity="0.4" />
      <line x1="142" y1="105" x2="152" y2="105" stroke="var(--text-muted)" strokeWidth="0.8" opacity="0.4" />
      <line x1="142" y1="120" x2="152" y2="120" stroke="var(--text-muted)" strokeWidth="0.8" opacity="0.4" />
    </svg>
  )
}

function CellContent({ data }) {
  if (typeof data === 'string') return <>{data}</>
  const cls = data.type === 'check' ? 'table-check' : data.type === 'cross' ? 'table-cross' : 'table-warn'
  return <span className={cls}>{data.text}</span>
}

function DilemmaSection() {
  const [ref, inView] = useInView()
  const [imgError, setImgError] = useState(false)
  const hasImage = !imgError

  return (
    <motion.div
      ref={ref}
      className="dilemma"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
    >
      <div className="dilemma-heading">
        <div className="section-label">The Core Problem</div>
        <h3 className="dilemma-title">The Core Enterprise Dilemma</h3>
      </div>

      {/* Try to load the image; fall back to SVG cards */}
      {hasImage && (
        <motion.div
          className="dilemma-image-wrap"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          <img
            src="/core-dilemma.png"
            alt="The Core Enterprise Dilemma — Buy Packaged vs Build from Scratch"
            className="dilemma-full-img"
            onError={() => setImgError(true)}
          />
        </motion.div>
      )}

      {!hasImage && (
        <div className="dilemma-grid">
          <motion.div
            className="dilemma-card dilemma-buy"
            initial={{ opacity: 0, x: -25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <SafeIllustration />
            <div className="dilemma-card-label">The Trap of Packaged Software (Buy)</div>
            <ul className="dilemma-list">
              <li>Forces organizations to adapt processes to generic product assumptions.</li>
              <li>Rigid workflows that resist specialization.</li>
              <li>Lacks domain-specific data models.</li>
            </ul>
          </motion.div>

          <div className="dilemma-divider">
            <div className="dilemma-divider-line" />
            <span className="dilemma-divider-label">vs</span>
            <div className="dilemma-divider-line" />
          </div>

          <motion.div
            className="dilemma-card dilemma-build"
            initial={{ opacity: 0, x: 25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <ScaffoldIllustration />
            <div className="dilemma-card-label">The Risk of Traditional Customization (Build)</div>
            <ul className="dilemma-list">
              <li>High risk of technology obsolescence.</li>
              <li>Massive infrastructure and maintenance overhead.</li>
              <li>Slow development cycles measured in years, not months.</li>
            </ul>
          </motion.div>
        </div>
      )}
    </motion.div>
  )
}

export default function ComparisonSection() {
  const [tableRef, tableInView] = useInView()
  const [gridRef, gridInView] = useInView()

  return (
    <section id="comparison">
      <div className="section-inner">
        {/* Dilemma visual */}
        <DilemmaSection />

        {/* Then the "Third Way" answer */}
        <div className="thirdway-transition">
          <div className="thirdway-arrow">↓</div>
          <div className="thirdway-badge">The Third Way</div>
        </div>

        <SectionHeader
          label="Strategic Decision"
          title="Build on ServiceNow"
          desc="Neither constrained by packaged software nor burdened by custom development — a platform approach that synthesizes speed and control."
        />

        <motion.div
          ref={tableRef}
          className="comparison-table-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={tableInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <table className="comparison-table">
            <thead>
              <tr>
                <th style={{ width: '22%' }}>Criteria</th>
                <th style={{ width: '24%' }} className="th-dimmed">Buy Packaged</th>
                <th style={{ width: '24%' }} className="th-dimmed">Build from Scratch</th>
                <th style={{ width: '30%' }} className="th-highlight">
                  Build on ServiceNow
                  <span className="th-recommended-badge">Recommended</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map(row => (
                <tr key={row.criteria}>
                  <td>{row.criteria}</td>
                  <td className="td-dimmed"><CellContent data={row.buy} /></td>
                  <td className="td-dimmed"><CellContent data={row.build} /></td>
                  <td className="td-highlight"><CellContent data={row.sn} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div ref={gridRef} className="bvb-grid">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              className="bvb-card"
              initial={{ opacity: 0, y: 30 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <div className="bvb-icon">{p.icon}</div>
              <div className="bvb-card-title">{p.title}</div>
              <div className="bvb-card-text">{p.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
