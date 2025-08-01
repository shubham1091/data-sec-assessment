import React from "react";
import { TrendingUp, Target, LucideIcon } from "lucide-react";
import { AssessmentResult } from "../App";
import { Pie, Bar } from "react-chartjs-2";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
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
  userDetails: {
    name: string;
    email: string;
    role: string;
    department: string;
    company: string;
  };
}

const ResultsDashboard: React.FC<ResultsDashboardProps> = ({
  results,
  getRiskColor,
  getRiskIcon,
  userDetails,
}) => {
  // If userDetails is not provided, use fallback values to avoid runtime errors
  const safeUserDetails = userDetails || {
    name: "N/A",
    email: "N/A",
    role: "N/A",
    department: "N/A",
    company: "N/A",
  };

  // PDF generation logic
  const handleDownloadPDF = async () => {
    const doc = new jsPDF({ unit: "pt", format: "a4" });

    // Cover header
    doc.setFillColor(29, 74, 81); // Dark teal
    doc.rect(0, 0, 595, 120, "F");
    doc.setFontSize(36);
    doc.setTextColor(255, 255, 255);
    doc.text("Security Assessment Report", 297, 70, { align: "center" });

    // User Info box
    doc.setFillColor(220, 220, 212); // Light grey
    doc.roundedRect(40, 140, 515, 140, 10, 10, "F");
    // Add user details section
    doc.setFontSize(16);
    doc.setTextColor(29, 74, 81);
    doc.text("Assessment Details:", 50, 165);
    doc.setFontSize(12);
    doc.text(`Name: ${safeUserDetails.name}`, 60, 190);
    doc.text(`Email: ${safeUserDetails.email}`, 60, 210);
    doc.text(`Role: ${safeUserDetails.role}`, 300, 190);
    doc.text(`Department: ${safeUserDetails.department}`, 300, 210);
    doc.text(`Company: ${safeUserDetails.company}`, 60, 230);
    doc.text(
      `Report Generated: ${new Date().toLocaleDateString()}`,
      300,
      230
    );

    // Summary box
    doc.setFillColor(67, 185, 140); // Green
    doc.roundedRect(40, 300, 515, 60, 8, 8, "F");
    doc.setFontSize(20);
    doc.setTextColor(255, 255, 255);
    doc.text("Summary", 50, 330);
    doc.setFontSize(14);
    const overallScore = Math.round(
      (results.reduce((sum, r) => sum + r.score / r.maxScore, 0) /
        results.length) *
        100
    );
    doc.text(`Overall Score: ${overallScore}%`, 200, 340);
    doc.text(
      `Overall Risk: ${
        results.length > 0 ? results[0].riskLevel.toUpperCase() : ""
      }`,
      400,
      340
    );

    // Charts: Pie and Bar side by side on first page
    const pieElem = document.querySelector(".results-pie-chart") as HTMLElement;
    const barElem = document.querySelector(".results-bar-chart") as HTMLElement;

    const pageWidth = doc.internal.pageSize.getWidth();
    const chartMargin = 40;
    const chartY = 380;
    const chartWidth = (pageWidth - chartMargin * 3) / 2; // side-by-side
    const chartHeight = 220;

    // PIE Chart (left side)
    if (pieElem) {
      const pieCanvas = pieElem.querySelector("canvas");
      if (pieCanvas) {
        const pieImg = await html2canvas(pieCanvas);
        const pieDataUrl = pieImg.toDataURL("image/png");

        doc.addImage(
          pieDataUrl,
          "PNG",
          chartMargin,
          chartY,
          chartWidth,
          chartHeight
        );
        doc.setFontSize(14);
        doc.setTextColor(29, 74, 81);
        doc.text(
          "Risk Distribution",
          chartMargin + chartWidth / 2,
          chartY + chartHeight + 20,
          { align: "center" }
        );
      }
    }

    // BAR Chart (right side)
    if (barElem) {
      const barCanvas = barElem.querySelector("canvas");
      if (barCanvas) {
        const barImg = await html2canvas(barCanvas);
        const barDataUrl = barImg.toDataURL("image/png");

        const barX = chartMargin * 2 + chartWidth;
        doc.addImage(barDataUrl, "PNG", barX, chartY, chartWidth, chartHeight);
        doc.setFontSize(14);
        doc.setTextColor(29, 74, 81);
        doc.text(
          "Category Scores",
          barX + chartWidth / 2,
          chartY + chartHeight + 20,
          { align: "center" }
        );
      }
    }

    // Detailed results: each category on a new page
    results.forEach((result) => {
      doc.addPage();
      doc.setFillColor(255, 255, 255);
      doc.rect(0, 0, 595, 842, "F");
      doc.setFontSize(28);
      doc.setTextColor(29, 74, 81);
      doc.text(result.category, 297, 60, { align: "center" });

      doc.setFontSize(16);
      doc.text(
        `Score: ${result.score}/${result.maxScore} (${Math.round(
          (result.score / result.maxScore) * 100
        )}%)`,
        60,
        110
      );
      doc.text(`Risk Level: ${result.riskLevel.toUpperCase()}`, 60, 140);

      // Recommendations
      doc.setFontSize(15);
      doc.text("Recommendations:", 60, 180);
      let recY = 210;
      result.recommendations.slice(0, 3).forEach((rec) => {
        const bullet = `• ${rec}`;
        const wrapped: string[] = doc.splitTextToSize(bullet, 440);
        wrapped.forEach((line: string, idx: number) => {
          doc.text(line, 80, recY + idx * 22);
        });
        recY += wrapped.length * 22 + 18;
      });
    });

    doc.save("Security-Assessment-Report.pdf");
  };

  if (results.length === 0) {
    return (
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 bg-light rounded-full flex items-center justify-center mx-auto mb-6">
            <TrendingUp className="w-12 h-12 text-slate" />
          </div>
          <h2 className="text-3xl font-bold text-dominant mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate mb-8">
            Take a few quick assessments to see how you're doing with security
            and get personalized tips
          </p>
        </div>
      </div>
    );
  }

  const averageScore =
    results.reduce((sum, result) => sum + result.score / result.maxScore, 0) /
    results.length;
  const overallRisk =
    averageScore >= 0.9
      ? "low"
      : averageScore >= 0.7
      ? "medium"
      : averageScore >= 0.5
      ? "high"
      : "critical";

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
            <div className="bg-light rounded-xl p-4 flex flex-col items-center results-pie-chart">
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
            <div className="bg-light rounded-xl p-4 flex flex-col items-center results-bar-chart">
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

          {/* Show all four risk areas below the chart */}
          <div className="grid md:grid-cols-4 gap-6 mt-4">
            {["low", "medium", "high", "critical"].map((risk) => (
              <div
                key={risk}
                className="text-center p-4 bg-light rounded-lg"
              >
                <div
                  className={`text-2xl font-bold mb-1 ${getRiskColor(risk)}`}
                >
                  {riskCounts[risk] || 0}
                </div>
                <div className="text-sm text-slate capitalize">
                  {risk.charAt(0).toUpperCase() + risk.slice(1)} Risk Areas
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
      {/* Download PDF Button */}
      <div className="flex justify-center mt-12 mb-4">
        <button
          className="px-8 py-4 bg-dominant text-white rounded-xl shadow-lg text-xl font-bold hover:bg-blue transition-colors border-2 border-blue"
          style={{ fontFamily: "serif", letterSpacing: "0.03em" }}
          onClick={handleDownloadPDF}
        >
          Download Business Report (PDF)
        </button>
      </div>
    </div>
  );
};

export default ResultsDashboard;
