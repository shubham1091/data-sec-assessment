export interface Question {
  id: number;
  text: string;
  weight: number;
}

export interface CategoryData {
  id: string;
  title: string;
  description: string;
  iconName: 'Shield' | 'Database' | 'Users' | 'Building';
  color: string;
  questions: Question[];
}

export const assessmentCategories: CategoryData[] = [
  {
    id: "network-security",
    title: "Internet & Network Safety",
    description:
      "How you connect to and use the internet, WiFi, and company networks safely",
    iconName: 'Shield',
    color: "bg-blue",
    questions: [
      {
        id: 1,
        text: "Do you use the company VPN when working from home or public places?",
        weight: 10,
      },
      {
        id: 2,
        text: "Do you avoid connecting to public WiFi for work activities?",
        weight: 8,
      },
      {
        id: 3,
        text: "Do you keep your work devices updated with the latest software?",
        weight: 9,
      },
      {
        id: 4,
        text: "Do you use only approved company applications and tools?",
        weight: 7,
      },
      {
        id: 5,
        text: "Do you report suspicious network activity or slow connections?",
        weight: 9,
      },
      {
        id: 6,
        text: "Do you log out of systems when stepping away from your desk?",
        weight: 8,
      },
      {
        id: 7,
        text: "Do you use secure, company-approved file sharing methods?",
        weight: 9,
      },
      {
        id: 8,
        text: "Do you avoid downloading software without IT approval?",
        weight: 8,
      },
    ],
  },
  {
    id: "data-protection",
    title: "Data & Information Safety",
    description:
      "How you handle, store, and protect company and customer information",
    iconName: 'Database',
    color: "bg-teal",
    questions: [
      {
        id: 1,
        text: "Do you store sensitive information only in approved company systems?",
        weight: 10,
      },
      {
        id: 2,
        text: "Do you avoid saving work files on personal devices or cloud accounts?",
        weight: 10,
      },
      {
        id: 3,
        text: "Do you regularly back up important work files to company systems?",
        weight: 9,
      },
      {
        id: 4,
        text: "Do you know how to identify and handle sensitive customer data?",
        weight: 8,
      },
      {
        id: 5,
        text: "Do you only access data that you need for your job?",
        weight: 9,
      },
      {
        id: 6,
        text: "Do you properly dispose of printed documents with sensitive information?",
        weight: 7,
      },
      {
        id: 7,
        text: "Do you understand what information should not be shared externally?",
        weight: 8,
      },
      {
        id: 8,
        text: "Do you report data breaches or potential data loss immediately?",
        weight: 8,
      },
    ],
  },
  {
    id: "employee-training",
    title: "Personal Security Habits",
    description:
      "Your daily security practices, passwords, and awareness of threats",
    iconName: 'Users',
    color: "bg-accent-green",
    questions: [
      {
        id: 1,
        text: "Do you use strong, unique passwords for all your work accounts?",
        weight: 9,
      },
      {
        id: 2,
        text: "Can you identify suspicious emails and avoid clicking unknown links?",
        weight: 10,
      },
      {
        id: 3,
        text: "Do you use two-factor authentication (2FA) when available?",
        weight: 8,
      },
      {
        id: 4,
        text: "Do you verify requests for sensitive information before responding?",
        weight: 9,
      },
      {
        id: 5,
        text: "Do you know who to contact if you suspect a security issue?",
        weight: 8,
      },
      {
        id: 6,
        text: "Do you keep your workspace clean and secure when not present?",
        weight: 7,
      },
      {
        id: 7,
        text: "Do you attend security training sessions when offered?",
        weight: 8,
      },
      {
        id: 8,
        text: "Do you think before sharing company information on social media?",
        weight: 7,
      },
    ],
  },
  {
    id: "physical-security",
    title: "Workspace & Device Security",
    description:
      "How you secure your physical workspace, devices, and office environment",
    iconName: 'Building',
    color: "bg-slate",
    questions: [
      {
        id: 1,
        text: "Do you lock your computer screen when stepping away?",
        weight: 9,
      },
      {
        id: 2,
        text: "Do you keep your work devices physically secure and not leave them unattended?",
        weight: 8,
      },
      {
        id: 3,
        text: "Do you challenge or report unfamiliar people in secure work areas?",
        weight: 7,
      },
      {
        id: 4,
        text: "Do you ensure visitors are properly escorted and supervised?",
        weight: 8,
      },
      {
        id: 5,
        text: "Do you avoid working on sensitive information in public spaces?",
        weight: 7,
      },
      {
        id: 6,
        text: "Do you properly secure or destroy sensitive printed materials?",
        weight: 8,
      },
      {
        id: 7,
        text: "Do you keep your workspace organized and free of sensitive information when away?",
        weight: 9,
      },
      {
        id: 8,
        text: "Do you know the emergency procedures for your workplace?",
        weight: 8,
      },
    ],
  },
];
