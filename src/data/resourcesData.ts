export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'guide' | 'template' | 'video' | 'checklist' | 'whitepaper';
  category: 'network' | 'data' | 'compliance' | 'training' | 'incident-response';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration?: string;
  downloadUrl?: string;
}

export const resources:Resource[] = [
  // Whitepapers and Strategic Documents
  {
    id: 'uk-national-data-strategy',
    title: 'UK National Data Strategy',
    description: 'Official government strategy for unlocking the power of data for the UK. Covers four pillars: foundations, skills, availability, and responsibility in data use.',
    type: 'whitepaper',
    category: 'data',
    difficulty: 'intermediate',
    duration: '75 minutes',
    downloadUrl: 'https://www.gov.uk/government/publications/uk-national-data-strategy/national-data-strategy'
  },
  {
    id: 'royal-society-data-governance',
    title: 'The UK Data Governance Landscape - Royal Society Report',
    description: 'Comprehensive analysis of UK data governance framework by the Royal Society. Examines current landscape, challenges, and recommendations for improvement.',
    type: 'whitepaper',
    category: 'data',
    difficulty: 'advanced',
    duration: '90 minutes',
    downloadUrl: 'https://royalsociety.org/-/media/policy/projects/data-governance/uk-data-governance-explainer.pdf'
  },
  {
    id: 'gov-data-quality-framework',
    title: 'The Government Data Quality Framework',
    description: 'Official framework providing structured approach to understanding, documenting and improving government data quality. Includes principles for effective data quality management.',
    type: 'whitepaper',
    category: 'data',
    difficulty: 'intermediate',
    duration: '45 minutes',
    downloadUrl: 'https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework'
  },

  // ICO Guides and Resources
  {
    id: 'ico-ukgdpr-guidance',
    title: 'ICO UK GDPR Guidance and Resources',
    description: 'Official ICO guidance on UK GDPR compliance. Essential for understanding data protection requirements, including recent updates from the Data (Use and Access) Act 2025.',
    type: 'guide',
    category: 'data',
    difficulty: 'beginner',
    duration: '40 minutes',
    downloadUrl: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/'
  },
  {
    id: 'ico-accountability-governance',
    title: 'ICO Accountability and Governance Framework',
    description: 'Detailed guidance on implementing data protection accountability measures, including codes of conduct, certification schemes, and governance structures.',
    type: 'guide',
    category: 'data',
    difficulty: 'intermediate',
    duration: '35 minutes',
    downloadUrl: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/'
  },
  {
    id: 'ico-data-sharing-code',
    title: 'Data Sharing: A Code of Practice - ICO',
    description: 'Updated ICO code of practice for data sharing between organisations. Covers lawful sharing, accountability obligations, and practical guidance for compliance with UK GDPR and DPA 2018.',
    type: 'guide',
    category: 'data',
    difficulty: 'intermediate',
    duration: '45 minutes',
    downloadUrl: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-sharing/data-sharing-a-code-of-practice/'
  },
  {
    id: 'gov-data-sharing-framework',
    title: 'Data Sharing Governance Framework - UK Government',
    description: 'Official UK government framework for data sharing governance. Includes recommended data standards, Technology Code of Practice, and API design guidance for data projects.',
    type: 'guide',
    category: 'data',
    difficulty: 'intermediate',
    duration: '40 minutes',
    downloadUrl: 'https://www.gov.uk/government/publications/data-sharing-governance-framework/data-sharing-governance-framework'
  },
  {
    id: 'stats-authority-data-governance',
    title: 'Code of Practice for Statistics - Data Governance (T6)',
    description: 'UK Statistics Authority code covering statutory obligations for data collection, confidentiality, data sharing, data linking and release. Includes transparency requirements.',
    type: 'guide',
    category: 'data',
    difficulty: 'intermediate',
    duration: '30 minutes',
    downloadUrl: 'https://code.statisticsauthority.gov.uk/the-code/trustworthiness/t6-data-governance/'
  },
  {
    id: 'subject-access-request-procedures',
    title: 'Subject Access Request (SAR) Procedures Guide',
    description: 'Step-by-step procedures for handling subject access requests under UK GDPR including identification verification, data retrieval, and response timelines.',
    type: 'guide',
    category: 'compliance',
    difficulty: 'intermediate',
    duration: '40 minutes'
  },
  {
    id: 'cross-border-data-transfers',
    title: 'International Data Transfer Compliance Guide',
    description: 'Guide to managing cross-border data transfers post-Brexit including adequacy decisions, standard contractual clauses, and transfer impact assessments.',
    type: 'guide',
    category: 'compliance',
    difficulty: 'advanced',
    duration: '45 minutes'
  },
  {
    id: 'data-minimisation-guide',
    title: 'Data Minimisation Implementation Guide',
    description: 'Practical guide to implementing data minimisation principles under UK GDPR. Covers collection limitation, purpose limitation, and storage limitation requirements.',
    type: 'guide',
    category: 'data',
    difficulty: 'intermediate',
    duration: '35 minutes'
  },

  // Training Videos
  {
    id: 'ico-data-protection-principles-video',
    title: 'Data Protection Principles Training Videos - ICO',
    description: 'Official ICO training video series covering the principles that underpin UK data protection laws. Helps staff understand correct data handling procedures.',
    type: 'video',
    category: 'training',
    difficulty: 'beginner',
    duration: '45 minutes',
    downloadUrl: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/training-videos/principles/'
  },
  {
    id: 'ico-personal-data-video',
    title: 'What is Personal Data? - ICO Training Video',
    description: 'ICO training video explaining different data protection terms and their meanings. Provides basic understanding of personal data and helps assess data types.',
    type: 'video',
    category: 'training',
    difficulty: 'beginner',
    duration: '25 minutes',
    downloadUrl: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/training-videos/what-is-personal-data/'
  },
  {
    id: 'ico-sensitive-data-video',
    title: 'Handling More Sensitive Information - ICO Training Video',
    description: 'ICO training video covering special category and criminal offence data. Explains measures needed when processing sensitive information types.',
    type: 'video',
    category: 'training',
    difficulty: 'intermediate',
    duration: '35 minutes',
    downloadUrl: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/training-videos/handling-more-sensitive-information/'
  },
  {
    id: 'ico-small-business-elearning',
    title: 'Data Protection for Small Businesses - ICO E-learning',
    description: 'ICO webinar covering personal information, lawful bases, retention periods, subject access requests, data breaches and individual rights for small businesses.',
    type: 'video',
    category: 'training',
    difficulty: 'beginner',
    duration: '60 minutes',
    downloadUrl: 'https://ico.org.uk/for-organisations/advice-for-small-organisations/whats-new/e-learning/'
  },
  {
    id: 'ico-law-enforcement-video',
    title: 'Data Protection Act 2018 (Part 3) - ICO Training Video',
    description: 'ICO training module for controllers and processors who process personal data in connection with law enforcement. Covers purposes and rights restrictions.',
    type: 'video',
    category: 'training',
    difficulty: 'advanced',
    duration: '40 minutes',
    downloadUrl: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/training-videos/data-protection-act-2018-part-3/'
  },

  // Templates
  {
    id: 'dpia-guidance-ico',
    title: 'Data Protection Impact Assessments (DPIAs) - ICO Template',
    description: 'Complete template for conducting DPIAs under UK GDPR. Critical for projects that process personal data with high risk. Includes risk assessment frameworks.',
    type: 'template',
    category: 'data',
    difficulty: 'intermediate',
    duration: '50 minutes',
    downloadUrl: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/'
  },
  {
    id: 'article-30-documentation',
    title: 'Article 30 Documentation Requirements - ICO Template',
    description: 'Practical template for maintaining records of processing activities under UK GDPR Article 30. Essential for demonstrating compliance with documentation requirements.',
    type: 'template',
    category: 'data',
    difficulty: 'beginner',
    duration: '25 minutes',
    downloadUrl: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/documentation/what-do-we-need-to-document-under-article-30-of-the-gdpr/'
  },
  {
    id: 'ico-data-sharing-agreements',
    title: 'Data Sharing Agreements Template - ICO',
    description: 'Comprehensive template for creating effective data sharing agreements. Covers information governance arrangements, individual rights, and practical data sharing problems.',
    type: 'template',
    category: 'data',
    difficulty: 'intermediate',
    duration: '35 minutes',
    downloadUrl: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-sharing/data-sharing-a-code-of-practice/data-sharing-agreements/'
  },
  {
    id: 'data-breach-response-plan',
    title: 'Data Breach Response Plan Template',
    description: 'Comprehensive incident response plan template for data breaches under UK GDPR. Includes 72-hour notification procedures, impact assessments, and stakeholder communication.',
    type: 'template',
    category: 'incident-response',
    difficulty: 'intermediate',
    duration: '40 minutes'
  },
  {
    id: 'data-governance-policy-template',
    title: 'Organizational Data Governance Policy Template',
    description: 'Template for creating comprehensive data governance policies covering data ownership, stewardship, classification, retention, and access controls.',
    type: 'template',
    category: 'data',
    difficulty: 'intermediate',
    duration: '50 minutes'
  },
  {
    id: 'privacy-by-design-framework',
    title: 'Privacy by Design Implementation Template',
    description: 'Framework template for embedding privacy considerations into data processing systems and procedures from the design stage, ensuring UK GDPR compliance.',
    type: 'template',
    category: 'data',
    difficulty: 'advanced',
    duration: '55 minutes'
  },
  {
    id: 'data-retention-schedule-template',
    title: 'Data Retention Schedule Template',
    description: 'Template for creating comprehensive data retention schedules covering different data types, legal requirements, and secure disposal procedures.',
    type: 'template',
    category: 'data',
    difficulty: 'beginner',
    duration: '25 minutes'
  },
  {
    id: 'data-quality-framework',
    title: 'Data Quality Management Framework Template',
    description: 'Comprehensive template for establishing data quality standards, measurement processes, and improvement strategies. Aligned with UK government data standards.',
    type: 'template',
    category: 'data',
    difficulty: 'intermediate',
    duration: '45 minutes'
  },
  {
    id: 'third-party-data-governance',
    title: 'Third-Party Data Sharing Governance Template',
    description: 'Framework template for governing data sharing with third parties including vendor assessments, contractual requirements, and ongoing monitoring procedures.',
    type: 'template',
    category: 'data',
    difficulty: 'advanced',
    duration: '50 minutes'
  },
  {
    id: 'data-lifecycle-management',
    title: 'Data Lifecycle Management Framework Template',
    description: 'End-to-end template for managing data throughout its lifecycle from creation to disposal, ensuring compliance and value optimization at each stage.',
    type: 'template',
    category: 'data',
    difficulty: 'intermediate',
    duration: '55 minutes'
  },
  {
    id: 'gdpr-compliance-assessment',
    title: 'UK GDPR Compliance Self-Assessment Template',
    description: 'Self-assessment template for evaluating UK GDPR compliance across all data processing activities. Includes gap analysis and remediation planning.',
    type: 'template',
    category: 'compliance',
    difficulty: 'intermediate',
    duration: '60 minutes'
  },
  {
    id: 'data-monitoring-framework',
    title: 'Data Governance Monitoring and Assurance Template',
    description: 'Template for continuous monitoring of data governance effectiveness including KPIs, audit procedures, and compliance reporting mechanisms.',
    type: 'template',
    category: 'data',
    difficulty: 'advanced',
    duration: '45 minutes'
  },

  // Checklists
  {
    id: 'ico-data-sharing-checklist',
    title: 'Data Sharing Checklist - ICO',
    description: 'Practical checklist for data sharing compliance including DPIA requirements, lawful basis identification, and risk assessment considerations.',
    type: 'checklist',
    category: 'data',
    difficulty: 'beginner',
    duration: '15 minutes',
    downloadUrl: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-sharing/data-sharing-a-code-of-practice/annex-a-data-sharing-checklist/'
  },
  {
    id: 'data-breach-response-checklist',
    title: 'Data Breach Response Checklist - ICO Aligned',
    description: 'Immediate response checklist for data breaches under UK GDPR. Includes notification requirements, containment procedures, and documentation requirements.',
    type: 'checklist',
    category: 'incident-response',
    difficulty: 'beginner',
    duration: '15 minutes'
  },
  {
    id: 'data-governance-audit-checklist',
    title: 'Data Governance Audit Checklist',
    description: 'Comprehensive audit checklist covering all aspects of data governance compliance including policies, procedures, controls, and documentation requirements.',
    type: 'checklist',
    category: 'compliance',
    difficulty: 'intermediate',
    duration: '35 minutes'
  },
  {
    id: 'data-classification-checklist',
    title: 'Data Classification and Handling Checklist',
    description: 'Checklist for classifying data based on sensitivity levels with corresponding handling, storage, and sharing requirements aligned with UK GDPR.',
    type: 'checklist',
    category: 'data',
    difficulty: 'beginner',
    duration: '20 minutes'
  },
  {
    id: 'privacy-impact-checklist',
    title: 'Privacy Impact Assessment Checklist',
    description: 'Step-by-step checklist for conducting privacy impact assessments, including risk identification, mitigation measures, and stakeholder consultation.',
    type: 'checklist',
    category: 'compliance',
    difficulty: 'intermediate',
    duration: '25 minutes'
  },
  {
    id: 'data-governance-implementation-checklist',
    title: 'Data Governance Implementation Checklist',
    description: 'Comprehensive checklist for implementing data governance programs covering strategy, structure, processes, and technology considerations.',
    type: 'checklist',
    category: 'data',
    difficulty: 'intermediate',
    duration: '30 minutes'
  },
  {
    id: 'gdpr-readiness-checklist',
    title: 'UK GDPR Readiness Checklist',
    description: 'Complete readiness checklist for UK GDPR compliance covering all key requirements including lawful basis, data subjects rights, and accountability measures.',
    type: 'checklist',
    category: 'compliance',
    difficulty: 'beginner',
    duration: '40 minutes'
  }
];


export const categories = [
  { id: 'all', label: 'All Categories' },
  { id: 'network', label: 'Network Security' },
  { id: 'data', label: 'Data Protection' },
  { id: 'compliance', label: 'Compliance' },
  { id: 'training', label: 'Training' },
  { id: 'incident-response', label: 'Incident Response' }
];

export const types = [
  { id: 'all', label: 'All Types' },
  { id: 'guide', label: 'Guides' },
  { id: 'template', label: 'Templates' },
  { id: 'checklist', label: 'Checklists' },
  { id: 'video', label: 'Videos' },
  { id: 'whitepaper', label: 'Whitepapers' }
];
