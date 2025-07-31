import React, { useState } from 'react';
import { Shield, CheckCircle, AlertCircle, FileText, Download } from 'lucide-react';

interface ComplianceFramework {
  id: string;
  name: string;
  description: string;
  requirements: string[];
  color: string;
}

const ComplianceChecker: React.FC = () => {
  const [selectedFramework, setSelectedFramework] = useState<string | null>(null);

  const frameworks: ComplianceFramework[] = [
    {
      id: 'gdpr',
      name: 'GDPR',
      description: 'General Data Protection Regulation - EU data protection law',
      color: 'bg-blue-500',
      requirements: [
        'Data Protection Impact Assessment (DPIA) completed',
        'Privacy by Design implemented',
        'Data Subject Rights procedures established',
        'Data breach notification process in place',
        'Data Processing Records maintained',
        'Data Protection Officer (DPO) appointed',
        'Consent management system implemented',
        'Cross-border data transfer safeguards'
      ]
    },
    {
      id: 'hipaa',
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      color: 'bg-green-500',
      requirements: [
        'Administrative safeguards implemented',
        'Physical safeguards for PHI access',
        'Technical safeguards for electronic PHI',
        'Business Associate Agreements in place',
        'Risk assessment and management',
        'Workforce training on HIPAA compliance',
        'Incident response procedures',
        'Audit controls and monitoring'
      ]
    },
    {
      id: 'sox',
      name: 'SOX',
      description: 'Sarbanes-Oxley Act - Financial reporting compliance',
      color: 'bg-purple-500',
      requirements: [
        'Internal controls over financial reporting',
        'IT general controls documented',
        'Access controls for financial systems',
        'Change management procedures',
        'Data backup and recovery procedures',
        'Segregation of duties enforced',
        'Management assessment of controls',
        'External auditor attestation'
      ]
    },
    {
      id: 'pci',
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard',
      color: 'bg-red-500',
      requirements: [
        'Firewall configuration standards',
        'Default passwords changed',
        'Cardholder data protection',
        'Encrypted transmission of data',
        'Anti-virus software deployed',
        'Secure systems and applications',
        'Access controls implemented',
        'Network monitoring and testing'
      ]
    },
    {
      id: 'iso27001',
      name: 'ISO 27001',
      description: 'Information Security Management System standard',
      color: 'bg-teal-500',
      requirements: [
        'Information Security Policy established',
        'Risk assessment methodology',
        'Security objectives and programs',
        'Competence and awareness training',
        'Operational planning and control',
        'Information security incident management',
        'Monitoring and measurement processes',
        'Internal audit program'
      ]
    },
    {
      id: 'nist',
      name: 'NIST Framework',
      description: 'National Institute of Standards and Technology Cybersecurity Framework',
      color: 'bg-orange-500',
      requirements: [
        'Asset management and inventory',
        'Business environment understanding',
        'Governance structure established',
        'Risk assessment processes',
        'Risk management strategy',
        'Supply chain risk management',
        'Protective controls implemented',
        'Incident response capabilities'
      ]
    }
  ];

  const generateComplianceReport = (framework: ComplianceFramework) => {
    // Simulate report generation
    const report = {
      framework: framework.name,
      assessmentDate: new Date().toISOString().split('T')[0],
      overallCompliance: Math.floor(Math.random() * 30 + 70), // 70-99%
      requirements: framework.requirements.map(req => ({
        requirement: req,
        status: Math.random() > 0.3 ? 'compliant' : 'non-compliant',
        priority: Math.random() > 0.5 ? 'high' : 'medium'
      }))
    };
    
    // In a real app, this would generate and download a PDF
    console.log('Compliance Report:', report);
    alert(`${framework.name} compliance report generated successfully!`);
  };

  return (
    <div className="py-16 px-4 pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Compliance Assessment</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Evaluate your organization's compliance with major regulatory frameworks and industry standards
          </p>
        </div>

        {/* Framework Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {frameworks.map((framework) => (
            <div
              key={framework.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => setSelectedFramework(selectedFramework === framework.id ? null : framework.id)}
            >
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 ${framework.color} rounded-lg flex items-center justify-center`}>
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{framework.name}</h3>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {framework.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {framework.requirements.length} requirements
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      generateComplianceReport(framework);
                    }}
                    className="flex items-center space-x-1 px-3 py-1 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors text-sm"
                  >
                    <Download size={14} />
                    <span>Report</span>
                  </button>
                </div>
              </div>

              {/* Expanded Requirements */}
              {selectedFramework === framework.id && (
                <div className="border-t border-gray-200 p-6 bg-gray-50">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Requirements:</h4>
                  <ul className="space-y-2">
                    {framework.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm">
                        <div className="w-4 h-4 mt-0.5">
                          {Math.random() > 0.3 ? (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          ) : (
                            <AlertCircle className="w-4 h-4 text-red-500" />
                          )}
                        </div>
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Compliance Dashboard */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Compliance Dashboard</h3>
              <p className="text-gray-600">Overview of your compliance status across frameworks</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-sm text-gray-600">Average Compliance</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-sm text-gray-600">Frameworks Assessed</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">12</div>
              <div className="text-sm text-gray-600">Action Items</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Recommended Next Steps:</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-700">Complete GDPR data mapping exercise</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-700">Update incident response procedures for SOX compliance</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Schedule quarterly compliance reviews</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceChecker;