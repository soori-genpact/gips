import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { platformLayers, platformStats } from '../data/content'
import SectionHeader from './SectionHeader'
import './PlatformSection.css'

export default function PlatformSection() {
  const [ref, inView] = useInView()
  const [statsRef, statsInView] = useInView()

  return (
    <section id="platform" className="bg-surface">
      <div className="section-inner">
        <SectionHeader
          label="Platform Foundation"
          title="ServiceNow Platform Capabilities"
          desc="An enterprise-grade foundation that handles the 80% infrastructure burden — so you build only the logic that differentiates your business."
        />

        <motion.div
          ref={ref}
          className="platform-layers"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {platformLayers.map((layer, i) => (
            <motion.div
              key={layer.name}
              className="platform-layer"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="platform-layer-name">
                {layer.name}
                <small>{layer.sub}</small>
              </div>
              <div className="platform-caps">
                {layer.caps.map(cap => (
                  <div key={cap} className="platform-cap">{cap}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={statsRef}
          className="platform-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {platformStats.map(s => (
            <div key={s.label} className="platform-stat">
              <div className="platform-stat-val">{s.val}</div>
              <div className="platform-stat-label">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
