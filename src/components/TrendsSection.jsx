import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { aiTrends } from '../data/content'
import SectionHeader from './SectionHeader'
import './TrendsSection.css'

function TrendItem({ trend, index }) {
  const [ref, inView] = useInView()
  const isOdd = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      className={`trend-item ${isOdd ? 'trend-left' : 'trend-right'}`}
      initial={{ opacity: 0, x: isOdd ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="trend-content">
        <div className="trend-phase">{trend.phase}</div>
        <div className="trend-title">{trend.title}</div>
        <div className="trend-desc">{trend.desc}</div>
      </div>
      <div className="trend-dot" />
      <div className="trend-spacer" />
    </motion.div>
  )
}

export default function TrendsSection() {
  return (
    <section id="trends">
      <div className="section-inner">
        <SectionHeader
          label="Industry Evolution"
          title="AI Trends Reshaping Insurance"
          desc="The convergence of generative AI, predictive analytics, and agentic workflows is fundamentally transforming how insurance operates."
        />

        <div className="trends-timeline">
          {aiTrends.map((trend, i) => (
            <TrendItem key={trend.title} trend={trend} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
