import React from 'react';
import { Play, CheckCircle, LucideIcon } from 'lucide-react';
import { AssessmentResult } from '../App';

interface AssessmentCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  questions: Array<{ id: number; text: string; weight: number }>;
}

interface AssessmentCardProps {
  category: AssessmentCategory;
  onStartAssessment: () => void;
  result?: AssessmentResult;
  getRiskColor: (riskLevel: string) => string;
  getRiskIcon: (riskLevel: string) => LucideIcon;
}

const AssessmentCard: React.FC<AssessmentCardProps> = ({
  category,
  onStartAssessment,
  result,
  getRiskColor,
  getRiskIcon
}) => {
  const Icon = category.icon;
  const isCompleted = !!result;
  const RiskIcon = result ? getRiskIcon(result.riskLevel) : CheckCircle;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          {isCompleted && (
            <div className={`flex items-center space-x-1 ${getRiskColor(result.riskLevel)}`}>
              <RiskIcon size={16} />
              <span className="text-xs font-medium uppercase tracking-wide">
                {result.riskLevel} Risk
              </span>
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-semibold text-dominant mb-2">
          {category.title}
        </h3>
        
        <p className="text-slate mb-4 leading-relaxed">
          {category.description}
        </p>
        
        {isCompleted && (
          <div className="mb-4 p-3 bg-light rounded-lg">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate">Score:</span>
              <span className="font-semibold">
                {result.score}/{result.maxScore} ({Math.round((result.score / result.maxScore) * 100)}%)
              </span>
            </div>
            <div className="w-full bg-light rounded-full h-2 mt-2">
              <div 
                className={`h-2 rounded-full transition-all duration-500 ${
                  result.riskLevel === 'low' ? 'bg-accent-green' :
                  result.riskLevel === 'medium' ? 'bg-slate' :
                  result.riskLevel === 'high' ? 'bg-blue' :
                  'bg-dominant'
                }`}
                style={{ width: `${(result.score / result.maxScore) * 100}%` }}
              ></div>
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate">
            {category.questions.length} simple questions
          </span>
          
          <button
            onClick={onStartAssessment}
            className="flex items-center space-x-2 px-4 py-2 bg-blue hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
          >
            <Play size={16} />
            <span>{isCompleted ? 'Update' : 'Begin'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentCard;