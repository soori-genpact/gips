import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import FlowSection from './components/FlowSection'
import PlatformSection from './components/PlatformSection'
import ComparisonSection from './components/ComparisonSection'
import MatrixSection from './components/MatrixSection'
import PersonasSection from './components/PersonasSection'
import AISection from './components/AISection'
import TrendsSection from './components/TrendsSection'
import WorkflowsSection from './components/WorkflowsSection'
import ValueSection from './components/ValueSection'
import Footer from './components/Footer'
import ProgressBar from './components/ProgressBar'
import BackToTop from './components/BackToTop'
import './App.css'

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.body.classList.toggle('light', theme === 'light')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <>
      <ProgressBar />
      <Nav toggleTheme={toggleTheme} />
      <Hero />
      <FlowSection />
      <div className="section-divider" />
      <PlatformSection />
      <div className="section-divider" />
      <ComparisonSection />
      <div className="section-divider" />
      <MatrixSection />
      <div className="section-divider" />
      <PersonasSection />
      <div className="section-divider" />
      <AISection />
      <div className="section-divider" />
      <TrendsSection />
      <div className="section-divider" />
      <WorkflowsSection />
      <div className="section-divider" />
      <ValueSection />
      <Footer />
      <BackToTop />
    </>
  )
}
