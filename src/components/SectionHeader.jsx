import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function SectionHeader({ label, title, desc }) {
  const [ref, inView] = useInView()
  return (
    <motion.div
      ref={ref}
      className="section-header"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{ marginBottom: '3.5rem' }}
    >
      <div className="section-label">{label}</div>
      <div className="section-title">{title}</div>
      {desc && <p className="section-desc">{desc}</p>}
    </motion.div>
  )
}
