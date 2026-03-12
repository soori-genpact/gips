import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { personas } from '../data/content'
import personaSvgs from './PersonaIcons'
import SectionHeader from './SectionHeader'
import './PersonasSection.css'

function PersonaCard({ persona, index }) {
  const [ref, inView] = useInView()
  const SvgIcon = personaSvgs[persona.name]
  return (
    <motion.div
      ref={ref}
      className="persona-card"
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3, boxShadow: '0 12px 40px rgba(0,0,0,0.25)' }}
    >
      <div className="persona-icon">{SvgIcon ? <SvgIcon /> : persona.icon}</div>
      <div className="persona-name">{persona.name}</div>
      <div className="persona-role">{persona.role}</div>
      <div className="persona-desc">{persona.desc}</div>
      <ul className="persona-tasks">
        {persona.tasks.map(t => <li key={t}>{t}</li>)}
      </ul>
      <div className="persona-ai-tag">
        <strong>AI Assist:</strong>
        {persona.ai}
      </div>
    </motion.div>
  )
}

export default function PersonasSection() {
  return (
    <section id="personas">
      <div className="section-inner">
        <SectionHeader
          label="Key Stakeholders"
          title="Insurance Personas & AI Augmentation"
          desc="Every persona in the insurance lifecycle is empowered by intelligent automation, reducing toil and amplifying expertise."
        />

        <div className="persona-grid">
          {personas.map((p, i) => (
            <PersonaCard key={p.name} persona={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
