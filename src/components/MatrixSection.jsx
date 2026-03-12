import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { matrixCards } from '../data/content'
import { AIAgentIcon, HumanExpertsIcon, PlatformEngineIcon } from './Illustrations'
import SectionHeader from './SectionHeader'
import './MatrixSection.css'

const matrixIcons = [AIAgentIcon, HumanExpertsIcon, PlatformEngineIcon]

export default function MatrixSection() {
  const [ref, inView] = useInView()

  return (
    <section id="matrix" className="bg-surface">
      <div className="section-inner">
        <SectionHeader
          label="Processing Architecture"
          title="The 3-Dimensional Processing Matrix"
          desc="Every stage of the submission lifecycle is an orchestrated hand-off between intelligent automation, human expertise, and structural case management."
        />

        <div ref={ref} className="matrix-grid">
          {matrixCards.map((card, i) => {
            const Icon = matrixIcons[i]
            return (
              <motion.div
                key={card.title}
                className="matrix-card"
                style={{ '--card-color': card.color }}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}
              >
                <div className="matrix-card-accent" />
                <div className="matrix-card-visual">
                  {Icon && <Icon />}
                </div>
                <div className="matrix-card-badge" style={{ color: card.color, background: `${card.color}15`, borderColor: `${card.color}30` }}>
                  {card.badge}
                </div>
                <div className="matrix-card-title">{card.title}</div>
                <div className="matrix-card-role">{card.role}</div>
                <ul className="matrix-card-list">
                  {card.items.map(item => (
                    <li key={item}>
                      <span className="matrix-dot" style={{ background: card.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
