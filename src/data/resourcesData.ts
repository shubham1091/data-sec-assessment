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

export const resources: Resource[] = [
  {
    id: '1',
    title: 'NIST Cybersecurity Framework 2.0',
    description: 'The latest version of NIST\'s comprehensive cybersecurity framework. Free PDF download with implementation guidance.',
    type: 'guide',
    category: 'compliance',
    difficulty: 'intermediate',
    duration: '60 min read',
    downloadUrl: 'https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf'
  },
  {
    id: '2',
    title: 'CISA Cybersecurity Essentials',
    description: 'Free cybersecurity toolkit with practical guides, checklists, and training materials from CISA.',
    type: 'guide',
    category: 'training',
    difficulty: 'beginner',
    duration: 'Multiple resources',
    downloadUrl: 'https://www.cisa.gov/cybersecurity-essentials-toolkit'
  },
  {
    id: '3',
    title: 'OWASP Web Security Testing Guide',
    description: 'Comprehensive free guide for web application security testing. Essential for developers and security professionals.',
    type: 'guide',
    category: 'data',
    difficulty: 'intermediate',
    duration: '120 min read',
    downloadUrl: 'https://github.com/OWASP/wstg/releases/latest/download/wstg-v4.2.pdf'
  },
  {
    id: '4',
    title: 'Google\'s Security Planner',
    description: 'Free interactive tool to create a personalized security plan for individuals and small businesses.',
    type: 'template',
    category: 'data',
    difficulty: 'beginner',
    duration: '15 min setup',
    downloadUrl: 'https://securityplanner.org/'
  },
  {
    id: '5',
    title: 'SANS Reading Room',
    description: 'Free collection of information security research papers and whitepapers on various cybersecurity topics.',
    type: 'whitepaper',
    category: 'training',
    difficulty: 'intermediate',
    duration: 'Various',
    downloadUrl: 'https://www.sans.org/white-papers/'
  },
  {
    id: '6',
    title: 'FTC Data Security Guidelines',
    description: 'Free practical guide for businesses on protecting customer data and implementing security measures.',
    type: 'checklist',
    category: 'compliance',
    difficulty: 'beginner',
    duration: '30 min read',
    downloadUrl: 'https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business'
  },
  {
    id: '7',
    title: 'CISA Incident Response Basics',
    description: 'Free incident response planning guide with step-by-step instructions and templates.',
    type: 'template',
    category: 'incident-response',
    difficulty: 'intermediate',
    downloadUrl: 'https://www.cisa.gov/sites/default/files/2024-07/CISA_CPG_INCIDENT_RESPONSE_BASICS_508C.pdf'
  },
  {
    id: '8',
    title: 'Cybersecurity Awareness Month Resources',
    description: 'Free cybersecurity awareness materials, posters, and training content from CISA.',
    type: 'video',
    category: 'training',
    difficulty: 'beginner',
    duration: 'Multiple formats',
    downloadUrl: 'https://www.cisa.gov/cybersecurity-awareness-month'
  },
  {
    id: '9',
    title: 'ENISA Threat Landscape Report',
    description: 'Annual free report on cybersecurity threats and trends from the European cybersecurity agency.',
    type: 'whitepaper',
    category: 'training',
    difficulty: 'intermediate',
    duration: '90 min read',
    downloadUrl: 'https://www.enisa.europa.eu/publications/enisa-threat-landscape-2023'
  },
  {
    id: '10',
    title: 'Mozilla Privacy Not Included',
    description: 'Free buyer\'s guide for privacy and security of connected products and services.',
    type: 'guide',
    category: 'data',
    difficulty: 'beginner',
    duration: '20 min browse',
    downloadUrl: 'https://foundation.mozilla.org/en/privacynotincluded/'
  },
  {
    id: '11',
    title: 'NIST Password Guidelines',
    description: 'Official NIST Special Publication 800-63B on digital identity guidelines for authentication.',
    type: 'checklist',
    category: 'data',
    difficulty: 'intermediate',
    duration: '45 min read',
    downloadUrl: 'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63b.pdf'
  },
  {
    id: '12',
    title: 'Have I Been Pwned Educational Resources',
    description: 'Free educational materials about data breaches, password security, and breach notification.',
    type: 'guide',
    category: 'data',
    difficulty: 'beginner',
    duration: '25 min read',
    downloadUrl: 'https://haveibeenpwned.com/FAQs'
  },
  {
    id: '13',
    title: 'KnowBe4 Security Awareness Training',
    description: 'Free phishing security test and basic security awareness training materials.',
    type: 'video',
    category: 'training',
    difficulty: 'beginner',
    duration: '30 minutes',
    downloadUrl: 'https://www.knowbe4.com/free-phishing-security-test'
  },
  {
    id: '14',
    title: 'CISA Secure by Design',
    description: 'Free guidance for technology manufacturers on building security into products from the ground up.',
    type: 'guide',
    category: 'compliance',
    difficulty: 'advanced',
    duration: '60 min read',
    downloadUrl: 'https://www.cisa.gov/securebydesign'
  },
  {
    id: '15',
    title: 'Electronic Frontier Foundation Surveillance Self-Defense',
    description: 'Free comprehensive guide to digital privacy and security for activists, journalists, and everyone.',
    type: 'guide',
    category: 'data',
    difficulty: 'beginner',
    duration: '40 min read',
    downloadUrl: 'https://ssd.eff.org/'
  },
  {
    id: '16',
    title: 'OWASP Mobile Security Testing Guide',
    description: 'Free comprehensive manual for mobile app security testing and reverse engineering.',
    type: 'guide',
    category: 'network',
    difficulty: 'advanced',
    duration: '180 min read',
    downloadUrl: 'https://github.com/OWASP/owasp-mstg/releases/latest'
  },
  {
    id: '17',
    title: 'Krebs on Security Blog',
    description: 'Free cybersecurity news, investigation, and analysis from security journalist Brian Krebs.',
    type: 'guide',
    category: 'training',
    difficulty: 'beginner',
    duration: 'Daily updates',
    downloadUrl: 'https://krebsonsecurity.com/'
  },
  {
    id: '18',
    title: 'CISA Ransomware Guide',
    description: 'Free comprehensive guide on ransomware prevention, detection, and response strategies.',
    type: 'template',
    category: 'incident-response',
    difficulty: 'intermediate',
    downloadUrl: 'https://www.cisa.gov/stopransomware/ransomware-guide'
  },
  {
    id: '19',
    title: 'CISA Cybersecurity Awareness Videos',
    description: 'Free short training videos on phishing, password security, and safe browsing practices.',
    type: 'video',
    category: 'training',
    difficulty: 'beginner',
    duration: '2-5 min each',
    downloadUrl: 'https://www.youtube.com/@CISAgov'
  },
  {
    id: '20',
    title: 'SANS Cyber Aces Tutorials',
    description: 'Free interactive tutorials covering cybersecurity fundamentals including cryptography and web security.',
    type: 'video',
    category: 'training',
    difficulty: 'beginner',
    duration: '10-20 min each',
    downloadUrl: 'https://tutorials.cyberaces.org/'
  },
  {
    id: '21',
    title: 'NetworkChuck Security Basics',
    description: 'Free beginner-friendly cybersecurity videos covering password security, VPNs, and basic protection.',
    type: 'video',
    category: 'training',
    difficulty: 'beginner',
    duration: '15-30 min each',
    downloadUrl: 'https://www.youtube.com/@NetworkChuck/search?query=cybersecurity+basics'
  },
  {
    id: '22',
    title: 'OWASP Security Talks',
    description: 'Free recorded presentations from OWASP meetings covering web security and application protection.',
    type: 'video',
    category: 'training',
    difficulty: 'intermediate',
    duration: '30-45 min each',
    downloadUrl: 'https://www.youtube.com/@OWASPGLOBAL'
  },
  {
    id: '23',
    title: 'John Hammond Security Tutorials',
    description: 'Free cybersecurity education videos covering malware analysis basics and security tool demonstrations.',
    type: 'video',
    category: 'training',
    difficulty: 'intermediate',
    duration: '20-40 min each',
    downloadUrl: 'https://www.youtube.com/@_JohnHammond/search?query=tutorial'
  },
  {
    id: '24',
    title: 'Cybersecurity Awareness Training by KnowBe4',
    description: 'Free security awareness videos covering social engineering, phishing, and workplace security.',
    type: 'video',
    category: 'training',
    difficulty: 'beginner',
    duration: '5-15 min each',
    downloadUrl: 'https://www.youtube.com/@KnowBe4'
  },
  {
    id: '25',
    title: 'Professor Messer Security Fundamentals',
    description: 'Free individual video lessons on specific cybersecurity topics and concepts.',
    type: 'video',
    category: 'training',
    difficulty: 'beginner',
    duration: '10-30 min each',
    downloadUrl: 'https://www.youtube.com/@professormesser/search?query=security+fundamentals'
  },
  {
    id: '26',
    title: 'Infosec Institute Free Videos',
    description: 'Free cybersecurity training videos covering incident response, forensics, and security basics.',
    type: 'video',
    category: 'training',
    difficulty: 'intermediate',
    duration: '20-45 min each',
    downloadUrl: 'https://www.youtube.com/@InfoSecInstitute'
  },
  {
    id: '27',
    title: 'Hak5 Security Tips',
    description: 'Free practical cybersecurity videos covering tools, techniques, and security demonstrations.',
    type: 'video',
    category: 'network',
    difficulty: 'intermediate',
    duration: '10-25 min each',
    downloadUrl: 'https://www.youtube.com/@hak5'
  },
  {
    id: '28',
    title: 'NIST Cybersecurity Webinars',
    description: 'Free recorded webinars on cybersecurity frameworks, best practices, and implementation guidance.',
    type: 'video',
    category: 'compliance',
    difficulty: 'intermediate',
    duration: '45-60 min each',
    downloadUrl: 'https://www.nist.gov/news-events/events/cybersecurity'
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
