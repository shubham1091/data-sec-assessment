import React from 'react';
import { Shield, Lock } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-light">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Shield className="w-8 h-8 text-blue" />
              <Lock className="w-4 h-4 text-teal absolute -bottom-1 -right-1" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-dominant">Openplan</h1>
              <p className="text-sm text-slate">Security Assessment for Everyone</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-sm text-slate">Helping teams stay secure</span>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
                <span className="text-xs text-accent-green font-medium">Secure Connection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;