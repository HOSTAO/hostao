export const metadata = {
  title: "Hybrid Workplace Policy | Hostao",
  description: "Hostao hybrid workplace policy covering remote work, office collaboration, performance expectations, and security standards.",
};

export default function HybridWorkplacePolicyPage() {
  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25 mb-4 inline-block">🏠 Hybrid Workplace Policy</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Hybrid Workplace Policy</h1>
          <p className="text-white/85 text-lg">Flexible work with clear expectations for collaboration, security, and performance.</p>
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none">
          <h2>Policy Overview</h2>
          <p>Hostao operates a hybrid-first model balancing remote flexibility with structured collaboration for critical planning, incident response, and team alignment.</p>

          <h2>Work Modes</h2>
          <ul>
            <li><strong>Remote:</strong> Primary mode for many roles</li>
            <li><strong>Hybrid:</strong> Scheduled in-person collaboration based on team needs</li>
            <li><strong>On-Site:</strong> Required for specific operational roles</li>
          </ul>

          <h2>Expectations</h2>
          <ul>
            <li>Reliable availability during agreed core hours</li>
            <li>Timely communication and documented handoffs</li>
            <li>Outcome-focused performance measurement</li>
            <li>Attendance in required team and incident meetings</li>
          </ul>

          <h2>Security Requirements</h2>
          <p>Remote and hybrid workers must follow security controls including MFA, managed devices, approved VPN use, and data-handling standards.</p>

          <h2>Equipment & Workspace</h2>
          <p>Hostao provides role-appropriate equipment and guidelines for ergonomic, secure home workspaces.</p>

          <h2>Review Cycle</h2>
          <p>This policy is reviewed periodically to reflect business needs, employee feedback, and operational reliability requirements.</p>

          <p className="text-sm text-gray-500 mt-8">Last updated: March 2026</p>
        </div>
      </section>
    </div>
  );
}
