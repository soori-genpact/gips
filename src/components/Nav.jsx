import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../data/content'
import './Nav.css'

export default function Nav({ toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <motion.nav
        className={`nav ${scrolled ? 'nav-scrolled' : ''}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="nav-brand">
          ServiceNow Intelligence
          <span className="nav-brand-sub">Executive Briefing</span>
        </div>

        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={e => { e.preventDefault(); scrollTo(link.href) }}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <button className="nav-btn" onClick={toggleTheme}>Theme</button>
          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); scrollTo(link.href) }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.1, duration: 0.4 }}
                className="mobile-nav-link"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
