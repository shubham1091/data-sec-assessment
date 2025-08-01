import { useState } from 'react';
import { Shield, Database, Users, Building, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import SingleAssessmentModal from './components/SingleAssessmentModal';
import ResultsDashboard from "./components/ResultsDashboard";
import ResourceCenter from './components/ResourceCenter';
import { assessmentCategories as assessmentData, Question } from './data/assessmentData';

interface Category {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  questions: Question[];
}

export interface AssessmentResult {
  category: string;
  score: number;
  maxScore: number;
  riskLevel: "low" | "medium" | "high" | "critical";
  recommendations: string[];
  completedAt: Date;
  answers: { id: number; answer: boolean }[];
  userDetails?: {
    name: string;
    email: string;
    role: string;
    department: string;
    company: string;
  };
}



// Utility function to convert assessment data to the format expected by components
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Shield': return <Shield />;
    case 'Database': return <Database />;
    case 'Users': return <Users />;
    case 'Building': return <Building />;
    default: return <Shield />;
  }
};

function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [results, setResults] = useState<AssessmentResult[]>([]);
  const [userDetails, setUserDetails] = useState<{
    name: string;
    email: string;
    role: string;
    department: string;
    company: string;
  } | null>(null);
  const [activeTab, setActiveTab] = useState<
    "assessments" | "results" | "resources"
  >("assessments");

  // Convert assessment data to include React components
  const assessmentCategories: Category[] = assessmentData.map(category => ({
    ...category,
    icon: getIconComponent(category.iconName)
  }));





  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case "low":
        return "text-accent-green";
      case "medium":
        return "text-slate";
      case "high":
        return "text-blue";
      default:
        return "text-dominant";
    }
  };

  const getRiskIcon = (riskLevel: string) => {
    switch (riskLevel) {
      case "low":
        return CheckCircle;
      case "medium":
        return Info;
      case "high":
        return AlertTriangle;
      default:
        return AlertTriangle;
    }
  };

  return (
    <div className="min-h-screen bg-light">
      <Header />

      {activeTab === "assessments" && (
        <>
          <Hero />
          <section className="py-16 px-4 max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dominant mb-4">
                Security Assessment
              </h2>
              <p className="text-lg text-slate max-w-2xl mx-auto">
                Start a comprehensive security assessment covering all
                categories in one go.
              </p>
              <button
                className="mt-8 px-6 py-3 bg-blue text-white rounded-lg font-semibold text-lg shadow hover:bg-blue-700 transition-colors"
                onClick={() => setActiveModal("single-assessment")}
              >
                Start Assessment
              </button>
            </div>
          </section>
        </>
      )}

      {activeTab === "results" && (
        <ResultsDashboard
          results={results}
          getRiskColor={getRiskColor}
          getRiskIcon={getRiskIcon}
          userDetails={userDetails || {
            name: "N/A",
            email: "N/A",
            role: "N/A",
            department: "N/A",
            company: "N/A"
          }}
        />
      )}
      {activeTab === "resources" && <ResourceCenter />}

      {/* Navigation Tabs */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-light px-4 py-3">
        <div className="flex justify-center space-x-8">
          {[
            { id: "assessments", label: "Assessments", icon: Shield },
            { id: "results", label: "Results", icon: CheckCircle },
            { id: "resources", label: "Resources", icon: Info },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() =>
                setActiveTab(id as "assessments" | "results" | "resources")
              }
              className={`flex flex-col items-center py-2 px-4 rounded-lg transition-colors ${
                activeTab === id
                  ? "text-blue bg-blue-50"
                  : "text-slate hover:text-blue hover:bg-light"
              }`}
            >
              <Icon size={20} />
              <span className="text-xs mt-1">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Assessment Modal */}
      {/* Single Assessment Modal */}
      {activeModal === "single-assessment" && (
        <SingleAssessmentModal
          categories={assessmentCategories}
          onClose={() => setActiveModal(null)}
          onComplete={(results, userDetailsFromAssessment) => {
            setResults(results);
            setUserDetails(userDetailsFromAssessment);
            setActiveTab("results");
            setActiveModal(null);
          }}
        />
      )}
    </div>
  );
}

export default App;