import React, { useState, useEffect } from 'react';

interface Question {
  id: number;
  text: string;
  weight: number;
  category: string;
}

interface Category {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  questions: { id: number; text: string; weight: number }[];
}

interface UserDetails {
  name: string;
  email: string;
}

interface AssessmentResult {
  category: string;
  score: number;
  maxScore: number;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  recommendations: string[];
  completedAt: Date;
  answers: { id: number; answer: boolean }[];
}

interface Props {
  categories: Category[];
  onClose: () => void;
  onComplete: (results: AssessmentResult[], userDetails: UserDetails) => void;
}

const SingleAssessmentModal: React.FC<Props> = ({ categories, onClose, onComplete }) => {
  const allQuestions: Question[] = categories.flatMap(cat =>
    cat.questions.map(q => ({ ...q, category: cat.title }))
  );

  const [step, setStep] = useState<'user' | 'question' | 'done'>('user');
  const [userDetails, setUserDetails] = useState<UserDetails>({ name: '', email: '' });
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<{ id: number; answer: boolean; category: string }[]>([]);

  const grouped: {
    [cat: string]: {
      score: number;
      maxScore: number;
      answers: { id: number; answer: boolean }[];
    };
  } = {};

  allQuestions.forEach(q => {
    if (!grouped[q.category]) grouped[q.category] = { score: 0, maxScore: 0, answers: [] };
    grouped[q.category].maxScore += q.weight;
  });

  answers.forEach(a => {
    const q = allQuestions.find(q => q.id === a.id && q.category === a.category);
    if (q && a.answer) grouped[a.category].score += q.weight;
    grouped[a.category].answers.push({ id: a.id, answer: a.answer });
  });

  const getRiskLevel = (score: number, maxScore: number): 'low' | 'medium' | 'high' | 'critical' => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 90) return 'low';
    if (percentage >= 70) return 'medium';
    if (percentage >= 50) return 'high';
    return 'critical';
  };

  // Generate recommendations based on answers
  function getRecommendation(questionText: string, answer: boolean): string {
    if (answer) {
      return `Good job: "${questionText}". Keep following this best practice!`;
    } else {
      return `Consider improving: "${questionText}". Here's how you can do better.`;
    }
  }

  const results: AssessmentResult[] = Object.entries(grouped).map(([category, { score, maxScore, answers }]) => {
    // Find all questions for this category
    const questionsInCategory = allQuestions.filter(q => q.category === category);
    // Map answers to recommendations
    const recommendations = answers.map(a => {
      const q = questionsInCategory.find(qc => qc.id === a.id);
      return q ? getRecommendation(q.text, a.answer) : '';
    });
    return {
      category,
      score,
      maxScore,
      riskLevel: getRiskLevel(score, maxScore),
      recommendations,
      completedAt: new Date(),
      answers
    };
  });

  useEffect(() => {
    if (step === 'done') {
      onComplete(results, userDetails);
    }
  }, [step, onComplete, results, userDetails]);

  if (step === 'user') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-dominant mb-4 text-center">Start Assessment</h2>
          <p className="text-slate mb-6 text-center">Please enter your details to begin the assessment.</p>
          <form
            onSubmit={e => {
              e.preventDefault();
              setStep('question');
            }}
            className="space-y-4"
          >
            <input
              type="text"
              required
              placeholder="Your Name"
              value={userDetails.name}
              onChange={e => setUserDetails({ ...userDetails, name: e.target.value })}
              className="w-full px-4 py-2 border border-light rounded-lg"
            />
            <input
              type="email"
              required
              placeholder="Your Email"
              value={userDetails.email}
              onChange={e => setUserDetails({ ...userDetails, email: e.target.value })}
              className="w-full px-4 py-2 border border-light rounded-lg"
            />
            <div className="flex justify-between mt-6">
              <button type="button" className="px-4 py-2 text-slate" onClick={onClose}>Cancel</button>
              <button type="submit" className="px-6 py-2 bg-blue text-white rounded-lg font-semibold">Start</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  if (step === 'question') {
    const q = allQuestions[current];
    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg">
          <h2 className="text-xl font-bold text-dominant mb-2">
            Assessment Question {current + 1} of {allQuestions.length}
          </h2>
          <p className="text-slate mb-4">
            Category: <span className="font-semibold">{q.category}</span>
          </p>
          <div className="mb-8 text-lg text-dominant font-medium">{q.text}</div>
          <div className="flex gap-6 justify-center">
            <button
              className="px-6 py-2 bg-accent-green text-white rounded-lg font-semibold text-lg"
              onClick={() => {
                setAnswers(prev => [...prev, { id: q.id, answer: true, category: q.category }]);
                setCurrent(prev => prev + 1);
                if (current + 1 >= allQuestions.length) setStep('done');
              }}
            >
              Yes
            </button>
            <button
              className="px-6 py-2 bg-dominant text-white rounded-lg font-semibold text-lg"
              onClick={() => {
                setAnswers(prev => [...prev, { id: q.id, answer: false, category: q.category }]);
                setCurrent(prev => prev + 1);
                if (current + 1 >= allQuestions.length) setStep('done');
              }}
            >
              No
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'done') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl">
          <h2 className="text-2xl font-bold text-dominant mb-4 text-center">Assessment Complete</h2>
          <p className="text-slate mb-6 text-center">Your results are ready. You can download your assessment as a PDF.</p>
          <div className="mb-6">
            {results.map(res => (
              <div key={res.category} className="mb-4">
                <h3 className="text-lg font-semibold text-blue mb-1">{res.category}</h3>
                <div className="text-slate text-sm">
                  Score: <span className="font-bold">{res.score}</span> / {res.maxScore}
                </div>
                <div className="mt-1 text-xs text-slate">
                  {Math.round((res.score / res.maxScore) * 100)}% correct
                </div>
                <div className="mt-1 text-xs text-slate">
                  Risk Level: <span className="font-bold">{res.riskLevel}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-8">
            <button className="px-4 py-2 text-slate" onClick={onClose}>Close</button>
            <button
              className="px-6 py-2 bg-blue text-white rounded-lg font-semibold"
              onClick={() => window.print()}
            >
              Download PDF
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default SingleAssessmentModal;
