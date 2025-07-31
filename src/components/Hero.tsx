import React from 'react';
import { Shield, TrendingUp, Award, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const stats = [
    { icon: Shield, label: 'Security Frameworks', value: '15+' },
    { icon: TrendingUp, label: 'Risk Reduction', value: '85%' },
    { icon: Award, label: 'Compliance Standards', value: '12+' },
    { icon: Users, label: 'Organizations Protected', value: '10K+' }
  ];

  return (
    <section className="bg-gradient-to-br from-light via-white to-light py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-dominant mb-6 leading-tight">
            Comprehensive
            <span className="bg-clip-text bg-gradient-to-r from-blue to-teal"> Cybersecurity </span>
            for Everyone
          </h1>
          <p className="text-xl text-slate max-w-3xl mx-auto mb-8 leading-relaxed">
            Help keep our company secure! This quick assessment helps identify potential security risks 
            in your daily work. No technical expertise required - just answer honestly about your work habits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-blue hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Start My Assessment
            </button>
            <button className="px-8 py-4 border-2 border-blue text-blue hover:bg-light font-semibold rounded-lg transition-all duration-200">
              See Example Results
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map(({ icon: Icon, label, value }, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-light rounded-lg mb-4">
                <Icon className="w-6 h-6 text-blue" />
              </div>
              <div className="text-3xl font-bold text-dominant mb-2">{value}</div>
              <div className="text-sm text-slate">{label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue" />
              </div>
              <h3 className="text-lg font-semibold text-dominant mb-2">Comprehensive Analysis</h3>
              <p className="text-slate">Multi-layered security assessment covering network, data, personnel, and physical security</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-teal" />
              </div>
              <h3 className="text-lg font-semibold text-dominant mb-2">Actionable Insights</h3>
              <p className="text-slate">Receive prioritized recommendations and step-by-step remediation guides</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent-green" />
              </div>
              <h3 className="text-lg font-semibold text-dominant mb-2">Compliance Ready</h3>
              <p className="text-slate">Align with GDPR, HIPAA, SOX, PCI-DSS and other regulatory requirements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;