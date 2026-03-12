import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { aiCapabilities } from '../data/content'
import { InterpretIcon, ClassifyIcon, ExtractIcon, TriggerIcon } from './Illustrations'
import SectionHeader from './SectionHeader'
import './AISection.css'

const aiIcons = [InterpretIcon, ClassifyIcon, ExtractIcon, TriggerIcon]

export default function AISection() {
  const [ref, inView] = useInView()

  return (
    <section id="ai" className="bg-surface">
      <div className="ai-glow" />
      <div className="section-inner">
        <SectionHeader
          label="Intelligence Layer"
          title="The AI Automation Engine"
          desc="Transforming manual insurance intake into a self-driving, intelligent workflow. Four core capabilities power every decision."
        />

        <motion.div
          ref={ref}
          className="ai-grid"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
        >
          {aiCapabilities.map((cap, i) => {
            const Icon = aiIcons[i]
            return (
              <motion.div
                key={cap.title}
                className="ai-card"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="ai-card-icon">{Icon ? <Icon /> : cap.icon}</div>
                <div className="ai-card-title">{cap.title}</div>
                <div className="ai-card-text">{cap.text}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
