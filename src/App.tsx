import { useState } from 'react';
import { Shield, Database, Users, Building, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import AssessmentCard from './components/AssessmentCard';
import AssessmentModal from './components/AssessmentModal';
import ResultsDashboard from './components/ResultsDashboard';
import ComplianceChecker from './components/ComplianceChecker';
import ResourceCenter from './components/ResourceCenter';

export interface AssessmentResult {
  category: string;
  score: number;
  maxScore: number;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  recommendations: string[];
  completedAt: Date;
}

function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [results, setResults] = useState<AssessmentResult[]>([]);
  const [activeTab, setActiveTab] = useState<'assessments' | 'results' | 'compliance' | 'resources'>('assessments');

  const assessmentCategories = [
    {
      id: 'network-security',
      title: 'Internet & Network Safety',
      description: 'How you connect to and use the internet, WiFi, and company networks safely',
      icon: Shield,
      color: 'bg-blue-500',
      questions: [
        { id: 1, text: 'Do you use the company VPN when working from home or public places?', weight: 10 },
        { id: 2, text: 'Do you avoid connecting to public WiFi for work activities?', weight: 8 },
        { id: 3, text: 'Do you keep your work devices updated with the latest software?', weight: 9 },
        { id: 4, text: 'Do you use only approved company applications and tools?', weight: 7 },
        { id: 5, text: 'Do you report suspicious network activity or slow connections?', weight: 9 },
        { id: 6, text: 'Do you log out of systems when stepping away from your desk?', weight: 8 },
        { id: 7, text: 'Do you use secure, company-approved file sharing methods?', weight: 9 },
        { id: 8, text: 'Do you avoid downloading software without IT approval?', weight: 8 }
      ]
    },
    {
      id: 'data-protection',
      title: 'Data & Information Safety',
      description: 'How you handle, store, and protect company and customer information',
      icon: Database,
      color: 'bg-teal-500',
      questions: [
        { id: 1, text: 'Do you store sensitive information only in approved company systems?', weight: 10 },
        { id: 2, text: 'Do you avoid saving work files on personal devices or cloud accounts?', weight: 10 },
        { id: 3, text: 'Do you regularly back up important work files to company systems?', weight: 9 },
        { id: 4, text: 'Do you know how to identify and handle sensitive customer data?', weight: 8 },
        { id: 5, text: 'Do you only access data that you need for your job?', weight: 9 },
        { id: 6, text: 'Do you properly dispose of printed documents with sensitive information?', weight: 7 },
        { id: 7, text: 'Do you understand what information should not be shared externally?', weight: 8 },
        { id: 8, text: 'Do you report data breaches or potential data loss immediately?', weight: 8 }
      ]
    },
    {
      id: 'employee-training',
      title: 'Personal Security Habits',
      description: 'Your daily security practices, passwords, and awareness of threats',
      icon: Users,
      color: 'bg-purple-500',
      questions: [
        { id: 1, text: 'Do you use strong, unique passwords for all your work accounts?', weight: 9 },
        { id: 2, text: 'Can you identify suspicious emails and avoid clicking unknown links?', weight: 10 },
        { id: 3, text: 'Do you use two-factor authentication (2FA) when available?', weight: 8 },
        { id: 4, text: 'Do you verify requests for sensitive information before responding?', weight: 9 },
        { id: 5, text: 'Do you know who to contact if you suspect a security issue?', weight: 8 },
        { id: 6, text: 'Do you keep your workspace clean and secure when not present?', weight: 7 },
        { id: 7, text: 'Do you attend security training sessions when offered?', weight: 8 },
        { id: 8, text: 'Do you think before sharing company information on social media?', weight: 7 }
      ]
    },
    {
      id: 'physical-security',
      title: 'Workspace & Device Security',
      description: 'How you secure your physical workspace, devices, and office environment',
      icon: Building,
      color: 'bg-orange-500',
      questions: [
        { id: 1, text: 'Do you lock your computer screen when stepping away?', weight: 9 },
        { id: 2, text: 'Do you keep your work devices physically secure and not leave them unattended?', weight: 8 },
        { id: 3, text: 'Do you challenge or report unfamiliar people in secure work areas?', weight: 7 },
        { id: 4, text: 'Do you ensure visitors are properly escorted and supervised?', weight: 8 },
        { id: 5, text: 'Do you avoid working on sensitive information in public spaces?', weight: 7 },
        { id: 6, text: 'Do you properly secure or destroy sensitive printed materials?', weight: 8 },
        { id: 7, text: 'Do you keep your workspace organized and free of sensitive information when away?', weight: 9 },
        { id: 8, text: 'Do you know the emergency procedures for your workplace?', weight: 8 }
      ]
    }
  ];

  const handleAssessmentComplete = (result: AssessmentResult) => {
    setResults(prev => [...prev.filter(r => r.category !== result.category), result]);
    setActiveModal(null);
  };

  const getRiskLevel = (score: number, maxScore: number): 'low' | 'medium' | 'high' | 'critical' => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 90) return 'low';
    if (percentage >= 70) return 'medium';
    if (percentage >= 50) return 'high';
    return 'critical';
  };

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'low': return 'text-green-600';
      case 'medium': return 'text-yellow-600';
      case 'high': return 'text-orange-600';
      default: return 'text-red-600';
    }
  };

  const getRiskIcon = (riskLevel: string) => {
    switch (riskLevel) {
      case 'low': return CheckCircle;
      case 'medium': return Info;
      case 'high': return AlertTriangle;
      default: return AlertTriangle;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {activeTab === 'assessments' && (
        <>
          <Hero />
          
          <section className="py-16 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Security Assessment Categories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Complete these assessments to identify vulnerabilities and strengthen your cybersecurity posture
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {assessmentCategories.map((category) => (
                <AssessmentCard
                  key={category.id}
                  category={category}
                  onStartAssessment={() => setActiveModal(category.id)}
                  result={results.find(r => r.category === category.title)}
                  getRiskColor={getRiskColor}
                  getRiskIcon={getRiskIcon}
                />
              ))}
            </div>
          </section>
        </>
      )}

      {activeTab === 'results' && (
        <ResultsDashboard 
          results={results}
          getRiskColor={getRiskColor}
          getRiskIcon={getRiskIcon}
        />
      )}

      {activeTab === 'compliance' && <ComplianceChecker />}
      
      {activeTab === 'resources' && <ResourceCenter />}

      {/* Navigation Tabs */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
        <div className="flex justify-center space-x-8">
          {[
            { id: 'assessments', label: 'Assessments', icon: Shield },
            { id: 'results', label: 'Results', icon: CheckCircle },
            { id: 'compliance', label: 'Compliance', icon: Database },
            { id: 'resources', label: 'Resources', icon: Info }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as 'assessments' | 'results' | 'compliance' | 'resources')}
              className={`flex flex-col items-center py-2 px-4 rounded-lg transition-colors ${
                activeTab === id
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              <Icon size={20} />
              <span className="text-xs mt-1">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Assessment Modal */}
      {activeModal && (
        <AssessmentModal
          category={assessmentCategories.find(c => c.id === activeModal)!}
          onClose={() => setActiveModal(null)}
          onComplete={handleAssessmentComplete}
          getRiskLevel={getRiskLevel}
        />
      )}
    </div>
  );
}

export default App;