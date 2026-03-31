export const metadata = {
  title: "Actionable Feedback Policy | Hostao",
  description: "How Hostao collects, reviews, prioritizes, and acts on customer feedback to improve products and support.",
};

export default function ActionableFeedbackPolicyPage() {
  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25 mb-4 inline-block">📝 Actionable Feedback Policy</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Actionable Feedback Policy</h1>
          <p className="text-white/85 text-lg">We turn customer feedback into measurable product improvements.</p>
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none">
          <h2>Purpose</h2>
          <p>This policy defines how Hostao gathers and converts feedback into practical actions that improve reliability, usability, and customer outcomes.</p>

          <h2>Feedback Channels</h2>
          <ul>
            <li>Support tickets and chat transcripts</li>
            <li>Customer surveys and NPS responses</li>
            <li>Sales calls and onboarding sessions</li>
            <li>Public community comments and social mentions</li>
          </ul>

          <h2>Actionability Criteria</h2>
          <p>Feedback is considered actionable when it is specific, reproducible, and tied to measurable impact (e.g., uptime, speed, support resolution time, churn risk).</p>

          <h2>Prioritization Framework</h2>
          <ul>
            <li>Severity of customer pain</li>
            <li>Number of affected users</li>
            <li>Business and compliance impact</li>
            <li>Implementation effort and risk</li>
          </ul>

          <h2>Response Standards</h2>
          <p>We acknowledge feedback promptly and provide transparent status updates: received, in review, planned, in progress, or completed.</p>

          <h2>Closing the Loop</h2>
          <p>When feedback results in a change, we communicate outcomes through release notes, support updates, or direct outreach to affected customers.</p>

          <h2>Governance</h2>
          <p>Product, support, and engineering teams review high-impact feedback weekly. Leadership reviews trends monthly to ensure accountability.</p>

          <p className="text-sm text-gray-500 mt-8">Last updated: March 2026</p>
        </div>
      </section>
    </div>
  );
}
