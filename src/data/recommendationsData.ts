// Comprehensive recommendation system with specific, actionable advice and resource links

export interface RecommendationData {
  keywords: string[];
  suggestion: string;
  resourceLink?: string;
  category: string;
}

export const recommendationsDatabase: RecommendationData[] = [
  // Password Security
  {
    keywords: ['password', 'passwords', 'authentication', 'login'],
    suggestion: 'Use a password manager like Bitwarden (free) to generate and store unique, strong passwords for each account. Enable two-factor authentication (2FA) wherever possible.',
    resourceLink: 'https://bitwarden.com/',
    category: 'Password Security'
  },
  {
    keywords: ['two-factor', '2fa', 'multi-factor', 'mfa'],
    suggestion: 'Set up two-factor authentication using apps like Google Authenticator or Authy. Avoid SMS-based 2FA when possible - use authenticator apps or hardware keys instead.',
    resourceLink: 'https://www.cisa.gov/secure-our-world/turn-mfa',
    category: 'Authentication'
  },

  // Software Updates
  {
    keywords: ['update', 'updates', 'software', 'patch', 'patches'],
    suggestion: 'Enable automatic updates for your operating system and software. Check for updates weekly and install security patches immediately. Use tools like Windows Update, macOS Software Update, or package managers.',
    resourceLink: 'https://www.cisa.gov/sites/default/files/publications/software_update_best_practices.pdf',
    category: 'Software Security'
  },
  {
    keywords: ['antivirus', 'anti-virus', 'malware', 'virus'],
    suggestion: 'Install reputable antivirus software like Windows Defender (built-in), Malwarebytes, or Avast Free. Keep real-time protection enabled and run regular full system scans.',
    resourceLink: 'https://www.consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams',
    category: 'Malware Protection'
  },

  // Network Security
  {
    keywords: ['wifi', 'wi-fi', 'network', 'router', 'wireless'],
    suggestion: 'Secure your home Wi-Fi with WPA3 encryption (or WPA2 if WPA3 unavailable). Change default router passwords, disable WPS, and hide your network name (SSID) if possible.',
    resourceLink: 'https://www.cisa.gov/news-events/news/securing-your-home-network',
    category: 'Network Security'
  },
  {
    keywords: ['vpn', 'public wifi', 'public wi-fi'],
    suggestion: 'Use a reputable VPN service like ProtonVPN (free tier available) or Windscribe when connecting to public Wi-Fi. Never access sensitive accounts on unsecured networks.',
    resourceLink: 'https://protonvpn.com/',
    category: 'Network Security'
  },

  // Email Security
  {
    keywords: ['email', 'phishing', 'spam', 'suspicious'],
    suggestion: 'Be cautious of unexpected emails, especially those requesting personal information or urgent action. Verify sender identity through separate communication channels before clicking links or downloading attachments.',
    resourceLink: 'https://www.knowbe4.com/free-phishing-security-test',
    category: 'Email Security'
  },
  {
    keywords: ['attachment', 'attachments', 'download', 'file'],
    suggestion: 'Scan all email attachments with antivirus software before opening. Be especially wary of .exe, .zip, .doc, and .pdf files from unknown senders. Use online virus scanners like VirusTotal for suspicious files.',
    resourceLink: 'https://www.virustotal.com/',
    category: 'Email Security'
  },

  // Data Backup
  {
    keywords: ['backup', 'backups', 'data', 'files'],
    suggestion: 'Follow the 3-2-1 backup rule: 3 copies of important data, 2 different storage types, 1 offsite backup. Use cloud services like Google Drive, OneDrive, or local external drives.',
    resourceLink: 'https://www.cisa.gov/news-events/news/data-backup-and-recovery-best-practices',
    category: 'Data Protection'
  },
  {
    keywords: ['cloud', 'storage', 'sync'],
    suggestion: 'Use reputable cloud storage services with encryption like Google Drive, Dropbox, or OneDrive. Enable two-factor authentication on your cloud accounts and regularly review shared files.',
    resourceLink: 'https://ssd.eff.org/module/how-do-i-protect-myself-against-malware',
    category: 'Data Protection'
  },

  // Privacy Settings
  {
    keywords: ['privacy', 'social media', 'facebook', 'instagram', 'twitter'],
    suggestion: 'Review and tighten privacy settings on all social media accounts. Limit personal information visibility, disable location tracking, and be selective about friend/connection requests.',
    resourceLink: 'https://foundation.mozilla.org/en/privacynotincluded/',
    category: 'Privacy'
  },
  {
    keywords: ['location', 'tracking', 'gps'],
    suggestion: 'Disable location services for apps that don\'t need it. Review location history settings on Google, Apple, and social media accounts. Turn off location sharing in photos.',
    resourceLink: 'https://ssd.eff.org/module/your-security-plan',
    category: 'Privacy'
  },

  // Browser Security
  {
    keywords: ['browser', 'browsing', 'website', 'https'],
    suggestion: 'Use secure browsers like Firefox or Chrome with security extensions like uBlock Origin. Always look for HTTPS (lock icon) when entering sensitive information. Clear cookies and browsing data regularly.',
    resourceLink: 'https://www.eff.org/https-everywhere',
    category: 'Web Security'
  },
  {
    keywords: ['cookies', 'tracking', 'ads'],
    suggestion: 'Install privacy-focused browser extensions like uBlock Origin, Privacy Badger, or DuckDuckGo Privacy Essentials to block trackers and malicious ads.',
    resourceLink: 'https://privacybadger.org/',
    category: 'Web Security'
  },

  // Mobile Security
  {
    keywords: ['mobile', 'phone', 'smartphone', 'app', 'apps'],
    suggestion: 'Only download apps from official stores (Google Play, Apple App Store). Review app permissions before installing and regularly audit installed apps. Keep your mobile OS updated.',
    resourceLink: 'https://www.cisa.gov/sites/default/files/publications/Mobile_Device_Best_Practices.pdf',
    category: 'Mobile Security'
  },
  {
    keywords: ['lock screen', 'pin', 'biometric', 'fingerprint'],
    suggestion: 'Use strong screen locks (6+ digit PIN, pattern, or biometric). Enable remote wipe capabilities and consider using "Find My Device" features for theft protection.',
    resourceLink: 'https://support.google.com/android/answer/6160491',
    category: 'Mobile Security'
  },

  // Financial Security
  {
    keywords: ['banking', 'financial', 'credit card', 'payment'],
    suggestion: 'Monitor bank and credit card statements regularly. Set up account alerts for transactions. Use secure payment methods like PayPal or Apple Pay instead of entering card details directly.',
    resourceLink: 'https://www.consumer.ftc.gov/articles/0272-how-keep-your-personal-information-secure',
    category: 'Financial Security'
  },
  {
    keywords: ['identity', 'personal information', 'ssn', 'social security'],
    suggestion: 'Limit sharing of personal information online. Consider freezing your credit reports with all three bureaus (free). Monitor your credit report annually through annualcreditreport.com.',
    resourceLink: 'https://www.annualcreditreport.com/',
    category: 'Identity Protection'
  },

  // General Security Awareness
  {
    keywords: ['security', 'cybersecurity', 'awareness', 'training'],
    suggestion: 'Stay informed about current cybersecurity threats through reputable sources. Take free security awareness training and consider following security experts on social media.',
    resourceLink: 'https://www.cisa.gov/cybersecurity-awareness-month',
    category: 'Security Education'
  },
  {
    keywords: ['incident', 'breach', 'compromised', 'hacked'],
    suggestion: 'If you suspect a security incident, immediately change passwords, run antivirus scans, and monitor accounts for suspicious activity. Report incidents to relevant authorities if needed.',
    resourceLink: 'https://www.cisa.gov/report-cyber-incident',
    category: 'Incident Response'
  }
];

export function generateSpecificRecommendation(questionText: string, answer: boolean): string {
  if (answer) {
    return `Great! You're following best practices for: "${questionText}". Keep it up!`;
  }

  // Find relevant recommendation based on question keywords
  const questionLower = questionText.toLowerCase();
  
  for (const rec of recommendationsDatabase) {
    if (rec.keywords.some(keyword => questionLower.includes(keyword))) {
      const resourceText = rec.resourceLink ? ` Learn more: ${rec.resourceLink}` : '';
      return `Improvement needed: "${questionText}"\n\n${rec.suggestion}${resourceText}`;
    }
  }

  // Fallback for unmatched questions
  return `Consider improving: "${questionText}"\n\nReview your current practices and consider implementing stronger security measures. Check out CISA's cybersecurity resources for guidance: https://www.cisa.gov/cybersecurity`;
}
