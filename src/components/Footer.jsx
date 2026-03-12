import { navLinks } from '../data/content'
import './Footer.css'

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer>
      <div className="footer-inner">
        <div>
          <div className="footer-brand-name">Genpact Insurance Policy Suite</div>
          <div className="footer-brand-desc">
            AI-powered insurance operations built on ServiceNow. From submission intake to policy issuance — intelligent automation at enterprise scale.
          </div>
        </div>
        <div>
          <div className="footer-col-title">Architecture</div>
          <ul className="footer-col-links">
            <li><a href="#flow" onClick={e => { e.preventDefault(); scrollTo('#flow') }}>Submission Flow</a></li>
            <li><a href="#platform" onClick={e => { e.preventDefault(); scrollTo('#platform') }}>Platform Capabilities</a></li>
            <li><a href="#matrix" onClick={e => { e.preventDefault(); scrollTo('#matrix') }}>Processing Matrix</a></li>
            <li><a href="#workflows" onClick={e => { e.preventDefault(); scrollTo('#workflows') }}>Workflow Stages</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Intelligence</div>
          <ul className="footer-col-links">
            <li><a href="#ai" onClick={e => { e.preventDefault(); scrollTo('#ai') }}>AI Engine</a></li>
            <li><a href="#trends" onClick={e => { e.preventDefault(); scrollTo('#trends') }}>AI Trends</a></li>
            <li><a href="#personas" onClick={e => { e.preventDefault(); scrollTo('#personas') }}>Personas</a></li>
            <li><a href="#value" onClick={e => { e.preventDefault(); scrollTo('#value') }}>Impact Metrics</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Strategy</div>
          <ul className="footer-col-links">
            <li><a href="#comparison" onClick={e => { e.preventDefault(); scrollTo('#comparison') }}>Build vs Buy</a></li>
            <li><a href="#hero" onClick={e => { e.preventDefault(); scrollTo('#hero') }}>Executive Summary</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-text">GIPS &middot; Genpact Insurance Policy Suite &middot; 2026</div>
        <div className="footer-bottom-text">Confidential &amp; Proprietary</div>
      </div>
    </footer>
  )
}
