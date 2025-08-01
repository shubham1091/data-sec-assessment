import React from 'react';
import { Shield, TrendingUp, Award } from "lucide-react";

const Hero: React.FC = () => {
 

  return (
    <section className="bg-gradient-to-br from-light via-white to-light py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-dominant mb-6 leading-tight">
            Comprehensive
            <span className="bg-clip-text bg-gradient-to-r from-blue to-teal">
              {" "}
              Data Security{" "}
            </span>
            for Everyone
          </h1>
          <p className="text-xl text-slate max-w-3xl mx-auto mb-8 leading-relaxed">
            Help keep our company secure! This quick assessment helps identify
            potential security risks in your daily work. No technical expertise
            required - just answer honestly about your work habits.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue" />
              </div>
              <h3 className="text-lg font-semibold text-dominant mb-2">
                Comprehensive Analysis
              </h3>
              <p className="text-slate">
                Multi-layered security assessment covering network, data,
                personnel, and physical security
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-teal" />
              </div>
              <h3 className="text-lg font-semibold text-dominant mb-2">
                Actionable Insights
              </h3>
              <p className="text-slate">
                Receive prioritized recommendations and step-by-step remediation
                guides
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent-green" />
              </div>
              <h3 className="text-lg font-semibold text-dominant mb-2">
                Compliance Ready
              </h3>
              <p className="text-slate">
                Align with GDPR, HIPAA, SOX, PCI-DSS and other regulatory
                requirements
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;