export const heroMetrics = [
  { value: 70, label: 'Faster Processing' },
  { value: 40, label: 'Cost Reduction' },
  { value: 95, label: 'AI Accuracy' },
  { value: 80, label: 'Straight-Through Rate' },
]

export const flowSteps = [
  {
    num: '01',
    title: 'Email Intake & Artifact Generation',
    desc: 'Incoming emails are captured and decomposed into structured artifacts. Subject and body are converted to PDF, attachments are registered, and metadata JSON is generated. All artifacts are staged in Azure Blob Storage and AWS S3.',
    tags: ['Email PDF', 'Attachments', 'Metadata JSON', 'Azure Blob', 'AWS S3'],
  },
  {
    num: '02',
    title: 'AI-Based Intent Identification',
    desc: 'An externally hosted AI agent classifies intent (New Policy, Renewal, Amendment), identifies Line of Business (Property, Auto, General Insurance), determines service request type, and extracts customer information, risk details, and policy references.',
    tags: ['Intent Classification', 'LOB Detection', 'Data Extraction', 'Confidence Scoring', 'NLP Engine'],
  },
  {
    num: '03',
    title: 'Smart Response Routing',
    desc: 'High-confidence results trigger automatic case creation via ServiceNow Flow Designer. Low-confidence or missing data routes to manual task queues for Operations User review.',
    tags: ['High Confidence → Auto', 'Low Confidence → Manual', 'Flow Designer', 'Task Management'],
  },
  {
    num: '04',
    title: 'Dynamic Case Workflow Routing',
    desc: 'Based on AI-classified service request type, the system activates targeted case workflows: New Submissions trigger the full 4-stage pipeline, Renewals route to post-binding, and Coverage Changes initiate amendment review.',
    tags: ['New Submission', 'Renewal', 'Coverage Change', 'Amendment'],
  },
  {
    num: '05',
    title: 'Multi-Stage Processing & Policy Issuance',
    desc: 'Submissions progress through Clearance, Risk Assessment, Exposure & Pricing, and Policy Binding — with QA checkpoints enforced at every stage.',
    tags: ['Clearance', 'Risk Assessment', 'Exposure', 'Premium Pricing', 'Policy Binding', 'QA Checks'],
  },
]

export const platformLayers = [
  {
    name: 'AI & Intelligence',
    sub: 'Now Intelligence',
    caps: ['Now Assist (GenAI)', 'Virtual Agent', 'Predictive Intelligence', 'AI Agents', 'Document Intelligence'],
  },
  {
    name: 'Automation',
    sub: 'Flow & Process',
    caps: ['Flow Designer', 'Integration Hub', 'Process Automation', 'Scheduled Jobs', 'Notifications Engine'],
  },
  {
    name: 'Development',
    sub: 'Creator Tools',
    caps: ['App Engine Studio', 'Service Portal', 'UI Builder', 'Workspace', 'Mobile App Builder'],
  },
  {
    name: 'Data & Analytics',
    sub: 'Insights',
    caps: ['Performance Analytics', 'CMDB', 'Reporting', 'Service Mapping', 'Data Fabric'],
  },
  {
    name: 'Operations',
    sub: 'ITSM / ITOM / CSM',
    caps: ['Incident Management', 'Change Management', 'Problem Management', 'Customer Service (CSM)', 'Security Operations'],
  },
  {
    name: 'Governance',
    sub: 'Trust & Compliance',
    caps: ['Role-Based Access (RBAC)', 'Audit Trail', 'GRC / Compliance', 'Data Residency', 'Encryption & SSO'],
  },
]

export const platformStats = [
  { val: '7,700+', label: 'Enterprise Customers' },
  { val: '2x', label: 'Annual Major Releases' },
  { val: '99.99%', label: 'Platform Uptime SLA' },
  { val: '85%', label: 'Fortune 500 Adoption' },
]

export const comparisonRows = [
  { criteria: 'Time to Market', buy: 'Fast (but rigid)', build: { text: 'Slow — years, not months', type: 'cross' }, sn: { text: 'Rapid — months', type: 'check' } },
  { criteria: 'Business Logic Fit', buy: { text: 'Generic — adapt to product', type: 'warn' }, build: 'Perfect fit (at high cost)', sn: { text: 'Perfect fit via configuration', type: 'check' } },
  { criteria: 'Maintenance Overhead', buy: 'Low (vendor-managed)', build: { text: 'High — full ownership', type: 'cross' }, sn: { text: 'Low — platform-managed', type: 'check' } },
  { criteria: 'Innovation Pace', buy: { text: 'Vendor-dependent roadmap', type: 'warn' }, build: { text: 'Stagnant without rebuilds', type: 'cross' }, sn: { text: 'Continuous bi-annual releases', type: 'check' } },
  { criteria: 'AI Capabilities', buy: 'Standardized / Limited', build: { text: 'Requires custom engineering', type: 'cross' }, sn: { text: 'Built-in Intelligent Agents', type: 'check' } },
  { criteria: 'Security & Compliance', buy: 'Vendor-controlled', build: { text: 'Full custom implementation', type: 'cross' }, sn: { text: 'Enterprise-grade inherited', type: 'check' } },
  { criteria: 'Integration Ecosystem', buy: { text: 'Limited connectors', type: 'warn' }, build: 'Custom APIs required', sn: { text: 'Integration Hub + APIs', type: 'check' } },
  { criteria: 'Total Cost of Ownership', buy: 'Medium (license + adapt)', build: { text: 'Very High', type: 'cross' }, sn: { text: 'Optimized — shared infra', type: 'check' } },
]

export const pillars = [
  { icon: '⚡', title: 'Enterprise-Grade Foundation', text: 'Inherit security, RBAC, data governance, audit trails, and compliance frameworks automatically from day one.' },
  { icon: '🔄', title: 'Continuous Innovation', text: 'Bi-annual platform releases deliver new AI capabilities, UI improvements, and automation features.' },
  { icon: '🧠', title: 'Native AI Automation', text: 'Built-in intelligent agents interpret documents, classify intent, extract data, and trigger workflows.' },
  { icon: '🚀', title: 'Rapid Implementation', text: 'Low-code tools, pre-built data models, and workflow orchestration mean delivery in months, not years.' },
  { icon: '🔧', title: 'Domain-Specific Logic', text: 'Tailored rules, organization-specific workflows, and custom dashboards that match actual business operations.' },
  { icon: '🌍', title: 'Unified Experience', text: 'A single platform interface integrating risk, compliance, customer operations, and case management.' },
]

export const matrixCards = [
  {
    badge: 'Dimension 1',
    title: 'The AI Agent',
    role: 'Core Role: Data Extraction & Intent Classification',
    color: '#5c8ac9',
    items: [
      'Zero-touch processing of unstructured inputs',
      'NLP-driven email and document parsing',
      'Automatic metadata generation and tagging',
      'Confidence scoring for routing decisions',
      'Continuous learning from operator corrections',
    ],
  },
  {
    badge: 'Dimension 2',
    title: 'The Human Experts',
    role: 'Core Role: Validation & Risk Evaluation',
    color: '#c9a55c',
    items: [
      'Operations User: exception handling & data validation',
      'Underwriter: complex risk evaluation & pricing',
      'Compliance Officer: regulatory verification',
      'Human-in-the-loop for low-confidence AI results',
      'Expert judgment for edge cases and escalations',
    ],
  },
  {
    badge: 'Dimension 3',
    title: 'The Platform Engine',
    role: 'Core Role: Structural Orchestration',
    color: '#5cc98a',
    items: [
      'ServiceNow Flow Designer for process automation',
      'Case management workflows with state models',
      'Task assignment, routing, and SLA tracking',
      'Audit trail and compliance documentation',
      'Performance analytics and operational reporting',
    ],
  },
]

export const personas = [
  {
    icon: '📊',
    name: 'Underwriter',
    role: 'Risk Evaluation & Pricing Authority',
    desc: 'Evaluates complex risk profiles, makes pricing decisions, and has final approval authority on policy binding.',
    tasks: ['Analyze risk exposure and loss history', 'Review AI-extracted data for accuracy', 'Set premium pricing and coverage limits', 'Approve or decline submissions'],
    ai: 'Pre-populated risk summaries, predictive loss models, automated comparable analysis, and intelligent pricing recommendations.',
  },
  {
    icon: '⚙️',
    name: 'Operations User',
    role: 'Exception Handling & Daily Processing',
    desc: 'Manages day-to-day submission processing, handles AI exceptions, validates extracted data, and ensures smooth workflow progression.',
    tasks: ['Resolve low-confidence AI classifications', 'Validate and correct extracted data', 'Capture missing mandatory attributes', 'Route submissions to correct workflows'],
    ai: 'Smart task prioritization, auto-fill suggestions for missing fields, duplicate detection alerts, and anomaly flagging.',
  },
  {
    icon: '🔍',
    name: 'Claims Adjuster',
    role: 'Investigation & Settlement',
    desc: 'Investigates claims, assesses damage and liability, determines settlement amounts, and manages claim lifecycle.',
    tasks: ['Review claim documentation and evidence', 'Assess damage and determine liability', 'Negotiate settlements', 'Coordinate with third-party inspectors'],
    ai: 'Computer vision for damage assessment, automated fraud detection, similar claim retrieval, and settlement benchmarking.',
  },
  {
    icon: '🤝',
    name: 'Broker / Agent',
    role: 'Submission Intake & Client Liaison',
    desc: 'Primary client contact. Handles submission intake, communicates policy terms, manages renewals, and services existing policies.',
    tasks: ['Submit new business via email', 'Communicate quotes and terms to clients', 'Manage renewal timelines', 'Request policy amendments'],
    ai: 'Instant submission acknowledgment, real-time status tracking, automated renewal reminders, and AI-generated quote summaries.',
  },
  {
    icon: '🛡️',
    name: 'Compliance Officer',
    role: 'Regulatory & Sanctions Oversight',
    desc: 'Ensures all submissions and policies comply with regulatory requirements, sanctions lists, and internal governance policies.',
    tasks: ['Run sanctions and watchlist screening', 'Verify regulatory compliance', 'Maintain audit trail documentation', 'Generate compliance reports'],
    ai: 'Automated sanctions screening, regulatory change monitoring, compliance anomaly detection, and auto-generated audit reports.',
  },
  {
    icon: '🖥️',
    name: 'IT Administrator',
    role: 'Platform Configuration & Monitoring',
    desc: 'Configures and maintains the ServiceNow platform, manages integrations, monitors performance, and ensures uptime.',
    tasks: ['Configure workflows and business rules', 'Manage API integrations', 'Monitor platform health and performance', 'Handle upgrades and patching'],
    ai: 'AIOps for proactive incident detection, intelligent alerting, automated change risk assessment, and optimization suggestions.',
  },
]

export const aiCapabilities = [
  { icon: '📨', title: 'Interpret', text: 'Parse incoming emails, heavy PDF documents, and unstructured text — extracting meaningful context from any format.' },
  { icon: '🏷️', title: 'Classify', text: 'Determine intent, identify Line of Business, and categorize service request type with confidence scoring.' },
  { icon: '📄', title: 'Extract', text: 'Pull structured customer, risk, coverage, and property data from attachments into actionable JSON payloads.' },
  { icon: '⚡', title: 'Trigger', text: 'Recommend next actions and initiate precise case workflows — auto-creating records, populating fields, and routing to teams.' },
]

export const aiTrends = [
  { phase: 'Foundational', title: 'NLP for Document Classification', desc: 'Natural language processing enables automatic routing of emails and documents by intent, line of business, and urgency.' },
  { phase: 'Accelerating', title: 'Predictive Analytics for Risk Scoring', desc: 'ML models analyze historical loss data, property attributes, and market conditions for more accurate risk scores.' },
  { phase: 'Emerging', title: 'Generative AI for Document Understanding', desc: 'LLMs read, summarize, and extract structured data from complex policy documents with near-human accuracy.' },
  { phase: 'Emerging', title: 'Computer Vision for Damage Assessment', desc: 'AI-powered image analysis automates property damage assessment from photos and drone imagery.' },
  { phase: 'Next Wave', title: 'RAG-Powered Knowledge Systems', desc: 'Retrieval Augmented Generation connects LLMs to internal knowledge bases, providing sourced answers in real-time.' },
  { phase: 'Frontier', title: 'Agentic AI Workflows', desc: 'Autonomous AI agents that plan, execute, and adapt multi-step workflows with human oversight only for exceptions.' },
]

export const workflowStages = [
  {
    stage: 'Stage 01',
    code: 'genpact_b2b_clearance_case',
    title: 'Submission Clearance',
    tasks: ['Document Upload & Registration', 'Document Translation', 'AI Data Extraction', 'Data Validation & Cleansing', 'Missing Data Capture', 'Duplicate Check (DUNS)', 'Data Cross-Verification', 'Quality Assurance Check'],
    status: 'Clearance Complete',
  },
  {
    stage: 'Stage 02',
    code: 'genpact_b2b_risk_assessment_case',
    title: 'Risk Assessment',
    tasks: ['Sanctions & Compliance Screening', 'Underwriter Risk Review', 'Third-Party Survey Integration', 'Quality Assurance Validation'],
    status: 'Assessment Complete',
  },
  {
    stage: 'Stage 03',
    code: 'genpact_b2b_exposure_case',
    title: 'Exposure & Pricing',
    tasks: ['Property Exposure Analysis', 'Premium Calculation', 'Customer Acceptance', 'Quality Assurance Check'],
    status: 'Pricing Complete',
  },
  {
    stage: 'Stage 04',
    code: 'genpact_b2b_prebinding_case',
    title: 'Binding & Issuance',
    tasks: ['Policy Pre-Binding Validation', 'Formal Policy Issuance', 'Final QA Check'],
    status: 'Policy Issued',
  },
  {
    stage: 'Alternate',
    code: 'Renewal Flow',
    title: 'Post-Binding & Renewal',
    tasks: ['Post-Binding Case Processing', 'Policy Amendment Intake', 'Amendment Review & Approval', 'Coverage Change Execution', 'QA Validation'],
    status: 'Lifecycle Complete',
  },
]

export const valueMetrics = [
  { target: 70, label: 'Faster\nProcessing' },
  { target: 40, label: 'Cost\nReduction' },
  { target: 95, label: 'AI Classification\nAccuracy' },
  { target: 80, label: 'Straight-Through\nProcessing' },
]

export const valueExtras = [
  { title: 'Operational Efficiency', text: 'Closed submission lifecycles with dramatically lower overhead. Average handling time reduced from hours to minutes.' },
  { title: 'AI-Driven Accuracy', text: 'Successfully issued policies driven by native AI classification. Continuous model improvement from human feedback loops.' },
  { title: 'Platform ROI', text: 'Specialized business logic on infrastructure managed by ServiceNow. No servers to maintain, no security patches to apply.' },
]

export const navLinks = [
  { href: '#flow', label: 'Architecture' },
  { href: '#platform', label: 'Platform' },
  { href: '#comparison', label: 'Compare' },
  { href: '#personas', label: 'Personas' },
  { href: '#ai', label: 'AI Engine' },
  { href: '#trends', label: 'AI Trends' },
  { href: '#workflows', label: 'Workflows' },
  { href: '#value', label: 'Impact' },
]
