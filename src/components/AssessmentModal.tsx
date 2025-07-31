import React, { useState } from 'react';
import { X, CheckCircle, AlertTriangle, LucideIcon } from 'lucide-react';
import { AssessmentResult } from '../App';

interface Question {
  id: number;
  text: string;
  weight: number;
}

interface AssessmentCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  questions: Question[];
}

interface AssessmentModalProps {
  category: AssessmentCategory;
  onClose: () => void;
  onComplete: (result: AssessmentResult) => void;
  getRiskLevel: (score: number, maxScore: number) => 'low' | 'medium' | 'high' | 'critical';
}

const AssessmentModal: React.FC<AssessmentModalProps> = ({
  category,
  onClose,
  onComplete,
  getRiskLevel
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: number, answer: boolean) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    if (currentQuestion < category.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    const totalScore = category.questions.reduce((sum, question) => {
      return sum + (answers[question.id] ? question.weight : 0);
    }, 0);
    
    const maxScore = category.questions.reduce((sum, question) => sum + question.weight, 0);
    const riskLevel = getRiskLevel(totalScore, maxScore);
    
    const recommendations = generateRecommendations(answers, category.questions, riskLevel);
    
    const result: AssessmentResult = {
      category: category.title,
      score: totalScore,
      maxScore,
      riskLevel,
      recommendations,
      completedAt: new Date()
    };
    
    setShowResults(true);
    setTimeout(() => onComplete(result), 2000);
  };

  const generateRecommendations = (answers: Record<number, boolean>, questions: Question[], riskLevel: string): string[] => {
    const failedQuestions = questions.filter(q => !answers[q.id]);
    const recommendations: string[] = [];
    
    if (riskLevel === 'critical' || riskLevel === 'high') {
      recommendations.push('Talk to your IT team or manager about security concerns within the next week');
      recommendations.push('Set up two-factor authentication on all your work accounts');
      recommendations.push('Attend the next available security training session');
    }
    
    failedQuestions.forEach(question => {
      if (question.text.includes('VPN') || question.text.includes('WiFi')) {
        recommendations.push('Ask IT how to properly use the company VPN and avoid public WiFi for work');
      }
      if (question.text.includes('password') || question.text.includes('authentication')) {
        recommendations.push('Use a password manager and enable two-factor authentication where possible');
      }
      if (question.text.includes('phishing') || question.text.includes('suspicious')) {
        recommendations.push('Learn to identify phishing emails and always verify suspicious requests');
      }
      if (question.text.includes('backup') || question.text.includes('files')) {
        recommendations.push('Regularly save important work files to approved company systems');
      }
      if (question.text.includes('lock') || question.text.includes('secure')) {
        recommendations.push('Always lock your screen and secure devices when stepping away');
      }
      if (question.text.includes('data') || question.text.includes('information')) {
        recommendations.push('Only access and share information that you need for your specific job role');
      }
    });
    
    if (recommendations.length === 0) {
      recommendations.push('Great job! Keep up these excellent security habits');
      recommendations.push('Consider helping colleagues learn about security best practices');
    }
    
    return recommendations.slice(0, 5);
  };

  const progress = ((currentQuestion + 1) / category.questions.length) * 100;
  const currentQ = category.questions[currentQuestion];
  const isAnswered = answers[currentQ?.id] !== undefined;

  if (showResults) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-accent-green bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-accent-green" />
          </div>
          <h3 className="text-2xl font-bold text-dominant mb-2">Assessment Complete!</h3>
          <p className="text-slate mb-4">
            Your {category.title.toLowerCase()} assessment has been processed.
          </p>
          <div className="animate-spin w-8 h-8 border-4 border-blue border-t-transparent rounded-full mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-light">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-dominant">{category.title}</h2>
              <p className="text-slate">Question {currentQuestion + 1} of {category.questions.length}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-light rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="w-full bg-light rounded-full h-2">
              <div 
                className="bg-blue h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="p-6">
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-dominant mb-4 leading-relaxed">
              {currentQ?.text}
            </h3>
            
            <div className="space-y-3">
              <button
                onClick={() => handleAnswer(currentQ.id, true)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  answers[currentQ.id] === true
                    ? 'border-accent-green bg-accent-green bg-opacity-10 text-accent-green'
                    : 'border-light hover:border-accent-green hover:bg-accent-green hover:bg-opacity-10'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    answers[currentQ.id] === true ? 'bg-accent-green border-accent-green' : 'border-light'
                  }`}>
                    {answers[currentQ.id] === true && (
                      <CheckCircle className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <span className="font-medium">Yes</span>
                </div>
              </button>
              
              <button
                onClick={() => handleAnswer(currentQ.id, false)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  answers[currentQ.id] === false
                    ? 'border-dominant bg-dominant bg-opacity-10 text-dominant'
                    : 'border-light hover:border-dominant hover:bg-dominant hover:bg-opacity-10'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    answers[currentQ.id] === false ? 'bg-dominant border-dominant' : 'border-light'
                  }`}>
                    {answers[currentQ.id] === false && (
                      <AlertTriangle className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <span className="font-medium">No</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="p-6 border-t border-light flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="px-6 py-2 text-slate hover:text-dominant disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>
          
          <button
            onClick={handleNext}
            disabled={!isAnswered}
            className="px-6 py-2 bg-blue hover:bg-blue-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
          >
            {currentQuestion === category.questions.length - 1 ? 'Complete' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentModal;