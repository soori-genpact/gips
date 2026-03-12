import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { flowSteps } from '../data/content'
import { EmailIntakeIcon, AIBrainIcon, RoutingIcon, WorkflowIcon, PolicyIcon } from './Illustrations'
import SectionHeader from './SectionHeader'
import './FlowSection.css'

const stepIcons = [EmailIntakeIcon, AIBrainIcon, RoutingIcon, WorkflowIcon, PolicyIcon]

function FlowStep({ step, index }) {
  const [ref, inView] = useInView()
  const Icon = stepIcons[index] || null

  return (
    <motion.div
      ref={ref}
      className="flow-step"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flow-step-left">
        <div className="flow-step-num">{step.num}</div>
        {Icon && (
          <div className="flow-step-icon">
            <Icon />
          </div>
        )}
      </div>
      <div className="flow-step-content">
        <div className="flow-step-title">{step.title}</div>
        <div className="flow-step-desc">{step.desc}</div>
        <div className="flow-tags">
          {step.tags.map(t => <span key={t} className="flow-tag">{t}</span>)}
        </div>
      </div>
    </motion.div>
  )
}

export default function FlowSection() {
  return (
    <section id="flow">
      <div className="section-inner">
        <SectionHeader
          label="System Architecture"
          title="End-to-End Submission Flow"
          desc="From email intake to policy issuance — a fully orchestrated, AI-augmented pipeline built natively on ServiceNow."
        />
        <div className="flow-pipeline">
          {flowSteps.map((step, i) => (
            <FlowStep key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
