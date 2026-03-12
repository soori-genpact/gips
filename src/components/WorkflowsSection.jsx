import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { workflowStages } from '../data/content'
import SectionHeader from './SectionHeader'
import './WorkflowsSection.css'

const AUTOPLAY_INTERVAL = 5000

const variants = {
  enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
}

export default function WorkflowsSection() {
  const [ref, inView] = useInView({ threshold: 0.05 })
  const [[page, direction], setPage] = useState([0, 0])
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  const paginate = useCallback((newDir) => {
    setPage(([prev]) => {
      let next = prev + newDir
      if (next < 0) next = workflowStages.length - 1
      if (next >= workflowStages.length) next = 0
      return [next, newDir]
    })
  }, [])

  // Autoplay
  useEffect(() => {
    if (paused || !inView) {
      clearInterval(timerRef.current)
      return
    }
    timerRef.current = setInterval(() => paginate(1), AUTOPLAY_INTERVAL)
    return () => clearInterval(timerRef.current)
  }, [paused, inView, paginate])

  // Pause on user interaction, resume after delay
  const handleUserNav = useCallback((action) => {
    setPaused(true)
    action()
    // Resume autoplay after 10s of inactivity
    clearTimeout(timerRef._resumeTimer)
    timerRef._resumeTimer = setTimeout(() => setPaused(false), 10000)
  }, [])

  const stage = workflowStages[page]

  // Progress for autoplay indicator
  const progress = ((page + 1) / workflowStages.length) * 100

  return (
    <section id="workflows" className="bg-surface">
      <div className="section-inner">
        <SectionHeader
          label="Operational Stages"
          title="Detailed Workflow Stages"
          desc="Each stage contains structured tasks with quality checkpoints, ensuring accuracy and compliance at every step."
        />

        <motion.div
          ref={ref}
          className="wf-carousel"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Autoplay progress bar */}
          <div className="wf-progress-track">
            <motion.div
              className="wf-progress-fill"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>

          {/* Indicators */}
          <div className="wf-indicators">
            {workflowStages.map((s, i) => (
              <button
                key={s.title}
                className={`wf-indicator ${i === page ? 'active' : ''}`}
                onClick={() => handleUserNav(() => setPage([i, i > page ? 1 : -1]))}
              >
                <span className="wf-indicator-num">{s.stage}</span>
                <span className="wf-indicator-label">{s.title}</span>
              </button>
            ))}
          </div>

          {/* Card area */}
          <div className="wf-carousel-viewport">
            <button className="wf-arrow wf-arrow-left" onClick={() => handleUserNav(() => paginate(-1))} aria-label="Previous stage">
              &#8592;
            </button>

            <div className="wf-carousel-track">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={page}
                  className="wf-carousel-card"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
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
              </AnimatePresence>
            </div>

            <button className="wf-arrow wf-arrow-right" onClick={() => handleUserNav(() => paginate(1))} aria-label="Next stage">
              &#8594;
            </button>
          </div>

          {/* Dots */}
          <div className="wf-dots">
            {workflowStages.map((_, i) => (
              <button
                key={i}
                className={`wf-dot-btn ${i === page ? 'active' : ''}`}
                onClick={() => handleUserNav(() => setPage([i, i > page ? 1 : -1]))}
                aria-label={`Go to stage ${i + 1}`}
              />
            ))}
            <span className={`wf-autoplay-badge ${paused ? 'paused' : ''}`}>
              {paused ? 'Paused' : 'Auto'}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
