import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { workflowStages } from '../data/content'
import SectionHeader from './SectionHeader'
import './WorkflowsSection.css'

export default function WorkflowsSection() {
  const [ref, inView] = useInView({ threshold: 0.05 })

  return (
    <section id="workflows" className="bg-surface">
      <div className="section-inner">
        <SectionHeader
          label="Operational Stages"
          title="Detailed Workflow Stages"
          desc="Each stage contains structured tasks with quality checkpoints, ensuring accuracy and compliance at every step."
        />

        <div ref={ref} className="wf-track">
          {workflowStages.map((stage, i) => (
            <motion.div
              key={stage.title}
              className="wf-card"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -3 }}
            >
              <div className="wf-card-stage">{stage.stage} &middot; {stage.code}</div>
              <div className="wf-card-title">{stage.title}</div>
              <ul className="wf-card-tasks">
                {stage.tasks.map(t => <li key={t}>{t}</li>)}
              </ul>
              <div className="wf-status">
                <span className="wf-dot" />
                {stage.status}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
