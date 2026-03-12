import { motion } from 'framer-motion'
import { useInView, useAnimatedCounter } from '../hooks/useInView'
import { valueMetrics, valueExtras } from '../data/content'
import SectionHeader from './SectionHeader'
import './ValueSection.css'

function ValueCell({ target, label, delay }) {
  const [ref, inView] = useInView({ threshold: 0.3 })
  const display = useAnimatedCounter(target, inView)
  return (
    <motion.div
      ref={ref}
      className="value-cell"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="value-num">{display}</div>
      <div className="value-label">{label}</div>
    </motion.div>
  )
}

export default function ValueSection() {
  const [extrasRef, extrasInView] = useInView()

  return (
    <section id="value">
      <div className="section-inner">
        <SectionHeader
          label="Measurable Impact"
          title="Transformative Value Delivered"
          desc="Purpose-built on ServiceNow, delivering measurable outcomes across operations, cost, speed, and accuracy."
        />

        <div className="value-grid">
          {valueMetrics.map((m, i) => (
            <ValueCell key={m.label} target={m.target} label={m.label} delay={i * 0.08} />
          ))}
        </div>

        <div ref={extrasRef} className="value-extra">
          {valueExtras.map((e, i) => (
            <motion.div
              key={e.title}
              className="value-extra-card"
              initial={{ opacity: 0, y: 20 }}
              animate={extrasInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="value-extra-title">{e.title}</div>
              <div className="value-extra-text">{e.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
