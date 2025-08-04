import React from 'react';
import { TrendingUp, Target, LucideIcon } from "lucide-react";
import { AssessmentResult } from '../App';
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

interface ResultsDashboardProps {
  results: AssessmentResult[];
  getRiskColor: (riskLevel: string) => string;
  getRiskIcon: (riskLevel: string) => LucideIcon;
}

const ResultsDashboard: React.FC<ResultsDashboardProps> = ({
  results,
  getRiskColor,
  getRiskIcon
}) => {
  if (results.length === 0) {
    return (
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 bg-light rounded-full flex items-center justify-center mx-auto mb-6">
            <TrendingUp className="w-12 h-12 text-slate" />
          </div>
          <h2 className="text-3xl font-bold text-dominant mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-slate mb-8">
            Take a few quick assessments to see how you're doing with security and get personalized tips
          </p>
        </div>
      </div>
    );
  }

  const averageScore = results.reduce((sum, result) => sum + (result.score / result.maxScore), 0) / results.length;
  const overallRisk = averageScore >= 0.9 ? 'low' : averageScore >= 0.7 ? 'medium' : averageScore >= 0.5 ? 'high' : 'critical';
  
  const riskCounts = results.reduce((acc, result) => {
    acc[result.riskLevel] = (acc[result.riskLevel] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="py-16 px-4 pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dominant mb-4">
            Your Security Results
          </h2>
          <p className="text-lg text-slate">
            Here's how you're doing with security practices and what you can
            improve
          </p>
        </div>
        {/* Overall Score & Charts */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue to-teal rounded-full mb-4">
              <span className="text-2xl font-bold">
                {Math.round(averageScore * 100)}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-dominant mb-2">
              Overall Security Score
            </h3>
            <div
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${
                overallRisk === "low"
                  ? "bg-accent-green bg-opacity-20"
                  : overallRisk === "medium"
                  ? "bg-slate bg-opacity-20"
                  : overallRisk === "high"
                  ? "bg-blue bg-opacity-20"
                  : "bg-dominant bg-opacity-20"
              }`}
            >
              {React.createElement(getRiskIcon(overallRisk), { size: 16 })}
              <span className="font-medium capitalize">
                {overallRisk === "low"
                  ? "Great Job!"
                  : overallRisk === "medium"
                  ? "Good Progress"
                  : overallRisk === "high"
                  ? "Needs Attention"
                  : "Action Required"}
              </span>
            </div>
          </div>
          {/* Charts Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Pie Chart: Risk Distribution */}
            <div className="bg-light rounded-xl p-4 flex flex-col items-center">
              <h4 className="text-lg font-semibold text-dominant mb-2">
                Risk Distribution
              </h4>
              <Pie
                data={{
                  labels: ["Low", "Medium", "High", "Critical"],
                  datasets: [
                    {
                      data: [
                        results.filter((r) => r.riskLevel === "low").length,
                        results.filter((r) => r.riskLevel === "medium").length,
                        results.filter((r) => r.riskLevel === "high").length,
                        results.filter((r) => r.riskLevel === "critical")
                          .length,
                      ],
                      backgroundColor: [
                        "#22c55e", // green
                        "#64748b", // slate
                        "#2563eb", // blue
                        "#1e293b", // dominant
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
              />
            </div>
            {/* Bar Chart: Category Scores */}
            <div className="bg-light rounded-xl p-4 flex flex-col items-center">
              <h4 className="text-lg font-semibold text-dominant mb-2">
                Category Scores
              </h4>
              <Bar
                data={{
                  labels: results.map((r) => r.category),
                  datasets: [
                    {
                      label: "Score (%)",
                      data: results.map((r) =>
                        Math.round((r.score / r.maxScore) * 100)
                      ),
                      backgroundColor: "#2563eb",
                    },
                  ],
                }}
                options={{
                  scales: {
                    y: {
                      beginAtZero: true,
                      max: 100,
                    },
                  },
                }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {Object.entries(riskCounts).map(([risk, count]) => (
              <div
                key={risk}
                className="text-center p-4 bg-light rounded-lg"
              >
                <div
                  className={`text-2xl font-bold mb-1 ${getRiskColor(risk)}`}
                >
                  {count}
                </div>
                <div className="text-sm text-slate capitalize">
                  {risk} Risk Areas
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Individual Results */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {results.map((result, index) => {
            const RiskIcon = getRiskIcon(result.riskLevel);
            const percentage = Math.round(
              (result.score / result.maxScore) * 100
            );

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-dominant">
                    {result.category}
                  </h3>
                  <div
                    className={`flex items-center space-x-1 ${getRiskColor(
                      result.riskLevel
                    )}`}
                  >
                    <RiskIcon size={16} />
                    <span className="text-sm font-medium capitalize">
                      {result.riskLevel}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-slate mb-2">
                    <span>
                      Score: {result.score}/{result.maxScore}
                    </span>
                    <span>{percentage}%</span>
                  </div>
                  <div className="w-full bg-light rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-500 ${
                        result.riskLevel === "low"
                          ? "bg-accent-green"
                          : result.riskLevel === "medium"
                          ? "bg-slate"
                          : result.riskLevel === "high"
                          ? "bg-blue"
                          : "bg-dominant"
                      }`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-dominant mb-2">
                    Key Recommendations:
                  </h4>
                  <ul className="space-y-1">
                    {result.recommendations.slice(0, 3).map((rec, i) => (
                      <li
                        key={i}
                        className="text-sm text-slate flex items-start space-x-2"
                      >
                        <Target
                          size={12}
                          className="mt-1 text-blue flex-shrink-0"
                        />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-4 border-t border-light">
                  <div className="text-xs text-slate">
                    Completed: {result.completedAt.toLocaleDateString()}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Items */}
      </div>
    </div>
  );
};

export default ResultsDashboard;