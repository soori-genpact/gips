import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { comparisonRows, pillars } from '../data/content'
import SectionHeader from './SectionHeader'
import './ComparisonSection.css'

function CellContent({ data }) {
  if (typeof data === 'string') return <>{data}</>
  const cls = data.type === 'check' ? 'table-check' : data.type === 'cross' ? 'table-cross' : 'table-warn'
  return <span className={cls}>{data.text}</span>
}

export default function ComparisonSection() {
  const [tableRef, tableInView] = useInView()
  const [gridRef, gridInView] = useInView()

  return (
    <section id="comparison">
      <div className="section-inner">
        <SectionHeader
          label="Strategic Decision"
          title="The Third Way: Build on ServiceNow"
          desc="Neither constrained by packaged software nor burdened by custom development — a platform approach that synthesizes speed and control."
        />

        <motion.div
          ref={tableRef}
          className="comparison-table-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={tableInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <table className="comparison-table">
            <thead>
              <tr>
                <th style={{ width: '22%' }}>Criteria</th>
                <th style={{ width: '26%' }}>Buy Packaged</th>
                <th style={{ width: '26%' }}>Build from Scratch</th>
                <th style={{ width: '26%' }}>Build on ServiceNow</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map(row => (
                <tr key={row.criteria}>
                  <td>{row.criteria}</td>
                  <td><CellContent data={row.buy} /></td>
                  <td><CellContent data={row.build} /></td>
                  <td><CellContent data={row.sn} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div ref={gridRef} className="bvb-grid">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              className="bvb-card"
              initial={{ opacity: 0, y: 30 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <div className="bvb-icon">{p.icon}</div>
              <div className="bvb-card-title">{p.title}</div>
              <div className="bvb-card-text">{p.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
