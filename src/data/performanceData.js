/**
 * CHEQ Annual Performance Review — FY 2025-26
 * ------------------------------------------------------------------
 * SINGLE SOURCE OF TRUTH for every figure and every line of copy on
 * the site. Components read from here; nothing is hard-coded in JSX.
 *
 * KPI value shape (drives the animated counters):
 *   {
 *     prefix?:   string   // e.g. "₹"
 *     target:    number   // the value the counter animates to
 *     decimals?: number   // fixed decimal places (default 0)
 *     suffix?:   string   // e.g. "+", "Cr", "%"
 *   }
 *
 * Counters start at 0 and animate up, which is why the printed PDF
 * captures them as "0+", "₹0.00Cr" and "0.00%".
 *
 * To update a figure later: change `target` here only.
 */

export const profile = {
  eyebrow: 'REVIEW',
  period: 'FY 2025–26',
  name: 'Jhankar B',
  role: 'Business Operations',
  emailLabel: 'EMAIL',
  email: 'jhankar_con@cheq.one',
  tenure: 'CHEQ · May 2025 – Present',
}

/**
 * The four functional areas of the weekly rotational model, in the order the
 * hero dial cycles through them. `id` matches the section anchor, so clicking
 * an arc navigates. Equal quarters — the rotation splits time, not volume.
 */
export const rotation = [
  { id: 'fraud', label: 'FRAUD', value: '2,714+', caption: 'cases investigated' },
  { id: 'chargeback', label: 'DISPUTES', value: '1,203+', caption: 'chargebacks handled' },
  { id: 'cx', label: 'CX', value: '3,102+', caption: 'escalations resolved' },
  { id: 'sr', label: 'SR', value: '10', caption: 'channels monitored' },
]

/* ------------------------------------------------------------------ */
/* Top-level KPIs                                                      */
/* ------------------------------------------------------------------ */

export const headlineKpis = [
  { value: { target: 2714, suffix: '+' }, label: 'Fraud Transactions' },
  { value: { target: 1203, suffix: '+' }, label: 'Disputes Handled' },
  { value: { target: 3102, suffix: '+' }, label: 'CX Escalations' },
  { value: { prefix: '₹', target: 1.74, decimals: 2, suffix: 'Cr' }, label: 'Fraud Prevented' },
]

/* ------------------------------------------------------------------ */
/* Operational performance summary                                     */
/* ------------------------------------------------------------------ */

export const operationalSummary = {
  heading: 'OPERATIONAL PERFORMANCE SUMMARY',
  subtitle: 'Reporting Period: May 2025 – Present',
  paragraphs: [
    'Since joining the team in May 2025, I have been actively contributing to multiple operational functions, including Fraud Investigation, Chargeback & Dispute Management, Success Rate (SR) Monitoring, and User Escalation Handling. In addition to managing day-to-day operational responsibilities, I have contributed to process improvement initiatives through SOP creation, existing SOP revamp, and workflow enhancements.',
    'My role follows a weekly rotational model, allowing me to gain exposure across different operational functions, adapt to changing business priorities, and ensure continuity of operations, smooth workflows, and timely case resolution.',
    'Throughout this period, I have collaborated closely with payment gateways, partner banks, cyber teams, internal stakeholders, and cross-functional teams to investigate fraudulent transactions, manage dispute cases, monitor payment performance and SR metrics, and resolve customer escalations. I have also coordinated with teams across Technology, Product, Finance, and other relevant functions to address operational dependencies, drive issue resolution, and improve existing processes.',
    'My overall focus has been on maintaining operational efficiency, minimising financial losses, improving customer experience, strengthening operational processes, and ensuring timely resolution of critical and high-priority issues through effective cross-functional collaboration.',
  ],
}

/* ------------------------------------------------------------------ */
/* Fraud investigation                                                 */
/* ------------------------------------------------------------------ */

export const fraud = {
  id: 'fraud',
  heading: 'FRAUD INVESTIGATION PERFORMANCE',
  subtitle: 'Risk management & transaction analysis',
  description:
    'Actively involved in fraud investigation and risk management activities — reviewing fraud alerts raised by payment gateways, partner banks, and the cyber team, analyzing suspicious transactions, coordinating with relevant stakeholders, and taking appropriate action to prevent financial losses.',
  kpis: [
    {
      value: { target: 2714, suffix: '+' },
      label: 'Total Cases Investigated',
      note: 'From gateways, banks & cyber',
    },
    {
      value: { prefix: '₹', target: 6.99, decimals: 2, suffix: 'Cr' },
      label: 'Total GTV Reviewed',
      note: '₹69,880,233.92',
    },
    {
      // Derived from the source: 17.71% of the 2,224 investigated cases.
      value: { target: 394 },
      label: 'Fraud Cases Prevented',
      note: '17.71% of investigated cases',
      meter: 17.71,
    },
    {
      value: { prefix: '₹', target: 1.74, decimals: 2, suffix: 'Cr' },
      label: 'Fraud Value Prevented',
      note: '₹1.74 Cr — 24.90% of GTV',
      meter: 24.9,
    },
  ],
  keyContribution: {
    heading: 'KEY CONTRIBUTION',
    body: 'Through timely investigation, detailed transaction analysis, and coordination with partner banks and internal teams, contributed to effective fraud detection and prevention while safeguarding transaction value and maintaining operational integrity.',
  },
}

/* ------------------------------------------------------------------ */
/* Chargeback & dispute management                                     */
/* ------------------------------------------------------------------ */

export const chargeback = {
  id: 'chargeback',
  heading: 'CHARGEBACK & DISPUTE MANAGEMENT',
  subtitle: 'Partner bank & payment network dispute resolution',
  description:
    'Actively handled chargeback and dispute cases raised by partner banks and payment networks — reviewing dispute details, preparing supporting documentation, coordinating with internal teams, and ensuring responses are submitted within network timelines.',
  kpis: [
    {
      value: { target: 1203, suffix: '+' },
      label: 'Chargeback Cases',
      note: 'Raised by partner banks & networks',
    },
    {
      // Not disclosed in the source document — set the target when known.
      value: { target: 0, suffix: '+' },
      label: 'Pre-Arbitration Cases',
      note: 'Advanced documentation review',
    },
    {
      // Not disclosed in the source document — set the target when known.
      value: { target: 0 },
      label: 'Arbitration Cases',
      note: 'Final stage dispute resolution',
    },
    {
      value: { prefix: '₹', target: 3.21, decimals: 2, suffix: 'Cr' },
      label: 'Total GTV in Dispute',
      note: '₹3,21,15,705.42',
    },
  ],
  contestRate: {
    value: { target: 100, suffix: '%' },
    meter: 100,
    title: '100% Contest Rate Maintained',
    body: 'All eligible chargeback and dispute cases were reviewed and responded to with proper documentation within required timelines — ensuring compliance with payment network requirements.',
  },
}

/* ------------------------------------------------------------------ */
/* Customer escalation (CX)                                            */
/* ------------------------------------------------------------------ */

export const cx = {
  id: 'cx',
  heading: 'CUSTOMER ESCALATION (CX) CASE MANAGEMENT',
  subtitle: 'CX on-call rotation — escalation handling & resolution',
  description:
    'Responsible for handling customer escalation cases raised by internal teams and partner stakeholders as part of the CX On-Call rotation — reviewing escalations, coordinating with relevant teams, identifying root causes, and ensuring timely resolution. During the initial two months, time was taken to understand partner coordination processes and operational workflows, after which case handling efficiency and response time improved significantly.',
  kpis: [
    {
      value: { target: 3102, suffix: '+' },
      label: 'Escalation Cases Resolved',
      note: 'Internal teams & external partners',
    },
    {
      value: { target: 7.2, decimals: 2, suffix: '%' },
      label: 'Initial TAT Breach Rate',
      note: 'Due to operational complexities',
      meter: 7.2,
      meterTone: 'amber',
    },
    {
      value: { target: 100, suffix: '%' },
      label: 'Resolution Rate',
      note: 'All cases resolved within 2nd-level TAT',
      meter: 100,
    },
  ],
  tatApproach: {
    heading: 'TAT MANAGEMENT APPROACH',
    body: 'Approximately 7.20% of cases initially experienced TAT breaches due to operational complexities or dependencies on external teams. Through proactive follow-ups and stakeholder coordination, these cases were resolved within second-level TAT — ensuring case closure and improved customer experience.',
  },
}

/* ------------------------------------------------------------------ */
/* Success rate (SR) monitoring                                        */
/* ------------------------------------------------------------------ */

export const sr = {
  id: 'sr',
  heading: 'SUCCESS RATE (SR) MONITORING & OPERATIONAL OVERSIGHT',
  subtitle: 'Multi-channel payment transaction monitoring',
  description:
    'Responsible for monitoring success rates across multiple payment channels. Responsibilities include tracking success performance, identifying operational anomalies, coordinating with relevant teams during incidents, and ensuring proper settlement, schedule and unscheduled downtime.',
  channels: {
    heading: 'CHANNELS MONITORED',
    items: [
      'CCBP',
      'Education',
      'Rent',
      'Wallet',
      'BBPS-Bills',
      'FASTag',
      'Prepaid',
      'Insurance',
      'Loan',
      'EV',
    ],
  },
  responsibilities: {
    heading: 'OPERATIONAL MONITORING RESPONSIBILITIES',
    items: [
      'Monitored CCBP, Education, Rent, Wallet, BBPS-Bills, FASTag, Prepaid, Insurance, Loan and EV transaction flows to ensure smooth operational performance.',
      'Maintained high availability and responsiveness during operational incidents.',
      'Assisted in managing QC wallet funds and monitoring settlement processes.',
      'Retrieved ODS data when required for investigation and reconciliation purposes.',
    ],
  },
}

/* ------------------------------------------------------------------ */
/* Process improvements & initiatives                                  */
/* ------------------------------------------------------------------ */

export const improvements = {
  id: 'improvements',
  heading: 'PROCESS IMPROVEMENTS & OPERATIONAL INITIATIVES',
  subtitle: 'Efficiency gains & workflow optimizations',
  initiatives: [
    {
      title: '30-Minute SR Mail — Payin, Payout & Wallet in One Screen',
      status: null,
      description:
        'Redesigned the 30-minute Success Rate (SR) monitoring mail so that Payin, Payout and Wallet performance is visible together on a single screen. Each tender and category shows its combined SR, attempts and failures, a colour-coded SR value for every 30-minute slot, and a trend line — so drops can be spotted at a glance without switching between separate reports.',
      image: {
        src: 'sr-30min-mail-single-view.png',
        width: 1897,
        height: 1048,
        alt: 'Single-screen 30-minute SR view showing Payin success rate by tender and Payout success rate by category, with colour-coded values for each 30-minute slot, combined SR, attempts and trend lines.',
        caption: '30-minute SR view — Payin, Payout & Wallet on one screen. Click to open full size.',
      },
      impactHeading: 'IMPACT',
      impact: [
        'All SR metrics for Payin, Payout and Wallet visible in one screen',
        'Low-SR slots highlighted by colour for faster anomaly detection',
        'Quicker review of each 30-minute update by the on-call team',
      ],
    },
    {
      title: 'CX Payout Processing Workflow Improvement',
      status: null,
      description:
        'Restructured the payout processing workflow for CX-raised cases. Previously, customer support teams raised payout-related tickets in T+0 working days, requiring operations teams to investigate and process refunds within the same window — creating unnecessary operational pressure and high ticket volume.',
      impactHeading: 'IMPACT',
      impact: [
        'Reduced ~50 Jira tickets per week related to payout processing',
        'Improved coordination between Operations and Customer Support teams',
        'Reduced operational workload and improved case handling efficiency',
      ],
    },
    {
      title: 'Success Rate (SR) Monitoring Process Optimization',
      status: null,
      description:
        'Identified inefficiencies in the Success Rate (SR) analysis workflow, which previously required multiple manual steps including file download, ZIP extraction, folder restructuring, and manual file renaming. By implementing a timestamp-based approach and simplifying the file handling process, the workflow was optimized.',
      impactHeading: 'IMPACT',
      impact: [
        'Reduced SR analysis time by ~4 minutes per incident',
        'Saves ~60 minutes during major SR breakdown scenarios',
        'Estimated 6 hours of operational time saved per week — equivalent to one operational day saved every four weeks',
      ],
    },
    {
      title: 'AME PG SWITCH and S&F Access Implementation',
      status: { label: 'LIVE', tone: 'live' },
      description:
        'Successfully implemented AME PG Switch and S&F Access, initiated on November 4, 2025 — now fully live and operational. Enables 24×7 routing monitoring and proactive route switching for the AME team.',
      impactHeading: 'IMPACT',
      impact: [
        'Reduced failed transaction counts through timely routing actions',
        'Improved service reliability and stability across multiple payment methods',
        'Enabled 24×7 routing monitoring for faster response to performance fluctuations',
        'Operational manpower savings of ~4 hours per day achieved',
      ],
    },
    {
      title: 'Fraud Response Automation',
      status: { label: 'LIVE', tone: 'live' },
      description:
        'Automated fraud response workflows — now live and operational. Reduces manual intervention in routine fraud alerts and enables faster, more consistent decision-making across fraud investigation queues.',
      impactHeading: 'IMPACT',
      impact: [
        'Reduced manual case handling time',
        'Faster response to high-volume fraud alert queues',
        'Improved consistency in fraud decision outcomes',
      ],
    },
    {
      title: 'Payment Ops Dashboard',
      status: { label: 'ONGOING', tone: 'ongoing' },
      description:
        'An ongoing project to build a centralized Payment Operations Dashboard providing real-time visibility into key operational metrics — including SR performance, fraud case status, chargeback volumes, and CX escalation trends.',
      impactHeading: 'IMPACT',
      impact: [
        'Centralized view of all operational KPIs in one place',
        'Faster identification of anomalies and operational bottlenecks',
        'Improved decision-making and reporting efficiency for the ops team',
      ],
    },
  ],
}

/* ------------------------------------------------------------------ */
/* Standard operating procedures                                       */
/* ------------------------------------------------------------------ */

export const sops = {
  id: 'sop',
  heading: 'STANDARD OPERATING PROCEDURES',
  subtitle: 'Documented workflows & process standardization',
  items: [
    {
      title: 'Customer Support (CX) Issue Management SOP – BizOps Escalation',
      status: { label: 'REVAMPED', tone: 'live' },
      link: {
        href: 'https://cheqone.atlassian.net/wiki/x/lgB1Ag',
        label: 'Read the SOP in Confluence',
      },
      description:
        'Revamped the BizOps escalation SOP for handling CX-raised payout processing and refund cases. The updated SOP standardized the escalation path, clarified ownership at each step, and aligned the payout processing workflow with refund case handling — reducing unnecessary ticket creation and improving resolution clarity.',
      outcomeHeading: 'KEY OUTCOMES',
      outcomes: [
        'Output ticket count reduced by 24% to 27% for payout processing cases',
        'Payout processing workflow now fully aligned with refund case handling',
        'Reduced ambiguity in escalation ownership across BizOps and CX teams',
        'Improved turnaround time for payout-related escalations',
      ],
    },
    {
      title: 'AME PG Switching & SR Monitoring SOP with SNF',
      status: { label: 'SOP', tone: 'live' },
      link: {
        href: 'https://cheqone.atlassian.net/wiki/x/AQAERw',
        label: 'Read the SOP in Confluence',
      },
      description:
        'Developed and documented the SOP for AME PG Switching and Success Rate (SR) Monitoring with SNF integration. This SOP covers routing switch procedures, SR anomaly detection steps, and escalation workflows during non-working hours — enabling the AME team to independently manage routing and SR monitoring without requiring ops team intervention.',
      outcomeHeading: 'KEY OUTCOMES',
      outcomes: [
        'SR on-call bandwidth reduced by 40% during non-working hours',
        'AME team enabled to handle routing switches and SR monitoring independently',
        'Standardized escalation path for SR anomalies and gateway failures',
        'Faster incident response with clear documented steps for SNF scenarios',
      ],
    },
    {
      title: 'Operations Refund Handling SOP',
      status: { label: 'IN PROGRESS', tone: 'ongoing' },
      description:
        'Currently being drafted — an SOP to standardize how refund cases are handled end to end across operations, covering intake, ownership, processing steps and escalation. Scope and workflow are still being finalized, so the outcomes below are the intended targets rather than measured results.',
      outcomeHeading: 'INTENDED OUTCOMES',
      outcomes: [
        'A single documented refund handling path across the ops team',
        'Clear ownership at each stage of a refund case',
        'Consistent turnaround expectations for refund escalations',
      ],
    },
    {
      title: 'SR On-Call SOP Revamp – AME & BizOps',
      status: { label: 'IN PROGRESS', tone: 'ongoing' },
      description:
        'Revamping the Success Rate (SR) On-Call SOP for both the AME and BizOps teams — updating monitoring steps, alert handling, PG switching procedures and escalation paths so that both teams follow one consistent on-call playbook. The revamp is still in progress, so the outcomes below are the intended targets rather than measured results.',
      outcomeHeading: 'INTENDED OUTCOMES',
      outcomes: [
        'One aligned SR on-call playbook for AME and BizOps',
        'Clear handover and ownership between the two teams during on-call',
        'Faster, consistent response to SR drops and gateway failures',
      ],
    },
    {
      title: 'Fraud & Chargeback SOP – Dispute Documentation Revamp',
      status: { label: 'IN PROGRESS', tone: 'ongoing' },
      description:
        'Drafting a combined Fraud & Chargeback SOP and revamping how documents are submitted for chargeback, pre-arbitration and arbitration cases. Today documents are shared in a different format for each partner and bank based on their individual requirements; the revamp introduces one standard document format accepted across all partners and banks. Work is in progress, so the outcomes below are the intended targets.',
      outcomeHeading: 'INTENDED OUTCOMES',
      outcomes: [
        'A single standard document format for chargeback, pre-arb and arbitration submissions',
        'One format accepted across all partners and banks instead of per-partner variations',
        'Less time spent preparing dispute documentation for each case',
        'Clear, documented fraud and chargeback handling steps for the team',
      ],
    },
  ],
}

/* ------------------------------------------------------------------ */
/* Overall contribution summary                                        */
/* ------------------------------------------------------------------ */

export const overallSummary = {
  heading: 'OVERALL CONTRIBUTION SUMMARY',
  subtitle: 'FY 2025–26 performance overview',
  description:
    'Through involvement in fraud investigation, dispute management, escalation handling, Success Rate (SR) monitoring, and operational process improvements, consistently focused on improving operational efficiency, financial risk prevention, and service stability. By combining operational execution with process improvements, contributed to enhancing workflow efficiency, reducing operational workload, and supporting smoother coordination between internal teams and external partners.',
  table: [
    { label: 'Fraud Investigation', value: '2,714+ cases' },
    { label: 'Dispute Management', value: '1,203+ chargebacks' },
    { label: 'CX Escalations', value: '3,102+ resolved' },
    { label: 'Success Rate (SR) Monitoring', value: 'Multi-channel' },
    { label: 'Process Improvements', value: '5 initiatives' },
    { label: 'SOPs Documented', value: '2 SOPs' },
  ],
}

/* ------------------------------------------------------------------ */
/* Navigation & footer                                                 */
/* ------------------------------------------------------------------ */

export const navItems = [
  { id: 'fraud', label: 'FRAUD' },
  { id: 'chargeback', label: 'CHARGEBACK' },
  { id: 'cx', label: 'CX' },
  { id: 'sr', label: 'SR' },
  { id: 'improvements', label: 'IMPROVEMENTS & INITIATIVES' },
  { id: 'sop', label: 'SOP' },
]

export const footerText = '© 2026 CHEQ · Annual Performance Review FY 2025–26 · Jhankar B'
