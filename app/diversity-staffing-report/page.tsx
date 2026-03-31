export const metadata = {
  title: "Diversity Staffing Report | Hostao",
  description: "Hostao diversity staffing report with representation goals, progress indicators, and workforce inclusion commitments.",
};

const METRICS = [
  { label: "Women in workforce", value: "41%", note: "Global blended headcount" },
  { label: "Underrepresented groups in leadership", value: "29%", note: "Director level and above" },
  { label: "New hires from underrepresented talent pools", value: "47%", note: "Last 12 months" },
  { label: "Interview panels with diverse representation", value: "91%", note: "Structured hiring process" },
];

export default function DiversityStaffingReportPage() {
  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25 mb-4 inline-block">📊 Diversity Staffing Report</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Diversity Staffing Report</h1>
          <p className="text-white/85 text-lg">Progress reporting on representation, hiring practices, and inclusion outcomes.</p>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Key Indicators</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Current Snapshot</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {METRICS.map((m) => (
              <div key={m.label} className="bg-white border border-gray-200 rounded-xl p-5 text-center card-hover">
                <div className="text-3xl font-extrabold text-[#0056A7] mb-1">{m.value}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{m.label}</h3>
                <p className="text-xs text-gray-500">{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none">
          <h2>Methodology</h2>
          <p>Metrics are based on voluntary self-identification data where legally permitted and available, combined with HRIS records and hiring pipeline analysis.</p>

          <h2>What We&apos;re Improving</h2>
          <ul>
            <li>Broader sourcing partnerships and community outreach</li>
            <li>Structured interviews and calibrated assessment rubrics</li>
            <li>Mentorship and leadership pathways for underrepresented employees</li>
            <li>Manager training for equitable performance reviews</li>
          </ul>

          <h2>Limitations</h2>
          <p>Regional legal restrictions and voluntary disclosure rates can affect the completeness of demographic reporting.</p>

          <h2>Reporting Frequency</h2>
          <p>Hostao publishes diversity staffing updates at least annually, with interim progress reviews shared internally.</p>

          <p className="text-sm text-gray-500 mt-8">Last updated: March 2026</p>
        </div>
      </section>
    </div>
  );
}
